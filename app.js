// ========== 事日清 - app.js ==========
// SVG Icons
const IC={
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2c.5 2.5 2 4.5 2 8a6 6 0 1 1-8-5.6c0 4 2 5 3 6 .5-2 1.5-3.5 3-8.4z"/></svg>',
  chevDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'
};

const COLORS=[
  {name:'sky',hex:'#6CB4EE',bg:'#EBF4FD'},
  {name:'mint',hex:'#5ECDA9',bg:'#E6F9F1'},
  {name:'coral',hex:'#FF8A80',bg:'#FFF0EE'},
  {name:'amber',hex:'#FFB74D',bg:'#FFF8E6'},
  {name:'violet',hex:'#B388FF',bg:'#F3EEFF'},
  {name:'rose',hex:'#F48FB1',bg:'#FFF0F5'},
  {name:'teal',hex:'#4DB6AC',bg:'#E6F5F3'},
  {name:'slate',hex:'#90A4AE',bg:'#ECEFF1'}
];

const EMOJIS=['📝','💼','💪','📖','🏠','🎯','💊','🧘','🏃','🍎','💤','🎵','✈️','📸','🌱','☀️','💡','🔔','🎨','🐾','👓','💻','🧪','⏰'];

const MOODS=['😊','😐','😢','😡','🤩','😴','🤔','💪'];

const HABIT_COLORS=[
  {bg:'#FEE2E2',hex:'#EF4444'},{bg:'#FEF3C7',hex:'#F59E0B'},
  {bg:'#D1FAE5',hex:'#10B981'},{bg:'#DBEAFE',hex:'#3B82F6'},
  {bg:'#EDE9FE',hex:'#8B5CF6'},{bg:'#FCE7F3',hex:'#EC4899'},
  {bg:'#E0F2FE',hex:'#0EA5E9'},{bg:'#FFF7ED',hex:'#F97316'}
];

const DEFAULT_CATS=[
  {id:'life',name:'生活',color:'sky',emoji:'🏠'},
  {id:'work',name:'工作',color:'amber',emoji:'💼'},
  {id:'health',name:'健康',color:'mint',emoji:'💪'},
  {id:'study',name:'学习',color:'violet',emoji:'📖'},
  {id:'other',name:'其他',color:'teal',emoji:'📝'}
];

const DEFAULT_HABITS=[
  {id:'h1',name:'喝8杯水',emoji:'💧',colorIdx:3,weekdays:[1,2,3,4,5,6,0],order:0},
  {id:'h2',name:'阅读30分钟',emoji:'📖',colorIdx:4,weekdays:[1,2,3,4,5,6,0],order:1},
  {id:'h3',name:'晨跑',emoji:'🏃',colorIdx:2,weekdays:[1,2,3,4,5],order:2},
  {id:'h4',name:'早睡',emoji:'💤',colorIdx:5,weekdays:[1,2,3,4,5,6,0],order:3}
];

const DEFAULT_NOTE_CATS=[
  {id:'nc_thought',name:'随想',emoji:'💭',color:'sky'},
  {id:'nc_mood',name:'心情',emoji:'🌈',color:'coral'},
  {id:'nc_idea',name:'灵感',emoji:'💡',color:'amber'},
  {id:'nc_daily',name:'日常',emoji:'☀️',color:'mint'},
  {id:'nc_dream',name:'梦境',emoji:'🌙',color:'violet'}
];

// ========== Utilities ==========
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function p2(n){return n.toString().padStart(2,'0')}
function dayKey(d){return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())}
function todayKey(){return dayKey(new Date())}
function fmtDate(s){
  const d=new Date(s),n=new Date(),diff=Math.floor((n-d)/864e5);
  if(diff===0)return '今天 '+p2(d.getHours())+':'+p2(d.getMinutes());
  if(diff===1)return '昨天';
  if(diff<7)return diff+'天前';
  return d.getFullYear()+'.'+p2(d.getMonth()+1)+'.'+p2(d.getDate());
}
function fmtFull(s){const d=new Date(s);return d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日 '+p2(d.getHours())+':'+p2(d.getMinutes())}
function fmtShort(s){const d=new Date(s);return p2(d.getMonth()+1)+'.'+p2(d.getDate())+' '+p2(d.getHours())+':'+p2(d.getMinutes())}
function greetTime(){const h=new Date().getHours();if(h<6)return '夜深了';if(h<12)return '早上好';if(h<14)return '中午好';if(h<18)return '下午好';return '晚上好'}
function todayStr(){const d=new Date(),w=['日','一','二','三','四','五','六'];return(d.getMonth()+1)+'月'+d.getDate()+'日 周'+w[d.getDay()]}
function playClick(){
  try{const ctx=new(window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator();const g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sine';o.frequency.value=1200;g.gain.value=0.08;o.start();g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.08);o.stop(ctx.currentTime+0.08)}catch(e){}
}
function playSuccess(){
  try{const ctx=new(window.AudioContext||window.webkitAudioContext)();[523,659,784].forEach((f,i)=>{const o=ctx.createOscillator();const g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sine';o.frequency.value=f;g.gain.value=0.1;o.start(ctx.currentTime+i*0.12);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.12+0.3);o.stop(ctx.currentTime+i*0.12+0.3)})}catch(e){}
}

// ========== IndexedDB ==========
class DB{
  constructor(){this.dbName='DailyReminderDB';this.ver=6;this.db=null}
  async open(){
    return new Promise((res,rej)=>{
      const r=indexedDB.open(this.dbName,this.ver);
      r.onupgradeneeded=e=>{
        const db=e.target.result;
        if(!db.objectStoreNames.contains('events')){
          const s=db.createObjectStore('events',{keyPath:'id'});
          s.createIndex('category','category',{unique:false});
          s.createIndex('createdAt','createdAt',{unique:false});
        }
        if(!db.objectStoreNames.contains('categories'))db.createObjectStore('categories',{keyPath:'id'});
        if(!db.objectStoreNames.contains('habits'))db.createObjectStore('habits',{keyPath:'id'});
        if(!db.objectStoreNames.contains('habitLogs'))db.createObjectStore('habitLogs',{keyPath:'id'});
        if(!db.objectStoreNames.contains('notes'))db.createObjectStore('notes',{keyPath:'id'});
        if(!db.objectStoreNames.contains('noteCategories'))db.createObjectStore('noteCategories',{keyPath:'id'});
        if(!db.objectStoreNames.contains('achievements'))db.createObjectStore('achievements',{keyPath:'id'});
      };
      r.onsuccess=e=>{this.db=e.target.result;res(this.db)};
      r.onerror=e=>rej(e.target.error);
    });
  }
  async initDefaults(){
    const cats=await this.getAll('categories');
    if(cats.length===0)for(const c of DEFAULT_CATS)await this.put('categories',c);
    const habits=await this.getAll('habits');
    if(habits.length===0)for(const h of DEFAULT_HABITS)await this.put('habits',h);
    const ncats=await this.getAll('noteCategories');
    if(ncats.length===0)for(const nc of DEFAULT_NOTE_CATS)await this.put('noteCategories',nc);
  }
  async getAll(s){return new Promise((res,rej)=>{const t=this.db.transaction(s,'readonly');const r=t.objectStore(s).getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
  async put(s,d){return new Promise((res,rej)=>{const t=this.db.transaction(s,'readwrite');const r=t.objectStore(s).put(d);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
  async delete(s,id){return new Promise((res,rej)=>{const t=this.db.transaction(s,'readwrite');const r=t.objectStore(s).delete(id);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
  async exportAll(){
    const stores=['events','categories','habits','habitLogs','notes','noteCategories','achievements'];
    const data={_meta:{app:'DailyReminder',version:this.ver,exportedAt:new Date().toISOString()}};
    for(const s of stores){data[s]=await this.getAll(s)}
    return data;
  }
  async importAll(data){
    const stores=['events','categories','habits','habitLogs','notes','noteCategories','achievements'];
    for(const s of stores){
      if(!data[s]||!Array.isArray(data[s]))continue;
      const t=this.db.transaction(s,'readwrite');
      const store=t.objectStore(s);
      // Clear existing data
      await new Promise((res,rej)=>{const r=store.clear();r.onsuccess=()=>res();r.onerror=()=>rej(r.error)});
      // Import new data
      for(const item of data[s]){
        await new Promise((res,rej)=>{const r=store.put(item);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)});
      }
    }
  }
}

// ========== Reminder Engine ==========
class Reminders{
  constructor(){this.timers=new Map();this.perm=false}
  async init(){if('Notification' in window){const p=await Notification.requestPermission();this.perm=p==='granted'}}
  schedule(evt){
    if(!evt.reminderTime)return;
    this.cancel(evt.id);
    const delay=new Date(evt.reminderTime).getTime()-Date.now();
    if(delay<=0)return;
    this.timers.set(evt.id,setTimeout(()=>{this.fire(evt);this.timers.delete(evt.id)},delay));
  }
  cancel(id){if(this.timers.has(id)){clearTimeout(this.timers.get(id));this.timers.delete(id)}}
  fire(evt){
    if(this.perm)try{new Notification('事日清',{body:evt.content})}catch(e){}
    this.showPopup(evt);
  }
  showPopup(evt){
    const o=document.createElement('div');
    o.className='cfm-ov active';
    o.innerHTML=`<div class="cfm-dlg"><h3>提醒</h3><p>${esc(evt.content)}</p><div class="cfm-btns"><button class="btn-snooze" id="snoozeBtn">稍后10分钟提醒</button><button class="btn-c" style="flex:1" onclick="this.closest('.cfm-ov').remove()">知道了</button></div></div>`;
    document.body.appendChild(o);
    o.querySelector('#snoozeBtn').onclick=()=>{
      const snoozeTime=new Date(Date.now()+10*60*1000);
      const snoozeEvt={...evt,reminderTime:snoozeTime.toISOString(),reminderDone:false};
      this.schedule({...snoozeEvt,id:evt.id+'_snooze_'+Date.now()});
      o.remove();
    };
    setTimeout(()=>{if(o.parentNode)o.remove()},30000);
    try{const ctx=new(window.AudioContext||window.webkitAudioContext)();const osc=ctx.createOscillator();const g=ctx.createGain();osc.connect(g);g.connect(ctx.destination);osc.frequency.value=880;g.gain.value=0.2;osc.start();g.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.4);osc.stop(ctx.currentTime+0.4)}catch(e){}
  }
  loadAll(evts){for(const e of evts)if(e.reminderTime&&!e.reminderDone)this.schedule(e)}
}

// ========== Smart NLP Parser ==========
class SmartParser{
  constructor(categories){
    this.categories=categories;
    this.catKeywords={
      'work':['开会','会议','项目','工作','上班','汇报','出差','加班','述职','面试','周报','日报','PPT','报告','需求','排期','发版','上线','部署','代码','review','sprint','deadline','邮件','客户','合同','签约','提案','方案'],
      'life':['购物','买菜','取快递','寄快递','打扫','洗衣','做饭','约饭','聚餐','吃饭','逛街','理发','修车','保养','搬家','缴费','水电','房租','还款','信用卡','银行','超市','家务','遛狗','接孩子','送孩子','幼儿园','家长会','看电影','旅游','机票','酒店'],
      'health':['吃药','体检','医院','挂号','看病','打针','复查','运动','跑步','健身','瑜伽','游泳','减肥','饮食','睡觉','早睡','ok镜','眼镜','牙医','配药','量血压','测血糖','核酸','疫苗','保健'],
      'study':['学习','读书','看书','背单词','课程','上课','听课','考试','练习','复习','预习','作业','论文','培训','笔记','刷题','英语','数学','编程','教程','阅读','写作','翻译'],
      'other':[]
    };
  }
  parse(text){
    if(!text||!text.trim())return null;
    const raw=text.trim();
    const result={content:raw,categoryId:null,reminderTime:null,parsedTimeParts:[],parsedCategory:null};
    const timeResult=this.parseTime(raw);
    if(timeResult){result.reminderTime=timeResult.datetime;result.parsedTimeParts=timeResult.matched;result.content=this.removeTimeFromText(raw,timeResult.matched)}
    const catResult=this.classifyContent(result.content,raw);
    if(catResult){result.categoryId=catResult.id;result.parsedCategory=catResult.name}
    result.content=result.content.replace(/^[，,、。.\s]+|[，,、。.\s]+$/g,'').trim();
    if(!result.content)result.content=raw;
    return result;
  }
  parseTime(text){
    const now=new Date();let matched=[];let date=null,hours=-1,minutes=0;

    // === 1. 日期识别 ===
    if(/今天|今日/.test(text)){date=new Date(now);matched.push(text.match(/今天|今日/)[0])}
    else if(/大后天/.test(text)){date=new Date(now);date.setDate(date.getDate()+3);matched.push('大后天')}
    else if(/后天/.test(text)){date=new Date(now);date.setDate(date.getDate()+2);matched.push('后天')}
    else if(/明天|明日/.test(text)){date=new Date(now);date.setDate(date.getDate()+1);matched.push(text.match(/明天|明日/)[0])}

    const weekMap={'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'日':0,'天':0};
    const weekRx=/(下(?:个)?)?(?:周|星期|礼拜)([一二三四五六日天])/;
    const wm=text.match(weekRx);
    if(wm){const isNext=!!wm[1];const targetDay=weekMap[wm[2]];date=new Date(now);let diff=targetDay-date.getDay();if(diff<=0)diff+=7;if(isNext)diff+=7;date.setDate(date.getDate()+diff);matched.push(wm[0])}

    const dateRx=/(\d{1,2})月(\d{1,2})[日号]/;const dm=text.match(dateRx);
    if(dm){const m=parseInt(dm[1])-1,d=parseInt(dm[2]);date=new Date(now.getFullYear(),m,d);if(date<now)date.setFullYear(date.getFullYear()+1);matched.push(dm[0])}

    const dayLaterRx=/(\d+)\s*天(?:以)?后/;const dlm=text.match(dayLaterRx);
    if(dlm){date=new Date(now);date.setDate(date.getDate()+parseInt(dlm[1]));matched.push(dlm[0])}

    // === 2. 相对时间（X小时后 / X分钟后 / 半小时后）优先处理 ===
    const hourLaterRx=/(\d+)\s*(?:个)?小时(?:以)?后/;const hlm=text.match(hourLaterRx);
    if(hlm){const later=new Date(now.getTime()+parseInt(hlm[1])*3600000);if(!date)date=later;hours=later.getHours();minutes=later.getMinutes();matched.push(hlm[0])}

    const halfHourRx=/半\s*(?:个)?小时(?:以)?后/;const hhm=text.match(halfHourRx);
    if(hhm&&!hlm){const later=new Date(now.getTime()+30*60000);if(!date)date=later;hours=later.getHours();minutes=later.getMinutes();matched.push(hhm[0])}

    const minLaterRx=/(\d+)\s*分钟?(?:以)?后/;const mlm=text.match(minLaterRx);
    if(mlm&&!hlm&&!hhm){const later=new Date(now.getTime()+parseInt(mlm[1])*60000);if(!date)date=later;hours=later.getHours();minutes=later.getMinutes();matched.push(mlm[0])}

    // === 3. 具体时间识别（仅在相对时间未匹配时） ===
    if(hours<0){
      const periods='早上|清晨|上午|中午|下午|傍晚|晚上|半夜|凌晨';

      // "X点半" 优先（如"下午3点半"）
      const halfRx=new RegExp('('+periods+')?(\\d{1,2})点半');
      const hm=text.match(halfRx);
      if(hm){
        hours=parseInt(hm[2]);minutes=30;
        const period=hm[1];
        if(period){if(hours<12&&/下午|晚上|傍晚|半夜/.test(period))hours+=12;if(hours===12&&/早上|上午|凌晨/.test(period))hours=0}
        else if(hours<=6)hours+=12; // 无时段修饰，6点及以下默认下午
        matched.push(hm[0]);
      }

      // "X点X分" / "X点" / "X时X分" / "X:XX"
      if(hours<0){
        // 匹配: 下午3点15分、3点15、15:30、8时30分、下午3点
        const timeRx=new RegExp('('+periods+')?(\\d{1,2})\\s*[点时:：]\\s*(\\d{1,2})\\s*(?:分(?:钟)?)?');
        const tm=text.match(timeRx);
        if(tm){
          hours=parseInt(tm[2]);minutes=parseInt(tm[3]);
          const period=tm[1];
          if(period){if(hours<12&&/下午|晚上|傍晚|半夜/.test(period))hours+=12;if(hours===12&&/早上|上午|凌晨/.test(period))hours=0}
          matched.push(tm[0]);
        }
      }

      // 纯"X点"无分钟（如"下午3点"、"8点"）
      if(hours<0){
        const hourOnlyRx=new RegExp('('+periods+')?(\\d{1,2})\\s*[点时](?!\\d|半)');
        const ho=text.match(hourOnlyRx);
        if(ho){
          hours=parseInt(ho[2]);minutes=0;
          const period=ho[1];
          if(period){if(hours<12&&/下午|晚上|傍晚|半夜/.test(period))hours+=12;if(hours===12&&/早上|上午|凌晨/.test(period))hours=0}
          else if(hours<=6)hours+=12; // 无时段修饰，6点及以下默认下午
          matched.push(ho[0]);
        }
      }

      // 纯冒号时间 "15:30"（不带中文时段）
      if(hours<0){
        const colonRx=/(\d{1,2})\s*[:：]\s*(\d{2})/;const cm=text.match(colonRx);
        if(cm){hours=parseInt(cm[1]);minutes=parseInt(cm[2]);matched.push(cm[0])}
      }

      // 模糊时段词（只有"早上""下午"等，无具体数字）
      if(hours<0){
        const vagueRx=new RegExp('('+periods+')');
        const vm=text.match(vagueRx);
        if(vm){
          const defaults={'早上':8,'清晨':6,'上午':9,'中午':12,'下午':14,'傍晚':17,'晚上':20,'半夜':23,'凌晨':5};
          hours=defaults[vm[1]]||9;minutes=0;matched.push(vm[0]);
        }
      }
    }

    if(!date&&hours<0)return null;
    if(!date){date=new Date(now);if(hours>=0&&(hours<now.getHours()||(hours===now.getHours()&&minutes<=now.getMinutes())))date.setDate(date.getDate()+1)}
    if(hours<0){hours=9;minutes=0}
    date.setHours(hours,minutes,0,0);
    matched=[...new Set(matched)];
    return{datetime:date.toISOString().slice(0,16).replace('T','T')+':00',matched};
  }
  removeTimeFromText(text,timeParts){
    let result=text;
    const sorted=[...timeParts].sort((a,b)=>b.length-a.length);
    for(const part of sorted)result=result.replace(part,'');
    result=result.replace(/提醒我|记得|别忘了|别忘记|不要忘记|要记得|记住|到时候/g,'');
    return result;
  }
  classifyContent(content,fullText){
    const text=(content+' '+fullText).toLowerCase();
    let bestCat=null,bestScore=0;
    for(const cat of this.categories){
      const kwList=this.catKeywords[cat.id]||[];
      const allKw=[...kwList,cat.name.toLowerCase()];
      let score=0;
      for(const kw of allKw)if(text.includes(kw.toLowerCase()))score++;
      if(score>bestScore){bestScore=score;bestCat=cat}
    }
    if(!bestCat||bestScore===0)for(const cat of this.categories)if(text.includes(cat.name.toLowerCase())){bestCat=cat;break}
    if(!bestCat)bestCat=this.categories.find(c=>c.id==='other')||this.categories[0];
    return bestCat;
  }
}

// ========== Main App ==========
class App{
  constructor(){
    this.db=new DB();
    this.rem=new Reminders();
    this.events=[];
    this.categories=[];
    this.habits=[];
    this.habitLogs=[];
    this.notes=[];
    this.noteCategories=[];
    this.activeNoteCat='all';
    this.achievements=[];
    this.tab='home';
    this.activeCat='all';
    this.query='';
    this.habitCollapsed=false;
    this.collapsedDates=new Set();
    this.parser=null;
  }

  async init(){
    await this.db.open();
    await this.db.initDefaults();
    await this.load();
    this.parser=new SmartParser(this.categories);
    await this.rem.init();
    this.rem.loadAll(this.events);
    this.render();
    // Periodic reminder check
    setInterval(()=>{
      const now=Date.now();
      for(const e of this.events){
        if(e.reminderTime&&!e.reminderDone&&new Date(e.reminderTime).getTime()<=now){
          e.reminderDone=true;this.db.put('events',e);this.rem.fire(e);
        }
      }
    },30000);
  }

  async load(){
    this.categories=await this.db.getAll('categories');
    this.events=await this.db.getAll('events');
    this.events.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    this.habits=await this.db.getAll('habits');
    this.habits.sort((a,b)=>(a.order||0)-(b.order||0));
    this.habitLogs=await this.db.getAll('habitLogs');
    this.notes=await this.db.getAll('notes');
    this.notes.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    this.noteCategories=await this.db.getAll('noteCategories');
    this.achievements=await this.db.getAll('achievements');
    if(this.parser)this.parser.categories=this.categories;
  }

  toast(m){
    let t=document.querySelector('.toast');
    if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}
    t.textContent=m;t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2000);
  }

  colorByName(n){return COLORS.find(c=>c.name===n)||COLORS[0]}
  catById(id){return this.categories.find(c=>c.id===id)}

  // ===== Habit helpers =====
  getTodayHabits(){
    const dow=new Date().getDay();
    return this.habits.filter(h=>h.weekdays&&h.weekdays.includes(dow));
  }
  isHabitDone(habitId,dateStr){
    const dk=dateStr||todayKey();
    return this.habitLogs.some(l=>l.habitId===habitId&&l.date===dk);
  }
  async toggleHabit(habitId){
    const dk=todayKey();
    const existing=this.habitLogs.find(l=>l.habitId===habitId&&l.date===dk);
    if(existing){
      await this.db.delete('habitLogs',existing.id);
    }else{
      await this.db.put('habitLogs',{id:uid(),habitId,date:dk,doneAt:new Date().toISOString()});
      playSuccess();
    }
    await this.load();
    // Check achievement
    const todayHabits=this.getTodayHabits();
    const allDone=todayHabits.length>0&&todayHabits.every(h=>this.isHabitDone(h.id));
    if(allDone&&!existing){
      const todayAch=this.achievements.find(a=>a.date===dk);
      if(!todayAch)this.showAchievementCard();
    }
    this.render();
  }
  getStreak(habitId){
    let streak=0;const d=new Date();
    for(let i=0;i<365;i++){
      const dk=dayKey(d);
      const dow=d.getDay();
      const habit=this.habits.find(h=>h.id===habitId);
      if(habit&&habit.weekdays&&!habit.weekdays.includes(dow)){d.setDate(d.getDate()-1);continue}
      if(this.habitLogs.some(l=>l.habitId===habitId&&l.date===dk)){streak++;d.setDate(d.getDate()-1)}
      else break;
    }
    return streak;
  }
  getMaxStreak(){
    let max=0;
    for(const h of this.habits){const s=this.getStreak(h.id);if(s>max)max=s}
    return max;
  }

  // ===== Notes =====
  async addNote(text,mood,noteCatId){
    if(!text.trim())return;
    await this.db.put('notes',{id:uid(),text:text.trim(),mood:mood||'😊',noteCatId:noteCatId||null,createdAt:new Date().toISOString(),date:todayKey()});
    await this.load();
    this.render();
    this.toast('碎念已记录');
  }
  async deleteNote(id){
    await this.db.delete('notes',id);
    await this.load();
    this.render();
  }

  // ===== Data Backup & Restore =====
  async exportData(){
    try{
      const data=await this.db.exportAll();
      const json=JSON.stringify(data,null,2);
      const blob=new Blob([json],{type:'application/json'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      const now=new Date();
      const fname='shiriqing_backup_'+now.getFullYear()+p2(now.getMonth()+1)+p2(now.getDate())+'_'+p2(now.getHours())+p2(now.getMinutes())+'.json';
      a.href=url;a.download=fname;
      document.body.appendChild(a);a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.toast('备份成功！文件已下载');
    }catch(e){
      console.error('Export failed:',e);
      this.toast('备份失败，请重试');
    }
  }

  importData(){
    const input=document.createElement('input');
    input.type='file';input.accept='.json';
    input.onchange=async(e)=>{
      const file=e.target.files[0];
      if(!file)return;
      try{
        const text=await file.text();
        const data=JSON.parse(text);
        if(!data._meta||data._meta.app!=='DailyReminder'){
          this.toast('文件格式不正确');return;
        }
        // Show confirmation
        const totalItems=(data.events||[]).length+(data.habits||[]).length+(data.notes||[]).length+(data.habitLogs||[]).length;
        const o=document.createElement('div');
        o.className='cfm-ov active';
        o.innerHTML=`<div class="cfm-dlg">
          <h3>恢复数据</h3>
          <p>将从备份文件中恢复数据，包含 ${(data.events||[]).length} 条记录、${(data.habits||[]).length} 个习惯、${(data.notes||[]).length} 条碎念、${(data.habitLogs||[]).length} 条打卡。<br><br><strong style="color:#EF4444">注意：当前数据将被完全替换！</strong></p>
          <div class="cfm-btns">
            <button class="btn-c" id="impCancel">取消</button>
            <button class="btn-d" id="impConfirm" style="background:var(--ac)">确认恢复</button>
          </div>
        </div>`;
        document.body.appendChild(o);
        o.querySelector('#impCancel').onclick=()=>o.remove();
        o.querySelector('#impConfirm').onclick=async()=>{
          try{
            await this.db.importAll(data);
            await this.load();
            this.rem.loadAll(this.events);
            o.remove();
            this.render();
            this.toast('数据恢复成功！共 '+totalItems+' 条数据');
            playSuccess();
          }catch(err){
            console.error('Import failed:',err);
            o.remove();
            this.toast('恢复失败，请重试');
          }
        };
      }catch(err){
        console.error('Parse failed:',err);
        this.toast('文件解析失败，请确认是正确的备份文件');
      }
    };
    input.click();
  }

  // ===== Achievement =====
  showAchievementCard(){
    const o=document.createElement('div');
    o.className='ach-ov active';
    o.innerHTML=`<div class="ach-card">
      <div class="ach-emo">🎉</div>
      <div class="ach-tl">今日全部完成!</div>
      <div class="ach-desc">太棒了！你今天完成了所有习惯，保持下去！</div>
      <input class="ach-inp" id="achInp" placeholder="记录此刻的心情..." maxlength="100">
      <button class="ach-btn" id="achBtn">收下成就</button>
    </div>`;
    document.body.appendChild(o);
    o.querySelector('#achBtn').onclick=async()=>{
      const txt=o.querySelector('#achInp').value.trim();
      await this.db.put('achievements',{id:uid(),date:todayKey(),note:txt,createdAt:new Date().toISOString()});
      await this.load();
      o.remove();
      this.toast('成就已收录！');
    };
    o.addEventListener('click',e=>{if(e.target===o)o.remove()});
  }

  // ===== Heatmap data =====
  getHeatmapData(){
    const data={};
    // Combine habitLogs, events, notes, pomodoroLogs for activity
    for(const l of this.habitLogs){data[l.date]=(data[l.date]||0)+1}
    for(const e of this.events){const dk=dayKey(new Date(e.createdAt));data[dk]=(data[dk]||0)+1}
    for(const n of this.notes){data[n.date]=(data[n.date]||0)+1}
    return data;
  }

  // ===== Filtered events =====
  filtered(){
    let f=[...this.events];
    if(this.activeCat!=='all')f=f.filter(e=>e.category===this.activeCat);
    if(this.query.trim()){const q=this.query.toLowerCase().trim();f=f.filter(e=>e.content.toLowerCase().includes(q)||(e.categoryName&&e.categoryName.toLowerCase().includes(q)))}
    return f;
  }

  // ========== RENDER ==========
  render(){
    const a=document.getElementById('app');
    let content='';
    if(this.tab==='home')content=this.renderHome();
    else if(this.tab==='habits')content=this.renderHabitPage();
    else if(this.tab==='notes')content=this.renderNotes();
    else if(this.tab==='stats')content=this.renderStats();

    a.innerHTML=`
      <div class="page active">${content}</div>
      ${this.tab==='home'?`<button class="fab" id="fab">${IC.plus}</button>`:''}
      <div class="tab-bar">
        <button class="tab-item ${this.tab==='home'?'active':''}" data-tab="home">${IC.home}<span>TODAY</span></button>
        <button class="tab-item ${this.tab==='habits'?'active':''}" data-tab="habits">${IC.habit}<span>习惯</span></button>
        <button class="tab-item ${this.tab==='notes'?'active':''}" data-tab="notes">${IC.note}<span>碎念</span></button>
        <button class="tab-item ${this.tab==='stats'?'active':''}" data-tab="stats">${IC.chart}<span>统计</span></button>
      </div>`;
    this.bindAll();
  }

  renderHome(){
    const todayHabits=this.getTodayHabits();
    const doneCount=todayHabits.filter(h=>this.isHabitDone(h.id)).length;
    const totalH=todayHabits.length;
    const streak=this.getMaxStreak();

    return `
      <div class="header">
        <div class="header-top">
          <div>
            <div class="header-greet">${greetTime()} · ${todayStr()}</div>
            <div class="header-title">事<span>日清</span></div>
          </div>
          ${streak>0?`<div class="header-streak">${IC.fire} ${streak}天连续</div>`:''}
        </div>
      </div>
      ${totalH>0?`
      <div class="habit-section ${this.habitCollapsed?'collapsed':''}">
        <div class="habit-sec-title" id="habitToggle">
          <div class="habit-sec-left">今日习惯 <span class="habit-sec-badge">${doneCount}/${totalH}</span></div>
          <div class="habit-sec-right">
            <button data-goto="habits">管理 ${IC.edit}</button>
            <span class="habit-sec-chevron">${IC.chevDown}</span>
          </div>
        </div>
        <div class="habit-grid-wrap">
          <div class="habit-grid">
            ${todayHabits.map(h=>{
              const done=this.isHabitDone(h.id);
              const hc=HABIT_COLORS[h.colorIdx||0];
              return `<div class="habit-card" data-hid="${h.id}">
                <div class="habit-icon ${done?'done':''}" style="background:${hc.bg}">
                  <span style="font-size:26px">${h.emoji}</span>
                  <div class="habit-chk">${IC.check}</div>
                </div>
                <span class="h-name ${done?'done-t':''}">${esc(h.name)}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>`:''}
      <div class="cat-scroll">
        ${[{id:'all',name:'全部',emoji:'🌟',color:'sky'},...this.categories].map(c=>{
          return `<button class="cat-chip ${this.activeCat===c.id?'active':''}" data-cat="${c.id}">${c.emoji||''} ${esc(c.name)}</button>`;
        }).join('')}
        <button class="cat-chip cat-add-btn" id="homeCatAdd">${IC.plus}</button>
      </div>
      <div class="search-box">
        <div class="sbar" id="sbar">
          ${IC.search}
          <input type="text" id="sinput" placeholder="搜索记录..." value="${esc(this.query)}">
          <button class="sclear ${this.query?'vis':''}" id="sclear">${IC.close}</button>
        </div>
      </div>
      <div class="smart-add-bar">
        <button class="smart-add-btn" id="smartAddTop">${IC.plus} 智能记录</button>
      </div>
      ${this.renderEventsList()}`;
  }

  renderEventsList(){
    const f=this.filtered();
    if(!f.length){
      if(this.query)return `<div class="empty"><div class="empty-ic">🔍</div><div class="empty-t">没有找到相关内容</div><div class="empty-d">试试其他关键词吧</div></div>`;
      return `<div class="empty"><div class="empty-ic">✨</div><div class="empty-t">还没有记录</div><div class="empty-d">点击下方 + 添加新事项</div></div>`;
    }
    const sq=this.query.toLowerCase().trim();
    const groups={};
    for(const e of f){const d=new Date(e.createdAt);const k=d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate());if(!groups[k])groups[k]=[];groups[k].push(e)}

    let h=sq?`<div class="scount">找到 ${f.length} 条相关记录</div>`:'';
    h+='<div class="events-list">';
    for(const[k,evts] of Object.entries(groups)){
      const d=new Date(k),n=new Date(),y=new Date(n);y.setDate(y.getDate()-1);
      let lbl=(d.getMonth()+1)+'月'+d.getDate()+'日';
      if(d.toDateString()===n.toDateString())lbl='今天';
      else if(d.toDateString()===y.toDateString())lbl='昨天';
      const isCollapsed=this.collapsedDates.has(k);
      h+=`<div class="dg-group ${isCollapsed?'collapsed':''}" data-dgk="${k}">`;
      h+=`<div class="dg-title" data-dgk="${k}"><span class="dg-lbl">${lbl}</span><span class="dg-cnt">${evts.length}条</span><span class="dg-chevron">${IC.chevDown}</span></div>`;
      h+=`<div class="dg-body">`;
      for(const e of evts){
        const cat=this.catById(e.category);
        const col=cat?this.colorByName(cat.color):COLORS[0];
        let body=esc(e.content);
        if(sq){const rx=new RegExp('('+sq.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');body=body.replace(rx,'<span class="hl">$1</span>')}
        let rtag='';
        if(e.reminderTime){
          const past=new Date(e.reminderTime)<=new Date();
          let timeInfo=fmtShort(e.reminderTime);
          if(e.eventTime&&e.advanceMinutes>0){const hh=Math.floor(e.advanceMinutes/60);const mm=e.advanceMinutes%60;let advTxt='提前';if(hh>0)advTxt+=hh+'小时';if(mm>0)advTxt+=mm+'分钟';timeInfo=fmtShort(e.eventTime)+'（'+advTxt+'提醒）'}
          rtag=`<div class="rtag ${past?'done':''}">${IC.bell} ${past?'已提醒':timeInfo}</div>`;
        }
        h+=`<div class="ev-card" data-id="${e.id}">
          <div class="ca" style="background:${col.hex}"></div>
          <div class="ct"><span class="cb" style="background:${col.hex}">${cat?(cat.emoji||'')+' '+esc(cat.name):'未分类'}</span><span class="ctime">${IC.clock} ${fmtDate(e.createdAt)}</span></div>
          <div class="cbody">${body}</div>
          ${rtag}
          <div class="cf"><span class="cdate">${fmtFull(e.createdAt)}</span><div class="cacts"><button class="cact btn-edit" data-id="${e.id}">${IC.edit}</button><button class="cact btn-del" data-id="${e.id}">${IC.trash}</button></div></div>
        </div>`;
      }
      h+=`</div></div>`;
    }
    h+='</div>';
    return h;
  }

  renderHabitPage(){
    return `
      <div class="header">
        <div class="header-greet">养成好习惯</div>
        <div class="header-title">习惯<span>管理</span></div>
      </div>
      <div class="hm-wrap">
        <div class="ah-form">
          <div class="ig">
            <label class="il">习惯名称</label>
            <input type="text" class="ti" id="newHabitName" placeholder="例如：每天冥想10分钟" maxlength="20">
          </div>
          <div class="ig">
            <label class="il">选择图标</label>
            <div class="emoji-grid">
              ${EMOJIS.map((e,i)=>`<button class="ep ${i===0?'active':''}" data-emoji="${e}">${e}</button>`).join('')}
            </div>
          </div>
          <div class="ig">
            <label class="il">选择颜色</label>
            <div class="crow">
              ${HABIT_COLORS.map((c,i)=>`<div class="cdot ${i===0?'active':''}" data-cidx="${i}" style="background:${c.hex}"></div>`).join('')}
            </div>
          </div>
          <div class="ig">
            <label class="il">重复日</label>
            <div class="wk-sel">
              ${['一','二','三','四','五','六','日'].map((d,i)=>{
                const dow=[1,2,3,4,5,6,0][i];
                return `<button class="wk-btn active" data-dow="${dow}">${d}</button>`;
              }).join('')}
            </div>
          </div>
          <button class="subbtn" id="addHabitBtn">添加习惯</button>
        </div>
        ${this.habits.map(h=>{
          const hc=HABIT_COLORS[h.colorIdx||0];
          const streak=this.getStreak(h.id);
          const days=h.weekdays?h.weekdays.map(d=>['日','一','二','三','四','五','六'][d]).join(' '):'每天';
          return `<div class="hi-item">
            <div class="hi-ic" style="background:${hc.bg}">${h.emoji}</div>
            <div class="hi-info">
              <div class="hi-nm">${esc(h.name)}</div>
              <div class="hi-days">${days} · 连续${streak}天</div>
            </div>
            <button class="hi-del" data-hid="${h.id}">${IC.close}</button>
          </div>`;
        }).join('')}
      </div>`;
  }

  renderNotes(){
    // Filter notes by active category
    const filteredNotes=this.activeNoteCat==='all'?this.notes:this.activeNoteCat==='uncategorized'?this.notes.filter(n=>!n.noteCatId):this.notes.filter(n=>n.noteCatId===this.activeNoteCat);
    // Count per category
    const catCounts={};
    this.notes.forEach(n=>{const cid=n.noteCatId||'uncategorized';catCounts[cid]=(catCounts[cid]||0)+1});
    const uncatCount=this.notes.filter(n=>!n.noteCatId).length;

    // Group filtered notes by category for grouped view
    const groupedView=this.activeNoteCat==='all';

    return `
      <div class="header">
        <div class="header-greet">随手记录想法</div>
        <div class="header-title">碎念<span>笔记</span></div>
      </div>
      <div class="notes-wrap">
        <div class="ni-card">
          <textarea class="ni-ta" id="noteInput" placeholder="此刻在想什么..."></textarea>
          <div class="ni-cat-sel">
            <div class="ni-cat-row" id="noteCatRow">
              <button class="ni-cat-chip sel" data-ncid="">未分类</button>
              ${this.noteCategories.map(c=>{
                const col=this.colorByName(c.color);
                return `<button class="ni-cat-chip" data-ncid="${c.id}" data-color="${c.color}">${c.emoji} ${esc(c.name)}</button>`;
              }).join('')}
            </div>
          </div>
          <div class="ni-acts">
            <div class="mood-row">
              ${MOODS.map((m,i)=>`<button class="mood-b ${i===0?'active':''}" data-mood="${m}">${m}</button>`).join('')}
            </div>
            <button class="ni-sub" id="addNoteBtn">记录</button>
          </div>
        </div>

        <!-- 分类筛选标签栏 -->
        <div class="nc-filter-bar">
          <div class="nc-filter-scroll">
            <button class="nc-filter-chip ${this.activeNoteCat==='all'?'active':''}" data-nf="all">全部 <span class="nc-filter-cnt">${this.notes.length}</span></button>
            ${this.noteCategories.map(c=>{
              const col=this.colorByName(c.color);
              const cnt=catCounts[c.id]||0;
              return `<button class="nc-filter-chip ${this.activeNoteCat===c.id?'active':''}" data-nf="${c.id}" style="${this.activeNoteCat===c.id?'background:'+col.hex+';color:#fff;border-color:'+col.hex:''}">${c.emoji} ${esc(c.name)} <span class="nc-filter-cnt">${cnt}</span></button>`;
            }).join('')}
            ${uncatCount>0?`<button class="nc-filter-chip ${this.activeNoteCat==='uncategorized'?'active':''}" data-nf="uncategorized">📋 未分类 <span class="nc-filter-cnt">${uncatCount}</span></button>`:''}
            <button class="nc-filter-chip nc-manage-btn" id="manageNoteCats">${IC.edit} 管理</button>
          </div>
        </div>

        ${filteredNotes.length===0?`<div class="empty"><div class="empty-ic">💭</div><div class="empty-t">${this.activeNoteCat==='all'?'还没有碎念':'该分类暂无碎念'}</div><div class="empty-d">${this.activeNoteCat==='all'?'写下此刻的想法吧':'换个分类看看，或记录一条新碎念'}</div></div>`:''}

        ${groupedView&&filteredNotes.length>0?this.renderNotesGrouped(filteredNotes):this.renderNotesList(filteredNotes)}
      </div>`;
  }

  renderNotesList(notes){
    return notes.map(n=>{
      const d=new Date(n.createdAt);
      const timeStr=p2(d.getMonth()+1)+'/'+p2(d.getDate())+' '+p2(d.getHours())+':'+p2(d.getMinutes());
      const ncat=n.noteCatId?this.noteCategories.find(c=>c.id===n.noteCatId):null;
      const ncCol=ncat?this.colorByName(ncat.color):null;
      return `<div class="nc">
        <div class="nc-hd">
          <span class="nc-mood">${n.mood||'😊'}</span>
          <div class="nc-hd-right">
            ${ncat?`<span class="nc-tag" style="background:${ncCol.bg};color:${ncCol.hex}">${ncat.emoji} ${esc(ncat.name)}</span>`:''}
            <span class="nc-time">${timeStr}</span>
          </div>
        </div>
        <div class="nc-txt">${esc(n.text)}</div>
        <div class="nc-foot">
          <button class="nc-edit-cat" data-nid="${n.id}" title="修改分类">${IC.tag}</button>
          <button class="nc-del" data-nid="${n.id}">删除</button>
        </div>
      </div>`;
    }).join('');
  }

  renderNotesGrouped(notes){
    // Group by category
    const groups=new Map();
    groups.set('__none',{label:'未分类',emoji:'📋',color:null,notes:[]});
    this.noteCategories.forEach(c=>groups.set(c.id,{label:c.name,emoji:c.emoji,color:c.color,notes:[]}));
    notes.forEach(n=>{
      const key=n.noteCatId&&groups.has(n.noteCatId)?n.noteCatId:'__none';
      groups.get(key).notes.push(n);
    });

    let html='';
    for(const[key,g] of groups){
      if(g.notes.length===0)continue;
      const col=g.color?this.colorByName(g.color):null;
      html+=`<div class="nc-group">
        <div class="nc-group-hdr" ${col?`style="border-left:3px solid ${col.hex}"`:'style="border-left:3px solid var(--t3)"'}>
          <span class="nc-group-emoji">${g.emoji}</span>
          <span class="nc-group-name">${esc(g.label)}</span>
          <span class="nc-group-cnt">${g.notes.length}条</span>
        </div>
        ${this.renderNotesList(g.notes)}
      </div>`;
    }
    return html;
  }

  renderStats(){
    const total=this.events.length;
    const now=new Date();
    const today=this.events.filter(e=>new Date(e.createdAt).toDateString()===now.toDateString()).length;
    const totalHabitDone=this.habitLogs.length;
    const totalNotes=this.notes.length;

    // Active days (unique days with any activity)
    const activeDaysSet=new Set();
    this.events.forEach(e=>activeDaysSet.add(dayKey(new Date(e.createdAt))));
    this.habitLogs.forEach(l=>activeDaysSet.add(l.date));
    this.notes.forEach(n=>activeDaysSet.add(n.date));
    const activeDays=activeDaysSet.size;

    // This week stats
    const weekStart=new Date(now);weekStart.setDate(now.getDate()-now.getDay()+(now.getDay()===0?-6:1));weekStart.setHours(0,0,0,0);
    const thisWeekEvents=this.events.filter(e=>new Date(e.createdAt)>=weekStart).length;
    const thisWeekNotes=this.notes.filter(n=>new Date(n.createdAt)>=weekStart).length;
    const thisWeekHabits=this.habitLogs.filter(l=>{const d=new Date(l.date+'T00:00:00');return d>=weekStart}).length;

    // Habit completion rate
    const todayHabits=this.getTodayHabits();
    const todayDone=todayHabits.filter(h=>this.isHabitDone(h.id)).length;
    const habitRate=todayHabits.length>0?Math.round(todayDone/todayHabits.length*100):0;

    // Max streak
    const streak=this.getMaxStreak();

    // Weekly trend: last 7 days activity count
    const weeklyTrend=[];
    const dayNames=['日','一','二','三','四','五','六'];
    const hmData=this.getHeatmapData();
    for(let i=6;i>=0;i--){
      const dd=new Date(now);dd.setDate(now.getDate()-i);
      const dk=dayKey(dd);
      weeklyTrend.push({day:dayNames[dd.getDay()],date:dk,count:hmData[dk]||0});
    }
    const trendMax=Math.max(...weeklyTrend.map(t=>t.count),1);

    // Category stats
    const cs=this.categories.map(c=>({...c,count:this.events.filter(e=>e.category===c.id).length})).sort((a,b)=>b.count-a.count);
    const mx=Math.max(...cs.map(c=>c.count),1);
    const totalCatCount=cs.reduce((s,c)=>s+c.count,0)||1;

    // Heatmap: last 12 weeks
    const weeks=12;
    const endDate=new Date();
    const startDate=new Date(endDate);
    startDate.setDate(startDate.getDate()-weeks*7+1);
    while(startDate.getDay()!==1)startDate.setDate(startDate.getDate()-1);
    let hmCells='';
    const dayLabels=['一','二','三','四','五','六','日'];
    let hmHead=dayLabels.map(d=>`<div class="hm-dl">${d}</div>`).join('');
    const d=new Date(startDate);
    const tk=todayKey();
    while(d<=endDate){
      const dk=dayKey(d);
      const v=hmData[dk]||0;
      let lv='lv0';
      if(v>=4)lv='lv4';else if(v>=3)lv='lv3';else if(v>=2)lv='lv2';else if(v>=1)lv='lv1';
      const isToday=dk===tk?'today':'';
      hmCells+=`<div class="hm-cell ${lv} ${isToday}" data-date="${dk}" data-count="${v}"></div>`;
      d.setDate(d.getDate()+1);
    }

    // Per-habit stats
    const habitStats=this.habits.map(h=>{
      const logs=this.habitLogs.filter(l=>l.habitId===h.id);
      const s=this.getStreak(h.id);
      const hc=HABIT_COLORS[h.colorIdx||0];
      // completion rate last 7 days
      let done7=0,total7=0;
      for(let i=0;i<7;i++){
        const dd=new Date(now);dd.setDate(now.getDate()-i);
        if(h.weekdays&&h.weekdays.includes(dd.getDay())){
          total7++;
          if(this.isHabitDone(h.id,dayKey(dd)))done7++;
        }
      }
      const rate7=total7>0?Math.round(done7/total7*100):0;
      return {id:h.id,name:h.name,emoji:h.emoji,color:hc,totalLogs:logs.length,streak:s,rate7,done7,total7};
    });

    // Recent events (last 5)
    const recentEvents=this.events.slice(0,5);

    // Recent notes (last 5)
    const recentNotes=this.notes.slice(0,5);

    return `
      <div class="header">
        <div class="header-greet">你的数据统计</div>
        <div class="header-title">我的<span>统计</span></div>
      </div>
      <div class="stats-wrap">
        <div class="st-cards">
          <div class="st-card st-clickable" data-detail="events"><div class="st-num">${total}</div><div class="st-lbl">总记录</div><div class="st-arrow">${IC.edit}</div></div>
          <div class="st-card st-clickable" data-detail="today"><div class="st-num">${today}</div><div class="st-lbl">今日新增</div><div class="st-arrow">${IC.edit}</div></div>
          <div class="st-card st-clickable" data-detail="notes"><div class="st-num">${totalNotes}</div><div class="st-lbl">碎念笔记</div><div class="st-arrow">${IC.edit}</div></div>
          <div class="st-card st-clickable" data-detail="habits"><div class="st-num">${totalHabitDone}</div><div class="st-lbl">习惯打卡</div><div class="st-arrow">${IC.edit}</div></div>
        </div>

        <!-- 概览卡片 -->
        <div class="st-overview">
          <div class="st-ov-item"><span class="st-ov-icon">🔥</span><div class="st-ov-info"><div class="st-ov-val">${streak}天</div><div class="st-ov-lbl">最长连续</div></div></div>
          <div class="st-ov-item"><span class="st-ov-icon">📅</span><div class="st-ov-info"><div class="st-ov-val">${activeDays}天</div><div class="st-ov-lbl">活跃天数</div></div></div>
          <div class="st-ov-item"><span class="st-ov-icon">✅</span><div class="st-ov-info"><div class="st-ov-val">${habitRate}%</div><div class="st-ov-lbl">今日完成率</div></div></div>
        </div>

        <!-- 详情展开面板 -->
        <div class="st-detail-panel" id="stDetailPanel" style="display:none">
          <div class="st-detail-hdr">
            <span class="st-detail-title" id="stDetailTitle"></span>
            <button class="st-detail-close" id="stDetailClose">${IC.close}</button>
          </div>
          <div class="st-detail-body" id="stDetailBody"></div>
        </div>

        <!-- 本周动态 -->
        <div class="sec-hdr"><div class="sec-title">本周动态</div><span class="sec-sub">记录 ${thisWeekEvents} · 笔记 ${thisWeekNotes} · 打卡 ${thisWeekHabits}</span></div>
        <div class="trend-card">
          <div class="trend-bars">
            ${weeklyTrend.map(t=>{
              const h=Math.max(Math.round(t.count/trendMax*100),4);
              const isT=t.date===tk;
              return `<div class="trend-col">
                <div class="trend-val">${t.count}</div>
                <div class="trend-bar ${isT?'trend-today':''}" style="height:${h}%"></div>
                <div class="trend-day">${t.day}</div>
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- 习惯统计 -->
        ${habitStats.length>0?`
        <div class="sec-hdr"><div class="sec-title">习惯分析</div></div>
        <div class="habit-stats-list">
          ${habitStats.map(h=>`
            <div class="hs-card">
              <div class="hs-left">
                <span class="hs-emoji" style="background:${h.color.bg}">${h.emoji}</span>
                <div class="hs-info">
                  <div class="hs-name">${esc(h.name)}</div>
                  <div class="hs-meta">连续${h.streak}天 · 累计${h.totalLogs}次</div>
                </div>
              </div>
              <div class="hs-right">
                <div class="hs-rate-ring" style="--rate:${h.rate7}">
                  <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--bd)" stroke-width="3"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="${h.color.hex||'var(--ac)'}" stroke-width="3" stroke-dasharray="${h.rate7} ${100-h.rate7}" stroke-dashoffset="25" stroke-linecap="round"/></svg>
                  <span class="hs-rate-txt">${h.rate7}%</span>
                </div>
                <div class="hs-rate-lbl">近7天</div>
              </div>
            </div>
          `).join('')}
        </div>`:''}

        <!-- 热力图 -->
        <div class="hm-card">
          <div class="hm-tl">活动热力图 (近${weeks}周)</div>
          <div class="hm-grid">${hmHead}${hmCells}</div>
          <div class="hm-leg"><span>少</span><div class="lg-box" style="background:var(--bd)"></div><div class="lg-box" style="background:#C7D2FE"></div><div class="lg-box" style="background:#A5B4FC"></div><div class="lg-box" style="background:#818CF8"></div><div class="lg-box" style="background:var(--ac)"></div><span>多</span></div>
          <div class="hm-tip" id="hmTip" style="display:none"></div>
        </div>

        <!-- 分类分布 -->
        <div class="sec-hdr"><div class="sec-title">分类分布</div></div>
        ${cs.map(c=>{
          const col=this.colorByName(c.color);
          const pct=Math.round(c.count/mx*100);
          const share=Math.round(c.count/totalCatCount*100);
          return `<div class="cs-item st-clickable" data-catid="${c.id}">
            <div class="cs-dot" style="background:${col.hex}"></div>
            <span class="cs-name">${c.emoji||''} ${esc(c.name)}</span>
            <div class="cs-bar"><div class="cs-fill" style="width:${pct}%;background:${col.hex}"></div></div>
            <span class="cs-cnt">${c.count}<small class="cs-pct">${share}%</small></span>
          </div>`;
        }).join('')}

        <!-- 最近记录 -->
        ${recentEvents.length>0?`
        <div class="sec-hdr"><div class="sec-title">最近记录</div></div>
        <div class="st-recent-list">
          ${recentEvents.map(e=>{
            const cat=this.catById(e.category);
            const col=cat?this.colorByName(cat.color):COLORS[0];
            const dd=new Date(e.createdAt);
            const timeStr=p2(dd.getMonth()+1)+'/'+p2(dd.getDate())+' '+p2(dd.getHours())+':'+p2(dd.getMinutes());
            return `<div class="st-recent-item">
              <div class="st-recent-dot" style="background:${col.hex}"></div>
              <div class="st-recent-info">
                <div class="st-recent-text">${esc(e.content.length>30?e.content.slice(0,30)+'...':e.content)}</div>
                <div class="st-recent-meta">${cat?cat.emoji+' '+esc(cat.name):''} · ${timeStr}</div>
              </div>
            </div>`;
          }).join('')}
        </div>`:''}

        <!-- 最近碎念 -->
        ${recentNotes.length>0?`
        <div class="sec-hdr"><div class="sec-title">最近碎念</div></div>
        <div class="st-recent-list">
          ${recentNotes.map(n=>{
            const dd=new Date(n.createdAt);
            const timeStr=p2(dd.getMonth()+1)+'/'+p2(dd.getDate())+' '+p2(dd.getHours())+':'+p2(dd.getMinutes());
            return `<div class="st-recent-item">
              <div class="st-recent-dot" style="background:var(--ac)"></div>
              <div class="st-recent-info">
                <div class="st-recent-text">${n.mood} ${esc(n.text.length>30?n.text.slice(0,30)+'...':n.text)}</div>
                <div class="st-recent-meta">${timeStr}</div>
              </div>
            </div>`;
          }).join('')}
        </div>`:''}

        <!-- 数据管理 -->
        <div class="sec-hdr"><div class="sec-title">数据管理</div><span class="sec-sub">备份 & 恢复</span></div>
        <div class="backup-card">
          <div class="backup-info">
            <div class="backup-icon">🛡️</div>
            <div class="backup-text">
              <div class="backup-title">保护你的数据</div>
              <div class="backup-desc">定期备份可防止数据丢失，换手机也能轻松恢复</div>
            </div>
          </div>
          <div class="backup-btns">
            <button class="backup-btn backup-export" id="backupExport">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              导出备份
            </button>
            <button class="backup-btn backup-import" id="backupImport">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              恢复数据
            </button>
          </div>
        </div>
      </div>`;
  }

  // ========== MODALS ==========
  showModal(evt=null){
    const isEdit=!!evt;
    const o=document.createElement('div');
    o.className='modal-ov active';
    o.innerHTML=`<div class="modal-sh">
      <div class="modal-hd"></div>
      <div class="modal-hdr">
        <span class="modal-tl">${isEdit?'编辑记录':'智能记录'}</span>
        <button class="modal-cl" id="mclose">${IC.close}</button>
      </div>
      <div class="modal-bd">
        ${!isEdit?`
        <div class="ig">
          <label class="il">说一句话，自动识别时间和分类</label>
          <textarea class="ti si" id="smartInput" placeholder="试试输入：\n· 明天下午3点开会讨论项目进度\n· 周五晚上8点去健身房\n· 30分钟后提醒我吃药" rows="4"></textarea>
        </div>
        <div class="pp" id="parsePreview" style="display:none">
          <div class="pp-tl">✨ 智能识别结果</div>
          <div class="pp-items">
            <div class="pp-item"><div class="pv-ic">📋</div><div class="pv-info"><span class="pv-lbl">事件</span><span class="pv-val" id="pvContentVal">-</span></div></div>
            <div class="pp-item"><div class="pv-ic" id="pvCatIcon">📌</div><div class="pv-info"><span class="pv-lbl">分类</span><span class="pv-val" id="pvCatVal">-</span></div><button class="pv-chg" id="pvCatChange">修改</button></div>
            <div class="pp-item"><div class="pv-ic">📅</div><div class="pv-info"><span class="pv-lbl">事件时间</span><span class="pv-val" id="pvEventTimeVal">未设置</span></div><button class="pv-chg" id="pvTimeChange">修改</button></div>
            <div class="pp-item" id="reminderToggleRow" style="display:none">
              <div class="pv-ic">🔔</div>
              <div class="pv-info"><span class="pv-lbl">到期提醒</span><span class="pv-val" id="pvReminderStatus">已开启</span></div>
              <label class="toggle-switch" id="reminderSwitch"><input type="checkbox" id="reminderCheck" checked><span class="toggle-slider"></span></label>
            </div>
            <div class="pp-item" id="reminderTimeRow" style="display:none"><div class="pv-ic">⏰</div><div class="pv-info"><span class="pv-lbl">提醒时间</span><span class="pv-val" id="pvTimeVal">未设置</span><span class="pv-sub" id="pvTimeSub"></span></div></div>
            <div class="ar" id="advanceReminder" style="display:none">
              <label class="il">提前提醒</label>
              <div class="ao" id="advanceOpts">
                <button class="aopt" data-min="0">准时</button>
                <button class="aopt" data-min="5">5分钟</button>
                <button class="aopt sel" data-min="15">15分钟</button>
                <button class="aopt" data-min="30">30分钟</button>
                <button class="aopt" data-min="60">1小时</button>
              </div>
            </div>
          </div>
        </div>
        <div class="ma" id="manualAdjust" style="display:none">
          <div class="ig"><label class="il">修改分类</label><div class="csel" id="catSelector">
            ${this.categories.map(c=>{const col=this.colorByName(c.color);return `<button class="copt" data-catid="${c.id}" data-color="${c.color}">${c.emoji||''} ${esc(c.name)}</button>`}).join('')}
            <button class="copt copt-add" id="addCatBtnSmart">${IC.plus} 添加分类</button>
          </div></div>
          <div class="ig"><label class="il">修改事件时间</label><div class="dtrow"><input type="date" class="ti" id="rDate"><input type="time" class="ti" id="rTime"></div></div>
        </div>
        <button class="subbtn" id="submitSmart" style="display:none">确认记录</button>
        `:`
        <div class="ig"><label class="il">内容</label><textarea class="ti" id="evContent" placeholder="记录你想说的...">${esc(evt.content)}</textarea></div>
        <div class="ig"><label class="il">分类</label><div class="csel">
          ${this.categories.map(c=>{const col=this.colorByName(c.color);const sel=evt.category===c.id;return `<button class="copt ${sel?'sel':''}" data-catid="${c.id}" data-color="${c.color}" style="${sel?'background:'+col.hex+';border-color:transparent;color:white':''}">${c.emoji||''} ${esc(c.name)}</button>`}).join('')}
          <button class="copt copt-add" id="addCatBtnEdit">${IC.plus} 添加分类</button>
        </div></div>
        <div class="ig"><label class="il">事件时间（可选）</label><div class="dtrow"><input type="date" class="ti" id="rDate" value="${evt.eventTime?evt.eventTime.slice(0,10):(evt.reminderTime?evt.reminderTime.slice(0,10):'')}"><input type="time" class="ti" id="rTime" value="${evt.eventTime?evt.eventTime.slice(11,16):(evt.reminderTime?evt.reminderTime.slice(11,16):'')}"></div></div>
        <div class="ig"><label class="il">提前提醒</label><div class="ao" id="editAdvanceOpts">
          ${[{min:0,label:'准时'},{min:5,label:'5分钟'},{min:15,label:'15分钟'},{min:30,label:'30分钟'},{min:60,label:'1小时'}].map(x=>{const sel=(evt.advanceMinutes||15)===x.min;return `<button class="aopt ${sel?'sel':''}" data-min="${x.min}">${x.label}</button>`}).join('')}
        </div></div>
        <button class="subbtn" id="submitEvt">保存修改</button>
        `}
      </div>
    </div>`;
    document.body.appendChild(o);
    o.querySelector('#mclose').onclick=()=>o.remove();
    o.addEventListener('click',e=>{if(e.target===o)o.remove()});
    if(isEdit)this.bindEditModal(o,evt);
    else this.bindSmartModal(o);
    const input=o.querySelector('#smartInput')||o.querySelector('#evContent');
    if(input)setTimeout(()=>input.focus(),300);
  }

  bindSmartModal(o){
    const smartInput=o.querySelector('#smartInput');
    const preview=o.querySelector('#parsePreview');
    const submitBtn=o.querySelector('#submitSmart');
    const manualAdjust=o.querySelector('#manualAdjust');
    const advanceReminder=o.querySelector('#advanceReminder');
    const reminderToggleRow=o.querySelector('#reminderToggleRow');
    const reminderTimeRow=o.querySelector('#reminderTimeRow');
    const reminderCheck=o.querySelector('#reminderCheck');
    const reminderStatusEl=o.querySelector('#pvReminderStatus');
    let currentParsed=null,advanceMinutes=15,eventTimeISO=null,reminderEnabled=true;

    const calcReminderTime=()=>{
      if(!eventTimeISO||!reminderEnabled)return null;
      return new Date(new Date(eventTimeISO).getTime()-advanceMinutes*60000);
    };
    const updateReminderPreview=()=>{
      if(!reminderEnabled){
        reminderTimeRow.style.display='none';
        advanceReminder.style.display='none';
        reminderStatusEl.textContent='已关闭';
        reminderStatusEl.style.color='var(--t3)';
        return;
      }
      const reminderDt=calcReminderTime();
      if(reminderDt){
        reminderTimeRow.style.display='flex';
        advanceReminder.style.display='block';
        reminderStatusEl.textContent='已开启';
        reminderStatusEl.style.color='var(--ok)';
        o.querySelector('#pvTimeVal').textContent=fmtFull(reminderDt.toISOString());
        o.querySelector('#pvTimeVal').style.color='#F59E0B';
        const sub=o.querySelector('#pvTimeSub');
        if(advanceMinutes>0){const h=Math.floor(advanceMinutes/60),m=advanceMinutes%60;let txt='提前';if(h>0)txt+=h+'小时';if(m>0)txt+=m+'分钟';sub.textContent=txt+'提醒'}else{sub.textContent='准时提醒'}
        if(currentParsed){currentParsed.reminderTime=reminderDt.toISOString().slice(0,16)+':00';currentParsed.eventTime=eventTimeISO}
        o.querySelector('#rDate').value=eventTimeISO.slice(0,10);
        o.querySelector('#rTime').value=eventTimeISO.slice(11,16);
      }else{
        reminderTimeRow.style.display='none';
        advanceReminder.style.display='none';
      }
    };

    // 提醒开关
    reminderCheck.onchange=()=>{
      reminderEnabled=reminderCheck.checked;
      updateReminderPreview();
    };

    o.querySelectorAll('#advanceOpts .aopt').forEach(b=>{
      b.onclick=()=>{o.querySelectorAll('#advanceOpts .aopt').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');advanceMinutes=parseInt(b.dataset.min);updateReminderPreview()};
    });

    // IME 中文输入法处理：在组合输入期间不触发解析
    let isComposing=false;
    smartInput.addEventListener('compositionstart',()=>{isComposing=true});
    smartInput.addEventListener('compositionend',()=>{isComposing=false;doParseInput()});

    let debounceTimer=null;
    const doParseInput=()=>{
      clearTimeout(debounceTimer);
      debounceTimer=setTimeout(()=>{
        if(isComposing)return; // IME 组合中不解析
        const text=smartInput.value.trim();
        if(!text){preview.style.display='none';submitBtn.style.display='none';manualAdjust.style.display='none';advanceReminder.style.display='none';reminderToggleRow.style.display='none';reminderTimeRow.style.display='none';currentParsed=null;eventTimeISO=null;return}
        currentParsed=this.parser.parse(text);
        if(currentParsed){
          preview.style.display='block';submitBtn.style.display='block';
          o.querySelector('#pvContentVal').textContent=currentParsed.content;
          const cat=this.catById(currentParsed.categoryId);
          if(cat){o.querySelector('#pvCatIcon').textContent=cat.emoji||'📌';o.querySelector('#pvCatVal').textContent=cat.name;o.querySelector('#pvCatVal').style.color=this.colorByName(cat.color).hex}
          if(currentParsed.reminderTime){
            eventTimeISO=currentParsed.reminderTime;
            o.querySelector('#pvEventTimeVal').textContent=fmtFull(new Date(eventTimeISO).toISOString());
            o.querySelector('#pvEventTimeVal').style.color='var(--t1)';
            reminderToggleRow.style.display='flex';
            updateReminderPreview();
          }else{
            eventTimeISO=null;
            o.querySelector('#pvEventTimeVal').textContent='未识别到时间';o.querySelector('#pvEventTimeVal').style.color='var(--t3)';
            reminderToggleRow.style.display='none';
            reminderTimeRow.style.display='none';
            advanceReminder.style.display='none';
          }
          o.querySelectorAll('#catSelector .copt').forEach(b=>{b.classList.remove('sel');b.style.background='';b.style.borderColor='';b.style.color='';if(b.dataset.catid===currentParsed.categoryId){const col=this.colorByName(b.dataset.color);b.classList.add('sel');b.style.background=col.hex;b.style.borderColor='transparent';b.style.color='white'}});
        }
      },300);
    };
    smartInput.oninput=()=>{
      if(!isComposing)doParseInput();
    };

    o.querySelector('#pvCatChange').onclick=()=>{manualAdjust.style.display=manualAdjust.style.display==='none'?'block':'none'};
    o.querySelector('#pvTimeChange').onclick=()=>{manualAdjust.style.display=manualAdjust.style.display==='none'?'block':'none'};

    o.querySelectorAll('#catSelector .copt').forEach(b=>{
      b.onclick=()=>{
        o.querySelectorAll('#catSelector .copt').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.borderColor='';x.style.color=''});
        const col=this.colorByName(b.dataset.color);b.classList.add('sel');b.style.background=col.hex;b.style.borderColor='transparent';b.style.color='white';
        if(currentParsed){currentParsed.categoryId=b.dataset.catid;const cat=this.catById(b.dataset.catid);if(cat){o.querySelector('#pvCatIcon').textContent=cat.emoji||'📌';o.querySelector('#pvCatVal').textContent=cat.name;o.querySelector('#pvCatVal').style.color=col.hex}}
      };
    });

    const rDate=o.querySelector('#rDate'),rTime=o.querySelector('#rTime');
    const updateManual=()=>{if(rDate.value&&rTime.value){eventTimeISO=rDate.value+'T'+rTime.value+':00';o.querySelector('#pvEventTimeVal').textContent=fmtFull(new Date(eventTimeISO).toISOString());o.querySelector('#pvEventTimeVal').style.color='var(--t1)';reminderToggleRow.style.display='flex';updateReminderPreview()}};
    rDate.onchange=updateManual;rTime.onchange=updateManual;

    // Add category button
    const addCatBtnS=o.querySelector('#addCatBtnSmart');
    if(addCatBtnS)addCatBtnS.onclick=(ev)=>{
      ev.preventDefault();
      this.showAddCatForm(o,(newCat)=>{
        // Re-render category selector inside the modal
        const catSel=o.querySelector('#catSelector');
        if(catSel){
          catSel.innerHTML=this.categories.map(c=>{const col=this.colorByName(c.color);const isSel=currentParsed&&currentParsed.categoryId===c.id;return `<button class="copt ${isSel?'sel':''}" data-catid="${c.id}" data-color="${c.color}" style="${isSel?'background:'+col.hex+';border-color:transparent;color:white':''}">${c.emoji||''} ${esc(c.name)}</button>`}).join('')+`<button class="copt copt-add" id="addCatBtnSmart">${IC.plus} 添加分类</button>`;
          // Re-bind category clicks
          catSel.querySelectorAll('.copt:not(.copt-add)').forEach(b=>{
            b.onclick=()=>{
              catSel.querySelectorAll('.copt').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.borderColor='';x.style.color=''});
              const col=this.colorByName(b.dataset.color);b.classList.add('sel');b.style.background=col.hex;b.style.borderColor='transparent';b.style.color='white';
              if(currentParsed){currentParsed.categoryId=b.dataset.catid;const cat=this.catById(b.dataset.catid);if(cat){o.querySelector('#pvCatIcon').textContent=cat.emoji||'📌';o.querySelector('#pvCatVal').textContent=cat.name;o.querySelector('#pvCatVal').style.color=col.hex}}
            };
          });
          // Re-bind add button
          const newAddBtn=catSel.querySelector('#addCatBtnSmart');
          if(newAddBtn)newAddBtn.onclick=addCatBtnS.onclick;
          // Auto-select new category
          if(currentParsed){currentParsed.categoryId=newCat.id;const col=this.colorByName(newCat.color);o.querySelector('#pvCatIcon').textContent=newCat.emoji||'📌';o.querySelector('#pvCatVal').textContent=newCat.name;o.querySelector('#pvCatVal').style.color=col.hex}
          const newBtn=catSel.querySelector(`[data-catid="${newCat.id}"]`);
          if(newBtn){catSel.querySelectorAll('.copt').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.borderColor='';x.style.color=''});const col=this.colorByName(newCat.color);newBtn.classList.add('sel');newBtn.style.background=col.hex;newBtn.style.borderColor='transparent';newBtn.style.color='white'}
        }
      });
    };

    submitBtn.onclick=async()=>{
      if(!currentParsed||!currentParsed.content){this.toast('请输入内容');return}
      const catId=currentParsed.categoryId||this.categories[0]?.id;
      const cat=this.catById(catId);
      const reminderDt=reminderEnabled?calcReminderTime():null;
      const rt=reminderDt?(reminderDt.getFullYear()+'-'+p2(reminderDt.getMonth()+1)+'-'+p2(reminderDt.getDate())+'T'+p2(reminderDt.getHours())+':'+p2(reminderDt.getMinutes())+':00'):null;
      const ne={id:uid(),content:currentParsed.content,category:catId,categoryName:cat?cat.name:'',eventTime:eventTimeISO||null,reminderTime:rt,advanceMinutes:reminderEnabled?advanceMinutes:0,reminderDone:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
      await this.db.put('events',ne);
      if(rt)this.rem.schedule(ne);
      let msg='已记录';
      if(rt)msg+=`，将在${fmtFull(reminderDt.toISOString())}提醒你`;
      else if(eventTimeISO&&!reminderEnabled)msg+='（不提醒）';
      this.toast(msg);
      o.remove();await this.load();this.render();
    };
  }

  bindEditModal(o,evt){
    let advanceMinutes=evt.advanceMinutes!=null?evt.advanceMinutes:15;
    o.querySelectorAll('.copt:not(.copt-add)').forEach(b=>{
      b.onclick=()=>{o.querySelectorAll('.copt:not(.copt-add)').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.borderColor='';x.style.color=''});const col=this.colorByName(b.dataset.color);b.classList.add('sel');b.style.background=col.hex;b.style.borderColor='transparent';b.style.color='white'};
    });
    // Add category button in edit modal
    const addCatBtnE=o.querySelector('#addCatBtnEdit');
    if(addCatBtnE)addCatBtnE.onclick=(ev)=>{
      ev.preventDefault();
      this.showAddCatForm(o,(newCat)=>{
        const csel=o.querySelector('.csel');
        if(csel){
          // Remove old add button, append new category + add button
          const oldAdd=csel.querySelector('.copt-add');if(oldAdd)oldAdd.remove();
          const newOptHtml=`<button class="copt" data-catid="${newCat.id}" data-color="${newCat.color}">${newCat.emoji||''} ${esc(newCat.name)}</button><button class="copt copt-add" id="addCatBtnEdit">${IC.plus} 添加分类</button>`;
          csel.insertAdjacentHTML('beforeend',newOptHtml);
          // Select the new category
          csel.querySelectorAll('.copt:not(.copt-add)').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.borderColor='';x.style.color=''});
          const newBtn=csel.querySelector(`[data-catid="${newCat.id}"]`);
          if(newBtn){const col=this.colorByName(newCat.color);newBtn.classList.add('sel');newBtn.style.background=col.hex;newBtn.style.borderColor='transparent';newBtn.style.color='white'}
          // Re-bind all category clicks
          csel.querySelectorAll('.copt:not(.copt-add)').forEach(b=>{
            b.onclick=()=>{csel.querySelectorAll('.copt:not(.copt-add)').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.borderColor='';x.style.color=''});const col=this.colorByName(b.dataset.color);b.classList.add('sel');b.style.background=col.hex;b.style.borderColor='transparent';b.style.color='white'};
          });
          // Re-bind add button
          const newAddBtn=csel.querySelector('#addCatBtnEdit');
          if(newAddBtn)newAddBtn.onclick=addCatBtnE.onclick;
        }
      });
    };
    o.querySelectorAll('#editAdvanceOpts .aopt').forEach(b=>{
      b.onclick=()=>{o.querySelectorAll('#editAdvanceOpts .aopt').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');advanceMinutes=parseInt(b.dataset.min)};
    });
    o.querySelector('#submitEvt').onclick=async()=>{
      const content=o.querySelector('#evContent').value.trim();
      if(!content){this.toast('请输入内容');return}
      const sc=o.querySelector('.copt.sel');
      const catId=sc?sc.dataset.catid:this.categories[0]?.id;
      const dv=o.querySelector('#rDate').value,tv=o.querySelector('#rTime').value;
      let eventTime=null,rt=null;
      if(dv&&tv){eventTime=dv+'T'+tv+':00';const evtDt=new Date(eventTime);const reminderDt=new Date(evtDt.getTime()-advanceMinutes*60000);rt=reminderDt.getFullYear()+'-'+p2(reminderDt.getMonth()+1)+'-'+p2(reminderDt.getDate())+'T'+p2(reminderDt.getHours())+':'+p2(reminderDt.getMinutes())+':00'}
      const cat=this.catById(catId);
      evt.content=content;evt.category=catId;evt.categoryName=cat?cat.name:'';evt.eventTime=eventTime;evt.reminderTime=rt;evt.advanceMinutes=advanceMinutes;evt.reminderDone=rt?false:evt.reminderDone;evt.updatedAt=new Date().toISOString();
      await this.db.put('events',evt);if(rt)this.rem.schedule(evt);
      this.toast('已更新');o.remove();await this.load();this.render();
    };
  }

  showAddCatForm(modalOv,callback){
    const CAT_EMOJIS=['🏠','💼','💪','📖','📝','🎯','💊','🧘','🏃','🍎','💤','🎵','✈️','📸','🌱','☀️','💡','🎨','🐾','💻'];
    const pop=document.createElement('div');
    pop.className='cfm-ov active';
    pop.innerHTML=`<div class="cfm-dlg" style="width:300px;text-align:left;padding:20px">
      <h3 style="text-align:center;margin-bottom:12px">添加分类</h3>
      <div class="ig"><label class="il">分类名称</label><input type="text" class="ti" id="newCatName" placeholder="例如：运动" maxlength="8"></div>
      <div class="ig"><label class="il">选择图标</label><div class="emoji-grid" style="grid-template-columns:repeat(8,1fr);gap:4px;padding:4px 0">${CAT_EMOJIS.map((e,i)=>`<button class="ep ${i===0?'active':''}" data-emoji="${e}" style="width:30px;height:30px;font-size:15px">${e}</button>`).join('')}</div></div>
      <div class="ig"><label class="il">选择颜色</label><div class="crow" style="gap:6px;padding:4px 0">${COLORS.map((c,i)=>`<div class="cdot ${i===0?'active':''}" data-cname="${c.name}" style="background:${c.hex};width:26px;height:26px"></div>`).join('')}</div></div>
      <div class="cfm-btns" style="margin-top:10px"><button class="btn-c" id="addCatCancel">取消</button><button class="subbtn" id="addCatConfirm" style="flex:1;margin-top:0;padding:10px">确认添加</button></div>
    </div>`;
    document.body.appendChild(pop);
    // Emoji picker
    pop.querySelectorAll('.ep').forEach(e=>{e.onclick=(ev)=>{ev.preventDefault();pop.querySelectorAll('.ep').forEach(x=>x.classList.remove('active'));e.classList.add('active')}});
    // Color picker
    pop.querySelectorAll('.cdot').forEach(c=>{c.onclick=(ev)=>{ev.preventDefault();pop.querySelectorAll('.cdot').forEach(x=>x.classList.remove('active'));c.classList.add('active')}});
    pop.querySelector('#addCatCancel').onclick=()=>pop.remove();
    pop.addEventListener('click',e=>{if(e.target===pop)pop.remove()});
    pop.querySelector('#addCatConfirm').onclick=async()=>{
      const name=pop.querySelector('#newCatName').value.trim();
      if(!name){this.toast('请输入分类名称');return}
      if(this.categories.some(c=>c.name===name)){this.toast('分类已存在');return}
      const emoji=pop.querySelector('.ep.active')?.dataset.emoji||'📝';
      const color=pop.querySelector('.cdot.active')?.dataset.cname||'sky';
      const newCat={id:uid(),name,color,emoji};
      await this.db.put('categories',newCat);
      await this.load();
      pop.remove();
      this.toast('分类已添加');
      if(callback)callback(newCat);
    };
    setTimeout(()=>pop.querySelector('#newCatName').focus(),300);
  }

  confirmDel(id){
    const o=document.createElement('div');
    o.className='cfm-ov active';
    o.innerHTML=`<div class="cfm-dlg"><h3>删除记录</h3><p>确定要删除这条记录吗？</p><div class="cfm-btns"><button class="btn-c" id="dc">取消</button><button class="btn-d" id="dok">删除</button></div></div>`;
    document.body.appendChild(o);
    o.querySelector('#dc').onclick=()=>o.remove();
    o.querySelector('#dok').onclick=async()=>{await this.db.delete('events',id);this.rem.cancel(id);o.remove();await this.load();this.render();this.toast('已删除')};
  }

  // ========== EVENT BINDING ==========
  bindAll(){
    // Tabs
    document.querySelectorAll('.tab-item').forEach(t=>{t.onclick=()=>{this.tab=t.dataset.tab;this.render()}});
    // FAB
    const fab=document.getElementById('fab');
    if(fab)fab.onclick=()=>this.showModal();
    // 置顶的智能记录按钮
    const smartAddTop=document.getElementById('smartAddTop');
    if(smartAddTop)smartAddTop.onclick=()=>this.showModal();
    // Goto habits from home
    document.querySelectorAll('[data-goto]').forEach(b=>{b.onclick=()=>{this.tab=b.dataset.goto;this.render()}});

    if(this.tab==='home')this.bindHome();
    else if(this.tab==='habits')this.bindHabitPage();
    else if(this.tab==='notes')this.bindNotesPage();
    else if(this.tab==='stats')this.bindStatsPage();
  }

  bindHome(){
    // Habit section toggle (collapse/expand)
    const habitToggle=document.getElementById('habitToggle');
    if(habitToggle){
      habitToggle.onclick=(e)=>{
        // 如果点击的是"管理"按钮，不触发折叠
        if(e.target.closest('[data-goto]'))return;
        const section=habitToggle.closest('.habit-section');
        const wrap=section.querySelector('.habit-grid-wrap');
        if(section.classList.contains('collapsed')){
          // 展开
          wrap.style.height=wrap.scrollHeight+'px';
          section.classList.remove('collapsed');
          this.habitCollapsed=false;
          setTimeout(()=>{wrap.style.height=''},300);
        }else{
          // 收起
          wrap.style.height=wrap.scrollHeight+'px';
          wrap.offsetHeight; // force reflow
          wrap.style.height='0';
          section.classList.add('collapsed');
          this.habitCollapsed=true;
        }
      };
    }
    // Habit cards - toggle
    document.querySelectorAll('.habit-card[data-hid]').forEach(c=>{
      c.onclick=()=>{
        playClick();
        const icon=c.querySelector('.habit-icon');
        icon.classList.add('flipping');
        setTimeout(()=>this.toggleHabit(c.dataset.hid),300);
      };
    });
    // Category chips
    document.querySelectorAll('.cat-chip[data-cat]').forEach(c=>{
      c.onclick=()=>{playClick();this.activeCat=c.dataset.cat;this.refreshHome()};
    });
    // Search
    const sinput=document.getElementById('sinput');
    const sclear=document.getElementById('sclear');
    const sbar=document.getElementById('sbar');
    if(sinput){
      sinput.oninput=()=>{this.query=sinput.value;sclear.classList.toggle('vis',!!this.query);this.refreshEvents()};
      sinput.onfocus=()=>sbar.classList.add('focused');
      sinput.onblur=()=>sbar.classList.remove('focused');
    }
    if(sclear)sclear.onclick=()=>{this.query='';sinput.value='';sclear.classList.remove('vis');this.refreshEvents()};
    // Home add category button
    const homeCatAdd=document.getElementById('homeCatAdd');
    if(homeCatAdd)homeCatAdd.onclick=()=>{
      this.showAddCatForm(null,()=>{this.render()});
    };
    // Card actions
    this.bindCardActions();
  }

  refreshHome(){
    // Re-render category chips and events
    document.querySelectorAll('.cat-chip').forEach(c=>{c.classList.toggle('active',c.dataset.cat===this.activeCat)});
    this.refreshEvents();
  }

  refreshEvents(){
    const list=document.querySelector('.events-list');
    const empty=document.querySelector('.empty');
    const scount=document.querySelector('.scount');
    if(list)list.remove();
    if(empty)empty.remove();
    if(scount)scount.remove();
    const page=document.querySelector('.page.active');
    if(!page)return;
    const tmp=document.createElement('div');
    tmp.innerHTML=this.renderEventsList();
    while(tmp.firstChild)page.appendChild(tmp.firstChild);
    this.bindCardActions();
  }

  bindCardActions(){
    document.querySelectorAll('.btn-edit').forEach(b=>{b.onclick=e=>{e.stopPropagation();const ev=this.events.find(x=>x.id===b.dataset.id);if(ev)this.showModal(ev)}});
    document.querySelectorAll('.btn-del').forEach(b=>{b.onclick=e=>{e.stopPropagation();this.confirmDel(b.dataset.id)}});
    // Date group toggle (collapse/expand)
    document.querySelectorAll('.dg-title[data-dgk]').forEach(t=>{
      t.onclick=()=>{
        const k=t.dataset.dgk;
        const group=t.closest('.dg-group');
        const body=group.querySelector('.dg-body');
        if(group.classList.contains('collapsed')){
          body.style.height=body.scrollHeight+'px';
          group.classList.remove('collapsed');
          this.collapsedDates.delete(k);
          setTimeout(()=>{body.style.height=''},300);
        }else{
          body.style.height=body.scrollHeight+'px';
          body.offsetHeight;
          body.style.height='0';
          group.classList.add('collapsed');
          this.collapsedDates.add(k);
        }
      };
    });
  }

  bindStatsPage(){
    const panel=document.getElementById('stDetailPanel');
    const titleEl=document.getElementById('stDetailTitle');
    const bodyEl=document.getElementById('stDetailBody');
    const closeBtn=document.getElementById('stDetailClose');

    if(closeBtn)closeBtn.onclick=()=>{panel.style.display='none'};

    // Clickable stat cards
    document.querySelectorAll('.st-card.st-clickable').forEach(card=>{
      card.onclick=()=>{
        const type=card.dataset.detail;
        let title='',rows='';
        if(type==='events'){
          title=`全部记录 (${this.events.length})`;
          rows=this.events.slice(0,20).map(e=>{
            const cat=this.catById(e.category);
            const col=cat?this.colorByName(cat.color):COLORS[0];
            const dd=new Date(e.createdAt);
            const ts=p2(dd.getMonth()+1)+'/'+p2(dd.getDate())+' '+p2(dd.getHours())+':'+p2(dd.getMinutes());
            return `<div class="st-detail-row"><div class="st-detail-dot" style="background:${col.hex}"></div><div class="st-detail-text">${esc(e.content)}</div><div class="st-detail-time">${ts}</div></div>`;
          }).join('');
          if(this.events.length>20)rows+=`<div class="st-detail-row" style="justify-content:center;color:var(--t3);font-size:11px">还有 ${this.events.length-20} 条记录...</div>`;
        }else if(type==='today'){
          const todayEvents=this.events.filter(e=>new Date(e.createdAt).toDateString()===new Date().toDateString());
          title=`今日新增 (${todayEvents.length})`;
          if(todayEvents.length===0)rows='<div class="st-detail-row" style="justify-content:center;color:var(--t3);font-size:12px">今天还没有记录哦~</div>';
          else rows=todayEvents.map(e=>{
            const cat=this.catById(e.category);
            const col=cat?this.colorByName(cat.color):COLORS[0];
            const dd=new Date(e.createdAt);
            const ts=p2(dd.getHours())+':'+p2(dd.getMinutes());
            return `<div class="st-detail-row"><div class="st-detail-dot" style="background:${col.hex}"></div><div class="st-detail-text">${esc(e.content)}</div><div class="st-detail-time">${ts}</div></div>`;
          }).join('');
        }else if(type==='notes'){
          title=`碎念笔记 (${this.notes.length})`;
          rows=this.notes.slice(0,20).map(n=>{
            const dd=new Date(n.createdAt);
            const ts=p2(dd.getMonth()+1)+'/'+p2(dd.getDate())+' '+p2(dd.getHours())+':'+p2(dd.getMinutes());
            return `<div class="st-detail-row"><div class="st-detail-dot" style="background:var(--ac)"></div><div class="st-detail-text">${n.mood} ${esc(n.text)}</div><div class="st-detail-time">${ts}</div></div>`;
          }).join('');
          if(this.notes.length>20)rows+=`<div class="st-detail-row" style="justify-content:center;color:var(--t3);font-size:11px">还有 ${this.notes.length-20} 条碎念...</div>`;
        }else if(type==='habits'){
          title=`习惯打卡 (${this.habitLogs.length})`;
          const grouped={};
          this.habitLogs.forEach(l=>{
            const h=this.habits.find(x=>x.id===l.habitId);
            const name=h?h.name:'未知习惯';
            if(!grouped[name])grouped[name]={count:0,emoji:h?h.emoji:'📝'};
            grouped[name].count++;
          });
          rows=Object.entries(grouped).sort((a,b)=>b[1].count-a[1].count).map(([name,info])=>{
            return `<div class="st-detail-row"><div class="st-detail-dot" style="background:var(--ok)"></div><div class="st-detail-text">${info.emoji} ${esc(name)}</div><div class="st-detail-time">${info.count}次</div></div>`;
          }).join('');
          if(!rows)rows='<div class="st-detail-row" style="justify-content:center;color:var(--t3);font-size:12px">还没有打卡记录~</div>';
        }
        if(panel&&titleEl&&bodyEl){
          titleEl.textContent=title;
          bodyEl.innerHTML=rows;
          panel.style.display='block';
          panel.scrollIntoView({behavior:'smooth',block:'nearest'});
        }
      };
    });

    // Heatmap cell hover/click tooltip
    document.querySelectorAll('.hm-cell[data-date]').forEach(cell=>{
      cell.onclick=()=>{
        const tip=document.getElementById('hmTip');
        if(tip){
          const date=cell.dataset.date;
          const count=cell.dataset.count;
          tip.textContent=`${date}: ${count}项活动`;
          tip.style.display='block';
          setTimeout(()=>{tip.style.display='none'},2000);
        }
      };
    });

    // Category item click - show events of that category
    document.querySelectorAll('.cs-item.st-clickable[data-catid]').forEach(item=>{
      item.onclick=()=>{
        const catId=item.dataset.catid;
        const cat=this.catById(catId);
        const catEvents=this.events.filter(e=>e.category===catId);
        const panel=document.getElementById('stDetailPanel');
        const titleEl=document.getElementById('stDetailTitle');
        const bodyEl=document.getElementById('stDetailBody');
        if(panel&&titleEl&&bodyEl){
          titleEl.textContent=`${cat?cat.emoji+' ':''}${cat?cat.name:'分类'} (${catEvents.length})`;
          bodyEl.innerHTML=catEvents.slice(0,20).map(e=>{
            const dd=new Date(e.createdAt);
            const ts=p2(dd.getMonth()+1)+'/'+p2(dd.getDate())+' '+p2(dd.getHours())+':'+p2(dd.getMinutes());
            return `<div class="st-detail-row"><div class="st-detail-dot" style="background:${cat?this.colorByName(cat.color).hex:'var(--ac)'}"></div><div class="st-detail-text">${esc(e.content)}</div><div class="st-detail-time">${ts}</div></div>`;
          }).join('')||(catEvents.length===0?'<div class="st-detail-row" style="justify-content:center;color:var(--t3);font-size:12px">该分类暂无记录</div>':'');
          panel.style.display='block';
          panel.scrollIntoView({behavior:'smooth',block:'nearest'});
        }
      };
    });

    // Backup & Restore buttons
    const exportBtn=document.getElementById('backupExport');
    if(exportBtn)exportBtn.onclick=()=>this.exportData();
    const importBtn=document.getElementById('backupImport');
    if(importBtn)importBtn.onclick=()=>this.importData();
  }

  bindHabitPage(){
    // Emoji picker
    document.querySelectorAll('.ep').forEach(e=>{e.onclick=()=>{document.querySelectorAll('.ep').forEach(x=>x.classList.remove('active'));e.classList.add('active')}});
    // Color picker
    document.querySelectorAll('.cdot').forEach(c=>{c.onclick=()=>{document.querySelectorAll('.cdot').forEach(x=>x.classList.remove('active'));c.classList.add('active')}});
    // Weekday selector
    document.querySelectorAll('.wk-btn').forEach(b=>{b.onclick=()=>b.classList.toggle('active')});
    // Add habit
    const addBtn=document.getElementById('addHabitBtn');
    if(addBtn)addBtn.onclick=async()=>{
      const name=document.getElementById('newHabitName').value.trim();
      if(!name){this.toast('请输入习惯名称');return}
      if(this.habits.some(h=>h.name===name)){this.toast('习惯已存在');return}
      const emoji=document.querySelector('.ep.active')?.dataset.emoji||'📝';
      const colorIdx=parseInt(document.querySelector('.cdot.active')?.dataset.cidx||'0');
      const weekdays=[];document.querySelectorAll('.wk-btn.active').forEach(b=>weekdays.push(parseInt(b.dataset.dow)));
      if(weekdays.length===0){this.toast('请选择至少一天');return}
      await this.db.put('habits',{id:uid(),name,emoji,colorIdx,weekdays,order:this.habits.length});
      await this.load();this.render();this.toast('习惯已添加');
    };
    // Delete habit
    document.querySelectorAll('.hi-del').forEach(b=>{
      b.onclick=async()=>{
        await this.db.delete('habits',b.dataset.hid);
        await this.load();this.render();this.toast('习惯已删除');
      };
    });
  }

  bindNotesPage(){
    // Mood selector
    let selectedMood='😊';
    let selectedNoteCat=null;
    document.querySelectorAll('.mood-b').forEach(b=>{
      b.onclick=()=>{document.querySelectorAll('.mood-b').forEach(x=>x.classList.remove('active'));b.classList.add('active');selectedMood=b.dataset.mood};
    });

    // Note category selector in input area
    document.querySelectorAll('#noteCatRow .ni-cat-chip').forEach(b=>{
      b.onclick=()=>{
        document.querySelectorAll('#noteCatRow .ni-cat-chip').forEach(x=>{x.classList.remove('sel');x.style.background='';x.style.color='';x.style.borderColor=''});
        b.classList.add('sel');
        selectedNoteCat=b.dataset.ncid||null;
        if(b.dataset.ncid&&b.dataset.color){
          const col=this.colorByName(b.dataset.color);
          b.style.background=col.hex;b.style.color='#fff';b.style.borderColor=col.hex;
        }
      };
    });

    // Add note
    const addBtn=document.getElementById('addNoteBtn');
    if(addBtn)addBtn.onclick=()=>{
      const input=document.getElementById('noteInput');
      if(input)this.addNote(input.value,selectedMood,selectedNoteCat);
    };

    // Delete note
    document.querySelectorAll('.nc-del').forEach(b=>{b.onclick=()=>this.deleteNote(b.dataset.nid)});

    // Filter chips
    document.querySelectorAll('.nc-filter-chip[data-nf]').forEach(b=>{
      b.onclick=()=>{
        this.activeNoteCat=b.dataset.nf==='all'?'all':(b.dataset.nf==='uncategorized'?'uncategorized':b.dataset.nf);
        this.render();
      };
    });

    // Edit note category (change tag on existing note)
    document.querySelectorAll('.nc-edit-cat').forEach(b=>{
      b.onclick=()=>{
        const nid=b.dataset.nid;
        const note=this.notes.find(n=>n.id===nid);
        if(!note)return;
        this.showNoteCatPicker(note);
      };
    });

    // Manage note categories
    const manageBtn=document.getElementById('manageNoteCats');
    if(manageBtn)manageBtn.onclick=()=>this.showManageNoteCats();
  }

  // Show picker to change a note's category
  showNoteCatPicker(note){
    const pop=document.createElement('div');
    pop.className='cfm-ov active';
    pop.innerHTML=`<div class="cfm-dlg" style="width:280px;text-align:left;padding:20px">
      <h3 style="text-align:center;margin-bottom:12px">选择分类</h3>
      <div class="nc-picker-list">
        <button class="nc-pick-item ${!note.noteCatId?'sel':''}" data-ncpick="">📋 未分类</button>
        ${this.noteCategories.map(c=>{
          const col=this.colorByName(c.color);
          const isSel=note.noteCatId===c.id;
          return `<button class="nc-pick-item ${isSel?'sel':''}" data-ncpick="${c.id}" style="${isSel?'background:'+col.hex+';color:#fff;border-color:'+col.hex:''}">${c.emoji} ${esc(c.name)}</button>`;
        }).join('')}
      </div>
      <div class="cfm-btns" style="margin-top:12px"><button class="btn-c" id="ncPickCancel">取消</button></div>
    </div>`;
    document.body.appendChild(pop);
    pop.querySelector('#ncPickCancel').onclick=()=>pop.remove();
    pop.addEventListener('click',e=>{if(e.target===pop)pop.remove()});
    pop.querySelectorAll('.nc-pick-item').forEach(b=>{
      b.onclick=async()=>{
        note.noteCatId=b.dataset.ncpick||null;
        await this.db.put('notes',note);
        await this.load();
        pop.remove();
        this.render();
        this.toast('分类已更新');
      };
    });
  }

  // Manage note categories (add/delete)
  showManageNoteCats(){
    const pop=document.createElement('div');
    pop.className='cfm-ov active';
    const renderList=()=>{
      return this.noteCategories.map(c=>{
        const col=this.colorByName(c.color);
        return `<div class="ncm-item">
          <span class="ncm-emoji" style="background:${col.bg}">${c.emoji}</span>
          <span class="ncm-name">${esc(c.name)}</span>
          <span class="ncm-cnt">${this.notes.filter(n=>n.noteCatId===c.id).length}条</span>
          <button class="ncm-del" data-ncmid="${c.id}">${IC.close}</button>
        </div>`;
      }).join('');
    };
    pop.innerHTML=`<div class="cfm-dlg" style="width:300px;text-align:left;padding:20px;max-height:80vh;overflow-y:auto">
      <h3 style="text-align:center;margin-bottom:14px">管理碎念分类</h3>
      <div id="ncmList">${renderList()}</div>
      <div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--bd)">
        <div class="ig" style="margin-bottom:8px"><input type="text" class="ti" id="ncmNewName" placeholder="新分类名称" maxlength="8"></div>
        <div class="ig" style="margin-bottom:8px">
          <div class="emoji-grid" style="grid-template-columns:repeat(8,1fr);gap:4px;padding:2px 0">
            ${['💭','🌈','💡','☀️','🌙','🎯','📌','🔖','💬','🌿','⭐','🎨','📮','🧩','💎','🍀'].map((e,i)=>`<button class="ep ${i===0?'active':''}" data-emoji="${e}" style="width:28px;height:28px;font-size:14px">${e}</button>`).join('')}
          </div>
        </div>
        <div class="ig" style="margin-bottom:8px">
          <div class="crow" style="gap:5px;padding:2px 0">
            ${COLORS.map((c,i)=>`<div class="cdot ${i===0?'active':''}" data-cname="${c.name}" style="background:${c.hex};width:24px;height:24px"></div>`).join('')}
          </div>
        </div>
        <button class="subbtn" id="ncmAddBtn" style="margin-top:4px;padding:10px">添加分类</button>
      </div>
      <button class="btn-c" id="ncmClose" style="width:100%;margin-top:10px;padding:10px;border-radius:var(--rs);border:none;font-size:13px;font-weight:600;cursor:pointer">关闭</button>
    </div>`;
    document.body.appendChild(pop);
    pop.addEventListener('click',e=>{if(e.target===pop)pop.remove()});
    pop.querySelector('#ncmClose').onclick=()=>{pop.remove();this.render()};

    // Emoji picker
    pop.querySelectorAll('.ep').forEach(e=>{e.onclick=(ev)=>{ev.preventDefault();pop.querySelectorAll('.ep').forEach(x=>x.classList.remove('active'));e.classList.add('active')}});
    // Color picker
    pop.querySelectorAll('.cdot').forEach(c=>{c.onclick=(ev)=>{ev.preventDefault();pop.querySelectorAll('.cdot').forEach(x=>x.classList.remove('active'));c.classList.add('active')}});

    // Delete category
    const bindDeletes=()=>{
      pop.querySelectorAll('.ncm-del').forEach(b=>{
        b.onclick=async()=>{
          const cid=b.dataset.ncmid;
          const cnt=this.notes.filter(n=>n.noteCatId===cid).length;
          if(cnt>0){
            if(!confirm(`该分类下有${cnt}条碎念，删除分类后碎念将变为未分类，确认删除？`))return;
            // Move notes to uncategorized
            for(const n of this.notes){
              if(n.noteCatId===cid){n.noteCatId=null;await this.db.put('notes',n)}
            }
          }
          await this.db.delete('noteCategories',cid);
          await this.load();
          pop.querySelector('#ncmList').innerHTML=renderList();
          bindDeletes();
          this.toast('分类已删除');
        };
      });
    };
    bindDeletes();

    // Add new category
    pop.querySelector('#ncmAddBtn').onclick=async()=>{
      const name=pop.querySelector('#ncmNewName').value.trim();
      if(!name){this.toast('请输入分类名称');return}
      if(this.noteCategories.some(c=>c.name===name)){this.toast('分类已存在');return}
      const emoji=pop.querySelector('.ep.active')?.dataset.emoji||'💭';
      const color=pop.querySelector('.cdot.active')?.dataset.cname||'sky';
      await this.db.put('noteCategories',{id:'nc_'+uid(),name,emoji,color});
      await this.load();
      pop.querySelector('#ncmList').innerHTML=renderList();
      pop.querySelector('#ncmNewName').value='';
      bindDeletes();
      this.toast('分类已添加');
    };
  }
}

// ===== Bootstrap =====
const app=new App();
app.init();
