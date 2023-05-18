import{d as o,g as D,r as F,o as p,j as y,c as C,e as s,a as r,b as i,f as d}from"./app.09c1820a.js";const A=o({__name:"base",setup(t){const a=D(new Date);return(c,n)=>{const l=F("tass-date-picker");return p(),y(l,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e)},null,8,["modelValue"])}}}),u=o({__name:"prefixIcon",setup(t){const a=D(new Date);return(c,n)=>{const l=F("tass-date-picker");return p(),y(l,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),"prefix-icon":"book"},null,8,["modelValue"])}}}),_=s("h1",{id:"datepicker-日期选择器",tabindex:"-1"},[i("DatePicker 日期选择器 "),s("a",{class:"header-anchor",href:"#datepicker-日期选择器","aria-hidden":"true"},"#")],-1),m=s("p",null,"用于选择或输入日期",-1),h=s("h2",{id:"选择某一天",tabindex:"-1"},[i("选择某一天 "),s("a",{class:"header-anchor",href:"#选择某一天","aria-hidden":"true"},"#")],-1),g=s("p",null,"以”日“为基本单位，基础的日期选择控件",-1),f={class:"example"},v=d(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-date-picker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nowDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tass-date-picker</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nowDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="设置自定义前缀的内容" tabindex="-1">设置自定义前缀的内容 <a class="header-anchor" href="#设置自定义前缀的内容" aria-hidden="true">#</a></h2><p>前缀内容可以被自定义。</p><p>当你从其他 vue 组件或由渲染函数生成的组件中导入组件时, 你可以设置 prefix-icon 属性来定制前缀内容</p>`,4),k={class:"example"},x=d(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-date-picker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nowDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tass-date-picker</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nowDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1),w=JSON.parse('{"title":"DatePicker 日期选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"选择某一天","slug":"选择某一天","link":"#选择某一天","children":[]},{"level":2,"title":"设置自定义前缀的内容","slug":"设置自定义前缀的内容","link":"#设置自定义前缀的内容","children":[]}],"relativePath":"components/datepicker/index.md","lastUpdated":1677144398000}'),E={name:"components/datepicker/index.md"},V=o({...E,setup(t){return(a,c)=>(p(),C("div",null,[_,m,h,g,s("div",f,[r(A)]),v,s("div",k,[r(u)]),x]))}});export{w as __pageData,V as default};
