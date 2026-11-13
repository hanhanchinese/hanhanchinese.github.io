/* Đăng nhập học sinh bằng Google (Firebase Authentication)
   và đồng bộ tiến độ học (các mục lưu trong localStorage) lên Firestore: users/{uid}. */
const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
const box = document.getElementById('hh-auth');
const msg = document.getElementById('hh-auth-msg');
const btn = document.getElementById('hh-auth-btn');
const UIDKEY = 'hh__uid';
const isAppKey = k => k !== UIDKEY && (k.startsWith('hh') || k.startsWith('hsk3-'));
const say = (t, bad) => { msg.textContent = t; msg.className = bad ? 'bad' : ''; };

function unlock() { box.hidden = true; document.documentElement.classList.remove('hh-locked'); }
function lock() { box.hidden = false; document.documentElement.classList.add('hh-locked'); }

function appKeys() { const o = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (isAppKey(k)) o.push(k); } return o; }
function snapshot() { const d = {}; appKeys().forEach(k => { const v = localStorage.getItem(k); if (v != null && v.length < 200000) d[k] = v; }); return d; }

const cfg = window.HH_FIREBASE_CONFIG;
if (!cfg) {
  /* Chưa có cấu hình Firebase: tạm cho vào app không cần đăng nhập. */
  unlock();
} else {
  const [{ initializeApp }, A, F] = await Promise.all([
    import(SDK + 'firebase-app.js'), import(SDK + 'firebase-auth.js'), import(SDK + 'firebase-firestore.js')
  ]);
  const app = initializeApp(cfg);
  const auth = A.getAuth(app);
  const db = F.getFirestore(app);
  const provider = new A.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  A.getRedirectResult(auth).catch(e => say(errText(e), true));

  const inApp = /FBAN|FBAV|Zalo|Instagram|Line\//i.test(navigator.userAgent);
  if (inApp) say('Bạn đang mở trong Zalo hoặc Facebook. Google không cho đăng nhập ở đây: hãy bấm ⋯ rồi chọn “Mở bằng trình duyệt”.', true);

  btn.onclick = async () => {
    btn.disabled = true; say('Đang mở cửa sổ đăng nhập Google…');
    try { await A.signInWithPopup(auth, provider); }
    catch (e) {
      if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') { await A.signInWithRedirect(auth, provider); return; }
      say(errText(e), true);
    } finally { btn.disabled = false; }
  };

  let ref = null, timer = 0, last = '';
  const push = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      if (!ref) return;
      const data = snapshot(), s = JSON.stringify(data);
      if (s === last) return;
      try { await F.setDoc(ref, { data, updatedAt: F.serverTimestamp() }, { merge: true }); last = s; } catch (e) { console.warn('HanHan: chưa lưu được tiến độ', e); }
    }, 2000);
  };
  const set0 = Storage.prototype.setItem, rm0 = Storage.prototype.removeItem;
  Storage.prototype.setItem = function (k, v) { set0.call(this, k, v); if (this === localStorage && isAppKey(k)) push(); };
  Storage.prototype.removeItem = function (k) { rm0.call(this, k); if (this === localStorage && isAppKey(k)) push(); };
  window.addEventListener('pagehide', () => { if (ref) { clearTimeout(timer); const data = snapshot(); if (JSON.stringify(data) !== last) F.setDoc(ref, { data, updatedAt: F.serverTimestamp() }, { merge: true }); } });

  A.onAuthStateChanged(auth, async user => {
    if (!user) { ref = null; chip(null); lock(); if (!inApp) say(''); return; }
    say('Đang tải tiến độ học của bạn…');
    ref = F.doc(db, 'users', user.uid);
    let changed = false;
    try {
      const prev = localStorage.getItem(UIDKEY);
      if (prev && prev !== user.uid) { appKeys().forEach(k => rm0.call(localStorage, k)); changed = true; }
      set0.call(localStorage, UIDKEY, user.uid);
      const snap = await F.getDoc(ref);
      const remote = snap.exists() ? (snap.data().data || {}) : {};
      for (const [k, v] of Object.entries(remote)) {
        if (isAppKey(k) && localStorage.getItem(k) !== v) { set0.call(localStorage, k, v); changed = true; }
      }
      await F.setDoc(ref, { name: user.displayName || '', email: user.email || '', photo: user.photoURL || '', lastLogin: F.serverTimestamp() }, { merge: true });
      last = JSON.stringify(remote);
      push();
    } catch (e) { console.warn('HanHan: lỗi đồng bộ', e); say('Đã đăng nhập, nhưng chưa tải được tiến độ đã lưu. Kiểm tra mạng rồi tải lại trang.', true); }
    const flag = 'hh__synced_' + user.uid;
    if (changed && sessionStorage.getItem(flag) !== '1') { sessionStorage.setItem(flag, '1'); location.reload(); return; }
    sessionStorage.setItem(flag, '1');
    chip(user, () => A.signOut(auth));
    unlock();
  });

  async function onSignOut(doOut) {
    clearTimeout(timer);
    if (ref) { try { await F.setDoc(ref, { data: snapshot(), updatedAt: F.serverTimestamp() }, { merge: true }); } catch (e) {} }
    ref = null;
    appKeys().forEach(k => rm0.call(localStorage, k)); rm0.call(localStorage, UIDKEY);
    Object.keys(sessionStorage).filter(k => k.startsWith('hh__synced_')).forEach(k => sessionStorage.removeItem(k));
    await doOut(); location.reload();
  }

  function chip(user, doOut) {
    let c = document.getElementById('hh-user');
    if (!user) { if (c) c.remove(); return; }
    if (!c) {
      c = document.createElement('div'); c.id = 'hh-user';
      const host = document.querySelector('header .top') || document.body; host.appendChild(c);
    }
    c.innerHTML = '';
    if (user.photoURL) { const im = document.createElement('img'); im.src = user.photoURL; im.alt = ''; im.referrerPolicy = 'no-referrer'; c.appendChild(im); }
    const nm = document.createElement('span'); nm.textContent = (user.displayName || user.email || 'Học sinh').split(' ').slice(-1)[0]; c.appendChild(nm);
    const b = document.createElement('button'); b.type = 'button'; b.textContent = 'Đăng xuất'; b.onclick = () => onSignOut(doOut); c.appendChild(b);
    c.title = user.email || '';
  }

  function errText(e) {
    const c = (e && e.code) || '';
    if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return 'Bạn đã đóng cửa sổ đăng nhập. Bấm lại nút để thử lần nữa.';
    if (c === 'auth/unauthorized-domain') return 'Tên miền này chưa được cho phép trong Firebase (Authentication › Settings › Authorized domains).';
    if (c === 'auth/network-request-failed') return 'Không có kết nối mạng. Kiểm tra mạng rồi thử lại.';
    return 'Chưa đăng nhập được (' + (c || 'lỗi không rõ') + '). Hãy thử lại.';
  }
}
