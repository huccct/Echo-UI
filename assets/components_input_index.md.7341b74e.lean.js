import{d as e,g as C,r as u,o as c,c as r,a as l,u as o,i as t,b as A,e as i,f as D}from"./app.09c1820a.js";const d=e({__name:"basic",setup(F){let s=C("");return(y,n)=>{const p=u("tass-input");return c(),r("div",null,[l(p,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>t(s)?s.value=a:s=a)},null,8,["modelValue"])])}}}),m=e({__name:"disabled",setup(F){let s=C("");return(y,n)=>{const p=u("tass-input");return c(),r("div",null,[l(p,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>t(s)?s.value=a:s=a),disabled:""},null,8,["modelValue"])])}}}),_=e({__name:"clearable",setup(F){let s=C("");return(y,n)=>{const p=u("tass-input");return c(),r("div",null,[l(p,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>t(s)?s.value=a:s=a),clearable:""},null,8,["modelValue"])])}}}),g=e({__name:"showpassword",setup(F){let s=C("");return(y,n)=>{const p=u("tass-input");return c(),r("div",null,[l(p,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>t(s)?s.value=a:s=a),"show-password":""},null,8,["modelValue"])])}}}),v=e({__name:"suffixIcon",setup(F){let s=C("");return(y,n)=>{const p=u("tass-input");return c(),r("div",null,[l(p,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>t(s)?s.value=a:s=a),"prefix-icon":"upload"},null,8,["modelValue"])])}}}),h=e({__name:"size",setup(F){let s=C("");return(y,n)=>{const p=u("tass-input");return c(),r("div",null,[l(p,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>t(s)?s.value=a:s=a)},null,8,["modelValue"]),A("  "),l(p,{modelValue:o(s),"onUpdate:modelValue":n[1]||(n[1]=a=>t(s)?s.value=a:s=a),size:"medium"},null,8,["modelValue"]),A("  "),l(p,{modelValue:o(s),"onUpdate:modelValue":n[2]||(n[2]=a=>t(s)?s.value=a:s=a),size:"mini"},null,8,["modelValue"]),A("  ")])}}}),f=D('<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a></h1><p>通过鼠标或键盘输入字符。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Input 为受控组件，它 总会显示 Vue 绑定值。</p><p>在正常情况下，input 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用<div style="background:#ccc;display:inline;width:55px;border-radius:3px;">v-model</div>)。 否则，输入框的值将不会改变。</p><p>不支持 <div style="background:#ccc;display:inline;width:55px;border-radius:3px;">v-model</div> 修饰符</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2>',4),E={class:"example"},V=D(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> inputVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a></h2><p>通过 <span style="color:#ccc;">disabled</span> 属性指定是否禁用 input 组件</p>`,3),b={class:"example"},x=D(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> inputVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="一键清空" tabindex="-1">一键清空 <a class="header-anchor" href="#一键清空" aria-hidden="true">#</a></h2><p>使用 <span style="color:#ccc;">clearable</span> 属性即可得到一个可一键清空的输入框</p>`,3),q={class:"example"},k=D(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">clearable</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> inputVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="密码框" tabindex="-1">密码框 <a class="header-anchor" href="#密码框" aria-hidden="true">#</a></h2><p>使用 <span style="color:#ccc;">show-password</span> 属性即可得到一个可切换显示隐藏的密码框</p>`,3),w={class:"example"},U=D(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">show-password</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> inputVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="带图标的输入框" tabindex="-1">带图标的输入框 <a class="header-anchor" href="#带图标的输入框" aria-hidden="true">#</a></h2><p>带有图标标记输入类型</p><p>要在输入框中添加图标，你可以简单地使用 prefix-icon 和 suffix-icon 属性。 另外， prefix 和 suffix 命名的插槽也能正常工作。</p>`,4),N={class:"example"},z=D(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> inputVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="尺寸" tabindex="-1">尺寸 <a class="header-anchor" href="#尺寸" aria-hidden="true">#</a></h2><p>使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： medium, mini</p>`,3),I={class:"example"},B=D(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">&amp;nbsp; </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">medium</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">&amp;nbsp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tass-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mini</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">&amp;nbsp;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> inputVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1),G=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"一键清空","slug":"一键清空","link":"#一键清空","children":[]},{"level":2,"title":"密码框","slug":"密码框","link":"#密码框","children":[]},{"level":2,"title":"带图标的输入框","slug":"带图标的输入框","link":"#带图标的输入框","children":[]},{"level":2,"title":"尺寸","slug":"尺寸","link":"#尺寸","children":[]}],"relativePath":"components/input/index.md","lastUpdated":1677078111000}'),R={name:"components/input/index.md"},J=e({...R,setup(F){return(s,y)=>(c(),r("div",null,[f,i("div",E,[l(d)]),V,i("div",b,[l(m)]),x,i("div",q,[l(_)]),k,i("div",w,[l(g)]),U,i("div",N,[l(v)]),z,i("div",I,[l(h)]),B]))}});export{G as __pageData,J as default};
