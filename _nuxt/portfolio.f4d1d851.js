import{_}from"./TitleTxt.e20553c4.js";import{a as w,b as o,f as k,e as t,k as u,F as n,r as l,o as s,t as a,i as c,l as b,j as m}from"./entry.cea38b12.js";const y={computed:{CateItem(){return this.WorkList.filter(i=>this.CateName!=="전체"?i.type===this.CateName:i.type)},CateList(){return this.WorkList.filter((i,p)=>this.WorkList.findIndex(g=>i.type===g.type)===p)}},data(){return{CateName:"전체",WorkList:[{img:"https://via.placeholder.com/500",descTitle:"XXXX 웹앱1",desc:"API를 활용한 웹앱 개발...1",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","orangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Wepapp",progress:"https://via/placeholder.com/1200x5000",original:"http://www.naver.com",redesign:""},{img:"https://via.placeholder.com/500",descTitle:"XXXX 웹앱2",desc:"API를 활용한 웹앱 개발...2",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","oreangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Wepapp",progress:"https://via/placeholder.com/1200x5000",original:"",redesign:"http://www.kakao.com"},{img:"https://via.placeholder.com/500",descTitle:"XXXX 퍼블리싱1",desc:"API를 활용한 웹앱 개발...1",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","oreangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Publishing",progress:"https://via/placeholder.com/1200x5000",original:"http://www.naver.com",redesign:"http://www.kakao.com"},{img:"https://via.placeholder.com/500",descTitle:"XXXX 웹앱3",desc:"API를 활용한 웹앱 개발...3",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","oreangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Wepapp",progress:"https://via/placeholder.com/1200x5000",original:"http://www.naver.com",redesign:"http://www.kakao.com"},{img:"https://via.placeholder.com/500",descTitle:"XXXX 퍼블리싱2",desc:"API를 활용한 웹앱 개발...2",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","oreangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Publishing",progress:"https://via/placeholder.com/1200x5000",original:"http://www.naver.com",redesign:"http://www.kakao.com"},{img:"https://via.placeholder.com/500",descTitle:"XXXX 웹앱4",desc:"API를 활용한 웹앱 개발...4",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","oreangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Wepapp",progress:"https://via/placeholder.com/1200x5000",original:"http://www.naver.com",redesign:"http://www.kakao.com"},{img:"https://via.placeholder.com/500",descTitle:"XXXX 퍼블리싱3",desc:"API를 활용한 웹앱 개발...3",keyword:["#심플함","#깔끔함","tailwind"],color:["orange","oreangered","darkorange"],font:"Noto Sans KR",tools:["PS","AI","VS CODE"],date:"10일(기획 1일/구상 1일/제작 8일)",contribution:"100%",type:"Publishing",progress:"https://via/placeholder.com/1200x5000",original:"http://www.naver.com",redesign:"http://www.kakao.com"}]}}},f={class:"w-full pt-12 mt-8 px-[2%] pb-8"},v={class:"max-w-7xl mx-auto mt-8"},X={class:"flex m-4 ml-0"},C={class:"mr-4 border darkMode bg-white py-2 px-5 rounded-md"},S=["onClick"],P={class:"max-w-7xl mx-auto mt-8"},N={class:"basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2"},I=["src"],A={class:"basis-full md:basis-[52%] pt-10 group-even:order-2 xl:group-even:order-1"},T={class:"text-2xl font-bold pt-[10px] pb-[10px] lg:pl-[50px]"},V={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},D={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},E={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},O={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},R={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},W={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},K={class:"text-base pt-[10px] pb-[10px] lg:pl-[50px]"},L={class:"flex justify-center mt-6"},M={key:0,class:"mr-2"},B=["href"],j={key:1,class:"mr-2"},z=["href"],F={key:2},$=["href"];function q(i,p,g,G,d,h){const x=_;return s(),o("div",f,[k(x,{title:"포트폴리오"}),t("div",v,[t("ul",X,[t("li",C,[t("button",{onClick:p[0]||(p[0]=e=>d.CateName="전체"),class:u(d.CateName==="전체"&&"font-bold text-rose-400")},"전체",2)]),(s(!0),o(n,null,l(h.CateList,e=>(s(),o("li",{class:"mr-4 border darkMode bg-white py-2 px-5 rounded-md",key:e},[t("button",{onClick:r=>d.CateName=e.type,class:u(d.CateName===e.type&&"font-bold text-rose-400")},a(e.type),11,S)]))),128))])]),t("div",P,[(s(!0),o(n,null,l(h.CateItem,e=>(s(),o("div",{key:e,class:"bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap"},[t("div",N,[(s(),o(n,null,l(3,r=>t("div",{key:r},[t("img",{class:"w-full",src:`/images/mokup-${r}.png`,alt:"mokup"},null,8,I)])),64))]),t("div",A,[t("h3",T,a(e.descTitle),1),t("p",V,a(e.desc),1),t("p",D,[c("키워드 : "),(s(!0),o(n,null,l(e.keyword,r=>(s(),o("span",{key:r,class:"mr-2"},a(r),1))),128))]),t("p",E,[c("컬러 : "),(s(!0),o(n,null,l(e.color,r=>(s(),o("span",{key:r,class:"w-5 h-5 inline-block align-middle mr-2",style:b({backgroundColor:`${r}`})},null,4))),128))]),t("p",O,"폰트 : "+a(e.font),1),t("p",R,[c("사용툴 : "),(s(!0),o(n,null,l(e.tools,r=>(s(),o("span",{key:r,class:"mr-2 align-middle"},a(r),1))),128))]),t("p",W,"작업기간 : "+a(e.date),1),t("p",K,"기여도 : "+a(e.contribution),1),t("ul",L,[e.progress?(s(),o("li",M,[t("a",{href:e.progress,class:"py-1 px-8 border rounded-md darkMode text-sm"},"Progress",8,B)])):m("",!0),e.original?(s(),o("li",j,[t("a",{href:e.original,class:"py-1 px-8 border rounded-md darkMode text-sm",target:"_blank"},"Original",8,z)])):m("",!0),e.redesign?(s(),o("li",F,[t("a",{href:e.redesign,class:"py-1 px-8 border rounded-md darkMode text-sm",target:"_blank"},a(e.type==="Publishing"?"Clone":"Redesign"),9,$)])):m("",!0)])])]))),128))])])}const Q=w(y,[["render",q]]);export{Q as default};
