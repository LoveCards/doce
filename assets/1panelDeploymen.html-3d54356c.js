import{_ as e,o as s,c as a,a as t}from"./app-88a840c1.js";const n="/assets/2-f801f08d.png",o="/assets/3-6aff6c67.png",c="/assets/4-2cc84bbd.png",p="/assets/5-7c3227d0.png",i="/assets/6-0f62a1d0.png",l="/assets/7-c71409a2.png",r="/assets/8-6a8f13d9.png",m="/assets/9-fc4db1c2.png",d="/assets/10-7265434f.png",u="/assets/11-77171cbc.png",h="/assets/12-40eaf28f.png",b="/assets/17-140cab01.png",k="/assets/8-8c047a3a.png",_="/assets/9-288f042f.png",q="/assets/15-566c994e.png",g="/assets/12-3866c6c3.png",f={},v=t('<h1 id="_1panel-面板部署指南" tabindex="-1"><a class="header-anchor" href="#_1panel-面板部署指南" aria-hidden="true">#</a> 1panel 面板部署指南</h1><div class="custom-container tip"><p class="custom-container-title">内容源自</p><p>作者：shixin<br> Email：2936626094@qq.com</p></div><h2 id="准备阶段" tabindex="-1"><a class="header-anchor" href="#准备阶段" aria-hidden="true">#</a> 准备阶段</h2><blockquote><p>打开 1panel 面板</p></blockquote><h3 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h3><blockquote><p>点击 <em>应用商店</em> ，找到 <em>OpenResty</em> , <em>mysql</em> ,点进去安装,等待安装完成</p></blockquote><h3 id="创建-php-容器" tabindex="-1"><a class="header-anchor" href="#创建-php-容器" aria-hidden="true">#</a> 创建 php 容器</h3><blockquote><p>找到 <em>网站</em> - <em>运行环境</em> - <em>创建运行环境</em></p></blockquote><p><img src="'+n+'" alt=""></p><blockquote><p>配置与下图一样即可</p></blockquote><p><img src="'+o+'" alt=""></p><h3 id="创建网站" tabindex="-1"><a class="header-anchor" href="#创建网站" aria-hidden="true">#</a> 创建网站</h3><blockquote><p>找到 <em>网站</em> ，点击 <em>创建网站</em></p></blockquote><p><img src="'+c+'" alt=""></p><blockquote><p>在弹出的页面选 <em>运行环境</em> .然后运行环境选刚刚创建的 php8,域名填自己的域名即可</p></blockquote><p><img src="'+p+'" alt=""></p><h3 id="上传源码" tabindex="-1"><a class="header-anchor" href="#上传源码" aria-hidden="true">#</a> 上传源码</h3><blockquote><p>创建好后,点网站目录那个图标,进入网站目录</p></blockquote><p><img src="'+i+'" alt=""></p><blockquote><p>点 <em>上传</em> ,把下载的源码文件上传进去,然后点解压</p></blockquote><p><img src="'+l+'" alt=""></p><blockquote><p>解压完成后进入源码文件夹,全选文件,移动到上图的 index 目录下</p></blockquote><p><img src="'+r+'" alt=""></p><h3 id="简单的配置" tabindex="-1"><a class="header-anchor" href="#简单的配置" aria-hidden="true">#</a> 简单的配置</h3><blockquote><p>然后再次找到 <em>网站</em> 点击右面的 <em>配置</em></p></blockquote><p><img src="'+m+`" alt=""></p><blockquote><p>进入到配置页面中 点击 <em>网站目录</em> 运行目录设置成 <em>public</em> 并保存 点击 <em>伪静态</em> 伪静态设置成下面这样并保存</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">if</span> (!-e <span class="token variable">$request_filename</span>)</span><span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">rewrite</span>  ^(.*)$  /index.php?s=<span class="token variable">$1</span>  last</span><span class="token punctuation">;</span>   <span class="token directive"><span class="token keyword">break</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最后修改 index 目录权限为 0777(勾选同时修改子文件夹)</p></blockquote><p><img src="`+d+'" alt=""><img src="'+u+'" alt=""></p><blockquote><p>到这里,简单的配置就完成了</p></blockquote><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3><blockquote><p>点击 <em>数据库</em> - <em>创建数据库</em></p></blockquote><p><img src="'+h+'" alt=""><img src="'+b+'" alt=""></p><blockquote><p>名称和用户名自定义 ,填好后点击 <em>确认</em> 到这里,我们的所有东西就都准备好了</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><blockquote><p>浏览器打开刚刚创建网站用的域名 点击 <em>下一步</em></p></blockquote><p><img src="'+k+'" alt=""></p><blockquote><p><em>下一步</em></p></blockquote><p><img src="'+_+'" alt=""></p><blockquote><p><em>数据库服务器</em> 填 <em>mysql</em> 其他的根据自己创建的数据库来填 填好后点击 <em>下一步</em></p></blockquote><p><img src="'+q+'" alt=""></p><blockquote><p>点击 <em>进入你的领域！</em> 即可食用 lc2</p></blockquote><p><img src="'+g+'" alt=""></p><h3 id="后台管理" tabindex="-1"><a class="header-anchor" href="#后台管理" aria-hidden="true">#</a> 后台管理</h3><blockquote><p>后台管理地址为：你的域名/admin 默认帐密：admin</p></blockquote>',46),x=[v];function y(w,$){return s(),a("div",null,x)}const D=e(f,[["render",y],["__file","1panelDeploymen.html.vue"]]);export{D as default};