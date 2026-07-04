(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="165",Jd=0,sl=1,ef=2,Su=1,wu=2,qn=3,Qn=0,qt=1,an=2,$n=0,As=1,cc=2,rl=3,ol=4,tf=5,zi=100,nf=101,sf=102,rf=103,of=104,af=200,cf=201,lf=202,hf=203,lc=204,hc=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,_f=212,xf=213,vf=214,Mf=0,yf=1,Sf=2,Bo=3,wf=4,bf=5,Tf=6,Af=7,Ac=0,Ef=1,Rf=2,vi=0,bu=1,Tu=2,Au=3,Ec=4,Cf=5,Eu=6,Ru=7,al="attached",Pf="detached",Cu=300,Ls=301,Ds=302,uc=303,dc=304,Zo=306,Jn=1e3,_i=1001,Oo=1002,Wt=1003,Pu=1004,mr=1005,Vt=1006,Po=1007,Kn=1008,wi=1009,If=1010,Lf=1011,ko=1012,Iu=1013,Ns=1014,An=1015,Zn=1016,Lu=1017,Du=1018,Us=1020,Df=35902,Nf=1021,Uf=1022,_n=1023,Ff=1024,Bf=1025,Es=1026,Fs=1027,Nu=1028,Uu=1029,Of=1030,Fu=1031,Bu=1033,ca=33776,la=33777,ha=33778,ua=33779,cl=35840,ll=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,Ml=37813,yl=37814,Sl=37815,wl=37816,bl=37817,Tl=37818,Al=37819,El=37820,Rl=37821,da=36492,Cl=36494,Pl=36495,kf=36283,Il=36284,Ll=36285,Dl=36286,Ou=2200,zf=2201,Hf=2202,br=2300,Tr=2301,fa=2302,ys=2400,Ss=2401,zo=2402,Rc=2500,Gf=2501,Vf=0,ku=1,fc=2,Wf=3200,Xf=3201,Cc=0,qf=1,gi="",Ct="srgb",Lt="srgb-linear",Pc="display-p3",Qo="display-p3-linear",Ho="linear",ct="srgb",Go="rec709",Vo="p3",Zi=7680,Nl=519,Yf=512,Kf=513,jf=514,zu=515,$f=516,Zf=517,Qf=518,Jf=519,pc=35044,Ul="300 es",jn=2e3,Wo=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const Mr=Math.PI/180,Bs=180/Math.PI;function vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function Ic(r,e){return(r%e+e)%e}function ep(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tp(r,e,t){return r!==e?(t-r)/(e-r):0}function yr(r,e,t){return(1-t)*r+t*e}function np(r,e,t,n){return yr(r,e,1-Math.exp(-t*n))}function ip(r,e=1){return e-Math.abs(Ic(r,e*2)-e)}function sp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function op(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ap(r,e){return r+Math.random()*(e-r)}function cp(r){return r*(.5-Math.random())}function lp(r){r!==void 0&&(Fl=r);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(r){return r*Mr}function up(r){return r*Bs}function dp(r){return(r&r-1)===0&&r!==0}function fp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sr={DEG2RAD:Mr,RAD2DEG:Bs,generateUUID:vn,clamp:Ft,euclideanModulo:Ic,mapLinear:ep,inverseLerp:tp,lerp:yr,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:op,randFloat:ap,randFloatSpread:cp,seededRandom:lp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:fp,floorPowerOfTwo:pp,setQuaternionFromProperEuler:mp,normalize:nt,denormalize:mn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,s,o,a,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],x=i[4],y=i[7],C=i[2],T=i[5],A=i[8];return s[0]=o*_+a*v+c*C,s[3]=o*p+a*x+c*T,s[6]=o*g+a*y+c*A,s[1]=l*_+h*v+u*C,s[4]=l*p+h*x+u*T,s[7]=l*g+h*y+u*A,s[2]=d*_+f*v+m*C,s[5]=d*p+f*x+m*T,s[8]=d*g+f*y+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Fe;function Hu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gp(){const r=Ar("canvas");return r.style.display="block",r}const Bl={};function Lc(r){r in Bl||(Bl[r]=!0,console.warn(r))}function _p(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ol=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kl=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[Lt]:{transfer:Ho,primaries:Go,toReference:r=>r,fromReference:r=>r},[Ct]:{transfer:ct,primaries:Go,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qo]:{transfer:Ho,primaries:Vo,toReference:r=>r.applyMatrix3(kl),fromReference:r=>r.applyMatrix3(Ol)},[Pc]:{transfer:ct,primaries:Vo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(kl),fromReference:r=>r.applyMatrix3(Ol).convertLinearToSRGB()}},xp=new Set([Lt,Qo]),Ze={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!xp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Wr[e].toReference,i=Wr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Wr[r].primaries},getTransfer:function(r){return r===gi?Ho:Wr[r].transfer}};function Rs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qi;class vp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Ar("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rs(t[n]/255)*255):t[n]=Rs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mp=0;class Gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ga(i[o].image)):s.push(ga(i[o]))}else s=ga(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;class yt extends Yi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=_i,i=_i,s=Vt,o=Kn,a=_n,c=wi,l=yt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=vn(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Cu;yt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,C=(g+1)/2,T=(h+d)/4,A=(u+_)/4,I=(m+p)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=A/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=I/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sp extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends Sp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vu extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wp extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let p=1-a;const g=c*d+l*f+h*m+u*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,g*v);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const y=a*v;if(c=c*p+d*y,l=l*p+f*y,h=h*p+m*y,u=u*p+_*y,p===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new E,zl=new Bt;class yn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),qr.subVectors(this.max,Qs),Ji.subVectors(e.a,Qs),es.subVectors(e.b,Qs),ts.subVectors(e.c,Qs),ai.subVectors(es,Ji),ci.subVectors(ts,es),Pi.subVectors(Ji,ts);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Pi.z,Pi.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Pi.z,0,-Pi.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Pi.y,Pi.x,0];return!xa(t,Ji,es,ts,qr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ji,es,ts,qr))?!1:(Yr.crossVectors(ai,ci),t=[Yr.x,Yr.y,Yr.z],xa(t,Ji,es,ts,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new E,new E,new E,new E,new E,new E,new E,new E],un=new E,Xr=new yn,Ji=new E,es=new E,ts=new E,ai=new E,ci=new E,Pi=new E,Qs=new E,qr=new E,Yr=new E,Ii=new E;function xa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ii.fromArray(r,s);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const bp=new yn,Js=new E,va=new E;class Nn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(va)),this.expandByPoint(Js.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new E,Ma=new E,Kr=new E,li=new E,ya=new E,jr=new E,Sa=new E;class Nr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ma.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=li.dot(this.direction),c=-li.dot(Kr),l=li.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=s*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ma).addScaledVector(Kr,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){ya.subVectors(t,e),jr.subVectors(n,e),Sa.crossVectors(ya,jr);let o=this.direction.dot(Sa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(jr.crossVectors(li,jr));if(c<0)return null;const l=a*this.direction.dot(ya.cross(li));if(l<0||c+l>o)return null;const h=-a*li.dot(Sa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,m,_,p){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,m,_,p)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ap)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),hi.crossVectors(n,Jt),hi.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),hi.crossVectors(n,Jt)),hi.normalize(),$r.crossVectors(Jt,hi),i[0]=hi.x,i[4]=$r.x,i[8]=Jt.x,i[1]=hi.y,i[5]=$r.y,i[9]=Jt.y,i[2]=hi.z,i[6]=$r.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],x=n[7],y=n[11],C=n[15],T=i[0],A=i[4],I=i[8],w=i[12],M=i[1],P=i[5],N=i[9],B=i[13],H=i[2],W=i[6],G=i[10],j=i[14],V=i[3],ae=i[7],me=i[11],ve=i[15];return s[0]=o*T+a*M+c*H+l*V,s[4]=o*A+a*P+c*W+l*ae,s[8]=o*I+a*N+c*G+l*me,s[12]=o*w+a*B+c*j+l*ve,s[1]=h*T+u*M+d*H+f*V,s[5]=h*A+u*P+d*W+f*ae,s[9]=h*I+u*N+d*G+f*me,s[13]=h*w+u*B+d*j+f*ve,s[2]=m*T+_*M+p*H+g*V,s[6]=m*A+_*P+p*W+g*ae,s[10]=m*I+_*N+p*G+g*me,s[14]=m*w+_*B+p*j+g*ve,s[3]=v*T+x*M+y*H+C*V,s[7]=v*A+x*P+y*W+C*ae,s[11]=v*I+x*N+y*G+C*me,s[15]=v*w+x*B+y*j+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15];return m*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+p*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+g*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=u*p*l-_*d*l+_*c*f-a*p*f-u*c*g+a*d*g,x=m*d*l-h*p*l-m*c*f+o*p*f+h*c*g-o*d*g,y=h*_*l-m*u*l+m*a*f-o*_*f-h*a*g+o*u*g,C=m*u*c-h*_*c-m*a*d+o*_*d+h*a*p-o*u*p,T=t*v+n*x+i*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*g-n*d*g)*A,e[2]=(a*p*s-_*c*s+_*i*l-n*p*l-a*i*g+n*c*g)*A,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=x*A,e[5]=(h*p*s-m*d*s+m*i*f-t*p*f-h*i*g+t*d*g)*A,e[6]=(m*c*s-o*p*s-m*i*l+t*p*l+o*i*g-t*c*g)*A,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=y*A,e[9]=(m*u*s-h*_*s-m*n*f+t*_*f+h*n*g-t*u*g)*A,e[10]=(o*_*s-m*a*s+m*n*l-t*_*l-o*n*g+t*a*g)*A,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=C*A,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*p+t*u*p)*A,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*p-t*a*p)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,m=s*u,_=o*h,p=o*u,g=a*u,v=c*l,x=c*h,y=c*u,C=n.x,T=n.y,A=n.z;return i[0]=(1-(_+g))*C,i[1]=(f+y)*C,i[2]=(m-x)*C,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+g))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(m+x)*A,i[9]=(p-v)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);const l=1/s,h=1/o,u=1/a;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=jn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===jn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Wo)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=jn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let m,_;if(a===jn)m=(o+s)*u,_=-2*u;else if(a===Wo)m=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new E,dn=new Ae,Tp=new E(0,0,0),Ap=new E(1,1,1),hi=new E,$r=new E,Jt=new E,Hl=new Ae,Gl=new Bt;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ep=0;const Vl=new E,is=new Bt,Hn=new Ae,Zr=new E,er=new E,Rp=new E,Cp=new Bt,Wl=new E(1,0,0),Xl=new E(0,1,0),ql=new E(0,0,1),Yl={type:"added"},Pp={type:"removed"},ss={type:"childadded",child:null},wa={type:"childremoved",child:null};class ut extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new E,t=new Zt,n=new Bt,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Fe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(er,Zr,this.up):Hn.lookAt(Zr,er,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Hn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new E(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new E,Gn=new E,ba=new E,Vn=new E,rs=new E,os=new E,Kl=new E,Ta=new E,Aa=new E,Ea=new E;class gn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fn.subVectors(i,t),Gn.subVectors(n,t),ba.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Gn),c=fn.dot(ba),l=Gn.dot(Gn),h=Gn.dot(ba),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Gn.subVectors(e,t),fn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;rs.subVectors(i,n),os.subVectors(s,n),Ta.subVectors(e,n);const c=rs.dot(Ta),l=os.dot(Ta);if(c<=0&&l<=0)return t.copy(n);Aa.subVectors(e,i);const h=rs.dot(Aa),u=os.dot(Aa);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(rs,o);Ea.subVectors(e,s);const f=rs.dot(Ea),m=os.dot(Ea);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(os,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Kl.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Kl,a);const g=1/(p+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ra(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Ic(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ra(o,s,e+1/3),this.g=Ra(o,s,e),this.b=Ra(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ze.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ft(Ut.r*255,0,255))*65536+Math.round(Ft(Ut.g*255,0,255))*256+Math.round(Ft(Ut.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,s=Ut.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ct){Ze.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Qr);const n=yr(ui.h,Qr.h,t),i=yr(ui.s,Qr.s,t),s=yr(ui.l,Qr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new ue;ue.NAMES=Wu;let Ip=0;class hn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=As,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=hc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pt extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new E,Jr=new fe;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class Xu extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qu extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lp=0;const sn=new Ae,Ca=new ut,as=new E,en=new yn,tr=new yn,Et=new E;class St extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?qu:Xu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(en.min,tr.min),en.expandByPoint(Et),Et.addVectors(en.max,tr.max),en.expandByPoint(Et)):(en.expandByPoint(tr.min),en.expandByPoint(tr.max))}en.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(e,l),Et.add(as)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new E,c[I]=new E;const l=new E,h=new E,u=new E,d=new fe,f=new fe,m=new fe,_=new E,p=new E;function g(I,w,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[I].add(_),a[w].add(_),a[M].add(_),c[I].add(p),c[w].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,w=v.length;I<w;++I){const M=v[I],P=M.start,N=M.count;for(let B=P,H=P+N;B<H;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new E,y=new E,C=new E,T=new E;function A(I){C.fromBufferAttribute(i,I),T.copy(C);const w=a[I];x.copy(w),x.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);const P=y.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,w=v.length;I<w;++I){const M=v[I],P=M.start,N=M.count;for(let B=P,H=P+N;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)d[m++]=l[f++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Ae,Li=new Nr,eo=new Nn,$l=new E,cs=new E,ls=new E,hs=new E,Pa=new E,to=new E,no=new fe,io=new fe,so=new fe,Zl=new E,Ql=new E,Jl=new E,ro=new E,oo=new E;class De extends ut{constructor(e=new St,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Pa.fromBufferAttribute(u,e),o?to.addScaledVector(Pa,h):to.addScaledVector(Pa.sub(t),h))}t.add(to)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(eo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(eo,$l)===null||Li.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(jl.copy(s).invert(),Li.copy(e.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,C=x;y<C;y+=3){const T=a.getX(y),A=a.getX(y+1),I=a.getX(y+2);i=ao(this,g,e,n,l,h,u,T,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=ao(this,o,e,n,l,h,u,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,C=x;y<C;y+=3){const T=y,A=y+1,I=y+2;i=ao(this,g,e,n,l,h,u,T,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=p,x=p+1,y=p+2;i=ao(this,o,e,n,l,h,u,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Dp(r,e,t,n,i,s,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Qn,a),c===null)return null;oo.copy(a),oo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(oo);return l<t.near||l>t.far?null:{distance:l,point:oo.clone(),object:r}}function ao(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,cs),r.getVertexPosition(c,ls),r.getVertexPosition(l,hs);const h=Dp(r,e,t,n,cs,ls,hs,ro);if(h){i&&(no.fromBufferAttribute(i,a),io.fromBufferAttribute(i,c),so.fromBufferAttribute(i,l),h.uv=gn.getInterpolation(ro,cs,ls,hs,no,io,so,new fe)),s&&(no.fromBufferAttribute(s,a),io.fromBufferAttribute(s,c),so.fromBufferAttribute(s,l),h.uv1=gn.getInterpolation(ro,cs,ls,hs,no,io,so,new fe)),o&&(Zl.fromBufferAttribute(o,a),Ql.fromBufferAttribute(o,c),Jl.fromBufferAttribute(o,l),h.normal=gn.getInterpolation(ro,cs,ls,hs,Zl,Ql,Jl,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new E,materialIndex:0};gn.getNormal(cs,ls,hs,u.normal),h.face=u}return h}class ri extends St{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function m(_,p,g,v,x,y,C,T,A,I,w){const M=y/A,P=C/I,N=y/2,B=C/2,H=T/2,W=A+1,G=I+1;let j=0,V=0;const ae=new E;for(let me=0;me<G;me++){const ve=me*P-B;for(let Ye=0;Ye<W;Ye++){const it=Ye*M-N;ae[_]=it*v,ae[p]=ve*x,ae[g]=H,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[p]=0,ae[g]=T>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ye/A),u.push(1-me/I),j+=1}}for(let me=0;me<I;me++)for(let ve=0;ve<A;ve++){const Ye=d+ve+W*me,it=d+ve+W*(me+1),q=d+(ve+1)+W*(me+1),J=d+(ve+1)+W*me;c.push(Ye,it,J),c.push(it,q,J),V+=6}a.addGroup(f,V,w),f+=V,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(r){const e={};for(let t=0;t<r.length;t++){const n=Os(r[t]);for(const i in n)e[i]=n[i]}return e}function Np(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Er={clone:Os,merge:zt};var Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new E,eh=new fe,th=new fe;class Ht extends Ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class Bp extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(us,ds,e,t);i.layers=this.layers,this.add(i);const s=new Ht(us,ds,e,t);s.layers=this.layers,this.add(s);const o=new Ht(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new Ht(us,ds,e,t);a.layers=this.layers,this.add(a);const c=new Ht(us,ds,e,t);c.layers=this.layers,this.add(c);const l=new Ht(us,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ju extends yt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Op extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ju(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ri(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:$n});s.uniforms.tEquirect.value=t;const o=new De(i,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Vt),new Bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ia=new E,kp=new E,zp=new Fe;class mi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ia.subVectors(n,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zp.getNormalMatrix(e),i=this.coplanarPoint(Ia).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Nn,co=new E;class Nc{constructor(e=new mi,t=new mi,n=new mi,i=new mi,s=new mi,o=new mi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],p=i[11],g=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,p-f,y-g).normalize(),n[1].setComponents(c+s,d+l,p+f,y+g).normalize(),n[2].setComponents(c+o,d+h,p+m,y+v).normalize(),n[3].setComponents(c-o,d-h,p-m,y-v).normalize(),n[4].setComponents(c-a,d-u,p-_,y-x).normalize(),t===jn)n[5].setComponents(c+a,d+u,p+_,y+x).normalize();else if(t===Wo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Hp(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,a),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let f=0,m=d.length;f<m;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class Ln extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const v=g*d-o;for(let x=0;x<l;x++){const y=x*u-s;m.push(y,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){const x=v+l*g,y=v+l*(g+1),C=v+1+l*(g+1),T=v+1+l*g;f.push(x,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Gp,alphahash_pars_fragment:Vp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Kp,aomap_pars_fragment:jp,batching_pars_vertex:$p,batching_vertex:Zp,begin_vertex:Qp,beginnormal_vertex:Jp,bsdfs:em,iridescence_fragment:tm,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:om,color_fragment:am,color_pars_fragment:cm,color_pars_vertex:lm,color_vertex:hm,common:um,cube_uv_reflection_fragment:dm,defaultnormal_vertex:fm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:_m,colorspace_fragment:xm,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Sm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Nm,envmap_vertex:bm,fog_vertex:Tm,fog_pars_vertex:Am,fog_fragment:Em,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Um,lights_toon_pars_fragment:Fm,lights_phong_fragment:Bm,lights_phong_pars_fragment:Om,lights_physical_fragment:km,lights_physical_pars_fragment:zm,lights_fragment_begin:Hm,lights_fragment_maps:Gm,lights_fragment_end:Vm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:Km,map_pars_fragment:jm,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:sg,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:cg,normal_vertex:lg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:xg,dithering_fragment:vg,dithering_pars_fragment:Mg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:bg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Eg,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Ig,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Bg,uv_pars_vertex:Og,uv_vertex:kg,worldpos_vertex:zg,background_vert:Hg,background_frag:Gg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:Yg,depth_frag:Kg,distanceRGBA_vert:jg,distanceRGBA_frag:$g,equirect_vert:Zg,equirect_frag:Qg,linedashed_vert:Jg,linedashed_frag:e0,meshbasic_vert:t0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:c0,meshphong_vert:l0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:_0,shadow_frag:x0,sprite_vert:v0,sprite_frag:M0},ie={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Tn={basic:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([ie.common,ie.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([ie.lights,ie.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Tn.physical={uniforms:zt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const lo={r:0,b:0,g:0},Ni=new Zt,y0=new Ae;function S0(r,e,t,n,i,s,o){const a=new ue(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=m(v);y===null?g(a,c):y&&y.isColor&&(g(y,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(v,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===Zo)?(h===void 0&&(h=new De(new ri(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Os(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ni.copy(x.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(Ni)),h.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ct,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new De(new Ln(2,2),new Xt({name:"BackgroundMaterial",uniforms:Os(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){v.getRGB(lo,Yu(r)),n.buffers.color.setClear(lo.r,lo.g,lo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(a,c)},render:_,addToRenderList:p}}function w0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,N,B,H){let W=!1;const G=u(B,N,P);s!==G&&(s=G,l(s.object)),W=f(M,B,N,H),W&&m(M,B,N,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(M,P,N,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,N){const B=N.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let W=H[P.id];W===void 0&&(W={},H[P.id]=W);let G=W[B];return G===void 0&&(G=d(c()),W[B]=G),G}function d(M){const P=[],N=[],B=[];for(let H=0;H<t;H++)P[H]=0,N[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,N,B){const H=s.attributes,W=P.attributes;let G=0;const j=N.getAttributes();for(const V in j)if(j[V].location>=0){const me=H[V];let ve=W[V];if(ve===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function m(M,P,N,B){const H={},W=P.attributes;let G=0;const j=N.getAttributes();for(const V in j)if(j[V].location>=0){let me=W[V];me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),H[V]=ve,G++}s.attributes=H,s.attributesNum=G,s.index=B}function _(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function p(M){g(M,0)}function g(M,P){const N=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;N[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),H[M]!==P&&(r.vertexAttribDivisor(M,P),H[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==M[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function x(M,P,N,B,H,W,G){G===!0?r.vertexAttribIPointer(M,P,N,H,W):r.vertexAttribPointer(M,P,N,B,H,W)}function y(M,P,N,B){_();const H=B.attributes,W=N.getAttributes(),G=P.defaultAttributeValues;for(const j in W){const V=W[j];if(V.location>=0){let ae=H[j];if(ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const me=ae.normalized,ve=ae.itemSize,Ye=e.get(ae);if(Ye===void 0)continue;const it=Ye.buffer,q=Ye.type,J=Ye.bytesPerElement,_e=q===r.INT||q===r.UNSIGNED_INT||ae.gpuType===Iu;if(ae.isInterleavedBufferAttribute){const oe=ae.data,He=oe.stride,Be=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let je=0;je<V.locationSize;je++)g(V.location+je,oe.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let je=0;je<V.locationSize;je++)p(V.location+je);r.bindBuffer(r.ARRAY_BUFFER,it);for(let je=0;je<V.locationSize;je++)x(V.location+je,ve/V.locationSize,q,me,He*J,(Be+ve/V.locationSize*je)*J,_e)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)g(V.location+oe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe);r.bindBuffer(r.ARRAY_BUFFER,it);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,ve/V.locationSize,q,me,ve*J,ve/V.locationSize*oe*J,_e)}}else if(G!==void 0){const me=G[j];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(V.location,me);break;case 3:r.vertexAttrib3fv(V.location,me);break;case 4:r.vertexAttrib4fv(V.location,me);break;default:r.vertexAttrib1fv(V.location,me)}}}}v()}function C(){I();for(const M in n){const P=n[M];for(const N in P){const B=P[N];for(const H in B)h(B[H].object),delete B[H];delete P[N]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const B=P[N];for(const H in B)h(B[H].object),delete B[H];delete P[N]}delete n[M.id]}function A(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const B=N[M.id];for(const H in B)h(B[H].object),delete B[H];delete N[M.id]}}function I(){w(),o=!0,s!==i&&(s=i,l(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function b0(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<d.length;_++)t.update(m,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function T0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==_n&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==wi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!A)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function A0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new mi,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):l();else{const v=s?0:n,x=v*4;let y=g.clippingState||null;c.value=y,y=h(m,d,x,f);for(let C=0;C!==x;++C)y[C]=t[C];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function E0(r){let e=new WeakMap;function t(o,a){return a===uc?o.mapping=Ls:a===dc&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===dc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Op(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Jo extends Ku{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,nh=[.125,.215,.35,.446,.526,.582],Hi=20,La=new Jo,ih=new ue;let Da=null,Na=0,Ua=0,Fa=!1;const ki=(1+Math.sqrt(5))/2,fs=1/ki,sh=[new E(-ki,fs,0),new E(ki,fs,0),new E(-fs,0,ki),new E(fs,0,ki),new E(0,ki,-fs),new E(0,ki,fs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Na,Ua),this._renderer.xr.enabled=Fa,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Zn,format:_n,colorSpace:Lt,depthBuffer:!1},i=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(s)),this._blurMaterial=C0(s,e,t)}return i}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ih),h.toneMapping=vi,h.autoClear=!1;const f=new Pt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new De(new ri,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(ih),_=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):v===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;ho(i,v*x,g>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ls||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sh[(i-s-1)%sh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new De(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=s/m,p=isFinite(s)?1+Math.floor(h*_):Hi;p>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const g=[];let v=0;for(let A=0;A<Hi;++A){const I=A/_,w=Math.exp(-I*I/2);g.push(w),A===0?v+=w:A<p&&(v+=2*w)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-ws?i-x+ws:0),T=4*(this._cubeSize-y);ho(t,C,T,3*y,2*y),c.setRenderTarget(t),c.render(u,La)}}function R0(r){const e=[],t=[],n=[];let i=r;const s=r-ws+1+nh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ws?c=nh[o-r+ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,v=new Float32Array(_*m*f),x=new Float32Array(p*m*f),y=new Float32Array(g*m*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];v.set(w,_*m*T),x.set(d,p*m*T);const M=[T,T,T,T,T,T];y.set(M,g*m*T)}const C=new St;C.setAttribute("position",new Mt(v,_)),C.setAttribute("uv",new Mt(x,p)),C.setAttribute("faceIndex",new Mt(y,g)),e.push(C),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oh(r,e,t){const n=new ln(r,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function C0(r,e,t){const n=new Float32Array(Hi),i=new E(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ah(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ch(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===uc||c===dc,h=c===Ls||c===Ds;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new rh(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new rh(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function I0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Lc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L0(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let p=0,g=_.length;p<g;p++)e.update(_[p],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],T=v[x+1],A=v[x+2];d.push(C,T,T,A,A,C)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,T=x+1,A=x+2;d.push(C,T,T,A,A,C)}}else return;const p=new(Hu(d)?qu:Xu)(d,1);p.version=_;const g=s.get(u);g&&e.remove(g),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function D0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m;p++)this.render(d[p]/o,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}}function u(d,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)l(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let g=0;for(let v=0;v<m;v++)g+=f[v];for(let v=0;v<_.length;v++)t.update(g,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function U0(r,e,t){const n=new WeakMap,i=new at;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*C*4*u),A=new Vu(T,y,C,u);A.type=An,A.needsUpdate=!0;const I=x*4;for(let M=0;M<u;M++){const P=p[M],N=g[M],B=v[M],H=y*C*4*M;for(let W=0;W<P.count;W++){const G=W*I;f===!0&&(i.fromBufferAttribute(P,W),T[H+G+0]=i.x,T[H+G+1]=i.y,T[H+G+2]=i.z,T[H+G+3]=0),m===!0&&(i.fromBufferAttribute(N,W),T[H+G+4]=i.x,T[H+G+5]=i.y,T[H+G+6]=i.z,T[H+G+7]=0),_===!0&&(i.fromBufferAttribute(B,W),T[H+G+8]=i.x,T[H+G+9]=i.y,T[H+G+10]=i.z,T[H+G+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new fe(y,C)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function F0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Zu extends yt{constructor(e,t,n,i,s,o,a,c,l,h=Es){if(h!==Es&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Ns),n===void 0&&h===Fs&&(n=Us),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qu=new yt,Ju=new Zu(1,1);Ju.compareFunction=zu;const ed=new Vu,td=new wp,nd=new ju,lh=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Xs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=lh[i];if(s===void 0&&(s=new Float32Array(i),lh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ea(r,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function B0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function H0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,n))return;fh.set(n),r.uniformMatrix2fv(this.addr,!1,fh),bt(t,n)}}function G0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,n))return;dh.set(n),r.uniformMatrix3fv(this.addr,!1,dh),bt(t,n)}}function V0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,n))return;uh.set(n),r.uniformMatrix4fv(this.addr,!1,uh),bt(t,n)}}function W0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function K0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function Q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Ju:Qu;t.setTexture2D(e||s,i)}function J0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||td,i)}function e_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nd,i)}function t_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ed,i)}function n_(r){switch(r){case 5126:return B0;case 35664:return O0;case 35665:return k0;case 35666:return z0;case 35674:return H0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return K0;case 36294:return j0;case 36295:return $0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(r,e){r.uniform1fv(this.addr,e)}function s_(r,e){const t=Xs(e,this.size,2);r.uniform2fv(this.addr,t)}function r_(r,e){const t=Xs(e,this.size,3);r.uniform3fv(this.addr,t)}function o_(r,e){const t=Xs(e,this.size,4);r.uniform4fv(this.addr,t)}function a_(r,e){const t=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function c_(r,e){const t=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function l_(r,e){const t=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function h_(r,e){r.uniform1iv(this.addr,e)}function u_(r,e){r.uniform2iv(this.addr,e)}function d_(r,e){r.uniform3iv(this.addr,e)}function f_(r,e){r.uniform4iv(this.addr,e)}function p_(r,e){r.uniform1uiv(this.addr,e)}function m_(r,e){r.uniform2uiv(this.addr,e)}function g_(r,e){r.uniform3uiv(this.addr,e)}function __(r,e){r.uniform4uiv(this.addr,e)}function x_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qu,s[o])}function v_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||td,s[o])}function M_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nd,s[o])}function y_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ed,s[o])}function S_(r){switch(r){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return y_}}class w_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n_(t.type)}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}}class T_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function ph(r,e){r.seq.push(e),r.map[e.id]=e}function A_(r,e,t){const n=r.name,i=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),o=Ba.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ph(t,l===void 0?new w_(a,r,e):new b_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new T_(a),ph(t,u)),t=u}}}class Io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);A_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const E_=37297;let R_=0;function C_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function P_(r){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(r);let n;switch(e===t?n="":e===Vo&&t===Go?n="LinearDisplayP3ToLinearSRGB":e===Go&&t===Vo&&(n="LinearSRGBToLinearDisplayP3"),r){case Lt:case Qo:return[n,"LinearTransferOETF"];case Ct:case Pc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function gh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+C_(r.getShaderSource(e),o)}else return i}function I_(r,e){const t=P_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function L_(r,e){let t;switch(e){case bu:t="Linear";break;case Tu:t="Reinhard";break;case Au:t="OptimizedCineon";break;case Ec:t="ACESFilmic";break;case Eu:t="AgX";break;case Ru:t="Neutral";break;case Cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function N_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function gr(r){return r!==""}function _h(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(r){return r.replace(F_,O_)}const B_=new Map;function O_(r,e){let t=Ue[e];if(t===void 0){const n=B_.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const k_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(r){return r.replace(k_,z_)}function z_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function W_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Ef:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}function X_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function q_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=H_(t),l=G_(t),h=V_(t),u=W_(t),d=X_(t),f=D_(t),m=N_(s),_=i.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`)):(p=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vi?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,I_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=mc(o),o=_h(o,t),o=xh(o,t),a=mc(a),a=_h(a,t),a=xh(a,t),o=vh(o),a=vh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,y=v+g+a,C=mh(i,i.VERTEX_SHADER,x),T=mh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(T).trim();let W=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{const j=gh(i,C,"vertex"),V=gh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+j+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:W,programLog:N,vertexShader:{log:B,prefix:p},fragmentShader:{log:H,prefix:g}})}i.deleteShader(C),i.deleteShader(T),I=new Io(i,_),w=U_(i,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,E_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let Y_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j_(e),t.set(e,n)),n}}class j_{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}}function $_(r,e,t,n,i,s,o){const a=new Dc,c=new K_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,M,P,N,B){const H=N.fog,W=B.geometry,G=w.isMeshStandardMaterial?N.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),V=j&&j.mapping===Zo?j.image.height:null,ae=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=me!==void 0?me.length:0;let Ye=0;W.morphAttributes.position!==void 0&&(Ye=1),W.morphAttributes.normal!==void 0&&(Ye=2),W.morphAttributes.color!==void 0&&(Ye=3);let it,q,J,_e;if(ae){const st=Tn[ae];it=st.vertexShader,q=st.fragmentShader}else it=w.vertexShader,q=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),_e=c.getFragmentShaderID(w);const oe=r.getRenderTarget(),He=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,je=!!w.map,D=!!w.matcap,Ke=!!j,Xe=!!w.aoMap,dt=!!w.lightMap,be=!!w.bumpMap,$e=!!w.normalMap,Ge=!!w.displacementMap,Ne=!!w.emissiveMap,xt=!!w.metalnessMap,R=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,K=w.dispersion>0,$=w.iridescence>0,Z=w.sheen>0,Se=w.transmission>0,se=S&&!!w.anisotropyMap,re=z&&!!w.clearcoatMap,Oe=z&&!!w.clearcoatNormalMap,ee=z&&!!w.clearcoatRoughnessMap,Me=$&&!!w.iridescenceMap,We=$&&!!w.iridescenceThicknessMap,Pe=Z&&!!w.sheenColorMap,ce=Z&&!!w.sheenRoughnessMap,ke=!!w.specularMap,qe=!!w.specularColorMap,gt=!!w.specularIntensityMap,L=Se&&!!w.transmissionMap,le=Se&&!!w.thicknessMap,X=!!w.gradientMap,Y=!!w.alphaMap,ne=w.alphaTest>0,Ie=!!w.alphaHash,Qe=!!w.extensions;let _t=vi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=r.toneMapping);const Tt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:q,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Lt,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:D,envMap:Ke,envMapMode:Ke&&j.mapping,envMapCubeUVHeight:V,aoMap:Xe,lightMap:dt,bumpMap:be,normalMap:$e,displacementMap:d&&Ge,emissiveMap:Ne,normalMapObjectSpace:$e&&w.normalMapType===qf,normalMapTangentSpace:$e&&w.normalMapType===Cc,metalnessMap:xt,roughnessMap:R,anisotropy:S,anisotropyMap:se,clearcoat:z,clearcoatMap:re,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ee,dispersion:K,iridescence:$,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:ce,specularMap:ke,specularColorMap:qe,specularIntensityMap:gt,transmission:Se,transmissionMap:L,thicknessMap:le,gradientMap:X,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:Y,alphaTest:ne,alphaHash:Ie,combine:w.combine,mapUv:je&&_(w.map.channel),aoMapUv:Xe&&_(w.aoMap.channel),lightMapUv:dt&&_(w.lightMap.channel),bumpMapUv:be&&_(w.bumpMap.channel),normalMapUv:$e&&_(w.normalMap.channel),displacementMapUv:Ge&&_(w.displacementMap.channel),emissiveMapUv:Ne&&_(w.emissiveMap.channel),metalnessMapUv:xt&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:se&&_(w.anisotropyMap.channel),clearcoatMapUv:re&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(w.sheenRoughnessMap.channel),specularMapUv:ke&&_(w.specularMap.channel),specularColorMapUv:qe&&_(w.specularColorMap.channel),specularIntensityMapUv:gt&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:le&&_(w.thicknessMap.channel),alphaMapUv:Y&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($e||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(je||Y),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===an,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function g(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(M,w),x(M,w),M.push(r.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const M=m[w.type];let P;if(M){const N=Tn[M];P=Er.clone(N.uniforms)}else P=w.uniforms;return P}function C(w,M){let P;for(let N=0,B=h.length;N<B;N++){const H=h[N];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new q_(r,M,w,s),h.push(P)),P}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Z_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Q_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,_,p){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},r[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),e++,g}function a(u,d,f,m,_,p){const g=o(u,d,f,m,_,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function c(u,d,f,m,_,p){const g=o(u,d,f,m,_,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function l(u,d){t.length>1&&t.sort(u||Q_),n.length>1&&n.sort(d||yh),i.length>1&&i.sort(d||yh)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function J_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Sh,r.set(n,[o])):i>=s.length?(o=new Sh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ex(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ue};break;case"SpotLight":t={position:new E,direction:new E,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function tx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nx=0;function ix(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sx(r){const e=new ex,t=tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,s=new Ae,o=new Ae;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,x=0,y=0,C=0,T=0,A=0;l.sort(ix);for(let w=0,M=l.length;w<M;w++){const P=l[w],N=P.color,B=P.intensity,H=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,V=t.get(P);V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const j=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const V=t.get(P);V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=W,y++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=G,p++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const j=P.shadow,V=t.get(P);V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=P.shadow.matrix,x++}n.point[m]=G,m++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[g]=G,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=A,n.version=nx++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,v=l.length;g<v;g++){const x=l[g];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function wh(r){const e=new sx(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function rx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new wh(r),e.set(i,[a])):s>=o.length?(a=new wh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ox extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hx(r,e,t){let n=new Nc;const i=new fe,s=new fe,o=new at,a=new ox({depthPacking:Xf}),c=new ax,l={},h=t.maxTextureSize,u={[Qn]:qt,[qt]:Qn,[an]:an},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:cx,fragmentShader:lx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new St;m.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let g=this.type;this.render=function(T,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending($n),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=g!==qn&&this.type===qn,H=g===qn&&this.type!==qn;for(let W=0,G=T.length;W<G;W++){const j=T[W],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ae=V.getFrameExtents();if(i.multiply(ae),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||B===!0||H===!0){const ve=this.type!==qn?{minFilter:Wt,magFilter:Wt}:{};V.map!==null&&V.map.dispose(),V.map=new ln(i.x,i.y,ve),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const me=V.getViewportCount();for(let ve=0;ve<me;ve++){const Ye=V.getViewport(ve);o.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),N.viewport(o),V.updateMatrices(j,ve),n=V.getFrustum(),y(A,I,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&v(V,I),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(w,M,P)};function v(T,A){const I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ln(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,f,_,null)}function x(T,A,I,w){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,B=A.uuid;let H=l[N];H===void 0&&(H={},l[N]=H);let W=H[B];W===void 0&&(W=M.clone(),H[B]=W,A.addEventListener("dispose",C)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,w===qn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=r.properties.get(M);N.light=I}return M}function y(T,A,I,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const B=e.update(T),H=T.material;if(Array.isArray(H)){const W=B.groups;for(let G=0,j=W.length;G<j;G++){const V=W[G],ae=H[V.materialIndex];if(ae&&ae.visible){const me=x(T,ae,w,M);T.onBeforeShadow(r,T,A,I,B,me,V),r.renderBufferDirect(I,null,B,me,T,V),T.onAfterShadow(r,T,A,I,B,me,V)}}}else if(H.visible){const W=x(T,H,w,M);T.onBeforeShadow(r,T,A,I,B,W,null),r.renderBufferDirect(I,null,B,W,T,null),T.onAfterShadow(r,T,A,I,B,W,null)}}const N=T.children;for(let B=0,H=N.length;B<H;B++)y(N[B],A,I,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(const I in l){const w=l[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function ux(r){function e(){let L=!1;const le=new at;let X=null;const Y=new at(0,0,0,0);return{setMask:function(ne){X!==ne&&!L&&(r.colorMask(ne,ne,ne,ne),X=ne)},setLocked:function(ne){L=ne},setClear:function(ne,Ie,Qe,_t,Tt){Tt===!0&&(ne*=_t,Ie*=_t,Qe*=_t),le.set(ne,Ie,Qe,_t),Y.equals(le)===!1&&(r.clearColor(ne,Ie,Qe,_t),Y.copy(le))},reset:function(){L=!1,X=null,Y.set(-1,0,0,0)}}}function t(){let L=!1,le=null,X=null,Y=null;return{setTest:function(ne){ne?_e(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ne){le!==ne&&!L&&(r.depthMask(ne),le=ne)},setFunc:function(ne){if(X!==ne){switch(ne){case Mf:r.depthFunc(r.NEVER);break;case yf:r.depthFunc(r.ALWAYS);break;case Sf:r.depthFunc(r.LESS);break;case Bo:r.depthFunc(r.LEQUAL);break;case wf:r.depthFunc(r.EQUAL);break;case bf:r.depthFunc(r.GEQUAL);break;case Tf:r.depthFunc(r.GREATER);break;case Af:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}X=ne}},setLocked:function(ne){L=ne},setClear:function(ne){Y!==ne&&(r.clearDepth(ne),Y=ne)},reset:function(){L=!1,le=null,X=null,Y=null}}}function n(){let L=!1,le=null,X=null,Y=null,ne=null,Ie=null,Qe=null,_t=null,Tt=null;return{setTest:function(st){L||(st?_e(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(st){le!==st&&!L&&(r.stencilMask(st),le=st)},setFunc:function(st,wn,bn){(X!==st||Y!==wn||ne!==bn)&&(r.stencilFunc(st,wn,bn),X=st,Y=wn,ne=bn)},setOp:function(st,wn,bn){(Ie!==st||Qe!==wn||_t!==bn)&&(r.stencilOp(st,wn,bn),Ie=st,Qe=wn,_t=bn)},setLocked:function(st){L=st},setClear:function(st){Tt!==st&&(r.clearStencil(st),Tt=st)},reset:function(){L=!1,le=null,X=null,Y=null,ne=null,Ie=null,Qe=null,_t=null,Tt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,v=null,x=null,y=null,C=null,T=new ue(0,0,0),A=0,I=!1,w=null,M=null,P=null,N=null,B=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=G>=2);let V=null,ae={};const me=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Ye=new at().fromArray(me),it=new at().fromArray(ve);function q(L,le,X,Y){const ne=new Uint8Array(4),Ie=r.createTexture();r.bindTexture(L,Ie),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<X;Qe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(le+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return Ie}const J={};J[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(r.DEPTH_TEST),s.setFunc(Bo),be(!1),$e(sl),_e(r.CULL_FACE),Xe($n);function _e(L){l[L]!==!0&&(r.enable(L),l[L]=!0)}function oe(L){l[L]!==!1&&(r.disable(L),l[L]=!1)}function He(L,le){return h[L]!==le?(r.bindFramebuffer(L,le),h[L]=le,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Be(L,le){let X=d,Y=!1;if(L){X=u.get(le),X===void 0&&(X=[],u.set(le,X));const ne=L.textures;if(X.length!==ne.length||X[0]!==r.COLOR_ATTACHMENT0){for(let Ie=0,Qe=ne.length;Ie<Qe;Ie++)X[Ie]=r.COLOR_ATTACHMENT0+Ie;X.length=ne.length,Y=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Y=!0);Y&&r.drawBuffers(X)}function je(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const D={[zi]:r.FUNC_ADD,[nf]:r.FUNC_SUBTRACT,[sf]:r.FUNC_REVERSE_SUBTRACT};D[rf]=r.MIN,D[of]=r.MAX;const Ke={[af]:r.ZERO,[cf]:r.ONE,[lf]:r.SRC_COLOR,[lc]:r.SRC_ALPHA,[mf]:r.SRC_ALPHA_SATURATE,[ff]:r.DST_COLOR,[uf]:r.DST_ALPHA,[hf]:r.ONE_MINUS_SRC_COLOR,[hc]:r.ONE_MINUS_SRC_ALPHA,[pf]:r.ONE_MINUS_DST_COLOR,[df]:r.ONE_MINUS_DST_ALPHA,[gf]:r.CONSTANT_COLOR,[_f]:r.ONE_MINUS_CONSTANT_COLOR,[xf]:r.CONSTANT_ALPHA,[vf]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(L,le,X,Y,ne,Ie,Qe,_t,Tt,st){if(L===$n){m===!0&&(oe(r.BLEND),m=!1);return}if(m===!1&&(_e(r.BLEND),m=!0),L!==tf){if(L!==_||st!==I){if((p!==zi||x!==zi)&&(r.blendEquation(r.FUNC_ADD),p=zi,x=zi),st)switch(L){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cc:r.blendFunc(r.ONE,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ol:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ol:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,v=null,y=null,C=null,T.set(0,0,0),A=0,_=L,I=st}return}ne=ne||le,Ie=Ie||X,Qe=Qe||Y,(le!==p||ne!==x)&&(r.blendEquationSeparate(D[le],D[ne]),p=le,x=ne),(X!==g||Y!==v||Ie!==y||Qe!==C)&&(r.blendFuncSeparate(Ke[X],Ke[Y],Ke[Ie],Ke[Qe]),g=X,v=Y,y=Ie,C=Qe),(_t.equals(T)===!1||Tt!==A)&&(r.blendColor(_t.r,_t.g,_t.b,Tt),T.copy(_t),A=Tt),_=L,I=!1}function dt(L,le){L.side===an?oe(r.CULL_FACE):_e(r.CULL_FACE);let X=L.side===qt;le&&(X=!X),be(X),L.blending===As&&L.transparent===!1?Xe($n):Xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function be(L){w!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),w=L)}function $e(L){L!==Jd?(_e(r.CULL_FACE),L!==M&&(L===sl?r.cullFace(r.BACK):L===ef?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),M=L}function Ge(L){L!==P&&(W&&r.lineWidth(L),P=L)}function Ne(L,le,X){L?(_e(r.POLYGON_OFFSET_FILL),(N!==le||B!==X)&&(r.polygonOffset(le,X),N=le,B=X)):oe(r.POLYGON_OFFSET_FILL)}function xt(L){L?_e(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function R(L){L===void 0&&(L=r.TEXTURE0+H-1),V!==L&&(r.activeTexture(L),V=L)}function S(L,le,X){X===void 0&&(V===null?X=r.TEXTURE0+H-1:X=V);let Y=ae[X];Y===void 0&&(Y={type:void 0,texture:void 0},ae[X]=Y),(Y.type!==L||Y.texture!==le)&&(V!==X&&(r.activeTexture(X),V=X),r.bindTexture(L,le||J[L]),Y.type=L,Y.texture=le)}function z(){const L=ae[V];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(L){Ye.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function ce(L){it.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function ke(L,le){let X=c.get(le);X===void 0&&(X=new WeakMap,c.set(le,X));let Y=X.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(le,L.name),X.set(L,Y))}function qe(L,le){const Y=c.get(le).get(L);a.get(le)!==Y&&(r.uniformBlockBinding(le,Y,L.__bindingPointIndex),a.set(le,Y))}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},V=null,ae={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,v=null,x=null,y=null,C=null,T=new ue(0,0,0),A=0,I=!1,w=null,M=null,P=null,N=null,B=null,Ye.set(0,0,r.canvas.width,r.canvas.height),it.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:_e,disable:oe,bindFramebuffer:He,drawBuffers:Be,useProgram:je,setBlending:Xe,setMaterial:dt,setFlipSided:be,setCullFace:$e,setLineWidth:Ge,setPolygonOffset:Ne,setScissorTest:xt,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:Me,texImage3D:We,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:Oe,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:re,scissor:Pe,viewport:ce,reset:gt}}function dx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):Ar("canvas")}function _(R,S,z){let K=1;const $=xt(R);if(($.width>z||$.height>z)&&(K=z/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*$.width),Se=Math.floor(K*$.height);u===void 0&&(u=m(Z,Se));const se=S?m(Z,Se):u;return se.width=Z,se.height=Se,se.getContext("2d").drawImage(R,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Se+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Wt&&R.minFilter!==Vt}function g(R){r.generateMipmap(R)}function v(R,S,z,K,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),S===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),S===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const Se=$?Ho:Ze.getTransfer(K);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=Se===ct?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(R,S){let z;return R?S===null||S===Ns||S===Us?z=r.DEPTH24_STENCIL8:S===An?z=r.DEPTH32F_STENCIL8:S===ko&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ns||S===Us?z=r.DEPTH_COMPONENT24:S===An?z=r.DEPTH_COMPONENT32F:S===ko&&(z=r.DEPTH_COMPONENT16),z}function y(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&h.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),w(S)}function A(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,K=d.get(z);if(K){const $=K[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(R),Object.keys(K).length===0&&d.delete(z)}n.remove(R)}function I(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const z=R.source,K=d.get(z);delete K[S.__cacheKey],o.memory.textures--}function w(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let $=0;$<S.__webglFramebuffer[K].length;$++)r.deleteFramebuffer(S.__webglFramebuffer[K][$]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let K=0,$=z.length;K<$;K++){const Z=n.get(z[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(R)}let M=0;function P(){M=0}function N(){const R=M;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),M+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){const z=n.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(z,R,S);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function W(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function G(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,S);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function j(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}const V={[Jn]:r.REPEAT,[_i]:r.CLAMP_TO_EDGE,[Oo]:r.MIRRORED_REPEAT},ae={[Wt]:r.NEAREST,[Pu]:r.NEAREST_MIPMAP_NEAREST,[mr]:r.NEAREST_MIPMAP_LINEAR,[Vt]:r.LINEAR,[Po]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},me={[Yf]:r.NEVER,[Jf]:r.ALWAYS,[Kf]:r.LESS,[zu]:r.LEQUAL,[jf]:r.EQUAL,[Qf]:r.GEQUAL,[$f]:r.GREATER,[Zf]:r.NOTEQUAL};function ve(R,S){if(S.type===An&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vt||S.magFilter===Po||S.magFilter===mr||S.magFilter===Kn||S.minFilter===Vt||S.minFilter===Po||S.minFilter===mr||S.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ae[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==mr&&S.minFilter!==Kn||S.type===An&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ye(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const K=S.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const Z=B(S);if(Z!==R.__cacheKey){$[Z]===void 0&&($[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[Z].usedTimes++;const Se=$[R.__cacheKey];Se!==void 0&&($[R.__cacheKey].usedTimes--,Se.usedTimes===0&&I(S)),R.__cacheKey=Z,R.__webglTexture=$[Z].texture}return z}function it(R,S,z){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const $=Ye(R,S),Z=S.source;t.bindTexture(K,R.__webglTexture,r.TEXTURE0+z);const Se=n.get(Z);if(Z.version!==Se.__version||$===!0){t.activeTexture(r.TEXTURE0+z);const se=Ze.getPrimaries(Ze.workingColorSpace),re=S.colorSpace===gi?null:Ze.getPrimaries(S.colorSpace),Oe=S.colorSpace===gi||se===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ee=_(S.image,!1,i.maxTextureSize);ee=Ne(S,ee);const Me=s.convert(S.format,S.colorSpace),We=s.convert(S.type);let Pe=v(S.internalFormat,Me,We,S.colorSpace,S.isVideoTexture);ve(K,S);let ce;const ke=S.mipmaps,qe=S.isVideoTexture!==!0,gt=Se.__version===void 0||$===!0,L=Z.dataReady,le=y(S,ee);if(S.isDepthTexture)Pe=x(S.format===Fs,S.type),gt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ee.width,ee.height,0,Me,We,null));else if(S.isDataTexture)if(ke.length>0){qe&&gt&&t.texStorage2D(r.TEXTURE_2D,le,Pe,ke[0].width,ke[0].height);for(let X=0,Y=ke.length;X<Y;X++)ce=ke[X],qe?L&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ce.width,ce.height,Me,We,ce.data):t.texImage2D(r.TEXTURE_2D,X,Pe,ce.width,ce.height,0,Me,We,ce.data);S.generateMipmaps=!1}else qe?(gt&&t.texStorage2D(r.TEXTURE_2D,le,Pe,ee.width,ee.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,Me,We,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ee.width,ee.height,0,Me,We,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&gt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Pe,ke[0].width,ke[0].height,ee.depth);for(let X=0,Y=ke.length;X<Y;X++)if(ce=ke[X],S.format!==_n)if(Me!==null)if(qe){if(L)if(S.layerUpdates.size>0){for(const ne of S.layerUpdates){const Ie=ce.width*ce.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ne,ce.width,ce.height,1,Me,ce.data.slice(Ie*ne,Ie*(ne+1)),0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,ee.depth,Me,ce.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Pe,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,ee.depth,Me,We,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Pe,ce.width,ce.height,ee.depth,0,Me,We,ce.data)}else{qe&&gt&&t.texStorage2D(r.TEXTURE_2D,le,Pe,ke[0].width,ke[0].height);for(let X=0,Y=ke.length;X<Y;X++)ce=ke[X],S.format!==_n?Me!==null?qe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,ce.width,ce.height,Me,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?L&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ce.width,ce.height,Me,We,ce.data):t.texImage2D(r.TEXTURE_2D,X,Pe,ce.width,ce.height,0,Me,We,ce.data)}else if(S.isDataArrayTexture)if(qe){if(gt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Pe,ee.width,ee.height,ee.depth),L)if(S.layerUpdates.size>0){let X;switch(We){case r.UNSIGNED_BYTE:switch(Me){case r.ALPHA:X=1;break;case r.LUMINANCE:X=1;break;case r.LUMINANCE_ALPHA:X=2;break;case r.RGB:X=3;break;case r.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const Y=ee.width*ee.height*X;for(const ne of S.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,ee.width,ee.height,1,Me,We,ee.data.slice(Y*ne,Y*(ne+1)));S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Me,We,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,Me,We,ee.data);else if(S.isData3DTexture)qe?(gt&&t.texStorage3D(r.TEXTURE_3D,le,Pe,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Me,We,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,Me,We,ee.data);else if(S.isFramebufferTexture){if(gt)if(qe)t.texStorage2D(r.TEXTURE_2D,le,Pe,ee.width,ee.height);else{let X=ee.width,Y=ee.height;for(let ne=0;ne<le;ne++)t.texImage2D(r.TEXTURE_2D,ne,Pe,X,Y,0,Me,We,null),X>>=1,Y>>=1}}else if(ke.length>0){if(qe&&gt){const X=xt(ke[0]);t.texStorage2D(r.TEXTURE_2D,le,Pe,X.width,X.height)}for(let X=0,Y=ke.length;X<Y;X++)ce=ke[X],qe?L&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,Me,We,ce):t.texImage2D(r.TEXTURE_2D,X,Pe,Me,We,ce);S.generateMipmaps=!1}else if(qe){if(gt){const X=xt(ee);t.texStorage2D(r.TEXTURE_2D,le,Pe,X.width,X.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,We,ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,Me,We,ee);p(S)&&g(K),Se.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function q(R,S,z){if(S.image.length!==6)return;const K=Ye(R,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const Z=n.get($);if($.version!==Z.__version||K===!0){t.activeTexture(r.TEXTURE0+z);const Se=Ze.getPrimaries(Ze.workingColorSpace),se=S.colorSpace===gi?null:Ze.getPrimaries(S.colorSpace),re=S.colorSpace===gi||Se===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let Y=0;Y<6;Y++)!Oe&&!ee?Me[Y]=_(S.image[Y],!0,i.maxCubemapSize):Me[Y]=ee?S.image[Y].image:S.image[Y],Me[Y]=Ne(S,Me[Y]);const We=Me[0],Pe=s.convert(S.format,S.colorSpace),ce=s.convert(S.type),ke=v(S.internalFormat,Pe,ce,S.colorSpace),qe=S.isVideoTexture!==!0,gt=Z.__version===void 0||K===!0,L=$.dataReady;let le=y(S,We);ve(r.TEXTURE_CUBE_MAP,S);let X;if(Oe){qe&&gt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,ke,We.width,We.height);for(let Y=0;Y<6;Y++){X=Me[Y].mipmaps;for(let ne=0;ne<X.length;ne++){const Ie=X[ne];S.format!==_n?Pe!==null?qe?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,0,0,Ie.width,Ie.height,Pe,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,ke,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,0,0,Ie.width,Ie.height,Pe,ce,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,ke,Ie.width,Ie.height,0,Pe,ce,Ie.data)}}}else{if(X=S.mipmaps,qe&&gt){X.length>0&&le++;const Y=xt(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,ke,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me[Y].width,Me[Y].height,Pe,ce,Me[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ke,Me[Y].width,Me[Y].height,0,Pe,ce,Me[Y].data);for(let ne=0;ne<X.length;ne++){const Qe=X[ne].image[Y].image;qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,0,0,Qe.width,Qe.height,Pe,ce,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,ke,Qe.width,Qe.height,0,Pe,ce,Qe.data)}}else{qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,ce,Me[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ke,Pe,ce,Me[Y]);for(let ne=0;ne<X.length;ne++){const Ie=X[ne];qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,0,0,Pe,ce,Ie.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,ke,Pe,ce,Ie.image[Y])}}}p(S)&&g(r.TEXTURE_CUBE_MAP),Z.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,z,K,$,Z){const Se=s.convert(z.format,z.colorSpace),se=s.convert(z.type),re=v(z.internalFormat,Se,se,z.colorSpace);if(!n.get(S).__hasExternalTextures){const ee=Math.max(1,S.width>>Z),Me=Math.max(1,S.height>>Z);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Z,re,ee,Me,S.depth,0,Se,se,null):t.texImage2D($,Z,re,ee,Me,0,Se,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),$e(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,$,n.get(z).__webglTexture,0,be(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,$,n.get(z).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(R,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,$=K&&K.isDepthTexture?K.type:null,Z=x(S.stencilBuffer,$),Se=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=be(S);$e(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,Z,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,R)}else{const K=S.textures;for(let $=0;$<K.length;$++){const Z=K[$],Se=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),re=v(Z.internalFormat,Se,se,Z.colorSpace),Oe=be(S);z&&$e(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,re,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,re,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,re,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,$=be(S);if(S.depthTexture.format===Es)$e(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(S.depthTexture.format===Fs)$e(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=r.createRenderbuffer(),_e(S.__webglDepthbuffer[K],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),_e(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(R,S,z){const K=n.get(R);S!==void 0&&J(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&He(R)}function je(R){const S=R.texture,z=n.get(R),K=n.get(S);R.addEventListener("dispose",T);const $=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let re=0;re<S.mipmaps.length;re++)z.__webglFramebuffer[se][re]=r.createFramebuffer()}else z.__webglFramebuffer[se]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)z.__webglFramebuffer[se]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Se)for(let se=0,re=$.length;se<re;se++){const Oe=n.get($[se]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&$e(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const re=$[se];z.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Oe=s.convert(re.format,re.colorSpace),ee=s.convert(re.type),Me=v(re.internalFormat,Oe,ee,re.colorSpace,R.isXRRenderTarget===!0),We=be(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,Me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,z.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ve(r.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)J(z.__webglFramebuffer[se][re],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else J(z.__webglFramebuffer[se],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,re=$.length;se<re;se++){const Oe=$[se],ee=n.get(Oe);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),ve(r.TEXTURE_2D,Oe),J(z.__webglFramebuffer,R,Oe,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),p(Oe)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),ve(se,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)J(z.__webglFramebuffer[re],R,S,r.COLOR_ATTACHMENT0,se,re);else J(z.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,se,0);p(S)&&g(se),t.unbindTexture()}R.depthBuffer&&He(R)}function D(R){const S=R.textures;for(let z=0,K=S.length;z<K;z++){const $=S[z];if(p($)){const Z=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Se=n.get($).__webglTexture;t.bindTexture(Z,Se),g(Z),t.unbindTexture()}}}const Ke=[],Xe=[];function dt(R){if(R.samples>0){if($e(R)===!1){const S=R.textures,z=R.width,K=R.height;let $=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(R),se=S.length>1;if(se)for(let re=0;re<S.length;re++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let re=0;re<S.length;re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[re]);const Oe=n.get(S[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Oe,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,$,r.NEAREST),c===!0&&(Ke.length=0,Xe.length=0,Ke.push(r.COLOR_ATTACHMENT0+re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push(Z),Xe.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let re=0;re<S.length;re++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,Se.__webglColorRenderbuffer[re]);const Oe=n.get(S[re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function be(R){return Math.min(i.maxSamples,R.samples)}function $e(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ne(R,S){const z=R.colorSpace,K=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Lt&&z!==gi&&(Ze.getTransfer(z)===ct?(K!==_n||$!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=Be,this.setupRenderTarget=je,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=J,this.useMultisampledRTT=$e}function fx(r,e){function t(n,i=gi){let s;const o=Ze.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===Lu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Du)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Df)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===If)return r.BYTE;if(n===Lf)return r.SHORT;if(n===ko)return r.UNSIGNED_SHORT;if(n===Iu)return r.INT;if(n===Ns)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===Zn)return r.HALF_FLOAT;if(n===Nf)return r.ALPHA;if(n===Uf)return r.RGB;if(n===_n)return r.RGBA;if(n===Ff)return r.LUMINANCE;if(n===Bf)return r.LUMINANCE_ALPHA;if(n===Es)return r.DEPTH_COMPONENT;if(n===Fs)return r.DEPTH_STENCIL;if(n===Nu)return r.RED;if(n===Uu)return r.RED_INTEGER;if(n===Of)return r.RG;if(n===Fu)return r.RG_INTEGER;if(n===Bu)return r.RGBA_INTEGER;if(n===ca||n===la||n===ha||n===ua)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ll||n===hl||n===ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dl||n===fl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===xl||n===vl||n===Ml||n===yl||n===Sl||n===wl||n===bl||n===Tl||n===Al||n===El||n===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===Cl||n===Pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kf||n===Il||n===Ll||n===Dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class px extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Te extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class vx extends Yi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new xx,p=t.getContextAttributes();let g=null,v=null;const x=[],y=[],C=new fe;let T=null;const A=new Ht;A.layers.enable(1),A.viewport=new at;const I=new Ht;I.layers.enable(2),I.viewport=new at;const w=[A,I],M=new px;M.layers.enable(1),M.layers.enable(2);let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=x[q];return J===void 0&&(J=new Oa,x[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=x[q];return J===void 0&&(J=new Oa,x[q]=J),J.getGripSpace()},this.getHand=function(q){let J=x[q];return J===void 0&&(J=new Oa,x[q]=J),J.getHandSpace()};function B(q){const J=y.indexOf(q.inputSource);if(J===-1)return;const _e=x[J];_e!==void 0&&(_e.update(q.inputSource,q.frame,l||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",W);for(let q=0;q<x.length;q++){const J=y[q];J!==null&&(y[q]=null,x[q].disconnect(J))}P=null,N=null,_.reset(),e.setRenderTarget(g),f=null,d=null,u=null,i=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ln(f.framebufferWidth,f.framebufferHeight,{format:_n,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,_e=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?Fs:Es,_e=p.stencil?Us:Ns);const He={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ln(d.textureWidth,d.textureHeight,{format:_n,type:wi,depthTexture:new Zu(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(q){for(let J=0;J<q.removed.length;J++){const _e=q.removed[J],oe=y.indexOf(_e);oe>=0&&(y[oe]=null,x[oe].disconnect(_e))}for(let J=0;J<q.added.length;J++){const _e=q.added[J];let oe=y.indexOf(_e);if(oe===-1){for(let Be=0;Be<x.length;Be++)if(Be>=y.length){y.push(_e),oe=Be;break}else if(y[Be]===null){y[Be]=_e,oe=Be;break}if(oe===-1)break}const He=x[oe];He&&He.connect(_e)}}const G=new E,j=new E;function V(q,J,_e){G.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const oe=G.distanceTo(j),He=J.projectionMatrix.elements,Be=_e.projectionMatrix.elements,je=He[14]/(He[10]-1),D=He[14]/(He[10]+1),Ke=(He[9]+1)/He[5],Xe=(He[9]-1)/He[5],dt=(He[8]-1)/He[0],be=(Be[8]+1)/Be[0],$e=je*dt,Ge=je*be,Ne=oe/(-dt+be),xt=Ne*-dt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xt),q.translateZ(Ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=je+Ne,S=D+Ne,z=$e-xt,K=Ge+(oe-xt),$=Ke*D/S*R,Z=Xe*D/S*R;q.projectionMatrix.makePerspective(z,K,$,Z,R,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ae(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),M.near=I.near=A.near=q.near,M.far=I.far=A.far=q.far,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far,A.near=P,A.far=N,I.near=P,I.far=N,A.updateProjectionMatrix(),I.updateProjectionMatrix(),q.updateProjectionMatrix());const J=q.parent,_e=M.cameras;ae(M,J);for(let oe=0;oe<_e.length;oe++)ae(_e[oe],J);_e.length===2?V(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),me(q,M,J)};function me(q,J,_e){_e===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ve=null;function Ye(q,J){if(h=J.getViewerPose(l||o),m=J,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let oe=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Be=0;Be<_e.length;Be++){const je=_e[Be];let D=null;if(f!==null)D=f.getViewport(je);else{const Xe=u.getViewSubImage(d,je);D=Xe.viewport,Be===0&&(e.setRenderTargetTextures(v,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(v))}let Ke=w[Be];Ke===void 0&&(Ke=new Ht,Ke.layers.enable(Be),Ke.viewport=new at,w[Be]=Ke),Ke.matrix.fromArray(je.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(je.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(D.x,D.y,D.width,D.height),Be===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Ke)}const He=i.enabledFeatures;if(He&&He.includes("depth-sensing")){const Be=u.getDepthInformation(_e[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,i.renderState)}}for(let _e=0;_e<x.length;_e++){const oe=y[_e],He=x[_e];oe!==null&&He!==void 0&&He.update(oe,J,l||o)}ve&&ve(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const it=new $u;it.setAnimationLoop(Ye),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Ui=new Zt,Mx=new Ae;function yx(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yu(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,v,x):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===qt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===qt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=e.get(g),x=v.envMap,y=v.envMapRotation;x&&(p.envMap.value=x,Ui.copy(y),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),p.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Ui)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=i[v.id];y===void 0&&(m(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){const x=u();v.__bindingPointIndex=x;const y=r.createBuffer(),C=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],y=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,M=I.length;w<M;w++){const P=I[w];if(f(P,T,w,C)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let W=0;W<B.length;W++){const G=B[W],j=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,y,C){const T=v.value,A=x+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(v){const x=v.uniforms;let y=0;const C=16;for(let A=0,I=x.length;A<I;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,P=w.length;M<P;M++){const N=w[M],B=Array.isArray(N.value)?N.value:[N.value];for(let H=0,W=B.length;H<W;H++){const G=B[H],j=_(G),V=y%C;V!==0&&C-V<j.boundary&&(y+=C-V),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=j.storage}}}const T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class wx{constructor(e={}){const{canvas:t=gp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=vi,this.toneMappingExposure=1;const x=this;let y=!1,C=0,T=0,A=null,I=-1,w=null;const M=new at,P=new at;let N=null;const B=new ue(0);let H=0,W=t.width,G=t.height,j=1,V=null,ae=null;const me=new at(0,0,W,G),ve=new at(0,0,W,G);let Ye=!1;const it=new Nc;let q=!1,J=!1;const _e=new Ae,oe=new E,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function je(){return A===null?j:1}let D=n;function Ke(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",Y,!1),D===null){const U="webgl2";if(D=Ke(U,b),D===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xe,dt,be,$e,Ge,Ne,xt,R,S,z,K,$,Z,Se,se,re,Oe,ee,Me,We,Pe,ce,ke,qe;function gt(){Xe=new I0(D),Xe.init(),ce=new fx(D,Xe),dt=new T0(D,Xe,e,ce),be=new ux(D),$e=new N0(D),Ge=new Z_,Ne=new dx(D,Xe,be,Ge,dt,ce,$e),xt=new E0(x),R=new P0(x),S=new Hp(D),ke=new w0(D,S),z=new L0(D,S,$e,ke),K=new F0(D,z,S,$e),Me=new U0(D,dt,Ne),re=new A0(Ge),$=new $_(x,xt,R,Xe,dt,ke,re),Z=new yx(x,Ge),Se=new J_,se=new rx(Xe),ee=new S0(x,xt,R,be,K,d,c),Oe=new hx(x,K,dt),qe=new Sx(D,$e,dt,be),We=new b0(D,Xe,$e),Pe=new D0(D,Xe,$e),$e.programs=$.programs,x.capabilities=dt,x.extensions=Xe,x.properties=Ge,x.renderLists=Se,x.shadowMap=Oe,x.state=be,x.info=$e}gt();const L=new vx(x,D);this.xr=L,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(W,G,!1))},this.getSize=function(b){return b.set(W,G)},this.setSize=function(b,U,O=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,G=U,t.width=Math.floor(b*j),t.height=Math.floor(U*j),O===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(W*j,G*j).floor()},this.setDrawingBufferSize=function(b,U,O){W=b,G=U,j=O,t.width=Math.floor(b*O),t.height=Math.floor(U*O),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,U,O,k){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,U,O,k),be.viewport(M.copy(me).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,U,O,k){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,U,O,k),be.scissor(P.copy(ve).multiplyScalar(j).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){be.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(b=!0,U=!0,O=!0){let k=0;if(b){let F=!1;if(A!==null){const te=A.texture.format;F=te===Bu||te===Fu||te===Uu}if(F){const te=A.texture.type,he=te===wi||te===Ns||te===ko||te===Us||te===Lu||te===Du,ge=ee.getClearColor(),xe=ee.getClearAlpha(),Ee=ge.r,Re=ge.g,we=ge.b;he?(f[0]=Ee,f[1]=Re,f[2]=we,f[3]=xe,D.clearBufferuiv(D.COLOR,0,f)):(m[0]=Ee,m[1]=Re,m[2]=we,m[3]=xe,D.clearBufferiv(D.COLOR,0,m))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),O&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Se.dispose(),se.dispose(),Ge.dispose(),xt.dispose(),R.dispose(),K.dispose(),ke.dispose(),qe.dispose(),$.dispose(),L.dispose(),L.removeEventListener("sessionstart",wn),L.removeEventListener("sessionend",bn),Ri.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=$e.autoReset,U=Oe.enabled,O=Oe.autoUpdate,k=Oe.needsUpdate,F=Oe.type;gt(),$e.autoReset=b,Oe.enabled=U,Oe.autoUpdate=O,Oe.needsUpdate=k,Oe.type=F}function Y(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const U=b.target;U.removeEventListener("dispose",ne),Ie(U)}function Ie(b){Qe(b),Ge.remove(b)}function Qe(b){const U=Ge.get(b).programs;U!==void 0&&(U.forEach(function(O){$.releaseProgram(O)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,O,k,F,te){U===null&&(U=He);const he=F.isMesh&&F.matrixWorld.determinant()<0,ge=jd(b,U,O,k,F);be.setMaterial(k,he);let xe=O.index,Ee=1;if(k.wireframe===!0){if(xe=z.getWireframeAttribute(O),xe===void 0)return;Ee=2}const Re=O.drawRange,we=O.attributes.position;let Je=Re.start*Ee,ft=(Re.start+Re.count)*Ee;te!==null&&(Je=Math.max(Je,te.start*Ee),ft=Math.min(ft,(te.start+te.count)*Ee)),xe!==null?(Je=Math.max(Je,0),ft=Math.min(ft,xe.count)):we!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,we.count));const pt=ft-Je;if(pt<0||pt===1/0)return;ke.setup(F,k,ge,O,xe);let Qt,tt=We;if(xe!==null&&(Qt=S.get(xe),tt=Pe,tt.setIndex(Qt)),F.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*je()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(F.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),be.setLineWidth(ye*je()),F.isLineSegments?tt.setMode(D.LINES):F.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else F.isPoints?tt.setMode(D.POINTS):F.isSprite&&tt.setMode(D.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)tt.renderInstances(Je,pt,F.count);else if(O.isInstancedBufferGeometry){const ye=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ot=Math.min(O.instanceCount,ye);tt.renderInstances(Je,pt,Ot)}else tt.render(Je,pt)};function _t(b,U,O){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,Gr(b,U,O),b.side=Qn,b.needsUpdate=!0,Gr(b,U,O),b.side=an):Gr(b,U,O)}this.compile=function(b,U,O=null){O===null&&(O=b),p=se.get(O),p.init(U),v.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==O&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return b.traverse(function(F){const te=F.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const ge=te[he];_t(ge,O,F),k.add(ge)}else _t(te,O,F),k.add(te)}),v.pop(),p=null,k},this.compileAsync=function(b,U,O=null){const k=this.compile(b,U,O);return new Promise(F=>{function te(){if(k.forEach(function(he){Ge.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){F(b);return}setTimeout(te,10)}Xe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Tt=null;function st(b){Tt&&Tt(b)}function wn(){Ri.stop()}function bn(){Ri.start()}const Ri=new $u;Ri.setAnimationLoop(st),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(b){Tt=b,L.setAnimationLoop(b),b===null?Ri.stop():Ri.start()},L.addEventListener("sessionstart",wn),L.addEventListener("sessionend",bn),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),p=se.get(b,v.length),p.init(U),v.push(p),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(_e),J=this.localClippingEnabled,q=re.init(this.clippingPlanes,J),_=Se.get(b,g.length),_.init(),g.push(_),L.enabled===!0&&L.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&sa(te,U,-1/0,x.sortObjects)}sa(b,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,ae),Be=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Be&&ee.addToRenderList(_,b),this.info.render.frame++,q===!0&&re.beginShadows();const O=p.state.shadowsArray;Oe.render(O,b,U),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,F=_.transmissive;if(p.setupLights(),U.isArrayCamera){const te=U.cameras;if(F.length>0)for(let he=0,ge=te.length;he<ge;he++){const xe=te[he];Jc(k,F,b,xe)}Be&&ee.render(b);for(let he=0,ge=te.length;he<ge;he++){const xe=te[he];Qc(_,b,xe,xe.viewport)}}else F.length>0&&Jc(k,F,b,U),Be&&ee.render(b),Qc(_,b,U);A!==null&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),ke.resetDefaultState(),I=-1,w=null,v.pop(),v.length>0?(p=v[v.length-1],q===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function sa(b,U,O,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||it.intersectsSprite(b)){k&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const he=K.update(b),ge=b.material;ge.visible&&_.push(b,he,ge,O,oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||it.intersectsObject(b))){const he=K.update(b),ge=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),oe.copy(he.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(ge)){const xe=he.groups;for(let Ee=0,Re=xe.length;Ee<Re;Ee++){const we=xe[Ee],Je=ge[we.materialIndex];Je&&Je.visible&&_.push(b,he,Je,O,oe.z,we)}}else ge.visible&&_.push(b,he,ge,O,oe.z,null)}}const te=b.children;for(let he=0,ge=te.length;he<ge;he++)sa(te[he],U,O,k)}function Qc(b,U,O,k){const F=b.opaque,te=b.transmissive,he=b.transparent;p.setupLightsView(O),q===!0&&re.setGlobalState(x.clippingPlanes,O),k&&be.viewport(M.copy(k)),F.length>0&&Hr(F,U,O),te.length>0&&Hr(te,U,O),he.length>0&&Hr(he,U,O),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Jc(b,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ln(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Zn:wi,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const te=p.state.transmissionRenderTarget[k.id],he=k.viewport||M;te.setSize(he.z,he.w);const ge=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(B),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),Be?ee.render(O):x.clear();const xe=x.toneMapping;x.toneMapping=vi;const Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&re.setGlobalState(x.clippingPlanes,k),Hr(b,O,k),Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let we=0,Je=U.length;we<Je;we++){const ft=U[we],pt=ft.object,Qt=ft.geometry,tt=ft.material,ye=ft.group;if(tt.side===an&&pt.layers.test(k.layers)){const Ot=tt.side;tt.side=qt,tt.needsUpdate=!0,el(pt,O,k,Qt,tt,ye),tt.side=Ot,tt.needsUpdate=!0,Re=!0}}Re===!0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te))}x.setRenderTarget(ge),x.setClearColor(B,H),Ee!==void 0&&(k.viewport=Ee),x.toneMapping=xe}function Hr(b,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,te=b.length;F<te;F++){const he=b[F],ge=he.object,xe=he.geometry,Ee=k===null?he.material:k,Re=he.group;ge.layers.test(O.layers)&&el(ge,U,O,xe,Ee,Re)}}function el(b,U,O,k,F,te){b.onBeforeRender(x,U,O,k,F,te),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,U,O,k,b,te),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=qt,F.needsUpdate=!0,x.renderBufferDirect(O,U,k,F,b,te),F.side=Qn,F.needsUpdate=!0,x.renderBufferDirect(O,U,k,F,b,te),F.side=an):x.renderBufferDirect(O,U,k,F,b,te),b.onAfterRender(x,U,O,k,F,te)}function Gr(b,U,O){U.isScene!==!0&&(U=He);const k=Ge.get(b),F=p.state.lights,te=p.state.shadowsArray,he=F.state.version,ge=$.getParameters(b,F.state,te,U,O),xe=$.getProgramCacheKey(ge);let Ee=k.programs;k.environment=b.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(b.isMeshStandardMaterial?R:xt).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",ne),Ee=new Map,k.programs=Ee);let Re=Ee.get(xe);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===he)return nl(b,ge),Re}else ge.uniforms=$.getUniforms(b),b.onBuild(O,ge,x),b.onBeforeCompile(ge,x),Re=$.acquireProgram(ge,xe),Ee.set(xe,Re),k.uniforms=ge.uniforms;const we=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=re.uniform),nl(b,ge),k.needsLights=Zd(b),k.lightsStateVersion=he,k.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function tl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Io.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function nl(b,U){const O=Ge.get(b);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function jd(b,U,O,k,F){U.isScene!==!0&&(U=He),Ne.resetTextureUnits();const te=U.fog,he=k.isMeshStandardMaterial?U.environment:null,ge=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Lt,xe=(k.isMeshStandardMaterial?R:xt).get(k.envMap||he),Ee=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!O.morphAttributes.position,Je=!!O.morphAttributes.normal,ft=!!O.morphAttributes.color;let pt=vi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=x.toneMapping);const Qt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=Qt!==void 0?Qt.length:0,ye=Ge.get(k),Ot=p.state.lights;if(q===!0&&(J===!0||b!==w)){const nn=b===w&&k.id===I;re.setState(k,b,nn)}let rt=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ot.state.version||ye.outputColorSpace!==ge||F.isBatchedMesh&&ye.batching===!1||!F.isBatchedMesh&&ye.batching===!0||F.isBatchedMesh&&ye.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ye.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ye.instancing===!1||!F.isInstancedMesh&&ye.instancing===!0||F.isSkinnedMesh&&ye.skinning===!1||!F.isSkinnedMesh&&ye.skinning===!0||F.isInstancedMesh&&ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ye.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ye.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ye.instancingMorph===!1&&F.morphTexture!==null||ye.envMap!==xe||k.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==re.numPlanes||ye.numIntersection!==re.numIntersection)||ye.vertexAlphas!==Ee||ye.vertexTangents!==Re||ye.morphTargets!==we||ye.morphNormals!==Je||ye.morphColors!==ft||ye.toneMapping!==pt||ye.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,ye.__version=k.version);let On=ye.currentProgram;rt===!0&&(On=Gr(k,U,F));let Vr=!1,Ci=!1,ra=!1;const At=On.getUniforms(),oi=ye.uniforms;if(be.useProgram(On.program)&&(Vr=!0,Ci=!0,ra=!0),k.id!==I&&(I=k.id,Ci=!0),Vr||w!==b){At.setValue(D,"projectionMatrix",b.projectionMatrix),At.setValue(D,"viewMatrix",b.matrixWorldInverse);const nn=At.map.cameraPosition;nn!==void 0&&nn.setValue(D,oe.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&At.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Ci=!0,ra=!0)}if(F.isSkinnedMesh){At.setOptional(D,F,"bindMatrix"),At.setOptional(D,F,"bindMatrixInverse");const nn=F.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),At.setValue(D,"boneTexture",nn.boneTexture,Ne))}F.isBatchedMesh&&(At.setOptional(D,F,"batchingTexture"),At.setValue(D,"batchingTexture",F._matricesTexture,Ne),At.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",F._colorsTexture,Ne));const oa=O.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&Me.update(F,O,On),(Ci||ye.receiveShadow!==F.receiveShadow)&&(ye.receiveShadow=F.receiveShadow,At.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(oi.envMap.value=xe,oi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),Ci&&(At.setValue(D,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&$d(oi,ra),te&&k.fog===!0&&Z.refreshFogUniforms(oi,te),Z.refreshMaterialUniforms(oi,k,j,G,p.state.transmissionRenderTarget[b.id]),Io.upload(D,tl(ye),oi,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Io.upload(D,tl(ye),oi,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&At.setValue(D,"center",F.center),At.setValue(D,"modelViewMatrix",F.modelViewMatrix),At.setValue(D,"normalMatrix",F.normalMatrix),At.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const nn=k.uniformsGroups;for(let aa=0,Qd=nn.length;aa<Qd;aa++){const il=nn[aa];qe.update(il,On),qe.bind(il,On)}}return On}function $d(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Zd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,O){Ge.get(b.texture).__webglTexture=U,Ge.get(b.depthTexture).__webglTexture=O;const k=Ge.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const O=Ge.get(b);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,O=0){A=b,C=U,T=O;let k=!0,F=null,te=!1,he=!1;if(b){const xe=Ge.get(b);xe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):xe.__webglFramebuffer===void 0?Ne.setupRenderTarget(b):xe.__hasExternalTextures&&Ne.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Re=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?F=Re[U][O]:F=Re[U],te=!0):b.samples>0&&Ne.useMultisampledRTT(b)===!1?F=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[O]:F=Re,M.copy(b.viewport),P.copy(b.scissor),N=b.scissorTest}else M.copy(me).multiplyScalar(j).floor(),P.copy(ve).multiplyScalar(j).floor(),N=Ye;if(be.bindFramebuffer(D.FRAMEBUFFER,F)&&k&&be.drawBuffers(b,F),be.viewport(M),be.scissor(P),be.setScissorTest(N),te){const xe=Ge.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,O)}else if(he){const xe=Ge.get(b.texture),Ee=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,O||0,Ee)}I=-1},this.readRenderTargetPixels=function(b,U,O,k,F,te,he){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){be.bindFramebuffer(D.FRAMEBUFFER,ge);try{const xe=b.texture,Ee=xe.format,Re=xe.type;if(!dt.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&O>=0&&O<=b.height-F&&D.readPixels(U,O,k,F,ce.convert(Ee),ce.convert(Re),te)}finally{const xe=A!==null?Ge.get(A).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(b,U,O,k,F,te,he){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){be.bindFramebuffer(D.FRAMEBUFFER,ge);try{const xe=b.texture,Ee=xe.format,Re=xe.type;if(!dt.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-k&&O>=0&&O<=b.height-F){const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),D.readPixels(U,O,k,F,ce.convert(Ee),ce.convert(Re),0),D.flush();const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await _p(D,Je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te)}finally{D.deleteBuffer(we),D.deleteSync(Je)}return te}}finally{const xe=A!==null?Ge.get(A).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(b,U=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-O),F=Math.floor(b.image.width*k),te=Math.floor(b.image.height*k),he=U!==null?U.x:0,ge=U!==null?U.y:0;Ne.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,he,ge,F,te),be.unbindTexture()},this.copyTextureToTexture=function(b,U,O=null,k=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let te,he,ge,xe,Ee,Re;O!==null?(te=O.max.x-O.min.x,he=O.max.y-O.min.y,ge=O.min.x,xe=O.min.y):(te=b.image.width,he=b.image.height,ge=0,xe=0),k!==null?(Ee=k.x,Re=k.y):(Ee=0,Re=0);const we=ce.convert(U.format),Je=ce.convert(U.type);Ne.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ft=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qt=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),ye=D.getParameter(D.UNPACK_SKIP_IMAGES),Ot=b.isCompressedTexture?b.mipmaps[F]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Ee,Re,te,he,we,Je,Ot.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Ee,Re,Ot.width,Ot.height,we,Ot.data):D.texSubImage2D(D.TEXTURE_2D,F,Ee,Re,we,Je,Ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ye),F===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,U,O=null,k=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let te,he,ge,xe,Ee,Re,we,Je,ft;const pt=b.isCompressedTexture?b.mipmaps[F]:b.image;O!==null?(te=O.max.x-O.min.x,he=O.max.y-O.min.y,ge=O.max.z-O.min.z,xe=O.min.x,Ee=O.min.y,Re=O.min.z):(te=pt.width,he=pt.height,ge=pt.depth,xe=0,Ee=0,Re=0),k!==null?(we=k.x,Je=k.y,ft=k.z):(we=0,Je=0,ft=0);const Qt=ce.convert(U.format),tt=ce.convert(U.type);let ye;if(U.isData3DTexture)Ne.setTexture3D(U,0),ye=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ne.setTexture2DArray(U,0),ye=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ot=D.getParameter(D.UNPACK_ROW_LENGTH),rt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),On=D.getParameter(D.UNPACK_SKIP_PIXELS),Vr=D.getParameter(D.UNPACK_SKIP_ROWS),Ci=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(ye,F,we,Je,ft,te,he,ge,Qt,tt,pt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,F,we,Je,ft,te,he,ge,Qt,pt.data):D.texSubImage3D(ye,F,we,Je,ft,te,he,ge,Qt,tt,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,On),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ci),F===0&&U.generateMipmaps&&D.generateMipmap(ye),be.unbindTexture()},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ne.setTextureCube(b,0):b.isData3DTexture?Ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ne.setTexture2DArray(b,0):Ne.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,be.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Qo?"display-p3":"srgb"}}let bx=class id{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};class Tx extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new E;class Rr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mi extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ps;const nr=new E,ms=new E,gs=new E,_s=new fe,ir=new fe,rd=new Ae,uo=new E,sr=new E,fo=new E,bh=new fe,ka=new fe,Th=new fe;class Cr extends ut{constructor(e=new Mi){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sd(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Rr(n,3,0,!1)),ps.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=ps,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;po(uo.set(-.5,-.5,0),gs,o,ms,i,s),po(sr.set(.5,-.5,0),gs,o,ms,i,s),po(fo.set(.5,.5,0),gs,o,ms,i,s),bh.set(0,0),ka.set(1,0),Th.set(1,1);let a=e.ray.intersectTriangle(uo,sr,fo,!1,nr);if(a===null&&(po(sr.set(-.5,.5,0),gs,o,ms,i,s),ka.set(0,1),a=e.ray.intersectTriangle(uo,fo,sr,!1,nr),a===null))return;const c=e.ray.origin.distanceTo(nr);c<e.near||c>e.far||t.push({distance:c,point:nr.clone(),uv:gn.getInterpolation(nr,uo,sr,fo,bh,ka,Th,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function po(r,e,t,n,i,s){_s.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ir.x=s*_s.x-i*_s.y,ir.y=i*_s.x+s*_s.y):ir.copy(_s),r.copy(e),r.x+=ir.x,r.y+=ir.y,r.applyMatrix4(rd)}const Ah=new E,Eh=new at,Rh=new at,Ax=new E,Ch=new Ae,mo=new E,za=new Nn,Ph=new Ae,Ha=new Nr;class Ex extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=al,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(i),e.ray.intersectsSphere(za)!==!1&&(Ph.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Ph),!(this.boundingBox!==null&&Ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ha)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===al?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Eh.fromBufferAttribute(i.attributes.skinIndex,e),Rh.fromBufferAttribute(i.attributes.skinWeight,e),Ah.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Rh.getComponent(s);if(o!==0){const a=Eh.getComponent(s);Ch.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ax.copy(Ah).applyMatrix4(Ch),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class od extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ad extends yt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Wt,h=Wt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new Ae,Rx=new Ae;class Fc{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Rx;Ih.multiplyMatrices(a,t[s]),Ih.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ad(t,e,e,_n,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new od),this.bones.push(o),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class gc extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new Ae,Lh=new Ae,go=[],Dh=new yn,Cx=new Ae,rr=new De,or=new Nn;class ks extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),Dh.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Dh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),or.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),e.ray.intersectsSphere(or)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xs),Lh.multiplyMatrices(n,xs),rr.matrixWorld=Lh,rr.raycast(e,go);for(let o=0,a=go.length;o<a;o++){const c=go[o];c.instanceId=s,c.object=this,t.push(c)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ad(new Float32Array(i*this.count),i,this.count,Nu,An));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cd extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xo=new E,qo=new E,Nh=new Ae,ar=new Nr,_o=new Nn,Ga=new E,Uh=new E;class Bc extends ut{constructor(e=new St,t=new cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Xo.fromBufferAttribute(t,i-1),qo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xo.distanceTo(qo);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;Nh.copy(i).invert(),ar.copy(e.ray).applyMatrix4(Nh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=l){const g=h.getX(_),v=h.getX(_+1),x=xo(this,e,ar,c,g,v);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=xo(this,e,ar,c,_,p);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=l){const g=xo(this,e,ar,c,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=xo(this,e,ar,c,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xo(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Xo.fromBufferAttribute(o,i),qo.fromBufferAttribute(o,s),t.distanceSqToSegment(Xo,qo,Ga,Uh)>n)return;Ga.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ga);if(!(c<e.near||c>e.far))return{distance:c,point:Uh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Fh=new E,Bh=new E;class Px extends Bc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fh.distanceTo(Bh);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends Bc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ld extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new Ae,_c=new Nr,vo=new Nn,Mo=new E;class Lx extends ut{constructor(e=new St,t=new ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Oh.copy(i).invert(),_c.copy(e.ray).applyMatrix4(Oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=l.getX(m);Mo.fromBufferAttribute(u,p),kh(Mo,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Mo.fromBufferAttribute(u,m),kh(Mo,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kh(r,e,t,n,i,s,o){const a=_c.distanceSqToPoint(r);if(a<t){const c=new E;_c.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Ti extends yt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn extends St{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function v(){const y=new E,C=new E;let T=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const w=[],M=I/s,P=M*(t-e)+e;for(let N=0;N<=i;N++){const B=N/i,H=B*c+a,W=Math.sin(H),G=Math.cos(H);C.x=P*W,C.y=-M*n+p,C.z=P*G,u.push(C.x,C.y,C.z),y.set(W,A,G).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),w.push(m++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<s;w++){const M=_[w][I],P=_[w+1][I],N=_[w+1][I+1],B=_[w][I+1];h.push(M,P,B),h.push(P,N,B),T+=6}l.addGroup(g,T,0),g+=T}function x(y){const C=m,T=new fe,A=new E;let I=0;const w=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),m++;const P=m;for(let N=0;N<=i;N++){const H=N/i*c+a,W=Math.cos(H),G=Math.sin(H);A.x=w*G,A.y=p*M,A.z=w*W,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=W*.5+.5,T.y=G*.5*M+.5,f.push(T.x,T.y),m++}for(let N=0;N<i;N++){const B=C+N,H=P+N;y===!0?h.push(H,H+1,B):h.push(H+1,H,B),I+=3}l.addGroup(g,I,y===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dn extends Sn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Dn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oc extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new E,y=new E,C=new E;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],y),f(t[T+2],C),c(x,y,C,v)}function c(v,x,y,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const w=v.clone().lerp(y,I/T),M=x.clone().lerp(y,I/T),P=T-I;for(let N=0;N<=P;N++)N===0&&I===T?A[I][N]=w:A[I][N]=w.clone().lerp(M,N/P)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[I][M+1]),d(A[I+1][M]),d(A[I][M])):(d(A[I][M+1]),d(A[I+1][M+1]),d(A[I+1][M]))}}function l(v){const x=new E;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new E;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=p(v)/2/Math.PI+.5,C=g(v)/Math.PI+.5;o.push(y,1-C)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],C=o[v+4],T=Math.max(x,y,C),A=Math.min(x,y,C);T>.9&&A<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function m(){const v=new E,x=new E,y=new E,C=new E,T=new fe,A=new fe,I=new fe;for(let w=0,M=0;w<s.length;w+=9,M+=6){v.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),C.copy(v).add(x).add(y).divideScalar(3);const P=p(C);_(T,M+0,v,P),_(A,M+2,x,P),_(I,M+4,y,P)}}function _(v,x,y,C){C<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.vertices,e.indices,e.radius,e.details)}}class ei extends Oc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ei(e.radius,e.detail)}}class Ur extends St{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new E,m=new fe;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const g=s+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){const p=_*(n+1);for(let g=0;g<n;g++){const v=g+p,x=v,y=v+n+1,C=v+n+2,T=v+1;a.push(x,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kc extends St{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const v=[],x=g/n;let y=0;g===0&&o===0?y=.5/t:g===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+T*s)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+y,1-x),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const x=h[g][v+1],y=h[g][v],C=h[g+1][v],T=h[g+1][v+1];(g!==0||o>0)&&f.push(x,y,T),(g!==n-1||c<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zc extends St{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(_,p,v),o.push(p,g,v)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dx extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ti extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends ti{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class En extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function yo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Nx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ux(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function hd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Fr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fx extends Fr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ss:s=e,a=2*t-n;break;case zo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ss:o=e,c=2*n-t;break;case zo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let C=0;C!==a;++C)s[C]=g*o[h+C]+v*o[l+C]+x*o[c+C]+y*o[u+C];return s}}class ud extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Bx extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Nx(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Tr;class qs extends Fn{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=br;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends Fn{}dd.prototype.ValueTypeName="color";class zs extends Fn{}zs.prototype.ValueTypeName="number";class Ox extends Fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Bt.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Wi extends Fn{InterpolantFactoryMethodLinear(e){return new Ox(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends Fn{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=br;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends Fn{}Hs.prototype.ValueTypeName="vector";class Yo{constructor(e="",t=-1,n=[],i=Rc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Ux(c);c=zh(c,1,h),l=zh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new zs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const p=[],g=[];hd(f,p,g,m),p.length!==0&&_.push(new u(d,p,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];p.push(x.time),g.push(x.morphTarget===_?1:0)}i.push(new zs(".morphTargetInfluence["+_+"]",p,g))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Hs,f+".position",d,"pos",i),n(Wi,f+".quaternion",d,"rot",i),n(Hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return dd;case"quaternion":return Wi;case"bool":case"boolean":return qs;case"string":return Ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kx(r.type);if(r.times===void 0){const t=[],n=[];hd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Gx=new Hx;class Ks{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Vx extends Error{constructor(e,t){super(e),this.response=t}}class fd extends Ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){v();function v(){u.read().then(({done:x,value:y})=>{if(x)g.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){const I=h[T];I.onProgress&&I.onProgress(C)}g.enqueue(y),v()}},x=>{g.error(x)})}}});return new Response(p)}else throw new Vx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{xi.add(e,l);const h=Wn[e];delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wx extends Ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ar("img");function c(){h(),xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Xx extends Ks{constructor(e){super(e)}load(e,t,n,i){const s=new yt,o=new Wx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ta extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class qx extends ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Va=new Ae,Hh=new E,Gh=new E;class Hc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yx extends Hc{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kx extends ta{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Yx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vh=new Ae,cr=new E,Wa=new E;class jx extends Hc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),i.makeTranslation(-cr.x,-cr.y,-cr.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class $x extends ta{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zx extends Hc{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Zx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qx extends Ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),xi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});xi.add(e,c),s.manager.itemStart(e)}}class md{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wh(){return(typeof performance>"u"?Date:performance).now()}class Jx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Bt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Bt.multiplyQuaternionsFlat(e,o,e,t,e,n),Bt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Gc="\\[\\]\\.:\\/",ev=new RegExp("["+Gc+"]","g"),Vc="[^"+Gc+"]",tv="[^"+Gc.replace("\\.","")+"]",nv=/((?:WC+[\/:])*)/.source.replace("WC",Vc),iv=/(WCOD+)?/.source.replace("WCOD",tv),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),ov=new RegExp("^"+nv+iv+sv+rv+"$"),av=["material","materials","bones","map"];class cv{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(e){const t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);av.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=cv;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:ys,endingEnd:ys};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Gf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Rc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Hf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ou){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ss,i.endingEnd=Ss):(e?i.endingStart=this.zeroSlopeAtStart?Ss:ys:i.endingStart=zo,t?i.endingEnd=this.zeroSlopeAtEnd?Ss:ys:i.endingEnd=zo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const hv=new Float32Array(1);class uv extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new Jx(et.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ud(new Float32Array(2),new Float32Array(2),1,hv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Yo.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Rc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new lv(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Yo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Xh=new Ae;class gd{constructor(e,t,n=0,i=1/0){this.ray=new Nr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(e,t=!0,n=[]){return xc(e,this,n,t),n.sort(qh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)xc(e[i],this,n,t);return n.sort(qh),n}}function qh(r,e){return r.distance-e.distance}function xc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)xc(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);const ze=2,bi=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams,_d={small:72,medium:96,large:128},Br=_d[bi.get("size")]?bi.get("size"):"medium",Wc=_d[Br],Le=Wc*ze,dv=/^[0-9a-z]+$/.test(bi.get("seed")||"")?parseInt(bi.get("seed"),36)>>>0:Math.random()*1e9|0,xd={green:{name:"Green",moist:0,forestMul:1},arid:{name:"Arid",moist:-.34,forestMul:.55},lush:{name:"Lush",moist:.28,forestMul:1.5}},Or=xd[bi.get("biome")]?bi.get("biome"):"green",vd=xd[Or],ni=bi.get("foes")==="2"?2:1,fv=10,pv=120,pe=0,mv=1,gv=[3108832,13777710,10170585],_v=["Blue","Red","Purple"],Kt=[{name:"Dark Age",cost:null},{name:"Feudal Age",cost:{food:400,gold:0},time:25},{name:"Castle Age",cost:{food:700,gold:200},time:35},{name:"Imperial Age",cost:{food:1e3,gold:600},time:45}],vc=[1,1.15,1.32,1.5],xv=[1,1.15,1.32,1.5],cn={villager:{name:"Villager",icon:"🧑",age:1,cost:{food:50},trainTime:9,hp:32,atk:3,range:.6,atkSpeed:1.4,speed:5.4,aggro:0,gatherRate:1.25},militia:{name:"Militia",icon:"⚔️",age:1,cost:{food:50,gold:15},trainTime:9,hp:52,atk:7,range:.7,atkSpeed:1.3,speed:4.9,aggro:11},spearman:{name:"Spearman",icon:"🔱",age:2,cost:{food:40,wood:25},trainTime:9,hp:55,atk:7,range:.8,atkSpeed:1.4,speed:5.2,aggro:11,bonusVsCav:2.5},archer:{name:"Archer",icon:"🏹",age:2,cost:{wood:30,gold:35},trainTime:10,hp:36,atk:6,range:11,atkSpeed:1.6,speed:5,aggro:12,projectile:"arrow"},knight:{name:"Knight",icon:"🐎",age:3,cost:{food:70,gold:60},trainTime:13,hp:110,atk:12,range:.9,atkSpeed:1.5,speed:7.2,aggro:12,cavalry:!0},fishingboat:{name:"Fishing Boat",icon:"🚣",age:2,cost:{wood:60},trainTime:11,hp:45,atk:0,range:.6,atkSpeed:1,speed:5.6,aggro:0,gatherRate:1.6,domain:"water",gathers:["fish"],carry:15},catapult:{name:"Catapult",icon:"🪓",age:4,cost:{wood:140,gold:80},trainTime:18,hp:85,atk:38,range:13,atkSpeed:4.5,speed:3.4,aggro:13,projectile:"stone",splash:2.6,bonusVsBuilding:2.2,minRange:3}},Gs={towncenter:{name:"Town Center",icon:"🏛️",age:1,cost:{wood:300},buildTime:50,hp:1450,size:4,pop:10,dropoff:!0,trains:["villager"],researchesAge:!0,attack:{atk:6,range:12,atkSpeed:1.8,needsGarrison:!1}},house:{name:"House",icon:"🏠",age:1,cost:{wood:30},buildTime:9,hp:280,size:2,pop:5},storehouse:{name:"Storehouse",icon:"📦",age:1,cost:{wood:45},buildTime:10,hp:320,size:2,dropoff:!0},barracks:{name:"Barracks",icon:"⚔️",age:1,cost:{wood:125},buildTime:18,hp:750,size:3,trains:["militia","spearman"]},farm:{name:"Farm",icon:"🌾",age:1,cost:{wood:50},buildTime:8,hp:120,size:2,isFarm:!0,farmRate:.85},archeryrange:{name:"Archery Range",icon:"🏹",age:2,cost:{wood:140},buildTime:18,hp:700,size:3,trains:["archer"]},tower:{name:"Watch Tower",icon:"🗼",age:2,cost:{wood:40,stone:70},buildTime:16,hp:620,size:1,attack:{atk:7,range:13,atkSpeed:1.7}},wall:{name:"Palisade Wall",icon:"🚧",age:2,cost:{wood:8},buildTime:4,hp:320,size:1,isWall:!0},gate:{name:"Gate",icon:"🚪",age:2,cost:{wood:10,stone:15},buildTime:6,hp:400,size:1,isWall:!0,isGate:!0},dock:{name:"Dock",icon:"⚓",age:2,cost:{wood:100},buildTime:15,hp:550,size:2,dropoff:!0,isDock:!0,trains:["fishingboat"]},blacksmith:{name:"Blacksmith",icon:"⚒️",age:2,cost:{wood:120},buildTime:16,hp:640,size:2,techs:["forging","scalearmor","wheelbarrow","masonry"]},market:{name:"Market",icon:"⚖️",age:2,cost:{wood:110},buildTime:14,hp:600,size:2,isMarket:!0},stable:{name:"Stable",icon:"🐎",age:3,cost:{wood:160},buildTime:20,hp:800,size:3,trains:["knight"]},siegeworkshop:{name:"Siege Workshop",icon:"🪓",age:4,cost:{wood:190,gold:60},buildTime:22,hp:850,size:3,trains:["catapult"]}},vv=["house","storehouse","farm","barracks","archeryrange","tower","wall","gate","blacksmith","market","dock","stable","siegeworkshop","towncenter"],Xi={forging:{name:"Forging",icon:"🔥",age:2,cost:{food:120,gold:60},time:25,desc:"+15% unit attack",mod:{atkMult:1.15}},scalearmor:{name:"Scale Armor",icon:"🛡",age:2,cost:{food:100,gold:80},time:25,desc:"+15% unit HP",mod:{hpMult:1.15}},wheelbarrow:{name:"Wheelbarrow",icon:"🛒",age:2,cost:{food:150,wood:60},time:30,desc:"+15% gather rate",mod:{gatherMult:1.15}},masonry:{name:"Masonry",icon:"🧱",age:3,cost:{food:130,stone:60},time:30,desc:"+20% building HP",mod:{bldHpMult:1.2}}},Yt={lot:100,sellGold:60,buyGold:90},Xc=["wood","food","gold","stone"],Mv={tree:{name:"Tree",res:"wood",amount:110},berry:{name:"Berry Bush",res:"food",amount:160},gold:{name:"Gold Mine",res:"gold",amount:850},stone:{name:"Stone Mine",res:"stone",amount:700},fish:{name:"Fish School",res:"food",amount:380}},Md={blitz:{name:"Lightning War",icon:"⚡",desc:"Destroy every enemy Town Center within 12 minutes.",timeLimit:720,timeout:"lose",win:r=>!r.buildings.some(e=>e.owner!==0&&!e.dead&&e.type==="towncenter")},survive:{name:"Hold the Line",icon:"🛡️",desc:"Survive the enemy assault for 10 minutes.",timeLimit:600,timeout:"win",win:null},tycoon:{name:"Golden Age",icon:"👑",desc:"Amass 2,000 gold in your treasury.",timeLimit:null,timeout:null,win:r=>r.players[0].res.gold>=2e3}},Yh=bi.get("scenario"),qi=Md[Yh]?Yh:null,yv={wood:220,food:220,gold:120,stone:80};function xn(r,e){return e?Xc.every(t=>(r[t]||0)>=(e[t]||0)):!0}function Lo(r,e){if(e)for(const t of Xc)r[t]=(r[t]||0)-(e[t]||0)}function Do(r,e){if(e)for(const t of Xc)r[t]=(r[t]||0)+(e[t]||0)}function Xa(r){let e=r>>>0;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296),n=64,i=new Float32Array(n*n);for(let o=0;o<i.length;o++)i[o]=t();const s=o=>o*o*(3-2*o);return(o,a)=>{o=(o%n+n)%n,a=(a%n+n)%n;const c=Math.floor(o),l=Math.floor(a),h=(c+1)%n,u=(l+1)%n,d=s(o-c),f=s(a-l),m=i[l*n+c],_=i[l*n+h],p=i[u*n+c],g=i[u*n+h];return m+(_-m)*d+(p-m)*f+(m-_-p+g)*d*f}}const Gt=-.55;class Sv{constructor(e=Math.random()*1e9|0){this.size=Wc,this.seed=e,this.noise=Xa(e),this.noise2=Xa(e^2654435769),this.moistNoise=Xa(e^1374772973),this.walk=new Uint8Array(this.size*this.size),this.waterWalk=new Uint8Array(this.size*this.size),this.occupant=new Array(this.size*this.size).fill(null),this.gateOwner=new Int8Array(this.size*this.size).fill(-1);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){const i=this.tileHeight(n,t);this.walk[t*this.size+n]=i>Gt?1:0,this.waterWalk[t*this.size+n]=i<=Gt?1:0}this.version=0}heightAt(e,t){const n=e/26,i=t/26;let s=(this.noise(n,i)-.5)*2.6+(this.noise2(n*2.7,i*2.7)-.5)*1.1;const o=this.noise2(e/60+11,t/60+7);o<.15&&(s-=(.15-o)*12);const a=e-this.size*ze/2,c=t-this.size*ze/2,l=Math.max(Math.abs(a),Math.abs(c))/(this.size*ze/2);return l>.86&&(s+=(l-.86)*9),s}moistureAt(e,t){return Math.max(0,Math.min(1,this.moistNoise(e/34+3,t/34+9)+vd.moist))}tileHeight(e,t){return this.heightAt((e+.5)*ze,(t+.5)*ze)}inBounds(e,t){return e>=0&&t>=0&&e<this.size&&t<this.size}isWalkable(e,t){return this.inBounds(e,t)?this.walk[t*this.size+e]===1:!1}isWater(e,t){return this.inBounds(e,t)?this.waterWalk[t*this.size+e]===1:!1}hasAdjacentWater(e,t,n){for(let i=t-1;i<=t+n;i++)for(let s=e-1;s<=e+n;s++)if(!(i>=t&&i<t+n&&s>=e&&s<e+n)&&this.isWater(s,i))return!0;return!1}occupantAt(e,t){return this.inBounds(e,t)?this.occupant[t*this.size+e]:null}worldToGrid(e,t){return[Math.floor(e/ze),Math.floor(t/ze)]}gridToWorld(e,t){return[(e+.5)*ze,(t+.5)*ze]}canPlace(e,t,n){for(let i=t;i<t+n;i++)for(let s=e;s<e+n;s++){if(!this.inBounds(s,i))return!1;const o=i*this.size+s;if(this.walk[o]!==1||this.occupant[o])return!1}return!0}occupy(e,t,n,i,s=-1){for(let o=t;o<t+n;o++)for(let a=e;a<e+n;a++){const c=o*this.size+a;this.walk[c]=0,this.gateOwner[c]=s,this.occupant[c]=i}this.version++}release(e,t,n){for(let i=t;i<t+n;i++)for(let s=e;s<e+n;s++){const o=i*this.size+s,a=this.tileHeight(s,i);this.walk[o]=a>Gt?1:0,this.gateOwner[o]=-1,this.occupant[o]=null}this.version++}isWalkableFor(e,t,n){if(!this.inBounds(e,t))return!1;const i=t*this.size+e;return this.walk[i]===1||this.gateOwner[i]===n}nearestWalkable(e,t,n=10){if(this.isWalkable(e,t))return[e,t];for(let i=1;i<=n;i++)for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)if(Math.max(Math.abs(o),Math.abs(s))===i&&this.isWalkable(e+o,t+s))return[e+o,t+s];return null}}function wv(r,e,t=!1){const n=[],i=r.size;let o=(r.seed^11259375)>>>0;const a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(f,m,_)=>e.every(p=>Math.hypot(f-p[0],m-p[1])>_),l=(f,m,_)=>!r.inBounds(f,m)||!r.isWalkable(f,m)||r.occupantAt(f,m)?!1:(n.push({type:_,gx:f,gy:m}),r.occupy(f,m,1,{isResourceReservation:!0,type:_}),!0),h=Math.round((t?7:26)*vd.forestMul*(i/96));for(let f=0;f<h;f++){const m=6+a()*(i-12),_=6+a()*(i-12);if(!c(m,_,11))continue;const p=2.4+a()*3.4;for(let g=Math.floor(_-p);g<=_+p;g++)for(let v=Math.floor(m-p);v<=m+p;v++){const x=Math.hypot(v-m,g-_);x<=p&&a()<.82-x/(p*2.2)&&l(v,g,"tree")}}for(let f=0;f<9;f++){const m=Math.floor(8+a()*(i-16)),_=Math.floor(8+a()*(i-16));if(c(m,_,13))for(let p=0;p<4;p++)l(m+p%2,_+Math.floor(p/2),"gold")}for(let f=0;f<7;f++){const m=Math.floor(8+a()*(i-16)),_=Math.floor(8+a()*(i-16));if(c(m,_,13))for(let p=0;p<4;p++)l(m+p%2,_+Math.floor(p/2),"stone")}const u=[];for(let f=4;f<i-4;f+=2)for(let m=4;m<i-4;m+=2)r.tileHeight(m,f)<=Gt-.3&&u.push([m,f]);const d=Math.min(14,Math.floor(u.length/6));for(let f=0;f<d;f++){const[m,_]=u[Math.floor(a()*u.length)];r.occupantAt(m,_)||(n.push({type:"fish",gx:m,gy:_}),r.occupant[_*i+m]={isResourceReservation:!0,type:"fish"})}for(let f=0;f<10;f++){const m=Math.floor(8+a()*(i-16)),_=Math.floor(8+a()*(i-16));if(c(m,_,13))for(let p=0;p<5;p++)l(m+Math.floor(a()*3)-1,_+Math.floor(a()*3)-1,"berry")}for(const[f,m]of e){const _=a()*Math.PI*2;for(let w=0;w<(t?8:26);w++){const M=_+(a()-.5)*1.7,P=9+a()*4;l(Math.round(f+Math.cos(M)*P),Math.round(m+Math.sin(M)*P),"tree")}const p=_+Math.PI*(.6+a()*.5),g=Math.round(f+Math.cos(p)*8),v=Math.round(m+Math.sin(p)*8);for(let w=0;w<6;w++)l(g+Math.floor(a()*3)-1,v+Math.floor(a()*3)-1,"berry");const x=p+Math.PI*(.4+a()*.4),y=Math.round(f+Math.cos(x)*10),C=Math.round(m+Math.sin(x)*10);for(let w=0;w<4;w++)l(y+w%2,C+Math.floor(w/2),"gold");const T=x+Math.PI*(.35+a()*.3),A=Math.round(f+Math.cos(T)*12),I=Math.round(m+Math.sin(T)*12);for(let w=0;w<4;w++)l(A+w%2,I+Math.floor(w/2),"stone")}return n}function bv(r,e=2){const t=r.size,n=e>=3?[[[18,18],[t-22,t-22],[t-22,18]],[[18,18],[t-22,t-22],[18,t-22]]]:[[[18,18],[t-22,t-22]],[[t-22,18],[18,t-22]]],i=([a,c])=>{let l=0;for(let h=-4;h<=4;h++)for(let u=-4;u<=4;u++)r.isWalkable(a+u,c+h)||l++;return l};let s=n[0],o=1/0;for(const a of n){const c=a.reduce((l,h)=>l+i(h),0);c<o&&(o=c,s=a)}return s.map(([a,c])=>r.nearestWalkable(a,c,14)||[a,c])}const yd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Tv=new Jo(-1,1,1,-1,0,1);class Av extends St{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const Ev=new Av;class qc{constructor(e){this._mesh=new De(Ev,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rv extends js{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Er.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kh extends js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Cv extends js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Pv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rv(yd),this.copyPass.material.blending=$n,this.clock=new md}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kh!==void 0&&(o instanceof Kh?n=!0:o instanceof Cv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iv extends js{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Lv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vs extends js{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(s,o,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ln(s,o,{type:Zn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ln(s,o,{type:Zn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=Lv;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=yd;this.copyUniforms=Er.clone(h.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:cc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ue,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new qc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new fe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Vs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Vs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Vs.BlurDirectionX=new fe(1,0);Vs.BlurDirectionY=new fe(0,1);const Dv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Nv extends js{constructor(){super();const e=Dv;this.uniforms=Er.clone(e.uniforms),this.material=new Dx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new qc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Bn(r){const e=document.createElement("canvas");return e.width=e.height=r,[e,e.getContext("2d")]}function Cs(r,e,t=1){let n=t>>>0;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=new Float32Array(e*e);for(let a=0;a<s.length;a++)s[a]=i();const o=a=>a*a*(3-2*a);return(a,c)=>{const l=a/r*e,h=c/r*e,u=Math.floor(l)%e,d=Math.floor(h)%e,f=(u+1)%e,m=(d+1)%e,_=o(l-Math.floor(l)),p=o(h-Math.floor(h)),g=s[d*e+u],v=s[d*e+f],x=s[m*e+u],y=s[m*e+f];return g+(v-g)*_+(x-g)*p+(g-v-x+y)*_*p}}function $s(r,e){const t=Cs(r,8,e),n=Cs(r,23,e^99),i=Cs(r,53,e^7777);return(s,o)=>t(s,o)*.5+n(s,o)*.33+i(s,o)*.17}function Zs(r,e=1){const t=new Ti(r);return t.wrapS=t.wrapT=Jn,t.repeat.set(e,e),t.colorSpace=Ct,t.anisotropy=4,t}function Ki(r,e=1.4){const t=r.width,n=r.getContext("2d").getImageData(0,0,t,t).data,i=(l,h)=>{l=(l%t+t)%t,h=(h%t+t)%t;const u=(h*t+l)*4;return(n[u]+n[u+1]+n[u+2])/765},[s,o]=Bn(t),a=o.createImageData(t,t);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const u=(i(h+1,l)-i(h-1,l))*e,d=(i(h,l+1)-i(h,l-1))*e,f=1/Math.hypot(u,d,1),m=(l*t+h)*4;a.data[m]=(-u*f*.5+.5)*255,a.data[m+1]=(-d*f*.5+.5)*255,a.data[m+2]=(f*.5+.5)*255,a.data[m+3]=255}o.putImageData(a,0,0);const c=new Ti(s);return c.wrapS=c.wrapT=Jn,c}function Uv(r=256){const[e,t]=Bn(r),n=$s(r,1234),i=Cs(r,96,555),s=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){let c=.97+(n(a,o)-.5)*.22+(i(a,o)-.5)*.26;c=Math.max(.74,Math.min(1.18,c));const l=(o*r+a)*4;s.data[l]=Math.min(255,c*252),s.data[l+1]=Math.min(255,c*255),s.data[l+2]=Math.min(255,c*246),s.data[l+3]=255}return t.putImageData(s,0,0),{map:Zs(e),normalMap:Ki(e,.8)}}function Fv(r=128){const[e,t]=Bn(r),n=$s(r,4321),i=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){const c=Math.sin(o/r*Math.PI*18+n(a,o)*5)*.5+.5,l=Math.sin(a/r*Math.PI*60+o*.45)*.5+.5;let h=.66+c*.26+l*.1+(n(a,o)-.5)*.22;const u=(o*r+a)*4;i.data[u]=Math.min(255,h*255),i.data[u+1]=Math.min(255,h*232),i.data[u+2]=Math.min(255,h*178),i.data[u+3]=255}t.putImageData(i,0,0);const s=Ki(e,1.6);return s.repeat.set(2,2),{map:Zs(e,2),normalMap:s}}function Bv(r=128){const[e,t]=Bn(r),n=$s(r,8765),i=t.createImageData(r,r),s=6,o=4;for(let c=0;c<r;c++)for(let l=0;l<r;l++){const h=c/r*s,u=Math.floor(h)%2*.5,d=l/r*o+u,f=h-Math.floor(h),m=d-Math.floor(d),_=f<.09||m<.06?.62:1;let p=(.78+(n(l,c)-.5)*.3)*_;const g=(c*r+l)*4;i.data[g]=p*255,i.data[g+1]=p*252,i.data[g+2]=p*244,i.data[g+3]=255}t.putImageData(i,0,0);const a=Ki(e,2);return a.repeat.set(2,2),{map:Zs(e,2),normalMap:a}}function Ov(r=128){const[e,t]=Bn(r),n=$s(r,2468),i=t.createImageData(r,r),s=5;for(let a=0;a<r;a++)for(let c=0;c<r;c++){const l=c/r*s,h=l-Math.floor(l)<.07?.6:1,u=Math.sin(a/r*Math.PI*34+n(c,a)*9)*.5+.5,d=Cs(r,s,33)(c,0)*.2;let f=(.72+u*.14+d+(n(c,a)-.5)*.18)*h;const m=(a*r+c)*4;i.data[m]=Math.min(255,f*255),i.data[m+1]=Math.min(255,f*224),i.data[m+2]=Math.min(255,f*184),i.data[m+3]=255}t.putImageData(i,0,0);const o=Ki(e,1.5);return o.repeat.set(1.5,1.5),{map:Zs(e,1.5),normalMap:o}}function kv(r=128){const[e,t]=Bn(r),n=$s(r,1357),i=Cs(r,64,777),s=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){let c=.9+(n(a,o)-.5)*.16-(i(a,o)>.82?.12:0);const l=(o*r+a)*4;s.data[l]=c*255,s.data[l+1]=c*250,s.data[l+2]=c*238,s.data[l+3]=255}return t.putImageData(s,0,0),{map:Zs(e),normalMap:Ki(e,.9)}}function zv(r=256){const[e,t]=Bn(r);t.fillStyle="#9c9c9c",t.fillRect(0,0,r,r);let n=7855;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=(a,c,l,h,u)=>{for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){t.save(),t.translate(a+d*r,c+f*r),t.rotate(h);const m=t.createRadialGradient(0,-l*.2,l*.1,0,0,l);m.addColorStop(0,`rgb(${u},${u},${u})`),m.addColorStop(1,`rgb(${u*.62|0},${u*.62|0},${u*.62|0})`),t.fillStyle=m,t.beginPath(),t.ellipse(0,0,l,l*.6,0,0,Math.PI*2),t.fill(),t.restore()}};for(const[a,c,l,h,u]of[[90,18,30,175,215],[220,9,17,195,240],[380,4,9,210,255]])for(let d=0;d<a;d++)s(i()*r,i()*r,c+i()*(l-c),i()*Math.PI,h+i()*(u-h)|0);return{map:Zs(e),normalMap:Ki(e,2)}}function Hv(r=128){const[e,t]=Bn(r),n=$s(r,9753),i=t.createImageData(r,r);for(let s=0;s<r;s++)for(let o=0;o<r;o++){const a=.5+Math.sin(n(o,s)*Math.PI*4)*.5,c=(s*r+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=a*255,i.data[c+3]=255}return t.putImageData(i,0,0),Ki(e,1.1)}function Gv(){const[r,e]=Bn(256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#5d9bd4"),t.addColorStop(.55,"#9cc6e8"),t.addColorStop(.8,"#d8e8f2"),t.addColorStop(1,"#e8e2cf"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new Ti(r);return n.colorSpace=Ct,n}function Vv(){const[r,e]=Bn(64),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.6,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Ti(r)}function Wv(r){const e=new wx({canvas:r,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=wu,e.outputColorSpace=Ct,e.toneMapping=Ec,e.toneMappingExposure=1.22;const t=new Tx;t.background=new ue(10406120),t.fog=new bx(12178660,170,430);const n=new Ht(46,window.innerWidth/window.innerHeight,1,1200),i=new De(new kc(520,24,12),new Pt({map:Gv(),side:qt,fog:!1,depthWrite:!1}));i.position.set(Le/2,-40,Le/2),i.renderOrder=-10,t.add(i);const s=new qx(13624821,9075285,.85);t.add(s);const o=new pd(16773848,2);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-8e-4,o.shadow.normalBias=.04;const a=65;o.shadow.camera.left=-a,o.shadow.camera.right=a,o.shadow.camera.top=a,o.shadow.camera.bottom=-a,o.shadow.camera.near=10,o.shadow.camera.far=260,t.add(o),t.add(o.target);const c=new E(-.55,1,.35).normalize();let l=0;function h(_,p=50){o.target.position.copy(_),o.position.copy(_).addScaledVector(c,110);const g=Math.min(150,30+p*1.15);Math.abs(g-l)>2&&(l=g,o.shadow.camera.left=-g,o.shadow.camera.right=g,o.shadow.camera.top=g,o.shadow.camera.bottom=-g,o.shadow.camera.updateProjectionMatrix())}h(new E(Le/2,0,Le/2));const u=Math.min(window.devicePixelRatio,2),d=new ln(window.innerWidth*u,window.innerHeight*u,{samples:4,type:Zn}),f=new Pv(e,d);f.addPass(new Iv(t,n));const m=new Vs(new fe(window.innerWidth,window.innerHeight),.22,.55,.82);return f.addPass(m),f.addPass(new Nv),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),f.setSize(window.innerWidth,window.innerHeight)}),{renderer:e,scene:t,camera:n,updateSun:h,composer:f}}function jh(r,e){if(e===Vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===fc||e===ku){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===fc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Yc extends Ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new lM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=wr.extractUrlBase(e);o=wr.resolveURL(l,this.path)}else o=wr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new fd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Sd){try{o[Ve.KHR_BINARY_GLTF]=new hM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:o[u]=new Yv;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new uM(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[u]=new dM;break;case Ve.KHR_MESH_QUANTIZATION:o[u]=new fM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Xv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qv{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Lt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $x(h),l.distance=u;break;case"spot":l=new Kx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Yn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Yv{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){const i=[];e.color=new ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Lt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(i)}}class Kv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class jv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(s)}}class $v{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Zv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Qv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Lt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Jv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class eM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(a[0],a[1],a[2],Lt),Promise.all(s)}}class tM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class nM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(a[0],a[1],a[2],Lt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(s)}}class iM{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class sM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class rM{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class oM{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aM{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cM{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class lM{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==on.TRIANGLES&&l.mode!==on.TRIANGLE_STRIP&&l.mode!==on.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const _=new Ae,p=new E,g=new Bt,v=new E(1,1,1),x=new ks(m.geometry,m.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(p,g,v));for(const y in c)if(y==="_COLOR_0"){const C=c[y];x.instanceColor=new gc(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);ut.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Sd="glTF",lr=12,$h={JSON:1313821514,BIN:5130562};class hM{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-lr,s=new DataView(e,lr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===$h.JSON){const l=new Uint8Array(e,lr+o,a);this.content=n.decode(l)}else if(c===$h.BIN){const l=lr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Mc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Mc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ps[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],p=c[m];p!==void 0&&(_.normalized=p)}u(f)},a,l,Lt,d)})})}}class dM{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fM{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class wd extends Fr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,_=m-l,p=-2*f+3*d,g=f-d,v=1-p,x=g-d+u;for(let y=0;y!==a;y++){const C=o[_+y+a],T=o[_+y+c]*h,A=o[m+y+a],I=o[m+y]*h;s[y]=v*C+x*T+p*A+g*I}return s}}const pM=new Bt;class mM extends wd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return pM.fromArray(s).normalize().toArray(s),s}}const on={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zh={9728:Wt,9729:Vt,9984:Pu,9985:Po,9986:mr,9987:Kn},Qh={33071:_i,33648:Oo,10497:Jn},qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gM={CUBICSPLINE:void 0,LINEAR:Tr,STEP:br},Ya={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _M(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),r.DefaultMaterial}function Fi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xM(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function vM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ka(t.attributes):e=r.indices+":"+Ka(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ka(r.targets[n]);return e}function Ka(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function yc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const SM=new Ae;class wM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Xx(this.options.manager):this.textureLoader=new Qx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Fi(s,a,i),Yn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(wr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=qa[i.type],a=Ps[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Mt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=qa[i.type],l=Ps[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==u){const g=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let x=t.cache.get(v);x||(_=new l(a,g*f,i.count*f/h),x=new sd(_,f/h),t.cache.add(v,x)),p=new Rr(x,c,d%f/h,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),p=new Mt(_,c,m);if(i.sparse!==void 0){const g=qa.SCALAR,v=Ps[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new v(o[1],x,i.sparse.count*g),T=new l(o[2],y,i.sparse.count*c);a!==null&&(p=new Mt(p.array.slice(),p.itemSize,p.normalized));for(let A=0,I=C.length;A<I;A++){const w=C[A];if(p.setX(w,T[A*c]),c>=2&&p.setY(w,T[A*c+1]),c>=3&&p.setZ(w,T[A*c+2]),c>=4&&p.setW(w,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Zh[d.magFilter]||Vt,h.minFilter=Zh[d.minFilter]||Kn,h.wrapS=Qh[d.wrapS]||Jn,h.wrapT=Qh[d.wrapT]||Jn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const p=new yt(_);p.needsUpdate=!0,d(p)}),t.load(wr.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Yn(u,o),u.userData.mimeType=o.mimeType||yM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ld,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new cd,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ti}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ve.KHR_MATERIALS_UNLIT]){const u=i[Ve.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Lt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=an);const h=s.alphaMode||Ya.OPAQUE;if(h===Ya.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ya.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new fe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Pt){const u=s.emissiveFactor;a.emissive=new ue().setRGB(u[0],u[1],u[2],Lt)}return s.emissiveTexture!==void 0&&o!==Pt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Yn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Fi(i,u,s),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Jh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=MM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Jh(new St,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?_M(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],p=o[f];let g;const v=l[f];if(p.mode===on.TRIANGLES||p.mode===on.TRIANGLE_STRIP||p.mode===on.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new Ex(_,v):new De(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===on.TRIANGLE_STRIP?g.geometry=jh(g.geometry,ku):p.mode===on.TRIANGLE_FAN&&(g.geometry=jh(g.geometry,fc));else if(p.mode===on.LINES)g=new Px(_,v);else if(p.mode===on.LINE_STRIP)g=new Bc(_,v);else if(p.mode===on.LINE_LOOP)g=new Ix(_,v);else if(p.mode===on.POINTS)g=new Lx(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&vM(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Yn(g,s),p.extensions&&Fi(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Fi(i,u[0],s),u[0];const d=new Te;s.extensions&&Fi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Sr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ae;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let v=0,x=d.length;v<x;v++){const y=d[v],C=f[v],T=m[v],A=_[v],I=p[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const w=n._createAnimationTracks(y,C,T,A,I);if(w)for(let M=0;M<w.length;M++)g.push(w[M])}return new Yo(s,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,SM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new od:l.length>1?h=new Te:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Yn(h,s),s.extensions&&Fi(n,h,s),s.matrix!==void 0){const u=new Ae;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Te;n.name&&(s.name=i.createUniqueName(n.name)),Yn(s,n),n.extensions&&Fi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof yt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];fi[s.path]===fi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(fi[s.path]){case fi.weights:l=zs;break;case fi.rotation:l=Wi;break;case fi.position:case fi.scale:l=Hs;break;default:switch(n.itemSize){case 1:l=zs;break;case 2:case 3:default:l=Hs;break}break}const h=i.interpolation!==void 0?gM[i.interpolation]:Tr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+fi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Wi?mM:wd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bM(r,e,t){const n=e.attributes,i=new yn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){const h=yc(Ps[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new E,c=new E;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=yc(Ps[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Jh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Mc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Yn(r,e),bM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xM(r,e.targets,t):r})}const eu=new Map;function Dt(r){let e=eu.get(r);return e||(e=new En({color:r}),eu.set(r,e)),e}let ja=null;function TM(){return ja||(ja={thatch:Fv(),stone:Bv(),planks:Ov(),plaster:kv()}),ja}const tu=new Map;function AM(r,e){const t=r+"|"+e;let n=tu.get(t);if(!n){const i=TM()[r],s=new ue(e).multiplyScalar(1.28);n=new ti({color:s,map:i.map,normalMap:i.normalMap,normalScale:new fe(.85,.85),roughness:.95,metalness:0}),tu.set(t,n)}return n}function EM(r){switch(r){case Q.thatch:case Q.thatchDark:case Q.wheat:return"thatch";case Q.stone:case Q.stoneDark:return"stone";case Q.plank:case Q.wood:case Q.woodDark:return"planks";case Q.cream:case Q.cloth:case 13482902:case 13218441:case 12888184:case 14272931:return"plaster";default:return null}}function RM(r,e){const t=ii(e??8947848,.62);return r.traverse(n=>{if(!n.isMesh)return;const i=n.material?.color?.getHex?.();if(i===void 0)return;let s=EM(i);s===null&&i===t&&(s="planks"),s&&(n.material=AM(s,i))}),r}const nu=new Map;function Ai(r,e){let t=nu.get(r);return t||(t=e(),nu.set(r,t)),t}function de(r,e,t,n){const i=new De(Ai(`b${r},${e},${t}`,()=>new ri(r,e,t)),Dt(n));return i.castShadow=!0,i}function mt(r,e,t,n,i=7){const s=new De(Ai(`c${r},${e},${t},${i}`,()=>new Sn(r,e,t,i)),Dt(n));return s.castShadow=!0,s}function Pn(r,e,t,n=7){const i=new De(Ai(`k${r},${e},${n}`,()=>new Dn(r,e,n)),Dt(t));return i.castShadow=!0,i}function $t(r,e,t=0){const n=new De(Ai(`s${r},${t}`,()=>new ei(r,t)),Dt(e));return n.castShadow=!0,n}const Q={skin:14262379,wood:9069114,woodDark:7031336,plank:11041871,thatch:13215836,thatchDark:11571013,stone:10328720,stoneDark:8157810,cream:15260864,cloth:12101768,leaf:4881466,leafDark:3827248,gold:15251747,berry:12729147,metal:12106948,metalDark:7238264,soil:7032627,wheat:14070606};function ii(r,e){const t=new ue(r);return t.multiplyScalar(e),t.getHex()}function Kc(r,{torsoColor:e,legColor:t,headgear:n}={}){const i=new Te,s=e??r,o=t??5917240,a={};for(const u of[-1,1]){const d=new Te;d.position.set(u*.16,.82,0);const f=de(.2,.8,.24,o);f.position.y=-.4,d.add(f),i.add(d),a[u<0?"lLeg":"rLeg"]=d}const c=de(.62,.72,.4,s);c.position.y=1.18,i.add(c);const l=de(.64,.1,.42,3812378);l.position.y=.86,i.add(l);const h=$t(.24,Q.skin,1);h.position.y=1.74,i.add(h),a.head=h,n&&(n.position.y=1.74,i.add(n),a.hat=n);for(const u of[-1,1]){const d=new Te;d.position.set(u*.4,1.46,0);const f=de(.17,.62,.2,s);f.position.y=-.28,d.add(f);const m=$t(.09,Q.skin,0);m.position.y=-.6,d.add(m),i.add(d),a[u<0?"lArm":"rArm"]=d}return i.userData.limbs=a,i}function CM(r){const e=Kc(r,{torsoColor:Q.cloth}),t=de(.66,.16,.44,r);t.position.y=1.32,t.rotation.z=.18,e.add(t);const n=new Te,i=mt(.035,.035,.62,Q.woodDark,5);i.rotation.x=Math.PI/2,n.add(i);const s=de(.06,.18,.22,Q.metal);return s.position.set(0,.08,.26),n.add(s),n.position.set(0,-.6,.1),e.userData.limbs.rArm.add(n),e.userData.tool=n,e}function iu(r){const e=Pn(.26,.3,Q.metalDark,7);e.position.y=.16;const t=new Te;t.add(e);const n=Kc(r,{torsoColor:r,headgear:t}),i=new Te,s=de(.06,.7,.1,Q.metal);s.position.y=-.35,s.rotation.x=Math.PI,i.add(s);const o=de(.2,.05,.12,Q.woodDark);i.add(o),i.position.set(0,-.62,0),i.rotation.x=-Math.PI*.45,n.userData.limbs.rArm.add(i);const a=mt(.3,.3,.07,ii(r,.75),8);a.rotation.z=Math.PI/2,a.position.set(-.14,-.35,.1);const c=$t(.08,Q.metal,0);return c.position.set(-.2,-.35,.1),n.userData.limbs.lArm.add(a,c),n}function PM(r){const e=Pn(.27,.34,ii(r,.8),7);e.position.y=.12;const t=new Te;t.add(e);const n=Kc(r,{torsoColor:7043658,headgear:t}),i=de(.66,.14,.44,r);i.position.y=1.3,i.rotation.z=-.2,n.add(i);const s=new De(Ai("bow",()=>new zc(.42,.035,5,10,Math.PI)),Dt(Q.woodDark));s.castShadow=!0,s.rotation.y=Math.PI/2,s.rotation.z=Math.PI/2,s.position.set(0,-.55,.05),n.userData.limbs.lArm.add(s);const o=mt(.09,.09,.46,Q.wood,6);return o.position.set(.18,1.3,-.26),o.rotation.x=.3,n.add(o),n}function IM(r){const e=new Te,t={},n=7229235,i=de(.62,.62,1.5,n);i.position.y=1,e.add(i);const s=de(.3,.6,.34,n);s.position.set(0,1.45,.72),s.rotation.x=.45,e.add(s);const o=de(.26,.28,.52,6111529);o.position.set(0,1.74,.95),e.add(o);let a=0;for(const g of[.55,-.55])for(const v of[-.22,.22]){const x=new Te;x.position.set(v,.78,g);const y=de(.16,.78,.18,6111529);y.position.y=-.39,x.add(y),e.add(x),t["hLeg"+a++]=x}const c=de(.12,.5,.14,4008986);c.position.set(0,1.05,-.85),c.rotation.x=-.5,e.add(c);const l=de(.7,.3,1.2,r);l.position.y=1.22,e.add(l);const h=de(.42,.56,.34,ii(r,.85));h.position.set(0,1.78,-.1),e.add(h);const u=$t(.2,Q.skin,1);u.position.set(0,2.2,-.1),e.add(u);const d=Pn(.22,.28,Q.metal,7);d.position.set(0,2.38,-.1),e.add(d);const f=new Te;f.position.set(.3,1.95,-.1);const m=de(.14,.4,.16,ii(r,.85));m.position.y=-.18,f.add(m);const _=mt(.03,.05,1.7,Q.plank,5);_.rotation.x=Math.PI/2-.12,_.position.set(0,-.3,.5),f.add(_);const p=Pn(.06,.18,Q.metal,5);return p.rotation.x=Math.PI/2,p.position.set(0,-.2,1.36),f.add(p),e.add(f),t.rArm=f,e.userData.limbs=t,e.userData.isMounted=!0,e}function LM(r){const e=new Te,t=de(1.1,.26,1.7,Q.wood);t.position.y=.5,e.add(t);for(const h of[.6,-.6])for(const u of[-.62,.62]){const d=mt(.34,.34,.14,Q.woodDark,9);d.rotation.z=Math.PI/2,d.position.set(u,.34,h),e.add(d)}for(const h of[-.4,.4]){const u=de(.12,.9,.14,Q.woodDark);u.position.set(h,.95,.1),e.add(u)}const n=mt(.06,.06,.92,Q.woodDark,6);n.rotation.z=Math.PI/2,n.position.set(0,1.3,.1),e.add(n);const i=new Te;i.position.set(0,1.3,.1);const s=de(.14,.14,1.9,Q.plank);s.position.z=-.55,i.add(s);const o=mt(.22,.16,.18,Q.woodDark,7);o.position.set(0,.06,-1.45),i.add(o);const a=de(.4,.4,.3,Q.stoneDark);a.position.z=.5,i.add(a),i.rotation.x=-.5,e.add(i);const c=mt(.025,.025,.7,Q.woodDark,4);c.position.set(.5,1.1,-.75),e.add(c);const l=de(.3,.18,.02,r);return l.position.set(.65,1.32,-.75),e.add(l),e.userData.limbs={throwArm:i},e.userData.isMachine=!0,e}const DM={villager:CM,militia:iu,spearman:iu,archer:PM,knight:IM,catapult:LM,fishingboat:r=>jM(r)};function bd(r,e=4){return ji(r,e)}function ji(r,e=4){const t=new Te,n=mt(.05,.05,e,Q.woodDark,5);n.position.y=e/2,t.add(n);const i=de(.9,.55,.04,r);return i.position.set(.48,e-.35,0),t.add(i),t}function NM(r){const e=new Te,t=7.2,n=de(t+.6,.5,t+.6,Q.stone);n.position.y=.25,e.add(n);const i=de(t-1.2,2.6,t-1.2,Q.cream);i.position.y=1.8,e.add(i);for(const u of[-6/2,(t-1.2)/2])for(const d of[-6/2,(t-1.2)/2]){const f=de(.34,2.6,.34,Q.woodDark);f.position.set(u,1.8,d),e.add(f)}const s=de(t-2.6,1.5,t-2.6,14272931);s.position.y=3.85,e.add(s);const o=Pn((t-1.4)*.78,2.4,Q.thatch,4);o.position.y=5.7,o.rotation.y=Math.PI/4,e.add(o);const a=Pn(.5,.8,r,4);a.position.y=7.1,a.rotation.y=Math.PI/4,e.add(a);const c=Pn(t*.74,1.1,Q.thatchDark,4);c.position.y=3.55,c.rotation.y=Math.PI/4,e.add(c);const l=de(1.3,1.6,.2,Q.woodDark);l.position.set(0,1.05,(t-1.2)/2+.05),e.add(l);const h=ji(r,5.2);return h.position.set(t/2-.5,.5,t/2-.5),e.add(h),e}function UM(r){const e=new Te,t=de(3.2,1.7,2.8,Q.cream);t.position.y=.95,e.add(t);const n=new De(Ai("gable3.8",()=>{const c=new Sn(1.55,1.55,3.8,3,1);return c.rotateZ(Math.PI/2),c.rotateX(Math.PI/6+Math.PI/2),c}),Dt(Q.thatch));n.castShadow=!0,n.scale.set(1,.72,1.05),n.position.y=2.1,e.add(n);const i=de(.7,1.1,.15,Q.woodDark);i.position.set(.5,.65,1.45),e.add(i);const s=de(.5,.45,.12,4863264);s.position.set(-.8,1.2,1.45),e.add(s);const o=de(.4,1,.4,Q.stoneDark);o.position.set(-1.1,2.5,0),e.add(o);const a=de(3.3,.16,2.9,r);return a.position.y=1.75,e.add(a),e}function $a(r){const e=new Te,t=de(3,1.6,3,Q.plank);t.position.y=.9,e.add(t);const n=de(3.5,.25,3.5,Q.woodDark);n.position.y=1.85,e.add(n);const i=de(2.2,.25,2.2,Q.wood);i.position.y=2.35,e.add(i);const s=de(.7,.7,.7,Q.wood);s.position.set(1.7,.45,1),e.add(s);const o=de(.55,.55,.55,Q.plank);o.position.set(1.85,.35,.1),e.add(o);const a=$t(.4,Q.cloth,1);a.scale.y=.75,a.position.set(-1.7,.3,1.2),e.add(a);const c=de(3.1,.14,3.1,r);return c.position.y=1.62,e.add(c),e}function FM(r){const e=new Te,t=de(5,2.2,4.4,13482902);t.position.y=1.25,e.add(t);const n=new De(Ai("gable5.6",()=>{const o=new Sn(2.3,2.3,5.6,3,1);return o.rotateZ(Math.PI/2),o.rotateX(Math.PI/6+Math.PI/2),o}),Dt(ii(r,.62)));n.castShadow=!0,n.scale.set(1,.6,.95),n.position.y=2.95,e.add(n);const i=de(1.5,1.7,.2,Q.woodDark);i.position.set(0,.95,2.25),e.add(i);for(const o of[-1.6,1.6]){const a=mt(.42,.42,.1,r,8);a.rotation.x=Math.PI/2,a.position.set(o,1.6,2.26),e.add(a)}const s=ji(r,4);return s.position.set(2.2,0,-1.8),e.add(s),e}function BM(){const r=new Te,e=de(3.8,.18,3.8,Q.soil);e.position.y=.09,e.receiveShadow=!0,r.add(e);for(let t=0;t<4;t++){const n=de(.5,.3,3.4,Q.wheat);n.position.set(-1.35+t*.9,.3,0),r.add(n)}for(const[t,n]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){const i=mt(.07,.07,.7,Q.woodDark,5);i.position.set(t,.35,n),r.add(i)}return r}function OM(r){const e=new Te,t=de(4.2,1.9,3.2,13218441);t.position.set(-.5,1.05,-.8),e.add(t);const n=de(4.8,.25,3.8,ii(r,.62));n.position.set(-.5,2.15,-.8),n.rotation.z=.07,e.add(n);const i=mt(.6,.6,.18,15261900,10);i.rotation.x=Math.PI/2,i.position.set(1.9,1,1.6),e.add(i);const s=mt(.36,.36,.2,13777710,10);s.rotation.x=Math.PI/2,s.position.set(1.9,1,1.6),e.add(s);const o=mt(.14,.14,.22,15251747,8);o.rotation.x=Math.PI/2,o.position.set(1.9,1,1.6),e.add(o);const a=de(.15,1,.6,Q.woodDark);a.position.set(1.9,.5,1.6),e.add(a);const c=ji(r,3.6);return c.position.set(-2.4,0,1.2),e.add(c),e}function kM(r){const e=new Te,t=mt(1,1.25,4.6,Q.stone,7);t.position.y=2.3,e.add(t);for(let s=0;s<7;s++){const o=s/7*Math.PI*2,a=de(.34,.4,.34,Q.stoneDark);a.position.set(Math.cos(o)*.95,4.85,Math.sin(o)*.95),e.add(a)}const n=Pn(1.15,1.1,ii(r,.62),7);n.position.y=5.6,e.add(n);const i=de(.3,.5,.3,2760728);return i.position.set(0,3.6,1.05),e.add(i),e}function zM(){const r=new Te;for(let t=-2;t<=2;t++){const n=2.2+t*7919%5*.08,i=mt(.17,.2,n,t%2?Q.wood:Q.woodDark,6);i.position.set(t*.38,n/2,0),r.add(i);const s=Pn(.17,.3,Q.woodDark,6);s.position.set(t*.38,n+.15,0),r.add(s)}const e=de(1.9,.18,.12,Q.plank);return e.position.set(0,1.2,.2),r.add(e),r}function HM(){const r=new Te;for(const n of[-.85,.85]){const i=mt(.22,.26,2.6,Q.woodDark,6);i.position.set(n,1.3,0),r.add(i);const s=Pn(.22,.3,Q.wood,6);s.position.set(n,2.75,0),r.add(s)}const e=de(2.3,.28,.34,Q.plank);e.position.y=2.45,r.add(e);const t=de(1.9,.14,.12,Q.wood);return t.position.set(0,2.05,.12),r.add(t),r}function GM(r){const e=new Te,t=de(5.2,2,3.6,12888184);t.position.set(0,1.1,-.6),e.add(t);const n=new De(Ai("gable5.8",()=>{const a=new Sn(2.1,2.1,5.8,3,1);return a.rotateZ(Math.PI/2),a.rotateX(Math.PI/6+Math.PI/2),a}),Dt(ii(r,.62)));n.castShadow=!0,n.scale.set(1,.62,1),n.position.set(0,2.65,-.6),e.add(n);for(const[a,c]of[[-2.3,1.8],[-.8,2.2],[.8,2.2],[2.3,1.8]]){const l=mt(.07,.07,.8,Q.woodDark,5);l.position.set(a,.4,c),e.add(l)}const i=de(4.6,.1,.1,Q.plank);i.position.set(0,.62,2),e.add(i);const s=$t(.55,Q.wheat,1);s.scale.y=.6,s.position.set(1.9,.3,1.3),e.add(s);const o=ji(r,3.8);return o.position.set(-2.4,0,-2),e.add(o),e}function VM(r){const e=new Te,t=de(5,2.3,4.2,Q.plank);t.position.set(-.3,1.25,0),e.add(t);const n=de(5.8,.28,5,Q.woodDark);n.position.set(-.3,2.55,0),n.rotation.x=.06,e.add(n);const i=de(2.2,1.9,.2,4863264);i.position.set(-.3,1,2.15),e.add(i);const s=mt(.5,.5,.14,Q.woodDark,9);s.rotation.x=Math.PI/2,s.rotation.z=.4,s.position.set(2.6,.52,1),e.add(s);const o=de(.2,.2,2.4,Q.wood);o.position.set(2.5,.2,-.6),o.rotation.y=.5,e.add(o);const a=ji(r,4);return a.position.set(-2.6,0,-1.8),e.add(a),e}const WM={towncenter:NM,house:UM,storehouse:$a,barracks:FM,farm:()=>BM(),archeryrange:OM,tower:kM,wall:()=>zM(),gate:()=>HM(),stable:GM,siegeworkshop:VM,blacksmith:$a,market:$a,dock:$M},Td=Object.fromEntries(Object.entries(WM).map(([r,e])=>[r,t=>RM(e(t),t)]));function XM(){const r=new Te,e=$t(.85,Q.leafDark,1);e.scale.y=.7,e.position.y=.5,r.add(e);const t=$t(.55,Q.leaf,1);t.position.set(.45,.55,.3),r.add(t);for(let n=0;n<7;n++){const i=n/7*Math.PI*2,s=$t(.09,Q.berry,0);s.position.set(Math.cos(i)*.66,.55+Math.sin(n*2.4)*.25,Math.sin(i)*.62),r.add(s)}return r}function qM(){const r=new Te,e=$t(.95,Q.stoneDark,0);e.scale.set(1.1,.75,1),e.position.y=.45,e.rotation.y=.6,r.add(e);const t=$t(.6,Q.stone,0);t.position.set(.55,.35,-.4),r.add(t);for(const[n,i,s,o]of[[.3,.85,.3,.22],[-.5,.6,.4,.18],[0,.45,.8,.16],[-.3,.95,-.3,.15]]){const a=$t(o,Q.gold,0);a.position.set(n,i,s),r.add(a)}return r}function YM(){const r=new Te,e=$t(.9,12170924,0);e.scale.set(1.15,.8,1),e.position.y=.42,e.rotation.y=1.1,r.add(e);const t=$t(.62,10855066,0);t.position.set(-.55,.35,.35),t.rotation.y=.4,r.add(t);const n=de(.7,.35,.5,12894646);return n.position.set(.5,.2,-.5),n.rotation.y=.7,r.add(n),r}function KM(){const r=new Te;for(const[t,n,i]of[[.4,.2,.5],[-.5,-.3,-.9],[.1,-.6,2.1],[-.2,.55,3.4]]){const s=new De(new Dn(.16,.42,4),Dt(5930901));s.position.set(t,.14,n),s.rotation.set(.35,i,.5),r.add(s)}const e=new De(new Ur(.7,.85,20),new Pt({color:13625077,transparent:!0,opacity:.4,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.05,r.add(e),r}function jM(r){const e=new Te,t=de(.9,.45,2.1,Q.woodDark);t.position.y=.28,e.add(t);const n=de(.78,.1,1.9,Q.plank);n.position.y=.55,e.add(n);const i=new De(new Dn(.42,.7,4),Dt(Q.woodDark));i.rotation.x=Math.PI/2,i.rotation.y=Math.PI/4,i.position.set(0,.32,1.35),e.add(i);const s=mt(.05,.06,1.6,Q.plank,5);s.position.y=1.35,e.add(s);const o=de(.1,.7,.55,r??15261900);return o.position.set(0,1.45,-.1),e.add(o),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.userData.limbs={},e}function $M(r){const e=new Te,t=de(3.6,.28,3.6,Q.plank);t.position.y=.62,e.add(t);for(const[o,a]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5],[0,-1.5],[0,1.5]]){const c=mt(.14,.17,1.5,Q.woodDark,6);c.position.set(o,.1,a),e.add(c)}const n=de(1.5,1.1,1.2,Q.wood);n.position.set(-.7,1.3,-.7),e.add(n);const i=new De(new Dn(1.25,.8,4),Dt(Q.thatch));i.rotation.y=Math.PI/4,i.position.set(-.7,2.25,-.7),e.add(i);const s=ji(r,2.2);return s.position.set(1.3,.7,1.3),e.add(s),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e}function ZM(r){const e=new Te,t=r*2-.6;for(const[o,a]of[[-t/2,-t/2],[t/2,-t/2],[-t/2,t/2],[t/2,t/2]]){const c=mt(.08,.08,2.4,Q.plank,5);c.position.set(o,1.2,a),e.add(c)}const n=de(t,.1,.3,Q.plank);n.position.set(0,1.7,-t/2),e.add(n);const i=de(.3,.1,t,Q.plank);i.position.set(t/2,2,0),e.add(i);const s=de(.9,.4,.6,Q.wood);return s.position.set(.2,.2,.1),e.add(s),e}function QM(r,e){const t=Wc,n=new Ln(Le,Le,t,t);n.rotateX(-Math.PI/2);const i=n.attributes.position,s=new Float32Array(i.count*3),o=new ue(6400073),a=new ue(8174937),c=new ue(10267480),l=new ue(9072456),h=new ue(13481847),u=new ue(9276032),d=new ue;for(let g=0;g<i.count;g++){const v=i.getX(g)+Le/2,x=i.getZ(g)+Le/2,y=e.heightAt(v,x);i.setX(g,v),i.setZ(g,x),i.setY(g,y);const C=e.moistureAt(v,x),T=(e.noise2(v*.9,x*.9)-.5)*.1;y<Gt+.35?d.copy(h):y>2.6?d.copy(u).lerp(c,Math.max(0,3.8-y)/1.2):(d.copy(o).lerp(a,C),C<.22&&d.lerp(c,(.22-C)*2),C>.85&&d.lerp(l,(C-.85)*1.2)),d.offsetHSL(0,0,T),s[g*3]=d.r,s[g*3+1]=d.g,s[g*3+2]=d.b}n.setAttribute("color",new Mt(s,3)),n.computeVertexNormals();const f=Uv();f.map.repeat.set(72,72),f.normalMap.wrapS=f.normalMap.wrapT=Jn,f.normalMap.repeat.set(72,72);const m=new De(n,new ti({vertexColors:!0,map:f.map,normalMap:f.normalMap,normalScale:new fe(.6,.6),roughness:1,metalness:0}));m.receiveShadow=!0,m.name="terrain",r.add(m);const _=Hv();_.repeat.set(34,34);const p=new De(new Ln(Le,Le),new ti({color:3504061,transparent:!0,opacity:.78,roughness:.18,metalness:.05,normalMap:_,normalScale:new fe(.55,.55)}));return p.rotation.x=-Math.PI/2,p.position.set(Le/2,Gt-.12,Le/2),r.add(p),JM(r,e),{ground:m,water:p,waterNormalTex:_}}function JM(r,e){let t=(e.seed^1592651789)>>>0;const n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),i=(s,o,a,c,l,h)=>{const u=o(),d=new ks(u,Dt(a),s);d.castShadow=!0;const f=new Ae,m=new Bt,_=new Zt;let p=0,g=0;for(;p<s&&g++<s*12;){const v=n()*Le,x=n()*Le,[y,C]=e.worldToGrid(v,x);if(!e.isWalkable(y,C)||e.occupantAt(y,C))continue;const T=e.heightAt(v,x),A=l+n()*(h-l);_.set(0,n()*Math.PI*2,0),m.setFromEuler(_),f.compose(new E(v,T+c*A,x),m,new E(A,A,A)),d.setMatrixAt(p++,f)}d.count=p,d.instanceMatrix.needsUpdate=!0,r.add(d)};i(180,()=>new ei(.5,0),9276032,.18,.3,1.1),i(220,()=>new ei(.45,0),5603391,.3,.5,1),i(260,()=>new Dn(.1,.35,5),14210126,.16,.7,1.3),i(140,()=>new Dn(.12,.4,5),12872330,.18,.7,1.2)}const su=[5213242,6266952,4160057,6989902,4554556,5672770,3764271],ey=[{file:"tree_default",scale:2.6},{file:"tree_oak",scale:3.4},{file:"tree_detailed",scale:3.1},{file:"tree_fat",scale:3.6},{file:"tree_pineDefaultA",scale:2.7},{file:"tree_pineRoundB",scale:3.2},{file:"tree_pineTallB_detailed",scale:2.4}];function Za(r,e){const t=r.index?r.toNonIndexed():r,n=t.attributes.position,i=new Float32Array(n.count*2),s=new E,o=new E,a=new E,c=new E,l=new E,h=new E;for(let u=0;u<n.count;u+=3){s.fromBufferAttribute(n,u),o.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),c.subVectors(o,s),l.subVectors(a,s),h.crossVectors(c,l);const d=Math.abs(h.x),f=Math.abs(h.y),m=Math.abs(h.z);for(let _=0;_<3;_++){const p=_===0?s:_===1?o:a;let g,v;d>=f&&d>=m?(g=p.z,v=p.y):f>=d&&f>=m?(g=p.x,v=p.z):(g=p.x,v=p.y),i[(u+_)*2]=g*e,i[(u+_)*2+1]=v*e}}return t.setAttribute("uv",new Mt(i,2)),t}class ty{constructor(e,t=1e3){this.scene=e,this.capacity=t,this.zero=new Ae().makeScale(0,0,0),this.tmpM=new Ae,this.tmpC=new ue,this.next=0,this.species=[],this.pickMeshes=[],this.ready=!1;const n=zv();this.leafMat=new ti({color:16777215,map:n.map,normalMap:n.normalMap,normalScale:new fe(.9,.9),roughness:.92,metalness:0})}_addMesh(e,t,n,i){const s=new ks(e,t,this.capacity);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,s.count=this.capacity;for(let o=0;o<this.capacity;o++)s.setMatrixAt(o,this.zero);return this.scene.add(s),this.pickMeshes.push(s),{inst:s,isLeaf:n,baseColor:i}}async load(){const e="/aoge/models/nature/";try{const t=new Yc;await Promise.all(ey.map(async(n,i)=>{const s=await t.loadAsync(e+n.file+".glb");s.scene.updateMatrixWorld(!0);const o=[];s.scene.traverse(a=>{if(!a.isMesh)return;const c=a.geometry.clone();if(c.applyMatrix4(a.matrixWorld),/leaf|foliage/i.test(a.material?.name||"")){const h=Za(c,1.9/n.scale);o.push(this._addMesh(h,this.leafMat,!0,new ue(su[i%su.length])))}else{const h=new En({color:8017206});o.push(this._addMesh(c,h,!1,null))}}),this.species[i]={parts:o,scale:n.scale}})),this.species=this.species.filter(Boolean),this.ready=this.species.length>0}catch{this._buildFallback()}return this.ready||this._buildFallback(),this.ready}_buildFallback(){if(this.ready)return;const e=new Sn(.16,.26,1.4,6);e.translate(0,.7,0);const t=new Dn(1.05,2.9,7);t.translate(0,2.6,0);const n=new ei(1.25,0);n.scale(1,1.15,1),n.translate(0,2.5,0),this.species=[{scale:1,parts:[this._addMesh(e,Dt(Q.woodDark),!1,null),this._addMesh(Za(t,.6),this.leafMat,!0,new ue(3829824))]},{scale:1,parts:[this._addMesh(e.clone(),Dt(Q.woodDark),!1,null),this._addMesh(Za(n,.6),this.leafMat,!0,new ue(5607486))]}],this.ready=!0}add(e,t,n,i){if(!this.ready)return null;const s=this.next++;if(s>=this.capacity)return null;const o=this.species[Math.floor(i*997)%this.species.length],a=o.scale*(.82+i*7919%1*.42),c=i*31.4;this.tmpM.makeRotationY(c),this.tmpM.scale(new E(a,a*(.9+i*131%1*.3),a)),this.tmpM.setPosition(e,t,n);const l=.82+i*53%1*.4;for(const h of o.parts)h.inst.setMatrixAt(s,this.tmpM),h.isLeaf&&h.baseColor&&(this.tmpC.copy(h.baseColor).multiplyScalar(l),h.inst.setColorAt(s,this.tmpC));return{idx:s,species:o,matrix:this.tmpM.clone(),hidden:!1}}remove(e){if(e){e.matrix=null;for(const t of e.species.parts)t.inst.setMatrixAt(e.idx,this.zero),t.inst.instanceMatrix.needsUpdate=!0}}setHidden(e,t){if(!(!e||!e.matrix||e.hidden===t)){e.hidden=t;for(const n of e.species.parts)n.inst.setMatrixAt(e.idx,t?this.zero:e.matrix),n.inst.instanceMatrix.needsUpdate=!0}}flush(){const e=Math.max(1,this.next);for(const t of this.pickMeshes)t.count=e,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}const Ad=new Ur(.75,.95,24);Ad.rotateX(-Math.PI/2);const ny=new Pt({color:5111646,transparent:!0,opacity:.85,depthWrite:!1}),iy=new Pt({color:16731450,transparent:!0,opacity:.85,depthWrite:!1});function Ed(r,e=!0){const t=new De(Ad,e?ny:iy);return t.scale.setScalar(r),t.renderOrder=2,t}const sy=new Mi({color:2363408,depthTest:!1}),ru=[new Mi({color:4641845,depthTest:!1}),new Mi({color:15253536,depthTest:!1}),new Mi({color:13907232,depthTest:!1})];class Rd{constructor(e,t=1.5,n=2.4){this.group=new Te,this.width=t,this.bg=new Cr(sy),this.bg.scale.set(t,.16,1),this.fg=new Cr(ru[0]),this.fg.center.set(0,.5),this.fg.position.x=-t/2,this.fg.scale.set(t,.12,1),this.group.add(this.bg,this.fg),this.group.position.y=n,this.group.renderOrder=5,this.group.visible=!1,e.add(this.group)}set(e,t){if(this.group.visible=t,!t)return;const n=Math.max(.001,Math.min(1,e));this.fg.scale.x=this.width*n,this.fg.material=ru[n>.55?0:n>.25?1:2]}}const ry=new ri(.05,.05,.85),oy=new ei(.3,0),ay=new ei(.22,0),cy=new ri(1,.7,1),ly=new En({color:9143671}),So=new E,wo=new E,bo=new Map;function hy(r){let e=bo.get(r);if(e)return e;const t=document.createElement("canvas");t.width=96,t.height=48;const n=t.getContext("2d");return n.font="bold 30px Trebuchet MS, sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="rgba(0,0,0,.85)",n.lineWidth=5,n.strokeText(String(r),48,24),n.fillStyle="#ffd24a",n.fillText(String(r),48,24),e=new Ti(t),bo.size>120&&bo.clear(),bo.set(r,e),e}class uy{constructor(e,t){this.scene=e,this.game=t,this.projectiles=[],this.particles=[],this.fades=[],this.smokes=[],this.smokeTex=Vv()}spawnSmoke(e,t,n,i=!1,s=1){const o=new Cr(new Mi({map:this.smokeTex,color:i?3025446:14211288,transparent:!0,opacity:i?.5:.32,depthWrite:!1}));o.position.set(e+(Math.random()-.5)*.4,t,n+(Math.random()-.5)*.4),o.scale.setScalar(.6*s),this.scene.add(o),this.smokes.push({m:o,t:0,life:2+Math.random()*1.2,rise:1+Math.random()*.6,drift:(Math.random()-.5)*.5,grow:(1.1+Math.random()*.7)*s,o0:o.material.opacity})}updateBuildingSmoke(e){for(const t of this.game.buildings){if(t.dead||!t.complete||(t.smokeT=(t.smokeT??Math.random())-e,t.smokeT>0))continue;if(t.hp<t.maxHp*.55){t.smokeT=t.hp<t.maxHp*.3?.22:.45;const i=t.size;this.spawnSmoke(t.cx+(Math.random()-.5)*i,t.groundY+t.size+.5,t.cz+(Math.random()-.5)*i,!0,1.4)}else t.type==="house"?(t.smokeT=.8+Math.random()*.5,this.spawnSmoke(t.cx-1.1,t.groundY+3.2,t.cz,!1,.8)):t.type==="towncenter"?(t.smokeT=1.1+Math.random()*.6,this.spawnSmoke(t.cx+t.size-.5,t.groundY+2.2,t.cz+t.size-.5,!1,.9)):t.smokeT=2}}fireArrow(e,t,n,i){const s=new De(ry,Dt(5914920));s.position.copy(e),this.scene.add(s),this.projectiles.push({kind:"arrow",mesh:s,target:t,damage:n,attacker:i,speed:26})}fireStone(e,t,n,i,s){const o=new De(oy,Dt(7236192));o.position.copy(e),this.scene.add(o);const a=e.distanceTo(t);this.projectiles.push({kind:"stone",mesh:o,from:e.clone(),to:t.clone(),t:0,dur:Math.max(.7,a/16),arc:4+a*.22,damage:n,splash:i,attacker:s})}puff(e,t=13290186,n=6,i=4){const s=new En({color:t,transparent:!0,opacity:.9});s.userData.refs=n;for(let o=0;o<n;o++){const a=new De(ay,s);a.position.copy(e);const c=new E((Math.random()-.5)*i,Math.random()*i*.8+1,(Math.random()-.5)*i);this.scene.add(a),this.particles.push({mesh:a,vel:c,life:.6+Math.random()*.4,t:0})}}blood(e){this.puff(e,9051922,4,3)}damageNumber(e,t,n,i){if(i<1||this.dmgNums?.length>36)return;const s=new Cr(new Mi({map:hy(Math.round(i)),depthTest:!1,transparent:!0}));s.scale.set(1.7,.85,1),s.position.set(e+(Math.random()-.5)*.6,t,n),s.renderOrder=6,this.scene.add(s),(this.dmgNums=this.dmgNums||[]).push({s,t:0})}spawnRubble(e,t,n,i){const s=new Te,o=3+i*2;for(let a=0;a<o;a++){const c=new De(cy,ly),l=.3+Math.random()*.5*i;c.scale.set(l,l*.5,l),c.position.set((Math.random()-.5)*i*1.6,l*.2,(Math.random()-.5)*i*1.6),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,s.add(c)}s.position.set(e,t,n),this.scene.add(s),(this.rubble=this.rubble||[]).push({g:s,t:0})}fadeOut(e,t=1.6,n=1.2,i=null){e.traverse(s=>{s.castShadow!==void 0&&(s.castShadow=!1)}),this.fades.push({obj:e,t:0,dur:t,sink:n,y0:e.position.y,mixer:i})}update(e){const t=this.game;this.updateBuildingSmoke(e);for(let n=this.smokes.length-1;n>=0;n--){const i=this.smokes[n];if(i.t+=e,i.t>=i.life){this.scene.remove(i.m),i.m.material.dispose(),this.smokes.splice(n,1);continue}const s=i.t/i.life;i.m.position.y+=i.rise*e,i.m.position.x+=i.drift*e,i.m.scale.setScalar(.6+i.grow*s),i.m.material.opacity=i.o0*(1-s*s)}for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];if(i.kind==="arrow"){const s=i.target;if(!s||s.dead){this.scene.remove(i.mesh),this.projectiles.splice(n,1);continue}So.set(s.isBuilding?s.cx:s.x,s.isBuilding?s.groundY+1.6:s.group.position.y+1.1,s.isBuilding?s.cz:s.z),wo.copy(So).sub(i.mesh.position);const o=wo.length(),a=i.speed*e;o<=a+.2?(t.applyDamage(s,i.damage,i.attacker),this.blood(So),this.scene.remove(i.mesh),this.projectiles.splice(n,1)):(wo.normalize(),i.mesh.position.addScaledVector(wo,a),i.mesh.lookAt(So))}else{i.t+=e;const s=Math.min(1,i.t/i.dur);i.mesh.position.lerpVectors(i.from,i.to,s),i.mesh.position.y+=Math.sin(s*Math.PI)*i.arc,i.mesh.rotation.x+=e*6,s>=1&&(t.splashDamage(i.to,i.splash,i.damage,i.attacker),this.puff(i.to,10127984,10,6),this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.t+=e,i.t>=i.life){this.scene.remove(i.mesh);const o=i.mesh.material;o.userData.refs!==void 0&&--o.userData.refs<=0&&o.dispose(),this.particles.splice(n,1);continue}i.vel.y-=9*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.material.opacity=.9*(1-i.t/i.life);const s=1+i.t*1.5;i.mesh.scale.setScalar(s)}if(this.dmgNums)for(let n=this.dmgNums.length-1;n>=0;n--){const i=this.dmgNums[n];if(i.t+=e,i.t>1.1){this.scene.remove(i.s),i.s.material.dispose(),this.dmgNums.splice(n,1);continue}i.s.position.y+=e*1.6,i.s.material.opacity=1-Math.max(0,i.t-.5)/.6}if(this.rubble)for(let n=this.rubble.length-1;n>=0;n--){const i=this.rubble[n];i.t+=e,i.t>22&&(i.g.position.y-=e*.5,i.t>26&&(this.scene.remove(i.g),this.rubble.splice(n,1)))}for(let n=this.fades.length-1;n>=0;n--){const i=this.fades[n];i.t+=e,i.mixer&&i.mixer.update(e);const s=i.t/i.dur;if(s>=1){this.scene.remove(i.obj),this.fades.splice(n,1);continue}i.obj.position.y=i.y0-i.sink*s}}}class dy{constructor(){this.a=[]}get size(){return this.a.length}push(e){const t=this.a;t.push(e);let n=t.length-1;for(;n>0;){const i=n-1>>1;if(t[i].f<=t[n].f)break;[t[i],t[n]]=[t[n],t[i]],n=i}}pop(){const e=this.a,t=e[0],n=e.pop();if(e.length){e[0]=n;let i=0;for(;;){const s=i*2+1,o=s+1;let a=i;if(s<e.length&&e[s].f<e[a].f&&(a=s),o<e.length&&e[o].f<e[a].f&&(a=o),a===i)break;[e[a],e[i]]=[e[i],e[a]],i=a}}return t}}let hr=null;const fy=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.4142],[1,-1,1.4142],[-1,1,1.4142],[-1,-1,1.4142]];function py(r,e,t,n,i,s=9e3,o=-1,a="land"){const c=r.size,l=a==="water",h=l?N=>r.waterWalk[N]===1:N=>r.walk[N]===1||o>=0&&r.gateOwner[N]===o,u=(N,B,H)=>{if(!l)return r.nearestWalkable(N,B,H);for(let W=0;W<=H;W++)for(let G=-W;G<=W;G++)for(let j=-W;j<=W;j++)if(Math.max(Math.abs(j),Math.abs(G))===W&&r.isWater(N+j,B+G))return[N+j,B+G];return null};if(!r.inBounds(e,t))return null;if(!h(t*c+e)){const N=u(e,t,4);if(!N)return null;[e,t]=N}let d=!1;if(!r.inBounds(n,i)||!h(i*c+n)){d=!0;const N=u(n,i,12);if(!N)return null;[n,i]=N}if(e===n&&t===i)return[];(!hr||hr.g.length!==c*c)&&(hr={g:new Float32Array(c*c),parent:new Int32Array(c*c),closed:new Int32Array(c*c),genG:new Int32Array(c*c),gen:0}),hr.gen++;const f=hr,m=f.gen,_=N=>f.genG[N]===m?f.g[N]:1/0,p=(N,B)=>{f.g[N]=B,f.genG[N]=m},g=N=>f.closed[N]===m,v=N=>{f.closed[N]=m},x=N=>f.genG[N]===m?f.parent[N]:-1,y=new dy,C=(N,B)=>{const H=Math.abs(N-n),W=Math.abs(B-i);return Math.max(H,W)+.4142*Math.min(H,W)},T=t*c+e;p(T,0),f.parent[T]=-1,y.push({i:T,x:e,y:t,f:C(e,t)});let A=T,I=C(e,t),w=0;for(;y.size&&w++<s;){const N=y.pop();if(g(N.i))continue;v(N.i);const B=C(N.x,N.y);if(B<I&&(I=B,A=N.i),N.x===n&&N.y===i){A=N.i;break}for(const[H,W,G]of fy){const j=N.x+H,V=N.y+W;if(j<0||V<0||j>=c||V>=c)continue;const ae=V*c+j;if(g(ae)||!h(ae)||H!==0&&W!==0&&(!h(N.y*c+j)||!h(V*c+N.x)))continue;const me=_(N.i)+G;me<_(ae)&&(p(ae,me),f.parent[ae]=N.i,y.push({i:ae,x:j,y:V,f:me+C(j,V)}))}}const M=[];let P=A;if(P===T&&!(d||I<C(e,t)))return null;for(;P!==T&&P>=0;)M.push([P%c,P/c|0]),P=x(P);return M.reverse(),gy(r,e,t,M,o,a)}function my(r,e,t,n,i,s=-1,o="land"){const a=o==="water"?(_,p)=>r.isWater(_,p):(_,p)=>s>=0?r.isWalkableFor(_,p,s):r.isWalkable(_,p);let c=Math.abs(n-e),l=Math.abs(i-t);const h=e<n?1:-1,u=t<i?1:-1;let d=c-l,f=e,m=t;for(;;){if(!a(f,m))return!1;if(f===n&&m===i)return!0;const _=2*d;if(_>-l){if(_<c&&!(a(f+h,m)&&a(f,m+u)))return!1;d-=l,f+=h}_<c&&(d+=c,m+=u)}}function gy(r,e,t,n,i=-1,s="land"){if(n.length<3)return n;const o=[];let a=e,c=t,l=0;for(;l<n.length;){let h=l;for(let u=n.length-1;u>l;u--)if(!(u-l>40)&&my(r,a,c,n[u][0],n[u][1],i,s)){h=u;break}o.push(n[h]),[a,c]=n[h],l=h+1}return o}function _y(r){const e=new Map,t=new Map,n=r.clone();return Cd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Cd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Cd(r.children[n],e.children[n],t)}const Pd={villager:{file:"Rogue",height:1.75,weaponR:"axe_1handed"},militia:{file:"Barbarian",height:1.85,weaponR:"axe_1handed",weaponL:"shield_round_barbarian"},spearman:{file:"Barbarian",height:1.85,weaponR:"spear_proc"},archer:{file:"Ranger",height:1.8,weaponL:"bow_withString"},knight:{file:"Knight",height:1.95,weaponR:"sword_1handed",weaponL:"shield_round"}},xy=["axe_1handed","sword_1handed","bow_withString","shield_round","shield_round_barbarian"],_r=new Map;let Qa,Ja;function vy(){Qa=Qa||new ti({color:9069112,roughness:.9}),Ja=Ja||new ti({color:12174028,metalness:.7,roughness:.35});const r=new Te,e=new De(new Sn(.035,.04,1.7,6),Qa);e.position.y=.5;const t=new De(new Dn(.075,.3,6),Ja);return t.position.y=.5+.85+.15,e.castShadow=t.castShadow=!0,r.add(e,t),r}const My={idle:"Idle_A",walk:"Running_A",work:"Interact",melee:"CombatMelee",shoot:"CombatBow",death:"Death_A"},Ko=new Map;let No=new Map,Sc=!1;function yy(r,e,t){return Promise.race([r,new Promise((n,i)=>setTimeout(()=>i(new Error("timeout: "+t)),e))])}async function Sy(){const r="/aoge/models/units/",e=new Yc;try{const t=[...new Set(Object.values(Pd).map(n=>n.file))];await Promise.all(t.map(async n=>{const s=(await e.loadAsync(r+n+".glb")).scene,o=new yn().setFromObject(s);s.traverse(a=>{(a.isMesh||a.isSkinnedMesh)&&(a.castShadow=!0,a.frustumCulled=!1)}),Ko.set(n,{scene:s,height:o.max.y-o.min.y})}));for(const n of["Rig_Medium_General","Rig_Medium_MovementBasic"]){const i=await e.loadAsync(r+n+".glb");for(const s of i.animations)No.set(s.name,s)}Sc=Ko.size>0&&No.size>0,await Promise.all(xy.map(async n=>{try{const i=await yy(e.loadAsync(r+"weapons/"+n+".glb"),1e4,n);i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),_r.set(n,i.scene)}catch{}}));try{for(const n of by())No.set(n.name,n)}catch(n){console.warn("combat clips failed:",n.message)}}catch(t){return console.warn("unit pack unavailable:",t.message),!1}return Sc}function wy(){const r=Ko.values().next().value;if(!r)return null;r.scene.updateMatrixWorld(!0);const e={},t=["chest","spine","upperarmr","lowerarmr","handr","upperarml","lowerarml","handl","head"];for(const n of t){const i=r.scene.getObjectByName(n);if(!i)continue;const s=new Bt;i.parent.getWorldQuaternion(s),e[n]={local:i.quaternion.clone(),parentWorld:s,invParent:s.clone().invert()}}return e}function ou(r,e,t){const n=[],i=new E;for(const s of t){const o=e[s.bone];if(!o)continue;i.set(s.axis[0],s.axis[1],s.axis[2]).normalize();const a=[],c=[];for(const[l,h]of s.keys){const u=new Bt().setFromAxisAngle(i,h),d=o.invParent.clone().multiply(u).multiply(o.parentWorld).multiply(o.local);a.push(l),c.push(d.x,d.y,d.z,d.w)}n.push(new Wi(s.bone+".quaternion",a,c))}return new Yo(r,-1,n)}function by(){const r=wy();if(!r)return[];const e=[1,0,0],t=[0,1,0],n=ou("CombatMelee",r,[{bone:"upperarmr",axis:e,keys:[[0,0],[.18,-1.45],[.36,1.15],[.55,.5],[.8,0]]},{bone:"lowerarmr",axis:e,keys:[[0,0],[.18,-.9],[.36,.25],[.8,0]]},{bone:"chest",axis:t,keys:[[0,0],[.18,.3],[.36,-.28],[.8,0]]},{bone:"spine",axis:t,keys:[[0,0],[.36,-.15],[.8,0]]}]),i=ou("CombatBow",r,[{bone:"upperarml",axis:e,keys:[[0,0],[.28,1.35],[.7,1.35],[.95,0]]},{bone:"lowerarml",axis:e,keys:[[0,0],[.28,.2],[.95,0]]},{bone:"upperarmr",axis:t,keys:[[0,0],[.3,.55],[.62,.55],[.7,.2],[.95,0]]},{bone:"lowerarmr",axis:e,keys:[[0,0],[.3,1.5],[.62,1.55],[.7,.3],[.95,0]]},{bone:"chest",axis:t,keys:[[0,0],[.3,-.35],[.62,-.35],[.95,0]]}]);return[n,i]}const au=new Map;function Ty(r,e,t){const n=t+"|"+r.uuid;let i=au.get(n);return i||(i=r.clone(),i.color&&i.color.lerp(new ue(e),.45),au.set(n,i)),i}function Ay(r,e){if(!Sc)return null;const t=Pd[r];if(!t)return null;const n=Ko.get(t.file);if(!n)return null;const i=_y(n.scene),s=t.height/(n.height||t.height);i.scale.setScalar(s),i.rotation.y=Math.PI;const o=r+"|"+e;if(i.traverse(l=>{(l.isMesh||l.isSkinnedMesh)&&l.material&&(l.material=Ty(l.material,e,o))}),t.weaponR==="spear_proc"){const l=i.getObjectByName("handslotr");l&&l.add(vy())}else if(t.weaponR&&_r.has(t.weaponR)){const l=i.getObjectByName("handslotr");l&&l.add(_r.get(t.weaponR).clone(!0))}if(t.weaponL&&_r.has(t.weaponL)){const l=i.getObjectByName("handslotl");l&&l.add(_r.get(t.weaponL).clone(!0))}const a=new uv(i),c={};for(const[l,h]of Object.entries(My)){const u=No.get(h);u&&(c[l]=a.clipAction(u))}return c.death&&(c.death.setLoop(Ou),c.death.clampWhenFinished=!0),{model:i,mixer:a,actions:c}}let Ey=1;const Id=new Pt({colorWrite:!1,depthWrite:!1}),cu=new Map;function Ry(r,e){const t=r.toFixed(2)+"x"+e.toFixed(2);let n=cu.get(t);return n||(n=new Sn(r,r,e,8),cu.set(t,n)),n}const Cy=new ei(.18,0),To={wood:new En({color:9069114}),food:new En({color:12729147}),gold:new En({color:15251747}),stone:new En({color:12170924})};class Py{constructor(e,t,n,i,s){this.id=Ey++,this.game=e,this.type=t,this.def=cn[t],this.owner=n,this.isUnit=!0,this.x=i,this.z=s,this.facing=e.rand()*Math.PI*2,this.radius=t==="knight"?.8:t==="catapult"?.95:.5;const o=vc[e.players[n].age-1];this.maxHp=Math.round(this.def.hp*o*(e.players[n].mods?.hpMult||1)),this.hp=this.maxHp,this.dead=!1,this.order=null,this.state="idle",this.path=null,this.wpIdx=0,this.pathGoal=null,this.repathT=0,this.carry=null,this.actionT=0,this.stance="aggressive",this.post=null,this.scanT=e.rand()*.5,this.animT=e.rand()*10,this.moving=!1;const a=new Te;a.position.set(i,e.map.heightAt(i,s),s),a.userData.entity=this,this.group=a,this.mixer=null,this.actions=null,this.actionName=null,this.limbs={},this.adoptModel();const c=t==="catapult"?2.4:t==="knight"?2.8:2,l=this.radius+.35,h=new De(Ry(l,c),Id);h.position.y=c/2,h.userData.entity=this,a.add(h),e.scene.add(a),this.selRing=Ed(this.radius+.55,n===0),this.selRing.visible=!1,a.add(this.selRing);const u=t==="knight"?2.9:t==="catapult"?2.4:2.3;this.healthBar=new Rd(a,1.4,u),this.selected=!1,this.carryMesh=null}pos3(){return new E(this.x,this.group.position.y,this.z)}adoptModel(){const e=Ay(this.type,this.game.teamColor(this.owner));if(e&&this.procModel)this.group.remove(this.procModel),this.procModel=null;else if(this.procModel||this.mixer&&!e)return;e?(this.group.add(e.model),this.mixer=e.mixer,this.actions=e.actions,this.actionName=null,this.limbs={}):this.procModel||(this.procModel=DM[this.type](this.game.teamColor(this.owner)),this.group.add(this.procModel),this.limbs=this.procModel.userData.limbs||{})}playAction(e,t=.16){if(this.actionName===e||!this.actions?.[e])return;const n=this.actions[this.actionName];n&&n.fadeOut(t),this.actions[e].reset().fadeIn(t).play(),this.actionName=e}setSelected(e){this.selected=e,this.selRing.visible=e}clearOrder(e=!1){e&&(this.orderQueue=null),this.order=null,this.state="idle",this.path=null,!e&&this.orderQueue?.length&&this.orderQueue.shift()()}pushOrder(e){if(this.state==="idle"&&!this.order){e();return}(this.orderQueue=this.orderQueue||[]).push(e)}orderMove(e,t){this.order={kind:"move",x:e,z:t},this.state="move",this.requestPath(e,t)}orderGather(e){if(!e||e.amount<=0)return;const t=this.def.gathers;if(!(this.type!=="villager"&&!t)&&!(t&&!t.includes(e.type))&&!(!t&&e.type==="fish")){if(this.def.domain!=="water"&&!this.game.nodeReachable(e)){const n=this.game.findNearestReachableNode(e.res,e.wx,e.wz,60,e);n&&(e=n)}this.order={kind:"gather",node:e},this.state="toResource",this.approachN=0,this.requestPath(e.wx,e.wz)}}orderGatherFarm(e){this.type!=="villager"||!e||!e.complete||e.owner!==this.owner||(this.order={kind:"farm",farm:e},this.state="toResource",this.requestPath(e.cx,e.cz))}orderBuild(e){this.type!=="villager"||!e||e.dead||e.complete&&e.hp>=e.maxHp-.5||(this.order={kind:"build",building:e},this.state="toBuild",this.requestPath(e.cx,e.cz))}orderAttack(e){if(!e||e.dead)return;this.order={kind:"attack",target:e},this.state="toAttack",this.stuckN=0;const t=e.isBuilding?{x:e.cx,z:e.cz}:{x:e.x,z:e.z};this.requestPath(t.x,t.z)}orderAttackMove(e,t){this.order={kind:"attackmove",x:e,z:t},this.state="move",this.requestPath(e,t)}orderGarrison(e){!e||e.dead||!e.complete||(this.order={kind:"garrison",building:e},this.state="toGarrison",this.requestPath(e.cx,e.cz))}updateToGarrison(e){const t=this.order?.building;if(!t||t.dead){this.clearOrder();return}if(this.distTo(t)<1.8){this.garrisoned=t,(t.garrison=t.garrison||[]).push(this),this.group.visible=!1,this.setSelected(!1),this.order=null,this.state="garrisoned",this.path=null;return}this.followPath(e)&&this.requestPath(t.cx,t.cz)}requestPath(e,t){const n=this.game.map,[i,s]=n.worldToGrid(this.x,this.z),[o,a]=n.worldToGrid(e,t),c=py(n,i,s,o,a,9e3,this.owner,this.def.domain||"land");if(this.pathGoal=[o,a],this.repathT=.8+this.game.rand()*.4,this.progT=0,this.progX=this.x,this.progZ=this.z,!c||c.length===0){this.path=null;return}const l=c[c.length-1],h=l[0]===o&&l[1]===a;if(this.path=c.map(([u,d])=>n.gridToWorld(u,d)),h&&n.isWalkableFor(o,a,this.owner)){const u=this.path[this.path.length-1];u[0]=e,u[1]=t}this.wpIdx=0}distTo(e){if(e.isBuilding){const t=e.def.size*ze/2,n=Math.max(Math.abs(this.x-e.cx)-t,0),i=Math.max(Math.abs(this.z-e.cz)-t,0);return Math.hypot(n,i)}return Math.hypot(this.x-e.x,this.z-e.z)-(e.radius||0)}distToNode(e){const t=Math.max(Math.abs(this.x-e.wx)-ze*.5,0),n=Math.max(Math.abs(this.z-e.wz)-ze*.5,0);return Math.hypot(t,n)}update(e){if(!this.dead){switch(this.animT+=e,this.actionT-=e,this.moving=!1,this.state){case"garrisoned":return;case"toGarrison":this.updateToGarrison(e);break;case"idle":this.updateIdle(e);break;case"move":this.updateMove(e);break;case"toResource":this.updateToResource(e);break;case"gathering":this.updateGathering(e);break;case"deposit":this.updateDeposit(e);break;case"toBuild":this.updateToBuild(e);break;case"building":this.updateBuilding(e);break;case"toAttack":this.updateToAttack(e);break;case"fighting":this.updateFighting(e);break}this.animate(e)}}updateIdle(e){if(this.def.aggro>0&&(this.scanT-=e,this.scanT<=0)){this.scanT=.45;const t=this.stance==="hold"?this.attackRangeMax():this.def.aggro,n=this.game.nearestEnemy(this.owner,this.x,this.z,t,!0);n&&(this.stance!=="aggressive"&&!this.post&&(this.post={x:this.x,z:this.z}),this.engage(n,!0))}}attackRangeMax(){return Math.max(this.def.range,1.6)}engage(e,t=!1){const n=t?this.order:null;this.order={kind:"attack",target:e,resume:n},this.state="toAttack",this.requestPath(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)}resumeOrAcquire(){const e=this.order?.resume;if(e){if(e.kind==="move"||e.kind==="attackmove"){this.order=e,this.state="move",this.requestPath(e.x,e.z);return}if(e.kind==="gather"&&e.node&&!e.node.dead&&e.node.amount>0){this.orderGather(e.node);return}if(e.kind==="farm"&&e.farm&&!e.farm.dead&&e.farm.complete){this.orderGatherFarm(e.farm);return}if(e.kind==="build"&&e.building&&!e.building.dead&&!e.building.complete){this.orderBuild(e.building);return}if(e.kind==="attack"&&e.target&&!e.target.dead){this.orderAttack(e.target);return}}if(this.def.aggro>0&&this.stance==="aggressive"){const t=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro+2,!0);if(t){this.engage(t);return}}if(this.stance==="defensive"&&this.post){const t=this.post;this.post=null,this.orderMove(t.x,t.z);return}this.clearOrder()}updateMove(e){if(this.order?.kind==="attackmove"&&this.def.aggro>0&&(this.scanT-=e,this.scanT<=0)){this.scanT=.4;const t=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro,!0);if(t){this.engage(t,!0);return}}if(this.followPath(e)){const t=this.order;this.clearOrder(),t?.kind==="attackmove"&&(this.scanT=0)}}updateToResource(e){const t=this.order;if(!t){this.state="idle";return}if(t.kind==="gather"){const n=t.node;if(!n||n.amount<=0){this.findNextNode(n);return}if(this.distToNode(n)<1.5){this.state="gathering",this.actionT=0,this.faceTowards(n.wx,n.wz);return}}else{const n=t.farm;if(!n||n.dead||!n.complete){this.clearOrder();return}if(this.distTo(n)<1.6){this.state="gathering",this.actionT=0,this.faceTowards(n.cx,n.cz);return}}if(this.followPath(e)){if(this.approachN=(this.approachN||0)+1,this.approachN>3){if(this.approachN=0,t.kind==="gather"){const s=this.game.findNearestReachableNode(t.node.res,this.x,this.z,50,t.node);if(s&&s!==t.node){this.orderGather(s);return}}this.clearOrder();return}const n=t.kind==="gather"?t.node.wx:t.farm.cx,i=t.kind==="gather"?t.node.wz:t.farm.cz;this.requestPath(n,i)}}updateGathering(e){const t=this.order;if(!t){this.state="idle";return}const n=t.kind==="farm",i=n?t.farm:t.node;if(!i||i.dead||!n&&i.amount<=0){n?this.clearOrder():this.findNextNode(i);return}const s=n?"food":i.res,o=this.def.carry??fv;if(this.carry&&(this.carry.res!==s||this.carry.amt>=o)){this.goDeposit();return}if(this.actionT<=0){const a=this.game.players[this.owner].mods?.gatherMult||1;this.actionT=1/((n?i.def.farmRate:this.def.gatherRate)*a),this.carry||(this.carry={res:s,amt:0});const c=n?1:Math.min(1,i.amount);this.carry.amt+=c,n||(i.amount-=c,i.amount<=0&&this.game.depleteNode(i),i.res==="wood"&&this.game.rand()<.3&&this.game.sound("chop")),this.updateCarryMesh(),this.carry.amt>=o&&this.goDeposit()}}goDeposit(){const e=this.game.findDropoff(this.owner,this.x,this.z,this.def.domain==="water");if(!e){this.clearOrder();return}this.order.drop=e,this.state="deposit",this.requestPath(e.cx,e.cz)}updateDeposit(e){const t=this.order;if(!t){this.state="idle";return}let n=t.drop;if(!n||n.dead){if(n=this.game.findDropoff(this.owner,this.x,this.z,this.def.domain==="water"),!n){this.clearOrder();return}t.drop=n,this.requestPath(n.cx,n.cz)}if(this.distTo(n)<1.7){if(this.carry){const i=Math.round(this.carry.amt);this.game.players[this.owner].res[this.carry.res]+=i,this.game.stats[this.owner][this.carry.res]+=i,this.carry=null,this.updateCarryMesh()}t.kind==="gather"&&t.node&&t.node.amount>0?(this.state="toResource",this.requestPath(t.node.wx,t.node.wz)):t.kind==="farm"&&t.farm&&!t.farm.dead?(this.state="toResource",this.requestPath(t.farm.cx,t.farm.cz)):t.kind==="gather"?this.findNextNode(t.node):this.clearOrder();return}this.followPath(e)&&this.distTo(n)>=1.7&&this.requestPath(n.cx,n.cz)}findNextNode(e){if(!e){this.clearOrder();return}const t=this.def.domain==="water"?this.game.nodes.filter(n=>!n.dead&&n.type==="fish"&&n.amount>0&&n!==e).sort((n,i)=>Math.hypot(n.wx-this.x,n.wz-this.z)-Math.hypot(i.wx-this.x,i.wz-this.z))[0]||null:this.game.findNearestReachableNode(e.res,e.wx,e.wz,22,e);t?this.carry&&this.carry.amt>0&&this.carry.res===e.res?(this.order={kind:"gather",node:t},this.goDeposit()):this.orderGather(t):this.carry&&this.carry.amt>0?(this.order={kind:"gather",node:null},this.goDeposit()):this.clearOrder()}buildOrderDone(e){return e.complete&&e.hp>=e.maxHp-.5}updateToBuild(e){const t=this.order?.building;if(!t||t.dead||this.buildOrderDone(t)){if(t&&t.complete&&t.def.isFarm){this.orderGatherFarm(t);return}this.clearOrder();return}if(this.distTo(t)<1.6){this.state="building",this.faceTowards(t.cx,t.cz);return}this.followPath(e)&&(this.repathT<=0?this.clearOrder():this.requestPath(t.cx,t.cz)),this.repathT-=e}updateBuilding(e){const t=this.order?.building;if(!t||t.dead){this.clearOrder();return}if(this.buildOrderDone(t)){if(t.def.isFarm){this.orderGatherFarm(t);return}this.clearOrder();return}if(this.distTo(t)>2.4){this.state="toBuild",this.requestPath(t.cx,t.cz);return}t.complete?t.repairTick(e):t.constructionTick(e),this.actionT<=0&&(this.actionT=.5,this.game.rand()<.5&&this.game.sound("hammer"))}attackRange(e){return e.isBuilding?Math.max(this.def.range,1.6):Math.max(this.def.range,this.radius+.2)}updateToAttack(e){const t=this.order?.target;if(!t||t.dead){this.resumeOrAcquire();return}const n=this.attackRange(t),i=this.distTo(t);if(this.stance==="hold"&&i>n){this.clearOrder();return}if(this.stance==="defensive"&&this.post&&Math.hypot(this.x-this.post.x,this.z-this.post.z)>16){const s=this.post;this.post=null,this.orderMove(s.x,s.z);return}if(i<=n&&(!this.def.minRange||i>=this.def.minRange)){this.state="fighting",this.stuckN=0;return}if(this.repathT-=e,this.repathT<=0&&!t.isBuilding&&this.requestPath(t.x,t.z),this.followPath(e)){if(this.def.minRange&&i<this.def.minRange){const s=Math.atan2(this.z-(t.isBuilding?t.cz:t.z),this.x-(t.isBuilding?t.cx:t.x))+(this.game.rand()-.5);this.requestPath(this.x+Math.cos(s)*6,this.z+Math.sin(s)*6);return}if(this.distTo(t)>n){if(this.stuckN=(this.stuckN||0)+1,this.stuckN>=3){this.stuckN=0;const s=this.game.nearestEnemy(this.owner,this.x,this.z,12,!0);if(s&&s!==t){this.orderAttack(s);return}this.resumeOrAcquire();return}this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z)}}}updateFighting(e){const t=this.order?.target;if(!t||t.dead){this.resumeOrAcquire();return}const n=this.attackRange(t),i=this.distTo(t);if(i>n+.6){this.state="toAttack",this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z);return}if(this.def.minRange&&i<this.def.minRange){const s=Math.atan2(this.z-(t.isBuilding?t.cz:t.z),this.x-(t.isBuilding?t.cx:t.x));this.requestPath(this.x+Math.cos(s)*5,this.z+Math.sin(s)*5),this.state="toAttack";return}this.faceTowards(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z),this.actionT<=0&&(this.actionT=this.def.atkSpeed,this.strike(t))}strike(e){const t=this.game,n=t.players[this.owner],i=Math.round(this.def.atk*xv[n.age-1]*(n.mods?.atkMult||1));if(this.attackAnimT=.35,this.def.projectile==="arrow"){const s=this.pos3();s.y+=1.5,t.effects.fireArrow(s,e,i,this),t.sound("arrow")}else if(this.def.projectile==="stone"){const s=this.pos3();s.y+=1.6;const o=e.isBuilding?new E(e.cx,e.groundY,e.cz):e.pos3();t.effects.fireStone(s,o,i,this.def.splash||0,this),t.sound("catapult"),this.limbs.throwArm&&(this.throwAnimT=.5)}else{let s=i;!e.isBuilding&&this.def.bonusVsCav&&e.def?.cavalry&&(s=Math.round(s*this.def.bonusVsCav)),e.isBuilding&&(s=Math.max(1,Math.round(i*(this.type==="villager"?.6:.8)))),t.applyDamage(e,s,this),t.effects.blood(e.isBuilding?new E(e.cx,e.groundY+1.2,e.cz):e.pos3().setY(this.group.position.y+1.1)),t.sound("melee")}}followPath(e){if(!this.path||this.wpIdx>=this.path.length)return this.applySeparation(e,!1),!0;const[t,n]=this.path[this.wpIdx],i=t-this.x,s=n-this.z,o=Math.hypot(i,s),a=this.def.speed*e;if(o<=Math.max(a,.25))return this.wpIdx++,this.wpIdx>=this.path.length?(this.path=null,!0):!1;const c=i/o,l=s/o;if(this.tryStep(c*a,l*a),this.facing=Iy(this.facing,Math.atan2(c,l),Math.min(1,e*10)),this.moving=!0,this.applySeparation(e,!0),this.progT=(this.progT||0)+e,this.progT>2){const h=Math.hypot(this.x-(this.progX??this.x),this.z-(this.progZ??this.z));if(this.progX=this.x,this.progZ=this.z,this.progT=0,h<.3)return this.path=null,!0}return!1}tryStep(e,t){const n=this.game.map,i=this.def.domain==="water"?(f,m)=>n.isWater(f,m):(f,m)=>n.isWalkableFor(f,m,this.owner);let s=this.x+e,o=this.z+t;const[a,c]=n.worldToGrid(s,o);if(i(a,c))return this.x=s,this.z=o,!0;const[l,h]=n.worldToGrid(this.x+e,this.z);if(i(l,h))return this.x+=e,!0;const[u,d]=n.worldToGrid(this.x,this.z+t);return i(u,d)?(this.z+=t,!0):!1}applySeparation(e,t){const n=this.game.unitsNear(this.x,this.z,1.8+this.radius);let i=0,s=0;for(const o of n){if(o===this||o.dead)continue;const a=this.x-o.x,c=this.z-o.z,l=Math.hypot(a,c),h=this.radius+o.radius+(t?.05:.18);if(l<h&&l>.001){const u=(h-l)/h;i+=a/l*u,s+=c/l*u}else if(l<=.001){const u=this.game.rand()*Math.PI*2;i+=Math.cos(u),s+=Math.sin(u)}}if(i||s){const o=(t?2.4:4.5)*e;this.tryStep(i*o,s*o)}}faceTowards(e,t){this.facing=Math.atan2(e-this.x,t-this.z)}updateCarryMesh(){const e=this.carry&&this.carry.amt>0;if(e&&!this.carryMesh){const t=new De(Cy,To[this.carry.res]||To.wood);t.position.set(0,1.65,-.34),this.group.add(t),this.carryMesh=t}else!e&&this.carryMesh?(this.group.remove(this.carryMesh),this.carryMesh=null):e&&this.carryMesh&&(this.carryMesh.material=To[this.carry.res]||To.wood)}animate(e){const t=this.group;if(t.position.x=this.x,t.position.z=this.z,t.position.y=this.def.domain==="water"?-.42:this.game.map.heightAt(this.x,this.z),t.rotation.y=this.facing,this.hitT>0){this.hitT-=e;const o=Math.max(0,this.hitT)/.16;t.scale.setScalar(1+.16*o)}else t.scale.x!==1&&t.scale.setScalar(1);if(this.attackAnimT>0&&(this.attackAnimT-=e),this.throwAnimT>0&&(this.throwAnimT-=e),this.mixer){let o="idle";this.moving?o="walk":this.state==="gathering"||this.state==="building"?o="work":this.state==="fighting"&&(this.def.projectile?o=this.actions?.shoot?"shoot":"work":o=this.actions?.melee?"melee":"work"),this.playAction(o),this.mixer.update(e),this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp);return}const n=this.procModel?.userData||{},i=this.limbs,s=this.animT;if(n.isMounted){const o=this.moving?13:0;for(let a=0;a<4;a++){const c=i["hLeg"+a];c&&(c.rotation.x=this.moving?Math.sin(s*o+a*1.7)*.6:0)}i.rArm&&(i.rArm.rotation.x=this.attackAnimT>0?-.7:0),t.position.y+=this.moving?Math.abs(Math.sin(s*o*.5))*.12:0}else if(n.isMachine){if(i.throwArm){const o=this.throwAnimT>0?-2:-.5;i.throwArm.rotation.x+=(o-i.throwArm.rotation.x)*Math.min(1,e*(this.throwAnimT>0?18:3))}}else{const o=this.state==="gathering"||this.state==="building";if(this.moving){const c=Math.sin(s*11)*.65;i.lLeg&&(i.lLeg.rotation.x=c),i.rLeg&&(i.rLeg.rotation.x=-c),i.lArm&&(i.lArm.rotation.x=-c*.7),i.rArm&&(i.rArm.rotation.x=c*.7)}else if(o){const a=Math.sin(s*6.5);i.rArm&&(i.rArm.rotation.x=-1.2+a*.7),i.lArm&&(i.lArm.rotation.x=-.2+a*.18),i.lLeg&&(i.lLeg.rotation.x=0),i.rLeg&&(i.rLeg.rotation.x=0)}else if(this.attackAnimT>0)i.rArm&&(i.rArm.rotation.x=-1.9+(.35-this.attackAnimT)*5),i.lArm&&(i.lArm.rotation.x=.3);else{const a=Math.sin(s*1.6)*.04;for(const c of["lLeg","rLeg","lArm","rArm"])i[c]&&(i[c].rotation.x*=.85);i.lArm&&(i.lArm.rotation.x+=a)}}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp)}}function Iy(r,e,t){let n=e-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*t}const Ld={towncenter:["TownCenter_FirstAge_Level3","TownCenter_SecondAge_Level1","TownCenter_SecondAge_Level2","TownCenter_SecondAge_Level3"],house:["Houses_FirstAge_1_Level2","Houses_FirstAge_2_Level2","Houses_SecondAge_1_Level2","Houses_SecondAge_3_Level3"],barracks:["Barracks_FirstAge_Level2","Barracks_FirstAge_Level3","Barracks_SecondAge_Level2","Barracks_SecondAge_Level3"],archeryrange:["Archery_FirstAge_Level2","Archery_FirstAge_Level3","Archery_SecondAge_Level2","Archery_SecondAge_Level3"],farm:["Farm_FirstAge_Level2_Wheat","Farm_FirstAge_Level3_Wheat","Farm_SecondAge_Level2_Wheat","Farm_SecondAge_Level3_Wheat"],tower:["WatchTower_FirstAge_Level2","WatchTower_FirstAge_Level3","WatchTower_SecondAge_Level2","WatchTower_SecondAge_Level3"],storehouse:["Market_FirstAge_Level2","Market_FirstAge_Level3","Market_SecondAge_Level2","Market_SecondAge_Level3"],market:["Market_FirstAge_Level2","Market_FirstAge_Level3","Market_SecondAge_Level2","Market_SecondAge_Level3"],blacksmith:["TowerHouse_FirstAge","TowerHouse_FirstAge","TowerHouse_SecondAge","TowerHouse_SecondAge"],stable:["Windmill_FirstAge","Windmill_FirstAge","Windmill_SecondAge","Windmill_SecondAge"],siegeworkshop:["TowerHouse_FirstAge","TowerHouse_FirstAge","TowerHouse_SecondAge","TowerHouse_SecondAge"],wall:["Wall_FirstAge","Wall_FirstAge","Wall_SecondAge","Wall_SecondAge"],_farmdirt:["Farm_Dirt_Level2"]},wc=new Map;let Uo=!1,bc=[];function Ly(r){Uo?r():bc.push(r)}function Dy(r){const e=new Te;e.add(r);const t=new yn().setFromObject(r),n=t.getCenter(new E);return r.position.x-=n.x,r.position.z-=n.z,r.position.y-=t.min.y,r.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.material&&(i.material.roughness=Math.min(1,(i.material.roughness??.9)+.1),i.material.metalness=0))}),e.userData.footprint=Math.max(t.max.x-t.min.x,t.max.z-t.min.z),e}async function Ny(){const r="/aoge/models/buildings/";let e;try{const s=await fetch(r+"index.json");if(!s.ok)return!1;e=await s.json()}catch{return!1}const t=new Map(e.map(s=>[s.replace(/\.(glb|gltf)$/i,""),s])),n=new Yc,i=[...new Set(Object.values(Ld).flat())].filter(s=>t.has(s));return await Promise.all(i.map(async s=>{try{const o=await n.loadAsync(r+t.get(s));wc.set(s,Dy(o.scene))}catch(o){console.warn("pack model failed:",s,o.message)}})),Uo=wc.size>0,Uo&&(bc.forEach(s=>s()),bc=[]),Uo}function Dd(r,e,t){const n=Ld[r];if(!n)return null;const i=n[Math.min(3,Math.max(0,e-1))],s=lu(i,t);if(!s)return null;if(r==="farm"){const o=lu("Farm_Dirt_Level2",t);if(o){const a=new Te;return o.position.y=.16,s.position.y=.22,a.add(o,s),a}}return s}function lu(r,e){const t=wc.get(r);if(!t)return null;const n=t.clone(!0),i=e*ze*.96,s=i/(t.userData.footprint||i);return n.scale.setScalar(s),n}let Uy=1e5;const hu=new Map;function Fy(r,e){const t=r+"x"+e.toFixed(1);let n=hu.get(t);return n||(n=new ri(r*ze*.96,e,r*ze*.96),hu.set(t,n)),n}class By{constructor(e,t,n,i,s,o=!1){this.id=Uy++,this.game=e,this.type=t,this.def=Gs[t],this.owner=n,this.isBuilding=!0,this.gx=i,this.gy=s,this.size=this.def.size,this.cx=(i+this.size/2)*ze,this.cz=(s+this.size/2)*ze,this.dead=!1,this.maxHp=Math.round(this.def.hp*(e.players[n].mods?.bldHpMult||1)),this.complete=o,this.progress=o?1:0,this.hp=o?this.maxHp:Math.max(1,Math.round(this.maxHp*.08)),this.trainQueue=[],this.trainT=0,this.researching=null,this.rally=null,this.atkCd=0,this.scanT=e.rand()*.4,this.atkTarget=null,e.map.occupy(i,s,this.size,this,this.def.isGate?n:-1);let a=0;for(let f=s;f<s+this.size;f++)for(let m=i;m<i+this.size;m++)a+=e.map.tileHeight(m,f);this.groundY=a/(this.size*this.size)-.06;const c=new Te;c.position.set(this.cx,this.groundY,this.cz),c.userData.entity=this,this.modelGroup=new Te,this.modelGroup.add(this.buildModel()),c.add(this.modelGroup);const l=Math.max(2.5,this.size*1.6),h=new De(Fy(this.size,l),Id);h.position.y=l/2,h.userData.entity=this,c.add(h),this.group=c,e.scene.add(c),o||(this.scaffold=ZM(this.size),c.add(this.scaffold),this.modelGroup.scale.y=.1);const u=this.size*ze*.62;this.selRing=Ed(u,n===0),this.selRing.visible=!1,this.selRing.position.y=.12,c.add(this.selRing);const d=t==="towncenter"?8.2:t==="tower"?7:4.2;this.healthBar=new Rd(c,Math.min(4.5,this.size*1.5),d),this.selected=!1}pos3(){return new E(this.cx,this.groundY,this.cz)}buildModel(){const e=this.game.teamColor(this.owner),t=this.game.players[this.owner].age,n=Dd(this.type,t,this.size);if(n){const i=new Te;if(i.add(n),!this.def.isFarm&&!this.def.isWall){const s=bd(e,3+this.size*.6);s.position.set(this.size*ze*.36,0,this.size*ze*.36),i.add(s)}return i}return Td[this.type](e)}reskin(){if(!this.dead){for(;this.modelGroup.children.length;)this.modelGroup.remove(this.modelGroup.children[0]);this.modelGroup.add(this.buildModel())}}setSelected(e){this.selected=e,this.selRing.visible=e}constructionTick(e){if(this.complete||this.dead)return;this.buildersNow=(this.buildersNow||0)+1;const t=Math.max(1,this.builderCount||1),n=e/this.def.buildTime*(Math.pow(t,.7)/t);this.progress=Math.min(1,this.progress+n),this.hp=Math.min(this.maxHp,this.hp+n*this.maxHp*.92),this.modelGroup.scale.y=.1+this.progress*.9,this.progress>=1&&this.finishConstruction()}repairTick(e){if(!this.complete||this.dead||this.hp>=this.maxHp)return;const t=this.game.players[this.owner].res,n=e*.5;if(t.wood<n)return;t.wood-=n;const i=Math.max(1,this.builderCount||1);this.buildersNow=(this.buildersNow||0)+1;const s=e/this.def.buildTime*.5*(Math.pow(i,.7)/i);this.hp=Math.min(this.maxHp,this.hp+s*this.maxHp)}finishConstruction(){this.complete=!0,this.hp=Math.min(this.maxHp,this.hp),this.modelGroup.scale.y=1,this.scaffold&&(this.group.remove(this.scaffold),this.scaffold=null),this.game.onBuildingComplete(this)}canTrain(e){const t=cn[e],n=this.game.players[this.owner];return this.complete&&t&&n.age>=t.age&&!!this.def.trains?.includes(e)}queueTrain(e){const t=cn[e],n=this.game.players[this.owner];return!this.canTrain(e)||this.trainQueue.length>=5||!xn(n.res,t.cost)?!1:(Lo(n.res,t.cost),this.trainQueue.push(e),this.trainQueue.length===1&&(this.trainT=0),!0)}cancelTrain(e){const t=this.trainQueue[e];t&&(Do(this.game.players[this.owner].res,cn[t].cost),this.trainQueue.splice(e,1),e===0&&(this.trainT=0))}startTech(e){const t=this.game.players[this.owner],n=Xi[e];return!this.complete||!this.def.techs?.includes(e)||!n||this.researching||t.techs.includes(e)||t.age<n.age||this.game.buildings.some(i=>!i.dead&&i.owner===this.owner&&i.researching?.tech===e)||!xn(t.res,n.cost)?!1:(Lo(t.res,n.cost),this.researching={tech:e,t:0,dur:n.time},!0)}startAgeResearch(){const e=this.game.players[this.owner];if(!this.complete||!this.def.researchesAge||this.researching||e.ageResearchInProgress||e.age>=Kt.length)return!1;const t=Kt[e.age];return xn(e.res,t.cost)?(Lo(e.res,t.cost),this.researching={age:e.age+1,t:0,dur:t.time},e.ageResearchInProgress=!0,!0):!1}update(e){if(this.dead)return;if(this.builderCount=this.buildersNow||0,this.buildersNow=0,this.complete&&this.trainQueue.length>0){const n=this.trainQueue[0],i=cn[n],s=this.game.players[this.owner];this.trainT+=e,this.trainT>=i.trainTime&&(s.popUsed<s.popCap?(this.trainQueue.shift(),this.trainT=0,this.game.spawnFromBuilding(this,n)):this.trainT=i.trainTime)}this.researching&&(this.researching.t+=e,this.researching.t>=this.researching.dur&&(this.researching.tech?this.game.applyTech(this.owner,this.researching.tech):this.game.advanceAge(this.owner,this.researching.age),this.researching=null));const t=this.def.attack;if(t&&this.complete&&(this.atkCd-=e,this.scanT-=e,(!this.atkTarget||this.atkTarget.dead||this.targetOutOfRange())&&this.scanT<=0&&(this.scanT=.5,this.atkTarget=this.game.nearestEnemy(this.owner,this.cx,this.cz,t.range,!0)),this.atkTarget&&!this.atkTarget.dead&&this.atkCd<=0&&!this.targetOutOfRange())){this.atkCd=t.atkSpeed;const n=this.pos3();n.y+=this.type==="tower"?5.4:6.5;const i=1+(this.garrison?.length||0)*.4;this.game.effects.fireArrow(n,this.atkTarget,Math.round(t.atk*i),this),this.game.sound("arrow")}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp-.5)}targetOutOfRange(){const e=this.atkTarget;if(!e)return!0;const t=e.isBuilding?e.cx:e.x,n=e.isBuilding?e.cz:e.z;return Math.hypot(t-this.cx,n-this.cz)>this.def.attack.range+1}spawnPoint(e="land"){const t=this.game.map,n=e==="water",i=this.rally?.x??this.cx,s=this.rally?.z??this.cz+(this.size+1)*ze;let o=null,a=1/0;for(let c=0;c<4;c++){for(let l=this.gy-1-c;l<=this.gy+this.size+c;l++)for(let h=this.gx-1-c;h<=this.gx+this.size+c;h++){if(!(h<this.gx-c||h>=this.gx+this.size+c||l<this.gy-c||l>=this.gy+this.size+c)||!(n?t.isWater(h,l):t.isWalkable(h,l)))continue;const[d,f]=t.gridToWorld(h,l),m=Math.hypot(d-i,f-s);m<a&&(a=m,o=[d,f])}if(o)return o}return[this.cx,this.cz]}}function rn(r,e){const t=[];for(const n of e){const i=r.units.find(s=>s.id===n&&!s.dead);i&&t.push(i)}return t}const tn=(r,e)=>r.buildings.find(t=>t.id===e&&!t.dead)||null,uu=(r,e)=>r.nodes.find(t=>t.id===e&&!t.dead)||null,Oy=(r,e)=>r.units.find(t=>t.id===e&&!t.dead)||tn(r,e);function pn(r,e,t){e?r.pushOrder(t):(r.orderQueue=null,t())}function ky(r){const e=Math.ceil(Math.sqrt(r)),t=1.7,n=[];for(let i=0;i<r;i++){const s=Math.floor(i/e),o=i%e;n.push([(o-(e-1)/2)*t,(s-(Math.ceil(r/e)-1)/2)*t])}return n}function jo(r,e){switch(e.k){case"move":{const t=rn(r,e.ids),n=ky(t.length);return t.forEach((i,s)=>pn(i,e.shift,()=>i.orderMove(e.x+n[s][0],e.z+n[s][1]))),t.length>0}case"attackmove":{for(const t of rn(r,e.ids))pn(t,e.shift,()=>t.orderAttackMove(e.x,e.z));return!0}case"attack":{const t=Oy(r,e.t);if(!t)return!1;for(const n of rn(r,e.ids))pn(n,e.shift,()=>n.orderAttack(t));return!0}case"gather":{const t=uu(r,e.n);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"?pn(n,e.shift,()=>n.orderGather(t)):pn(n,e.shift,()=>n.orderMove(t.wx,t.wz));return!0}case"farm":{const t=tn(r,e.f);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"&&pn(n,e.shift,()=>n.orderGatherFarm(t));return!0}case"build":{const t=tn(r,e.b);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"&&pn(n,e.shift,()=>n.orderBuild(t));return!0}case"deposit":{const t=tn(r,e.b);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"&&n.carry?.amt>0?(n.order=n.order?.kind==="gather"||n.order?.kind==="farm"?n.order:{kind:"gather",node:null},n.goDeposit()):pn(n,e.shift,()=>n.orderMove(t.cx,t.cz));return!0}case"garrison":{const t=tn(r,e.b);if(!t)return!1;for(const n of rn(r,e.ids))pn(n,e.shift,()=>n.orderGarrison(t));return!0}case"stop":{for(const t of rn(r,e.ids))t.clearOrder(!0);return!0}case"stance":{for(const t of rn(r,e.ids))t.stance=e.s,t.post=null;return!0}case"place":{const t=r.placeBuilding(e.o??0,e.t,e.gx,e.gy);if(!t)return null;for(const n of rn(r,e.ids||[]))n.type==="villager"&&pn(n,e.shift,()=>n.orderBuild(t));return t}case"placeline":{const t=[];for(const[i,s]of e.tiles){const o=r.placeBuilding(e.o??0,e.t,i,s);o&&t.push(o)}const n=rn(r,e.ids||[]).filter(i=>i.type==="villager");return t.forEach((i,s)=>{const o=n.length?n[s%n.length]:null;o&&pn(o,e.shift||s>=n.length,()=>o.orderBuild(i))}),t.length}case"train":{const t=tn(r,e.b);return t?t.queueTrain(e.u):!1}case"cancelTrain":{const t=tn(r,e.b);return t&&t.cancelTrain(e.i),!0}case"age":{const t=tn(r,e.b);return t?t.startAgeResearch():!1}case"tech":{const t=tn(r,e.b);return t?t.startTech(e.id):!1}case"trade":return r.trade(e.o??0,e.kind,e.dir);case"bell":{const t=tn(r,e.b);return t&&r.townBell(t),!0}case"demolish":{const t=tn(r,e.b);return t&&r.deleteBuilding(t),!0}case"rally":{for(const t of e.bs){const n=tn(r,t);if(n)if(e.n!==void 0){const i=uu(r,e.n);i&&(n.rally={node:i})}else if(e.f!==void 0){const i=tn(r,e.f);i&&(n.rally={farm:i})}else n.rally={x:e.x,z:e.z}}return!0}default:return!1}}let zy=1;class Hy{constructor(e,t,n){this.scene=e,this.map=t,this.trees=n,this.effects=null,this.ai=null,this.ais=[],this.fog=null,this.tick=0,this.rngState=(t.seed^2654435769)>>>0||1,this.cmdLog=null,this.onCommand=null,this.replayMode=!1,this.onTick=null,this.time=0,this.gameOver=!1,this.players=Array.from({length:1+ni},(i,s)=>({id:s,res:{...yv},age:1,popUsed:0,popCap:0,ageResearchInProgress:!1,techs:[],mods:{atkMult:1,hpMult:1,gatherMult:1,bldHpMult:1}})),this.stats=this.players.map(()=>({wood:0,food:0,gold:0,stone:0,trained:0,lost:0,kills:0,built:0,bLost:0,razed:0})),this.units=[],this.buildings=[],this.nodes=[],this.stumps=[],this.hash=new Map,this.cell=4,this.treeNodeByInstance=new Map,this.onAlert=()=>{},this.soundFn=()=>{},this.onGameOver=()=>{},this.onCombat=()=>{},this.lastAttackAlert=-99}teamColor(e){return gv[e]}sound(e){this.soundFn(e)}hostile(e,t){return e!==t&&e===pe!=(t===pe)}rand(){let e=(this.rngState+=1831565813)>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}exec(e){if(!this.replayMode&&!(this.onCommand&&this.onCommand(e)===!1))return this.cmdLog&&this.cmdLog.push({t:this.tick,...e}),jo(this,e)}stateHash(){let e=2166136261;const t=n=>{e=(e^Math.imul(Math.round(n*256)|0,2654435761)>>>0)>>>0,e=(e<<13|e>>>19)>>>0};for(const n of this.units)t(n.id),t(n.x),t(n.z),t(n.hp);for(const n of this.buildings)t(n.id),t(n.hp),t(n.progress),t(n.trainQueue.length);for(const n of this.players)t(n.res.wood),t(n.res.food),t(n.res.gold),t(n.res.stone||0),t(n.age);return t(this.tick),e>>>0}createResourceNodes(e){let t=12345;const n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(const i of e){const[s,o]=this.map.gridToWorld(i.gx,i.gy),a=Mv[i.type],c={id:zy++,isNode:!0,type:i.type,res:a.res,amount:a.amount,gx:i.gx,gy:i.gy,wx:s,wz:o,dead:!1},l=this.map.heightAt(s,o);if(i.type==="tree")c.treeHandle=this.trees.add(s,l-.1,o,n()),c.treeHandle&&this.treeNodeByInstance.set(c.treeHandle.idx,c);else{const h=i.type==="berry"?XM():i.type==="stone"?YM():i.type==="fish"?KM():qM();h.position.set(s,i.type==="fish"?-.55:l-.05,o),h.rotation.y=n()*Math.PI*2,h.userData.node=c,this.scene.add(h),c.mesh=h}this.map.occupant[i.gy*this.map.size+i.gx]=c,this.nodes.push(c)}this.trees.flush()}spawnUnit(e,t,n,i){const s=new Py(this,e,t,n,i);return this.units.push(s),this.players[t].popUsed+=1,s}spawnFromBuilding(e,t){const[n,i]=e.spawnPoint(cn[t].domain||"land"),s=this.spawnUnit(t,e.owner,n,i);this.stats[e.owner].trained++;const o=e.rally;if(o)if(o.node&&!o.node.dead&&o.node.amount>0&&t==="villager")s.orderGather(o.node);else if(o.farm&&!o.farm.dead&&t==="villager")s.orderGatherFarm(o.farm);else if((o.node||o.farm)&&t!=="villager"){const a=o.node?o.node.wx:o.farm.cx,c=o.node?o.node.wz:o.farm.cz;s.orderAttackMove(a,c)}else o.x!==void 0&&(t!=="villager"?s.orderAttackMove(o.x,o.z):s.orderMove(o.x,o.z));return e.owner===pe&&this.sound("ready"),s}canPlaceBuilding(e,t,n){if(!this.map.canPlace(e,t,n))return!1;const i=e*ze,s=t*ze,o=(e+n)*ze,a=(t+n)*ze;for(const c of this.units)if(!c.dead&&c.x>i-.4&&c.x<o+.4&&c.z>s-.4&&c.z<a+.4)return!1;return!0}placeBuilding(e,t,n,i,s=!1){const o=Gs[t],a=this.players[e];if(!o)return null;if(!s){if(a.age<o.age||!xn(a.res,o.cost)||!this.canPlaceBuilding(n,i,o.size)||o.isDock&&!this.map.hasAdjacentWater(n,i,o.size))return null;Lo(a.res,o.cost)}const c=new By(this,t,e,n,i,s);return this.buildings.push(c),s&&this.onBuildingComplete(c,!0),c}onBuildingComplete(e,t=!1){this.recalcPop(e.owner),t||this.stats[e.owner].built++,!t&&e.owner===pe&&this.sound("built")}recalcPop(e){let t=0;for(const n of this.buildings)n.owner===e&&n.complete&&!n.dead&&n.def.pop&&(t+=n.def.pop);this.players[e].popCap=Math.min(t,pv)}advanceAge(e,t){const n=this.players[e],i=vc[n.age-1];n.age=t,n.ageResearchInProgress=!1;const s=vc[t-1]/i;for(const o of this.units)o.owner===e&&!o.dead&&(o.maxHp=Math.round(o.maxHp*s),o.hp=Math.min(o.maxHp,Math.round(o.hp*s)));for(const o of this.buildings)o.owner===e&&!o.dead&&o.reskin();e===pe?(this.onAlert(`You have advanced to the ${Kt[t-1].name}!`,!0),this.sound("ageup")):this.onAlert(`The enemy has advanced to the ${Kt[t-1].name}.`)}applyTech(e,t){const n=this.players[e];if(n.techs.includes(t))return;const i=Xi[t];n.techs.push(t);for(const[s,o]of Object.entries(i.mod))n.mods[s]*=o;if(i.mod.hpMult)for(const s of this.units)s.owner===e&&!s.dead&&(s.maxHp=Math.round(s.maxHp*i.mod.hpMult),s.hp=Math.min(s.maxHp,Math.round(s.hp*i.mod.hpMult)));if(i.mod.bldHpMult)for(const s of this.buildings)s.owner===e&&!s.dead&&(s.maxHp=Math.round(s.maxHp*i.mod.bldHpMult),s.hp=Math.min(s.maxHp,Math.round(s.hp*i.mod.bldHpMult)));e===pe&&(this.onAlert(`Research complete: ${i.name} (${i.desc})`,!0),this.sound("ageup"))}trade(e,t,n){const i=this.players[e].res;if(n==="sell"){if((i[t]||0)<Yt.lot)return!1;i[t]-=Yt.lot,i.gold=(i.gold||0)+Yt.sellGold}else{if((i.gold||0)<Yt.buyGold)return!1;i.gold-=Yt.buyGold,i[t]=(i[t]||0)+Yt.lot}return e===pe&&this.sound("deposit"),!0}applyDamage(e,t,n){if(!(!e||e.dead||this.gameOver)){if(e.hp-=t,t>=1){const i=e.isBuilding?e.groundY+e.size*1.4:e.group.position.y+2.2;this.effects.damageNumber(e.isBuilding?e.cx:e.x,i,e.isBuilding?e.cz:e.z,t),e.isUnit&&(e.hitT=.16)}(e.owner===pe||n?.owner===pe)&&this.onCombat(),e.owner===pe&&this.time-this.lastAttackAlert>14&&(this.lastAttackAlert=this.time,this.onAlert("Your forces are under attack!"),this.sound("horn")),e.owner===pe&&this.time-(this.lastPingT||-9)>3&&(this.lastPingT=this.time,this.onPing?.(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)),e.isUnit&&n&&!n.dead&&this.hostile(e.owner,n.owner)&&(e.state==="idle"||e.state==="gathering"||e.state==="toResource"||e.state==="deposit"||e.state==="move"||e.state==="building"||e.state==="toBuild")&&(e.type!=="villager"||n.isUnit&&n.def.range<=1.5?e.engage(n,!0):this.fleeHome(e));for(const i of this.ais)i.onDamage(e,n);if(e.hp<=0){const i=this.stats;e.isUnit?(i[e.owner].lost++,n&&this.hostile(e.owner,n.owner)&&i[n.owner].kills++,this.killUnit(e)):(i[e.owner].bLost++,n&&this.hostile(e.owner,n.owner)&&i[n.owner].razed++,this.razeBuilding(e))}}}fleeHome(e){if(e.fleeCd&&this.time<e.fleeCd)return;e.fleeCd=this.time+6;const t=this.findDropoff(e.owner,e.x,e.z);t&&e.orderMove(t.cx,t.cz)}splashDamage(e,t,n,i){if(!(t<=0)){for(const s of[...this.units]){if(s.dead||s===i||s.garrisoned)continue;const o=Math.hypot(s.x-e.x,s.z-e.z);o<=t&&this.applyDamage(s,Math.round(n*(o<t*.5?1:.55)),i)}for(const s of[...this.buildings]){if(s.dead)continue;const o=s.size*ze/2,a=Math.max(Math.abs(e.x-s.cx)-o,0),c=Math.max(Math.abs(e.z-s.cz)-o,0);if(Math.hypot(a,c)<=t){const l=i?.def?.bonusVsBuilding&&i.owner!==s.owner?i.def.bonusVsBuilding:1;this.applyDamage(s,Math.round(n*l),i)}}}}killUnit(e){e.dead||(e.dead=!0,e.setSelected(!1),e.healthBar.set(0,!1),this.players[e.owner].popUsed-=1,this.units.splice(this.units.indexOf(e),1),this.effects.blood(e.pos3().setY(e.group.position.y+.8)),e.mixer&&e.actions?.death?(e.playAction("death",.1),this.effects.fadeOut(e.group,2.2,.6,e.mixer)):this.effects.fadeOut(e.group,1.4,1),this.sound("die"),this.checkWinLose())}razeBuilding(e,t=!1){if(e.dead)return;if(e.dead=!0,e.setSelected(!1),e.healthBar.set(0,!1),e.garrison?.length){for(const i of e.garrison){i.garrisoned=null,i.group.visible=!0;const[s,o]=e.spawnPoint();i.x=s,i.z=o,i.clearOrder(!0)}e.garrison=[]}const n=this.players[e.owner].res;for(const i of e.trainQueue)Do(n,cn[i].cost);e.trainQueue.length=0,e.researching&&(Do(n,e.researching.tech?Xi[e.researching.tech].cost:Kt[e.researching.age-1].cost),e.researching.tech||(this.players[e.owner].ageResearchInProgress=!1)),this.map.release(e.gx,e.gy,e.size),this.buildings.splice(this.buildings.indexOf(e),1),this.recalcPop(e.owner),this.effects.puff(new E(e.cx,e.groundY+1.5,e.cz),9075296,16,7),this.effects.fadeOut(e.group,2.2,e.size*1.2),this.effects.spawnRubble(e.cx,e.groundY,e.cz,e.size),this.sound("collapse"),!t&&e.owner===pe&&this.onAlert(`Your ${e.def.name} has been destroyed!`);for(const i of this.ais)i.me===e.owner&&i.onBuildingLost(e);this.checkWinLose()}deleteBuilding(e){!e||e.dead||(e.complete||Do(this.players[e.owner].res,e.def.cost),this.razeBuilding(e,!0))}addStump(e,t,n){if(!this.stumpMesh){const o=new Sn(.22,.3,.4,6);o.translate(0,.2,0),this.stumpMesh=new ks(o,Dt(Q.woodDark),400),this.stumpMesh.count=0,this.stumpMesh.frustumCulled=!1,this.stumpN=0,this.scene.add(this.stumpMesh)}const i=this.stumpN%400,s=new Ae().makeRotationY(this.rand()*6.28);s.setPosition(e,t,n),this.stumpMesh.setMatrixAt(i,s),this.stumpN++,this.stumpMesh.count=Math.min(400,this.stumpN),this.stumpMesh.instanceMatrix.needsUpdate=!0}depleteNode(e){e.dead||(e.dead=!0,e.amount=0,this.map.release(e.gx,e.gy,1),this.nodes.splice(this.nodes.indexOf(e),1),e.treeHandle!==void 0&&e.treeHandle!==null?(this.trees.remove(e.treeHandle),this.treeNodeByInstance.delete(e.treeHandle.idx),this.addStump(e.wx,this.map.heightAt(e.wx,e.wz)-.05,e.wz),this.sound("treefall")):e.mesh&&this.effects.fadeOut(e.mesh,1.2,.8))}findDropoff(e,t,n,i=!1){let s=null,o=1/0;for(const a of this.buildings){if(a.owner!==e||!a.complete||a.dead||!a.def.dropoff||i&&!a.def.isDock)continue;const c=Math.hypot(a.cx-t,a.cz-n);c<o&&(o=c,s=a)}return s}findNearestNode(e,t,n,i=30){let s=null,o=1/0;for(const a of this.nodes){if(a.dead||a.res!==e||a.amount<=0)continue;const c=Math.hypot(a.wx-t,a.wz-n);c<o&&c<=i&&(o=c,s=a)}return s}nodeReachable(e){if(!e||e.dead)return!1;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)if(!(n===0&&t===0)&&this.map.isWalkable(e.gx+n,e.gy+t))return!0;return!1}findNearestReachableNode(e,t,n,i=40,s=null){let o=null,a=1/0;for(const c of this.nodes){if(c.dead||c===s||c.res!==e||c.amount<=0)continue;const l=Math.hypot(c.wx-t,c.wz-n);l<=i&&l<a&&this.nodeReachable(c)&&(a=l,o=c)}return o}townBell(e){if(!e||e.dead||!e.complete)return;if(e.garrison?.length){for(const n of e.garrison){n.garrisoned=null,n.group.visible=!0;const[i,s]=e.spawnPoint();n.x=i,n.z=s,n.clearOrder(!0)}e.garrison=[],this.sound("command");return}let t=0;for(const n of this.units)n.owner!==e.owner||n.dead||n.type!=="villager"||n.garrisoned||Math.hypot(n.x-e.cx,n.z-e.cz)<45&&(n.orderGarrison(e),t++);e.owner===pe&&this.onAlert(t?`Town bell! ${t} villagers heading to safety.`:"No villagers in range of the bell."),this.sound("horn")}nearestEnemy(e,t,n,i,s=!1){let o=null,a=1/0;for(const c of this.units){if(!this.hostile(e,c.owner)||c.dead||c.garrisoned)continue;const l=Math.hypot(c.x-t,c.z-n);l<=i&&l<a&&(a=l,o=c)}if(s)for(const c of this.buildings){if(!this.hostile(e,c.owner)||c.dead)continue;const l=c.size*ze/2,h=Math.max(Math.abs(t-c.cx)-l,0),u=Math.max(Math.abs(n-c.cz)-l,0),d=Math.hypot(h,u)+4;Math.hypot(h,u)<=i&&d<a&&(a=d,o=c)}return o}hashKey(e,t){return(e/this.cell|0)*4096+(t/this.cell|0)}rebuildHash(){for(const e of this.hash.values())e.length=0;for(const e of this.units){const t=this.hashKey(e.x,e.z);let n=this.hash.get(t);n||(n=[],this.hash.set(t,n)),n.push(e)}}unitsNear(e,t,n){const i=[],s=this.cell,o=(e-n)/s|0,a=(e+n)/s|0,c=(t-n)/s|0,l=(t+n)/s|0;for(let h=o;h<=a;h++)for(let u=c;u<=l;u++){const d=this.hash.get(h*4096+u);if(d)for(const f of d)Math.hypot(f.x-e,f.z-t)<=n&&i.push(f)}return i}countBuildings(e){let t=0;for(const n of this.buildings)n.owner===e&&!n.dead&&t++;return t}update(e){if(this.gameOver){this.effects.update(e);return}this.time+=e,!this._wlChecked&&this.time>=5&&(this._wlChecked=!0,this.checkWinLose()),this.rebuildHash();const t=this._uScratch||(this._uScratch=[]);t.length=0;for(const i of this.units)t.push(i);for(const i of t)i.dead||i.update(e);const n=this._bScratch||(this._bScratch=[]);n.length=0;for(const i of this.buildings)n.push(i);for(const i of n)i.dead||i.update(e);for(const i of this.ais)i.update(e);this.fog?.update(this,e),this.effects.update(e),this.scenario&&(this._scT=(this._scT||0)-e,this._scT<=0&&(this._scT=1,this.checkScenario())),this.tick++,this.onTick?.()}sideDefeated(e){return this.countBuildings(e)>0?!1:!this.units.some(t=>t.owner===e&&!t.dead&&t.type==="villager")}checkScenario(){const e=this.scenario;!e||this.gameOver||this.time<5||(e.win&&e.win(this)?(this.gameOver=!0,this.fog?.revealAll(),this.onGameOver(!0)):e.timeLimit&&this.time>=e.timeLimit&&e.timeout&&(this.gameOver=!0,this.fog?.revealAll(),this.onGameOver(e.timeout==="win")))}checkWinLose(){if(this.gameOver||this.time<5)return;this.players.every((t,n)=>n===pe||this.sideDefeated(n))?(this.gameOver=!0,this.fog?.revealAll(),this.onGameOver(!0)):this.sideDefeated(pe)&&(this.gameOver=!0,this.fog?.revealAll(),this.onGameOver(!1))}}const Gy=[9,13,17,20],Vy=[8,13,19,27],Wy=[6,9,12,16],du={easy:{trickle:[0,0,0,0],villMul:.6,armyMul:.3,atkMul:3,firstWave:1e9,waveMul:3,ecoScale:1.8,maxAge:1},normal:{trickle:[3,3,2,1],villMul:1,armyMul:1,atkMul:1,firstWave:150,waveMul:1,ecoScale:1,maxAge:4},hard:{trickle:[6,6,4,2],villMul:1.15,armyMul:1.3,atkMul:.7,firstWave:85,waveMul:.7,ecoScale:.8,maxAge:4}};class Xy{constructor(e,t,n,i="normal",s=mv){this.game=e,this.me=s,this.baseGx=t,this.baseGy=n;const[o,a]=e.map.gridToWorld(t,n);this.baseX=o,this.baseZ=a,this.ecoT=0,this.stratT=3,this.defendT=0,this.attackTargetT=0,this.attacking=!1,this.trickleT=0,this.setDifficulty(i)}setDifficulty(e){this.difficulty=e,this.d=du[e]||du.normal,this.waveT=this.d.firstWave}villTarget(e){return Math.max(4,Math.round(Gy[e-1]*this.d.villMul))}armyCap(e){const t=Math.round(Vy[e-1]*this.d.armyMul),n=this.game.units.filter(i=>i.owner===0&&!i.dead&&i.type!=="villager").length;return Math.max(t,Math.min(40,Math.round(n*1.1*this.d.armyMul)))}attackThreshold(e){return Math.round(Wy[e-1]*this.d.atkMul)}p(){return this.game.players[this.me]}myUnits(e){return this.game.units.filter(t=>t.owner===this.me&&!t.dead&&(!e||t.type===e))}myBuildings(e){return this.game.buildings.filter(t=>t.owner===this.me&&!t.dead&&(!e||t.type===e))}army(){return this.game.units.filter(e=>e.owner===this.me&&!e.dead&&e.type!=="villager")}update(e){if(this.ecoT-=e,this.stratT-=e,this.waveT-=e,this.defendT-=e,this.trickleT+=e,this.trickleT>=5){this.trickleT-=5;const t=this.p().res,[n,i,s,o]=this.d.trickle;t.wood+=n,t.food+=i,t.gold+=s,t.stone=(t.stone||0)+(o||0)}this.ecoT<=0&&(this.ecoT=1.4*this.d.ecoScale,this.economy()),this.stratT<=0&&(this.stratT=2.6*this.d.ecoScale,this.strategy()),this.waveT<=0&&this.tryAttack(),this.attacking&&(this.attackTargetT-=e,this.attackTargetT<=0&&(this.attackTargetT=6,this.retarget()))}economy(){const e=this.p(),t=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];n&&n.complete&&t.length+n.trainQueue.length<this.villTarget(e.age)&&n.trainQueue.length<2&&n.queueTrain("villager"),e.popCap-e.popUsed<4&&e.popCap<120&&(this.myBuildings("house").some(c=>!c.complete)||this.construct("house"));const i=this.myBuildings().filter(a=>a.complete&&a.hp<a.maxHp*.7).sort((a,c)=>a.hp/a.maxHp-c.hp/c.maxHp)[0];if(i&&e.res.wood>30&&!t.some(c=>c.order?.kind==="build"&&c.order.building===i)){const c=t.find(l=>l.state==="idle")||null;c&&c.orderBuild(i)}for(const a of["wood","gold"])if(!this.game.findNearestReachableNode(a,this.baseX,this.baseZ,70)){const l=this.game.findNearestReachableNode(a,this.baseX,this.baseZ,400);l&&this.constructNear("storehouse",l.wx,l.wz)}const s=t.filter(a=>a.state==="idle");if(s.length){const a=this.neededResource(t);for(const c of s)if(a==="food"){const l=this.freeFarm(t);if(l){c.orderGatherFarm(l);continue}const h=this.game.findNearestNode("food",c.x,c.z,55);if(h){c.orderGather(h);continue}if(!this.construct("farm",c)){const u=this.game.findNearestNode("wood",c.x,c.z,60);u&&c.orderGather(u)}}else{const l=this.game.findNearestNode(a,this.baseX,this.baseZ,70)||this.game.findNearestNode("wood",c.x,c.z,70);l&&c.orderGather(l)}}const o=this.myBuildings("farm");e.age>=2&&o.length<3+e.age&&e.res.wood>150&&this.construct("farm")}neededResource(e){const t={wood:0,food:0,gold:0,stone:0};for(const l of e){const h=l.order;h&&(h.kind==="farm"?t.food++:h.kind==="gather"&&h.node&&t[h.node.res]++)}const n=this.p(),i=n.age>=2&&(n.res.stone||0)<120?.14:0,s=n.age===1?{wood:.38,food:.45,gold:.17,stone:0}:{wood:.32-i/2,food:.36,gold:.18,stone:i},o=Math.max(1,t.wood+t.food+t.gold+(t.stone||0));let a="food",c=-1/0;for(const l of["wood","food","gold","stone"]){const h=(s[l]||0)-(t[l]||0)/o;h>c&&(c=h,a=l)}return a}freeFarm(e){const t=new Set;for(const n of e)n.order?.kind==="farm"&&n.order.farm&&t.add(n.order.farm.id);return this.myBuildings("farm").find(n=>n.complete&&!t.has(n.id))||null}strategy(){const e=this.p(),t=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];if(!n){e.res.wood>=Gs.towncenter.cost.wood&&this.construct("towncenter");return}if(t.length>=6&&this.myBuildings("barracks").length===0&&this.construct("barracks"),this.myBuildings("storehouse").length===0&&t.length>=7){const a=this.game.findNearestNode("gold",this.baseX,this.baseZ,70);a&&Math.hypot(a.wx-this.baseX,a.wz-this.baseZ)>24&&this.constructNear("storehouse",a.wx,a.wz)}e.age>=2&&(this.myBuildings("archeryrange").length===0&&this.construct("archeryrange"),this.myBuildings("tower").length<2&&e.res.wood>200&&this.construct("tower"),this.myBuildings("blacksmith").length===0&&e.res.wood>180&&this.construct("blacksmith")),e.age>=3&&this.myBuildings("stable").length===0&&this.construct("stable"),e.age>=3&&this.myBuildings("market").length===0&&e.res.wood>220&&this.construct("market"),e.age>=4&&this.myBuildings("siegeworkshop").length===0&&this.construct("siegeworkshop");const i=this.myBuildings("blacksmith").find(a=>a.complete&&!a.researching);if(i){for(const[a,c]of Object.entries(Xi))if(!(e.age<c.age||e.techs.includes(a))&&!this.myBuildings("blacksmith").some(l=>l.researching?.tech===a)&&xn(e.res,c.cost)&&e.res.food>(c.cost.food||0)+120){i.startTech(a);break}}if(this.myBuildings("market").find(a=>a.complete)&&e.res.gold<60&&(e.res.wood>500?this.game.trade(this.me,"wood","sell"):e.res.food>800&&this.game.trade(this.me,"food","sell")),!e.ageResearchInProgress&&e.age<Kt.length&&e.age<this.d.maxAge){const a=Kt[e.age];if(t.length>=this.villTarget(e.age)-2&&xn(e.res,a.cost)&&n.complete){const l=e.age===1?60:120;e.res.food>=(a.cost.food||0)+l*.5&&n.startAgeResearch()}}if(this.army().length<this.armyCap(e.age)){const a=this.game.buildings.filter(h=>h.owner===pe&&!h.dead&&(h.type==="tower"||h.def.isWall)).length,c=this.myBuildings().filter(h=>h.complete&&h.def.trains&&h.type!=="towncenter");a>=4&&c.sort((h,u)=>(u.type==="siegeworkshop"?1:0)-(h.type==="siegeworkshop"?1:0));const l=this.game.units.filter(h=>h.owner===pe&&!h.dead&&h.def.cavalry).length;for(const h of c)if(!(h.trainQueue.length>=2)){h.type==="barracks"&&l>=3&&e.age>=cn.spearman.age&&h.queueTrain("spearman");for(const u of h.def.trains)e.age>=cn[u].age&&h.queueTrain(u)}}}tryAttack(){const e=this.army(),t=this.attackThreshold(this.p().age);e.length>=t?(this.attacking=!0,this.attackTargetT=0,this.wave=e.map(n=>n.id),this.waveSize0=this.wave.length,this.waveT=(100+this.game.rand()*40)*this.d.waveMul,this.retarget()):this.waveT=25*this.d.waveMul}waveUnits(){return this.wave?this.game.units.filter(e=>!e.dead&&this.wave.includes(e.id)):[]}retarget(){const e=this.pickPlayerTarget();if(!e){this.attacking=!1,this.wave=null;return}const t=this.waveUnits();if(t.length<Math.max(2,this.waveSize0*.35)){for(const n of t)n.orderMove(this.baseX,this.baseZ);this.attacking=!1,this.wave=null;return}for(const n of t)n.state==="fighting"||n.state==="toAttack"||n.orderAttackMove(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)}pickPlayerTarget(){const e=this.game.buildings.filter(n=>n.owner===pe&&!n.dead);return e.length?e.find(n=>n.def.trains&&n.type!=="towncenter")||e.find(n=>n.type==="towncenter")||e.find(n=>!n.def.isWall)||e[0]:null}onDamage(e,t){if(e.owner!==this.me||!t||t.dead||t.owner===this.me||this.defendT>0)return;this.defendT=4;const n=t.isBuilding?t.cx:t.x,i=t.isBuilding?t.cz:t.z,s=this.wave||[];for(const o of this.army()){if(s.includes(o.id))continue;o.state==="fighting"||o.state==="toAttack"||o.orderAttackMove(n,i)}}onBuildingLost(){}construct(e,t=null){return this.constructNear(e,this.baseX,this.baseZ,t)}constructNear(e,t,n,i=null){const s=this.game,o=Gs[e],a=this.p();if(a.age<o.age||!xn(a.res,o.cost)||!["house","farm","tower"].includes(e)&&this.myBuildings(e).some(u=>!u.complete))return!1;const c=this.findSpot(t,n,o.size);if(!c)return!1;const l=s.placeBuilding(this.me,e,c[0],c[1]);if(!l)return!1;const h=i||this.nearestFreeVillager(l.cx,l.cz);if(h&&h.orderBuild(l),!h){const u=this.myUnits("villager")[0];u&&u.orderBuild(l)}return!0}nearestFreeVillager(e,t){let n=null,i=1/0;for(const s of this.myUnits("villager")){if(s.state==="building"||s.state==="toBuild")continue;const o=Math.hypot(s.x-e,s.z-t);o<i&&(i=o,n=s)}return n}findSpot(e,t,n){const i=this.game.map,[s,o]=i.worldToGrid(e,t);for(let a=3;a<26;a+=1)for(let c=0;c<16;c++){const l=c/16*Math.PI*2+a*.37,h=Math.round(s+Math.cos(l)*a)-Math.floor(n/2),u=Math.round(o+Math.sin(l)*a)-Math.floor(n/2);if(i.canPlace(h-1,u-1,n+2))return[h,u]}return null}}const qy={villager:7,militia:8,archer:9,knight:9,catapult:9},Yy={towncenter:11,tower:13};class Ky{constructor(e){this.map=e,this.size=e.size,this.state=new Uint8Array(this.size*this.size),this.enabled=!0,this.revealed=!1,this.dirty=!0,this.version=0,this.updateT=0,this._circles=new Map}circle(e){let t=this._circles.get(e);if(!t){const n=[];for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++)s*s+i*i<=e*e&&n.push(s,i);t=Int16Array.from(n),this._circles.set(e,t)}return t}stamp(e,t,n){const i=this.circle(n),s=this.size,o=this.state;for(let a=0;a<i.length;a+=2){const c=e+i[a],l=t+i[a+1];c>=0&&l>=0&&c<s&&l<s&&(o[l*s+c]=2)}}update(e,t){!this.enabled||this.revealed||(this.updateT-=t,!(this.updateT>0)&&(this.updateT=.25,this.recompute(e)))}recompute(e){const t=this.state;for(let i=0;i<t.length;i++)t[i]===2&&(t[i]=1);const n=this.map;for(const i of e.units){if(i.dead||i.owner!==pe||i.garrisoned)continue;const[s,o]=n.worldToGrid(i.x,i.z);this.stamp(s,o,qy[i.type]??8)}for(const i of e.buildings){if(i.dead||i.owner!==pe)continue;const s=i.complete?Yy[i.type]??5+i.size:4;this.stamp(i.gx+(i.size>>1),i.gy+(i.size>>1),s)}this.dirty=!0,this.version++}stateAt(e,t){return!this.enabled||this.revealed?2:e<0||t<0||e>=this.size||t>=this.size?0:this.state[t*this.size+e]}stateAtWorld(e,t){const[n,i]=this.map.worldToGrid(e,t);return this.stateAt(n,i)}visibleWorld(e,t){return this.stateAtWorld(e,t)===2}exploredWorld(e,t){return this.stateAtWorld(e,t)>=1}revealAll(){this.revealed=!0,this.state.fill(2),this.dirty=!0,this.version++}}class jy{constructor(e,t,n){this.fog=n;const i=n.size;this.small=document.createElement("canvas"),this.small.width=this.small.height=i,this.smallCtx=this.small.getContext("2d"),this.img=this.smallCtx.createImageData(i,i),this.big=document.createElement("canvas"),this.big.width=this.big.height=i*3,this.bigCtx=this.big.getContext("2d"),this.tex=new Ti(this.big),this.tex.minFilter=Vt,this.tex.magFilter=Vt;const s=new Ln(Le,Le,i,i);s.rotateX(-Math.PI/2);const o=s.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a)+Le/2,l=o.getZ(a)+Le/2;o.setX(a,c),o.setZ(a,l),o.setY(a,Math.max(t.heightAt(c,l),Gt)+.9)}this.mesh=new De(s,new Pt({color:461328,transparent:!0,alphaMap:this.tex,depthWrite:!1})),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,this.mesh.name="fog-shroud",e.add(this.mesh),this.refresh()}refresh(){const e=this.fog.state,t=this.fog.revealed||!this.fog.enabled,n=this.img.data;for(let i=0;i<e.length;i++){const s=t||e[i]===2?0:e[i]===1?112:255;n[i*4+1]=s,n[i*4+3]=255}this.smallCtx.putImageData(this.img,0,0),this.bigCtx.filter="blur(2px)",this.bigCtx.drawImage(this.small,0,0,this.big.width,this.big.height),this.tex.needsUpdate=!0}}class $y{constructor(e,t){this.camera=e,this.map=t,this.target=new E(Le/2,0,Le/2),this.smoothTarget=this.target.clone(),this.dist=46,this.smoothDist=60,this.minDist=18,this.maxDist=95,this.pitch=.92,this.yaw=0,this.keys=new Set,this.mouseX=.5,this.mouseY=.5,this.edgePanEnabled=!0,window.addEventListener("keydown",n=>{n.target.tagName!=="INPUT"&&(document.querySelector(".overlay:not(.hidden)")||this.keys.add(n.code))}),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("blur",()=>this.keys.clear()),this.pointerIn=!1,this.overUI=!1,window.addEventListener("mousemove",n=>{this.mouseX=n.clientX/window.innerWidth,this.mouseY=n.clientY/window.innerHeight,this.pointerIn=!0,this.overUI=!(n.target&&n.target.id==="game-canvas")}),document.documentElement.addEventListener("mouseleave",()=>{this.pointerIn=!1})}jumpTo(e,t){this.target.x=e,this.target.z=t}panBy(e,t){this.target.x+=e,this.target.z+=t}zoomBy(e,t){const n=this.dist;this.dist=Sr.clamp(this.dist*(e>0?1.13:.885),this.minDist,this.maxDist),e<0&&t&&this.dist<n&&this.target.lerp(new E(t.x,0,t.z),.18)}update(e){const t=(14+this.dist*.55)*e;let n=0,i=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),this.edgePanEnabled&&document.hasFocus()&&this.pointerIn&&!this.overUI&&(this.mouseX<.008&&(n-=1),this.mouseX>1-.008&&(n+=1),this.mouseY<.008&&(i-=1),this.mouseY>1-.008&&(i+=1)),n||i){const l=Math.hypot(n,i);this.target.x+=n/l*t,this.target.z+=i/l*t}const s=6;this.target.x=Sr.clamp(this.target.x,s,Le-s),this.target.z=Sr.clamp(this.target.z,s,Le-s),this.target.y=this.map.heightAt(this.target.x,this.target.z),this.smoothTarget.lerp(this.target,Math.min(1,e*9)),this.smoothDist+=(this.dist-this.smoothDist)*Math.min(1,e*7);const o=this.camera,a=Math.cos(this.pitch)*this.smoothDist,c=Math.sin(this.pitch)*this.smoothDist;o.position.set(this.smoothTarget.x+Math.sin(this.yaw)*a,this.smoothTarget.y+c,this.smoothTarget.z+Math.cos(this.yaw)*a),o.lookAt(this.smoothTarget)}}let lt=null,yi=null,Gi=!1;const fu=new Map;function Zy(){if(lt){lt.state==="suspended"&&lt.resume();return}try{lt=new(window.AudioContext||window.webkitAudioContext),yi=lt.createGain(),yi.gain.value=.22,yi.connect(lt.destination),lt.state==="suspended"&&lt.resume();const r=()=>{lt&&lt.state==="suspended"&&lt.resume()};document.addEventListener("pointerdown",r),document.addEventListener("touchend",r),document.addEventListener("visibilitychange",()=>{document.hidden||r()})}catch{}}function Qy(){return Gi=!Gi,yi&&(yi.gain.value=Gi?0:.22),Gi}function Nd(){return lt?{ctx:lt,master:yi}:null}function Jy(r,e,t,n,i=1){r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(i,e+t),r.gain.exponentialRampToValueAtTime(.001,e+t+n)}function Rt(r,e,t="square",n=.5,i=0){if(!lt||Gi)return;const s=lt.currentTime,o=lt.createOscillator(),a=lt.createGain();o.type=t,o.frequency.setValueAtTime(r,s),i&&o.frequency.exponentialRampToValueAtTime(Math.max(30,r+i),s+e),Jy(a,s,.005,e,n),o.connect(a).connect(yi),o.start(s),o.stop(s+e+.05)}function Bi(r,e=.4,t=1200){if(!lt||Gi)return;const n=lt.currentTime,i=Math.ceil(lt.sampleRate*r),s=lt.createBuffer(1,i,lt.sampleRate),o=s.getChannelData(0);for(let h=0;h<i;h++)o[h]=(Math.random()*2-1)*(1-h/i);const a=lt.createBufferSource();a.buffer=s;const c=lt.createBiquadFilter();c.type="lowpass",c.frequency.value=t;const l=lt.createGain();l.gain.value=e,a.connect(c).connect(l).connect(yi),a.start(n)}const eS={select:()=>Rt(620,.06,"sine",.3),command:()=>{Rt(440,.05,"sine",.3),setTimeout(()=>Rt(560,.05,"sine",.25),45)},place:()=>Rt(330,.1,"triangle",.4),error:()=>Rt(160,.18,"sawtooth",.25,-40),chop:()=>Bi(.08,.3,900),hammer:()=>{Bi(.05,.25,2500),Rt(190,.05,"square",.12)},treefall:()=>Bi(.4,.3,500),melee:()=>{Bi(.07,.3,3500),Rt(900+Math.random()*300,.05,"square",.1,-300)},arrow:()=>Bi(.12,.18,4500),catapult:()=>{Rt(90,.3,"sawtooth",.3,-30),Bi(.25,.3,700)},die:()=>Rt(220,.25,"sawtooth",.18,-120),collapse:()=>{Bi(.7,.5,400),Rt(70,.5,"sawtooth",.25,-30)},horn:()=>{Rt(196,.55,"sawtooth",.3),setTimeout(()=>Rt(196*1.25,.5,"sawtooth",.28),240)},ageup:()=>[262,330,392,523].forEach((r,e)=>setTimeout(()=>Rt(r,.3,"triangle",.32),e*130)),built:()=>{Rt(392,.1,"triangle",.3),setTimeout(()=>Rt(523,.15,"triangle",.3),90)},ready:()=>Rt(523,.09,"sine",.25),victory:()=>[262,330,392,523,659,784].forEach((r,e)=>setTimeout(()=>Rt(r,e<5?.28:.9,"triangle",.34),e*150)),defeat:()=>[392,370,311,262,196].forEach((r,e)=>setTimeout(()=>Rt(r,e<4?.42:1.2,"sawtooth",.2),e*320))};function jc(r){if(!lt||Gi)return;const e=eS[r];if(!e)return;const t=performance.now(),n=fu.get(r)||0,i=r==="chop"||r==="hammer"||r==="melee"?90:140;t-n<i||(fu.set(r,t),e())}const pu=[[730,1090],[530,1840],[390,1990],[570,840],[440,1020]];let mu=0;function tS(r,e,t,n,i,s,o,a){const c=Math.floor(r.sampleRate*.025),l=r.createBuffer(1,c,r.sampleRate),h=l.getChannelData(0);for(let y=0;y<c;y++)h[y]=(Math.random()*2-1)*(1-y/c);const u=r.createBufferSource();u.buffer=l;const d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=1200+Math.random()*1800;const f=r.createGain();f.gain.value=o*.5,u.connect(d).connect(f).connect(e),u.start(t-.02);const m=r.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(n*(.96+Math.random()*.08),t),m.frequency.linearRampToValueAtTime(n,t+s);const _=r.createOscillator();_.frequency.value=11+Math.random()*6;const p=r.createGain();p.gain.value=n*(a?.05:.02),_.connect(p).connect(m.frequency);const[g,v]=i,x=r.createGain();x.gain.value=0;for(const[y,C,T]of[[g,9,1],[v,11,.55],[2600,13,.18]]){const A=r.createBiquadFilter();A.type="bandpass",A.frequency.value=y*(.95+Math.random()*.1),A.Q.value=C;const I=r.createGain();I.gain.value=T,m.connect(A).connect(I).connect(x)}x.gain.setValueAtTime(0,t),x.gain.linearRampToValueAtTime(o,t+.03),x.gain.setValueAtTime(o,t+s-.045),x.gain.linearRampToValueAtTime(0,t+s),x.connect(e),m.start(t-.02),m.stop(t+s+.03),_.start(t-.02),_.stop(t+s+.03)}function xr(r){const e=Nd();if(!e)return;const{ctx:t,master:n}=e,i=performance.now();if(i<mu)return;const s=r[0]==="m",o=r.endsWith("Select"),a=s?96+Math.random()*14:126+Math.random()*22,c=2+(Math.random()*2|0)+(o&&!s?1:0),l=t.createGain();l.gain.value=s?1.5:1.3;const h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=s?2400:3200,l.connect(h).connect(n);let u=t.currentTime+.01;for(let d=0;d<c;d++){const f=d/Math.max(1,c-1),m=o?1+(f>.6?(f-.6)*.55:0):1.08-f*.18,_=.09+Math.random()*.08+(d===c-1?.06:0),p=.5+Math.random()*.2-f*(o?0:.12);tS(t,l,u,a*m,pu[Math.random()*pu.length|0],_,p,s),u+=_+.015+Math.random()*.025}mu=i+(u-t.currentTime)*1e3+120}class nS{constructor({canvas:e,game:t,rtsCam:n,camera:i,terrainMesh:s,onSelectionChange:o,sound:a}){this.canvas=e,this.game=t,this.rtsCam=n,this.camera=i,this.terrain=s,this.onSelectionChange=o,this.sound=a,this.selection=[],this.groups=new Map,this.raycaster=new gd,this.mouseNDC=new fe,this.dragStart=null,this.dragging=!1,this.placing=null,this.idleVillIdx=0,this.boxEl=document.createElement("div"),this.boxEl.style.cssText="position:fixed;border:1.5px solid #7df58b;background:rgba(110,245,140,.12);pointer-events:none;display:none;z-index:20;",document.body.appendChild(this.boxEl),e.addEventListener("mousedown",c=>this.onMouseDown(c)),window.addEventListener("mousemove",c=>this.onMouseMove(c)),window.addEventListener("mouseup",c=>this.onMouseUp(c)),e.addEventListener("dblclick",c=>this.onDblClick(c)),e.addEventListener("contextmenu",c=>c.preventDefault()),e.addEventListener("wheel",c=>{c.preventDefault();const l=this.groundPoint(c.clientX,c.clientY);this.rtsCam.zoomBy(c.deltaY,l)},{passive:!1}),window.addEventListener("keydown",c=>this.onKeyDown(c)),this.setupTouch()}setupTouch(){const e="ontouchstart"in window||navigator.maxTouchPoints>0;this.boxArmed=!1,this.touch=null,this.pinch=null;const t=this.canvas,n=12,i=400;t.addEventListener("touchstart",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0];this.touch={x0:a.clientX,y0:a.clientY,x:a.clientX,y:a.clientY,t0:performance.now(),moved:!1},this.placing&&this.updateGhost(a.clientX,a.clientY),this.boxArmed&&(this.dragStart={x:a.clientX,y:a.clientY,shift:!1},this.dragging=!1)}else if(o.touches.length===2){this.touch=null,this.dragStart=null,this.dragging=!1,this.boxEl.style.display="none",this.placing&&this.cancelPlacement();const[a,c]=o.touches;this.pinch={d:Math.hypot(a.clientX-c.clientX,a.clientY-c.clientY),mx:(a.clientX+c.clientX)/2,my:(a.clientY+c.clientY)/2}}},{passive:!1}),window.addEventListener("touchmove",o=>{if(this.pinch&&o.touches.length>=2){o.preventDefault();const[a,c]=o.touches,l=Math.hypot(a.clientX-c.clientX,a.clientY-c.clientY),h=(a.clientX+c.clientX)/2,u=(a.clientY+c.clientY)/2;if(this.pinch.d>0){const d=this.pinch.d/l;this.rtsCam.dist=Sr.clamp(this.rtsCam.dist*d,this.rtsCam.minDist,this.rtsCam.maxDist)}this.panScreen(this.pinch.mx,this.pinch.my,h,u),this.pinch={d:l,mx:h,my:u};return}if(this.touch&&o.touches.length===1){o.preventDefault();const a=o.touches[0],c=this.touch.x,l=this.touch.y;if(this.touch.x=a.clientX,this.touch.y=a.clientY,Math.hypot(a.clientX-this.touch.x0,a.clientY-this.touch.y0)>n&&(this.touch.moved=!0),this.placing){this.updateGhost(a.clientX,a.clientY);return}if(this.boxArmed&&this.dragStart){this.dragging=!0;const h=Math.min(a.clientX,this.dragStart.x),u=Math.min(a.clientY,this.dragStart.y);this.boxEl.style.display="block",this.boxEl.style.left=h+"px",this.boxEl.style.top=u+"px",this.boxEl.style.width=Math.abs(a.clientX-this.dragStart.x)+"px",this.boxEl.style.height=Math.abs(a.clientY-this.dragStart.y)+"px";return}this.touch.moved&&this.panScreen(c,l,a.clientX,a.clientY)}},{passive:!1}),window.addEventListener("touchend",o=>{if(this.pinch&&o.touches.length<2&&(this.pinch=null),!this.touch)return;const a=this.touch,c=!a.moved&&performance.now()-a.t0<i;o.touches.length===0&&(this.placing?this.tryPlace(!1):this.boxArmed?(this.dragging&&this.boxSelect(this.dragStart,{x:a.x,y:a.y},!1),this.setBoxArmed(!1)):c&&this.handleTap(a.x0,a.y0),this.dragStart=null,this.dragging=!1,this.boxEl.style.display="none",this.touch=null)},{passive:!1});const s=document.getElementById("touch-box-btn");s&&(e&&s.classList.remove("hidden"),s.addEventListener("click",()=>this.setBoxArmed(!this.boxArmed))),e&&document.body.classList.add("is-touch")}setBoxArmed(e){this.boxArmed=e;const t=document.getElementById("touch-box-btn");t&&t.classList.toggle("armed",e)}panScreen(e,t,n,i){const s=this.screenToPlane(e,t),o=this.screenToPlane(n,i);s&&o&&this.rtsCam.panBy(s.x-o.x,s.z-o.z)}screenToPlane(e,t){this.setRayFrom(e,t);const n=this.raycaster.ray,i=this.rtsCam.smoothTarget.y;if(Math.abs(n.direction.y)<1e-5)return null;const s=(i-n.origin.y)/n.direction.y;return s<=0?null:new E().copy(n.direction).multiplyScalar(s).add(n.origin)}handleTap(e,t){if(this.attackMoveArmed){this.fireAttackMove(e,t);return}const n=this.pick(e,t)||{},i=n.entity||null,s=this.selection.filter(l=>!l.dead&&l.owner===pe),o=s.filter(l=>l.isUnit),a=s.filter(l=>l.isBuilding);if(o.length){const l=i&&i.owner!==pe?i:this.unitNearScreen(e,t,34,"foe");if(l)return this.dispatchContext({entity:l});if(n.node)return this.dispatchContext(n);if(i?.isBuilding&&i.owner===pe){const u=o.some(f=>f.type==="villager"&&f.carry?.amt>0),d=o.some(f=>f.type==="villager");if(!i.complete||i.def.isFarm||i.def.dropoff&&u||d&&i.hp<i.maxHp-.5)return this.dispatchContext({entity:i});this.select([i]),this.selectFeedback([i]);return}const h=i?.isUnit&&i.owner===pe?i:this.unitNearScreen(e,t,30,pe);if(h){this.select([h]),this.selectFeedback([h]);return}if(n.point)return this.dispatchContext(n);this.select([]);return}if(a.length){if(i&&i.owner===pe){this.select([i]),this.selectFeedback([i]);return}if(n.node||n.point)return this.dispatchContext(n);if(i){this.select([i]),this.onSelectionChange(this.selection);return}this.select([]);return}const c=i&&i.owner===pe?i:this.unitNearScreen(e,t,34,pe);if(c){this.select([c]),this.selectFeedback([c]);return}if(i){this.select([i]),this.onSelectionChange(this.selection);return}this.select([])}setRayFrom(e,t){this.mouseNDC.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.mouseNDC,this.camera)}groundPoint(e,t){this.setRayFrom(e,t);const n=this.raycaster.intersectObject(this.terrain,!1);return n.length?n[0].point:null}pick(e,t){this.setRayFrom(e,t);const n=this.game,i=[];for(const h of n.units)h.group.visible&&i.push(h.group);for(const h of n.buildings)h.group.visible&&i.push(h.group);for(const h of n.nodes)h.mesh&&h.mesh.visible&&i.push(h.mesh);const s=this.raycaster.intersectObjects(i,!0),o=this.raycaster.intersectObjects(n.trees.pickMeshes,!1),a=this.raycaster.intersectObject(this.terrain,!1);let c=null,l=1/0;if(s.length&&s[0].distance<l){l=s[0].distance;let h=s[0].object;for(;h&&!h.userData.entity&&!h.userData.node;)h=h.parent;h?.userData.entity?c={entity:h.userData.entity}:h?.userData.node?c={node:h.userData.node}:c=null}if(o.length&&o[0].distance<l){const h=n.treeNodeByInstance.get(o[0].instanceId);h&&!h.dead&&(c={node:h},l=o[0].distance)}return!c&&a.length?{point:a[0].point}:c&&a.length&&a[0].distance<l-.5?{point:a[0].point}:c||null}select(e,t=!1){if(!t){for(const n of this.selection)n.setSelected(!1);this.selection=[]}for(const n of e)!this.selection.includes(n)&&!n.dead&&(this.selection.push(n),n.setSelected(!0));this.pruneSelection(),this.onSelectionChange(this.selection)}pruneSelection(){this.selection=this.selection.filter(e=>!e.dead)}selectedUnits(e=!0){return this.pruneSelection(),this.selection.filter(t=>t.isUnit&&(!e||t.owner===pe))}onMouseDown(e){if(e.button===0){if(this.placing){if(this.placing.def.isWall){this.placing.lineStart={gx:this.placing.gx,gy:this.placing.gy};return}this.tryPlace(e.shiftKey);return}if(this.attackMoveArmed){this.fireAttackMove(e.clientX,e.clientY);return}this.dragStart={x:e.clientX,y:e.clientY,shift:e.shiftKey},this.dragging=!1}else if(e.button===2){if(this.placing){this.cancelPlacement();return}if(this.attackMoveArmed){this.disarmAttackMove();return}this.issueContextCommand(e.clientX,e.clientY,e.shiftKey)}}armAttackMove(){this.selectedUnits().some(e=>e.type!=="villager")&&(this.attackMoveArmed=!0,this.canvas.style.cursor="crosshair")}disarmAttackMove(){this.attackMoveArmed=!1,this.canvas.style.cursor="default"}fireAttackMove(e,t){this.disarmAttackMove();const n=this.pick(e,t),i=this.selectedUnits().filter(o=>o.type!=="villager");if(!i.length||!n)return;const s=i.map(o=>o.id);if(n.entity&&n.entity.owner!==pe)this.game.exec({k:"attack",ids:s,t:n.entity.id});else{const o=n.point||(n.node?{x:n.node.wx,z:n.node.wz}:null);if(!o)return;this.game.exec({k:"attackmove",ids:s,x:o.x,z:o.z})}this.ackFeedback(i)}onDblClick(e){const n=this.pick(e.clientX,e.clientY)?.entity;if(!n?.isUnit||n.owner!==pe)return;const i=new E,s=this.game.units.filter(o=>o.owner!==pe||o.dead||o.type!==n.type||o.garrisoned?!1:(i.set(o.x,o.group.position.y+.8,o.z).project(this.camera),i.z<1&&Math.abs(i.x)<=1&&Math.abs(i.y)<=1));s.length&&(this.select(s),this.selectFeedback(s))}cycleIdleVillager(){const e=this.game.units.filter(n=>n.owner===pe&&n.type==="villager"&&!n.dead&&n.state==="idle"&&!n.garrisoned);if(!e.length)return;this.idleVillIdx=(this.idleVillIdx+1)%e.length;const t=e[this.idleVillIdx];this.select([t]),this.rtsCam.jumpTo(t.x,t.z)}onMouseMove(e){this.placing&&(this.updateGhost(e.clientX,e.clientY),this.placing.lineStart&&this.updateWallLine()),this.hoverT=this.hoverT||0;const t=performance.now();if(!this.placing&&!this.attackMoveArmed&&t-this.hoverT>130)if(this.hoverT=t,this.selectedUnits().some(n=>n.type!=="villager")){const n=this.pick(e.clientX,e.clientY);this.canvas.style.cursor=n?.entity&&n.entity.owner!==pe?"pointer":"default"}else this.canvas.style.cursor==="pointer"&&(this.canvas.style.cursor="default");if(this.dragStart){const n=e.clientX-this.dragStart.x,i=e.clientY-this.dragStart.y;if(!this.dragging&&Math.hypot(n,i)>6&&(this.dragging=!0),this.dragging){const s=Math.min(e.clientX,this.dragStart.x),o=Math.min(e.clientY,this.dragStart.y);this.boxEl.style.display="block",this.boxEl.style.left=s+"px",this.boxEl.style.top=o+"px",this.boxEl.style.width=Math.abs(n)+"px",this.boxEl.style.height=Math.abs(i)+"px"}}}wallLineTiles(){const e=this.placing;if(!e?.lineStart)return[];const t=[];let{gx:n,gy:i}=e.lineStart;const s=e.gx,o=e.gy,a=Math.abs(s-n),c=Math.abs(o-i),l=n<s?1:-1,h=i<o?1:-1;let u=a-c,d=n,f=i;for(let m=0;m<40&&(t.push([d,f]),!(d===s&&f===o));m++){const _=2*u;_>-c&&(u-=c,d+=l),_<a&&(u+=a,f+=h)}return t}updateWallLine(){if(!this.linePreview){this.linePreview=[];const t=new Ln(1.8,1.8);t.rotateX(-Math.PI/2);for(let n=0;n<40;n++){const i=new De(t,new Pt({color:5111646,transparent:!0,opacity:.45,depthWrite:!1}));i.visible=!1,i.renderOrder=3,this.game.scene.add(i),this.linePreview.push(i)}}const e=this.wallLineTiles();for(let t=0;t<this.linePreview.length;t++){const n=this.linePreview[t];if(t<e.length){const[i,s]=e[t],[o,a]=this.game.map.gridToWorld(i,s);n.visible=!0,n.position.set(o,this.game.map.heightAt(o,a)+.1,a),n.material.color.setHex(this.game.canPlaceBuilding(i,s,1)?5111646:16728112)}else n.visible=!1}}hideWallLine(){if(this.linePreview)for(const e of this.linePreview)e.visible=!1}onMouseUp(e){if(e.button===0&&this.placing?.lineStart){const o=this.wallLineTiles(),a=this.selectedUnits().filter(l=>l.type==="villager");this.game.exec({k:"placeline",t:this.placing.type,o:pe,tiles:o,ids:a.map(l=>l.id)})?this.sound("place"):this.sound("error"),this.placing.lineStart=null,this.hideWallLine(),e.shiftKey||this.cancelPlacement();return}if(e.button!==0||!this.dragStart)return;const t=this.dragStart;if(this.dragStart=null,this.boxEl.style.display="none",this.dragging){this.dragging=!1,this.boxSelect(t,{x:e.clientX,y:e.clientY},t.shift);return}let i=this.pick(e.clientX,e.clientY)?.entity||null;const s=this.unitNearScreen(e.clientX,e.clientY,30);s&&(!i||i.isBuilding)&&(i=s),i?(this.select([i],t.shift),this.selectFeedback([i])):t.shift||this.select([])}unitNearScreen(e,t,n,i=null){const s=new E;let o=null,a=n*n;for(const c of this.game.units){if(c.dead||!c.group.visible||(i==="foe"?c.owner===pe:i!==null&&c.owner!==i)||(s.set(c.x,c.group.position.y+.9,c.z).project(this.camera),s.z>=1))continue;const l=(s.x+1)/2*window.innerWidth,h=(1-s.y)/2*window.innerHeight,u=(l-e)**2+(h-t)**2;u<a&&(a=u,o=c)}return o}boxSelect(e,t,n){const i=Math.min(e.x,t.x),s=Math.max(e.x,t.x),o=Math.min(e.y,t.y),a=Math.max(e.y,t.y),c=new E,l=[];for(const h of this.game.units){if(h.owner!==pe||h.dead)continue;c.set(h.x,h.group.position.y+.8,h.z).project(this.camera);const u=(c.x+1)/2*window.innerWidth,d=(1-c.y)/2*window.innerHeight;u>=i&&u<=s&&d>=o&&d<=a&&c.z<1&&l.push(h)}if(l.length){const h=l.filter(u=>u.type!=="villager");this.select(h.length?h:l,n),this.selectFeedback(this.selection)}else n||this.select([])}selectFeedback(e){const t=e.filter(n=>n.owner===pe);t.some(n=>n.isUnit&&n.type!=="villager")?xr("mSelect"):t.some(n=>n.isUnit)?xr("vSelect"):this.sound("select")}ackFeedback(e){e.some(t=>t.type!=="villager")?xr("mAck"):e.length?xr("vAck"):this.sound("command")}issueContextCommand(e,t,n=!1){let i=this.pick(e,t);if(i||(i={}),!i.entity&&!i.node){const s=this.unitNearScreen(e,t,22,"foe");s&&(i={entity:s})}this.dispatchContext(i,n)}dispatchContext(e,t=!1){const n=this.selection.filter(c=>!c.dead&&c.owner===pe);if(!n.length||!e||!e.entity&&!e.node&&!e.point)return;const i=n.filter(c=>c.isUnit),s=n.filter(c=>c.isBuilding),o=this.game,a=i.map(c=>c.id);if(!i.length&&s.length){const c=s.map(l=>l.id);e.node?o.exec({k:"rally",bs:c,n:e.node.id}):e.entity?.isBuilding&&e.entity.def.isFarm&&e.entity.owner===pe?o.exec({k:"rally",bs:c,f:e.entity.id}):e.point&&o.exec({k:"rally",bs:c,x:e.point.x,z:e.point.z}),this.sound("command");return}if(i.length){if(e.entity){const c=e.entity;c.owner!==pe?(o.exec({k:"attack",ids:a,t:c.id,shift:t}),this.ackFeedback(i)):c.isBuilding&&(!c.complete||c.hp<c.maxHp-.5)&&!c.def.isFarm?(o.exec({k:"build",ids:a,b:c.id,shift:t}),this.ackFeedback(i.filter(l=>l.type==="villager"))):c.isBuilding&&c.def.isFarm?(o.exec({k:"farm",ids:a,f:c.id,shift:t}),this.ackFeedback(i.filter(l=>l.type==="villager"))):c.isBuilding&&c.def.dropoff?(o.exec({k:"deposit",ids:a,b:c.id,shift:t}),this.ackFeedback(i)):(o.exec({k:"move",ids:a,x:c.isBuilding?c.cx:c.x,z:c.isBuilding?c.cz:c.z,shift:t}),this.ackFeedback(i));return}if(e.node){o.exec({k:"gather",ids:a,n:e.node.id,shift:t}),this.ackFeedback(i);return}e.point&&(o.exec({k:"move",ids:a,x:e.point.x,z:e.point.z,shift:t}),this.ackFeedback(i))}}startPlacement(e){this.cancelPlacement();const t=Gs[e],n=new En({color:5111646,transparent:!0,opacity:.55,depthWrite:!1}),i=Dd(e,this.game.players[pe].age,t.size)||Td[e](this.game.teamColor(pe));i.traverse(s=>{s.isMesh&&(s.material=n,s.castShadow=!1)}),this.game.scene.add(i),this.placing={type:e,def:t,ghost:i,ghostMat:n,valid:!1,gx:0,gy:0}}updateGhost(e,t){const n=this.placing,i=this.groundPoint(e,t);if(!i){n.ghost.visible=!1;return}const s=this.game.map,o=Math.round(i.x/ze-n.def.size/2),a=Math.round(i.z/ze-n.def.size/2);n.gx=o,n.gy=a;const c=(o+n.def.size/2)*ze,l=(a+n.def.size/2)*ze;n.ghost.visible=!0,n.ghost.position.set(c,s.heightAt(c,l),l),n.valid=this.game.canPlaceBuilding(o,a,n.def.size)&&(!n.def.isDock||this.game.map.hasAdjacentWater(o,a,n.def.size)),n.ghostMat.color.setHex(n.valid?5111646:16728112)}tryPlace(e){const t=this.placing;if(!t||!t.valid){this.sound("error");return}const n=this.selectedUnits().filter(s=>s.type==="villager");if(!this.game.exec({k:"place",t:t.type,o:pe,gx:t.gx,gy:t.gy,ids:n.map(s=>s.id)})){this.sound("error");return}this.sound("place"),e?(t.valid=!1,t.ghost.visible=!1):this.cancelPlacement()}cancelPlacement(){this.placing&&(this.game.scene.remove(this.placing.ghost),this.placing=null,this.hideWallLine())}onKeyDown(e){if(!document.querySelector(".overlay:not(.hidden)")){if(e.code==="Escape"){this.placing?this.cancelPlacement():this.attackMoveArmed?this.disarmAttackMove():this.select([]);return}if(e.code==="KeyA"&&!e.ctrlKey&&!e.metaKey){this.armAttackMove();return}if(e.code==="KeyM"){const t=this.game.units.filter(n=>n.owner===pe&&!n.dead&&n.type!=="villager"&&!n.garrisoned);t.length&&(this.select(t),this.selectFeedback(t));return}if(e.code.startsWith("Digit")){const t=e.code.slice(5);if(t==="0")return;if(e.shiftKey||e.ctrlKey||e.metaKey)e.preventDefault(),this.groups.set(t,[...this.selection]),this.sound("command");else{const n=(this.groups.get(t)||[]).filter(i=>!i.dead);if(n.length){this.select(n);const i=performance.now(),s=this.lastRecall?.d===t&&i-this.lastRecall.t<450;this.lastRecall={d:t,t:i};const o=n[0];(s||e.repeat)&&this.rtsCam.jumpTo(o.isBuilding?o.cx:o.x,o.isBuilding?o.cz:o.z)}}return}if(e.code==="KeyH"){const t=this.game.buildings.find(n=>n.owner===pe&&n.type==="towncenter"&&!n.dead);t&&(this.rtsCam.jumpTo(t.cx,t.cz),this.select([t]));return}if(e.code==="Period"){this.cycleIdleVillager();return}e.code==="KeyT"&&this.game.exec({k:"stop",ids:this.selectedUnits().map(t=>t.id)})}}}let ot=null,jt=null,Vi=null,Pr=!1,Ud=null,vr=0,Fd=0;const iS=[0,2,3,5,7,9,10],sS=50,rS=[0,2,6,3,0,4,6,0],oS=[0,5,0,4,0,5,3,0];let ur=0,Ms=0,Oi=7;const Bd=r=>440*Math.pow(2,(r-69)/12),Ao=(r,e=0)=>sS+12*(e+Math.floor(r/7))+iS[(r%7+7)%7],gu=new Map;function aS(r){let e=gu.get(r);if(e)return e;const t=ot.sampleRate,n=Bd(r),i=Math.max(2,Math.round(t/n)),o=Math.floor(t*1.6);e=ot.createBuffer(1,o,t);const a=e.getChannelData(0),c=new Float32Array(i);for(let u=0;u<i;u++)c[u]=Math.random()*2-1;let l=0;const h=.995+Math.min(.0045,n/9e4);for(let u=0;u<o;u++){const d=c[l],f=c[(l+1)%i];c[l]=h*.5*(d+f),a[u]=d,l=(l+1)%i}return gu.set(r,e),e}function _u(r,e,t=.5){const n=ot.createBufferSource();n.buffer=aS(r);const i=ot.createGain();i.gain.value=t,n.connect(i),i.connect(jt),i.connect(Vi),n.start(e)}function xu(r,e,t,n=.4){const i=ot.createOscillator();i.type="sine";const s=Bd(r);i.frequency.setValueAtTime(s,e);const o=ot.createOscillator();o.frequency.value=5.2;const a=ot.createGain();a.gain.value=s*.008,o.connect(a).connect(i.frequency);const c=ot.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(n,e+.08),c.gain.setValueAtTime(n,e+t-.12),c.gain.linearRampToValueAtTime(0,e+t),i.connect(c),c.connect(jt),c.connect(Vi),i.start(e),i.stop(e+t+.05),o.start(e),o.stop(e+t+.05)}function dr(r,e,t=!0){if(e<=.01)return;const n=ot.createOscillator();n.type="sine",n.frequency.setValueAtTime(t?110:180,r),n.frequency.exponentialRampToValueAtTime(t?48:80,r+.12);const i=ot.createGain();i.gain.setValueAtTime(e,r),i.gain.exponentialRampToValueAtTime(.001,r+.22),n.connect(i).connect(jt),n.start(r),n.stop(r+.3);const s=Math.floor(ot.sampleRate*.05),o=ot.createBuffer(1,s,ot.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const c=ot.createBufferSource();c.buffer=o;const l=ot.createGain();l.gain.value=e*.5;const h=ot.createBiquadFilter();h.type="bandpass",h.frequency.value=t?300:700,c.connect(h).connect(l).connect(jt),c.start(r)}function cS(){const r=ot.sampleRate,t=Math.floor(r*1.9),n=ot.createBuffer(2,t,r);for(let s=0;s<2;s++){const o=n.getChannelData(s);for(let a=0;a<t;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/t,2.4)}const i=ot.createConvolver();return i.buffer=n,i}function lS(r){const e=vr,n=60/(68+e*26),i=n*4,s=e>.5?oS:rS,o=s[ur%s.length],a=[o,o+2,o+4];ur%4===0&&(_u(Ao(o,-1),r,.34),xu(Ao(o,0),r+.02,i*.96,.05+e*.03));const c=[0,2,1,2,0,2,1,2];for(let l=0;l<8;l++){if(e<.4&&(ur+l)%7===3)continue;const u=a[c[l]]+(l===4&&Math.random()<.4?7:0),d=(l%4===0?.4:.22)*(.8+Math.random()*.35);_u(Ao(u,1),r+l*n*.5,d)}if(ur%2===(e>.5?0:1)&&Math.random()<.85){let l=r+n*(Math.random()<.5?0:.5);const h=2+(Math.random()*3|0);for(let u=0;u<h&&l<r+i-.2;u++){const d=[-2,-1,-1,1,1,2][Math.random()*6|0];Oi+=d,Oi<5&&(Oi+=4),Oi>13&&(Oi-=4),u===h-1&&(Oi=a[Math.random()*3|0]+7);const f=n*(Math.random()<.3?1.5:.75);xu(Ao(Oi-7+(e>.5?0:7),1),l,f,.16+Math.random()*.07),l+=f+(Math.random()<.3?n*.5:0)}}return e>.06&&(dr(r,.5*e,!0),dr(r+n*1.5,.3*e,!1),dr(r+n*2,.45*e,!0),e>.6&&dr(r+n*3,.3*e,!1),e>.8&&Math.random()<.5&&dr(r+n*3.5,.25*e,!1)),ur++,i}function hS(){if(!Pr)return;const r=performance.now()<Fd?1:0;for(vr+=(r-vr)*.06,vr<.01&&(vr=0);Ms<ot.currentTime+.5;)Ms<ot.currentTime&&(Ms=ot.currentTime+.05),Ms+=lS(Ms)}function uS(){const r=Nd();if(!r||Pr)return;ot=r.ctx,jt=ot.createGain(),jt.gain.value=.55,jt.connect(r.master);const e=cS();Vi=ot.createGain(),Vi.gain.value=.35,Vi.connect(e),e.connect(jt),Pr=!0,Ms=ot.currentTime+.1,Ud=setInterval(hS,120)}function dS(r=1.5){if(Pr&&(Pr=!1,clearInterval(Ud),jt)){const e=ot.currentTime;jt.gain.setValueAtTime(jt.gain.value,e),jt.gain.linearRampToValueAtTime(1e-4,e+r);const t=jt,n=Vi;setTimeout(()=>{try{t.disconnect(),n.disconnect()}catch{}},r*1e3+100),jt=null,Vi=null}}function Od(){Fd=performance.now()+9e3}const fS={wood:"🪵",food:"🍖",gold:"🪙",stone:"🪨"},pS=["KeyQ","KeyE","KeyR","KeyF","KeyG","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyY"];function pi(r){if(!r)return"";const e=[];for(const t of["wood","food","gold","stone"])r[t]&&e.push(`${fS[t]}${r[t]}`);return e.join(" ")}class mS{constructor(e,t){this.game=e,this.input=t,this.selection=[],this.dyn=[],this.structKey=null,this.el={wood:document.getElementById("res-wood"),food:document.getElementById("res-food"),gold:document.getElementById("res-gold"),stone:document.getElementById("res-stone"),pop:document.getElementById("res-pop"),age:document.getElementById("age-disp"),alerts:document.getElementById("alerts"),selTitle:document.getElementById("sel-title"),selSub:document.getElementById("sel-sub"),selCards:document.getElementById("sel-cards"),queueRow:document.getElementById("queue-row"),cmdPanel:document.getElementById("cmd-panel"),gameover:document.getElementById("gameover-overlay"),gameoverTitle:document.getElementById("gameover-title"),gameoverSub:document.getElementById("gameover-sub"),idleBtn:document.getElementById("idle-btn"),idleCount:document.getElementById("idle-count")},this.hotkeys=new Map,e.onAlert=(n,i)=>this.alert(n,i),e.onGameOver=n=>this.showGameOver(n),this.el.idleBtn.classList.remove("hidden"),this.el.idleBtn.addEventListener("click",()=>this.input.cycleIdleVillager()),window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||n.shiftKey||n.ctrlKey||n.metaKey||document.querySelector(".overlay:not(.hidden)"))return;const i=this.hotkeys.get(n.code);i&&!i.classList.contains("disabled")&&i.click()})}alert(e,t=!1){const n=document.createElement("div");for(n.className="alert"+(t?" good":""),n.textContent=e,this.el.alerts.appendChild(n),setTimeout(()=>n.remove(),4200);this.el.alerts.children.length>4;)this.el.alerts.firstChild.remove()}showGameOver(e){dS(),jc(e?"victory":"defeat"),this.el.gameover.classList.remove("hidden"),this.el.gameoverTitle.textContent=e?"Victory!":"Defeat",this.el.gameoverTitle.className=e?"victory":"defeat",this.el.gameoverSub.textContent=e?"The enemy base lies in ruins. Your empire stands triumphant!":"Your base has been destroyed. The enemy empire prevails.",this.renderScore()}renderScore(){const e=document.getElementById("score-table");if(!e)return;const t=this.game,n=Math.floor(t.time/60),i=Math.floor(t.time%60),s=(c,l)=>Math.round((c.wood+c.food+c.gold+c.stone)*.1+c.kills*20+c.razed*50+c.built*15+c.trained*5+l.techs.length*100+(l.age-1)*200),o=[["Resources gathered",c=>(c.wood+c.food+c.gold+c.stone).toLocaleString()],["Units trained",c=>c.trained],["Units lost",c=>c.lost],["Enemy units killed",c=>c.kills],["Buildings built",c=>c.built],["Buildings lost",c=>c.bLost],["Buildings destroyed",c=>c.razed],["Techs / Age",(c,l)=>`${l.techs.length} / ${Kt[l.age-1].name.replace(" Age","")}`],["SCORE",(c,l)=>`<b>${s(c,l).toLocaleString()}</b>`]];let a=`<div style="color:#9c8f6e;font-size:12px;margin:4px 0">Match time ${n}:${String(i).padStart(2,"0")}</div>`;a+='<table class="score"><tr><th style="text-align:left"></th>'+t.players.map((c,l)=>`<th>${l===pe?"You":_v[l]}</th>`).join("")+"</tr>";for(const[c,l]of o)a+=`<tr><td style="text-align:left">${c}</td>`+t.players.map((h,u)=>`<td>${l(t.stats[u],h)}</td>`).join("")+"</tr>";e.innerHTML=a+"</table>"}setSelection(e){this.selection=e,this.structKey=null,this.renderSelection()}computeStructKey(){const e=this.selection.filter(s=>!s.dead),t=this.game.players[pe];let n=e.map(s=>s.id).join(",")+"|"+t.age+"|"+t.techs.length;const i=e[0];return e.length===1&&i?.isBuilding&&(n+="|"+(i.complete?"c":"u")+"|"+i.trainQueue.join(",")+"|"+(i.researching?"R":"")+"|"+(t.ageResearchInProgress?"A":"")+"|"+(i.garrison?.length||0)),n}update(e){const t=this.game.players[pe];if(this.el.wood.textContent=Math.floor(t.res.wood),this.el.food.textContent=Math.floor(t.res.food),this.el.gold.textContent=Math.floor(t.res.gold),this.el.stone.textContent=Math.floor(t.res.stone||0),this.el.pop.textContent=`${t.popUsed}/${t.popCap}`,this.el.age.textContent=Kt[t.age-1].name+(t.ageResearchInProgress?" ⏳":""),this.idleT=(this.idleT||0)-e,this.idleT<=0){this.idleT=.5;const i=this.game.units.filter(s=>s.owner===pe&&!s.dead&&s.type==="villager"&&s.state==="idle"&&!s.garrisoned).length;this.el.idleCount.textContent=i,this.el.idleBtn.classList.toggle("none",i===0)}const n=this.computeStructKey();if(n!==this.structKey)this.structKey=n,this.renderSelection();else for(const i of this.dyn)i()}renderSelection(){const e=this.selection.filter(d=>!d.dead),{selTitle:t,selSub:n,selCards:i,queueRow:s,cmdPanel:o}=this.el;if(i.innerHTML="",s.innerHTML="",o.innerHTML="",this.dyn=[],this.hotkeys.clear(),this._keyIdx=0,!e.length){t.textContent="No selection",n.textContent="Left-click or drag to select your units.";return}const a=e[0];if(e.length===1){const d=a.def;t.textContent=d.name+(a.owner!==pe?" (enemy)":"");const f=()=>{let m=`HP ${Math.ceil(a.hp)}/${a.maxHp}`;return a.isBuilding&&!a.complete&&(m+=` — under construction ${Math.floor(a.progress*100)}%`),a.isUnit&&a.carry?.amt>0&&(m+=` — carrying ${Math.floor(a.carry.amt)} ${a.carry.res}`),a.isUnit&&d.atk&&(m+=` — ATK ${d.atk}`),m};n.textContent=f(),this.dyn.push(()=>{n.textContent=f()})}else t.textContent=`${e.length} units selected`,n.textContent="";for(const d of e.slice(0,21)){const f=document.createElement("div");f.className="sel-card",f.innerHTML=`<span>${d.def.icon}</span><div class="hpbar"><div></div></div>`;const m=f.querySelector(".hpbar > div"),_=()=>{m.style.width=Math.max(3,d.hp/d.maxHp*100)+"%"};_(),this.dyn.push(_),f.onclick=()=>this.input.select([d]),i.appendChild(f)}if(a.owner!==pe)return;const c=e.filter(d=>d.isUnit),l=c.some(d=>d.type==="villager"),h=this.game,u=h.players[pe];if(l)for(const d of vv){const f=Gs[d],m=()=>u.age<f.age,_=()=>!m()&&xn(u.res,f.cost),p=this.button(f.icon,f.name,`${f.name}<br>${pi(f.cost)}${u.age<f.age?`<br>Requires ${Kt[f.age-1].name}`:""}`,!_(),pi(f.cost));p.onclick=()=>{_()?this.input.startPlacement(d):this.game.sound("error")},this.dyn.push(()=>p.classList.toggle("disabled",!_())),this.addCmd(p)}if(c.length){const d=c.filter(m=>m.type!=="villager");if(d.length){const m=this.button("⚔️","Atk-Move (A)","Attack-move: engage everything on the way<br>Press A then click a destination");m.onclick=()=>this.input.armAttackMove(),this.addCmd(m);const _=[["😠","Aggro","aggressive","Chase anything that comes close"],["🛡","Defend","defensive","Fight back, then return to this position"],["✋","Hold","hold","Never move; only hit what is in weapon range"]];for(const[p,g,v,x]of _){const y=this.button(p,g,x);y.onclick=()=>{this.game.exec({k:"stance",ids:d.map(C=>C.id),s:v}),this.game.sound("command")},this.dyn.push(()=>y.classList.toggle("stance-on",d.every(C=>C.stance===v))),this.addCmd(y)}}const f=this.button("🛑","Stop (T)","Stop current order");f.onclick=()=>{this.game.exec({k:"stop",ids:c.map(m=>m.id)})},this.addCmd(f)}if(e.length===1&&a.isBuilding){const d=a;if(d.complete&&d.def.trains)for(const m of d.def.trains){const _=cn[m],p=()=>u.age>=_.age&&xn(u.res,_.cost),g=this.button(_.icon,_.name,`Train ${_.name}<br>${pi(_.cost)}<br>HP ${_.hp} · ATK ${_.atk}${u.age<_.age?`<br>Requires ${Kt[_.age-1].name}`:""}`,!p(),pi(_.cost));g.onclick=()=>{if(u.age<_.age){this.game.sound("error");return}this.game.exec({k:"train",b:d.id,u:m})?this.game.sound("command"):this.game.sound("error")},this.dyn.push(()=>g.classList.toggle("disabled",!p())),this.addCmd(g)}if(d.complete&&d.def.techs)for(const m of d.def.techs){if(u.techs.includes(m))continue;const _=Xi[m],p=()=>this.game.buildings.some(x=>!x.dead&&x.owner===pe&&x.researching?.tech===m),g=()=>u.age>=_.age&&!d.researching&&!p()&&xn(u.res,_.cost),v=this.button(_.icon,_.name,`${_.name}: ${_.desc}<br>${pi(_.cost)}<br>${_.time}s${u.age<_.age?`<br>Requires ${Kt[_.age-1].name}`:""}`,!g(),pi(_.cost));v.onclick=()=>{this.game.exec({k:"tech",b:d.id,id:m})?this.game.sound("command"):this.game.sound("error")},this.dyn.push(()=>v.classList.toggle("disabled",!g())),this.addCmd(v)}if(d.complete&&d.def.isMarket)for(const m of["wood","food","stone"]){const _=this.button("📤",`Sell ${m}`,`Sell ${Yt.lot} ${m} for ${Yt.sellGold} gold`,!1,`${Yt.lot} ${m}`);_.onclick=()=>{h.exec({k:"trade",o:pe,kind:m,dir:"sell"})||this.game.sound("error")},this.dyn.push(()=>_.classList.toggle("disabled",(u.res[m]||0)<Yt.lot)),this.addCmd(_);const p=this.button("📥",`Buy ${m}`,`Buy ${Yt.lot} ${m} for ${Yt.buyGold} gold`,!1,`${Yt.buyGold}G`);p.onclick=()=>{h.exec({k:"trade",o:pe,kind:m,dir:"buy"})||this.game.sound("error")},this.dyn.push(()=>p.classList.toggle("disabled",(u.res.gold||0)<Yt.buyGold)),this.addCmd(p)}if(d.complete&&d.def.researchesAge&&u.age<Kt.length){const m=Kt[u.age],_=()=>!u.ageResearchInProgress&&xn(u.res,m.cost),p=this.button("🏰","Advance",`Advance to ${m.name}<br>${pi(m.cost)}<br>${m.time}s`,!_(),pi(m.cost));p.onclick=()=>{_()&&this.game.exec({k:"age",b:d.id})?this.game.sound("command"):this.game.sound("error")},this.dyn.push(()=>p.classList.toggle("disabled",!_())),this.addCmd(p)}const f=this.button("🗑",d.complete?"Demolish":"Cancel",d.complete?`Demolish this ${d.def.name} (no refund)`:"Cancel construction<br>full refund");if(f.onclick=()=>{h.exec({k:"demolish",b:d.id}),this.input.select([])},this.addCmd(f),d.complete&&d.type==="towncenter"){const m=this.button("🔔",d.garrison?.length?"Release":"Bell",d.garrison?.length?`Release ${d.garrison.length} villagers`:"Ring the bell: nearby villagers hide inside (they add arrows)");m.onclick=()=>{h.exec({k:"bell",b:d.id})},this.addCmd(m)}if(d.researching){const m=document.createElement("div");m.className="q-item",m.innerHTML=`<div class="prog"></div><span>${d.researching.tech?Xi[d.researching.tech].icon:"🏰"}</span>`;const _=m.querySelector(".prog"),p=()=>{d.researching&&(_.style.width=d.researching.t/d.researching.dur*100+"%")};p(),this.dyn.push(p),s.appendChild(m)}if(d.trainQueue.forEach((m,_)=>{const p=document.createElement("div");p.className="q-item",p.title="Click to cancel",p.innerHTML=`<div class="prog"></div><span>${cn[m].icon}</span>`;const g=p.querySelector(".prog"),v=()=>{g.style.width=(_===0&&d.trainQueue[0]===m?d.trainT/cn[m].trainTime*100:0)+"%"};v(),this.dyn.push(v),p.onclick=()=>{const x=d.trainQueue[_]===m?_:d.trainQueue.indexOf(m);x>=0&&this.game.exec({k:"cancelTrain",b:d.id,i:x})},s.appendChild(p)}),d.complete&&d.def.trains){const m=document.createElement("span");m.style.cssText="font-size:11px;color:#9c8f6e;margin-left:4px",m.textContent=d.trainQueue.length?"":"Right-click ground/resource to set rally",s.appendChild(m)}}}addCmd(e){const t=pS[this._keyIdx++];if(t){this.hotkeys.set(t,e);const n=document.createElement("span");n.className="key",n.textContent=t.slice(3),e.appendChild(n)}this.el.cmdPanel.appendChild(e)}button(e,t,n,i=!1,s=""){const o=document.createElement("button");return o.className="cmd-btn"+(i?" disabled":""),o.innerHTML=`<span>${e}</span><span class="lbl">${t}</span>`+(s?`<span class="cost">${s}</span>`:"")+`<div class="tooltip">${n}</div>`,o}}class gS{constructor(e,t,n,i,s=null){this.canvas=e,this.ctx=e.getContext("2d"),this.game=t,this.rtsCam=n,this.camera=i,this.input=s,this.pings=[],this.S=e.width,t.onPing=(l,h)=>this.pings.push({x:l,z:h,t:0}),this.terrainLayer=document.createElement("canvas"),this.terrainLayer.width=this.S,this.terrainLayer.height=this.S,this.renderTerrain(),this.nodeT=0,this.nodeLayer=document.createElement("canvas"),this.nodeLayer.width=this.S,this.nodeLayer.height=this.S,this.renderNodes(),this.fogV=-1,this.fogLayer=document.createElement("canvas"),this.fogLayer.width=this.fogLayer.height=this.S,this.fogSmall=document.createElement("canvas");const o=t.map.size;this.fogSmall.width=this.fogSmall.height=o,this.fogImg=this.fogSmall.getContext("2d").createImageData(o,o),this.raycaster=new gd,this.groundPlane=new mi(new E(0,1,0),0);const a=l=>{const h=e.getBoundingClientRect(),u=(l.clientX-h.left)/h.width*Le,d=(l.clientY-h.top)/h.height*Le;this.rtsCam.jumpTo(u,d)};let c=!1;e.addEventListener("mousedown",l=>{if(l.button===0)c=!0,a(l);else if(l.button===2&&this.input){const h=e.getBoundingClientRect(),u=(l.clientX-h.left)/h.width*Le,d=(l.clientY-h.top)/h.height*Le;this.input.dispatchContext({point:{x:u,y:0,z:d}},l.shiftKey)}}),window.addEventListener("mousemove",l=>{c&&a(l)}),window.addEventListener("mouseup",()=>{c=!1}),e.addEventListener("contextmenu",l=>l.preventDefault()),e.addEventListener("touchstart",l=>{l.preventDefault(),l.touches[0]&&a(l.touches[0])},{passive:!1}),e.addEventListener("touchmove",l=>{l.preventDefault(),l.touches[0]&&a(l.touches[0])},{passive:!1})}renderTerrain(){const e=this.terrainLayer.getContext("2d"),t=this.game.map,i=this.S/t.size;for(let s=0;s<t.size;s++)for(let o=0;o<t.size;o++){const a=t.tileHeight(o,s),c=t.moistureAt((o+.5)*ze,(s+.5)*ze);let l;if(a<=Gt)l="#2d5e9e";else if(a<Gt+.35)l="#b3a263";else if(a>2.6)l="#8d8a80";else{const h=120+c*45-a*8;l=`rgb(${78+a*6|0},${h|0},52)`}e.fillStyle=l,e.fillRect(o*i,s*i,i+1,i+1)}}renderNodes(){const e=this.nodeLayer.getContext("2d");e.clearRect(0,0,this.S,this.S);const t=this.S/Le,n=this.game.fog;for(const i of this.game.nodes)i.dead||n&&!n.exploredWorld(i.wx,i.wz)||(e.fillStyle=i.type==="tree"?"#1e4d20":i.type==="gold"?"#e8b923":i.type==="stone"?"#b8b5aa":i.type==="fish"?"#6fd4e8":"#b03333",e.fillRect(i.wx*t-1.5,i.wz*t-1.5,3,3))}renderFog(){const e=this.game.fog;e.size;const t=this.fogImg.data,n=e.state,i=e.revealed;for(let a=0;a<n.length;a++)t[a*4+3]=i||n[a]===2?0:n[a]===1?96:235;this.fogSmall.getContext("2d").putImageData(this.fogImg,0,0);const o=this.fogLayer.getContext("2d");o.clearRect(0,0,this.S,this.S),o.imageSmoothingEnabled=!0,o.drawImage(this.fogSmall,0,0,this.S,this.S)}update(e){if(this.nodeT-=e,this.nodeT<=0&&(this.nodeT=3,this.renderNodes()),this.drawT=(this.drawT||0)-e,this.drawT>0)return;this.drawT=.08;const t=this.ctx,n=this.S;t.drawImage(this.terrainLayer,0,0),t.drawImage(this.nodeLayer,0,0);const i=n/Le,s=this.game.fog,o=["#4d8df5","#e8473a","#b45de8"],a=["#7db8ff","#ff7a6e","#d79bff"];for(const h of this.game.buildings){if(h.dead||s&&h.owner!==pe&&!s.exploredWorld(h.cx,h.cz))continue;t.fillStyle=o[h.owner]||o[1];const u=Math.max(3,h.size*ze*i);t.fillRect(h.cx*i-u/2,h.cz*i-u/2,u,u)}for(const h of this.game.units)h.dead||s&&h.owner!==pe&&!s.visibleWorld(h.x,h.z)||(t.fillStyle=a[h.owner]||a[1],t.fillRect(h.x*i-1.5,h.z*i-1.5,3,3));s&&s.enabled&&(this.fogV!==s.version&&(this.fogV=s.version,this.renderFog()),t.drawImage(this.fogLayer,0,0));for(let h=this.pings.length-1;h>=0;h--){const u=this.pings[h];if(u.t+=e+.08,u.t>3){this.pings.splice(h,1);continue}const d=u.t%1;t.strokeStyle=`rgba(255,60,40,${1-d})`,t.lineWidth=2,t.beginPath(),t.arc(u.x*i,u.z*i,3+d*10,0,Math.PI*2),t.stroke()}t.strokeStyle="#f5f0dc",t.lineWidth=1.2,t.beginPath();const c=[[-1,-1],[1,-1],[1,1],[-1,1]];let l=!1;for(const[h,u]of c){const d=this.projectToGround(h,u);if(!d)continue;const f=Math.max(0,Math.min(n,d.x*i)),m=Math.max(0,Math.min(n,d.z*i));l?t.lineTo(f,m):(t.moveTo(f,m),l=!0)}t.closePath(),t.stroke()}projectToGround(e,t){return this.raycaster.setFromCamera({x:e,y:t},this.camera),this._scratch=this._scratch||new E,this.raycaster.ray.intersectPlane(this.groundPlane,this._scratch)?this._scratch:null}}const kd="aoge-save";function _S(r,e){const t={v:1,seed:r.map.seed.toString(36),size:Br,biome:Or,foes:String(ni),scenario:qi||"",difficulty:e,time:r.time,savedAt:Date.now(),players:r.players.map(n=>({res:{...n.res},age:n.age,techs:[...n.techs]})),units:r.units.filter(n=>!n.dead).map(n=>({t:n.type,o:n.owner,x:+(n.garrisoned?n.garrisoned.cx:n.x).toFixed(1),z:+(n.garrisoned?n.garrisoned.cz:n.z).toFixed(1),hp:Math.round(n.hp),st:n.stance!=="aggressive"?n.stance:void 0})),buildings:r.buildings.filter(n=>!n.dead).map(n=>({t:n.type,o:n.owner,gx:n.gx,gy:n.gy,hp:Math.round(n.hp),c:n.complete?1:0,pr:n.complete?void 0:+n.progress.toFixed(3),q:n.trainQueue.length?[...n.trainQueue]:void 0,qt:n.trainQueue.length?+n.trainT.toFixed(1):void 0,r:n.researching?{...n.researching}:void 0,ry:n.rally&&n.rally.x!==void 0?{x:n.rally.x,z:n.rally.z}:void 0})),nodes:r.nodes.filter(n=>!n.dead).map(n=>({gx:n.gx,gy:n.gy,a:Math.round(n.amount)})),stats:r.stats,fog:r.fog?vS(r.fog.state):void 0};return localStorage.setItem(kd,JSON.stringify(t)),t}function zd(){try{return JSON.parse(localStorage.getItem(kd)||"null")}catch{return null}}function xS(r,e){e.players.forEach((n,i)=>{const s=r.players[i];if(s){s.res={...n.res},s.age=n.age,s.techs=[...n.techs];for(const o of s.techs)for(const[a,c]of Object.entries(Xi[o].mod))s.mods[a]*=c}});for(const n of e.buildings){const i=r.placeBuilding(n.o,n.t,n.gx,n.gy,!0);i&&(n.c||(i.complete=!1,i.progress=n.pr||0),i.hp=Math.min(i.maxHp,n.hp),n.q&&(i.trainQueue=[...n.q],i.trainT=n.qt||0),n.r&&(i.researching={...n.r},n.r.tech||(r.players[n.o].ageResearchInProgress=!0)),n.ry&&(i.rally={x:n.ry.x,z:n.ry.z}))}r.players.forEach((n,i)=>r.recalcPop(i));for(const n of e.units){const i=r.spawnUnit(n.t,n.o,n.x,n.z);i.hp=Math.min(i.maxHp,n.hp),n.st&&(i.stance=n.st)}const t=new Map(e.nodes.map(n=>[n.gx+","+n.gy,n.a]));for(const n of[...r.nodes]){const i=t.get(n.gx+","+n.gy);i===void 0?(n.amount=0,r.depleteNode(n)):n.amount=i}if(r.time=e.time||0,e.stats&&e.stats.forEach((n,i)=>{r.stats[i]&&(r.stats[i]={...r.stats[i],...n})}),e.fog&&r.fog){const n=atob(e.fog),i=r.fog.state;for(let s=0;s<n.length&&s<i.length;s++)i[s]=n.charCodeAt(s);r.fog.dirty=!0,r.fog.version++}}function vS(r){let e="";for(let t=0;t<r.length;t+=4096)e+=String.fromCharCode(...r.subarray(t,t+4096));return btoa(e)}class MS{constructor(e,t,n){this.game=e,this.role=t,this.room=n,this.ch=new BroadcastChannel("aoge-"+n),this.hostTick=0,this.queue=[],this.hashes=new Map,this.hashChecks=0,this.lastHashOk=!0,this.onStart=null,this.onDesync=null,this.started=!1,this.difficulty=null,this.guestSeen=!1,t==="host"?(e.onCommand=i=>(this.ch.postMessage({type:"cmd",t:e.tick,cmd:i}),!0),this.ch.onmessage=i=>{const s=i.data;s.type==="ready"?(this.guestSeen=!0,this.started&&this.ch.postMessage({type:"start",difficulty:this.difficulty})):s.type==="req"&&(this.ch.postMessage({type:"cmd",t:e.tick,cmd:s.cmd}),e.cmdLog&&e.cmdLog.push({t:e.tick,...s.cmd}),jo(e,s.cmd))},e.onTick=()=>{const i={type:"tick",n:e.tick};e.tick%20===0&&(i.h=e.stateHash()),this.ch.postMessage(i)}):(e.onCommand=i=>(this.ch.postMessage({type:"req",cmd:i}),!1),this.ch.onmessage=i=>{const s=i.data;s.type==="cmd"?this.queue.push(s):s.type==="tick"?(this.hostTick=s.n,s.h!==void 0&&this.hashes.set(s.n,s.h)):s.type==="start"&&this.onStart?.(s.difficulty)},this.ch.postMessage({type:"ready"}))}hostStart(e){this.started=!0,this.difficulty=e,this.ch.postMessage({type:"start",difficulty:e})}followTicks(){const e=this.game;let t=0;for(;e.tick<this.hostTick&&t++<400;){for(;this.queue.length&&this.queue[0].t<=e.tick;)jo(e,this.queue.shift().cmd);e.update(.05);const n=this.hashes.get(e.tick);if(n!==void 0){this.hashes.delete(e.tick),this.hashChecks++;const i=n===e.stateHash();!i&&this.lastHashOk&&this.onDesync?.(),this.lastHashOk=i}}}}function vu(r,e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(64,64,6,64,64,62);return i.addColorStop(0,r),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,128,128),new Ti(t)}function yS(){const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d");for(let n=0;n<9;n++){const i=8+n*6+Math.sin(n*7.3)*3,s=(n-4)*2.2+Math.sin(n*3.1)*2,o=30+n%3*10,a=e.createLinearGradient(0,64,0,64-o);a.addColorStop(0,"#3d6e2e"),a.addColorStop(1,"#7fb254"),e.strokeStyle=a,e.lineWidth=2.4,e.beginPath(),e.moveTo(i,64),e.quadraticCurveTo(i+s*.4,64-o*.6,i+s,64-o),e.stroke()}return new Ti(r)}class SS{constructor(e,t){this.scene=e,this.map=t,this.t=0,this.deepTiles=[],this.shoreTiles=[];for(let n=1;n<t.size-1;n+=2)for(let i=1;i<t.size-1;i+=2){const s=t.tileHeight(i,n);s<=Gt-.35?this.deepTiles.push([i,n]):s>Gt-.12&&s<=Gt+.04&&this.shoreTiles.push([i,n])}this._buildBirds(),this._buildClouds(),this._buildRipples(),this._buildGrass()}_buildBirds(){const e=new St;e.setAttribute("position",new Mt(new Float32Array([0,0,.35,-.9,.12,-.3,0,0,-.05,0,0,.35,0,0,-.05,.9,.12,-.3]),3)),e.computeVertexNormals();const t=new Pt({color:2829107,side:an});this.flocks=[];const n=3*6;this.birdMesh=new ks(e,t,n),this.birdMesh.frustumCulled=!1,this.scene.add(this.birdMesh);let i=0;for(let s=0;s<3;s++){const o={x:Math.random()*Le,z:Math.random()*Le,y:26+s*4,dir:Math.random()*Math.PI*2,speed:6.5+s,birds:[]};for(let a=0;a<6;a++)o.birds.push({idx:i++,ox:a%3*2.2-2.2+a*.4,oz:Math.floor(a/3)*1.8-a%2,phase:Math.random()*6.28});this.flocks.push(o)}}_buildClouds(){this.clouds=[];const e=vu("rgba(255,255,255,0.85)","rgba(255,255,255,0)"),t=vu("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),n=new Ln(1,1);for(let i=0;i<4;i++){const s=new Te,o=3+i%3;for(let c=0;c<o;c++){const l=new Cr(new Mi({map:e,transparent:!0,opacity:.5,depthWrite:!1})),h=10+Math.random()*9;l.scale.set(h*1.5,h*.7,1),l.position.set((c-o/2)*7,(Math.random()-.5)*2.5,(Math.random()-.5)*5),s.add(l)}s.position.set(Math.random()*Le,38+i*3,Math.random()*Le),this.scene.add(s);const a=new De(n,new Pt({map:t,transparent:!0,opacity:.1,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.scale.set(30,22,1),a.renderOrder=2,this.scene.add(a),this.clouds.push({group:s,shadow:a,speed:.9+Math.random()*.7,drift:Math.random()*.4-.2})}}_buildRipples(){if(this.ripples=[],!this.deepTiles.length&&!this.shoreTiles.length)return;const e=new Ur(.75,.95,24);for(let t=0;t<10;t++){const n=new De(e,new Pt({color:14675708,transparent:!0,opacity:0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.renderOrder=2,this.scene.add(n);const i={mesh:n,t:Math.random()*-6,dur:2.2};this._respawnRipple(i),this.ripples.push(i)}}_respawnRipple(e){const n=this.shoreTiles.length&&(!this.deepTiles.length||Math.random()<.5)?this.shoreTiles:this.deepTiles;if(!n.length){e.t=-9999;return}const[i,s]=n[Math.random()*n.length|0],o=(i+.5)*ze,a=(s+.5)*ze;e.mesh.position.set(o+(Math.random()-.5)*2,Gt-.06,a+(Math.random()-.5)*2),e.t=-Math.random()*5}_buildGrass(){const e=yS(),t=new Ln(1.1,1.1);t.translate(0,.5,0);const n=t.clone().rotateY(Math.PI/2),i=new St,s=t.toNonIndexed(),o=n.toNonIndexed(),a=new Float32Array(s.attributes.position.count*3+o.attributes.position.count*3);a.set(s.attributes.position.array,0),a.set(o.attributes.position.array,s.attributes.position.count*3);const c=new Float32Array(s.attributes.uv.count*2+o.attributes.uv.count*2);c.set(s.attributes.uv.array,0),c.set(o.attributes.uv.array,s.attributes.uv.count*2),i.setAttribute("position",new Mt(a,3)),i.setAttribute("uv",new Mt(c,2)),i.computeVertexNormals();const l=new En({map:e,alphaTest:.35,side:an}),h=550,u=new ks(i,l,h);u.frustumCulled=!1;const d=new Ae,f=new Bt,m=new Zt,_=new E;let p=0,g=0;const v=this.map;for(;p<h&&g++<h*14;){const x=Math.random()*Le,y=Math.random()*Le,[C,T]=v.worldToGrid(x,y);if(!v.isWalkable(C,T)||v.occupantAt(C,T)||v.moistureAt(x,y)<.45)continue;const A=v.heightAt(x,y);if(A<Gt+.3)continue;m.set(0,Math.random()*Math.PI,0),f.setFromEuler(m);const I=.7+Math.random()*.7;d.compose(_.set(x,A-.03,y),f,new E(I,I,I)),u.setMatrixAt(p++,d)}u.count=p,u.instanceMatrix.needsUpdate=!0,this.scene.add(u)}update(e){this.t+=e;const t=this.t,n=this._m4=this._m4||new Ae,i=this._q=this._q||new Bt,s=this._e=this._e||new Zt,o=this._s=this._s||new E;for(const a of this.flocks){a.x+=Math.cos(a.dir)*a.speed*e,a.z+=Math.sin(a.dir)*a.speed*e,a.dir+=Math.sin(t*.11+a.y)*.0012,a.x<-20&&(a.x=Le+18),a.x>Le+20&&(a.x=-18),a.z<-20&&(a.z=Le+18),a.z>Le+20&&(a.z=-18);for(const c of a.birds){const l=Math.sin(t*7+c.phase);s.set(0,-a.dir+Math.PI/2,l*.55),i.setFromEuler(s),n.compose(o.set(a.x+c.ox,a.y+Math.sin(t*.9+c.phase)*.7,a.z+c.oz),i,this._one=this._one||new E(1,1,1)),this.birdMesh.setMatrixAt(c.idx,n)}}this.birdMesh.instanceMatrix.needsUpdate=!0;for(const a of this.clouds){a.group.position.x+=a.speed*e,a.group.position.z+=a.drift*e,a.group.position.x>Le+40&&(a.group.position.x=-40),a.group.position.z>Le+40&&(a.group.position.z=-40),a.group.position.z<-40&&(a.group.position.z=Le+40);const c=a.group.position.x,l=a.group.position.z;c>-5&&c<Le+5&&l>-5&&l<Le+5?(a.shadow.visible=!0,a.shadow.position.set(c,Math.max(this.map.heightAt(c,l),Gt)+.42,l)):a.shadow.visible=!1}for(const a of this.ripples){if(a.t+=e,a.t<0)continue;if(a.t>=a.dur){this._respawnRipple(a),a.mesh.material.opacity=0;continue}const c=a.t/a.dur,l=.4+c*2.6;a.mesh.scale.set(l,l,1),a.mesh.material.opacity=.5*(1-c)}}}const Hd=document.getElementById("game-canvas"),{renderer:Fo,scene:Ei,camera:kr,updateSun:wS,composer:bS}=Wv(Hd),na=new URLSearchParams(location.search).has("lite");na&&(Fo.shadowMap.enabled=!1);const $i=new URLSearchParams(location.search),It=new Sv(dv),bs=bv(It,1+ni),TS=wv(It,bs,na),{ground:AS,waterNormalTex:ES}=QM(Ei,It),$c=new ty(Ei,1e3);await $c.load();const Ce=new Hy(Ei,It,$c);qi&&(Ce.scenario=Md[qi]);Ce.effects=new uy(Ei,Ce);Ce.soundFn=jc;Ce.onCombat=Od;Ce.createResourceNodes(TS);function Mu(r,[e,t]){let i=null;e:for(let o=0;o<12;o++)for(let a=-o;a<=o;a++)for(let c=-o;c<=o;c++){if(Math.max(Math.abs(c),Math.abs(a))!==o)continue;const l=e+c-Math.floor(4/2),h=t+a-Math.floor(4/2);if(It.canPlace(l-1,h-1,6)){i=[l,h];break e}}i||(i=[e,t]);const s=Ce.placeBuilding(r,"towncenter",i[0],i[1],!0);for(let o=0;o<4;o++){const a=Math.PI*.25+o*.45,c=s.cx+Math.cos(a)*7,l=s.cz+Math.sin(a)*7,[h,u]=It.nearestWalkable(...It.worldToGrid(c,l),6)||It.worldToGrid(s.cx,s.cz+8),[d,f]=It.gridToWorld(h,u);Ce.spawnUnit("villager",r,d,f)}return s}const In=new Ky(It);Ce.fog=In;$i.has("nofog")&&In.revealAll();const Rn=$i.has("replay")?(()=>{try{return JSON.parse(localStorage.getItem("aoge-replay")||"null")}catch{return null}})():null,Ir=$i.has("load")&&!Rn?zd():null;let Ws;if(Ir)xS(Ce,Ir),Ws=Ce.buildings.find(r=>r.owner===pe&&r.type==="towncenter")||Ce.buildings.find(r=>r.owner===pe)||{cx:bs[0][0]*ze,cz:bs[0][1]*ze};else{Ws=Mu(pe,bs[0]);for(let r=1;r<=ni;r++)Mu(r,bs[r]);for(let r=0;r<=ni;r++)Ce.recalcPop(r)}for(let r=1;r<=ni;r++){let[e,t]=bs[r];const n=Ce.buildings.find(i=>i.owner===r&&i.type==="towncenter");n&&(e=n.gx,t=n.gy),Ce.ais.push(new Xy(Ce,e,t,"normal",r))}Ce.ai=Ce.ais[0];const ec=$i.get("mp"),yu=$i.get("room"),Mn=(ec==="host"||ec==="join")&&yu?new MS(Ce,ec==="host"?"host":"guest",yu):null;if(Rn){In.revealAll(),Ce.replayMode=!0;let r=0;Ce.onTick=()=>{for(;r<Rn.log.length&&Rn.log[r].t<=Ce.tick;)jo(Ce,Rn.log[r++])}}In.recompute(Ce);const RS=new jy(Ei,It,In),Gd=na?null:new SS(Ei,It);function Vd(){for(const r of Ce.units)r.owner===pe||r.dead||(r.group.visible=!r.garrisoned&&In.visibleWorld(r.x,r.z));for(const r of Ce.buildings)r.owner===pe||r.dead||(r.group.visible=In.exploredWorld(r.cx,r.cz));for(const r of Ce.nodes){if(r.dead)continue;const e=In.exploredWorld(r.wx,r.wz);r.mesh?r.mesh.visible=e:r.treeHandle&&$c.setHidden(r.treeHandle,!e)}}Vd();Ny();Ly(()=>{for(const r of Ce.buildings)r.reskin()});Sy().then(r=>{if(r)for(const e of Ce.units)e.adoptModel()});const Si=new $y(kr,It);Si.jumpTo(Ws.cx,Ws.cz+6);Si.smoothTarget.set(Ws.cx,0,Ws.cz+6);let si;const ia=new nS({canvas:Hd,game:Ce,rtsCam:Si,camera:kr,terrainMesh:AS,onSelectionChange:r=>si&&si.setSelection(r),sound:jc});si=new mS(Ce,ia);const Wd=new gS(document.getElementById("minimap"),Ce,Si,kr,ia);document.getElementById("mute-btn").addEventListener("click",r=>{const e=Qy();r.currentTarget.innerHTML=e?"&#128263;":"&#128266;"});let $o=!1;const Xd=new md;let tc=0;const nc=document.getElementById("objective");function CS(r){if(!Ce.scenario||!nc||(tc-=r,tc>0))return;tc=.5;const e=Ce.scenario;nc.classList.remove("hidden");let t=`${e.icon} ${e.name} — ${e.desc}`;if(e.timeLimit){const n=Math.max(0,e.timeLimit-Ce.time);t+=` (${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")} left)`}nc.textContent=t}const Ts=bd(16767344,3);Ts.visible=!1;Ei.add(Ts);function PS(){const r=ia.selection,t=(r.length===1&&r[0].isBuilding&&r[0].owner===pe&&!r[0].dead?r[0]:null)?.rally;if(!t){Ts.visible=!1;return}const n=t.x??t.node?.wx??t.farm?.cx,i=t.z??t.node?.wz??t.farm?.cz;if(n===void 0){Ts.visible=!1;return}Ts.visible=!0,Ts.position.set(n,It.heightAt(n,i),i)}let ic=0,sc=!na,Eo=0,rc=0,Lr=1;function Dr(r){Lr=Math.max(1,Math.min(4,r|0));for(const e of document.querySelectorAll(".speed-btn"))e.classList.toggle("active",+e.dataset.speed===Lr)}window.__setSpeed=Dr;let Is=!1;function qd(r){Is=r,document.getElementById("pause-btn").classList.toggle("paused",Is),Is&&si.alert("Paused — press P to resume",!0)}document.getElementById("pause-btn").addEventListener("click",()=>qd(!Is));window.addEventListener("keydown",r=>{r.code==="KeyP"&&r.target.tagName!=="INPUT"&&!document.querySelector(".overlay:not(.hidden)")&&qd(!Is)});const Ro=.05;let fr=0;function Yd(){requestAnimationFrame(Yd);const r=Math.min(Xd.getDelta(),.05);if($o&&!Is)if(Mn?.role==="guest")Mn.followTicks();else{fr+=r*Lr;let e=0;for(;fr>=Ro&&e++<16;)Ce.update(Ro),fr-=Ro;fr>Ro*16&&(fr=0)}Si.update(r),wS(Si.smoothTarget,Si.smoothDist),In.dirty&&(RS.refresh(),Vd(),In.dirty=!1),si.update(r),Wd.update(r),CS(r),PS(),ic+=r,ES.offset.set(ic*.012,ic*.009),Gd?.update(r),$o&&sc&&(rc++,Eo+=r,Eo>5&&(rc/Eo<28&&(sc=!1,Fo.setPixelRatio(1),Fo.setSize(window.innerWidth,window.innerHeight)),Eo=0,rc=0)),sc?bS.render():Fo.render(Ei,kr)}Yd();let Zc="normal";function zr(r,e=!1){Zc=r;for(const n of Ce.ais)n.setDifficulty(r);if(!e&&!Rn&&Mn?.role!=="guest"&&(Ce.cmdLog=[]),Mn?.role==="host"&&Mn.hostStart(r),r==="easy"&&!e){const n=Ce.players[pe].res;n.wood+=900,n.food+=3500,n.gold+=1800,n.stone+=400}Zy(),uS(),document.getElementById("start-overlay").classList.add("hidden"),$o=!0,Xd.getDelta();const t=r[0].toUpperCase()+r.slice(1);si.alert(e?`Welcome back — ${t} game resumed.`:`${t} game — gather resources and build your empire. The enemy is preparing…`,!0)}for(const r of["easy","normal","hard"]){const e=document.getElementById("start-"+r);e&&e.addEventListener("click",()=>zr(r))}const Co=document.getElementById("opt-size"),oc=document.getElementById("opt-biome"),ac=document.getElementById("opt-foes");if(Co){Co.value=Br,oc.value=Or,ac.value=String(ni);const r=document.getElementById("opt-mode");r&&(r.value=qi||"");const e=t=>{const n=new URLSearchParams;n.set("size",Co.value),n.set("biome",oc.value),n.set("foes",ac.value),n.set("seed",(t?Math.random()*1e9|0:It.seed).toString(36)),r?.value&&n.set("scenario",r.value),$i.has("lite")&&n.set("lite",""),location.search=n.toString()};for(const t of[Co,oc,ac,r].filter(Boolean))t.addEventListener("change",()=>e(!1));document.getElementById("opt-newmap").addEventListener("click",()=>e(!0))}const Xn=zd(),Cn=document.getElementById("resume-btn");Xn&&Cn&&!Ir&&!Rn&&(Cn.classList.remove("hidden"),Cn.textContent=`💾 Resume saved game (${Xn.difficulty}, ${Math.floor((Xn.time||0)/60)} min in)`,Cn.addEventListener("click",()=>{const r=new URLSearchParams;r.set("load","1"),r.set("seed",Xn.seed),r.set("size",Xn.size),r.set("biome",Xn.biome),r.set("foes",Xn.foes),Xn.scenario&&r.set("scenario",Xn.scenario),$i.has("lite")&&r.set("lite",""),location.search=r.toString()}));if(Ir){for(const r of["easy","normal","hard"])document.getElementById("start-"+r)?.classList.add("hidden");document.getElementById("map-opts")?.classList.add("hidden"),Cn.classList.remove("hidden"),Cn.textContent="▶ Continue saved game",Cn.addEventListener("click",()=>zr(Ir.difficulty||"normal",!0))}if(Rn){for(const r of["easy","normal","hard"])document.getElementById("start-"+r)?.classList.add("hidden");document.getElementById("map-opts")?.classList.add("hidden"),Cn.classList.remove("hidden"),Cn.textContent="▶ Watch replay",Cn.addEventListener("click",()=>zr(Rn.difficulty||"normal",!1))}const pr=document.getElementById("coop-btn"),vs=document.getElementById("coop-info");if(Mn?.role==="guest"){for(const r of["easy","normal","hard"])document.getElementById("start-"+r)?.classList.add("hidden");document.getElementById("map-opts")?.classList.add("hidden"),pr?.classList.add("hidden"),vs&&(vs.classList.remove("hidden"),vs.textContent="👥 Co-op: waiting for the host to start the game…"),Mn.onStart=r=>zr(r,!1)}else if(Mn?.role==="host"){if(pr&&pr.classList.add("hidden"),vs){const r=new URLSearchParams(location.search);r.set("mp","join");const e=location.origin+location.pathname+"?"+r.toString();vs.classList.remove("hidden"),vs.innerHTML=`👥 Hosting co-op — open this link in another tab/window:<br><input readonly value="${e}" style="width:96%;margin-top:4px;background:#1a1409;color:#ffe9b0;border:1px solid #5a4520;border-radius:4px;padding:4px 6px;font-size:12px" onclick="this.select()">`}}else pr&&pr.addEventListener("click",()=>{const r=new URLSearchParams(location.search);r.set("mp","host"),r.set("room",Math.random().toString(36).slice(2,8)),r.set("seed",It.seed.toString(36)),r.set("size",Br),r.set("biome",Or),r.set("foes",String(ni)),qi&&r.set("scenario",qi),location.search=r.toString()});Mn&&(Mn.onDesync=()=>si.alert("Co-op sims diverged — please restart the session."),window.__coop=Mn);const IS=Ce.onGameOver;Ce.onGameOver=r=>{if(Ce.cmdLog&&!Rn)try{localStorage.setItem("aoge-replay",JSON.stringify({seed:It.seed.toString(36),size:Br,biome:Or,foes:String(ni),scenario:qi||"",difficulty:Zc,log:Ce.cmdLog}))}catch{}IS(r)};document.getElementById("replay-btn")?.addEventListener("click",()=>{let r=null;try{r=JSON.parse(localStorage.getItem("aoge-replay")||"null")}catch{}if(!r)return;const e=new URLSearchParams;e.set("replay","1"),e.set("seed",r.seed),e.set("size",r.size),e.set("biome",r.biome),e.set("foes",r.foes),r.scenario&&e.set("scenario",r.scenario),location.search=e.toString()});function Kd(){if(!$o||Ce.gameOver){si.alert("Nothing to save yet.");return}_S(Ce,Zc),si.alert("Game saved — resume it from the start screen anytime.",!0)}document.getElementById("save-btn").addEventListener("click",Kd);for(const r of document.querySelectorAll(".speed-btn"))r.addEventListener("click",()=>Dr(+r.dataset.speed));window.addEventListener("keydown",r=>{r.target.tagName!=="INPUT"&&(document.querySelector(".overlay:not(.hidden)")||(r.code==="BracketRight"?Dr(Lr+1):r.code==="BracketLeft"&&Dr(Lr-1)))});Dr(1);window.__game=Ce;window.__rtsCam=Si;window.__input=ia;window.__audio={voice:xr,combatPulse:Od};window.__minimap=Wd;window.__startGame=zr;window.__save=Kd;window.__ambient=Gd;window.__project=(r,e,t)=>{const n=new E(r,e,t).project(kr);return{x:(n.x+1)/2*window.innerWidth,y:(1-n.y)/2*window.innerHeight,z:n.z}};
