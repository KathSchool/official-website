"use strict";(self.webpackChunkofficial_website=self.webpackChunkofficial_website||[]).push([[7641],{4540:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>Z,contentTitle:()=>w,default:()=>R,frontMatter:()=>O,metadata:()=>S,toc:()=>x});var r=t(7462),n=t(7294),o=t(3905),i=t(3366),l=t(6010);const s=e=>{const a=n.useRef({});return n.useEffect((()=>{a.current=e})),a.current};var p=t(4780);var c=t(7110);function d(e){if(void 0===e)return{};const a={};return Object.keys(e).filter((a=>!(a.match(/^on[A-Z]/)&&"function"==typeof e[a]))).forEach((t=>{a[t]=e[t]})),a}function m(e){const{getSlotProps:a,additionalProps:t,externalSlotProps:n,externalForwardedProps:o,className:i}=e;if(!a){const e=(0,l.Z)(null==o?void 0:o.className,null==n?void 0:n.className,i,null==t?void 0:t.className),a=(0,r.Z)({},null==t?void 0:t.style,null==o?void 0:o.style,null==n?void 0:n.style),s=(0,r.Z)({},t,o,n);return e.length>0&&(s.className=e),Object.keys(a).length>0&&(s.style=a),{props:s,internalRef:void 0}}const s=function(e,a=[]){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>t.match(/^on[A-Z]/)&&"function"==typeof e[t]&&!a.includes(t))).forEach((a=>{t[a]=e[a]})),t}((0,r.Z)({},o,n)),p=d(n),c=d(o),m=a(s),h=(0,l.Z)(null==m?void 0:m.className,null==t?void 0:t.className,i,null==o?void 0:o.className,null==n?void 0:n.className),u=(0,r.Z)({},null==m?void 0:m.style,null==t?void 0:t.style,null==o?void 0:o.style,null==n?void 0:n.style),g=(0,r.Z)({},m,t,c,p);return h.length>0&&(g.className=h),Object.keys(u).length>0&&(g.style=u),{props:g,internalRef:m.ref}}const h=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function u(e){var a;const{elementType:t,externalSlotProps:n,ownerState:o,skipResolvingSlotProps:l=!1}=e,s=(0,i.Z)(e,h),p=l?{}:function(e,a,t){return"function"==typeof e?e(a,t):e}(n,o),{props:d,internalRef:u}=m((0,r.Z)({},s,{externalSlotProps:p})),g=(0,c.Z)(u,null==p?void 0:p.ref,null==(a=e.additionalProps)?void 0:a.ref),v=function(e,a,t){return void 0===e||"string"==typeof e?a:(0,r.Z)({},a,{ownerState:(0,r.Z)({},a.ownerState,t)})}(t,(0,r.Z)({},d,{ref:g}),o);return v}var g=t(2641),v=t(1156),f=t(8216),k=t(1588),N=t(7621);function _(e){return(0,N.Z)("MuiBadge",e)}const B=(0,k.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);var b=t(5893);const E=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],y=(0,g.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,a)=>a.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),C=(0,g.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.badge,a[t.variant],a[`anchorOrigin${(0,f.Z)(t.anchorOrigin.vertical)}${(0,f.Z)(t.anchorOrigin.horizontal)}${(0,f.Z)(t.overlap)}`],"default"!==t.color&&a[`color${(0,f.Z)(t.color)}`],t.invisible&&a.invisible]}})((({theme:e,ownerState:a})=>(0,r.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},"dot"===a.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"rectangular"===a.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===a.anchorOrigin.vertical&&"right"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===a.anchorOrigin.vertical&&"left"===a.anchorOrigin.horizontal&&"circular"===a.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},a.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}))),A=n.forwardRef((function(e,a){var t,n,o,c,d,m;const h=(0,v.Z)({props:e,name:"MuiBadge"}),{anchorOrigin:g={vertical:"top",horizontal:"right"},className:k,component:N,components:B={},componentsProps:A={},children:O,overlap:w="rectangular",color:S="default",invisible:Z=!1,max:x=99,badgeContent:D,slots:F,slotProps:R,showZero:P=!1,variant:$="standard"}=h,T=(0,i.Z)(h,E),{badgeContent:z,invisible:M,max:L,displayValue:I}=function(e){const{badgeContent:a,invisible:t=!1,max:r=99,showZero:n=!1}=e,o=s({badgeContent:a,max:r});let i=t;!1!==t||0!==a||n||(i=!0);const{badgeContent:l,max:p=r}=i?o:e;return{badgeContent:l,invisible:i,max:p,displayValue:l&&Number(l)>p?`${p}+`:l}}({max:x,invisible:Z,badgeContent:D,showZero:P}),W=s({anchorOrigin:g,color:S,overlap:w,variant:$,badgeContent:D}),j=M||null==z&&"dot"!==$,{color:V=S,overlap:H=w,anchorOrigin:X=g,variant:Y=$}=j?W:h,G="dot"!==Y?I:void 0,K=(0,r.Z)({},h,{badgeContent:z,invisible:j,max:L,displayValue:G,showZero:P,anchorOrigin:X,color:V,overlap:H,variant:Y}),q=(e=>{const{color:a,anchorOrigin:t,invisible:r,overlap:n,variant:o,classes:i={}}=e,l={root:["root"],badge:["badge",o,r&&"invisible",`anchorOrigin${(0,f.Z)(t.vertical)}${(0,f.Z)(t.horizontal)}`,`anchorOrigin${(0,f.Z)(t.vertical)}${(0,f.Z)(t.horizontal)}${(0,f.Z)(n)}`,`overlap${(0,f.Z)(n)}`,"default"!==a&&`color${(0,f.Z)(a)}`]};return(0,p.Z)(l,_,i)})(K),J=null!=(t=null!=(n=null==F?void 0:F.root)?n:B.Root)?t:y,Q=null!=(o=null!=(c=null==F?void 0:F.badge)?c:B.Badge)?o:C,U=null!=(d=null==R?void 0:R.root)?d:A.root,ee=null!=(m=null==R?void 0:R.badge)?m:A.badge,ae=u({elementType:J,externalSlotProps:U,externalForwardedProps:T,additionalProps:{ref:a,as:N},ownerState:K,className:(0,l.Z)(null==U?void 0:U.className,q.root,k)}),te=u({elementType:Q,externalSlotProps:ee,ownerState:K,className:(0,l.Z)(q.badge,null==ee?void 0:ee.className)});return(0,b.jsxs)(J,(0,r.Z)({},ae,{children:[O,(0,b.jsx)(Q,(0,r.Z)({},te,{children:G}))]}))})),O={sidebar_position:0,description:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd\u9875",slug:"/video",title:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd",sidebar_label:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd",pagination_label:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd"},w=void 0,S={unversionedId:"video/intro",id:"video/intro",title:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd",description:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd\u9875",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/video/intro.md",sourceDirName:"video",slug:"/video",permalink:"/video",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd\u9875",slug:"/video",title:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd",sidebar_label:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd",pagination_label:"\u89c6\u9891\u8bfe\u7a0b\u4ecb\u7ecd"},sidebar:"video",next:{title:"\u52a8\u7269\u745c\u4f3d",permalink:"/video/Activity-\u6d3b\u52a8/animal_yoga"}},Z={},x=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2}],D={toc:x},F="wrapper";function R(e){let{components:a,...t}=e;return(0,o.kt)(F,(0,r.Z)({},D,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u8fd9\u91cc\u662f Katherine \u8001\u5e08\u7684\u89c6\u9891\u7cbe\u9009\u8bfe\u5802\uff0c\u4f60\u53ef\u4ee5\u70b9\u51fb\u9875\u9762\u5de6\u4fa7\u5bfc\u822a\u680f\u6d4f\u89c8",(0,o.kt)("strong",{parentName:"p"},"\u513f\u6b4c/\u7ed8\u672c/\u624b\u5de5/\u6d3b\u52a8"),"\u7b49\u7cbe\u9009\u6559\u5b66\u89c6\u9891\u3002\n\u70b9\u51fb\u53f3\u4fa7\u5bfc\u822a",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u6599"),"\u6216\u6ed1\u52a8\u81f3\u89c6\u9891\u4e0b\u65b9\uff0c\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u4e0e\u672c\u8282\u8bfe\u7a0b\u76f8\u5173\u7684\u8d44\u6e90\uff0c\u4f8b\u5982\u56fe\u7247\uff0c\u97f3\u4e50\uff0cPDF \u7b49\u3002"),(0,o.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/walking_walking"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 Walking Walking")," ",(0,o.kt)(A,{style:{marginLeft:"20px"},badgeContent:"new",color:"primary",mdxType:"Badge"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/what_can_she_be"},"[","\u7ed8\u672c","]","\u68a6\u60f3\u7684\u804c\u4e1a"),"  ",(0,o.kt)(A,{style:{marginLeft:"20px"},badgeContent:"new",color:"primary",mdxType:"Badge"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/one_little_finger"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 One Little Finger"),"  ",(0,o.kt)(A,{style:{marginLeft:"20px"},badgeContent:"new",color:"primary",mdxType:"Badge"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/down_in_the_deep_sea"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 Down In The Deep Blue Sea")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/the_very_hungry_caterpillar_2"},"[","\u7ed8\u672c","]","\u9965\u997f\u7684\u6bdb\u6bdb\u866b(\u4e0b)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/the_very_hungry_caterpillar"},"[","\u7ed8\u672c","]","\u9965\u997f\u7684\u6bdb\u6bdb\u866b(\u4e0a)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/walking_in_the_forest"},"[","\u513f\u6b4c","]","\u795e\u5947\u52a8\u7269\u5728\u54ea\u91cc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/walking_in_the_jungle"},"[","\u513f\u6b4c","]","\u4e1b\u6797\u6563\u6b65\uff0c\u4f1a\u9047\u5230\u4ec0\u4e48\u52a8\u7269")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/days_of_week"},"[","\u513f\u6b4c","]","\u4eca\u5929\u662f\u5468\u51e0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Artcraft-%E6%89%8B%E5%B7%A5/happy_dragon_boot_festival"},"[","\u624b\u5de5","]","\u7aef\u5348\u8282\u624b\u5de5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/happy_fathers_day"},"[","\u7ed8\u672c","]","\u7236\u4eb2\u8282\u5feb\u4e50")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/row_your_boat"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 Row Your Boat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/the_wheels_on_the_bus"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 The Wheels On the Bus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/happy_children_day"},"[","\u7ed8\u672c","]","\u513f\u7ae5\u8282\u5feb\u4e50")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/weather"},"[","\u7ed8\u672c","]","\u8ba4\u8bc6\u5929\u6c14")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/rain_rain_go_away"},"[","\u513f\u6b4c","]","\u53c8\u4e0b\u96e8\u4e86")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/mr_golden_sun"},"[","\u513f\u6b4c","]","\u7ecf\u5178\u513f\u6b4c Mr. Golden Sun")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/how_is_the_weather"},"[","\u513f\u6b4c","]","\u5531\u82f1\u6587\u513f\u6b4c\uff0c\u8ba4\u8bc6\u5929\u6c14")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/my_mom"},"[","\u7ed8\u672c","]","\u6211\u7684\u5988\u5988")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/happy_mothers_day"},"[","\u513f\u6b4c","]","\u6bcd\u4eb2\u8282\u5feb\u4e50")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/chinese_zodiac"},"[","\u7ed8\u672c","]","\u5341\u4e8c\u751f\u8096\u7ade\u8d5b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/brown_bear"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 Brown Bear")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/happy_earth_day"},"[","\u7ed8\u672c","]","\u5730\u7403\u9700\u8981\u5e2e\u52a9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Artcraft-%E6%89%8B%E5%B7%A5/brown_bear"},"[","\u624b\u5de5","]","\u770b\u6728\u5076\u620f\u5b66\u82f1\u8bed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Artcraft-%E6%89%8B%E5%B7%A5/day_and_night"},"[","\u624b\u5de5","]","\u65e5\u6708\u8f6c\u76d8\u624b\u5de5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/open_shut_them_2"},"[","\u513f\u6b4c","]","\u53cd\u4e49\u8bcd\u4e4b\u6b4c(\u4e0b)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/open_shut_them"},"[","\u513f\u6b4c","]","\u53cd\u4e49\u8bcd\u4e4b\u6b4c(\u4e0a)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/opposites"},"[","\u7ed8\u672c","]","\u53cd\u4e49\u8bcd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/head_shoulders_knees_and_toes"},"[","\u513f\u6b4c","]","\u6211\u4eec\u8eab\u4e0a\u6709\u4ec0\u4e48")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Activity-%E6%B4%BB%E5%8A%A8/animal_yoga"},"[","\u8fd0\u52a8","]","\u52a8\u7269\u745c\u4f3d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/from_head_to_toe"},"[","\u513f\u6b4c","]","\u4ece\u5934\u5230\u811a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/from_head_to_toe"},"[","\u7ed8\u672c","]","\u4ece\u5934\u5230\u811a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Artcraft-%E6%89%8B%E5%B7%A5/origami_fish"},"[","\u624b\u5de5","]","\u5236\u4f5c\u6298\u7eb8\u9c7c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/shape_song"},"[","\u513f\u6b4c","]","\u5f62\u72b6\u4e4b\u6b4c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/shapeswith_little_fish"},"[","\u7ed8\u672c","]","\u8ba4\u8bc6\u5f62\u72b6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/I_can_see_a_rainbow"},"[","\u513f\u6b4c","]","\u513f\u6b4c\u6211\u4f1a\u5531\u652f\u5f69\u8679\u6b4c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Artcraft-%E6%89%8B%E5%B7%A5/color_by_numbers"},"[","\u624b\u5de5","]","\u6570\u5b57\u6d82\u8272")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/white_rabbit_colors"},"[","\u7ed8\u672c","]","\u548c\u5c0f\u5154\u5b50\u4e00\u8d77\u8ba4\u8bc6\u989c\u8272")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/if_you_are_happy"},"[","\u513f\u6b4c","]","\u5e78\u798f\u62cd\u624b\u6b4c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/the_way_I_feel"},"[","\u7ed8\u672c","]","\u8ba4\u8bc6\u60c5\u7eea")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Song-%E5%84%BF%E6%AD%8C/you_are_my_sunshine"},"[","\u513f\u6b4c","]","\u4e00\u8d77\u5531 You Are My Sunshine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Artcraft-%E6%89%8B%E5%B7%A5/rabbit_fu"},"[","\u624b\u5de5","]","\u5154\u5b50\u798f\u624b\u5de5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/video/Book-%E7%BB%98%E6%9C%AC/chinese_zodiac"},"[","\u7ed8\u672c","]","\u5341\u4e8c\u751f\u8096\u7ade\u8d5b"))))}R.isMDXComponent=!0}}]);