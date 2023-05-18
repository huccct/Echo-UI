import{_ as t,r as o,o as p,c,e as s,a as l,b as e,f as n}from"./app.09c1820a.js";const V=JSON.parse('{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"自定义初末值","slug":"自定义初末值","link":"#自定义初末值","children":[]},{"level":2,"title":"自定义初始值","slug":"自定义初始值","link":"#自定义初始值","children":[]}],"relativePath":"components/slider/index.md","lastUpdated":1677144398000}'),r={name:"components/slider/index.md"},i=s("h1",{id:"slider-滑块",tabindex:"-1"},[e("Slider 滑块 "),s("a",{class:"header-anchor",href:"#slider-滑块","aria-hidden":"true"},"#")],-1),d=s("p",null,"通过拖动滑块在一个固定区间内进行选择。",-1),F=s("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),D={style:{padding:"30px"},class:"example"},y=s("br",null,null,-1),_=s("br",null,null,-1),h=n(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="自定义初末值" tabindex="-1">自定义初末值 <a class="header-anchor" href="#自定义初末值" aria-hidden="true">#</a></h2><p>通过设置 min 与 mix , 来展示初末位置。</p>`,3),u={style:{padding:"30px"},class:"example"},m=n(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="自定义初始值" tabindex="-1">自定义初始值 <a class="header-anchor" href="#自定义初始值" aria-hidden="true">#</a></h2><p>通过设置 value , 来展示初始值。</p>`,3),g={style:{padding:"30px"},class:"example"},C=n(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">tass-slider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1);function v(x,A,T,b,S,f){const a=o("tass-slider");return p(),c("div",null,[i,d,F,s("div",D,[l(a),y,_,l(a,{disabled:""})]),h,s("div",u,[l(a)]),m,s("div",g,[l(a,{value:30})]),C])}const k=t(r,[["render",v]]);export{V as __pageData,k as default};
