"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61221],{84928:(e,l,t)=>{t.r(l),t.d(l,{default:()=>i});var o,a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:o=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:o,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:o,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:o,storageKey:null}],type:"Pin",abstractKey:null};a.hash="cabaa35ed7d59dee006897bf3ef32e3d";let i=a},780679:(e,l,t)=>{t.d(l,{g:()=>n,t:()=>i});var o=t(667294);let a=(0,o.createContext)(null),i=a.Provider,n=()=>(0,o.useContext)(a)},499128:(e,l,t)=>{t.d(l,{UZ:()=>d,Vg:()=>r,ZP:()=>u});var o=t(667294),a=t(883119),i=t(50286),n=t(829407),s=t(785893);let r=200,d=({deviceType:e,hiding:l,visible:t})=>{let o="desktop"===e,a=0,i=o?"translateY(200px)":"translateY(-200px)",n="opacity 0.1s ease-in-out",s="hidden";return t&&!l&&(a=1,i="translateY(0)",n="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",s="visible"),t&&l&&(i="scale(1.1)",n="opacity transform 0.2s"),{opacity:a,pointerEvents:"auto",position:"relative",marginTop:o?10:0,transform:i,transition:n,visibility:s}};function u({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:l,text:t,primaryAction:u,dismissButton:c,helperLink:_,thumbnail:p,type:h,dataTestId:m,duration:f=2e3,onHide:g,href:w,onClick:b,openNewPage:x,imageUrl:y}){let v;let P=(0,i.ZP)(),[j,A]=(0,o.useState)(!1),[k,z]=(0,o.useState)(!1),T=(0,o.useRef)(),S=()=>{A(!0),T.current=setTimeout(g,r)},L=()=>{T.current=setTimeout(S,f)},Z=()=>{T.current&&clearTimeout(T.current)};(0,n.Z)(()=>(setTimeout(()=>z(!0),100),L(),Z)),y&&(v={image:(0,s.jsx)(a.Ee,{alt:"string"==typeof t?t:`${t[0]} ${t[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:y})});let C=(0,s.jsx)(a.FN,{_dangerouslySetPrimaryAction:l,_dangerouslySetThumbnail:e,dismissButton:c,helperLink:_,primaryAction:u,text:t,thumbnail:v??p,type:h}),{marginTop:F,opacity:U,pointerEvents:E,position:I,transform:D,transition:H,visibility:O}=d({deviceType:P,hiding:j,visible:k});return(0,s.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transform:D,transition:H,visibility:O,pointerEvents:E}},"data-test-id":m??"toast",display:"flex",marginTop:F,onMouseEnter:Z,onMouseLeave:L,opacity:U,position:I,children:w?(0,s.jsx)(a.Tg,{href:w,onTap:({event:e,dangerouslyDisableOnNavigation:l})=>{w.startsWith("#")&&(e.preventDefault(),l()),b?.(e)},rounding:"pill",target:x?"blank":null,children:C}):C})}},356997:(e,l,t)=>{t.d(l,{qE:()=>s,u_:()=>r.ZP});var o=t(883119),a=t(785893);let i=(e,l)=>{let t=e?.includes("images/user/default");return!!(t&&l)};function n({accessibilityLabel:e,name:l,outline:t,size:n,src:s,verified:r}){return(0,a.jsx)(o.qE,{accessibilityLabel:e,name:l,outline:t,size:n,src:i(s,l)?void 0:s,verified:r})}n.displayName="Avatar";let s=n;var r=t(121151);t(499128)},458882:(e,l,t)=>{t.d(l,{l:()=>i,r:()=>n});var o=t(667294);let a=(0,o.createContext)(null),i=()=>(0,o.useContext)(a),n=a.Provider},667679:(e,l,t)=>{t.d(l,{Z:()=>i});var o=t(780679),a=t(458882);let i=()=>{let e=(0,o.g)(),l=(0,a.l)();return t=>{let{mobileOptions:o,desktopOptions:a,reason:i,attributionLabel:n,pinId:s}=t;e?e.showDesktopSignupModal({signupFlow:a?.modalType==="login"?{type:"login"}:{type:"signup"},reason:i,attributionLabel:n,...a?.modalOptions}):l&&l.showMobileSignupModal({reason:i,attributionLabel:n,headingType:o?.headingType,pinId:s})}}},985913:(e,l,t)=>{t.d(l,{Z:()=>i});var o=t(858142);let a=/\{\{\s*(\w+)\s*\}\}/g,i=(e,l)=>(0,o.Z)(a,e,l)},858142:(e,l,t)=>{t.d(l,{Z:()=>o});let o=(e,l,t)=>l?l.replace(e,(e,l)=>t&&Object.prototype.hasOwnProperty.call(t,l)?t[l]:""):""},815613:(e,l,t)=>{t.d(l,{Z:()=>j}),t(167912);var o,a=t(883119),i=t(112690),n=t(916117),s=t(898781),r=t(773285),d=t(667679),u=t(867820),c=t(52022),_=t(343341),p=t(50286),h=t(829407),m=t(19121),f=t(945698),g=t(927383),w=t(698330),b=t(201155),x=t(640064),y=t(785893);let v=({children:e,pulsar:l,testId:t})=>l.show?(0,y.jsx)(a.xu,{"data-test-id":t,position:"relative",children:(0,y.jsxs)(a.iP,{onTap:l.onClick,tapStyle:"none",children:[(0,y.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,y.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,y.jsx)(a.o3,{})})]})}):(0,y.jsx)(a.xu,{"data-test-id":t,children:e}),P=void 0!==o?o:o=t(84928);function j({auxData:e,disabled:l,disableLog:t,followEventType:o,id:j,inline:A,invertColors:k,isFollowed:z,isIdeaPin:T,isLegoEnabled:S,isSecondaryButton:L,isUserFollowButton:Z,isUserMe:C,onFollow:F,onUnfollow:U,pinKey:E,shouldUseLegoColors:I,showPulsar:D,size:H,textType:O="FollowFollowing",unfollowEventType:R,viewParameter:N,viewType:M,clientTrackingParams:B}){let W;let K=(0,s.ZP)(),G=(0,p.HG)(),{showToast:$}=(0,_.F9)(),Y=(0,c.Z)(),V=(0,i.Z)(),q=(0,d.Z)(),{checkExperiment:X}=(0,r.F)(),Q=(0,g.Z)(),J=(0,m.Z)(),ee=J&&J.isAuth,{unauthFollowUserId:el,setUnauthFollowUserId:et}=(0,x.f)(),eo=(0,w.mN)()(j),ea=eo&&{imageMediumUrl:eo.image_medium_url,username:eo.username},ei=(0,n.Z)(P,E),en=ei?.linkDomain,es=ei?.nativeCreator,er=ei?.originPinner,ed=ei?.pinner;W=es||(en?en.officialUser:er||ed);let eu=ea??W;(0,h.Z)(()=>{!G&&ee&&el&&j&&el===j&&F(j)});let ec=Q({fn:()=>{ee?z?(U(j),t||V({event_type:R,view_type:M,view_parameter:N,object_id_str:j,aux_data:e,clientTrackingParams:B})):(F(j),Z&&$(({hideToast:e})=>{let l=eu?.username?`/${eu.username}/`:"";return(0,y.jsx)(b.Z,{handleHide:e,href:l,imageUrl:eu?.imageMediumUrl||"",text:K.bt("Seguindo! Os Pins deste perfil aparecerão no seu feed inicial.", "Following! Their created Pins will show up in your home feed!", "followButton.follow.informationalToastText", undefined, true),userId:j})}),t||V({event_type:o,view_type:M,view_parameter:N,object_id_str:j,aux_data:e,clientTrackingParams:B})):((0,u.My)(`mweb_unauth_follow_button.tap.${String(M)}`),5===M&&26===o&&(0,u.My)("mweb_unauth_board_page_follow_button.tap"),(0,u.NC)(z?"press_profile_unfollow":"press_profile_follow"),Y({action:"click",item:"board-follow-button"}),q({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:T?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:G&&X("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!G&&X("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),G||et(j??""),(0,u.NC)("clickthrough"))},modalHeader:(0,f.N4)({i18n:K,toFollow:!z})}),e_=!z&&!!D,ep=()=>{if(C)return K.bt("É você!", "That's you!", "Follow button is disabled because this is you", undefined, true);if("AddRemove"===O)return z?K.bt("Remover", "Remove", "unfollowButton.removeText", undefined, true):K.bt("Adicionar", "Add", "followButton.addText", undefined, true);let e="FollowUnfollow"===O?K.bt("Deixar de seguir", "Unfollow", "unfollowButton.unfollowText", undefined, true):K.bt("Seguindo", "Following", "Follow button label - followed state", undefined, true);return z?e:K.bt("Seguir", "Follow", "Follow button label - unfollowed state", undefined, true)};return(0,y.jsx)(v,{pulsar:e_?{show:!0,onClick:ec}:{show:!1},testId:C||z?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(a.zx,{accessibilityLabel:ep(),color:I||"AddRemove"===O||!S&&L||z?"gray":"red",disabled:C||l,fullWidth:A,onClick:e_?void 0:({event:l})=>{l.preventDefault(),l.stopPropagation(),t||V({event_type:101,component:13672,element:11951,object_id_str:j,view_type:M,view_parameter:N,aux_data:e,clientTrackingParams:B}),ec()},selected:k?!z:I&&z||!!z&&L,size:H,text:ep()})})}},640064:(e,l,t)=>{t.d(l,{f:()=>s,w:()=>r});var o=t(667294),a=t(425288),i=t(785893);let{Provider:n,useHook:s}=(0,a.Z)("Session");function r({children:e}){let[l,t]=(0,o.useState)(void 0),a=(0,o.useCallback)(()=>t(void 0),[]),s=(0,o.useMemo)(()=>({unauthFollowUserId:l,setUnauthFollowUserId:t,removeUnauthFollowUserId:a}),[l,a]);return(0,i.jsx)(n,{value:s,children:e})}},987318:(e,l,t)=>{t.d(l,{H:()=>i,o:()=>a});var o=t(425288);let{Provider:a,useHook:i}=(0,o.Z)("LimitedLogin")},945698:(e,l,t)=>{t.d(l,{N4:()=>i,Wh:()=>o,hr:()=>a});let o=e=>e.bt("Faça login para continuar", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),a=e=>e.bt("Você está quase lá! Entre para acessar todos os recursos do Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),i=({i18n:e,toFollow:l})=>l?e.bt("Faça login para seguir", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Faça login para deixar de seguir", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},927383:(e,l,t)=>{t.d(l,{Z:()=>s});var o=t(898781),a=t(50286),i=t(987318),n=t(945698);let s=()=>{let e=(0,o.ZP)(),l=(0,a.HG)(),{viewer:t,loginForMore:s,limitedLoginModalSubheader:r,limitedLoginModalNextLocation:d}=(0,i.H)(),u="LIMITED_LOGIN"===t.type;return u?({modalHeader:t,nextLocation:o})=>a=>{let i=null;a&&(a.nativeEvent&&a.nativeEvent instanceof Event?i=a:a.event&&(i=a.event)),i&&(i.preventDefault&&i.preventDefault(),i.stopPropagation&&i.stopPropagation()),s?.setVisible(!0),r?.setText(t||(l?n.hr(e):n.Wh(e))),o&&d?.setRoute(o)}:({fn:e})=>e}},230903:(e,l,t)=>{t.d(l,{Z:()=>d});var o=t(883119),a=t(121151),i=t(898781),n=t(349700),s=t(50286),r=t(785893);function d({onDismiss:e,firstName:l,handleUnfollowUser:t}){let d=(0,i.ZP)(),u=(0,s.HG)(),c=(0,n.nk)(d.bt("Deixar de seguir {{ firstName }}?", "Unfollow {{ firstName }}?", "unfollowUser.modal.header", undefined, true),{firstName:l}).join(""),_=d.bt("Você não poderá mais ver o perfil, Pins, pastas, seguidores ou quem a pessoa segue. Ela não será notificada.", "You will no longer be able to view their profile, Pins, boards, followers or following lists. They will not be notified.", "unFollowUser.modal.description", undefined, true),p=d.bt("Cancelar", "Cancel", "unfollowUser.modal.cancel", undefined, true),h=d.bt("Deixar de seguir", "Unfollow", "unfollowUser.modal.button.unfollow", undefined, true);return u?(0,r.jsx)(a.ZP,{accessibilityModalLabel:c,footer:(0,r.jsxs)(o.xu,{alignItems:"center",display:"flex",justifyContent:"end",marginEnd:-1,marginStart:-1,children:[(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{fullWidth:!0,onClick:e,size:"lg",text:p})}),(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:t,size:"lg",text:h})})]}),heading:c,onDismiss:e,role:"alertdialog",size:"md",children:(0,r.jsx)(o.xu,{"data-test-id":"unfollow-text",marginEnd:6,marginStart:6,children:(0,r.jsx)(o.xv,{children:_})})}):(0,r.jsxs)(a.ZP,{accessibilityModalLabel:c,mobileHideCloseIcon:!0,onDismiss:e,type:"unFollow_button",children:[(0,r.jsx)(o.xu,{alignItems:"center",display:"flex",paddingX:3,paddingY:5,children:(0,r.jsx)(o.X6,{accessibilityLevel:1,size:"500",children:c})}),(0,r.jsx)(o.xu,{marginBottom:4,marginEnd:4,marginStart:4,children:(0,r.jsx)(o.xv,{children:_})}),(0,r.jsxs)(o.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginBottom:8,children:[(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{fullWidth:!0,onClick:e,size:"md",text:p})}),(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:t,size:"md",text:h})})]})]})}},90326:(e,l,t)=>{t.d(l,{Ge:()=>d,JS:()=>n,OF:()=>x,P_:()=>s,Q_:()=>_,b8:()=>p,eR:()=>b,h2:()=>u,h6:()=>c});var o=t(214494),a=t(186656),i=t(735422);function n(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let s=(e,l)=>({type:"USER_FOLLOW",payload:{id:e,value:l}}),r=(e,l)=>({type:"USER_BLOCK",payload:{id:e,value:l}}),d=({id:e,orbacSubjectId:l,blockSource:t,blockContext:a,logContextEvent:i})=>async n=>{n(r(e,!0));let s=await o.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:l,block_source:t,block_context:a}).callCreate().catch(()=>n(r(e,!1)));return i({event_type:54,object_id_str:e}),s},u=(e,l)=>async t=>{t(r(e,!1));let a=await o.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>t(r(e,!0)));return l({event_type:55,object_id_str:e}),a};function c(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let _=(e,l)=>()=>{let t=o.Z.create("UserStateResource",{state:e,value:l});return t.callCreate()},p=(e,l,t)=>(o,n)=>{(0,a.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{t({event_type:48,object_id_str:n().session.userId}),e(),(0,i.Dm)()},l)},h=e=>e>=200&&e<400,m=(e,l="150x150")=>e&&`https://i.pinimg.com/${l}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"",f=async(e,l,t)=>{let a=await o.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(a.resource_response.data[e]){let o=a.resource_response.data[e],{status:i,signature:n}=o;if("processing"===i||"registered"===i)setTimeout(async()=>{f(e,l,t)},5e3);else if("succeeded"===i){let e=m(n);l(e)}else t()}else t()},g=(e,l,t,a,i)=>{let n=new FormData;return n.append("img",e),o.Z.create("VIPResource",{type:l}).callCreate().then(l=>{if(l.resource_response.data){let{upload_id:o,upload_url:n,upload_parameters:s}=l.resource_response.data,r=new XMLHttpRequest;r.open("POST",n,!0),r.onload=()=>{h(r.status)?(t(100),f(o,a,i)):i()},r.upload.onprogress=e=>{let l=Math.round(100*e.loaded/e.total);t(l)};let d=new FormData;for(let e in s)d.append(e,s[e]);d.append("file",e),r.send(d)}},()=>{i()})},w=e=>new Promise((l,t)=>{g(e,"pinimage",()=>{},e=>{l(e)},e=>{t(e)})}),b=e=>new Promise((l,t)=>{"string"==typeof e?e.startsWith("data")&&w(function(e,l=512){let t=e.split(";"),o=t[0].split(":")[1],a=t[1].split(",")[1],i=atob(a),n=[];for(let e=0;e<i.length;e+=l){let t=i.slice(e,e+l),o=Array(t.length);for(let e=0;e<t.length;e+=1)o[e]=t.charCodeAt(e);let a=new Uint8Array(o);n.push(a)}let s=new Blob(n,{type:o});return s}(e)).then(e=>l(e)):t("Invalid Image")}),x=e=>()=>(0,a.Z)({url:"/v3/register/exists/",data:{email:e}})},201155:(e,l,t)=>{t.d(l,{Z:()=>u});var o=t(883119),a=t(499128),i=t(898781),n=t(666959),s=t(50286),r=t(785893);function d({ideaPinImages:e}){let l=e.map((e,l)=>(0,r.jsx)(o.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:l}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,r.jsx)(o.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},l));return(0,r.jsx)(o.kC,{justifyContent:"center",children:(0,r.jsx)(o.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:l})})}function u({handleHide:e,text:l,userId:t,href:u,imageUrl:c}){let _=(0,i.ZP)(),p=(0,s.HG)(),h=(0,n.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:t}}),m=Array.isArray(l)?l.join(" "):l;if(0===(h.data||[]).length)return(0,r.jsx)(a.ZP,{duration:5e3,href:u,onHide:e,text:m,thumbnail:c?{image:(0,r.jsx)(o.Ee,{alt:_.bt("Imagem de quem você seguiu", "Image of who you followed", "userFollowingToast.thumbnail.userImage", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:c})}:void 0});let f=(h.data||[]).slice(0,3).map(e=>e.images?.[p?"236x":"170x"]),g=(0,r.jsx)(d,{ideaPinImages:f});return(0,r.jsx)(a.ZP,{_dangerouslySetThumbnail:g,duration:5e3,href:u,onHide:e,text:m})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61221.pt_BR-089a8eed619ccd41.mjs.map