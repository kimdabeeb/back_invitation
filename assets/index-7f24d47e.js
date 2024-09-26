import{n as o,j as e,a as i,F as f}from"./@emotion-ca1bdcbc.js";import{r as n,a as k}from"./react-b146d822.js";import{c as L}from"./react-dom-edc23fff.js";import{u as F,N as D,M as H,C as U,a as V}from"./react-naver-maps-fabd97c3.js";import"./camelcase-35484e94.js";import"./lodash.pick-7ce4a2cb.js";import{g as C,U as z,x as E}from"./gsap-trial-131f56e8.js";import{u as B}from"./@gsap-a8c2733f.js";import{S as N,N as W,P as K,a as Z}from"./swiper-6657b0c5.js";import{G as T,I as G}from"./react-photoswipe-gallery-7f89d9fa.js";import"./photoswipe-dc4bf523.js";import{F as I}from"./react-awesome-reveal-20caced4.js";import{C as X}from"./react-calendar-5927de9e.js";import{h as u}from"./moment-a9aaa855.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-98964cd2.js";import"./stylis-79144faa.js";import"./scheduler-765c72db.js";import"./load-script-13d0bea1.js";import"./suspend-react-49283dd8.js";import"./lodash.mapkeys-26a17061.js";import"./react-use-5b3d5927.js";import"./lodash.upperfirst-0b7acb3c.js";import"./gsap-7d9a9c74.js";import"./prop-types-73e30d6e.js";import"./react-intersection-observer-8653d16a.js";import"./clsx-0839fdbe.js";import"./get-user-locale-1b7f565a.js";import"./mem-59c5c945.js";import"./mimic-fn-4c5af2e5.js";import"./map-age-cleaner-ae966f8d.js";import"./p-defer-498af752.js";import"./@wojtekmaj-e2c78f66.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function a(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(l){if(l.ep)return;l.ep=!0;const s=a(l);fetch(l.href,s)}})();const j=o.div`
  max-width: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`,R=o.div`
`,Y=o.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
  padding-right: 0;
`,S="/w_invitation/assets/img_9-e81bba41.png",O=()=>e(P,{children:e(_,{src:S})}),P=o.div`
  /* aspect-ratio: 1/1.8; */
  padding: 2rem 1.5rem 0;
`,_=o.img`
  border-radius: 500px 500px 0 0;
  aspect-ratio: 1/1.8;
  max-width: 100%;
`,J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVR4nO3UuQ2AMBQE0aECopXom84IaAdEZiGOf4EIWMnpPDsx/EtsSZxvANYJmJ4C1MRbpDw+A0MloIM4VYBO4iWALuJpQDfxFCBDPAzIGA8BcsTdgDfuAiJxMxCNm4B+97eI4nXAGLi5G9le8u+drWJpX9xV6+yMAAAAAElFTkSuQmCC",q=o.p`
  font-family: 'GowunBatang';
  font-size: 1rem;
  line-height: 3;
  color: #000;
`,g=o.p`
  font-family: 'SometimesTimes';
  font-size: 2.25rem;
  letter-spacing: 1.5px;
  color: rgb(17, 17, 17);
  opacity: 0.9;
`,w=o.p`
  font-family: 'GowunDodum';
  font-size: 0.9375rem;
  font-weight: bold;
  align-self: flex-start;
`,Q=o.p`
  font-family: 'SUIT', sans-serif;
  font-weight: 300;
  word-spacing: -0.35px;
  margin: 1.25rem auto;
`;o.p`
  font-family: 'Autography';
`;const m=o.p`
  font-family: 'GowunBatang';
  line-height: 2.2;
  color: #666;
`;function $(){return i(ee,{onClick:()=>{if(window.Kakao){const r=window.Kakao;if(!r.isInitialized()){const a="496b33d8c0ec1a3264c146db9799eb78";r.init(a)}r.Share.sendDefault({objectType:"feed",content:{title:"라이언이 즐겨먹던 바로 그 틴케이스 치즈볼",description:"바라만 봐도 즐거워지는 힐링 패키지에는 시크릿 스토리가 숨어있어요.",imageUrl:"http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",link:{mobileWebUrl:"http://localhost:5173",webUrl:"http://localhost:5173"}},buttons:[{title:"자세히 보기",link:{mobileWebUrl:"http://localhost:5173",webUrl:"http://localhost:5173"}}]})}},children:[e(w,{children:"카카오톡으로 전하기"}),e("img",{src:J})]})}const ee=o.button`
  width: 100%;
  padding: 10px 0;
  background: #fce777;
  border: unset;
  outline: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 2.2;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 14px;
    height: 14px;
  }
`,M=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:20,viewBox:"0 -960 960 960",width:20,...t},n.createElement("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"})),te=()=>i(f,{children:[e("div",{style:{width:"100%",aspectRatio:"1/1.5",background:"#cfdab9"}}),i(ne,{children:[e($,{}),i(ie,{type:"button",onClick:()=>{navigator.clipboard.writeText(window.location.href).then(()=>{alert("주소가 복사되었습니다.")},()=>{alert("주소 복사에 실패했습니다.")})},children:[e(w,{children:"청첩장 주소 복사하기"}),e(M,{fill:"#fff"})]}),e(g,{children:"Copyright 2024. daabiinii All rights reserved."})]})]}),ne=o.div`
  padding: 2.25rem 2.25rem 1.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  > p {
    opacity: 1;
    font-size: 0.625rem;
    margin: 2rem auto 0.625rem;
  }
`,ie=o.button`
  width: 100%;
  padding: 10px 0;
  background: #c2b0a2;
  border: unset;
  outline: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 2.2;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    color: #fff;
  }
`,oe={title:`000
000`,host:{groom:{name:"영준",relation:"아들",position:"신랑",parents:[{relation:"아버지",name:"최병홍"},{relation:"어머니",name:"성정옥"}]},bride:{name:"다빈",relation:"딸",position:"신부",parents:[{relation:"아버지",name:"김용대"},{relation:"어머니",name:"이  선"}]}},eventDetail:`2025년 3월 1일(토) 3시 40분
여의도 여율리 5층`,eventDay:"2025년 3월 1일 토요일 | 오후 15시 40분"},re=[{host:"신랑측",accountInfo:[{name:"최병홍",relation:"신랑 아버지",bank:"농협",account:"123-45-678901"},{name:"성정옥",relation:"신랑 어머니",bank:"농협",account:"123-45-678901"},{name:"최영준",relation:"신랑",bank:"신한",account:"1234-56-789012",kakaopayAccount:"",tossAccount:""}]},{host:"신부측",accountInfo:[{name:"김용대",relation:"신부 아버지",bank:"국민",account:"123-45-678901"},{name:"이   선",relation:"신부 어머니",bank:"신한",account:"123-45-678901"},{name:"김다빈",relation:"신부",bank:"신한",account:"1234-5678-9012",kakaopayAccount:"https://link.kakaopay.com/_/Q-ULgFw",tossAccount:""}]}],ae={address1:"웨딩 여율리 5층",address2:"서울 영등포구 국제금융로6길 26",naverMap:"https://map.naver.com/p/directions/-/14129458.7483733,4512095.3697976,%EC%9B%A8%EB%94%A9%EC%97%AC%EC%9C%A8%EB%A6%AC,30811749,PLACE_POI/-/transit?c=15.00,0,0,0,dh",kakaoMap:"https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,489503,1123003&rt1=&rt2=%EC%97%AC%EC%9C%A8%EB%A6%AC%EC%9B%A8%EB%94%A9%ED%99%80&rtIds=,630786038",lat:37.5219546930167,lon:126.92697361375},d={greeting:oe,hostInfo:re,mapInfo:ae},le="data:image/png;base64,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",se="/w_invitation/assets/toss-665116ae.png",ce=({name:t,relation:r,bank:a,account:c,kakaopayAccount:l,tossAccount:s})=>i(de,{children:[i(pe,{children:[e(me,{children:r}),e(ge,{children:t})]}),i(he,{children:[i("p",{style:{whiteSpace:"nowrap"},children:[a," ",c]}),i(fe,{children:[e(ue,{onClick:()=>{navigator.clipboard.writeText(c).then(()=>{alert("계좌번호가 복사되었습니다.😉")},()=>{alert("계좌번호 복사에 실패했습니다.🥲")})},children:e(M,{fill:"#eee"})}),l&&e(b,{href:l,target:"_blank",rel:"noreferrer",children:e(we,{src:le,alt:"kakaopay"})}),s&&e(b,{href:s,target:"_blank",rel:"noreferrer",children:e(xe,{src:se,alt:"toss"})})]})]})]}),de=o.div`
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
  font-family: 'GowunDodum';
`,pe=o.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  margin: 5px 0;
`,me=o.span`
  color: #595959;
  font-family: 'GowunBatang';
  font-weight: bold;
`,ge=o.span`
  font-size: 0.8125rem;
  margin-left: .35rem;
`,he=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,fe=o.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`,ue=o.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`.withComponent("a"),b=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  padding: 0 0.8em;
  font-size: 0.7rem;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
`.withComponent("a"),we=o.img`
  width: 50px;
`,xe=o.img`
  width: 70px;
`,be=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:22,viewBox:"0 -960 960 960",width:22,...t},n.createElement("path",{d:"M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"})),ye=({title:t,children:r})=>{const[a,c]=n.useState(!1);return i(ve,{children:[i(Ae,{isActive:a,onClick:()=>{c(!a)},children:[i("p",{children:[t,"에게"]}),e(be,{fill:"#ddd",style:{cursor:"pointer"}})]}),a&&e(ke,{children:r})]})},ve=o.div`
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 0.3s ease-in-out;
`,Ae=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'GowunDodum';
  font-size: 0.875rem;
  & > p {
    color: #a6a6a6;
  }
  svg {
    user-select: none;
    transition: all 0.3s ease-in-out;
    transform: ${t=>t.isActive?"rotate(180deg)":void 0};
  }
`,ke=o.div`
  font-size: .85rem;
  text-align: justify;
  padding: 10px;
`,Ce=()=>{const{hostInfo:t}=d;return i(Ee,{className:"pd-w gsap-div",children:[i("div",{className:"text-wrap",children:[e(q,{children:"마음 전하실 곳"}),i(w,{children:["참석이 어려우신 분들을 위해 기재하였습니다",e("br",{}),"너그러운 마음으로 양해부탁드립니다"]})]}),e(Be,{children:t.map(r=>e(ye,{title:r.host,children:r.accountInfo.map(a=>e(ce,{name:a.name,relation:a.relation,bank:a.bank,account:a.account,kakaopayAccount:a.kakaopayAccount,tossAccount:a.tossAccount},a.name))},r.host))})]})},Ee=o.div`
  background: #f8f8f8;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 45px;
    height: 2px;
    background: #000;
    margin: 4rem auto 0;
  }

  & div.text-wrap {
    p:first-of-type {
      margin: 2rem auto 0.5rem;
      font-weight: 600;
    }

    p:nth-of-type(2) {
      font-size: 0.85rem;
      line-height: 1.8;
      color: #545454;
    }
  }
`,Be=o.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 35px 10px 0px;
  box-sizing: content-box;
`,Ie=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:21,viewBox:"0 -960 960 960",width:21,...t},n.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),Se=({isVisible:t})=>e(Me,{isVisible:t,children:e(Le,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:e(Ie,{fill:"#ddd"})})}),Me=o.nav`
  min-width: 65px;
  position: fixed;
  bottom: 30px;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${t=>t.isVisible?"flex":"none"};
`,Le=o.button`
  padding: 6px;
  border-radius: 50%;
  border: 1px solid #eee;
  outline: none;
  box-shadow: none;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  color: #1a1a1a;
`.withComponent("a");const Fe="/w_invitation/assets/img_1-c67c2eca.png",De="/w_invitation/assets/img_2-b45369a2.png",He="/w_invitation/assets/img_3-0b2722f9.png",Ue="/w_invitation/assets/img_4-28f850e9.png",Ve="/w_invitation/assets/img_5-54239a3a.png",ze="/w_invitation/assets/img_6-a1ada2d0.png",Ne="/w_invitation/assets/img_7-d5aeb311.png",We="/w_invitation/assets/img_8-f937af0c.png",Ke="/w_invitation/assets/img_10-f0879e38.png",Ze="/w_invitation/assets/img_11-67fe4816.png",Te="/w_invitation/assets/img_12-e2d337e1.png",Ge=[{alt:"image01",source:Fe},{alt:"image02",source:De},{alt:"image03",source:He},{alt:"image04",source:Ue},{alt:"image05",source:Ve},{alt:"image06",source:ze},{alt:"image07",source:Ne},{alt:"image08",source:We},{alt:"image09",source:S},{alt:"image10",source:Ke},{alt:"image11",source:Ze},{alt:"image12",source:Te}],Xe=()=>{const t={cursor:"pointer",objectFit:"cover",width:"100%"};return i(f,{children:[e(g,{children:"Gallery"}),e(m,{style:{margin:"1.25rem 0"},children:"사진을 클릭하시면 전체 화면 보기가 가능합니다"}),e(je,{children:e(T,{children:e(N,{modules:[W,K],style:{overflow:"visible"},slidesPerView:1.2,spaceBetween:10,centeredSlides:!0,loop:!0,pagination:{type:"fraction",clickable:!0},navigation:!0,children:Ge.map((r,a)=>e(Z,{style:{width:"fit-content"},children:e(G,{original:r.source,thumbnail:r.source,width:"1920",height:"1280",children:({ref:c,open:l})=>e("img",{style:t,alt:r.alt,src:r.source,ref:c,onClick:l})})},a))})})})]})},je=o.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

`,Re=()=>{const{groom:t,bride:r}=d.greeting.host;return e(Ye,{children:e(I,{triggerOnce:!0,cascade:!0,delay:1400,children:i("p",{children:["신랑",e(y,{person:t}),e("span",{children:"and"}),"신부",e(y,{person:r})]})})})},y=({person:t})=>e(Oe,{children:t.name}),Ye=o.div`
  gap: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 2;
  color: #020817;
  font-family: 'GowunDodum';
  p > span:nth-of-type(2) {
    font-family: 'JakartaSignature';
    padding: 0 10px;
    font-size: 1.125rem;
    letter-spacing: -1px;
  }
`,Oe=o.span`
  white-space: nowrap;
  text-align: center;
  margin-left: 5px;
  font-family: 'GowunDodum';
`,Pe=()=>(n.useEffect(()=>{const t=()=>{document.querySelectorAll("div").forEach(r=>{window.innerHeight>r.getBoundingClientRect().top&&r.classList.add("active")})};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[]),i(f,{children:[e(_e,{className:"pd-w",children:i(I,{triggerOnce:!0,cascade:!0,damping:.25,duration:1e3,children:[i("ul",{className:"IntroTit",children:[i("li",{children:["우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라",e("br",{}),e("span",{children:"요한일서 4:19"})]}),e("li",{children:"하나님의 떄에 서로 만난 두 사람이"}),e("li",{children:"은혜로 결실을 맺게 되었습니다."}),e("li",{children:"둘이 하나가 되어 평생 서로를 돕는 배필로"}),e("li",{children:"서약하는 자리에 기도와 축복으로 함께 해주신다면"}),e("li",{children:"더 없는 감사와 기쁨으로간직하겠습니다."})]}),e(Re,{})]})}),e("div",{className:"gsap-div",style:{marginTop:"3rem",width:"100%",aspectRatio:"1/1.5",background:"#3c78d8"}}),e("style",{children:`
        .IntroTit {
          li {
            white-space: pre;
            letter-spacing: -.15px;
            word-spacing: -.35px;
            font-size: 0.875rem;
            line-height: 3;
          }
          & li:first-of-type {
            margin-bottom: 3rem;
            line-height: 2.5;
            & span {
            font-size: 0.75rem;
          }
        }
    `})]})),_e=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding-bottom: 0;
`,Je=()=>i(qe,{className:"pd-w gsap-div",children:[e(g,{children:"INFORMATION"}),i(m,{children:["안내",e("br",{}),e("span",{children:"웨딩홀 사전 안내를 드립니다"})]}),e(Qe,{children:e(Q,{children:"환경보호를 위해 화환을 정중히 사양합니다. 감사한 마음만 받겠습니다. 😊 "})})]}),qe=o.div`
  background: #eff3e8;
  > p {
    padding-bottom: 1.5rem;
    color: #111;
    font-weight: 600;
    span {
      opacity: 0.7;
    }
  }
  > p:nth-of-type(2) {
    padding-bottom: 2.5rem;
  }
`,Qe=o.div`
  aspect-ratio: 1/0.65;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  > p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    white-space: pre-wrap;
    word-break: keep-all;
    padding: 0 30px;
    box-sizing: border-box;
    color: #8c9a6f;
    line-height: 2;
    margin: 0;
    font-weight: 500;
  }
`,$e=t=>n.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("mask",{id:"mask0_309_5402",maskUnits:"userSpaceOnUse",x:0,y:0,width:18,height:18,style:{maskType:"alpha"}},n.createElement("rect",{width:18,height:18,fill:"#D9D9D9"})),n.createElement("g",{mask:"url(#mask0_309_5402)"},n.createElement("path",{d:"M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11Z",fill:"#AFC18B"}),n.createElement("path",{d:"M14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11Z",fill:"#AFC18B"}),n.createElement("path",{d:"M16 7.5H2",stroke:"#AFC18B",strokeMiterlimit:10}),n.createElement("path",{d:"M18 7H15L16 9H18V7Z",fill:"#AFC18B"}),n.createElement("path",{d:"M3 7H0V9H2L3 7Z",fill:"#AFC18B"}),n.createElement("path",{d:"M1.5 15V10L3 7.5L3.72147 3.1712C3.8822 2.20683 4.71658 1.5 5.69425 1.5H12.3057C13.2834 1.5 14.1178 2.20683 14.2785 3.1712L15 7.5L16.5 10V15H1.5Z",stroke:"#AFC18B"}),n.createElement("path",{d:"M13 15H16V17.5C16 17.7761 15.7761 18 15.5 18H13.5C13.2239 18 13 17.7761 13 17.5V15Z",fill:"#AFC18B"}),n.createElement("path",{d:"M2 15H5V17.5C5 17.7761 4.77614 18 4.5 18H2.5C2.22386 18 2 17.7761 2 17.5V15Z",fill:"#AFC18B"}),n.createElement("line",{x1:3,y1:12.5,x2:15,y2:12.5,stroke:"#AFC18B"}))),et=t=>n.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("mask",{id:"mask0_309_5400",maskUnits:"userSpaceOnUse",x:0,y:0,width:18,height:18,style:{maskType:"alpha"}},n.createElement("rect",{width:18,height:18,fill:"#D9D9D9"})),n.createElement("g",{mask:"url(#mask0_309_5400)"},n.createElement("path",{d:"M13 16H16V17.5C16 17.7761 15.7761 18 15.5 18H13.5C13.2239 18 13 17.7761 13 17.5V16Z",fill:"#AFC18B"}),n.createElement("path",{d:"M2 16H5V17.5C5 17.7761 4.77614 18 4.5 18H2.5C2.22386 18 2 17.7761 2 17.5V16Z",fill:"#AFC18B"}),n.createElement("path",{d:"M2.5 2C2.5 1.17157 3.17157 0.5 4 0.5H14C14.8284 0.5 15.5 1.17157 15.5 2V15.5H2.5V2Z",stroke:"#AFC18B"}),n.createElement("line",{x1:3,y1:11.5,x2:15,y2:11.5,stroke:"#AFC18B"}),n.createElement("line",{x1:3,y1:3.5,x2:15,y2:3.5,stroke:"#AFC18B"}),n.createElement("line",{x1:4,y1:13.5,x2:6,y2:13.5,stroke:"#AFC18B"}),n.createElement("line",{x1:12,y1:13.5,x2:14,y2:13.5,stroke:"#AFC18B"}),n.createElement("path",{d:"M2.72361 5.94721C2.9706 5.82372 3.07071 5.52338 2.94721 5.27639C2.82372 5.0294 2.52338 4.92929 2.27639 5.05279L2.72361 5.94721ZM0.5 6.5L0.276393 6.05279L0 6.19098V6.5H0.5ZM0 8.5V9H1V8.5H0ZM2.27639 5.05279L0.276393 6.05279L0.723607 6.94721L2.72361 5.94721L2.27639 5.05279ZM0 6.5V8.5H1V6.5H0Z",fill:"#AFC18B"}),n.createElement("path",{d:"M15.2764 5.94721C15.0294 5.82372 14.9293 5.52338 15.0528 5.27639C15.1763 5.0294 15.4766 4.92929 15.7236 5.05279L15.2764 5.94721ZM17.5 6.5L17.7236 6.05279L18 6.19098V6.5H17.5ZM18 8.5V9H17V8.5H18ZM15.7236 5.05279L17.7236 6.05279L17.2764 6.94721L15.2764 5.94721L15.7236 5.05279ZM18 6.5V8.5H17V6.5H18Z",fill:"#AFC18B"}))),tt=t=>n.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("mask",{id:"mask0_309_5387",maskUnits:"userSpaceOnUse",x:0,y:0,width:18,height:18,style:{maskType:"alpha"}},n.createElement("rect",{width:18,height:18,fill:"#EED8D8"})),n.createElement("g",{mask:"url(#mask0_309_5387)"},n.createElement("path",{d:"M6 14C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14Z",fill:"#AFC18B"}),n.createElement("path",{d:"M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z",fill:"#AFC18B"}),n.createElement("path",{d:"M3.5 8C3.5 6.067 5.067 4.5 7 4.5H11C12.933 4.5 14.5 6.067 14.5 8V14C14.5 14.8284 13.8284 15.5 13 15.5H5C4.17157 15.5 3.5 14.8284 3.5 14V8Z",stroke:"#AFC18B"}),n.createElement("line",{x1:3,y1:10.5,x2:14,y2:10.5,stroke:"#AFC18B"}),n.createElement("line",{x1:7,y1:2.5,x2:11,y2:2.5,stroke:"#AFC18B"}),n.createElement("path",{d:"M0.5 17.5V8.5C0.5 4.08172 4.08172 0.5 8.5 0.5H9.5C13.9183 0.5 17.5 4.08172 17.5 8.5V17.5",stroke:"#AFC18B",strokeLinecap:"square"}),n.createElement("line",{y1:-.5,x2:5.83095,y2:-.5,transform:"matrix(-0.514496 0.857493 -0.729537 -0.683941 6 15)",stroke:"#AFC18B"}),n.createElement("line",{y1:-.5,x2:5.83095,y2:-.5,transform:"matrix(0.514496 0.857493 0.729537 -0.683941 12 15)",stroke:"#AFC18B"}))),nt=t=>n.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M6.5 13.5V9M6.5 9V4.5H10.25C11.4926 4.5 12.5 5.50736 12.5 6.75V6.75C12.5 7.99264 11.4926 9 10.25 9H6.5Z",stroke:"#AFC18B",strokeLinecap:"square"}),n.createElement("rect",{x:.5,y:.5,width:17,height:17,rx:3.5,stroke:"#AFC18B"})),it=()=>i(ot,{className:"gsap-div",children:[e(h,{children:i("li",{children:[i("p",{children:[e($e,{}),"자차"]}),i("p",{children:["내비게이션 : '웨딩여율리' 또는 '노총회관' 검색 ",e("br",{}),"서울시 영등포구 국제금융로6길 26"]})]})}),e("hr",{}),e(h,{children:i("li",{children:[i("p",{children:[e(et,{}),"버스"]}),e("p",{children:"여의도역 또는 한국거래소(구 증권거래소) 하차 도보 3분"}),i("ul",{children:[i("li",{children:[e("p",{style:{color:"#3c78d8"},children:"간선버스"}),e("span",{children:"153, 162, 261, 262, 362, 461, 503, 600, 700, 753"})]}),i("li",{children:[e("p",{style:{color:"#6aa84f"},children:"지선버스"}),e("span",{children:"11-1, 11-2, 88, 88-1, 83, 510, 530, 5012, 5618, 5623, 5713, 6513, 6628, 6630, 6654, 7613"})]}),i("li",{children:[e("p",{style:{color:"#de3d38"},children:"광역버스"}),e("span",{children:"320, 301, 5609, 7007-1"})]})]})]})}),e("hr",{}),e(h,{children:i("li",{children:[i("p",{children:[e(tt,{}),"지하철"]}),i("p",{children:[e("b",{style:{color:"#7c44c2"},children:"5호선"})," · ",e("b",{style:{color:"#d0a447"},children:"9호선"})," ","여의도역 5번 출구 (도보 3분)"]})]})}),e("hr",{}),e(h,{children:i("li",{children:[i("p",{children:[e(nt,{}),"주차"]}),i("p",{children:["한국노총빌딩 및 여의도우체국타워 : 하객 2시간 무료",e("br",{}),e("b",{children:"* 연회장 입구 주차권 수령"}),e("br",{}),"주차현장 주차 요원 안내를 받아주세요."]})]})})]}),ot=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #afc18b;
    margin-top: 1rem;
  }
`,h=o.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  li > p:first-of-type {
    color: #afc18b;
  }
  li {
    font-family: 'SUIT', sans-serif;
    font-weight: 300;
    font-size: 0.85rem;
    line-height: 1.85;
    color: #111;
    opacity: 0.9;
    p:first-of-type {
      font-weight: bold;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
    }
    p > svg {
      margin-right: 8px;
    }

    & ul {
      padding-top: 1rem;
      li {
        padding: 0.5rem 0;
        border-bottom: unset;
        font-size: 0.825rem;
        p:first-of-type {
          font-weight: bold;
          padding: 0;
        }
      }
    }
  }
`,rt=()=>{const{lat:t,lon:r}=d.mapInfo,a=F();return e(U,{style:{width:"100%",height:"300px"},children:e(D,{defaultCenter:new a.LatLng(t,r),defaultZoom:17,draggable:!1,pinchZoom:!1,scrollWheel:!1,keyboardShortcuts:!1,children:e(H,{defaultPosition:new a.LatLng(t,r)})})})},at="/w_invitation/assets/naver_map-c29e2050.png",lt="/w_invitation/assets/kakao_map-bc96722c.png",st=()=>{const{naverMap:t,kakaoMap:r}=d.mapInfo;return i(ct,{children:[i(v,{onClick:()=>window.open(t),children:[e("img",{src:at}),"네이버지도"]}),i(v,{onClick:()=>window.open(r),children:[e("img",{src:lt}),"카카오맵"]})]})},ct=o.div`
  margin: 8px 0;
  gap: 8px;
  display: flex;
  justify-content: center;
`,v=o.button`
  width: 50%;
  margin: 10px 0;
  font-family: 'SUIT', sans-serif;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 15px;
  & img {
    width: 25px;
    aspect-ratio: 1/1;
  }
`.withComponent("a"),dt=()=>{const{mapInfo:t}=d;return i(pt,{className:"pd-w gsap-div",children:[e(g,{children:"Location"}),e(m,{style:{fontWeight:"600",paddingTop:"1.5rem"},children:t.address1}),e(m,{style:{fontWeight:"400",fontSize:".85rem",paddingBottom:"2.25rem"},children:t.address2}),e(rt,{}),e(st,{}),e(it,{})]})},pt=o.div`
  /* background: #f3f5f0; */
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`,mt=()=>{const{greeting:t}=d,a=u(["01-03-2025"][0],"DD-MM-YYYY").toDate();return i(gt,{className:"pd-w gsap-div",children:[e(g,{style:{marginBottom:"2.5rem"},children:"WEDDING DAY"}),e(m,{style:{fontWeight:"400"},children:t.eventDay}),e(m,{style:{fontWeight:"300"},children:"Saturday, March 1, 2025 | PM 15:40 "}),e(X,{formatDay:(c="ko",l)=>u(l).locale(c).format("D"),selectRange:!1,calendarType:"gregory",showNeighboringMonth:!1,minDetail:"month",prevLabel:null,nextLabel:null,prev2Label:null,next2Label:null,activeStartDate:new Date(2025,2,1),tileClassName:({date:c})=>u(c).isSame(a,"day")?"highlight":""}),e("style",{children:`
      .react-calendar * {
        text-decoration: unset!important;
      }
      .react-calendar {
        font-family: GowunBatang;
        border: none;
        margin: 3rem auto 0;
        padding-top: 25px;
        border-top: 1px solid #e5e7eb;
      .highlight {
        background: #8c9a6f;
        color: #fff;
        font-weight: bold;
        border-radius: 50%;
        max-width: 43px!important;
        position: relative;
        left: 0;
      }
      
      .react-calendar__tile { font-size: .95em; padding-top: 12px; padding-bottom:12px; }
      .react-calendar__tile--active,
      .react-calendar__navigation__label {
        background: #fff;
        font-family: GowunBatang;
        color:#000;
      }
      .react-calendar__month-view__weekdays {margin-bottom:.6rem;}
      .react-calendar__month-view__days__day--neighboringMonth {color: #5F5F5F;}
      .react-calendar__navigation {
        display: flex;
        text-align: center;
        align-items: center;
        padding: 0 .5rem;
        margin-bottom: 1rem;
          .react-calendar__navigation button {
            font-size: 1rem;
            min-width: 20px;
          }
          .react-calendar__navigation__label {
            width: 5.5rem;
            height: 1.375rem;
            font-size: 16px;
            border: none;
            font-weight: 700;
            background-color: #fff;
          }
      }
      .react-calendar__tile--active:enabled:hover,
      .react-calendar__navigation button:enabled:hover, 
      .react-calendar__navigation button:enabled:focus {
        background-color: unset;
      }
    }
    `})]})},gt=o.div`
  display: block;
`,ht=()=>{const{groom:t,bride:r}=d.greeting.host;return i(ft,{className:"pd-w gsap-div",children:[e(A,{person:t}),e(A,{person:r})]})},A=({person:t})=>i("div",{style:{display:"flex",flexDirection:"column",rowGap:"2rem"},children:[i(ut,{children:[t.parents&&e(f,{children:t.parents.map((r,a)=>i(k.Fragment,{children:[a>0&&" · ",r.name]},a))}),i(wt,{children:[e("div",{children:"의"}),e(xt,{children:t.relation})]})]}),i(bt,{children:[e("p",{children:t.position}),e("p",{children:t.name})]})]}),ft=o.div`
  padding-left: 35px;
  padding-right: 35px;
  box-sizing: border-box;
  background: #f3f5f0;
  gap: 25px;
  display: flex;
  flex-direction: column;
  font-family: 'GowunBatang';
  div:nth-of-type(3) > div {
    font-weight: 400;
  }

  > div:nth-of-type(2) {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 2rem;
  }

  div:nth-of-type(2) > p:last-child::before {
    content: 'groom';
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: -5px;
    right: 35px;
  }

  div:nth-of-type(4) > p:last-child::before {
    content: 'bride';
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: -5px;
    right: 35px;
  }
`,ut=o.div`
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #262626;
`,wt=o.div`
  font-size: 0.9rem;
  margin: 0;
  line-height: 26px;
  width: 50px;
  display: flex;
  gap: 6px;
  color: #757575;
`,xt=o.div`
  width: inherit;
`,bt=o.div`
  display: flex;
  justify-content: space-between;
  & p {
    font-size: .9375rem;
    color: #262626;
  }
  & p:last-child {
    font-weight: bold;
    position: relative;
  }
`;C.registerPlugin(B,z,E);function yt(){const t="spln9oeejo",[r,a]=n.useState(!1),c=n.useRef(null);B(()=>{const s=E.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.5,effects:!0,ignoreMobileResize:!0});return document.querySelectorAll(".gsap-div").forEach(x=>{C.fromTo(x,{opacity:0,y:20},{opacity:1,y:0,duration:1.2,scrollTrigger:{trigger:x,markers:!0,start:"top 75%",toggleActions:"play none none none",once:!1}})}),()=>{s.kill()}},[]),n.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]);const l=()=>{if(c.current){const{offsetTop:s}=c.current;window.scrollY>=s?a(!0):a(!1)}};return e(V,{ncpClientId:t,children:e(j,{id:"smooth-wrapper",children:i(R,{id:"smooth-content",children:[e(O,{}),e(Pe,{}),e(mt,{}),e(ht,{}),e(Y,{ref:c,className:"pd-w gsap-div",children:e(Xe,{})}),e(dt,{}),e(Ce,{}),e(Je,{}),e(te,{}),e(Se,{isVisible:r})]})})})}L.createRoot(document.getElementById("root")).render(e(k.StrictMode,{children:e(yt,{})}));
