(function(e,t){var n=function(e){e=e.replace(/(\[|\])/g,"\\$1");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(window.location.href);return n===null?"":n[1]},r={},i=window.location.hash.replace("#",""),s=window.location.protocol.indexOf("s")===-1,o=n("nomin")==="1";window._gaq=window._gaq||[];window.optimizely=window.optimizely||[];if(s){console.log("WARNING: This form is on a nonsecure domain and can only work in test mode.");e("body").prepend('<div class="insecure-warning">This site is not running on a secure domain and is in test mode.</div>')}e.wait=function(t){return e.Deferred(function(e){setTimeout(e.resolve,t)})};e.Topic=function(t){var n,i=t&&r[t];if(!i){n=e.Callbacks();i={publish:n.fire,subscribe:n.add,unsubscribe:n.remove};t&&(r[t]=i)}return i};var u=u||{};(function(e){"use strict";e.fn.extend({quickDonate:function(t){function E(){s.addClass("qd_loading");var t=e.ajax({url:i.indexOf("noquickd")>-1&&a?"/":u.settings.tokenRequestPath,converters:{"text json":jQuery.parseJSON},type:"GET",dataType:"json"});return t}function S(){var e=E();console.log(e);e.always(function(t){u.tokenRequest=t;u.settings.responseHandler(e,t)})}function x(t){return t.pipe(function(t){return t.error?e.Deferred().reject(t):t},function(t){return e.Deferred().reject(t)})}function T(){return x(e.ajax({url:"/page/spud?type=getm&field=email,firstname,lastname,addr1,city,state_cd,zip,phone&jsonp=?",dataType:"jsonp"}))}function N(){return x(e.ajax({url:"https://my.democrats.org/page/graph/me?callback=?&jsoncallback=?",dataType:"jsonp"}))}var r=e(this),s=r.add(e("body")),o=r.find(".bsdcd-form ").eq(0),a=!0,f=!1,l=["firstname","lastname","email","zip","phone","addr1","addr2","city","state_cd","occupation","employer"],c,h,p,d,v,m,g,y,b,w;u.settings=u.settings||{};m=["[name='bsd_form_quick_donate_populated']","[name='cc_number']","[name='cc_type_cd']","[name='cc_type_cd']","[name='cc_expir_month']","[name='cc_expir_year']","[name='firstname']","[name='lastname']","[name='addr1']","[name='addr2']","[name='country']","[name='city']","[name='state_cd']","[name='zip']","[name='email']","[name='phone']","[name='employer']","[name='occupation']","[name='quick_donate_populated']"];b=function(t){t=typeof t=="object"?t:{};e.each(l,function(e,r){var i=o.find('[name="'+r+'"]'),s=i.attr("name"),u=decodeURIComponent(n(r)).replace(/\+/g," ")||t[r]||null;u&&i.val(u).removeClass("placeholder").addClass("prefilled")})};w=function(){s.removeClass("qd_loading").addClass(f?" qd_not_enabled":" qd_load_failed");e.Topic("qd-status").publish(!1);a&&T().always(function(e){b(e)})};g=function(t,n){if(t.status===200&&n)if(typeof n.enabled=="boolean"&&typeof n.token=="string"&&typeof n.token_info=="object"&&typeof n.token_info.account_last_four=="string"&&typeof n.token_info.cc_type_cd=="string"&&typeof n.token_info.cc_expir_month=="string"&&typeof n.token_info.cc_expir_year=="string"&&typeof n.token_info.firstname=="string"&&typeof n.token_info.lastname=="string"&&typeof n.token_info.addr1=="string"&&typeof n.token_info.addr2=="string"&&typeof n.token_info.city=="string"&&typeof n.token_info.state_cd=="string"&&typeof n.token_info.zip=="string"&&typeof n.token_info.country=="string"&&typeof n.token_info.email=="string"&&typeof n.token_info.phone=="string"&&typeof n.token_info.employer=="string"&&typeof n.token_info.occupation=="string"){u.settings.debug===!0&&console.log("properties in response object are all the correct type");if(n.enabled){o.find("[name='quick_donate_populated']").val(n.token);n.token_info.cc_type_cd==="ax"?e("[name='cc_number']").val("XXXXXXXXXXX"+n.token_info.account_last_four):e("[name='cc_number']").val("XXXXXXXXXXXX"+n.token_info.account_last_four);o.find("[value='"+n.token_info.cc_type_cd+"']").prop("checked",!0);n.token_info.cc_expir_month.length===1?o.find("[name='cc_expir_month']").val("0"+n.token_info.cc_expir_month):o.find("[name='cc_expir_month']").val(n.token_info.cc_expir_month);n.token_info.cc_start_month&&n.token_info.cc_start_month.length===1?o.find("[name='cc_start_month']").val("0"+n.token_info.cc_start_month):o.find("[name='cc_start_month']").val(n.token_info.cc_start_month);n.token_info.cc_start_month&&o.find("[name='cc_start_year']").val(n.token_info.cc_start_year);o.find("[name='cc_expir_year']").val(n.token_info.cc_expir_year);o.find("[name='firstname']").val(n.token_info.firstname);o.find("[name='lastname']").val(n.token_info.lastname);o.find("[name='addr1']").val(n.token_info.addr1);o.find("[name='addr2']").val(n.token_info.addr2);o.find("[name='city']").val(n.token_info.city);o.find("[name='zip']").val(n.token_info.zip);o.find("[name='country']").val(n.token_info.country).change();o.find("[name='email']").val(n.token_info.email);o.find("[name='phone']").val(n.token_info.phone);o.find("[name='employer']").val(n.token_info.employer);o.find("[name=occupation]").val(n.token_info.occupation);o.find("[name='state_cd']").val(n.token_info.state_cd);o.find("[name='quick_donate_populated']").val(n.token);e(u.settings.nameElement).text(n.token_info.firstname+" "+n.token_info.lastname);e(u.settings.addrElement).text(n.token_info.addr1+" "+n.token_info.addr2);e(u.settings.locElement).text(n.token_info.city+" "+n.token_info.state_cd+" "+n.token_info.zip+" "+n.token_info.country);u.cvvHolder=o.removeClass("cvv-input").find("#cc_cvv_cont").detach();n.token_info.cc_type_cd==="vs"?d="Visa":n.token_info.cc_type_cd==="mc"?d="MasterCard":n.token_info.cc_type_cd==="ax"?d="American Express":n.token_info.cc_type_cd==="dc"&&(d="DiscoverCard");e(u.settings.ccTypeElement).text(d);n.token_info.cc_type_cd==="ax"?v="**** ****** *"+n.token_info.account_last_four:v="**** **** **** "+n.token_info.account_last_four;e(u.settings.ccNumberElement).text(v);s.addClass("qd_populated").removeClass("qd_loading qd_load_failed");window.location.hash.indexOf("noquickd")>-1&&(window.location.hash="");e.Topic("data-update").publish("qd_populated");e.Topic("qd-status").publish(!0)}else w()}else{u.settings.debug===!0&&console.log("properties in response object are not the correct type");w()}else{u.settings.debug===!0&&console.log("something was wrong with the response object",t,u.tokenRequest);w()}typeof u.settings.callback=="function"&&u.settings.callback();a=!1};y=function(t,n){typeof t=="object"&&t.preventDefault();s.removeClass("qd_populated");o.find("[name='quick_donate_populated']").val("");e.Topic&&e.Topic("qd-status").publish(!1);if(n==="nuclear"){e("#sequential_next_cont").hide();var r=e.ajax({dataType:"json",url:"/page/user/logout?jsonp=callback=?",timeout:8e3});r.done(function(e){window.location.reload()}).fail(function(){window.location.hash="noquickd";window.location.reload()})}else{s.removeClass("qd_populated").addClass("qd_cleared");u.cvvHolder&&u.cvvHolder.length&&o.addClass("cvv-input").find("#cc_expiration_cont").after(u.cvvHolder);e.Topic("change-step").publish(1);e.Topic("data-update").publish("qd_cleared");e(".sequential_breadcrumb_2").removeClass("completed")}};c={tokenRequestPath:"/ctl/Contribution/Quick/GetToken",nuclearElement:"#qd_nuclear",differentInfoElement:"#qd_clear_info",nameElement:"#qd_name",addrElement:"#qd_address",locElement:"#qd_location",ccTypeElement:"#qd_cc_type",ccNumberElement:"#qd_cc_number",clearInfo:y,responseHandler:g};u.settings=e.extend(!0,c,t);S();u.tryToken=S;e(u.settings.nuclearElement).click(function(e){u.settings.clearInfo(e,"nuclear")});e(u.settings.differentInfoElement).click(function(e){u.settings.clearInfo(e,"reveal")});e(".qd-log-in-link").click(function(e){e.preventDefault();window.open("/ctl/Contribution/Quick/Login","quickDonateLogin","status=0,toolbar=0,location=0,menubar=0,resizable=0,scrollbars=0,width=550,height=350")});e(".qd-log-out-link").click(function(t){t.preventDefault();e.ajax({url:"/ctl/Spud/Remove"});e.ajax({url:"/page/user/logout",dataType:"jsonp",jsonp:"jsonp",success:function(e,n,r){u.settings.clearInfo(t,"reveal");sequential.utilityFunctions.goToStep(1)}});e(".sequential_qd_info").hide()});e.Topic("bsd-validation-update").subscribe(function(e,t){!e&&!t&&u.settings.clearInfo(0,"reveal")});window.bQuery=window.bQuery||jQuery;bQuery.bsd=bQuery.bsd||{};bQuery.bsd.quickDonate=function(){console.log("login");f=!0;window.sequential&&sequential.utilityFunctions.goToStep(0);u.tryToken()}}})})(jQuery);(function(e){e.fn.extend({detectCCType:function(t){function g(){var e=l.val(),t=[];n.removeClass("cc-is-vs cc-is-ax cc-is-ds cc-is-mc cc-is-ma cc-is-qd cc-cover");if(!m.test(e)){i.prop("checked",!1);c.test(e)?t=s:h.test(e)?t=o:p.test(e)?t=u:d.test(e)?t=a:v.test(e)&&(t=f);if(t.length){t.prop("checked",!0);n.addClass("cc-cover cc-is-"+t.val())}}else n.addClass("cc-is-qd")}var n=e(this).find("form"),r=n.find(".cc_type_cont"),i=n.find("[name='cc_type_cd']"),s=i.filter("[value='vs']"),o=i.filter("[value='ax']"),u=i.filter("[value='ds']"),a=i.filter("[value='mc']"),f=i.filter("[value='ma']"),l=n.find('[name="cc_number"]'),c=/^4/,h=/^3[47]/,p=/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,d=/^5[1-5]/,v=/^(5018|5020|5038|6304|6759|676[1-3])/,m=/^x/i;e.Topic&&e.Topic("data-update").subscribe(g);l.on("keyup change",function(){setTimeout(g,0)});l.on("paste",function(){setTimeout(g,0)});n.addClass("cc-type-detection-active")}})})(jQuery);var a={};(function(e){"use strict";e.fn.serializeObject=function(){var t={},n=this.serializeArray();e.each(n,function(){if(t[this.name]!==undefined){t[this.name].push||(t[this.name]=[t[this.name]]);t[this.name].push(this.value||"")}else t[this.name]=this.value||""});return t};e.fn.extend({blueContribute:function(t){var r=e(this),i=e("body"),o=!1,u=r.find('[name="source_codes"]'),f=u.val(),l=r.find(".bsdcd-general_error"),c=n("source")||n("fb_ref")||"";u.val(f?f+","+c:c);var h,p,d,v,m;h=function(e){a.settings.debug&&(typeof console=="object"?window.console.log(e):window.alert(e))};v=function(){return!0};m=function(){r.on("click","[name='recurring_acknowledge']",function(t){var n,r,i,s;n=e(this);s=e("[name='slug']");s.val()===a.settings.slug?s.val(a.settings.recurSlug):s.val(a.settings.slug)})};p=function(t){var r=!1,u;if(a.latestResponseObject){h("removing previous errors");h(a.latestResponseObject.field_errors);if(e.isArray(a.latestResponseObject.field_errors)){if(a.latestResponseObject.field_errors.length>0)for(u=0;u<=a.latestResponseObject.field_errors.length-1;u++){h("reseting "+a.latestResponseObject.field_errors[u].field);e("."+a.latestResponseObject.field_errors[u].field+"_error").text("").removeClass("hidden");e("."+a.latestResponseObject.field_errors[u].field+"_related").removeClass("bsdcd-error");l.text("").removeClass("hidden");i.toggleClass("blue_contribute_error")}}else h("there were no field errors on the latest repsonse object")}else h("the previous response object does not exist. this is the first submission");var f=!1;console.log("req",t);if(t&&!t.api_version)try{a.latestResponseObject=jQuery.parseJSON(t.responseText)||t;f=!0}catch(c){f=!1;h("the response body from the api could not be parsed as json by jquery")}else{a.latestResponseObject=t;f=!0}if(f===!0)if(a.latestResponseObject.status==="success"){if(!n("debug")||!s)window.location=a.latestResponseObject.redirect_url}else{h("response was not a success status code");o=!1;if(a.latestResponseObject.code==="noslug"||a.latestResponseObject.code==="invalidslug")window.alert("A BSD slug must be provided as a value in a hidden field named 'slug' on this form.");else if(a.latestResponseObject.code==="validation"){h("validation error");if(e.isArray(a.latestResponseObject.field_errors))if(a.latestResponseObject.field_errors.length>0){h(a.latestResponseObject.field_errors);a.latestResponseObject.field_errors.length===1&&a.latestResponseObject.field_errors[0].field==="amount_group"&&(r=!0);for(u=0;u<=a.latestResponseObject.field_errors.length-1;u++){e("."+a.latestResponseObject.field_errors[u].field+"_error").text(a.latestResponseObject.field_errors[u].message).removeClass("hidden");e("."+a.latestResponseObject.field_errors[u].field+"_related").addClass("bsdcd-error").removeClass("hidden");l.text("Your donation was not successful. Please correct the problems marked below.").removeClass("hidden")}}else h("the field_errors property in the donate api response is an array, but has no items");else h("the field_errors property in the donate api response is not an array")}else if(a.latestResponseObject.code==="gateway"){h("donate api response indicates that the gateway rejected the transaction");if(a.latestResponseObject.gateway_response.status==="decline"){l.text("The transaction was declined. Please check that the address information is correct or else use a different card.").removeClass("hidden");h("donate api response indicates that the gateway rejected the transaction because the bank declined the transaction")}else if(a.latestResponseObject.gateway_response.status==="unkown"||a.latestResponseObject.gateway_response.status==="error"){l.text("There was a problem with your submission. Please try again.").removeClass("hidden");h("unknown error received from the donate api")}else{l.text("There was a problem with your submission. Please try again.").removeClass("hidden");h("unknown error received from the donate api")}}i.addClass("blue_contribute_error").removeClass("blue_contribute_processing");e.Topic&&e.Topic("bsd-validation-update").publish(!1,r);window.scrollTo(0,0)}else{o=!1;i.addClass("blue_contribute_error").removeClass("blue_contribute_processing");e.Topic&&e.Topic("bsd-validation-update").publish(!1,r);h("donate api response was not parsable by jquery/is not valid json--it is probably html");l.text("We are unable to process your transaction at this time.").removeClass("hidden")}typeof a.settings.afterPost=="function"&&a.settings.afterPost()};d={debug:!1,postTo:"/page/cde/Api/Charge/v1",beforePost:v,responseHandler:p,slug:r.data("slug")||"default"};a.settings=e.extend(!0,d,t);m();a.submitForm=function(){h("form submit attempt");var t=!0,n;typeof a.settings.beforePost=="function"&&(t=a.settings.beforePost());i.addClass("blue_contribute_processing");if(t&&!o){o=!0;e.wait(a.settings).then(function(){n=e.ajax({url:a.settings.postTo,type:s?"GET":"POST",dataType:"json",converters:{"text json":jQuery.parseJSON},timeout:3e4,postdelay:0,data:r.serializeObject()}).always(p);s&&console.log("form is on a non-secure domain, transaction results simulated")})}else h("double submission detected")};r.submit(function(e){a.submitForm(s);e.preventDefault()});typeof a.settings.afterInit=="function"&&a.settings.afterInit()}})})(jQuery);(function(e){function y(e){var t=a.val(),r=f.hide().find(".state_cd");if(t==="US"){if(!r.is("select")){r.remove();f.append(v.val(""))}n.removeClass("state-text-input");l.html("State<span>*</span>");d.html("ZIP<span>*</span>");g="US"}else{if(r.is("select")){r.remove();f.append(m.val(""))}n.addClass("state-text-input");l.html(t==="GB"?"County<span>*</span>":"State/Region/Province<span>*</span>");d.html("Postal Code<span>*</span>");g=t==="GB"?"GB":"INT"}f.show()}var t=e("#bsd_contribute_cont")||e("body"),n=t.find("form"),r=n.find(".preset_amount_label"),i=n.find(".preset_amount_input"),s=n.find(".amount_other"),u=n.find(".other_amount_radio"),a=n.find(".country"),f=n.find(".state_cd_cont").eq(0),l=f.find("label"),c=f.find("input,select").eq(0),h=c.attr("id"),p=c.attr("tabindex"),d=n.find("label.zip_related"),v=t.find(".us-state-dropdown").eq(0).clone().val("").addClass("state_cd").removeClass("hidden").attr("name","state_cd").attr("id",h).attr("tabindex",p),m=e("<input/>",{type:"text",name:"state_cd",id:h,"class":"text state_cd",tabindex:p}),g=n.data("default-country");e(".other_amount_label").hide();n.find('[name="http_referrer"]').val(document.referrer);o&&e("<input/>",{type:"hidden",name:"nomin",value:"1"}).appendTo(n);n.find(".honoree-select").on("change",function(){var t=e(this),r=t.val();n.removeClass("honor-section memorial-section");r==="1"?n.addClass("honor-section memorial-section"):r==="0"&&n.addClass("honor-section")});n.on("click",".preset_amount_label",function(t){var n=e(this);r.removeClass("active");n.addClass("active");s.val("");n.prev().prop("checked",!0)}).on("keydown",".amount_other",function(){r.removeClass("active");i.each(function(){e(this).prop("checked",!1)});u.prop("checked",!0)}).one("keydown",".amount_other",function(){t.removeClass("pre-first-click")}).one("click",".preset_amount_label",function(){t.removeClass("pre-first-click");e.Topic("change-step").publish(1)});a.on("change",function(){y()})})(jQuery)})(jQuery,window);