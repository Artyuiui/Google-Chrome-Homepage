// UI translations. User-created shortcut names and search results are never translated.
const languageNames={en:'English',th:'ไทย',ja:'日本語',zh:'中文'};
const messages={};
const translations=[
['หน้าแรก','New Tab','新しいタブ','新标签页'],
['ปรับแต่งหน้าแรก','Customize home page','ホームページをカスタマイズ','自定义主页'],
['ภาษา','Language','言語','语言'],
['อัตโนมัติ (ตามเครื่อง)','Automatic (device language)','自動（端末の言語）','自动（设备语言）'],
['ตัวเลือกขั้นสูง','Advanced options','詳細設定','高级选项'],
['เปลี่ยนโลโก้','Change logo','ロゴを変更','更换标志'],
['คืนค่าโลโก้ Google','Restore Google logo','Google ロゴに戻す','恢复 Google 标志'],
['โลโก้ที่กำหนดเอง','Custom logo','カスタムロゴ','自定义标志'],
['เปลี่ยนภาพพื้นหลัง','Change background image','背景画像を変更','更换背景图片'],
['นำภาพพื้นหลังออก','Remove background image','背景画像を削除','移除背景图片'],
['เลือกรูปจากเครื่อง รูปจะเก็บในเบราว์เซอร์นี้','Choose an image from your device. Images stay in this browser.','端末の画像を選択。画像はこのブラウザに保存されます。','选择设备上的图片，图片保存在此浏览器中。'],
['ภาษาที่ยังไม่รองรับจะแสดงเป็น English','Unsupported languages use English.','未対応の言語は英語で表示されます。','暂不支持的语言将显示为英语。'],
['รูปลักษณ์','Appearance','外観','外观'],['แถบเครื่องมือ','Toolbar','ツールバー','工具栏'],
['ทางลัด','Shortcuts','ショートカット','快捷方式'],['แสดงทางลัด','Show shortcuts','ショートカットを表示','显示快捷方式'],
['แสดงปุ่มค้นหาเพิ่มเติม','Show extra search tools','検索ツールを表示','显示更多搜索工具'],
['สีที่กำหนดเอง','Custom color','カスタムカラー','自定义颜色'],['เลือกสี','Choose a color','色を選択','选择颜色'],
['Light','Light','ライト','浅色'],['Dark','Dark','ダーク','深色'],['Device','Device','端末に合わせる','跟随设备'],
['เพิ่มทางลัด','Add shortcut','ショートカットを追加','添加快捷方式'],['แก้ไขทางลัด','Edit shortcut','ショートカットを編集','编辑快捷方式'],
['แก้ไข','Edit','編集','编辑'],['เพิ่ม','Add','追加','添加'],['ชื่อ','Name','名前','名称'],['URL เว็บไซต์','Website URL','ウェブサイト URL','网站网址'],
['ลบ','Delete','削除','删除'],['ยกเลิก','Cancel','キャンセル','取消'],['บันทึก','Save','保存','保存'],['ปิด','Close','閉じる','关闭'],
['คืนค่ารูปลักษณ์เริ่มต้น','Reset appearance','外観をリセット','重置外观'],
['ทางลัดและค่าปรับแต่งจะบันทึกไว้ในเบราว์เซอร์นี้','Shortcuts and preferences are saved in this browser.','ショートカットと設定はこのブラウザに保存されます。','快捷方式和设置保存在此浏览器中。'],
['ค้นหาใน Google','Search Google','Google で検索','搜索 Google'],['ค้นหาด้วยรูปภาพ','Search by image','画像で検索','以图搜图'],
['ค้นหาด้วยเสียง','Search by voice','音声で検索','语音搜索'],['คำค้นแนะนำ','Search suggestions','検索候補','搜索建议'],
['คำแนะนำจาก Google','Suggestions from Google','Google の検索候補','Google 搜索建议'],
['แอป Google','Google apps','Google アプリ','Google 应用'],['บัญชี Google','Google Account','Google アカウント','Google 账号'],
['Your favorites','Your favorites','お気に入り','收藏夹'],['รายการโปรด','Favorite','お気に入り','已收藏'],
['แก้ไขแอปโปรด','Edit favorite apps','お気に入りを編集','编辑收藏应用'],['เสร็จสิ้นการแก้ไข','Done editing','編集を完了','完成编辑'],
['เลือกแอปเพื่อเพิ่มหรือนำออกจากรายการโปรด','Select apps to add or remove favorites.','アプリを選んでお気に入りを追加・削除。','选择应用以添加或移除收藏。'],
['Images','Images','画像','图片'],
['กรุณาเลือกไฟล์รูปภาพ','Please choose an image file.','画像ファイルを選択してください。','请选择图片文件。'],
['กรุณาเลือกรูปขนาดไม่เกิน 3 MB','Please choose an image under 3 MB.','3 MB 以下の画像を選択してください。','请选择不超过 3 MB 的图片。'],
['อ่านรูปภาพไม่ได้','Unable to read this image.','画像を読み込めません。','无法读取此图片。'],
['บันทึกไม่ได้: พื้นที่จัดเก็บเต็มหรือเบราว์เซอร์ไม่อนุญาต','Unable to save: storage is full or unavailable.','保存できません。保存領域が不足または利用できません。','无法保存：存储空间已满或不可用。'],
['บันทึกไม่ได้ โปรดตรวจการอนุญาตพื้นที่จัดเก็บ','Unable to save. Check storage permissions.','保存できません。保存の権限を確認してください。','无法保存，请检查存储权限。'],
['กรุณาใส่ URL เว็บไซต์ที่ถูกต้อง','Please enter a valid website URL.','有効な URL を入力してください。','请输入有效的网站网址。'],
['บันทึกแอปโปรดไม่ได้','Unable to save favorite apps.','お気に入りを保存できません。','无法保存收藏应用。'],
['เบราว์เซอร์นี้ไม่รองรับค้นหาด้วยเสียง ลองใช้ Chrome หรือพิมพ์คำค้น','Voice search is unavailable in this browser. Try Chrome or type your search.','このブラウザでは音声検索を利用できません。Chrome を使うか入力してください。','此浏览器不支持语音搜索，请使用 Chrome 或输入搜索内容。'],
['กำลังฟัง… กดไมโครโฟนอีกครั้งเพื่อหยุด','Listening… Press the microphone again to stop.','聞き取り中… マイクをもう一度押すと停止します。','正在聆听…再次点击麦克风停止。'],
['กรุณาอนุญาตไมโครโฟนในเบราว์เซอร์','Please allow microphone access in your browser.','ブラウザでマイクの使用を許可してください。','请在浏览器中允许使用麦克风。'],
['รับเสียงไม่ได้ กรุณาลองอีกครั้งหรือพิมพ์คำค้น','Could not hear you. Try again or type your search.','聞き取れませんでした。再試行するか入力してください。','无法识别声音，请重试或输入搜索内容。'],
['เริ่มไมโครโฟนไม่ได้ กรุณาลองใหม่','Unable to start the microphone. Please try again.','マイクを開始できません。再試行してください。','无法启动麦克风，请重试。']
];
for(const [th,en,ja,zh] of translations)messages[th]={th,en,ja,zh};
let selectedLanguage='auto';
try{selectedLanguage=JSON.parse(localStorage.getItem('brave-home-appearance-v1'))?.language||'auto'}catch{}
function resolveLanguage(selection,languages){if(languageNames[selection])return selection;const primary=(languages[0]||'en').toLowerCase().split(/[-_]/)[0];return languageNames[primary]?primary:'en'}
function currentLanguage(){return resolveLanguage(selectedLanguage,navigator.languages||[navigator.language])}
function t(source){return messages[source]?.[currentLanguage()]||source}
const sourceText=new WeakMap(),sourceAttributes=new WeakMap();
function translateUI(){document.documentElement.lang=currentLanguage();document.title=t('หน้าแรก');
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){
  if(node.parentElement.closest('script,style,option,.tile>a,.suggestions #suggestions-list,.app-link,#status,#error'))continue;
  const original=sourceText.get(node)||node.textContent.trim();if(!messages[original])continue;
  sourceText.set(node,original);node.textContent=t(original);
 }
 document.querySelectorAll('[aria-label],[placeholder]').forEach(el=>{if(el.closest('.tile,.app-link'))return;let originals=sourceAttributes.get(el)||{};for(const attr of ['aria-label','placeholder']){const original=originals[attr]||el.getAttribute(attr);if(messages[original]){originals[attr]=original;el.setAttribute(attr,t(original))}}sourceAttributes.set(el,originals)});
 document.querySelectorAll('[data-color]').forEach(el=>el.setAttribute('aria-label',t('เลือกสี')+' '+el.dataset.color));
}
let originalLogo;
function initializePersonalization(){
 originalLogo=$('.logo').innerHTML;
 const languageSection=document.createElement('section');languageSection.className='settings-card';languageSection.innerHTML='<h3>ภาษา</h3><select id="language-select" aria-label="ภาษา"><option value="auto"></option>'+Object.entries(languageNames).map(([code,name])=>`<option value="${code}">${name}</option>`).join('')+'</select><p class="muted">ภาษาที่ยังไม่รองรับจะแสดงเป็น English</p>';
 $('#custom-panel .panel-heading').after(languageSection);
 const advanced=document.createElement('details');advanced.className='settings-card advanced';advanced.innerHTML='<summary>ตัวเลือกขั้นสูง</summary><div class="advanced-content"><h3>โลโก้ที่กำหนดเอง</h3><button id="logo-upload" class="wide-button">'+svg('image')+'เปลี่ยนโลโก้</button><input id="logo-file" type="file" accept="image/*" hidden><button id="clear-logo" class="text-button">คืนค่าโลโก้ Google</button><div id="background-controls"></div><p class="muted">เลือกรูปจากเครื่อง รูปจะเก็บในเบราว์เซอร์นี้</p></div>';
 $('#reset-look').before(advanced);
 for(const id of ['#background-upload','#background-file','#clear-background'])advanced.querySelector('#background-controls').append($(id));
 $('#language-select').onchange=e=>{prefs.language=e.target.value;persist()};
 $('#logo-upload').onclick=()=>$('#logo-file').click();$('#logo-file').onchange=e=>uploadPersonalImage(e,'logo');$('#clear-logo').onclick=()=>{delete prefs.logo;persist()};
 window.addEventListener('languagechange',()=>{if(!prefs.language||prefs.language==='auto')applyPersonalization()});
}
function applyPersonalization(){if(!$('#language-select'))return;selectedLanguage=prefs.language||'auto';$('#language-select').value=languageNames[selectedLanguage]?selectedLanguage:'auto';$('#language-select option[value="auto"]').textContent=t('อัตโนมัติ (ตามเครื่อง)');
 const logo=$('.logo');if(prefs.logo){if(logo.querySelector('img')?.getAttribute('src')!==prefs.logo){const img=document.createElement('img');img.src=prefs.logo;img.alt=t('โลโก้ที่กำหนดเอง');logo.replaceChildren(img)}logo.classList.add('custom-logo');logo.setAttribute('aria-label',t('โลโก้ที่กำหนดเอง'))}else{if(logo.classList.contains('custom-logo'))logo.innerHTML=originalLogo;logo.classList.remove('custom-logo');logo.setAttribute('aria-label','Google')}
 if(logo.querySelector('img'))logo.querySelector('img').alt=t('โลโก้ที่กำหนดเอง');
 translateUI();render();renderApps();
 $('#edit-apps').setAttribute('aria-label',t(editingApps?'เสร็จสิ้นการแก้ไข':'แก้ไขแอปโปรด'));
 $('#clear-logo').disabled=!prefs.logo;$('#clear-background').disabled=!prefs.background;
}
// Decode before saving so a corrupt/unsupported image cannot replace the current one.
async function uploadPersonalImage(event,field){const file=event.target.files[0];event.target.value='';if(!file)return;
 if(!file.type.startsWith('image/'))return notify('กรุณาเลือกไฟล์รูปภาพ');if(file.size>3*1024*1024)return notify('กรุณาเลือกรูปขนาดไม่เกิน 3 MB');
 try{const data=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file)});
 const img=new Image();img.src=data;await img.decode();
 const next={...prefs,[field]:data};try{localStorage.setItem(preferenceKey,JSON.stringify(next))}catch{return notify('บันทึกไม่ได้: พื้นที่จัดเก็บเต็มหรือเบราว์เซอร์ไม่อนุญาต')}
 prefs=next;applyPreferences();
 }catch{notify('อ่านรูปภาพไม่ได้')}
}
