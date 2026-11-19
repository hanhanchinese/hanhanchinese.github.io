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
,{lv:4,title:'Đề mẫu khẩu ngữ HSK 4',zh:'HSK（四级）口语样卷',audio:'1Dm1ZgdkNN0_pZx2K1o3pA-Fsl7XiHhX5',
 intro:'Gồm <b>5 câu, khoảng 20 phút</b> (kể cả 10 phút chuẩn bị): nghe và kể lại 2 câu, nhìn tranh kể chuyện 1 câu, trả lời 2 câu hỏi.',
 parts:[
  {h:'Phần 1 · Nghe và kể lại (câu 1–2)',d:'Bật file nghe gốc, nghe đoạn văn rồi dùng lời của mình kể lại nội dung chính. Mỗi câu có <b>40 giây</b> để nói.',q:[1,2].map(n=>({n,sec:40}))},
  {h:'Phần 2 · Nhìn tranh kể chuyện (câu 3)',d:'Nhìn 3 tranh theo thứ tự, kể thành một câu chuyện liền mạch. <b>Chuẩn bị 3 phút, nói 2 phút.</b>',q:[
    {n:3,sec:120,prep:180,imgs:[['o4-3-1.webp','Tranh 1: các bạn sinh viên cùng học trong lớp'],['o4-3-2.webp','Tranh 2: sinh viên mặc áo cử nhân tung mũ ăn mừng tốt nghiệp'],['o4-3-3.webp','Tranh 3: nhóm bạn trẻ nâng ly nói cười vui vẻ']],ref:[
     ['小王、小李和几个同学是大学里最好的朋友。','Xiǎo Wáng, Xiǎo Lǐ hé jǐ ge tóngxué shì dàxué li zuì hǎo de péngyou.','Tiểu Vương, Tiểu Lý và mấy bạn cùng lớp là đôi bạn thân nhất ở đại học.'],
     ['上大学的时候，他们常常一起在教室里学习，遇到不懂的问题就互相帮助。','Shàng dàxué de shíhou, tāmen chángcháng yìqǐ zài jiàoshì li xuéxí, yùdào bù dǒng de wèntí jiù hùxiāng bāngzhù.','Hồi đại học, họ thường cùng học trong lớp, gặp chỗ không hiểu thì giúp đỡ lẫn nhau.'],
     ['四年很快就过去了。毕业那天，大家穿上学士服，高兴地把帽子扔到了空中。','Sì nián hěn kuài jiù guòqu le. Bìyè nà tiān, dàjiā chuānshang xuéshìfú, gāoxìng de bǎ màozi rēngdàole kōngzhōng.','Bốn năm trôi qua rất nhanh. Ngày tốt nghiệp, mọi người mặc áo cử nhân, vui vẻ tung mũ lên trời.'],
     ['毕业以后，他们在不同的城市工作，但是一直保持联系。','Bìyè yǐhòu, tāmen zài bù tóng de chéngshì gōngzuò, dànshì yìzhí bǎochí liánxì.','Sau khi tốt nghiệp, họ làm việc ở những thành phố khác nhau nhưng vẫn luôn giữ liên lạc.'],
     ['每年放假的时候，大家都会聚在一起，一边喝饮料，一边聊工作和生活，大家都觉得非常开心。','Měi nián fàngjià de shíhou, dàjiā dōu huì jù zài yìqǐ, yìbiān hē yǐnliào, yìbiān liáo gōngzuò hé shēnghuó, dàjiā dōu juéde fēicháng kāixīn.','Mỗi năm vào kỳ nghỉ, mọi người lại tụ họp, vừa uống nước vừa chuyện trò về công việc và cuộc sống, ai cũng thấy rất vui.'],
     ['他们觉得，大学时的友谊是最珍贵的。','Tāmen juéde, dàxué shí de yǒuyì shì zuì zhēnguì de.','Họ cảm thấy tình bạn thời đại học là quý giá nhất.']]}]},
  {h:'Phần 3 · Trả lời câu hỏi (câu 4–5)',d:'Mỗi câu có <b>3,5 phút chuẩn bị</b> và <b>2 phút trả lời</b>. Nên nói theo thứ tự: nêu ý chính → 2–3 ý cụ thể (首先、其次、最后) → câu kết.',q:[
    {n:4,sec:120,prep:210,zh:'如果给你七天假，你打算怎么安排？',ref:[
     ['如果有七天假，我打算这样安排。','Rúguǒ yǒu qī tiān jià, wǒ dǎsuan zhèyàng ānpái.','Nếu được nghỉ bảy ngày, mình định sắp xếp thế này.'],
     ['首先，前两天我要好好儿休息，睡个懒觉，把房间打扫干净。','Shǒuxiān, qián liǎng tiān wǒ yào hǎohāor xiūxi, shuì ge lǎnjiào, bǎ fángjiān dǎsǎo gānjìng.','Trước hết, hai ngày đầu mình sẽ nghỉ ngơi cho khỏe, ngủ nướng, dọn phòng sạch sẽ.'],
     ['其次，我想和家人一起去海边旅游三四天，因为平时工作太忙，很少有时间陪他们。','Qícì, wǒ xiǎng hé jiārén yìqǐ qù hǎibiān lǚyóu sān-sì tiān, yīnwèi píngshí gōngzuò tài máng, hěn shǎo yǒu shíjiān péi tāmen.','Tiếp theo, mình muốn cùng gia đình đi biển ba bốn ngày, vì bình thường bận việc, ít khi có thời gian ở bên mọi người.'],
     ['最后一天，我会在家看看书，准备一下，让自己用最好的状态回去工作。','Zuìhòu yì tiān, wǒ huì zài jiā kànkan shū, zhǔnbèi yíxià, ràng zìjǐ yòng zuì hǎo de zhuàngtài huíqu gōngzuò.','Ngày cuối, mình sẽ ở nhà đọc sách, chuẩn bị một chút để quay lại làm việc với trạng thái tốt nhất.'],
     ['我觉得这样安排既能放松，又能陪家人，非常有意义。','Wǒ juéde zhèyàng ānpái jì néng fàngsōng, yòu néng péi jiārén, fēicháng yǒu yìyì.','Mình thấy sắp xếp như vậy vừa thư giãn được, vừa ở bên gia đình, rất ý nghĩa.']]},
    {n:5,sec:120,prep:210,zh:'刚到一个新公司工作时，为了使自己更快适应环境，你会怎么做？',ref:[
     ['刚到一个新公司，我会从下面几个方面努力适应环境。','Gāng dào yí ge xīn gōngsī, wǒ huì cóng xiàmian jǐ ge fāngmiàn nǔlì shìyìng huánjìng.','Mới đến một công ty mới, mình sẽ cố gắng thích nghi theo mấy cách sau.'],
     ['首先，我会尽快了解公司的规定和自己的工作内容，有不明白的地方就主动问同事。','Shǒuxiān, wǒ huì jǐnkuài liǎojiě gōngsī de guīdìng hé zìjǐ de gōngzuò nèiróng, yǒu bù míngbai de dìfang jiù zhǔdòng wèn tóngshì.','Trước hết, mình sẽ nhanh chóng tìm hiểu quy định công ty và nội dung công việc, chỗ nào chưa hiểu thì chủ động hỏi đồng nghiệp.'],
     ['其次，我会积极和同事交流，比如中午一起吃饭，参加公司的活动，这样能很快交到朋友。','Qícì, wǒ huì jījí hé tóngshì jiāoliú, bǐrú zhōngwǔ yìqǐ chīfàn, cānjiā gōngsī de huódòng, zhèyàng néng hěn kuài jiāodào péngyou.','Tiếp theo, mình sẽ tích cực giao lưu với đồng nghiệp, ví dụ trưa cùng ăn cơm, tham gia hoạt động của công ty, như vậy sẽ nhanh có bạn.'],
     ['最后，我会认真完成每一项任务，准时上下班，让领导和同事相信我。','Zuìhòu, wǒ huì rènzhēn wánchéng měi yí xiàng rènwu, zhǔnshí shàng-xiàbān, ràng lǐngdǎo hé tóngshì xiāngxìn wǒ.','Cuối cùng, mình sẽ hoàn thành tốt từng nhiệm vụ, đi làm đúng giờ, để sếp và đồng nghiệp tin tưởng mình.'],
     ['我相信，只要态度积极，就一定能很快适应新环境。','Wǒ xiāngxìn, zhǐyào tàidu jījí, jiù yídìng néng hěn kuài shìyìng xīn huánjìng.','Mình tin chỉ cần có thái độ tích cực thì nhất định sẽ nhanh chóng thích nghi với môi trường mới.']]}]}
 ]}
,{lv:5,title:'Đề mẫu khẩu ngữ HSK 5',zh:'HSK（五级）口语样卷',audio:'1Y7ABMOTbS4gIPXiigp6SGMNQns0vQhO2',
 intro:'Gồm <b>5 câu, khoảng 23 phút</b> (kể cả 10 phút chuẩn bị): nghe và kể lại 2 câu, nhìn tranh kể chuyện 1 câu, trả lời 2 câu hỏi.',
 parts:[
  {h:'Phần 1 · Nghe và kể lại (câu 1–2)',d:'Bật file nghe gốc, nghe đoạn văn rồi dùng lời của mình kể lại nội dung chính. Mỗi câu có <b>1,5 phút</b> để nói.',q:[1,2].map(n=>({n,sec:90}))},
  {h:'Phần 2 · Nhìn tranh kể chuyện (câu 3)',d:'Nhìn 3 tranh theo thứ tự, kể thành một câu chuyện liền mạch. <b>Chuẩn bị 3 phút, nói 2 phút.</b>',q:[
    {n:3,sec:120,prep:180,imgs:[['o5-3-1.webp','Tranh 1: cậu bé ngã xe đạp ngồi dưới đất, bố ngồi xuống xem chân cho con'],['o5-3-2.webp','Tranh 2: bố vịn yên xe, chạy theo giúp con tập đạp xe'],['o5-3-3.webp','Tranh 3: cậu bé tự đạp xe, bố chạy bên cạnh mỉm cười']],ref:[
     ['周末，爸爸带儿子去公园学骑自行车。','Zhōumò, bàba dài érzi qù gōngyuán xué qí zìxíngchē.','Cuối tuần, bố đưa con trai ra công viên tập đi xe đạp.'],
     ['刚开始，儿子骑得不稳，一不小心就摔倒了，膝盖也擦破了。他坐在地上，很想哭，说再也不想学了。','Gāng kāishǐ, érzi qí de bù wěn, yí bù xiǎoxīn jiù shuāidǎo le, xīgài yě cāpò le. Tā zuò zài dìshang, hěn xiǎng kū, shuō zài yě bù xiǎng xué le.','Lúc đầu, cậu bé đạp chưa vững, sơ ý một cái là ngã, đầu gối còn bị trầy. Cậu ngồi bệt xuống đất, muốn khóc, nói không muốn học nữa.'],
     ['爸爸蹲下来，一边帮他检查伤口，一边鼓励他说：“学什么都会遇到困难，摔倒了就站起来，再试一次！”','Bàba dūn xiàlai, yìbiān bāng tā jiǎnchá shāngkǒu, yìbiān gǔlì tā shuō: “Xué shénme dōu huì yùdào kùnnan, shuāidǎo le jiù zhàn qǐlai, zài shì yí cì!”','Bố ngồi xuống, vừa xem vết thương vừa động viên: “Học gì cũng gặp khó khăn, ngã thì đứng dậy, thử lại lần nữa!”'],
     ['于是，儿子重新骑上车，爸爸在后面扶着车座，跟着他一起跑。','Yúshì, érzi chóngxīn qíshang chē, bàba zài hòumian fúzhe chēzuò, gēnzhe tā yìqǐ pǎo.','Thế là cậu bé lại lên xe, bố vịn yên xe phía sau, chạy theo con.'],
     ['练了一会儿，爸爸悄悄地放开了手。儿子自己骑了很远，他高兴极了，爸爸也在旁边开心地笑了。','Liànle yíhuìr, bàba qiāoqiāo de fàngkāile shǒu. Érzi zìjǐ qíle hěn yuǎn, tā gāoxìng jí le, bàba yě zài pángbiān kāixīn de xiào le.','Tập một lúc, bố lặng lẽ buông tay. Cậu bé tự đạp được một quãng xa, vui vô cùng, bố đứng bên cạnh cũng cười rạng rỡ.'],
     ['这件事让儿子明白了：只要不怕失败、坚持下去，就一定能成功。','Zhè jiàn shì ràng érzi míngbai le: zhǐyào bú pà shībài, jiānchí xiàqu, jiù yídìng néng chénggōng.','Chuyện này giúp cậu bé hiểu: chỉ cần không sợ thất bại và kiên trì thì nhất định sẽ thành công.']]}]},
  {h:'Phần 3 · Trả lời câu hỏi (câu 4–5)',d:'Mỗi câu có <b>3,5 phút chuẩn bị</b> và <b>2,5 phút trả lời</b>. Nên nói theo thứ tự: nêu quan điểm → 2–3 luận điểm có ví dụ → kết luận.',q:[
    {n:4,sec:150,prep:210,zh:'你认为互联网对你的生活产生了哪些影响？',ref:[
     ['我认为，互联网给我的生活带来了很大的影响，而且大部分是积极的。','Wǒ rènwéi, hùliánwǎng gěi wǒ de shēnghuó dàiláile hěn dà de yǐngxiǎng, érqiě dà bùfen shì jījí de.','Mình cho rằng internet ảnh hưởng rất lớn đến cuộc sống của mình, và phần lớn là tích cực.'],
     ['首先，学习更方便了。遇到不懂的问题，上网一查就能找到答案，我还在网上学汉语、看公开课。','Shǒuxiān, xuéxí gèng fāngbiàn le. Yùdào bù dǒng de wèntí, shàngwǎng yì chá jiù néng zhǎodào dá’àn, wǒ hái zài wǎngshang xué Hànyǔ, kàn gōngkāikè.','Trước hết, việc học tiện hơn. Gặp vấn đề không hiểu, lên mạng tra là có đáp án; mình còn học tiếng Trung, xem các khóa học mở trên mạng.'],
     ['其次，生活更便利了。买东西、点外卖、交水电费，用手机就能完成，节省了很多时间。','Qícì, shēnghuó gèng biànlì le. Mǎi dōngxi, diǎn wàimài, jiāo shuǐdiànfèi, yòng shǒujī jiù néng wánchéng, jiéshěngle hěn duō shíjiān.','Tiếp theo, cuộc sống tiện lợi hơn. Mua sắm, gọi đồ ăn, đóng tiền điện nước đều làm được trên điện thoại, tiết kiệm nhiều thời gian.'],
     ['再次，我和远方的家人朋友联系更容易了，随时可以视频聊天。','Zàicì, wǒ hé yuǎnfāng de jiārén péngyou liánxì gèng róngyì le, suíshí kěyǐ shìpín liáotiān.','Thêm nữa, liên lạc với gia đình, bạn bè ở xa dễ hơn, lúc nào cũng gọi video được.'],
     ['当然，互联网也有不好的地方，比如有时候我会花太多时间刷手机，影响休息。','Dāngrán, hùliánwǎng yě yǒu bù hǎo de dìfang, bǐrú yǒu shíhou wǒ huì huā tài duō shíjiān shuā shǒujī, yǐngxiǎng xiūxi.','Tất nhiên internet cũng có mặt không tốt, ví dụ đôi khi mình lướt điện thoại quá lâu, ảnh hưởng đến nghỉ ngơi.'],
     ['所以，我觉得关键是要合理使用互联网，让它为我们的生活服务。','Suǒyǐ, wǒ juéde guānjiàn shì yào hélǐ shǐyòng hùliánwǎng, ràng tā wèi wǒmen de shēnghuó fúwù.','Vì vậy, mình nghĩ điều quan trọng là dùng internet hợp lý, để nó phục vụ cuộc sống của chúng ta.']]},
    {n:5,sec:150,prep:210,zh:'人们常说：“活到老，学到老。”你是怎么理解这句话的？请谈谈你的看法。',ref:[
     ['“活到老，学到老”的意思是，人的一生都应该不断学习，学习没有终点。我非常同意这句话。','“Huódào lǎo, xuédào lǎo” de yìsi shì, rén de yìshēng dōu yīnggāi búduàn xuéxí, xuéxí méiyǒu zhōngdiǎn. Wǒ fēicháng tóngyì zhè jù huà.','“Học, học nữa, học mãi” có nghĩa là cả đời người đều nên không ngừng học tập, việc học không có điểm dừng. Mình rất đồng ý với câu này.'],
     ['第一，社会发展得越来越快，新知识、新技术不断出现。如果不学习，就会跟不上时代。','Dì-yī, shèhuì fāzhǎn de yuè lái yuè kuài, xīn zhīshi, xīn jìshù búduàn chūxiàn. Rúguǒ bù xuéxí, jiù huì gēn bu shàng shídài.','Thứ nhất, xã hội phát triển ngày càng nhanh, kiến thức và công nghệ mới liên tục xuất hiện. Nếu không học sẽ bị tụt lại.'],
     ['第二，学习能让生活更丰富。比如我的奶奶六十多岁了，还在学用智能手机和画画儿，她每天都很开心。','Dì-èr, xuéxí néng ràng shēnghuó gèng fēngfù. Bǐrú wǒ de nǎinai liùshí duō suì le, hái zài xué yòng zhìnéng shǒujī hé huà huàr, tā měi tiān dōu hěn kāixīn.','Thứ hai, học tập làm cuộc sống phong phú hơn. Ví dụ bà mình hơn 60 tuổi vẫn học dùng điện thoại thông minh và vẽ tranh, ngày nào bà cũng vui.'],
     ['第三，学习不只是在学校里读书，在工作和生活中向别人学习，也是一种学习。','Dì-sān, xuéxí bù zhǐ shì zài xuéxiào li dú shū, zài gōngzuò hé shēnghuó zhōng xiàng biérén xuéxí, yě shì yì zhǒng xuéxí.','Thứ ba, học không chỉ là đọc sách ở trường, học hỏi người khác trong công việc và cuộc sống cũng là học.'],
     ['总之，不管多大年纪，我们都应该保持学习的热情，这样才能让自己不断进步。','Zǒngzhī, bùguǎn duō dà niánjì, wǒmen dōu yīnggāi bǎochí xuéxí de rèqíng, zhèyàng cái néng ràng zìjǐ búduàn jìnbù.','Tóm lại, dù bao nhiêu tuổi, chúng ta đều nên giữ niềm say mê học tập, như vậy mới không ngừng tiến bộ.']]}]}
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
    P.q.forEach(q=>{h+=`<div class='oq'><b class='n'>${q.n}.</b>${q.zh?`<span class='han' style='font-size:18px'>${esc(q.zh)}</span>`:''}${q.img?`<img class='oimg' src='exams/${q.img}' alt='${esc(q.alt)}' loading='lazy'>`:''}${q.imgs?`<div style='display:flex;flex-wrap:wrap;gap:8px;margin:8px 0'>${q.imgs.map((m,i)=>`<figure style='margin:0;flex:1 1 140px;max-width:260px'><img class='oimg' style='margin:0;max-width:100%' src='exams/${m[0]}' alt='${esc(m[1])}' loading='lazy'><figcaption style='text-align:center;font-weight:700'>${i+1}</figcaption></figure>`).join('')}</div>`:''}${!q.zh&&!q.img&&!q.imgs?`<span style='color:var(--mut)'>Nghe câu ${q.n} trong file nghe rồi ${q.sec>20?'kể lại':'nhắc lại'}.</span>`:''}
      <div style='display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px'>${q.prep?`<button class='btn ghost' onclick='orPrep(${q.n},${q.prep})'>⏱ Chuẩn bị ${String(q.prep/60).replace('.',',')} phút</button>`:''}<button class='btn' id='orb${q.n}' onclick='orRec(${q.n},${q.sec})'>🎙 Ghi âm (${q.sec>=60?(q.sec/60).toString().replace('.',',')+' phút':q.sec+' giây'})</button><span id='ors${q.n}' style='color:var(--mut)'></span><audio id='ora${q.n}' controls style='display:none;max-width:100%'></audio></div>
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
