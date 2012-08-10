/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(b){var a=window.pe||{fn:{}};datepicker={type:"polyfill",depends:["calendar","xregexp"],_exec:function(g){var p,u,o=a.fn.calendar,m,l,f,x=new Date(),d,v="YYYY-MM-DD",n,i,w,q,t,j,h,y=x.getMonth(),c,s,r,k=x.getFullYear(),e;g.addClass("picker-field");f=function(z,C){var A=e.find("label[for='"+z+"']").text(),B=b('<a id="'+C+'-toggle" class="picker-toggle-hidden" href="javascript:;"><img src="'+pe.add.liblocation+'images/datepicker/icon.png" alt="'+pe.dic.get("%datepicker-show")+A+'"/></a>');B.on("click",function(){r(z,C)});g.after(B);m.slideUp(0)};p=function(D,F,E,H,C,A,G){C=o.getDateFromISOString(C);A=o.getDateFromISOString(A);var B=(F===C.getFullYear()&&E===C.getMonth()),z=(F===A.getFullYear()&&E===A.getMonth());H.each(function(I,L){if((!B&&!z)||(B===true&&I>=C.getDate())||(z===true&&I<=A.getDate())){var M=b(L).children("div"),K=b('<a href="javascript:;"></a>'),J=M.parent();J.empty();K.append(M.html());K.appendTo(J);K.on("keydown",function(P){var N=b(this).closest(".cal-container"),O=N.attr("id");if(!(P.ctrlKey||P.altKey||P.metaKey)){switch(P.keyCode){case 27:r(D,D+"-picker");return false;case 32:b(this).trigger("click");return false;case 33:if(P.shiftKey){c(O,F,E,C,A,new Date(F-1,E,I+1))}else{c(O,F,E,C,A,new Date(F,E-1,I+1))}return false;case 34:if(P.shiftKey){c(O,F,E,C,A,new Date(F+1,E,I+1))}else{c(O,F,E,C,A,new Date(F,E+1,I+1))}return false;case 35:pe.focus(b(this).closest("ol").children("li").children("a").last());return false;case 36:pe.focus(b(this).closest("ol").children("li").children("a").first());return false;case 37:c(O,F,E,C,A,new Date(F,E,I));return false;case 38:c(O,F,E,C,A,new Date(F,E,I-6));return false;case 39:c(O,F,E,C,A,new Date(F,E,I+2));return false;case 40:c(O,F,E,C,A,new Date(F,E,I+8));return false}}else{if(P.ctrlKey&&!(P.altKey||P.metaKey)){switch(P.keyCode){case 35:c(O,F,E,C,A,new Date(F,11,31));return false;case 36:c(O,F,E,C,A,new Date(F,0,1));return false}}}});K.bind("click",{fieldid:D,year:F,month:E,day:I+1,days:H,format:G},function(N){u(N.data.fieldid,N.data.year,N.data.month+1,N.data.day,N.data.format);s(N.data.fieldid,N.data.year,N.data.month,N.data.days,N.data.format);r(N.data.fieldid,N.data.fieldid+"-picker")})}})};c=function(z,B,D,C,E,A){if(A.getTime()<C.getTime()){A=C;A.setDate(A.getDate()+1)}else{if(A.getTime()>E.getTime()){A=E;A.setDate(A.getDate()+1)}}if(A.getMonth()!==D||A.getFullYear()!==B){o.create(z,A.getFullYear(),A.getMonth(),true,o.getISOStringFromDate(C),o.getISOStringFromDate(E))}pe.focus(b("#"+z).find(".cal-day-list").children("li:eq("+(A.getDate()-1)+")").children("a"))};s=function(B,F,D,I,H){var E,z,A,G;b(I).removeClass("datepicker-selected");b(I).find(".datepicker-selected-text").detach();H=H.replace("DD","(?<a> [0-9]{2})");H=H.replace("D","(?<a> [0-9] )");H=H.replace("MM","(?<b> [0-9]{2})");H=H.replace("M","(?<b> [0-9])");H=H.replace("YYYY","(?<c> [0-9]{4})");H=H.replace("YY","(?<c /> [0-9]{2})");E="^"+H+"$";z=b("#"+B).attr("value");G=new XRegExp(E,"x");try{if(z!==""){A=b.parseJSON(z.replace(G,'{"year":"${c}", "month":"${b}", "day":"${a}"}'));if(A.year===F&&A.month===D+1){b(I[A.day-1]).addClass("datepicker-selected");b(I[A.day-1]).children("a").append('<span class="wb-invisible datepicker-selected-text"> ['+pe.dic.get("%datepicker-selected")+"]</span>")}}}catch(C){}};u=function(z,B,D,A,C){e.find("#"+z).attr("value",n(B,D,A,C))};r=function(A,C){var z=e.find("#"+C+"-toggle"),B;z.toggleClass("picker-toggle-hidden picker-toggle-visible");m.unbind("focusout.calendar");m.unbind("focusin.calendar");if(z.hasClass("picker-toggle-visible")){w(A);m.find("a").attr("tabindex",0);m.slideDown("fast",function(){t(b(this))});m.attr("aria-hidden","false");z.children("a").children("span").text(pe.dic.get("%datepicker-hide"));if(m.find(".cal-prevmonth a").length!==0){pe.focus(m.find(".cal-prevmonth a"))}else{if(m.find(".cal-nextmonth a").length!==0){pe.focus(m.find(".cal-nextmonth a"))}else{pe.focus(m.find(".cal-goto a"))}}}else{i(b("#"+A));pe.focus(e.find("#"+A))}};w=function(z){b(".picker-field").each(function(A,B){if(b(this).attr("id")!==z){i(b(this))}})};i=function(E){var A,D,B,z,C;A=E.attr("id");D=A+"-picker";B=b("#"+D);z=b("#"+D+"-toggle");C=b("label[for='"+A+"']").text();B.find("a").attr("tabindex","-1");B.slideUp("fast",function(){t(b(this))});B.attr("aria-hidden","true");o.hideGoToForm(D);z.children("a").children("span").text(pe.dic.get("%datepicker-show")+C);z.removeClass("picker-toggle-visible");z.addClass("picker-toggle-hidden")};t=function(z){var A=b("#wb-main-in"),B;if(pe.ie===7){B=z.height()+z.offset().top-A.offset().top+50;if(A.height()>=B){A.css("min-height","")}else{if(A.height()<B){A.css("min-height",B)}}}else{if(pe.ie>0&&pe.ie<7){B=z.height()+z.offset().top-A.offset().top+50;if(A.height()>=B){A.css("height","")}else{if(A.height()<B){A.css("height",B)}}}}};n=function(B,D,A,C){var z=C;z=z.replace("DD",o.strPad(A,2,"0"));z=z.replace("D",A);z=z.replace("MM",o.strPad(D,2,"0"));z=z.replace("M",D);z=z.replace("YYYY",B);z=z.replace("YY",B.toString().substr(2,2));return z};if(g.attr("id")!==undefined){q=g.attr("id");if(g.attr("data-min-date")!==undefined){h=g.attr("data-min-date")}else{h="1800-01-01"}if(g.attr("data-max-date")!==undefined){j=g.attr("data-max-date")}else{j="2100-01-01"}q=g.attr("id");d=g;e=g.parent();l=q+"-picker";m=b('<div id="'+l+'" class="picker-overlay" role="dialog" aria-controls="'+q+'" aria-labelledby="'+l+'-toggle"></div>');m.on("keyup",function(z){if(z.keyCode===27){w();pe.focus(g.parent().find("#"+q+"-picker-toggle"))}});d.parent().after(m);m.on("calendarDisplayed",function(B,z,A,C){p(q,z,A,C,h,j,v);s(q,z,A,C,v);b(this).find("a, select").on("blur",function(){window.setTimeout(function(){if(m.find(":focus").length===0){i(b("#"+m.attr("id").slice(0,-7)))}},1000)})});o.create(l,k,y,true,h,j);f(q,l);m.find("a").attr("tabindex","-1")}}};b('[type="date"]').each(function(){pe._execute(datepicker,b(this))});window.pe=a;return a}(jQuery));