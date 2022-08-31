"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[900],{8614:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-845d1e9e",path:"/yamt.html",title:"YAMT (SD2Vita)",lang:"en-US",frontmatter:{title:"YAMT (SD2Vita)",description:"Guide on installing the YAMT plugin for SD2Vita.",sidebar:!1},excerpt:"",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"yamt.md",git:{updatedTime:1652191839e3,contributors:[{name:"Paddel06",email:"paddel06@hotmail.de",commits:6},{name:"emiyl",email:"me@emiyl.com",commits:3},{name:"Vita helper or smthing",email:"81228260+hedhehd@users.noreply.github.com",commits:2},{name:"Benjamin K",email:"me@sekoree.dev",commits:1},{name:"Benjamin Ralph",email:"bmcr104@gmail.com",commits:1},{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1},{name:"SCOTT0852",email:"33875157+SCOTT0852@users.noreply.github.com",commits:1},{name:"andyanon6",email:"85595153+andyanon6@users.noreply.github.com",commits:1},{name:"hurda",email:"hurda@users.noreply.github.com",commits:1}]}}},2446:(e,i,t)=>{t.r(i),t.d(i,{default:()=>he});var o=t(6252);const a=(0,o.uE)('<h3 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h3><p>YAMT (Yet Another Mount Tool) is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of a microSD card as a storage device via an SD2Vita adapter. The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device.</p><p>By using the YAMT kernel plugin, the USB drive or microSD card you use will be mounted to <code>ux0:</code> just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re using a USB drive or psvsd adapter, or if this method doesn&#39;t work for you, follow the <a href="storagemgr">StorageMgr</a> guide.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>YAMT is only compatible with firmware versions 3.60 and 3.65 on HENkaku Ensō.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Red Samsung Evo cards are not compatible with YAMT. If you have a Red Samsung Evo MicroSD card please follow the <a href="storagemgr">StorageMgr</a> guide.</p></div><h3 id="what-you-need" tabindex="-1"><a class="header-anchor" href="#what-you-need" aria-hidden="true">#</a> What You Need</h3>',7),l=(0,o._)("li",null,[(0,o.Uk)("A storage device compatible with your system "),(0,o._)("ul",null,[(0,o._)("li",null,"This can be a microSD card to use in an SD2Vita or psvsd adapter, or a USB device for a PS TV console")])],-1),n=(0,o.Uk)("The latest release of "),r={href:"https://github.com/SKGleba/VitaDeploy/releases/latest",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("VitaDeploy"),c=(0,o.uE)('<h3 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h3><h4 id="section-i-formatting-the-microsd" tabindex="-1"><a class="header-anchor" href="#section-i-formatting-the-microsd" aria-hidden="true">#</a> Section I - Formatting the microSD</h4><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you previously installed StorageMgr or another storage plugin, please remove it from your <code>ux0:tai/</code> or <code>ur0:tai/</code> folder before continuing.</p></div>',3),u=(0,o._)("li",null,"Insert your SD2Vita with the microSD card into your PS Vita or PS TV device",-1),d=(0,o._)("li",null,"Launch the VitaDeploy application",-1),m=(0,o.Uk)("Press "),h=(0,o.Uk)(" on Miscellaneous"),p=(0,o.Uk)("Press "),g=(0,o.Uk)(" on Format a storage device"),f=(0,o._)("li",null,[(0,o.Uk)("Ensure "),(0,o._)("code",null,"Target"),(0,o.Uk)(' is set to "SD2Vita" and '),(0,o._)("code",null,"Filesystem"),(0,o.Uk)(' is set to "TexFAT"')],-1),y=(0,o.Uk)("Press "),k=(0,o.Uk)(' on "Format target storage" '),v=(0,o._)("ul",null,[(0,o._)("li",null,"If this fails, ensure the adapter is inserted properly and is undamaged - then reboot and try again"),(0,o._)("li",null,[(0,o.Uk)("If it still fails, follow the "),(0,o._)("a",{href:"storagemgr"},"StorageMgr"),(0,o.Uk)(" guide")])],-1),S=(0,o.Uk)("Press "),b=(0,o.Uk)(' on "Reboot your device"'),_=(0,o._)("h4",{id:"section-ii-installing-yamt-vita",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#section-ii-installing-yamt-vita","aria-hidden":"true"},"#"),(0,o.Uk)(" Section II - Installing yamt-vita")],-1),U=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("If you did the "),(0,o._)("code",null,"3.65 Quick Install"),(0,o.Uk)(" of VitaDeploy, you already have YAMT installed and can skip this section.")])],-1),T=(0,o._)("li",null,"On your device, open VitaDeploy",-1),w=(0,o.Uk)("Press "),P=(0,o.Uk)(" on App Downloader"),I=(0,o.Uk)("Select "),D=(0,o.Uk)(" YAMT Installer"),V=(0,o.Uk)("Press "),A=(0,o.Uk)(" on Download the selected apps"),M=(0,o.Uk)("Press "),q=(0,o.Uk)(" on "),W=(0,o._)("code",null,"YAMT.vpk",-1),Y=(0,o.Uk)(" and confirm with "),x=(0,o.Uk)(" again to install"),E=(0,o._)("li",null,"Once done Close out of the VitaDeploy application",-1),C=(0,o._)("li",null,"Launch the newly installed YAMT Installer application",-1),N=(0,o.Uk)("Press "),O=(0,o.Uk)(" on "),L=(0,o._)("code",null,"-> Install the lite version",-1),R=(0,o._)("ul",null,[(0,o._)("li",null,"Once finished, your device will reboot")],-1),H=(0,o.uE)('<h4 id="section-iii-enabling-the-yamt-driver" tabindex="-1"><a class="header-anchor" href="#section-iii-enabling-the-yamt-driver" aria-hidden="true">#</a> Section III - Enabling the YAMT driver</h4><ol><li>Open the Settings application</li><li>Navigate to <code>Devices</code> -&gt; <code>Storage Devices</code></li><li>Enable &quot;Use YAMT&quot; to enable the YAMT driver</li><li>Set <code>ux0:</code> to &quot;Memory Card&quot; <ul><li>If you&#39;re not using a Sony memory card, select &quot;Internal Storage&quot;</li></ul></li><li>Set <code>uma0:</code> to &quot;SD2Vita&quot;</li><li>Hold the power button and select &quot;Power Off&quot;</li></ol><h4 id="section-iv-transferring-data" tabindex="-1"><a class="header-anchor" href="#section-iv-transferring-data" aria-hidden="true">#</a> Section IV - Transferring Data</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This section will copy the data from your old Sony memory card (or internal storage if you dont have a Sony memory card) to your new storage device. It is recommended to not skip this section, so that the switch from the old main storage to the SD2Vita is as seamless as possible and all your apps carry over.</p></div>',4),G=(0,o._)("li",null,"Power on your device to reboot",-1),B=(0,o._)("li",null,"Open the VitaShell application",-1),F=(0,o._)("li",null,[(0,o.Uk)("Navigate to the "),(0,o._)("code",null,"ux0:"),(0,o.Uk)(" partition "),(0,o._)("ul",null,[(0,o._)("li",null,"This is currently your official memory card or internal storage")])],-1),j=(0,o._)("li",null,"Press down on the D-Pad to highlight a folder or file",-1),K=(0,o.Uk)("Press "),Z=(0,o.Uk)(" to bring up the menu"),Q=(0,o.Uk)("Press "),z=(0,o.Uk)(' on "Mark all" to select all folders and files in the '),J=(0,o._)("code",null,"ux0:",-1),X=(0,o.Uk)(" partition"),$=(0,o.Uk)("Press "),ee=(0,o.Uk)(" again to bring up the menu"),ie=(0,o.Uk)("Press "),te=(0,o.Uk)(' on "Copy"'),oe=(0,o.Uk)("Press "),ae=(0,o.Uk)(" again when prompted"),le=(0,o._)("li",null,[(0,o.Uk)("Navigate out of the "),(0,o._)("code",null,"ux0:"),(0,o.Uk)(" partition and enter the "),(0,o._)("code",null,"uma0:"),(0,o.Uk)(" partition "),(0,o._)("ul",null,[(0,o._)("li",null,"This is your unofficial storage device's memory")])],-1),ne=(0,o.Uk)("Press "),re=(0,o.Uk)(" to bring up the menu"),se=(0,o.Uk)("Press "),ce=(0,o.Uk)(" on paste and wait for it to finish"),ue=(0,o.uE)("<li>Once done, exit VitaShell and open the Settings application</li><li>Navigate to <code>Devices</code> -&gt; <code>Storage Devices</code></li><li>Set <code>ux0:</code> to &quot;SD2Vita&quot;</li><li>Set <code>uma0:</code> to &quot;Memory Card&quot; <ul><li>If you&#39;re not using a memory card, select &quot;Internal Storage&quot;</li></ul></li><li>Hold the power button and select &quot;Power Off&quot;</li><li>Power on your device to reboot</li>",6),de=(0,o.uE)("<hr><p>If you want to reclaim the space on your memory card (to use for storing PSP games for instance), you can delete the contents of <code>uma0:</code> (the new memory card mount point) and / or <code>imc0:</code> (if you have a PS Vita 2000 or PS TV).</p><p>If you decide to do this, you must <em>not</em> delete these folders if they exist:</p><ul><li><code>uma0:data/bootstrap.self</code></li><li><code>uma0:app/PCSG90096</code></li><li><code>uma0:app/VITASHELL</code></li><li><code>uma0:appmeta/PCSG90096</code></li><li><code>uma0:appmeta/VITASHELL</code></li><li><code>uma0:license/app/PCSG90096</code></li><li><code>uma0:license/app/VITASHELL</code></li><li><code>uma0:user/00/savedata/PCSG90096</code></li><li><code>uma0:user/00/savedata/VITASHELL</code></li></ul><p>This is because you must keep h-encore installed to the memory card so you can enable HENkaku (and therefore YAMT) after a reboot.</p>",5),me={},he=(0,t(3744).Z)(me,[["render",function(e,i){const t=(0,o.up)("OutboundLink"),me=(0,o.up)("Btn");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("ul",null,[l,(0,o._)("li",null,[n,(0,o._)("a",r,[s,(0,o.Wm)(t)])])]),c,(0,o._)("ol",null,[u,d,(0,o._)("li",null,[m,(0,o.Wm)(me,{btn:"confirm"}),h]),(0,o._)("li",null,[p,(0,o.Wm)(me,{btn:"confirm"}),g]),f,(0,o._)("li",null,[y,(0,o.Wm)(me,{btn:"confirm"}),k,v]),(0,o._)("li",null,[S,(0,o.Wm)(me,{btn:"confirm"}),b])]),_,U,(0,o._)("ol",null,[T,(0,o._)("li",null,[w,(0,o.Wm)(me,{btn:"confirm"}),P]),(0,o._)("li",null,[I,(0,o.Wm)(me,{btn:"confirm"}),D]),(0,o._)("li",null,[V,(0,o.Wm)(me,{btn:"confirm"}),A]),(0,o._)("li",null,[M,(0,o.Wm)(me,{btn:"confirm"}),q,W,Y,(0,o.Wm)(me,{btn:"confirm"}),x]),E,C,(0,o._)("li",null,[N,(0,o.Wm)(me,{btn:"cross"}),O,L,R])]),H,(0,o._)("ol",null,[G,B,F,j,(0,o._)("li",null,[K,(0,o.Wm)(me,{btn:"triangle"}),Z]),(0,o._)("li",null,[Q,(0,o.Wm)(me,{btn:"confirm"}),z,J,X]),(0,o._)("li",null,[$,(0,o.Wm)(me,{btn:"triangle"}),ee]),(0,o._)("li",null,[ie,(0,o.Wm)(me,{btn:"confirm"}),te]),(0,o._)("li",null,[oe,(0,o.Wm)(me,{btn:"confirm"}),ae]),le,(0,o._)("li",null,[ne,(0,o.Wm)(me,{btn:"triangle"}),re]),(0,o._)("li",null,[se,(0,o.Wm)(me,{btn:"confirm"}),ce]),ue]),de],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,o]of i)t[e]=o;return t}}}]);