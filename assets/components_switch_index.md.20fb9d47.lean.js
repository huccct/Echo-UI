import{_ as F,g as c,r as y,o as r,c as D,a as l,w as u,b as d,e as t,f as i}from"./app.6a0f0dd4.js";const _={setup(){return{active1:c(!1)}}},h={style:{width:"40px"}};function m(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",h,[l(o,{modelValue:a.active1,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active1=n)},null,8,["modelValue"])])}const v=F(_,[["render",m]]),g={setup(){return{active2:c(!1),change:e=>{alert("当前值:"+e)}}}},E={style:{width:"40px"}};function f(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",E,[l(o,{modelValue:a.active2,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active2=n),onChange:a.change},null,8,["modelValue","onChange"])])}const w=F(g,[["render",f]]),x={setup(){const p=c(!1),s=c(!0);return{active3:p,disabled:s}}},q={style:{width:"40px"}};function V(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",q,[l(o,{modelValue:a.active3,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active3=n),disabled:a.disabled},null,8,["modelValue","disabled"])])}const T=F(x,[["render",V]]),b={setup(){return{active4:c(!0)}}},S={style:{width:"60px"}};function $(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",S,[l(o,{modelValue:a.active4,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active4=n),"onswitch-text":"白天","unswitch-text":"夜间"},null,8,["modelValue"])])}const k=F(b,[["render",$]]),P={setup(){return{active5:c(!0)}}},I={style:{width:"40px"}};function N(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",I,[l(o,{modelValue:a.active5,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active5=n)},{"onswitch-icon":u(()=>[d("😄")]),"unswitch-icon":u(()=>[d("🤔")]),_:1},8,["modelValue"])])}const U=F(P,[["render",N]]),z={setup(){return{active6:c("dark")}}},R={style:{width:"40px"}};function B(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",R,[l(o,{modelValue:a.active6,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active6=n),"onswitch-value":"dark","unswitch-value":"light"},null,8,["modelValue"])])}const O=F(z,[["render",B]]),j={setup(){return{active7:c(!0)}}},J={style:{display:"flex","align-items":"flex-end"}};function G(p,s,e,a,C,A){const o=y("tass-switch");return r(),D("div",J,[l(o,{modelValue:a.active7,"onUpdate:modelValue":s[0]||(s[0]=n=>a.active7=n),size:"lg"},null,8,["modelValue"]),l(o,{modelValue:a.active7,"onUpdate:modelValue":s[1]||(s[1]=n=>a.active7=n),size:"md",style:{"margin-left":"10px"}},null,8,["modelValue"]),l(o,{modelValue:a.active7,"onUpdate:modelValue":s[2]||(s[2]=n=>a.active7=n),size:"sm",style:{"margin-left":"10px"}},null,8,["modelValue"]),l(o,{modelValue:a.active7,"onUpdate:modelValue":s[3]||(s[3]=n=>a.active7=n),size:"xs",style:{"margin-left":"10px"}},null,8,["modelValue"])])}const H=F(j,[["render",G]]);const K=t("h1",{id:"switch-开关",tabindex:"-1"},[d("Switch 开关 "),t("a",{class:"header-anchor",href:"#switch-开关","aria-hidden":"true"},"#")],-1),L=t("p",null,"开关选择器, 需要表示开关状态/两种状态之间的切换时。",-1),M=t("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),Q=t("p",null,"使用 tass-switch 标签, 创建开关",-1),W={class:"example"},X=i("",3),Y={class:"example"},Z=i("",2),ss={class:"example"},as=i("",3),ns={class:"example"},ls=i("",3),os={class:"example"},ps=i("",3),ts={class:"example"},es=i("",3),cs={class:"example"},rs=i("",1),ys=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"事件回调","slug":"事件回调","link":"#事件回调","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"修改描述","slug":"修改描述","link":"#修改描述","children":[]},{"level":2,"title":"图标插槽","slug":"图标插槽","link":"#图标插槽","children":[]},{"level":2,"title":"自定义值","slug":"自定义值","link":"#自定义值","children":[]},{"level":2,"title":"尺寸","slug":"尺寸","link":"#尺寸","children":[]}],"relativePath":"components/switch/index.md","lastUpdated":1677078111000}'),Ds={name:"components/switch/index.md"},is=Object.assign(Ds,{setup(p){return(s,e)=>(r(),D("div",null,[K,L,M,Q,t("div",W,[l(v)]),X,t("div",Y,[l(w)]),Z,t("div",ss,[l(T)]),as,t("div",ns,[l(k)]),ls,t("div",os,[l(U)]),ps,t("div",ts,[l(O)]),es,t("div",cs,[l(H)]),rs]))}});export{ys as __pageData,is as default};
