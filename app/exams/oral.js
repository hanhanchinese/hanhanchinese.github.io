/* ===== Đề mẫu khẩu ngữ HSK (口语样卷) ===== */
(function(){
window.hhAud=window.hhAud||function(b,id){const f=document.createElement('iframe');f.src='https://drive.google.com/file/d/'+id+'/preview';f.allow='autoplay';f.title='File nghe';f.style.cssText='width:100%;height:80px;border:0;border-radius:10px';b.replaceWith(f);};
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=id=>document.getElementById(id);
const EX=[
{lv:3,title:'Đề mẫu khẩu ngữ HSK 3',zh:'HSK（三级）口语样卷',audio:'139EsKoo9I9cCfSSKmEGbadleSkzi_Bg6',
 intro:'Gồm <b>15 câu, khoảng 15 phút</b> (kể cả 6 phút chuẩn bị): nghe và nhắc lại 8 câu, nhìn tranh nói 5 câu, trả lời 2 câu hỏi.',
 parts:[
  {h:'Phần 1 · Nghe và nhắc lại (câu 1–8)',d:'Bật file nghe gốc, nghe từng câu rồi nhắc lại ngay. Mỗi câu có <b>10 giây</b> để nói.',q:[1,2,3,4,5,6,7,8].map(n=>({n,sec:10}))},
  {h:'Phần 2 · Nhìn tranh nói (câu 9–13)',d:'Nhìn tranh, nói một câu miêu tả nội dung tranh. Mỗi câu có <b>15 giây</b>.',q:[
    {n:9,sec:15,img:'o3-9.webp',alt:'Một người đàn ông mặc vest đang đọc báo',ref:[['他正在看报纸。','Tā zhèngzài kàn bàozhǐ.','Anh ấy đang đọc báo.'],['他每天早上都看报纸。','Tā měi tiān zǎoshang dōu kàn bàozhǐ.','Sáng nào anh ấy cũng đọc báo.']]},
    {n:10,sec:15,img:'o3-10.webp',alt:'Một cậu bé đang dụi mắt khóc',ref:[['这个孩子哭了。','Zhège háizi kū le.','Đứa trẻ này khóc rồi.'],['小男孩很难过，他在哭。','Xiǎo nánhái hěn nánguò, tā zài kū.','Cậu bé rất buồn, cậu ấy đang khóc.']]},
    {n:11,sec:15,img:'o3-11.webp',alt:'Hai nhân viên phục vụ mặc tạp dề đang mời khách',ref:[['欢迎光临！请进。','Huānyíng guānglín! Qǐng jìn.','Hoan nghênh quý khách! Mời vào.'],['他们是服务员，在欢迎客人。','Tāmen shì fúwùyuán, zài huānyíng kèrén.','Họ là nhân viên phục vụ, đang chào đón khách.']]},
    {n:12,sec:15,img:'o3-12.webp',alt:'Một phụ nữ mở nắp capô ô tô và gọi điện thoại',ref:[['她的车坏了，她在打电话。','Tā de chē huài le, tā zài dǎ diànhuà.','Xe của cô ấy hỏng rồi, cô ấy đang gọi điện thoại.'],['车有问题，她正在找人帮忙。','Chē yǒu wèntí, tā zhèngzài zhǎo rén bāngmáng.','Xe có vấn đề, cô ấy đang tìm người giúp.']]},
    {n:13,sec:15,img:'o3-13.webp',alt:'Hai người đang tìm sách trong thư viện',ref:[['他们在图书馆找书。','Tāmen zài túshūguǎn zhǎo shū.','Họ đang tìm sách ở thư viện.'],['她拿着一本书，在图书馆看书。','Tā názhe yì běn shū, zài túshūguǎn kàn shū.','Cô ấy cầm một quyển sách, đang đọc sách ở thư viện.']]}]},
  {h:'Phần 3 · Trả lời câu hỏi (câu 14–15)',d:'Mỗi câu có <b>3 phút chuẩn bị</b> và <b>1,5 phút trả lời</b>. Nên nói thành đoạn: mở ý, 2–3 chi tiết, câu kết.',q:[
    {n:14,sec:90,prep:180,zh:'请介绍一下你的一位家人。',ref:[['我想介绍一下我的妈妈。','Wǒ xiǎng jièshào yíxià wǒ de māma.','Mình muốn giới thiệu về mẹ mình.'],['她今年四十五岁，是一名老师。','Tā jīnnián sìshíwǔ suì, shì yì míng lǎoshī.','Năm nay mẹ 45 tuổi, là giáo viên.'],['她个子不高，长头发，总是笑着。','Tā gèzi bù gāo, cháng tóufa, zǒngshì xiàozhe.','Mẹ không cao, tóc dài, lúc nào cũng tươi cười.'],['她工作很忙，可是每天都给我们做好吃的饭菜。','Tā gōngzuò hěn máng, kěshì měi tiān dōu gěi wǒmen zuò hǎochī de fàncài.','Mẹ bận việc nhưng ngày nào cũng nấu món ngon cho cả nhà.'],['我学习有问题的时候，她会很耐心地帮助我。','Wǒ xuéxí yǒu wèntí de shíhou, tā huì hěn nàixīn de bāngzhù wǒ.','Khi mình gặp khó khăn trong học tập, mẹ kiên nhẫn giúp mình.'],['我很爱我的妈妈，她是对我最重要的人。','Wǒ hěn ài wǒ de māma, tā shì duì wǒ zuì zhòngyào de rén.','Mình rất yêu mẹ, mẹ là người quan trọng nhất với mình.']]},
    {n:15,sec:90,prep:180,zh:'你喜欢做什么样的工作？为什么？',ref:[['我喜欢当老师。','Wǒ xǐhuan dāng lǎoshī.','Mình thích làm giáo viên.'],['第一，我很喜欢跟孩子们在一起，他们又可爱又聪明。','Dì-yī, wǒ hěn xǐhuan gēn háizimen zài yìqǐ, tāmen yòu kě\'ài yòu cōngming.','Thứ nhất, mình rất thích ở cùng trẻ con, các em vừa đáng yêu vừa thông minh.'],['第二，老师可以帮助别人学习新的知识，我觉得这个工作很有意义。','Dì-èr, lǎoshī kěyǐ bāngzhù biérén xuéxí xīn de zhīshi, wǒ juéde zhège gōngzuò hěn yǒu yìyì.','Thứ hai, giáo viên giúp người khác học kiến thức mới, mình thấy công việc này rất ý nghĩa.'],['第三，老师每年有寒假和暑假，可以去旅游。','Dì-sān, lǎoshī měi nián yǒu hánjià hé shǔjià, kěyǐ qù lǚyóu.','Thứ ba, giáo viên mỗi năm có nghỉ đông và nghỉ hè, có thể đi du lịch.'],['所以，我以后想当一名好老师。','Suǒyǐ, wǒ yǐhòu xiǎng dāng yì míng hǎo lǎoshī.','Vì vậy, sau này mình muốn trở thành một giáo viên giỏi.']]}]}
 ]}
];
let CUR=0,REC=null,TM=null;
function css(){if($('orcss'))return;const s=document.createElement('style');s.id='orcss';s.textContent=`
#xor .oq{margin:10px 0;padding:10px 12px;border:1px solid var(--line,#eee);border-radius:12px;background:var(--card,#fff)}
#xor .oq b.n{color:var(--red,#c62828);margin-right:6px}
#xor .oimg{width:100%;max-width:300px;height:auto;display:block;margin:8px 0;border-radius:10px;border:1px solid #eee}
#xor .oref{margin-top:8px;padding:10px 12px;border-radius:10px;background:#fff8e1;border:1px dashed #f9a825;line-height:1.7}
#xor .oref p{margin:4px 0}#xor .oref .py{display:block;color:var(--mut,#777);font-size:14px}
#xor .ox{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}
#xor .otm{background:var(--red,#c62828);color:#fff;padding:4px 10px;border-radius:8px;font-weight:600}`;document.head.appendChild(s);}
function render(){css();const b=$('xor');if(!b)return;const E=EX[CUR];
  let h=`<div class='card'><h3 style='margin-top:0'>Đề mẫu khẩu ngữ HSK <span class='han'>口语样卷</span></h3><p>Đề mẫu chính thức phần thi nói. Có file nghe gốc, ghi âm để tự nghe lại và câu trả lời mẫu tham khảo do HanHan soạn (đề không kèm đáp án).</p>
  <div class='ox'>${EX.map((e,i)=>`<button class='btn ${i===CUR?'':'ghost'}' onclick='orPick(${i})'>Khẩu ngữ HSK ${e.lv}</button>`).join('')}</div></div>`;
  h+=`<div class='card'><h3 style='margin-top:0'>${E.title} <span class='han'>${E.zh}</span></h3><p>${E.intro}</p><b>🎧 File nghe gốc</b><p style='margin:4px 0 8px;color:var(--mut);font-size:14px'>Bật file nghe và làm theo hướng dẫn trong file. Nếu trình phát không hiện, <a href='https://drive.google.com/file/d/${E.audio}/view' target='_blank' rel='noopener' style='color:var(--red)'>mở file trên Google Drive</a>.</p><button class='btn' onclick="hhAud(this,'${E.audio}')">▶ Mở trình phát file nghe</button></div>`;
  E.parts.forEach(P=>{h+=`<h3>${P.h}</h3><p style='color:var(--mut);margin-top:0'>${P.d}</p>`;
    P.q.forEach(q=>{h+=`<div class='oq'><b class='n'>${q.n}.</b>${q.zh?`<span class='han' style='font-size:18px'>${esc(q.zh)}</span>`:''}${q.img?`<img class='oimg' src='exams/${q.img}' alt='${esc(q.alt)}' loading='lazy'>`:''}${!q.zh&&!q.img?`<span style='color:var(--mut)'>Nghe câu ${q.n} trong file nghe rồi nhắc lại.</span>`:''}
      <div style='display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px'>${q.prep?`<button class='btn ghost' onclick='orPrep(${q.n},${q.prep})'>⏱ Chuẩn bị ${q.prep/60} phút</button>`:''}<button class='btn' id='orb${q.n}' onclick='orRec(${q.n},${q.sec})'>🎙 Ghi âm (${q.sec>=60?(q.sec/60).toString().replace('.',',')+' phút':q.sec+' giây'})</button><span id='ors${q.n}' style='color:var(--mut)'></span><audio id='ora${q.n}' controls style='display:none;max-width:100%'></audio></div>
      ${q.ref?`<details style='margin-top:8px'><summary style='cursor:pointer;color:var(--red);font-weight:600'>Xem câu trả lời mẫu</summary><div class='oref'>${q.ref.map(r=>`<p><span class='han' style='font-size:17px'>${esc(r[0])}</span><span class='py'>${esc(r[1])}</span><span style='font-size:14px'>${esc(r[2])}</span></p>`).join('')}</div></details>`:''}</div>`;});});
  h+=`<div class='card' style='color:var(--mut);font-size:14px'>Bản ghi âm chỉ lưu tạm trên trình duyệt trong lúc bạn mở trang, không gửi đi đâu. Lần đầu ghi âm, trình duyệt sẽ hỏi quyền dùng micro.</div>`;
  b.innerHTML=h;}
window.orPick=i=>{CUR=i;render();$('xor').scrollIntoView({behavior:'smooth',block:'start'});};
window.orPrep=function(n,sec){if(TM)clearInterval(TM.iv);const s=$('ors'+n);let left=sec;const tick=()=>{if(s)s.innerHTML=`<span class='otm'>Chuẩn bị: ${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}</span>`;if(left<=0){clearInterval(TM.iv);TM=null;if(s)s.textContent='Hết giờ chuẩn bị, bấm 🎙 để trả lời.';}left--;};TM={iv:setInterval(tick,1000)};tick();};
window.orRec=async function(n,sec){if(REC){const r=REC;REC=null;try{r.mr.stop();}catch(e){}return;}
  if(!navigator.mediaDevices||!window.MediaRecorder){alert('Trình duyệt này không hỗ trợ ghi âm.');return;}
  let st;try{st=await navigator.mediaDevices.getUserMedia({audio:true});}catch(e){alert('Không mở được micro. Hãy cho phép trình duyệt dùng micro rồi thử lại.');return;}
  if(TM){clearInterval(TM.iv);TM=null;}
  const mr=new MediaRecorder(st),ch=[],b=$('orb'+n),s=$('ors'+n);let left=sec,iv;
  mr.ondataavailable=e=>ch.push(e.data);
  mr.onstop=()=>{st.getTracks().forEach(t=>t.stop());clearInterval(iv);const a=$('ora'+n);if(a){a.src=URL.createObjectURL(new Blob(ch,{type:mr.mimeType||'audio/webm'}));a.style.display='';}if(b)b.textContent='🎙 Ghi âm lại';if(s)s.textContent='Đã ghi xong, bấm ▶ để nghe lại.';REC=null;};
  mr.start();REC={mr};if(b)b.textContent='⏹ Dừng';if(s)s.textContent='Đang ghi… còn '+left+' giây';
  iv=setInterval(()=>{left--;if(s)s.textContent='Đang ghi… còn '+left+' giây';if(left<=0&&REC&&REC.mr===mr){REC=null;mr.stop();}},1000);};
window.orInit=function(){const b=$('xor');if(b&&!b.dataset.on){b.dataset.on=1;render();}};
orInit();
})();
