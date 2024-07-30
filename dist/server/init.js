var J=Object.create;var S=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var v=r=>t=>{var e=r[t];if(e)return e();throw new Error("Module not found in bundle: "+t)};var d=(r,t)=>()=>(r&&(t=r(r=0)),t);var V=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),N=(r,t)=>{for(var e in t)S(r,e,{get:t[e],enumerable:!0})},j=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of W(t))!B.call(r,n)&&n!==e&&S(r,n,{get:()=>t[n],enumerable:!(a=H(t,n))||a.enumerable});return r};var m=(r,t,e)=>(e=r!=null?J($(r)):{},j(t||!r||!r.__esModule?S(e,"default",{value:r,enumerable:!0}):e,r));function c(r,t,...e){let a;do a=`${r}:${Math.floor(Math.random()*100001)}:${t}`;while(A[a]);return emitNet(`__ox_cb_${r}`,t,_,a,...e),new Promise(n=>{A[a]=n})}function o(r,t){onNet(`__ox_cb_${r}`,async(e,a,...n)=>{let i=source,f;try{f=await t(i,...n)}catch(P){console.error(`an error occurred while handling callback event ${r} | Error: `,P.message)}emitNet(`__ox_cb_${e}`,i,a,f)})}var _,A,g=d(()=>{_=GetCurrentResourceName(),A={};onNet(`__ox_cb_${_}`,(r,...t)=>{let e=A[r];return e&&e(...t)})});var E=V(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.oxmysql=void 0;var R=[];function y(r,t){if(!r)throw new TypeError(t)}var p=(r,t,e,a)=>{if(typeof r=="number"&&(r=R[r]),a?y(typeof r=="object",`First argument expected object, recieved ${typeof r}`):y(typeof r=="string",`First argument expected string, received ${typeof r}`),t){let n=typeof t;y(n==="object"||n==="function",`Second argument expected object or function, received ${n}`),!e&&n==="function"&&(e=t,t=void 0)}return e!==void 0&&y(typeof e=="function",`Third argument expected function, received ${typeof e}`),[r,t,e]},O=global.exports.oxmysql,G=GetCurrentResourceName();function l(r,t,e){return new Promise((a,n)=>{O[r](t,e,(i,f)=>{if(f)return n(f);a(i)},G,!0)})}w.oxmysql={store(r){return y(typeof r!="string",`Query expects a string, received ${typeof r}`),R.push(r)},ready(r){setImmediate(async()=>{for(;GetResourceState("oxmysql")!=="started";)await new Promise(t=>setTimeout(t,50));r()})},async query(r,t,e){[r,t,e]=p(r,t,e);let a=await l("query",r,t);return e?e(a):a},async single(r,t,e){[r,t,e]=p(r,t,e);let a=await l("single",r,t);return e?e(a):a},async scalar(r,t,e){[r,t,e]=p(r,t,e);let a=await l("scalar",r,t);return e?e(a):a},async update(r,t,e){[r,t,e]=p(r,t,e);let a=await l("update",r,t);return e?e(a):a},async insert(r,t,e){[r,t,e]=p(r,t,e);let a=await l("insert",r,t);return e?e(a):a},async prepare(r,t,e){[r,t,e]=p(r,t,e);let a=await l("prepare",r,t);return e?e(a):a},async rawExecute(r,t,e){[r,t,e]=p(r,t,e);let a=await l("rawExecute",r,t);return e?e(a):a},async transaction(r,t,e){[r,t,e]=p(r,t,e,!0);let a=await l("transaction",r,t);return e?e(a):a},isReady(){return O.isReady()},async awaitConnection(){return await O.awaitConnection()}}});var L,u,T=d(()=>{L=m(E(),1),u=async(r,t,e)=>{let a={drawables:e.drawables,props:e.props,headOverlay:e.headOverlay},n={headBlend:e.headBlend,headStructure:e.headStructure,hairColor:e.hairColor,model:e.model},i=e.tattoos||[];return await L.oxmysql.prepare("INSERT INTO appearance (id, clothes, skin, tattoos) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE clothes = VALUES(clothes), skin = VALUES(skin), tattoos = VALUES(tattoos);",[t,JSON.stringify(a),JSON.stringify(n),JSON.stringify(i)])}});var Y={};var C=d(()=>{});var h={};N(h,{default:()=>Q});var b,z,K,Q,x=d(()=>{b=m(E(),1);g();T();z=r=>new Promise(t=>setTimeout(t,r)),K=async r=>{let t=await b.oxmysql.query("SELECT * FROM `players`");if(t){for(let e of t)if(e.skin){await c("bl_appearance:client:migration:setAppearance",r,{type:"fivem",data:JSON.parse(e.skin)}),await z(100);let a=await c("bl_appearance:client:getAppearance",r);await u(r,e.citizenid,a)}console.log("Converted "+t.length+" appearances")}},Q=K});var U={};N(U,{default:()=>q});var k,X,Z,q,I=d(()=>{k=m(E(),1);g();T();X=r=>new Promise(t=>setTimeout(t,r)),Z=async r=>{let t=await k.oxmysql.query("SELECT * FROM `playerskins` WHERE active = 1`");if(t){for(let e of t)if(e.skin){await c("bl_appearance:client:migration:setAppearance",r,{type:"illenium",data:JSON.parse(e.skin)}),await X(100);let a=await c("bl_appearance:client:getAppearance",r);await u(r,e.citizenid,a)}console.log("Converted "+t.length+" appearances")}},q=Z});var M={};N(M,{default:()=>re});var F,ee,te,re,D=d(()=>{F=m(E(),1);g();T();ee=r=>new Promise(t=>setTimeout(t,r)),te=async r=>{let t=await F.oxmysql.query("SELECT * FROM `playerskins` WHERE active = 1");if(t){for(let e of t){emitNet("qb-clothes:loadSkin",r,0,e.model,e.skin),await ee(200);let a=await c("bl_appearance:client:getAppearance",r);await u(r,e.citizenid,a)}console.log("Converted "+t.length+" appearances")}},re=te});g();var s=m(E(),1);T();var ae=v({"./migrate/esx.ts":()=>Promise.resolve().then(()=>(C(),Y)),"./migrate/fivem.ts":()=>Promise.resolve().then(()=>(x(),h)),"./migrate/illenium.ts":()=>Promise.resolve().then(()=>(I(),U)),"./migrate/qb.ts":()=>Promise.resolve().then(()=>(D(),M))});o("bl_appearance:server:getOutfits",async(r,t)=>{let e=await s.oxmysql.prepare("SELECT * FROM outfits WHERE player_id = ?",[t]);return e?(Array.isArray(e)||(e=[e]),e.map(n=>({id:n.id,label:n.label,outfit:JSON.parse(n.outfit)}))):[]});o("bl_appearance:server:renameOutfit",async(r,t,e)=>{let a=e.id,n=e.label;return await s.oxmysql.update("UPDATE outfits SET label = ? WHERE player_id = ? AND id = ?",[n,t,a])});o("bl_appearance:server:deleteOutfit",async(r,t,e)=>await s.oxmysql.update("DELETE FROM outfits WHERE player_id = ? AND id = ?",[t,e])>0);o("bl_appearance:server:saveOutfit",async(r,t,e)=>await s.oxmysql.insert("INSERT INTO outfits (player_id, label, outfit) VALUES (?, ?, ?)",[t,e.label,JSON.stringify(e.outfit)]));o("bl_appearance:server:grabOutfit",async(r,t)=>{let e=await s.oxmysql.prepare("SELECT outfit FROM outfits WHERE id = ?",[t]);return JSON.parse(e)});o("bl_appearance:server:importOutfit",async(r,t,e,a)=>{let[n]=await s.oxmysql.query("SELECT label, outfit FROM outfits WHERE id = ?",[e]);return n?{success:!0,id:await s.oxmysql.insert("INSERT INTO outfits (player_id, label, outfit) VALUES (?, ?, ?)",[t,a,n.outfit])}:{success:!1,message:"Outfit not found"}});o("bl_appearance:server:saveSkin",async(r,t,e)=>await s.oxmysql.update("UPDATE appearance SET skin = ? WHERE id = ?",[JSON.stringify(e),t]));o("bl_appearance:server:saveClothes",async(r,t,e)=>await s.oxmysql.update("UPDATE appearance SET clothes = ? WHERE id = ?",[JSON.stringify(e),t]));o("bl_appearance:server:saveAppearance",u);o("bl_appearance:server:saveTattoos",async(r,t,e)=>await s.oxmysql.update("UPDATE appearance SET tattoos = ? WHERE id = ?",[JSON.stringify(e),t]));o("bl_appearance:server:getSkin",async(r,t)=>{let e=await s.oxmysql.prepare("SELECT skin FROM appearance WHERE id = ?",[t]);return JSON.parse(e)});o("bl_appearance:server:getClothes",async(r,t)=>{let e=await s.oxmysql.prepare("SELECT clothes FROM appearance WHERE id = ?",[t]);return JSON.parse(e)});o("bl_appearance:server:getTattoos",async(r,t)=>{let e=await s.oxmysql.prepare("SELECT tattoos FROM appearance WHERE id = ?",[t]);return JSON.parse(e)||[]});o("bl_appearance:server:getAppearance",async(r,t)=>{let e=await s.oxmysql.single("SELECT * FROM appearance WHERE id = ? LIMIT 1",[t]);if(!e)return null;let a={...JSON.parse(e.skin),...JSON.parse(e.clothes),...JSON.parse(e.tattoos)};return a.id=e.id,a});onNet("bl_appearance:server:setroutingbucket",()=>{SetPlayerRoutingBucket(source.toString(),source)});onNet("bl_appearance:server:resetroutingbucket",()=>{SetPlayerRoutingBucket(source.toString(),0)});RegisterCommand("migrate",async r=>{r=r!==0?r:parseInt(getPlayers()[0]);let e=exports.bl_appearance.config();(await ae(`./migrate/${e.previousClothing==="fivem-appearance"?"fivem":e.previousClothing}.ts`)).default(r)},!1);s.oxmysql.ready(()=>{s.oxmysql.query(`CREATE TABLE IF NOT EXISTS appearance (
		id varchar(100) NOT NULL,
		skin longtext DEFAULT NULL,
		clothes longtext DEFAULT NULL,
		tattoos  longtext DEFAULT NULL,
		PRIMARY KEY (id)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8;`),s.oxmysql.query(`CREATE TABLE IF NOT EXISTS outfits (
		id int NOT NULL AUTO_INCREMENT,
		player_id varchar(100) NOT NULL,
		label varchar(100) NOT NULL,
		outfit longtext DEFAULT NULL,
		PRIMARY KEY (id)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8;`)});
