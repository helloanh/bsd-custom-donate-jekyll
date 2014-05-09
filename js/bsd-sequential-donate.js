/*! 2014-05-09 */!function(a){window._gaq=window._gaq||[],window.optimizely=window.optimizely||[];var b=function(a){a=a.replace(/(\[|\])/g,"\\$1");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(window.location.href);return null===c?"":c[1]},c=function(a,b){window._gaq.push(["_trackEvent"].concat(a)),window.optimizely.push(["trackEvent"].concat(b))},d={},e=window.location.hash.replace("#",""),f=-1===window.location.protocol.indexOf("s"),g="1"===b("nomin"),h=!!("ontouchstart"in window)||!!("msmaxtouchpoints"in window.navigator);String.prototype.commafy=function(){return this.replace(/(^|[^\w.])(\d{4,})/g,function(a,b,c){return b+c.replace(/\d(?=(?:\d\d\d)+(?!\d))/g,"$&,")})},Number.prototype.commafy=function(){return String(this).commafy()},f&&(console.log("WARNING: nonsecure domain = test mode."),a("body").prepend('<div class="insecure-warning">non-secure domain, using test mode.</div>')),a.wait=function(b){return a.Deferred(function(a){setTimeout(a.resolve,b)})},a.Topic=function(b){var c,e=b&&d[b];return e||(c=a.Callbacks(),e={publish:c.fire,subscribe:c.add,unsubscribe:c.remove},b&&(d[b]=e)),e};var i=i||{};!function(a){"use strict";a.fn.extend({quickDonate:function(b){function d(){s.addClass("qd_loading");var b=a.ajax({url:e.indexOf("noquickd")>-1&&u?"/":i.s.tokenRequestPath,converters:{"text json":jQuery.parseJSON},type:"GET",dataType:"json"});return b}function g(){var a=d();a.always(function(b){i.tokenRequest=b,i.s.responseHandler(a,b)})}function h(b){return b.pipe(function(b){return b.error?a.Deferred().reject(b):b},function(b){return a.Deferred().reject(b)})}function j(){return h(a.ajax({url:"/page/spud?type=getm&field=email,firstname,lastname,addr1,city,state_cd,zip,phone&jsonp=?",dataType:"jsonp"}))}var k,l,m,n,o,p,q,r=a(this),s=r.add(a("body")),t=r.find(".bsdcd-form ").eq(0),u=!0,v=!1,w=["firstname","lastname","email","zip","phone","country","addr1","addr2","city","state_cd","occupation","employer"],x=["cc_number","cc_expir_month","cc_expir_year"];return i.s=i.s||{},p=function(b){b="object"==typeof b?b:{},a.each(w,function(a,c){var d=t.find('[name="'+c+'"]'),e=b[c]||null;e&&d.val(e).removeClass("placeholder").addClass("prefilled")})},q=function(){s.removeClass("qd_loading").addClass(v?" qd_not_enabled":" qd_load_failed"),a.Topic("qd-status").publish(!1),u&&j().always(function(a){p(a)})},n=function(b,d){200===b.status&&d?"boolean"==typeof d.enabled&&"string"==typeof d.token&&"object"==typeof d.token_info&&"string"==typeof d.token_info.account_last_four&&"string"==typeof d.token_info.cc_type_cd&&"string"==typeof d.token_info.cc_expir_month&&"string"==typeof d.token_info.cc_expir_year&&"string"==typeof d.token_info.firstname&&"string"==typeof d.token_info.lastname&&"string"==typeof d.token_info.addr1&&"string"==typeof d.token_info.addr2&&"string"==typeof d.token_info.city&&"string"==typeof d.token_info.state_cd&&"string"==typeof d.token_info.zip&&"string"==typeof d.token_info.country&&"string"==typeof d.token_info.email&&"string"==typeof d.token_info.phone&&"string"==typeof d.token_info.employer&&"string"==typeof d.token_info.occupation?(i.s.debug===!0&&console.log("properties in response object are all the correct type"),d.enabled?(t.find("[name='quick_donate_populated']").val(d.token),a("[name='cc_number']").val("ax"===d.token_info.cc_type_cd?"XXXXXXXXXXX"+d.token_info.account_last_four:"XXXXXXXXXXXX"+d.token_info.account_last_four),t.find("[value='"+d.token_info.cc_type_cd+"']").prop("checked",!0),t.find("[name='cc_expir_month']").val(1===d.token_info.cc_expir_month.length?"0"+d.token_info.cc_expir_month:d.token_info.cc_expir_month),t.find("[name='cc_start_month']").val(d.token_info.cc_start_month&&1===d.token_info.cc_start_month.length?"0"+d.token_info.cc_start_month:d.token_info.cc_start_month),d.token_info.cc_start_month&&t.find("[name='cc_start_year']").val(d.token_info.cc_start_year),t.find("[name='cc_expir_year']").val(d.token_info.cc_expir_year),t.find("[name='firstname']").val(d.token_info.firstname),t.find("[name='lastname']").val(d.token_info.lastname),t.find("[name='addr1']").val(d.token_info.addr1),t.find("[name='addr2']").val(d.token_info.addr2),t.find("[name='city']").val(d.token_info.city),t.find("[name='zip']").val(d.token_info.zip),t.find("[name='country']").val(d.token_info.country).change(),t.find("[name='email']").val(d.token_info.email),t.find("[name='phone']").val(d.token_info.phone),t.find("[name='employer']").val(d.token_info.employer),t.find("[name=occupation]").val(d.token_info.occupation),t.find("[name='state_cd']").val(d.token_info.state_cd),t.find("[name='quick_donate_populated']").val(d.token),a(i.s.nameElement).text(d.token_info.firstname+" "+d.token_info.lastname),a(i.s.addrElement).text(d.token_info.addr1+" "+d.token_info.addr2),a(i.s.locElement).text(d.token_info.city+" "+d.token_info.state_cd+" "+d.token_info.zip+" "+d.token_info.country),i.cvvHolder=t.removeClass("cvv-input").find(".cc_cvv_cont").detach(),"vs"===d.token_info.cc_type_cd?l="Visa":"mc"===d.token_info.cc_type_cd?l="MasterCard":"ax"===d.token_info.cc_type_cd?l="American Express":"dc"===d.token_info.cc_type_cd&&(l="DiscoverCard"),a(i.s.ccTypeElement).text(l),m="ax"===d.token_info.cc_type_cd?"**** ****** *"+d.token_info.account_last_four:"**** **** **** "+d.token_info.account_last_four,a(i.s.ccNumberElement).text(m),s.addClass("qd_populated").removeClass("qd_loading qd_load_failed"),window.location.hash.indexOf("noquickd")>-1&&(window.location.hash=""),c(["Quick Donate","populated",!0],"quick_donate_populated"),a.Topic("data-update").publish("qd_populated"),a.Topic("qd-status").publish(!0),i.s.skiptoStep&&a.Topic("change-step").publish(a(".sequential_breadcrumb_amount").hasClass("completed")?i.s.skiptoStep:0)):q()):(i.s.debug===!0&&console.log("properties in response object are not the correct type"),q()):(i.s.debug===!0&&console.log("something was wrong with the response object",b,i.tokenRequest),q()),"function"==typeof i.s.callback&&i.s.callback(),u=!1},o=function(b,d,e){"object"==typeof b&&b.preventDefault(),e||c(["Quick Donate","cleared",d],"quick_donate_cleared_"+d),"nuclear"===d?(a.each(w.concat(x),function(a,b){t.find('[name="'+b+'"]').val("")}),a(".sequential_breadcrumb_name, .sequential_breadcrumb_payment").removeClass("completed"),a.ajax({dataType:"jsonp",jsonp:"jsonp",url:"/page/user/logout",timeout:8e3}).done(function(){s.addClass("qd_load_failed")}).fail(function(){f&&(window.location.hash="noquickd",window.location.reload())})):(s.addClass("qd_cleared"),a.each(x,function(a,b){t.find('[name="'+b+'"]').val("")}),a(".sequential_breadcrumb_payment").removeClass("completed")),a.Topic("qd-status").publish(!1),s.removeClass("qd_populated"),t.find("[name='quick_donate_populated']").val(""),t.find("[name='cc_type_cd']").filter(":checked").prop("checked",!1),i.cvvHolder&&i.cvvHolder.length&&t.addClass("cvv-input").find(".cc_expiration_cont").after(i.cvvHolder),a.Topic("change-step").publish(1,!0),a.Topic("data-update").publish("qd_cleared")},k={tokenRequestPath:"/ctl/Contribution/Quick/GetToken",nuclearElement:".qd_nuclear",differentInfoElement:".qd_clear_info",nameElement:".qd_name",addrElement:".qd_address",locElement:".qd_location",ccTypeElement:".qd_cc_type",ccNumberElement:".qd_cc_number",clearInfo:o,skiptoStep:2,responseHandler:n},i.s=a.extend(!0,k,b),g(),i.tryToken=g,a(i.s.nuclearElement).click(function(a){i.s.clearInfo(a,"nuclear")}),a(i.s.differentInfoElement).click(function(a){i.s.clearInfo(a,"reveal")}),a(".qd-log-in-link").click(function(a){a.preventDefault(),window.open("/ctl/Contribution/Quick/Login","quickDonateLogin","status=0,toolbar=0,location=0,menubar=0,resizable=0,scrollbars=0,width=550,height=350")}),a(".qd-log-out-link").click(function(a){a.preventDefault(),i.s.clearInfo(a,"nuclear")}),a.Topic("bsd-validation-update").subscribe(function(a,b){a||b||i.s.clearInfo(0,"reveal",!0)}),window.bQuery=window.bQuery||jQuery,window.bQuery.bsd=window.bQuery.bsd||{},window.bQuery.bsd.quickDonate=function(){v=!0,i.tryToken()},this}})}(jQuery),function(a){a.fn.extend({detectCCType:function(){function b(){var a=j.val(),b=[];c.removeClass("cc-is-vs cc-is-ax cc-is-ds cc-is-mc cc-is-ma cc-is-qd cc-cover"),p.test(a)?c.addClass("cc-is-qd"):(d.prop("checked",!1),k.test(a)?b=e:l.test(a)?b=f:m.test(a)?b=g:n.test(a)?b=h:o.test(a)&&(b=i),b.length&&(b.prop("checked",!0),c.addClass("cc-cover cc-is-"+b.val())))}var c=a(this).find("form"),d=(c.find(".cc_type_cont"),c.find("[name='cc_type_cd']")),e=d.filter("[value='vs']"),f=d.filter("[value='ax']"),g=d.filter("[value='ds']"),h=d.filter("[value='mc']"),i=d.filter("[value='ma']"),j=c.find('[name="cc_number"]'),k=/^4/,l=/^3[47]/,m=/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,n=/^5[1-5]/,o=/^(5018|5020|5038|6304|6759|676[1-3])/,p=/^x/i;return a.Topic&&a.Topic("data-update").subscribe(b),j.on("keyup change",function(){setTimeout(b,0)}),j.on("paste",function(){setTimeout(b,0)}),c.addClass("cc-type-detection-active"),this}})}(jQuery);var j={};!function(a){"use strict";a.fn.serializeObject=function(){var b={},c=this.serializeArray();return a.each(c,function(){void 0!==b[this.name]?(b[this.name].push||(b[this.name]=[b[this.name]]),b[this.name].push(this.value||"")):b[this.name]=this.value||""}),b},a.fn.extend({blueContribute:function(d){var e,g,h,i,k,l,m=a(this),n=a("body"),o=!1,p=m.find('[name="source_codes"]'),q=p.val(),r=m.find(".bsdcd-general_error"),s=b("source")||b("fb_ref"),t=b("subsource"),u=m.find("[name='slug']"),v=document.title,w=!1,x={unknown:"We were unable to process your transaction at this time.",invalid:"Your donation was not successful. Please correct the problems marked below.",declined:"The transaction was declined. Please check that the address information is correct or else use a different card.",review:"Your transaction is under review, there is no need to resubmit at this time."};return(s||t)&&(t&&(s=s?s+","+t:t),p.val(q?q+","+s:s)),e=function(a){j.settings.debug&&"object"==typeof console&&window.console.log(a)},i=function(){return!0},k=function(b){var c=1,d=["Processing",".Processing.","..Processing..","...Processing..."],e=d.length;w=b,b?(n.addClass("blue_contribute_processing"),function f(){a.wait(400).then(function(){document.title=d[c%e]+" | "+v,w?(c++,f()):document.title=v})}()):n.removeClass("blue_contribute_processing")},l=function(a){r.text(a).removeClass("hidden")},g=function(d){var g,h,i=!1;if(j.latestResponseObject)if(e("removing previous errors"),e(j.latestResponseObject.field_errors),a.isArray(j.latestResponseObject.field_errors)){if(j.latestResponseObject.field_errors.length>0)for(g=0;g<=j.latestResponseObject.field_errors.length-1;g++)e("reseting "+j.latestResponseObject.field_errors[g].field),m.find("."+j.latestResponseObject.field_errors[g].field+"_error").text("").addClass("hidden"),m.find("."+j.latestResponseObject.field_errors[g].field+"_related").removeClass("bsdcd-error"),r.text("").addClass("hidden"),n.removeClass("blue_contribute_error")}else e("no field errors on the latest repsonse object");else e("this is the first submission");var p=!1;if(d&&!d.api_version)try{j.latestResponseObject=jQuery.parseJSON(d.responseText)||d,p=!0}catch(q){p=!1,e("api response body invalid")}else j.latestResponseObject=d,p=!0;if(h=j.latestResponseObject,p===!0&&h)if(!h.status||"success"!==h.status&&"paypal"!==h.status){if(e("response was not a success status code"),"noslug"===h.code||"invalidslug"===h.code)l(x.unknown+" [No slug]");else if("validation"===h.code)if(e("validation error"),c(["Donate API","Validation Errors",j.latestResponseObject.field_errors.length],"donate_api_valiation_error"),h.field_errors&&a.isArray(h.field_errors)&&h.field_errors.length>0){for(e(h.field_errors),1===h.field_errors.length&&"amount_group"===h.field_errors[0].field&&(i=!0),g=0;g<=h.field_errors.length-1;g++)m.find("."+h.field_errors[g].field+"_error").text(h.field_errors[g].message).removeClass("hidden"),m.find("."+h.field_errors[g].field+"_related").addClass("bsdcd-error").removeClass("hidden");l(x.invalid)}else e("invalid field_errors property in the donate api"),l(x.unknown+" [Invalid Validaiton Repsonse]");else"gateway"===h.code?(e("gateway rejected the transaction"),h.gateway_response&&"decline"===h.gateway_response.status?(l(x.declined),e("bank declined"),c(["Donate API","Gateway Error",h.gateway_response.status],"donate_api_gateway_error")):h.gateway_response&&"review"===h.gateway_response.status?(l(x.review+" [Gateway]"),e("transaction under review"),c(["Donate API","Gateway Error","review"],"donate_api_gateway_error")):(l(x.unknown+" [Gateway]"),e("unknown error gateway error"),c(["Donate API","Unknown Gateway Error","unknown or malformed"],"donate_api_gateway_error"))):(l(x.unknown+" [Code: "+(h.code?h.code:"unknown")+"]"),e("truly unknown error from donate api"),c(["Donate API","Unknown Error",h.code?h.code:"unknown"],"donate_api_gateway_error"));n.addClass("blue_contribute_error"),k(!1),o=!1,a.Topic&&a.Topic("bsd-validation-update").publish(!1,i),window.scrollTo(0,0)}else"function"==typeof j.settings.customSuccess?(k(!1),j.settings.customSuccess(h)):b("debug")&&f||(window.location=h.redirect_url);else o=!1,n.addClass("blue_contribute_error"),k(!1),a.Topic&&a.Topic("bsd-validation-update").publish(!1,i),e("donate api response not parsable"),l(x.unknown+" [API DOWN]");"function"==typeof j.settings.afterPost&&j.settings.afterPost()},h={debug:!1,postTo:"/page/cde/Api/Charge/v1",beforePost:i,responseHandler:g,customSuccess:null,postdelay:0,slug:m.data("slug")||"default",recurSlug:m.data("recur-slug")||!1},j.settings=a.extend(!0,h,d),j.settings.recurSlug?m.on("click","[name='recurring_acknowledge']",function(){u.val(u.val()===j.settings.slug?j.settings.recurSlug:j.settings.slug)}):m.find("[name='recurring_acknowledge']").closest("li").remove(),j.submitForm=function(){e("form submit attempt");var b=!0;"function"==typeof j.settings.beforePost&&(b=j.settings.beforePost()),b&&!o?(o=!0,k(!0),a.wait(j.settings.postdelay).then(function(){a.ajax({url:j.settings.postTo,type:f?"GET":"POST",dataType:"json",converters:{"text json":jQuery.parseJSON},timeout:3e4,data:m.serializeObject()}).always(g),f&&console.log("non-secure domain, transaction results simulated")})):e("double submission detected")},m.submit(function(a){j.submitForm(),a.preventDefault()}),"function"==typeof j.settings.afterInit&&j.settings.afterInit(),this}})}(jQuery);var k={};!function(a){"use strict";a.fn.extend({sequential:function(b){var d=a(this),e=d.find(".bsdcd-form"),f=e.find('[name="amount_other"]'),i=d.find(".sequential_breadcrumb");k.currentStep=0,k.currency_symbol=a("[data-currency-symbol]").data("currency-symbol")||"$";var l="US";k.qd=!1,a.Topic("qd-status").subscribe(function(a){k.qd=a}),a.Topic("bsd-validation-update").subscribe(function(a){a||d.removeClass("sequential")}),k.utilityFunctions={},k.utilityFunctions.goToStep=function(b,e){var f,g,l,m,n=k.currentStep;f=b<k.currentStep,b>0&&d.removeClass("pre-first-click"),g=function(){k.currentStep=b,d.removeClass("sequential_step_"+n).find(".sequential_error_message").text(""),k.s.stepContainers.eq(n).addClass("inactive").removeClass("active"),i.eq(n).removeClass("active"),1===b&&k.qd?k.utilityFunctions.goToStep(2):(d.addClass("sequential_step_"+b),l=i.eq(b),m=l.data("stepname"),l.addClass("active").prevAll().removeClass("step-error").addClass("completed"),k.s.stepContainers.eq(b).addClass("active").removeClass("inactive").prevAll().addClass("completed"),h||k.s.stepContainers.eq(b).find("input").find("[required]").filter(function(){return""===a(this).val()?!0:void 0}).first().focus(),e||c(["Sequential donate","Screen view",m],"sequential_screen_"+m))},"number"==typeof b&&"function"==typeof k.s.validationFunctions[k.currentStep]&&(f?g():k.currentStep!==b&&(k.s.validationFunctions[k.currentStep]()?k.currentStep===k.s.submitStep?(j.submitForm(),d.find(".sequential-donate-btn-copy").text("Processing...")):b-k.currentStep>1?(k.utilityFunctions.goToStep(k.currentStep+1),k.utilityFunctions.goToStep(b)):g():a("li.sequential_breadcrumb_"+k.currentStep).removeClass("completed").addClass("step-error")))},a.Topic("change-step").subscribe(k.utilityFunctions.goToStep),k.utilityFunctions.validateAmountsAndPersonal=function(){return k.utilityFunctions.validateAmounts()&&k.utilityFunctions.validatePersonalInfo()},k.utilityFunctions.validateAmounts=function(){var a,b,h,i,j,l,m=f.val();return d.removeClass("sequential_error").find(".sequential_error_message").text(""),a=parseFloat(e.find("input[name='amount']:checked").val()),m&&(b=parseFloat(f.val(m.replace(/[^\d\.]/g,"")).val())),h=function(){return b?(l=b,!0):a?(l=a,!0):(c(["Sequential donate","Amount error","no amount selected"],"sequential_amount_not_selected"),!1)},i=function(a){return"number"==typeof k.s.donationAmountLimit&&"number"==typeof a?a<=k.s.donationAmountLimit?!0:(c(["Sequential donate","Amount error","Above maximum"],"sequential_amount_over_maximum_error"),!1):!0},j=function(a){return"number"==typeof k.s.donationAmountMinimum&&"number"==typeof a?a>=k.s.donationAmountMinimum||g?!0:(c(["Sequential donate","Amount error","Below minimum"],"sequential_amount_under_minimum_error"),!1):!0},h()?i(l)?j(l)?(d.find(".sequential-donate-btn-copy").text("Donate "+k.currency_symbol+l.commafy()),!0):(console.log(k.currency_symbol),d.addClass("sequential_error").find(".sequential_error_message").text(k.s.customErrors.undermin?k.s.customErrors.undermin:"The minimum amount is "+k.currency_symbol+k.s.donationAmountMinimum+"."),!1):(d.addClass("sequential_error").find(".sequential_error_message").text(k.s.customErrors.overmax?k.s.customErrors.overmax:"The maximum amount is "+k.currency_symbol+k.s.donationAmountLimit.commafy()+"."),!1):(d.addClass("sequential_error").find(".sequential_error_message").text("Please select an amount."),!1)},k.utilityFunctions.validatePersonalInfo=function(){var b,f,g,h,i,j,m,n,o,p,q,r,s;return b=0,d.removeClass("sequential_error").find(".sequential_error_message").text(""),f=a("[name='firstname']"),f.val()?f.removeClass("bsdcd-error"):(b++,f.addClass("bsdcd-error")),g=a("[name='lastname']"),g.val()?g.removeClass("bsdcd-error"):(b++,g.addClass("bsdcd-error")),h=a("[name='addr1']"),h.val()?h.removeClass("bsdcd-error"):(b++,h.addClass("bsdcd-error")),i=a("[name='city']"),i.val()?i.removeClass("bsdcd-error"):(b++,i.addClass("bsdcd-error")),j=a("[name='state_cd']"),j.is("select")&&2!==j.val().length||!j.val()?(b++,j.addClass("bsdcd-error")):j.removeClass("bsdcd-error"),p=e.find('[name="country"]'),l=p.val(),k.s.requireCountry&&(p.val()?p.removeClass("bsdcd-error"):(b++,p.addClass("bsdcd-error"))),s=e.find("[name='zip']"),m=s.val(),"US"===l&&m.replace(/\D/g,""),"US"===l&&m.length>=5&&m.length<=9?s.removeClass("bsdcd-error"):"GB"===l&&m.length>=3&&m.length<=10?s.removeClass("bsdcd-error"):"US"!==l&&"GB"!==l&&m?s.removeClass("bsdcd-error"):(b++,s.addClass("bsdcd-error")),n={},n.input=e.find("[name='email']"),n.address=n.input.val(),n.isValid=function(){var a=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return a.test(n.address)?!0:!1},n.isValid()?n.input.removeClass("bsdcd-error"):(b++,n.input.addClass("bsdcd-error")),o={},o.input=e.find("[name='phone']"),o.number=o.input.val(),o.isValid=function(){var a=o.number.replace(/\D/g,"");return a.length>=10&&a.length<=11?!0:!1},k.s.optionalphone&&!o.number||o.isValid()?o.input.removeClass("bsdcd-error"):(b++,o.input.addClass("bsdcd-error")),q=e.find("[name='employer']"),q.length&&!q.val()?(b++,q.addClass("bsdcd-error")):q.removeClass("bsdcd-error"),r=e.find("[name='occupation']"),r.length&&!r.val()?(b++,r.addClass("bsdcd-error")):r.removeClass("bsdcd-error"),b>0?(d.addClass("sequential_error"),d.find(".sequential_error_message").text("Please correct the problems shown above."),c(["Sequential donate","Personal Info validation errors",b],"sequential_personal_info_errors"),!1):!0},k.utilityFunctions.validatePaymentInfo=function(){var b,f,g,h,i;return g=0,i="pp"===e.find('[name="cc_type_cd"]').filter(":checked").val(),b={},b.field=e.find("[name='cc_number']"),b.number=b.field.val(),/[0-9]{13,19}|([0-9- ]{3,8}){3,6}/.test(b.number)||k.qd&&b.number.indexOf("XXX")>-1||i?b.field.removeClass("bsdcd-error"):(g++,b.field.addClass("bsdcd-error")),f={},f.month={},f.month.field=e.find("[name='cc_expir_month']"),f.month.val=f.month.field.val(),f.month.regEx=/^(01|02|03|04|05|06|07|08|09|10|11|12)$/,f.month.isValid=function(){return f.month.regEx.test(f.month.val)||i?!0:!1},f.month.isValid()?f.month.field.removeClass("bsdcd-error"):(g++,f.month.field.addClass("bsdcd-error")),f.year={},f.year.field=e.find("[name='cc_expir_year']"),f.year.val=parseInt(f.year.field.val(),10),(isNaN(f.year.val)||f.year.val<2013)&&!i?(f.year.field.addClass("bsdcd-error"),g++):f.year.field.removeClass("bsdcd-error"),h=e.find('[name="cc_cvv"]'),k.s.requireCVV&&(i||k.qd||/^[0-9]{3,4}$/.test(h.val())?h.removeClass("bsdcd-error"):(g++,h.addClass("bsdcd-error"))),g>0?(a(".sequential_error_message").text("Please correct the problems marked above."),a("body").addClass("sequential_error"),c(["Sequential donate","Payment Info validation errors",g],"sequential_payment_info_errors"),!1):(d.removeClass("sequential_error").find(".sequential_error_message").text(""),!0)};var m={stepContainers:d.find(".sequential_step"),donationAmountLimit:e.data("max-donation")||null,donationAmountMinimum:e.data("min-donation")||null,requireCountry:e.data("require-country")||!1,optionalphone:e.data("optional-phone")||!1,requireCVV:e.data("require-cvv")||!1,submitStep:d.find(".sequential_step").length-1||2,customErrors:{},validationFunctions:[k.utilityFunctions.validateAmounts,k.utilityFunctions.validatePersonalInfo,k.utilityFunctions.validatePaymentInfo]};return k.s=a.extend(!0,m,b),d.addClass("sequential").addClass("sequential_step_"+k.currentStep),k.s.requireCountry&&d.addClass("sequential_country_field"),a(k.s.stepContainers[0]).addClass("active"),a("li.sequential_breadcrumb_0").addClass("active"),a(k.s.stepContainers).not(a(k.s.stepContainers[k.currentStep])).addClass("inactive"),d.on("click",".sequential_move_forward",function(a){a.preventDefault(),k.utilityFunctions.goToStep(k.currentStep+1)}),a(".bsdcd-seq-breadcrumbs").on("click","a",function(b){b.preventDefault();var c=a(this).closest("li").data("step");k.utilityFunctions.goToStep(c)}),this}})}(jQuery),window.sequential=k,function(a){function c(b){if(!b||"string"!=typeof b)return!1;var c=b.split("x"),d=0;c&&c.length&&a.each(c,function(a,b){var c=parseFloat(b);c&&h.eq(d).length&&c>=v&&w>=c&&(h.eq(d).html(x+c.commafy()),i.eq(d).val(c),d++)})}function d(){var a=l.val(),b=m.hide().find(".state_cd");"US"===a?(b.is("select")||(b.remove(),m.append(s.val(""))),f.removeClass("state-text-input"),n.html("State<span>*</span>"),r.html("ZIP<span>*</span>"),u="US"):(b.is("select")&&(b.remove(),m.append(t.val(""))),f.addClass("state-text-input"),n.html("GB"===a?"County<span>*</span>":"State/Region/Province<span>*</span>"),r.html("Postal Code<span>*</span>"),u="GB"===a?"GB":"INT"),m.show()}var e=a(".bsdcd-outer-container")||a("body"),f=e.find("form"),h=f.find(".preset_amount_label"),i=f.find(".preset_amount_input"),j=f.find(".amount_other"),k=f.find(".other_amount_radio"),l=f.find(".country"),m=f.find(".state_cd_cont").eq(0),n=m.find("label"),o=m.find("input,select").eq(0),p=o.attr("id"),q=o.attr("tabindex"),r=f.find("label.zip_related"),s=e.find(".us-state-dropdown").eq(0).clone().val("").addClass("state_cd").attr("name","state_cd").attr("id",p).attr("tabindex",q),t=a("<input/>",{type:"text",name:"state_cd",id:p,"class":"text state_cd",tabindex:q}),u=f.data("default-country"),v=parseFloat(f.data("min-donation"))||.01,w=parseFloat(f.data("max-donation"))||1/0,x=a("[data-currency-symbol]").data("currency-symbol")||"$",y=b("amounts"),z=b("default_amt"),A=parseFloat(b("skip"))||!1;a(".other_amount_label").hide(),f.find('[name="http_referrer"]').val(document.referrer),g&&(a("<input/>",{type:"hidden",name:"nomin",value:"1"}).appendTo(f),v=.01),window.BSDcustomAmounts=c,c(y),f.on("click",".preset_amount_label",function(){var b=a(this);h.removeClass("active"),b.addClass("active"),j.val(""),b.prev().prop("checked",!0)}).on("keydown",".amount_other",function(){h.removeClass("active"),i.each(function(){a(this).prop("checked",!1)}),k.prop("checked",!0)}),z&&parseFloat(z)&&i.filter(function(){return a(this).val()===z}).length>0&&(i.filter(function(){return a(this).val()===z}).eq(0).next("label").click(),e.removeClass("pre-first-click"),A&&1===A&&a.wait(3).done(function(){a.Topic("change-step").publish(1)})),f.one("keydown",".amount_other",function(){e.removeClass("pre-first-click")}).one("click",".preset_amount_label,.preset_amount_input",function(){a("html").find(".pre-first-click").length&&a.Topic("change-step").publish(1),e.removeClass("pre-first-click")}),f.find(".honoree-select").on("change",function(){var b=a(this),c=b.val();f.removeClass("honor-section memorial-section"),"1"===c?f.addClass("honor-section memorial-section"):"0"===c&&f.addClass("honor-section")}),l.on("change",function(){d()})}(jQuery)}(jQuery,window);