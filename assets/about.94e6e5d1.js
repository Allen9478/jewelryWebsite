import{d as b,o as _,c as h,a as t,u,_ as g}from"./index.151a6d0e.js";const w="/jewelryWebsite/assets/about_cindyImg.c9d8c9ba.png",y=b("about",()=>({testOne:r=>{const o=document.querySelector(".about_img").children,d=Array.from(o),i=document.querySelector(".about_content").children,l=Array.from(i),n=document.querySelector(".about_list").children,s=[].indexOf.call(n,r.target),f=Array.from(n).filter((e,a)=>a!=s),m=d.filter((e,a)=>a!=s),c=l.filter((e,a)=>a!=s);n[s].classList.add("one"),o[s].classList.remove("dom-hide"),o[s].classList.add("dom-show"),i[s].classList.remove("dom-hide"),i[s].classList.add("dom-show");for(let e=0;e<c.length;e++)f[e].classList.remove("one"),c[e].classList.remove("dom-show"),c[e].classList.add("dom-hide"),m[e].classList.remove("dom-show"),m[e].classList.add("dom-hide")}})),x={class:"about mt-4 mt-lg-0 pbForft-90 container-fluid d-flex flex-column align-items-center justify-content-center"},L=t("li",{class:"about_list_option one"},"\u54C1\u724C\u6545\u4E8B",-1),v=t("li",{class:"about_list_option"},"\u8A2D\u8A08\u5E2B",-1),C=t("li",{class:"about_list_option"},"\u806F\u7D61\u6211\u5011",-1),q=[L,v,C],A=t("main",{class:"d-flex flex-column flex-xl-row align-items-center justify-content-center justify-content-lg-around"},[t("div",{class:"about_img position-relative mt-2"},[t("img",{class:"rounded-2",src:g,alt:""}),t("img",{class:"dom-hide rounded-2",src:w,alt:"#"}),t("iframe",{class:"dom-hide rounded-2",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.014524691168!2d121.56163276481833!3d25.033581144462605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyXMTAx6LO854mp5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1673172408022!5m2!1szh-TW!2stw",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),t("div",{class:"about_content position-relative d-flex align-items-center mt-5 mt-lg-0 mb-lg-4"},[t("p",{class:"story"}," \u54C1\u724C\u6545\u4E8B, sit amet consectetur adipisicing elit. Corrupti facere nulla adipisci mollitia molestias ipsa impedit itaque, corporis laborum harum. Id nemo deleniti consectetur, dolor adipisci laudantium rem. Possimus, et. "),t("p",{class:"owner dom-hide"}," \u8A2D\u8A08\u5E2B, sit amet consectetur adipisicing elit. Corrupti facere nulla adipisci mollitia molestias ipsa impedit itaque, corporis laborum harum. Id nemo deleniti consectetur, dolor adipisci laudantium rem. Possimus, et. "),t("p",{class:"infor dom-hide"}," \u806F\u7D61\u6211\u5011, sit amet consectetur adipisicing elit. Corrupti facere nulla adipisci mollitia molestias ipsa impedit itaque, corporis laborum harum. Id nemo deleniti consectetur, dolor adipisci laudantium rem. Possimus, et. ")])],-1),j={__name:"about",setup(p){const r=y(),{testOne:o}=r;return(d,i)=>(_(),h("div",x,[t("ul",{onClick:i[0]||(i[0]=(...l)=>u(o)&&u(o)(...l)),id:"list-tab",role:"tablist",class:"about_list d-flex justify-content-between align-self-lg-center mb-5"},q),A]))}};export{j as default};