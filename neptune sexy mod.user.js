// ==UserScript==
// @name           Sexy Neptun
// @description    Neptun with better design
// @namespace      http://example.org
// @version        0.4
// @homepageURL     https://github.com/DomiDoma/sexyneptun
// @downloadURL     https://github.com/DomiDoma/sexyneptun/blob/main/neptune%20sexy%20mod.user.js
// @updateURL     https://github.com/DomiDoma/sexyneptun/blob/main/neptune%20sexy%20mod.user.js
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*neptun*/*oktato*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://*oktato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato/*
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @include        https://host.sdakft.hu/*
// @include        https://neptun.ejf.hu/ejfhw/*
// @grant          GM.xmlHttpRequest
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.info
// @run-at      document-start
// ==/UserScript==


  const head= document.querySelector("head");
const css = `:root{--header-color:hsla(0, 0%, 22%,1);--card-back-color:hsla(0, 0%, 14%,1);--base-front-color:#026eb4;--base-back-color:hsla(0, 0%, 7%,1);--card-header-color:#424242;--hover-color:hsla(0, 0%, 12%, 1)}.theme-selector{display:flex;align-items:center;margin-left:auto}.theme-selector input{border-radius:50%;width:1.3rem;height:1.3rem;border:none;padding:0}.theme-selector input::-webkit-color-swatch-wrapper{padding:0}.theme-selector input::-webkit-color-swatch{border:2px solid gray;border-radius:50%}html{opacity:0;transition:.2s ease}body form *:not(a){.outline:1px solid red;color:white !important}*{font-family:sans-serif !important;color:white}*{color-scheme:dark}body{background-color:var(--base-back-color)}a{color:var(--base-front-color)}#div_login_right_side,#td_Footer,.panHeader{display:none}#tableMain > tbody > tr:nth-child(2) > td > table > tbody > tr > td.login_right_side{width:0}#tdIstitute > div:nth-child(2){display:flex;justify-content:center;text-transform:uppercase}#tdIstitute > div:nth-child(2)::after{content:"SÁLÁLÁLÁLÁ";font-size:0.9rem;margin-left:2rem;font-style:italic;font-weight:bold}#td_LeftImage,.login_background_table#tableMain{background:none}#info_table_center_container_div{opacity:0.1;transition:0.2s ease}#info_table_center_container_div:hover{opacity:1}#tableMain > tbody > tr:nth-child(2) > td > table > tbody > tr > td.login_left_side{background:#1a1a1a;border-radius:2rem;padding:1rem}.fbutton{padding:0!important !important}#personTimetable_chklTimetableType input,#upFunction_c_common_timetable_upParent_tabOrarend_ctl00_up_timeTablePerson_upMaxLimit_personTimetable_upFilter > table > tbody > tr:nth-child(2) > td.tableRowData input,label{margin:0.2rem !important;vertical-align:middle}#personTimetable_chklTimetableType td,#upFunction_c_common_timetable_upParent_tabOrarend_ctl00_up_timeTablePerson_upMaxLimit_personTimetable_upFilter > table > tbody > tr:nth-child(2) > td.tableRowData td{padding:0.1rem;border-right:2px solid gray}#calhead > div.cHead > div.ftitle{display:none}#caltoolbar > table > tbody > tr:first-child > td *,#caltoolbar > table > tbody > tr:nth-child(2) *{padding:0 !important;border:none!important}#caltoolbar > table > tbody > tr:nth-child(1) > td div:nth-child(9){margin-right:auto!important}#caltoolbar > table > tbody > tr:nth-child(1) > td div:nth-child(13){margin-left:auto!important}#caltoolbar > table > tbody > tr:first-child > td{display:flex!important;justify-content:center!important;height:3rem!important;align-items:center!important}#caltoolbar{background:var(--header-color);border-radius:1rem;padding:0.3rem !important}#caltoolbar > table > tbody > tr:first-child > td > div.fbutton{background:var(--card-back-color);border-radius:0.5rem!important;display:flex!important;align-items:center!important;border:none!important;padding:0.3rem !important;margin:0 0.2rem;transition:0.2s ease}#caltoolbar > table > tbody > tr:nth-child(2) div{background:var(--card-back-color);border-radius:1rem;display:flex;align-items:center;border:none;margin:0 0.2rem;transition:0.2s ease;padding:0 0.2rem!important !important}#caltoolbar > table > tbody > tr:nth-child(2) div a{color:white;text-decoration:none}#caltoolbar > table > tbody > tr:first-child > td > div:hover,#caltoolbar > table > tbody > tr:nth-child(2) div:hover{background:var(--base-front-color)}#caltoolbar div span{background:none;display:flex;align-items:center;text-transform:uppercase;float:unset;border:none!important}span.fnext,span.fprev{position:relative;width:3rem}span.fnext::after,span.fprev::after{content:'';background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fwhite-arrow-png-24.png&f=1&nofb=1') no-repeat !important;background-size:0.8rem !important;background-position:50% !important;position:absolute;inset:0 0 0 0;transform:rotate(90deg)}span.fnext{position:relative}span.fnext::after{transform:rotate(-90deg)}#BBIT_DP_CONTAINER > table > tbody > tr:nth-child(3) > td,#BBIT_DP_INNER,#BBIT_DP_INNER > thead,#BBIT_DP_INNER > thead > tr > th{background:black !important}div.btnseparator{display:none !important}#dvCalMain{border-radius:1rem !important;overflow:hidden;margin-top:0.5rem}#dvwkcontaienr > table > tbody > tr:nth-child(1){height:2rem!important;text-transform:uppercase}#dvwkcontaienr,#tgTable > tbody > tr:nth-child(2) > td.tg-times{background:var(--card-header-color) !important}.wk-allday td{background:var(--card-back-color) !important}#tgspanningwrapper > div > div{border:1px solid gray}#tgTable > tbody > tr:nth-child(2) > td{border-right:1px solid gray;background:var(--card-back-color) !important}.bubble-closebutton#bubbleClose1,.bubble-table{transform:translateY(7rem)}.bubble-table *{background:#818181!important;border:none;border-radius:1rem}#bbit-cal-buddle > table > tbody > tr:nth-child(1),#bbit-cal-buddle > table > tbody > tr:nth-child(3),#prong2{display:none !important}#dvCalMain div.chip span{mix-blend-mode:difference}#dvCalMain div.chip > dl > dt{padding:0.2rem;font-size:0.8rem}#weekViewAllDaywk span{mix-blend-mode:difference}#upFunction_h_addsubjects_upOrarendTervezo_orarendtervezo1_upTimeTable dt{font-size:0.5rem!important}.leftbuttons_td{display:none}#upBoxes_leftbox .Gadget{background-color:var(--card-back-color);border-radius:1rem;margin:0 0 0.5rem;padding:1rem;overflow:hidden}#upBoxes_leftbox .Gadget td{background:none}.Gadget{max-width:100%}.Gadget > tbody > tr:first-of-type{background-color:var(--header-color);height:2rem}.Gadget > tbody > tr:first-of-type span{color:white;font-size:1rem}.Gadget .GadgetFooterLeftCorner,.GadgetFooter,.GadgetFooterRightCorner,.gadgetbodyright{display:none}.messagetable tr a{background-color:var(--header-color) !important;border-radius:0.5rem;padding:0.5rem;display:block;color:white;text-decoration:none;margin-bottom:0.5rem;transition:0.2s ease}.messagetable tr a:hover{background-color:var(--hover-color) !important}.messagetable td{padding:0 !important}.favorite_table tr a{background-color:var(--header-color) !important;border-radius:0.5rem;padding:0.5rem;display:block;color:white;text-decoration:none;margin-bottom:0.5rem;width:100%;transition:0.2s ease}.favorite_table tr a:hover{background-color:var(--hover-color) !important}.favorite_table td{padding:0 !important}.favorite_remove_button_td{display:}#calendar_calendar > tbody *{background:none!important}#calendar_calendar > tbody > tr:nth-child(2) td{color:white !important}#calendar_calendar > tbody .TodayDay a{color:var(--base-front-color) !important}#calendar_calendar > tbody > tr > td a{color:lightgray !important}#calendar_calendar > tbody > tr > .calendar_othermonthdaystyle a{color:gray !important}#mainfunctionarrownext,#mainfunctionarrowprev{filter:invert()}#upBoxes_upCalendar_gdgCalendar_gdgCalendar_body .GadgetFooterMenu{height:2rem;padding:0!important !important;display:flex}#upBoxes_upCalendar_gdgCalendar_gdgCalendar_body .GadgetFooterMenu img,#upBoxes_upCalendar_gdgCalendar_gdgCalendar_body .GadgetFooterMenu span{display:none}#upBoxes_upCalendar_gdgCalendar_gdgCalendar_calendaroutlookexport{margin:auto!important !important}.top_menu_mid{display:flex;align-items:center}.top_menu_wrapper *{background-image:none;color:white !important}#mb1 li.menu-parent,#mb1 li.menu-parent.has-target{color:white !important}ul.menubar li.menu-parent{background:var(--header-color);margin:0 0.5rem 0.5rem 0;border-radius:0.5rem;padding:0.5rem;transition:0.2s ease}#mb1 li.menu-parent.has-target:hover{color:white !important}ul.menubar li.menu-parent:hover{color:white !important;background-color:var(--hover-color) !important}.top_menu_right{display:none}.top_menu_left{position:relative;width:10rem;background:url("https://neptun.pte.hu/sites/neptun.pte.hu/files/files/neptun-logo-fekvo.png") no-repeat !important;background-size:auto 2rem !important;background-position:0 50% !important}.top_menu_left::after{content:"RAKÁS SZAR ÁÁÁÁÁÁÁÁÁ";background:var(--base-front-color);opacity:0;transition:0.2s ease}.top_menu_left:hover::after{opacity:1}.top_menu_wrapper ul.menu li{padding:0.6rem 1rem;border:none;font-weight:normal;font-size:smaller;border-bottom:1px solid rgba(255,255,255,.05)}.contextdiv{padding:0.5rem 0}.contextdiv .grid_contextheader,.grid_contextfooter{display:none}.contextdiv td{height:1.5rem;border-bottom:1px solid rgba(255,255,255,.05) !important}.contextdiv td[aria-disabled="false"]:hover,.top_menu_wrapper ul.menu li:hover{background:var(--hover-color) !important}.contextdiv td[aria-disabled="true"]{opacity:0.2;pointer-events:none}.contextdiv,.top_menu_wrapper ul.menu{margin-top:0.8rem !important;.display:block !important;border-radius:1rem !important;background:var(--card-back-color) !important;color:white !important;box-shadow:0 0 5rem black;overflow:hidden}.menuitemfirst,.menuitemlast{display:none}.infopanel_icon{display:none}.infopanel *{background:none !important;border:none !important}.infopanel .messageBoxContent{background:#dab77663 !important;border-radius:1rem;padding:1rem !important;border:2px solid #d2a157 !important}#mainfunctionarrow{display:none}.FunctionHeaderItem svg{fill:var(--base-front-color);transform:rotate(90deg)}#upMenuCaption{margin:1rem}td.function *:not(input,.button,.mainfunction_item,span){background:none;border:none}.FunctionFooterLeftCorner,.FunctionFooterRightCorner,.FunctionHeader,.FunctionHeaderLeftCorner,.FunctionHeaderRightCorner,.FunctionLeftSide,.FunctionRightSide{background:none}.ui-dialog .scrollablebody tr,td.function .scrollablebody tr{background:var(--header-color);border:none;margin-bottom:1rem;border-radius:0.5rem}.ui-dialog .scrollablebody tr:hover,td.function .scrollablebody tr:hover{background:var(--hover-color);border:none}.function_table{background:var(--card-back-color) !important;overflow:hidden;border:none;border-radius:1rem;max-width:90rem;margin:auto}.function_table > tbody > tr:first-child{display:none}.button{background-color:var(--base-front-color) !important}h1{font-size:1.5rem !important;color:white !important}#function_tableheader{background-color:var(--header-color)}.footer_table{display:none}.img_excel,.img_pin,.img_print,.img_search{height:2rem}.boxestable{margin-top:0!important}td.contextcell{background:url('https://icon-library.com/images/more-icon-png/more-icon-png-27.jpg') no-repeat !important;background-size:40% !important;background-position:0.5rem 0.5rem !important;background-position:0 0}.ui-dialog,.ui-dialog *{background:none !important;border:none !important}.ui-dialog{background:var(--card-back-color) !important;border-radius:1rem;overflow:hidden;padding:0}div.ui-widget-overlay.ui-front{background:black}.ui-dialog-title{font-size:1.5rem;display:flex;justify-content:center}.ui-dialog-titlebar{background:#4242427d !important;border-radius:0;height:2rem;backdrop-filter: blur(1rem)}.ui-dialog-footerbar .ui-button{margin:0.5rem !important}.ui-dialog-titlebar-maximize{background:url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fmaximize-window-xxl.png&f=1&nofb=1') !important;background-size:90%!important;background-position:0 0!important;background-repeat:no-repeat!important}.ui-dialog-titlebar-close{background:url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fcancel-512.png&f=1&nofb=1') !important;background-size:90%!important;background-position:0 0!important;background-repeat:no-repeat!important}.readmessage_editor{overflow:auto auto}table{.border-bottom:1px solid #242424 !important}#upFilter_bodytable > tbody > tr,table td:not(.left_boxes):not(.function):not(#gridcontainer *){vertical-align:middle !important}td.tableRowData{display:flex}.searchpanel,table.table_body{border-radius:0.5rem !important;overflow:hidden;padding:0.5rem !important}.ui-dialog .table_body thead,table > thead{background-color:#424242 !important;height:3rem}.searchpanel,.ui-dialog .table_body{background-color:var(--header-color) !important}.ui-dialog .scrollablebody tr:hover{background:var(--hover-color) !important}.scrollablebody tr{height:2rem}.scrollablebody td,.ui-dialog .table_body{height:2rem;border-bottom:1px solid var(--card-back-color) !important}#Addsubject_course1_gridCourses_bodytable tr.Row1_Bold_sel td,#Addsubject_course1_gridCourses_bodytable tr.Row1_sel td,#Addsubject_course1_gridCourses_grid_body_div tr.Row1_Bold_sel td,#Addsubject_course1_gridCourses_grid_body_div tr.Row1_sel td,#h_addsubjects_gridSubjects_bodytable tr.Row1_Bold td,#h_addsubjects_gridSubjects_bodytable tr.context_selectedrow td{background-color:var(--hover-color) !important}tr.context_selectedrow > td.contextcell{}div#mainPageHeader{padding:0.2rem 0.8rem 0.2rem 0}a#lbtnQuit{color:white}.top_logout_link{padding-right:1.5rem}.GadgetMenuItem,.button,.gridbutton,.mainfunction_item,a#lbtnQuit,input[type="button"],input[type="submit"]:not(.orarendtervezo_nagyitas){min-height:2rem;padding:0.5rem 1rem 0.5rem 1rem !important;background:var(--base-front-color)!important;border:none;border-radius:0.5rem;text-transform:uppercase;box-shadow:none;margin:0.5rem 0 0.5rem 0!important !important;font-size:100%}.button:hover,input[type="button"]:hover,input[type="submit"]:hover,a#lbtnQuit:hover{filter: brightness(.8);cursor:pointer !important;text-decoration:none !important}.GadgetMenuItem,.gridbutton,.mainfunction_item{min-height:0.5rem !important;padding:0.3rem 1rem 0.3rem 1rem !important;background:#424242!important;border:none;border-radius:1rem;text-transform:uppercase;margin:0.3rem !important}.GadgetMenuItem:hover,.mainfunction_item:hover{background:var(--base-front-color)!important;text-decoration:none;border-radius:1rem}input.gridbutton{height:unset;margin:0.3rem!important !important;vertical-align:middle !important}input[type="text"],input[type="password"],select{background-color:var(--card-back-color) !important;height:1.5rem !important;border-radius:0.5rem;margin:0.2rem 0!important !important;border:1px solid rgba(255,255,255,.3) !important}.exceltd,.fixheadertd,.printtd,.searchtd{position:relative}.exceltd::after{content:"";pointer-events:none;background:var(--card-back-color) url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff0%2Fba%2Fab%2Ff0baabc7a94a50448da9fb2d9508d450.png&f=1&nofb=1');background-size:60%;background-position:0 0;background-repeat:no-repeat;position:absolute;inset:0 0 0 0}.printtd::after{content:"";pointer-events:none;background:var(--card-back-color) url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fgoogle%2Fnoto-emoji-objects%2F1024%2F62827-printer-icon.png&f=1&nofb=1');background-size:60%;background-position:0 0;background-repeat:no-repeat;position:absolute;inset:0 0 0 0}.fixheadertd::after{content:"";pointer-events:none;background:var(--card-back-color) url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fcolicon%2F24%2Fpin-512.png&f=1&nofb=1');background-size:60%;background-position:0 0;background-repeat:no-repeat;position:absolute;inset:0 0 0 0}.searchtd::after{content:"";pointer-events:none;background:var(--card-back-color) url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconpacks.net%2Ficons%2F2%2Ffree-magnifier-icon-2915-thumb.png&f=1&nofb=1');background-size:60%;background-position:0 0;background-repeat:no-repeat;position:absolute;inset:0 0 0 0}.gadgetbutton[title="Frissítés"]{display:none}.GadgetHeaderPanelButtonLeftMenu,.favorite_remove_button_td{position:relative}.GadgetHeaderPanelButtonLeftMenu::after{content:"";pointer-events:none;background:var(--header-color) url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fcancel-512.png&f=1&nofb=1');background-size:40%;background-position:1.6rem 0.4rem;background-repeat:no-repeat;position:absolute;inset:0 0 0 0}.favorite_remove_button_td::after{content:"";pointer-events:none;background:var(--card-back-color) url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fcancel-512.png&f=1&nofb=1');background-size:50%;background-position:0.2rem 0.5rem;background-repeat:no-repeat;position:absolute;inset:0 0 0 0}.upFilter_searchpanel_collapsedimage{background-image:url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fcancel-512.png&f=1&nofb=1') !important;background-size:50%}.sda .ajax__tab_active *,.sda .ajax__tab_header[role="tablist"] *{background:none !important}.sda .ajax__tab_header[role="tablist"] a{background:var(--header-color) !important;border-radius:0.5rem 0.5rem 0 0}.sda .ajax__tab_header[role="tablist"] .ajax__tab_tab{padding:0.2rem 0.8rem !important;display:flex;align-items:center}.sda .ajax__tab_header[role="tablist"] .ajax__tab_active .ajax__tab_tab{background:var(--base-front-color) !important}.sda .ajax__tab_header[role="tablist"] .ajax__tab_active .ajax__tab_tab:focus{outline:none}#form1 > fieldset > table.main_function_table > tbody > tr > td.function > table > tbody > tr:nth-child(4) > td:nth-child(2),#h_cashin_gridCashIn_gridmaindiv > table.grid_pagertable > tbody > tr > td.grid_topfunctionpanel > table > tbody > tr > td,.grid_pagertable{padding:0.5rem}td[role="gridcell"] span.link{text-decoration:none !important;color:white !important}.scrollablebody td[role="gridcell"]:nth-last-child(3) > span{background:var(--base-front-color)!important;padding:0.2rem 0.5rem;border-radius:1rem}@supports (backdrop-filter: blur(1rem)){.contextdiv,.top_menu_wrapper ul.menu,.ui-dialog{background:rgba(36, 36, 36,0.5) !important;backdrop-filter: blur(1rem)}.top_menu_wrapper ul.menu li{background:rgba(255, 255, 255,0.05) !important}}`;
const customCss = document.createElement("style");
customCss.setAttribute("type", "text/css");
customCss.textContent = css;
customCss.setAttribute("csstype","custom");

head.appendChild(customCss)

window.onload=function(){
  
  
  const html=document.querySelector("html");
  
  
  html.style.opacity=1;
  
  
  
  document.querySelectorAll("a").forEach(item=>{
    
      let link = item.href;
      item.addEventListener("click", (e)=>{
        e.preventDefault();
        html.style.opacity=0;
        window.location=link;
      });
  });
  
  
  
  
const themeSelector = document.createElement("div");
  themeSelector.classList.add("theme-selector");
  document.querySelector("td.top_menu_mid").appendChild(themeSelector);
  const colorPicker = document.createElement("input");
  const colorLabel = document.createElement("label");
  colorLabel.textContent= "Color:";
  colorLabel.setAttribute("for", "cp");
  colorPicker.setAttribute("type", "color");
  colorPicker.setAttribute("title", "Choose a color");
  colorPicker.setAttribute("name", "cp");
  document.querySelector(".theme-selector").appendChild(colorLabel);
document.querySelector(".theme-selector").appendChild(colorPicker);
  colorPicker.value=localStorage.getItem('base-color');
  SetBaseColor();
  colorPicker.addEventListener("input", ()=> {
    
    localStorage.setItem('base-color', colorPicker.value);
    
    
    SetBaseColor();
  });
  
  document.querySelector("#function_tableheader td.FunctionHeaderItem").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><g id="XMLID_13_"><path id="XMLID_14_" d="M175.605,104.393c-2.814-2.813-6.628-4.393-10.607-4.393c-3.979,0-7.794,1.581-10.607,4.394l-79.998,80   c-5.857,5.858-5.857,15.355,0.001,21.213c5.857,5.857,15.355,5.858,21.213-0.001l69.392-69.393l69.395,69.394   C237.322,208.536,241.161,210,245,210s7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.605,104.393z"/><path id="XMLID_15_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300   c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`

  
  head.removeChild(customCss);
  head.appendChild(customCss);
  

}

function SetBaseColor(){
  let c = HexToHSL(localStorage.getItem("base-color") || "#026eb4");
  
    document.documentElement.style.setProperty('--base-front-color', `hsl(${c.h}, ${c.s}%, ${c.l}%)`);
    document.documentElement.style.setProperty('--hover-color', `hsl(${c.h}, ${c.s-10}%, ${c.l-10}%)`);
}

function HexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    return {h, s, l};
}
