var n=0,H=e=>{n=e};var V=(e,t)=>{SendNUIMessage({action:e,data:t})},k=e=>new Promise(t=>setTimeout(t,e)),be=async e=>{let t=typeof e=="number"?e:GetHashKey(e);if(!IsModelValid(t))throw exports.bl_bridge.notify()({title:"Invalid model!",type:"error",duration:1e3}),new Error(`attempted to load invalid model '${e}'`);return HasModelLoaded(t)||(RequestModel(t),await new Promise(a=>{let o=setInterval(()=>{HasModelLoaded(t)&&(clearInterval(o),a())},100)})),t},E=GetCurrentResourceName(),ge={},K={};function He(e,t){if(t&&t>0){let r=GetGameTimer();if((ge[e]||0)>r)return!1;ge[e]=r+t}return!0}onNet(`__ox_cb_${E}`,(e,...t)=>{let r=K[e];return r&&r(...t)});function d(e,...t){if(!He(e,0))return;let r;do r=`${e}:${Math.floor(Math.random()*100001)}`;while(K[r]);return emitNet(`__ox_cb_${e}`,E,r,...t),new Promise(a=>{K[r]=a})}function U(e,t){onNet(`__ox_cb_${e}`,async(r,a,...o)=>{let s;try{s=await t(...o)}catch(i){console.error(`an error occurred while handling callback event ${e}`),console.log(`^3${i.stack}^0`)}emitNet(`__ox_cb_${r}`,a,s)})}var he=e=>new Promise(t=>{let r=()=>{if(RequestResourceFileSet(e)){let a=exports.bl_appearance.config().locale,o=LoadResourceFile(E,`locale/${a}.json`);o||(console.error(`${a}.json not found in locale, please verify!, we used english for now!`),o=LoadResourceFile(E,"locale/en.json")),t(o)}else setTimeout(r,100)};r()});var M=exports.bl_bridge,W=()=>M.core().getPlayerData(),f=()=>W().cid;function ye(e){return new Promise(t=>setTimeout(t,e))}function xe(e){return e.includes("'")?e.replace(/'/g,""):e}var Y=2,J=1,F=!1,g=1.8,b=null,x=0,S=0,h=null,$=null,Q=!1;var N="head",Le={whole:0,head:31086,torso:24818,legs:[16335,46078],shoes:[14201,52301]},_=e=>Math.cos(e*Math.PI/180),X=e=>Math.sin(e*Math.PI/180),Pe=()=>{let e=(_(S)*_(x)+_(x)*_(S))/2*g,t=(X(S)*_(x)+_(x)*X(S))/2*g,r=X(x)*g;return[e,t,r]},Ce=(e,t)=>{if(!F||!h||Q)return;e=e??0,t=t??0,S-=e,x+=t;let a=N==="whole"||N==="head"?89:70;x=Math.min(Math.max(x,N==="shoes"?5:-20),a);let[i,c,p]=Pe();SetCamCoord(b,h.x+i,h.y+c,h.z+p),PointCamAtCoord(b,h.x,h.y,h.z)},we=async(e,t)=>{let r=GetEntityHeading(n)+94;t=t??1,Q=!0,g=t,S=r;let[a,o,s]=Pe(),i=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",e.x+a,e.y+o,e.z+s,0,0,0,70,!1,0);h=e,Q=!1,$=b,b=i,PointCamAtCoord(i,e.x,e.y,e.z),SetCamActiveWithInterp(i,$,250,0,0),await k(250),SetCamUseShallowDofMode(i,!0),SetCamNearDof(i,.4),SetCamFarDof(i,1.2),SetCamDofStrength(i,.3),Te(i),DestroyCam($,!0)},Te=e=>{DoesCamExist(b)&&e==b&&(SetUseHiDof(),setTimeout(Te,0))},ke=()=>{if(F)return;F=!0,g=Y,b=CreateCam("DEFAULT_SCRIPTED_CAMERA",!0);let[e,t,r]=GetPedBoneCoords(n,31086,0,0,0);SetCamCoord(b,e,t,r),RenderScriptCams(!0,!0,1e3,!0,!0),v("whole",g)},_e=()=>{F&&(F=!1,RenderScriptCams(!1,!0,250,!0,!1),DestroyCam(b,!0),b=null,h=null)},v=(e,t=g)=>{let r=Le[e],a=Array.isArray(r);if(N=e,!a&&r===0){let[c,p,l]=GetEntityCoords(n,!1);we({x:c,y:p,z:l+0},t);return}if(t>J&&(t=J),a){let[c,p,l]=GetPedBoneCoords(n,r[0],0,0,0),[u,m,q]=GetPedBoneCoords(n,r[1],0,0,0);var o=(c+u)/2,s=(p+m)/2,i=(l+q)/2}else var[o,s,i]=GetPedBoneCoords(n,r,0,0,0);we({x:o,y:s,z:i+0},t)};RegisterNuiCallback("appearance:camMove",(e,t)=>{Ce(e.x,e.y),t(1)});RegisterNuiCallback("appearance:camSection",(e,t)=>{switch(e){case"whole":v("whole",Y);break;case"head":v("head");break;case"torso":v("torso");break;case"legs":v("legs");break;case"shoes":v("shoes");break}t(1)});RegisterNuiCallback("appearance:camZoom",(e,t)=>{if(e==="down"){let r=N==="whole"?Y:J,a=g+.05;g=a>=r?r:a}else if(e==="up"){let r=g-.05;g=r<=.3?.3:r}g=g,Ce(),t(1)});var ee=["Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes","EyeColor"];var te=["Nose_Width","Nose_Peak_Height","Nose_Peak_Lenght","Nose_Bone_Height","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_Height","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Chin_Bone_Lowering","Chin_Bone_Length","Chin_Bone_Width","Chin_Hole","Neck_Thikness"];var re=["face","masks","hair","torsos","legs","bags","shoes","neck","shirts","vest","decals","jackets"];var ae=["hats","glasses","earrings","mouth","lhand","rhand","watches","bracelets"];function Re(e){return exports.bl_appearance.models().findIndex(a=>GetHashKey(a)===e)}function ve(e){return{color:GetPedHairColor(e),highlight:GetPedHairHighlightColor(e)}}function Se(e){let t=new ArrayBuffer(80);global.Citizen.invokeNative("0x2746bd9d88c5c5d0",e,new Uint32Array(t));let{0:r,2:a,4:o,6:s,8:i,18:c,10:p}=new Uint32Array(t),{0:l,2:u,4:m}=new Float32Array(t,48);return{shapeFirst:r,shapeSecond:a,shapeThird:o,skinFirst:s,skinSecond:i,skinThird:p,shapeMix:l,thirdMix:m,skinMix:u,hasParent:!!c}}function Ae(e){let t={},r={};for(let a=0;a<ee.length;a++){let o=ee[a];if(t[o]=GetNumHeadOverlayValues(a),o==="EyeColor")r[o]={id:o,index:a,overlayValue:GetPedEyeColor(e)};else{let[s,i,c,p,l,u]=GetPedHeadOverlayData(e,a+1);r[o]={id:o,index:a,overlayValue:i===255?-1:i,colourType:c,firstColor:p,secondColor:l,overlayOpacity:u}}}return[r,t]}function De(e){let t=GetEntityModel(e);if(t!==GetHashKey("mp_m_freemode_01")&&t!==GetHashKey("mp_f_freemode_01"))return;let r={};for(let a=0;a<te.length;a++){let o=te[a];r[o]={id:o,index:a,value:GetPedFaceFeature(e,a)}}return r}function Oe(e){let t={},r={};for(let a=0;a<re.length;a++){let o=re[a],s=GetPedDrawableVariation(e,a);r[o]={id:o,index:a,total:GetNumberOfPedDrawableVariations(e,a),textures:GetNumberOfPedTextureVariations(e,a,s)},t[o]={id:o,index:a,value:GetPedDrawableVariation(e,a),texture:GetPedTextureVariation(e,a)}}return[t,r]}function Me(e){let t={},r={};for(let a=0;a<ae.length;a++){let o=ae[a],s=GetPedPropIndex(e,a);r[o]={id:o,index:a,total:GetNumberOfPedPropDrawableVariations(e,a),textures:GetNumberOfPedPropTextureVariations(e,a,s)},t[o]={id:o,index:a,value:GetPedPropIndex(e,a),texture:GetPedPropTextureIndex(e,a)}}return[t,r]}async function P(e){let[t,r]=Ae(e),[a,o]=Oe(e),[s,i]=Me(e),c=GetEntityModel(e);return{modelIndex:Re(c),model:c,hairColor:ve(e),headBlend:Se(e),headOverlay:t,headOverlayTotal:r,headStructure:De(e),drawables:a,props:s,drawTotal:o,propTotal:i,tattoos:[]}}exports("GetAppearance",P);U("bl_appearance:client:getAppearance",()=>P(n));function ze(e){let[t]=Oe(e),[r]=Me(e),[a]=Ae(e);return{headOverlay:a,drawables:t,props:r}}exports("GetPedClothes",ze);function je(e){return{headBlend:Se(e),headStructure:De(e),hairColor:ve(e),model:GetEntityModel(e)}}exports("GetPedSkin",je);function L(){let e=[],[t,r]=exports.bl_appearance.tattoos();for(let o=0;o<r.length;o++){let s=r[o],i=s.zone,c=s.label,p=s.index;e[p]={zone:i,label:c,zoneIndex:p,dlcs:[]};for(let l=0;l<t.length;l++){let u=t[l];e[p].dlcs.push({label:u.dlc,dlcIndex:l,tattoos:[]})}}let a=GetEntityModel(n)===GetHashKey("mp_f_freemode_01");for(let o=0;o<t.length;o++){let s=t[o],{dlc:i,tattoos:c}=s,p=GetHashKey(i);for(let l=0;l<c.length;l++){let u=c[l],m=null,B=u.toLowerCase().includes("_f");(B&&a||!B&&!a)&&(m=u);let w=null,T=-1;m&&(w=GetHashKey(m),T=GetPedDecorationZoneFromHashes(p,w)),T!==-1&&w&&e[T].dlcs[o].tattoos.push({label:m,hash:w,zone:T,dlc:i})}}return e}U("bl_appearance:client:migration:setAppearance",e=>{e.type==="fivem"&&exports["fivem-appearance"].setPlayerAppearance(e.data),e.type==="illenium"&&exports["illenium-appearance"].setPlayerAppearance(e.data)});var R={hats:{type:"prop",index:0},glasses:{type:"prop",index:1},masks:{type:"drawable",index:1,off:0},shirts:{type:"drawable",index:8,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:11,variant:15,texture:0,id:"jackets"}]}},jackets:{type:"drawable",index:11,off:15,hook:{drawables:[{component:3,variant:15,texture:0,id:"torsos"},{component:8,variant:15,texture:0,id:"shirts"}]}},legs:{type:"drawable",index:4,off:11},shoes:{type:"drawable",index:6,off:13}};function G(e,t){return SetPedComponentVariation(e,t.index,t.value,t.texture,0),GetNumberOfPedTextureVariations(e,t.index,t.value)}function z(e,t){if(t.value===-1){ClearPedProp(e,t.index);return}return SetPedPropIndex(e,t.index,t.value,t.texture,!1),GetNumberOfPedPropTextureVariations(e,t.index,t.value)}var oe=async e=>{let t=await be(e);SetPlayerModel(PlayerId(),t),SetModelAsNoLongerNeeded(t);let r=PlayerPedId();H(r),SetPedDefaultComponentVariation(r),t===GetHashKey("mp_m_freemode_01")?SetPedHeadBlendData(n,0,0,0,0,0,0,0,0,0,!1):t===GetHashKey("mp_f_freemode_01")&&SetPedHeadBlendData(n,45,21,0,20,15,0,.3,.1,0,!1)};function ne(e,t){SetPedFaceFeature(e,t.index,t.value+0)}var A=e=>e>=0?e:0;function se(e,t){let r=A(t.shapeFirst),a=A(t.shapeSecond),o=A(t.shapeThird),s=A(t.skinFirst),i=A(t.skinSecond),c=A(t.skinThird),p=t.shapeMix+0,l=t.skinMix+0,u=t.thirdMix+0,m=t.hasParent;SetPedHeadBlendData(e,r,a,o,s,i,c,p,l,u,m)}function ie(e,t){let r=t.index;if(r===13){SetPedEyeColor(e,t.value);return}let a=t.overlayValue===-1?255:t.overlayValue;if(t.id==="hairColor"){SetPedHairTint(e,t.hairColor,t.hairHighlight);return}SetPedHeadOverlay(e,r,a,t.overlayOpacity+0),SetPedHeadOverlayColor(e,r,1,t.firstColor,t.secondColor)}function Ne(e){let t=e.drawables,r=e.props;for(let[a,o]of Object.entries(R)){let s=o.type,i=o.index;s==="drawable"&&t[a]?GetPedDrawableVariation(n,i)!==t[a].value&&SetPedComponentVariation(n,i,t[a].value,0,0):s==="prop"&&r[a]&&GetPedPropIndex(n,i)!==r[a].value&&SetPedPropIndex(n,i,r[a].value,0,!1)}}function I(e,t){let r=t.drawables,a=t.props,o=t.headOverlay;for(let s in r){let i=r[s];G(e,i)}for(let s in a){let i=a[s];z(e,i)}for(let s in o){let i=o[s];ie(e,i)}}var le=async e=>{let t=e.headStructure,r=e.headBlend;if(await oe(e.model),r&&se(n,r),t)for(let a in t){let o=t[a];ne(n,o)}};function C(e,t){if(t){ClearPedDecorationsLeaveScars(e);for(let r=0;r<t.length;r++){let a=t[r].tattoo;if(a){let o=GetHashKey(a.dlc),s=a.hash;AddPedDecorationFromHashes(e,o,s)}}}}function ce(e,t){let r=t.color,a=t.highlight;SetPedHairColor(e,r,a)}async function D(e,t){await le(t),I(e,t),ce(e,t.hairColor),C(e,t.tattoos)}async function y(e){await le(e),I(n,e),ce(n,e.hairColor),C(n,e.tattoos)}exports("SetPedClothes",I);exports("SetPedSkin",le);exports("SetPedTattoos",C);exports("SetPedHairColors",ce);RegisterNuiCallback("appearance:cancel",async(e,t)=>{await y(e),pe(),t(1)});RegisterNuiCallback("appearance:save",async(e,t)=>{Ne(e),await k(100);let r=await P(n);r.tattoos=e.tattoos,d("bl_appearance:server:saveAppearance",f(),r),C(n,r.tattoos),pe(),t(1)});RegisterNuiCallback("appearance:setModel",async(e,t)=>{let r=GetHashKey(e);if(!IsModelInCdimage(r)||!IsModelValid(r))return t(0);await oe(r);let a=await P(n);a.tattoos=[],C(n,[]),t(a)});RegisterNuiCallback("appearance:getModelTattoos",async(e,t)=>{let r=L();t(r)});RegisterNuiCallback("appearance:setHeadStructure",async(e,t)=>{ne(n,e),t(1)});RegisterNuiCallback("appearance:setHeadOverlay",async(e,t)=>{ie(n,e),t(1)});RegisterNuiCallback("appearance:setHeadBlend",async(e,t)=>{se(n,e),t(1)});RegisterNuiCallback("appearance:setTattoos",async(e,t)=>{C(n,e),t(1)});RegisterNuiCallback("appearance:setProp",async(e,t)=>{let r=z(n,e);t(r)});RegisterNuiCallback("appearance:setDrawable",async(e,t)=>{let r=G(n,e);t(r)});RegisterNuiCallback("appearance:toggleItem",async(e,t)=>{let r=R[e.item];if(!r)return t(!1);let a=e.data,o=r.type,s=r.index,i=r.hook,c=e.hookData;if(!a)return t(!1);if(o==="prop")if(GetPedPropIndex(n,s)===-1){z(n,a),t(!1);return}else{ClearPedProp(n,s),t(!0);return}else if(o==="drawable"){let p=GetPedDrawableVariation(n,s);if(a.value===r.off){t(!1);return}if(a.value===p){if(SetPedComponentVariation(n,s,r.off,0,0),i)for(let l=0;l<i.drawables?.length;l++){let u=i.drawables[l];SetPedComponentVariation(n,u.component,u.variant,u.texture,0)}t(!0);return}else{G(n,a);for(let l=0;l<c?.length;l++)G(n,c[l]);t(!1);return}}});RegisterNuiCallback("appearance:saveOutfit",async(e,t)=>{let r=f(),a=await d("bl_appearance:server:saveOutfit",r,e);t(a)});RegisterNuiCallback("appearance:deleteOutfit",async({id:e},t)=>{let r=f(),a=await d("bl_appearance:server:deleteOutfit",r,e);t(a)});RegisterNuiCallback("appearance:renameOutfit",async(e,t)=>{let r=f(),a=await d("bl_appearance:server:renameOutfit",r,e);t(a)});RegisterNuiCallback("appearance:useOutfit",async(e,t)=>{I(n,e),t(1)});RegisterNuiCallback("appearance:importOutfit",async({id:e,outfitName:t},r)=>{let a=f(),o=await d("bl_appearance:server:importOutfit",a,e,t);r(o)});RegisterNuiCallback("appearance:grabOutfit",async({id:e},t)=>{let r=await d("bl_appearance:server:grabOutfit",e);t(r)});var ue=exports.bl_appearance,Fe=0,de=!1,Z=null,j=null;async function O(e,t=!1){if(e===null||de)return;let r=PlayerPedId(),a=ue.menus(),o=e.type,s=a[o];if(!s)return;H(r),ke();let i=f(),c=s.tabs,p=s.allowExit;Fe=GetPedArmour(r);let l=[];c.includes("outfits")&&(l=await d("bl_appearance:server:getOutfits",i));let m=[];c.includes("heritage")&&(m=ue.models());let B=c.includes("tattoos"),w;B&&(w=L());let T=Ze(e),fe=await P(r);return t&&(emitNet("bl_appearance:server:setroutingbucket"),j=new Promise(Ee=>{Z=Ee})),V("appearance:data",{tabs:c,appearance:fe,blacklist:T,tattoos:w,outfits:l,models:m,allowExit:p,locale:await he("locale")}),SetNuiFocus(!0,!0),V("appearance:visible",!0),de=!0,j&&(await j,emitNet("bl_appearance:server:resetroutingbucket")),j=null,Z=null,!0}exports("openMenu",O);function Ze(e){if(!e)return{};let{groupTypes:t,base:r}=ue.blacklist();if(!t)return{};if(!r)return{};let a={...r},o=W();for(let s in t){let i=t[s];for(let c in i){let p=!1;if(s=="jobs"&&e.jobs&&(p=e.jobs.includes(o.job.name)),s=="gangs"&&e.gangs&&(p=e.gangs.includes(o.gang.name)),!p){let l=i[c];a=Object.assign({},a,l,{drawables:Object.assign({},a.drawables,l.drawables)})}}}return a}function pe(){SetPedArmour(n,Fe),_e(),SetNuiFocus(!1,!1),V("appearance:visible",!1),Z&&Z(),de=!1}function Ge(){onNet("qb-clothing:client:loadPlayerClothing",async(e,t)=>{await D(t,e)}),onNet("qb-clothes:client:CreateFirstCharacter",()=>{exports.bl_appearance.InitialCreation()}),onNet("qb-clothing:client:openOutfitMenu",()=>{O({type:"outfits",coords:[0,0,0,0]})})}function Ie(){let e=!1;on("esx_skin:resetFirstSpawn",()=>{e=!0}),on("esx_skin:playerRegistered",()=>{e&&exports.bl_appearance.InitialCreation()}),onNet("skinchanger:loadSkin2",async(t,r)=>{await D(r,t)}),onNet("skinchanger:getSkin",async t=>{let r=await f(),a=await d("bl_appearance:server:getAppearance",r);t(a)}),onNet("skinchanger:loadSkin",async(t,r)=>{await y(t),r&&r()}),onNet("esx_skin:openSaveableMenu",async t=>{exports.bl_appearance.InitialCreation(t)})}RegisterCommand("openMenu",async()=>{exports.bl_appearance.InitialCreation()},!1);exports("SetPedAppearance",async(e,t)=>{await D(e,t)});exports("SetPlayerPedAppearance",async e=>{let t=await d("bl_appearance:server:getAppearance",e);await y(t)});exports("GetPlayerPedAppearance",async e=>await d("bl_appearance:server:getAppearance",e));exports("InitialCreation",async e=>{await O({type:"appearance",coords:[0,0,0,0]},!0),e&&e()});on("bl_sprites:client:useZone",e=>{O(e)});onNet("bl_bridge:client:playerLoaded",async()=>{for(;!M.core().playerLoaded();)await ye(100);let e=await f(),t=await d("bl_appearance:server:getAppearance",e);t&&await y(t)});onNet("onResourceStart",async e=>{if(e===GetCurrentResourceName()&&M.core().playerLoaded()){let t=await f(),r=await d("bl_appearance:server:getAppearance",t);if(!r)return;await y(r)}});var Be=M.getFramework("core"),me=xe(GetConvar("bl:framework","qb"));me=="qb"||me=="qbx"&&GetResourceState(Be)=="started"?Ge():me=="esx"&&GetResourceState(Be)=="started"&&Ie();RegisterCommand("reloadskin",async()=>{let e=await f(),t=GetEntityHealth(n),r=GetEntityMaxHealth(n),a=GetPedArmour(n),o=await d("bl_appearance:server:getAppearance",e);o&&(await y(o),SetPedMaxHealth(n,r),k(1e3),SetEntityHealth(n,t),SetPedArmour(n,a))},!1);
