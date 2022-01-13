// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "6",

            "macros": [{
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__e"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.__CR?window.__CR.data(\"email\"):null})();"]
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payload.invitee.uri"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionValue": ["macro", 2],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "358271804",
                "vtp_conversionLabel": "9s_ACP-hmMwCELyW66oB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 3],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 8
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionValue": ["macro", 2],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "358271804",
                "vtp_conversionLabel": "CL6QCLL2rvMCELyW66oB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 3],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 26
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionValue": ["macro", 2],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "358271804",
                "vtp_conversionLabel": "TwLMCMy7rvMCELyW66oB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 3],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 28
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 29
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionValue": ["macro", 2],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "358271804",
                "vtp_conversionLabel": "s58_CP_gg_MCELyW66oB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 3],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 31
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".w-form-done",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "47410502_24",
                "tag_id": 54
            }, {
                "function": "__hl",
                "tag_id": 55
            }, {
                "function": "__hl",
                "tag_id": 56
            }, {
                "function": "__hl",
                "tag_id": 57
            }, {
                "function": "__fsl",
                "vtp_checkValidation": true,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "47410502_52",
                "tag_id": 58
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var c=\"2021-09-23 10:39\";a._crq=a._crq||[];a._crq.push(function(b){b.instrument({\"input[type\\x3demail]\":\"email\",\"input[id\\x3demail]\":\"email\",\"input[name\\x3demail]\":\"email\",\"input[autocomplete\\x3demail]\":\"email\",\":input[placeholder*\\x3dEmail]\":\"email\",\":input[placeholder*\\x3demail]\":\"email\",\":input[id*\\x3dcompany]\":\"company\",\":input[name*\\x3dcompany]\":\"company\",\":input[name*\\x3dCompany]\":\"company\",\":input[name\\x3dorganization]\":\"company\",\"#name-3\":\"company\"},-1);b.log(\"snippet version \"+\nc)})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 3
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f){var b=\"script\",c=a.document,d=c.getElementsByTagName(b)[0];b=c.createElement(b);a._crq=a._crq?a._crq:[];a._crq.push(f);b.src=\"\/\/www.conversionruler.com\/bin\/js.php?siteid\\x3d\"+e;d.parentNode.insertBefore(b,d)})(window,\"8253\",0);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 5
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,f,g,e){c[e]=c[e]||[];var h=function(){var b={ti:\"56377192\"};b.q=c[e];c[e]=new UET(b);c[e].push(\"pageLoad\")};var a=d.createElement(f);a.src=g;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(h(),a.onload=a.onreadystatechange=null)};d=d.getElementsByTagName(f)[0];d.parentNode.insertBefore(a,d)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 6
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push(\"event\",\"Button Click\",{event_category:\"Book a Demo\",event_label:\"\",event_value:", ["escape", ["macro", 2], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 12
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src=\"https:\/\/www.clarity.ms\/tag\/\"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,\"clarity\",\"script\",\"7ntcbk6757\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 15
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"3232362\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a||(window.lintrk=function(c,d){window.lintrk.q.push([c,d])},window.lintrk.q=[]);a=document.getElementsByTagName(\"script\")[0];var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";a.parentNode.insertBefore(b,a)})(window.lintrk);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 18
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lintrk(\"track\",{conversion_id:4460330});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 19
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"372136644244586\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 21
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push(\"event\",\"Button Click\",{event_category:\"Partner\",event_label:\"\",event_value:", ["escape", ["macro", 2], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 25
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lintrk(\"track\",{conversion_id:4999922});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 32
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 33
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Schedule\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 34
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){b.dataLayer=b.dataLayer||[];b.addEventListener(\"message\",function(c){var a=c;a=a.data.event\u0026\u00260===a.data.event.indexOf(\"calendly\")?a.data.event:!1;a\u0026\u0026b.dataLayer.push(c.data)})})(window);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 35
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){b.data(\"action\",\"watch-demo\")})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){b.data(\"action\",\"quote\")})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 42
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){b.data(\"action\",\"location-mgr\")})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 43
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){b.track(\"book-demo\",null,", ["escape", ["macro", 5], 8, 16], ")})})(window);\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){b._crq=b._crq||[];b._crq.push(function(a){var c=a.data(\"action\");c?a.track(c,null,a.data(\"email\"),null,a.data(\"company\")):a.log(\"No action marked - not recorded\")})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 47
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){b.track(\"partner\",null,b.data(\"email\"),null,b.data(\"company\"))})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 50
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){b.track(\"location-res\",null,b.data(\"email\"),null,b.data(\"company\"))})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 51
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._crq=a._crq||[];a._crq.push(function(b){var c=b.data(\"email\"),d=b.data(\"company\");(c||d)\u0026\u0026b.track(\"location-res2\",null,c,null,d)})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 53
            }],
            "predicates": [{
                "function": "_sw",
                "arg0": ["macro", 0],
                "arg1": "\/demo-book"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "calendly.event_scheduled"
            }, {
                "function": "_sw",
                "arg0": ["macro", 0],
                "arg1": "\/partner"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)47410502_24($|,)))"
            }, {
                "function": "_sw",
                "arg0": ["macro", 0],
                "arg1": "\/contact-manager-info"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_sw",
                "arg0": ["macro", 0],
                "arg1": "\/demo-management-portal"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "\/contact-manager-info"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "\/demo"
            }, {
                "function": "_sw",
                "arg0": ["macro", 0],
                "arg1": "\/pricing"
            }, {
                "function": "_sw",
                "arg0": ["macro", 0],
                "arg1": "\/contact-new-location"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.formSubmit"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)47410502_52($|,)))"
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 0, 13, 16, 21, 26]
                ],
                [
                    ["if", 2, 3, 4],
                    ["add", 1, 18, 19, 20, 28]
                ],
                [
                    ["if", 5, 6],
                    ["add", 2, 29]
                ],
                [
                    ["if", 5, 7],
                    ["add", 2, 29]
                ],
                [
                    ["if", 6],
                    ["add", 3, 10, 11, 12, 14, 15, 17, 22, 5, 6, 7, 8]
                ],
                [
                    ["if", 6, 8],
                    ["add", 4, 27]
                ],
                [
                    ["if", 7, 8],
                    ["add", 4, 27]
                ],
                [
                    ["if", 6, 9],
                    ["add", 9]
                ],
                [
                    ["if", 6, 10],
                    ["add", 23]
                ],
                [
                    ["if", 6, 11],
                    ["add", 24]
                ],
                [
                    ["if", 7, 12],
                    ["add", 25]
                ],
                [
                    ["if", 6, 12],
                    ["add", 25]
                ],
                [
                    ["if", 13, 14],
                    ["add", 30]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                    a: !0
                },
                ha = {};
            try {
                ha.__proto__ = ea;
                da = ha.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = ca,
        ka = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Pj = b.prototype
        },
        la = this || self,
        ma = function(a) {
            return a
        };
    var na = function() {},
        qa = function(a) {
            return "function" == typeof a
        },
        ta = function(a) {
            return "string" == typeof a
        },
        ua = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        va = Array.isArray,
        wa = function(a, b) {
            if (a && va(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        xa = function(a, b) {
            if (!ua(a) || !ua(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Aa = function(a, b) {
            for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Da = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ea = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ga = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ha = function(a) {
            var b = [];
            if (va(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ka = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Oa = function() {
            return new Date(Date.now())
        },
        Pa = function() {
            return Oa().getTime()
        },
        ya = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ya.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ya.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Qa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ra = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Sa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Va = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Wa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Xa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ya = /^\w{1,9}$/,
        Za = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Da(a, function(d, e) {
                Ya.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var $a, ab = function() {
        if (void 0 === $a) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                $a = a
            } else $a = a
        }
        return $a
    };
    var cb = function(a, b) {
        this.m = b === bb ? a : ""
    };
    cb.prototype.toString = function() {
        return this.m + ""
    };
    var bb = {};
    var db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function eb() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function fb(a) {
        return -1 != eb().indexOf(a)
    };
    var gb = {},
        hb = function(a, b, c) {
            this.m = c === gb ? a : ""
        };
    hb.prototype.toString = function() {
        return this.m.toString()
    };
    var ib = function(a) {
            return a instanceof hb && a.constructor === hb ? a.m : "type_error:SafeHtml"
        },
        lb = function(a) {
            var b = ab(),
                c = b ? b.createHTML(a) : a;
            return new hb(c, null, gb)
        },
        mb = new hb(la.trustedTypes && la.trustedTypes.emptyHTML || "", 0, gb);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var nb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        ob = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var pb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = ib(mb);
        return !c.parentElement
    });
    var l = window,
        B = document,
        qb = navigator,
        rb = B.currentScript && B.currentScript.src,
        tb = function(a, b) {
            var c = l[a];
            l[a] = void 0 === c ? b : c;
            return l[a]
        },
        ub = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        vb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        wb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function xb(a, b, c) {
        b && Da(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var yb = function(a, b, c, d) {
            var e = B.createElement("script");
            xb(e, d, vb);
            e.type = "text/javascript";
            e.async = !0;
            var f, g = ab(),
                m = g ? g.createScriptURL(a) : a;
            f = new cb(m, bb);
            e.src = f instanceof cb && f.constructor === cb ? f.m : "type_error:TrustedResourceUrl";
            var k, n, p = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
                r = null === (n = p.querySelector) || void 0 === n ? void 0 : n.call(p, "script[nonce]");
            (k = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", k);
            ub(e, b);
            c && (e.onerror = c);
            var v = B.getElementsByTagName("script")[0] ||
                B.body || B.head;
            v.parentNode.insertBefore(e, v);
            return e
        },
        zb = function() {
            if (rb) {
                var a = rb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ab = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = B.createElement("iframe"), g = !0);
            xb(f, c, wb);
            d && Da(d, function(k, n) {
                f.dataset[k] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var m = B.body && B.body.lastChild || B.body || B.head;
                m.parentNode.insertBefore(f, m)
            }
            ub(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        Db = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Eb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Fb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            l.setTimeout(a, 0)
        },
        Gb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Hb = function(a) {
            var b =
                a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Ib = function(a) {
            var b = B.createElement("div"),
                c = lb("A<div>" + a + "</div>"),
                d = b;
            if (pb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = ib(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Jb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Kb = function(a) {
            var b;
            try {
                b = qb.sendBeacon && qb.sendBeacon(a)
            } catch (c) {}
            b || Db(a)
        },
        Lb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Mb = function(a) {
            var b = B.featurePolicy;
            return b && qa(b.allowsFeature) ? b.allowsFeature(a) : !1
        },
        Nb = function() {
            return qb.userLanguage || qb.language
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ob = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Sb = function(a) {
            if (null == a) return String(a);
            var b = Ob.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Tb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ub = function(a) {
            if (!a || "object" != Sb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Tb(a, "constructor") && !Tb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Tb(a, b)
        },
        H = function(a, b) {
            var c = b || ("array" == Sb(a) ? [] : {}),
                d;
            for (d in a)
                if (Tb(a, d)) {
                    var e = a[d];
                    "array" == Sb(e) ? ("array" != Sb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Ub(e) ? (Ub(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e
                }
            return c
        };
    var Vb = function(a) {
        if (void 0 === a || va(a) || Ub(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Wb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            bh: a("consent"),
            dh: a("consent_always_fire"),
            cf: a("convert_case_to"),
            df: a("convert_false_to"),
            ef: a("convert_null_to"),
            ff: a("convert_true_to"),
            hf: a("convert_undefined_to"),
            wj: a("debug_mode_metadata"),
            yj: a("event_data_overrides"),
            qb: a("function"),
            Lh: a("instance_name"),
            Ph: a("live_only"),
            Qh: a("malware_disabled"),
            Rh: a("metadata"),
            Bj: a("original_activity_id"),
            Cj: a("original_vendor_template_id"),
            Vh: a("once_per_event"),
            Of: a("once_per_load"),
            Ej: a("priority_override"),
            Fj: a("respected_consent_types"),
            Tf: a("setup_tags"),
            Vf: a("tag_id"),
            Wf: a("teardown_tags")
        }
    }();
    var Xb = [],
        Yb = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Zb = function(a) {
            return Yb[a]
        },
        $b = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var dc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        ec = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        fc = function(a) {
            return ec[a]
        };
    Xb[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(dc, fc) + "'"
        }
    };
    var qc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        rc = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        sc = function(a) {
            return rc[a]
        };
    Xb[16] = function(a) {
        return a
    };
    var uc;
    var vc = [],
        wc = [],
        xc = [],
        yc = [],
        Cc = [],
        Dc = {},
        Ec, Fc, Gc, Hc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Dc[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.gg && d.gg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Wb.dh.toString() && a[g]) {}
            e && d && d.fg && (f.vtp_gtmCachedValues = d.fg);
            return void 0 !== e ? e(f) : uc(c, f, b)
        },
        Jc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Ic(a[e], b, c));
            return d
        },
        Ic = function(a, b, c) {
            if (va(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Ic(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = vc[f];
                        if (!g || b.Ie(g)) return;
                        c[f] = !0;
                        try {
                            var m = Jc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            d = Hc(m, {
                                event: b,
                                index: f,
                                type: 2
                            });
                            Gc && (d = Gc.ji(d, m))
                        } catch (A) {
                            b.zg && b.zg(A, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[Ic(a[k], b, c)] = Ic(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = Ic(a[p], b, c);
                            Fc && (n = n || r === Fc.$c);
                            d.push(r)
                        }
                        return Fc && n ? Fc.ni(d) : d.join("");
                    case "escape":
                        d = Ic(a[1], b, c);
                        if (Fc && va(a[1]) && "macro" === a[1][0] && Fc.Ji(a)) return Fc.Yi(d);
                        d = String(d);
                        for (var v = 2; v < a.length; v++) Xb[a[v]] && (d = Xb[a[v]](d));
                        return d;
                    case "tag":
                        var t =
                            a[1];
                        if (!yc[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            lg: a[2],
                            index: t
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var u = Kc(q, b, c),
                            x = !!a[4];
                        return x || 2 !== u ? x !== (1 === u) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Kc = function(a, b, c) {
            try {
                return Ec(Jc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Nc = function(a) {
            function b(v) {
                for (var t = 0; t < v.length; t++) d[v[t]] = !0
            }
            for (var c = [], d = [], e = Lc(a), f = 0; f < wc.length; f++) {
                var g = wc[f],
                    m = Mc(g, e);
                if (m) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === m && b(g.block || []);
            }
            for (var p = [], r = 0; r < yc.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        Mc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var m = b(f[g]);
                if (2 === m) return null;
                if (1 === m) return !1
            }
            return !0
        },
        Lc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Kc(xc[c], a));
                return b[c]
            }
        };
    var Oc = {
        ji: function(a, b) {
            b[Wb.cf] && "string" === typeof a && (a = 1 == b[Wb.cf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Wb.ef) && null === a && (a = b[Wb.ef]);
            b.hasOwnProperty(Wb.hf) && void 0 === a && (a = b[Wb.hf]);
            b.hasOwnProperty(Wb.ff) && !0 === a && (a = b[Wb.ff]);
            b.hasOwnProperty(Wb.df) && !1 === a && (a = b[Wb.df]);
            return a
        }
    };
    var L = {
        Nb: "_ee",
        fd: "_syn_or_mod",
        Hj: "_uei",
        ce: "_eu",
        Dj: "_pci",
        Kb: "event_callback",
        Pc: "event_timeout",
        ya: "gtag.config",
        Ka: "gtag.get",
        wa: "purchase",
        Gb: "refund",
        ib: "begin_checkout",
        Eb: "add_to_cart",
        Fb: "remove_from_cart",
        mh: "view_cart",
        kf: "add_to_wishlist",
        xa: "view_item",
        jb: "view_promotion",
        Lc: "select_promotion",
        Fd: "select_item",
        Va: "view_item_list",
        jf: "add_payment_info",
        lh: "add_shipping_info",
        Ma: "value_key",
        Xa: "value_callback",
        O: "allow_ad_personalization_signals",
        hc: "restricted_data_processing",
        $b: "allow_google_signals",
        qa: "cookie_expires",
        Ib: "cookie_update",
        ic: "session_duration",
        Uc: "session_engaged_time",
        Oa: "user_properties",
        ra: "transport_url",
        U: "ads_data_redaction",
        Aa: "user_data",
        cc: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        af: "region",
        bf: "wait_for_update",
        oa: "conversion_linker",
        Ea: "conversion_cookie_prefix",
        ia: "value",
        fa: "currency",
        Kf: "trip_type",
        aa: "items",
        Cf: "passengers",
        Id: "allow_custom_scripts",
        jc: "session_id",
        Hf: "quantity",
        Za: "transaction_id",
        nb: "language",
        Nc: "country",
        Mc: "allow_enhanced_conversions",
        Nd: "aw_merchant_id",
        Ld: "aw_feed_country",
        Md: "aw_feed_language",
        Kd: "discount",
        W: "developer_id",
        Vc: "delivery_postal_code",
        Td: "estimated_delivery_date",
        Rd: "shipping",
        Zd: "new_customer",
        Od: "customer_lifetime_value",
        Sd: "enhanced_conversions",
        Zb: "page_view",
        ka: "linker",
        N: "domains",
        Mb: "decorate_forms",
        xf: "enhanced_conversions_automatic_settings",
        th: "auto_detection_enabled",
        yf: "ga_temp_client_id",
        Gd: "user_engagement",
        gh: "app_remove",
        hh: "app_store_refund",
        ih: "app_store_subscription_cancel",
        jh: "app_store_subscription_convert",
        kh: "app_store_subscription_renew",
        nh: "first_open",
        oh: "first_visit",
        ph: "in_app_purchase",
        qh: "session_start",
        rh: "allow_display_features",
        ac: "campaign",
        lf: "campaign_content",
        nf: "campaign_id",
        pf: "campaign_medium",
        qf: "campaign_name",
        rf: "campaign_source",
        sf: "campaign_term",
        kb: "client_id",
        ja: "cookie_domain",
        Hb: "cookie_name",
        Wa: "cookie_path",
        Fa: "cookie_flags",
        bc: "custom_map",
        Wd: "groups",
        Bf: "non_interaction",
        ob: "page_location",
        $d: "page_path",
        Na: "page_referrer",
        Sc: "page_title",
        la: "send_page_view",
        pb: "send_to",
        ae: "session_engaged",
        zf: "_logged_in_state",
        be: "session_number",
        Hh: "tracking_id",
        $a: "url_passthrough",
        Lb: "accept_incoming",
        fc: "url_position",
        Ff: "phone_conversion_number",
        Df: "phone_conversion_callback",
        Ef: "phone_conversion_css_class",
        Gf: "phone_conversion_options",
        Eh: "phone_conversion_ids",
        Dh: "phone_conversion_country_code",
        La: "aw_remarketing",
        Jd: "aw_remarketing_only",
        Hd: "gclid",
        sh: "auid",
        yh: "affiliation",
        wf: "tax",
        Qd: "list_name",
        vf: "checkout_step",
        uf: "checkout_option",
        zh: "coupon",
        Ah: "promotions",
        ab: "user_id",
        Fh: "retoken",
        za: "cookie_prefix",
        tf: "disable_merchant_reported_purchases",
        xh: "dc_natural_search",
        wh: "dc_custom_params",
        Af: "method",
        Gh: "search_term",
        vh: "content_type",
        Ch: "optimize_id",
        Bh: "experiments",
        Ya: "google_signals"
    };
    L.Rc = "google_tld";
    L.Wc = "update";
    L.Ud = "firebase_id";
    L.Vd = "ga_restrict_domain";
    L.Oc = "event_settings";
    L.Pd = "dynamic_event_settings";
    L.kc = "user_data_settings";
    L.If = "screen_name";
    L.lb = "_x_19";
    L.Jb = "_ecid";
    L.Qc = "_x_20";
    L.Yd = "internal_traffic_results";
    L.Jf = "traffic_type";
    L.Tc = "referral_exclusion_definition";
    L.Xd = "ignore_referrer";
    L.uh = "content_group";
    L.da = "allow_interest_groups";
    var qd = {};
    L.Mf = Object.freeze((qd[L.jf] = 1, qd[L.lh] = 1, qd[L.Eb] = 1, qd[L.Fb] = 1, qd[L.mh] = 1, qd[L.ib] = 1, qd[L.Fd] = 1, qd[L.Va] = 1, qd[L.Lc] = 1, qd[L.jb] = 1, qd[L.wa] = 1, qd[L.Gb] = 1, qd[L.xa] = 1, qd[L.kf] = 1, qd));
    L.ee = Object.freeze([L.O, L.$b, L.Ib]);
    L.Th = Object.freeze([].concat(L.ee));
    L.fe = Object.freeze([L.qa, L.Pc, L.ic, L.Uc]);
    L.Uh = Object.freeze([].concat(L.fe));
    var sd = {},
        zd = function(a, b) {
            sd[a] = sd[a] || [];
            sd[a][b] = !0
        },
        Ad = function(a) {
            for (var b = [], c = sd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Bd = function(a) {
        zd("GTM", a)
    };
    var O = {},
        R = null,
        Cd = Math.random();
    O.I = "GTM-W8F4LKQ";
    O.dd = "1a0";
    O.V = "dataLayer";
    O.fh = "ChAIgJX6jgYQ9NWbicm02cI3EiQAzmpJAproGGLTe9S2HQI56sYfNee4KCCLdZOTO8wI8uU1lkgaAulP";
    var Dd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Ed = {
            __paused: !0,
            __tg: !0
        },
        Fd;
    for (Fd in Dd) Dd.hasOwnProperty(Fd) && (Ed[Fd] = !0);
    O.Dd = "www.googletagmanager.com";
    var Gd = O.Dd + "/gtm.js";
    var Hd = Gd,
        Id = Ga(""),
        Jd = null,
        Kd = null,
        Ld = "https://www.googletagmanager.com/a?id=" + O.I + "&cv=6",
        Md = {},
        Nd = {},
        Od = function() {
            var a = R.sequence || 1;
            R.sequence = a + 1;
            return a
        };
    O.eh = "";
    var Pd = "";
    O.ed = Pd;
    var Qd = {},
        Rd = new ya,
        Zd = {},
        $d = {},
        ce = {
            name: O.V,
            set: function(a, b) {
                H(Xa(a, b), Zd);
                ae()
            },
            get: function(a) {
                return be(a, 2)
            },
            reset: function() {
                Rd = new ya;
                Zd = {};
                ae()
            }
        },
        be = function(a, b) {
            return 2 != b ? Rd.get(a) : de(a)
        },
        de = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Zd, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        ee = function(a, b) {
            $d.hasOwnProperty(a) || (Rd.set(a, b), H(Xa(a, b), Zd), ae())
        },
        ae = function(a) {
            Da($d, function(b, c) {
                Rd.set(b, c);
                H(Xa(b, void 0),
                    Zd);
                H(Xa(b, c), Zd);
                a && delete $d[b]
            })
        },
        ge = function(a, b, c) {
            Qd[a] = Qd[a] || {};
            Qd[a][b] = fe(b, c)
        },
        fe = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? de(a) : Rd.get(a);
            "array" === Sb(d) || "object" === Sb(d) ? c = H(d) : c = d;
            return c
        },
        he = function(a, b) {
            if (Qd[a]) return Qd[a][b]
        },
        ie = function(a, b) {
            Qd[a] && delete Qd[a][b]
        };
    var je = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        ke = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        le = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        me = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var ne = function() {
            var a = !1;
            return a
        },
        pe = function(a) {
            var b = be("gtm.allowlist") || be("gtm.whitelist");
            b && Bd(9);
            ne() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Wa(Ha(b), ke),
                d = be("gtm.blocklist") ||
                be("gtm.blacklist");
            d || (d = be("tagTypeBlacklist")) && Bd(3);
            d ? Bd(8) : d = [];
            oe() && (d = Ha(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ha(d).indexOf("google") && Bd(2);
            var e = d && Wa(Ha(d), le),
                f = {};
            return function(g) {
                var m = g && g[Wb.qb];
                if (!m || "string" != typeof m) return !0;
                m = m.replace(/^_*/, "");
                if (void 0 !== f[m]) return f[m];
                var k = Nd[m] || [],
                    n = a(m, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(m))
                            if (k && 0 < k.length)
                                for (var r = 0; r < k.length; r++) {
                                    if (0 > c.indexOf(k[r])) {
                                        Bd(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var v = !1;
                if (d) {
                    var t = 0 <= e.indexOf(m);
                    if (t) v = t;
                    else {
                        var q = Aa(e, k || []);
                        q && Bd(10);
                        v = q
                    }
                }
                var u = !n || v;
                u || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (u = Aa(e, me));
                return f[m] = u
            }
        },
        oe = function() {
            return je.test(l.location && l.location.hostname)
        };
    var qe = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        re = function(a) {
            var b = R.zones;
            return b ? b.checkState(O.I, a) : qe
        },
        se = function(a) {
            var b = R.zones;
            !b && a && (b = R.zones = a());
            return b
        };
    var te = new function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ve = function() {
        var a = ue,
            b = "Ge";
        if (a.Ge && a.hasOwnProperty(b)) return a.Ge;
        var c = new a;
        a.Ge = c;
        a.hasOwnProperty(b);
        return c
    };
    var ue = function() {
        var a = {};
        this.m = function() {
            var b = te.m,
                c = te.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[te.m] = !0
        }
    };
    var we = [];

    function xe() {
        var a = tb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: ye,
            update: ze,
            addListener: Ae,
            notifyListeners: Be,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function ye(a, b, c, d, e, f) {
        var g = xe();
        g.usedUpdate && (g.wasSetLate = !0);
        if (g.accessedDefault || g.accessedAny) g.wasSetLate = !0;
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var m = g.entries,
                k = m[a] || {},
                n = k.region,
                p = c && ta(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === k.update),
                    v = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== k.initial) m[a] = v;
                r && l.setTimeout(function() {
                    m[a] === v && v.quiet && (v.quiet = !1, Ce(a),
                        Be(), zd("TAGGING", 2))
                }, f)
            }
        }
    }

    function ze(a, b) {
        var c = xe();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = De(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = De(a);
            f.quiet ? (f.quiet = !1, Ce(a)) : g !== d && Ce(a)
        }
    }

    function Ae(a, b) {
        we.push({
            we: a,
            xi: b
        })
    }

    function Ce(a) {
        for (var b = 0; b < we.length; ++b) {
            var c = we[b];
            va(c.we) && -1 !== c.we.indexOf(a) && (c.Eg = !0)
        }
    }

    function Be(a) {
        for (var b = 0; b < we.length; ++b) {
            var c = we[b];
            if (c.Eg) {
                c.Eg = !1;
                try {
                    c.xi({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var De = function(a) {
            var b = xe();
            b.accessedAny = !0;
            var c = b.entries[a] || {};
            return void 0 !== c.update ? c.update : c.initial
        },
        Ee = function(a) {
            var b = xe();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        Fe = function(a) {
            var b = xe();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Ge = function() {
            if (!ve().m()) return !1;
            var a = xe();
            a.accessedAny = !0;
            return a.active
        },
        He = function() {
            var a = xe();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Ie = function(a, b) {
            xe().addListener(a, b)
        },
        Je = function(a) {
            xe().notifyListeners(a)
        },
        Ke = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Fe(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Ie(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Le = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var m = d[g];
                    !1 === De(m) || e[m] || (f.push(m), e[m] = !0)
                }
                return f
            }
            var d = ta(b) ? [b] : b,
                e = {};
            c().length !== d.length && Ie(d, function(f) {
                var g = c();
                0 < g.length && (f.we = g, a(f))
            })
        };

    function Me() {}

    function Ne() {};

    function Oe(a) {
        for (var b = [], c = 0; c < Pe.length; c++) {
            var d = a(Pe[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Pe = [L.C, L.H],
        Qe = function(a) {
            var b = a[L.af];
            b && Bd(40);
            var c = a[L.bf];
            c && Bd(41);
            for (var d = va(b) ? b : [b], e = {
                    Wb: 0
                }; e.Wb < d.length; e = {
                    Wb: e.Wb
                }, ++e.Wb) Da(a, function(f) {
                return function(g, m) {
                    if (g !== L.af && g !== L.bf) {
                        var k = d[f.Wb];
                        xe().set(g, m, k, "KE", "KE-30", c)
                    }
                }
            }(e))
        },
        Re = 0,
        Se = function(a, b) {
            Da(a, function(e, f) {
                xe().update(e, f)
            });
            Je(b);
            var c = Pa(),
                d = c - Re;
            Re && 0 <= d && 1E3 > d && Bd(66);
            Re = c
        },
        Te = function(a) {
            var b = De(a);
            return void 0 != b ? b : !0
        },
        Ue = function() {
            return "G1" + Oe(De)
        },
        Ve = function() {
            return "G1" +
                Oe(Ee)
        },
        af = function(a, b) {
            Le(a, b)
        },
        bf = function(a, b) {
            Ke(a, b)
        };
    var df = function(a) {
            return cf ? B.querySelectorAll(a) : null
        },
        ef = function(a, b) {
            if (!cf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        ff = !1;
    if (B.querySelectorAll) try {
        var gf = B.querySelectorAll(":root");
        gf && 1 == gf.length && gf[0] == B.documentElement && (ff = !0)
    } catch (a) {}
    var cf = ff;
    var hf = function(a) {
            return void 0 === a || null === a ? "" : ta(a) ? Ka(String(a)) : "e0"
        },
        kf = function(a) {
            return a.replace(jf, "")
        },
        mf = function(a) {
            return lf(a.replace(/\s/g, ""))
        },
        lf = function(a) {
            return Ka(a.replace(nf, "").toLowerCase())
        },
        pf = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return of.test(a) ? a : "e0"
        },
        rf = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (qf.test(c)) return c
            }
            return "e0"
        },
        uf = function(a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== sf.indexOf(c.name) ? tf(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        tf = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (l.crypto && l.crypto.subtle) try {
                var b = vf(a);
                return l.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return l.btoa(d).replace(/\+/g,
                        "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        vf = function(a) {
            var b;
            if (l.TextEncoder) b = (new l.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        nf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        qf = /^\S+@\S+\.\S+$/,
        of = /^\+\d{11,15}$/,
        jf = /[.~]/g,
        wf = {},
        xf = (wf.email = "em", wf.phone_number = "pn", wf.first_name = "fn", wf.last_name = "ln", wf.street = "sa", wf.city = "ct", wf.region = "rg", wf.country = "co", wf.postal_code = "pc", wf.error_code = "ec", wf),
        yf = function(a, b) {
            function c(n, p, r) {
                var v = n[p];
                va(v) || (v = [v]);
                for (var t = 0; t < v.length; ++t) {
                    var q = hf(v[t]);
                    "" !== q && f.push({
                        name: p,
                        value: r(q),
                        index: void 0
                    })
                }
            }

            function d(n, p, r, v) {
                var t = hf(n[p]);
                "" !== t && f.push({
                    name: p,
                    value: r(t),
                    index: v
                })
            }

            function e(n) {
                return function(p) {
                    Bd(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === l.location.protocol) {
                c(a, "email", rf);
                c(a, "phone_number", pf);
                c(a, "first_name", e(mf));
                c(a, "last_name", e(mf));
                var g = a.home_address || {};
                c(g, "street", e(lf));
                c(g, "city", e(lf));
                c(g, "postal_code", e(kf));
                c(g, "region", e(lf));
                c(g, "country", e(kf));
                var m = a.address || {};
                va(m) || (m = [m]);
                for (var k = 0; k < m.length; k++) d(m[k], "first_name", mf, k), d(m[k], "last_name", mf, k), d(m[k], "street", lf, k), d(m[k], "city", lf, k), d(m[k], "postal_code", kf, k), d(m[k],
                    "region", lf, k), d(m[k], "country", kf, k);
                uf(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        zf = function(a, b) {
            yf(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        m = c[f].value,
                        k = c[f].index,
                        n = xf[g];
                    n && m && (-1 === sf.indexOf(g) || /^e\d+$/.test(m) || /^[0-9A-Za-z_-]{43}$/.test(m)) && (void 0 !== k && (n += k), d.push(n + "." + m), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Af = function(a) {
            if (l.Promise) try {
                return new Promise(function(b) {
                    zf(a,
                        function(c, d) {
                            b({
                                zc: c,
                                Mj: d
                            })
                        })
                })
            } catch (b) {}
        },
        sf = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Bf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Cf = function(a) {
            var b = new Bf;
            b.eventModel = a;
            return b
        },
        Df = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Ef = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Ff = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Gf = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Hf = function(a, b) {
            a.onSuccess = b;
            return a
        },
        If = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Jf = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Kf = function(a, b) {
            a.onFailure = b;
            return a
        };
    Bf.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var Lf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Mf = function(a, b, c) {
            function d(g) {
                Ub(g) && Da(g, function(m, k) {
                    f = !0;
                    e[m] = k
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Nf = function(a) {
            var b = [L.ac, L.lf, L.nf, L.pf, L.qf, L.rf, L.sf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        },
        Of = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== L.Nb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var Pf, Qf = !1,
        Rf = function(a) {
            if (!Qf) {
                Qf = !0;
                Pf = Pf || {}
            }
            return Pf[a]
        };
    var Sf = function(a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle) return !0;
        var c = l.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var m = g.indexOf("opacity(");
                0 <= m && (g = g.substring(m + 8, g.indexOf(")", m)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = l.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Tf = function() {
            var a = B.body,
                b = B.documentElement || a && a.parentElement,
                c, d;
            if (B.compatMode && "BackCompat" !== B.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                Bd(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Uf = function(a) {
            var b = Tf(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var Vf = [],
        Wf = !(!l.IntersectionObserver || !l.IntersectionObserverEntry),
        Xf = function(a, b, c) {
            for (var d = new l.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < Vf.length; f++)
                if (!Vf[f]) return Vf[f] = d, f;
            return Vf.push(d) - 1
        },
        Yf = function(a, b, c) {
            function d(m, k) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: m.getBoundingClientRect(),
                        intersectionRatio: k,
                        intersectionRect: n,
                        isIntersecting: 0 < k,
                        rootBounds: n,
                        target: m,
                        time: Pa()
                    };
                G(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(m, k) {
                return m - k
            });
            return function() {
                for (var m = 0; m < b.length; m++) {
                    var k = Uf(b[m]);
                    if (k > e[m])
                        for (; f[m] < c.length - 1 && k >= c[f[m] + 1];) d(b[m], k), f[m]++;
                    else if (k < e[m])
                        for (; 0 <= f[m] && k <= c[f[m]];) d(b[m], k), f[m]--;
                    e[m] = k
                }
            }
        },
        Zf = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (Wf) {
                var e = !1;
                G(function() {
                    e ||
                        Yf(a, b, c)()
                });
                return Xf(function(f) {
                    e = !0;
                    for (var g = {
                            Vb: 0
                        }; g.Vb < f.length; g = {
                            Vb: g.Vb
                        }, g.Vb++) G(function(m) {
                        return function() {
                            return a(f[m.Vb])
                        }
                    }(g))
                }, b, c)
            }
            return l.setInterval(Yf(a, b, c), 1E3)
        },
        $f = function(a) {
            Wf ? 0 <= a && a < Vf.length && Vf[a] && (Vf[a].disconnect(), Vf[a] = void 0) : l.clearInterval(a)
        };
    var ag = /:[0-9]+$/,
        bg = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        eg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = cg(a.protocol) || cg(l.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : l.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || l.location.hostname).replace(ag, "").toLowerCase());
            return dg(a, b, c, d, e)
        },
        dg = function(a, b, c, d, e) {
            var f, g = cg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = fg(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ag, "").toLowerCase();
                    if (c) {
                        var m = /^www\d*\./.exec(f);
                        m && m[0] && (f = f.substr(m[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || zd("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = bg(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        cg = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        fg = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        gg = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || zd("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(ag, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        hg = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = gg(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                m = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === m[0] && (m = m.substring(1));
            g = c(g);
            m = c(m);
            "" !== g && (g = "?" + g);
            "" !== m && (m = "#" + m);
            var k = "" + f + g + m;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var ig = {};
    var lg = function(a) {
            if (0 == a.length) return null;
            var b;
            b = jg(a, function(c) {
                return !kg.test(c.Sa)
            });
            b = jg(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = jg(b, function(c) {
                return !Sf(c.element)
            });
            return b[0]
        },
        jg = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        mg = function(a) {
            var b;
            if (a === B.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = mg(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        ng = !0,
        og = !1;
    ig.$g = "true";
    var pg = function(a) {
            if ("false" === ig.$g || !ng) return !1;
            if (og) return !0;
            var b = Rf("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        qg = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        rg = new RegExp(/@(gmail|googlemail)\./i),
        kg = new RegExp(/support|noreply/i),
        sg = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        tg = ["BR"],
        ug = {},
        vg = function(a) {
            a = a || {
                Ee: !0,
                Fe: !0
            };
            a.fb = a.fb || {
                email: !0,
                phone: !0,
                cg: !0
            };
            var b, c = a,
                d = !!c.Ee + "." + !!c.Fe;
            c && c.pd && c.pd.length && (d += "." + c.pd.join("."));
            c && c.fb && (d += "." + c.fb.email + "." + c.fb.phone + "." + c.fb.cg);
            b = d;
            var e = ug[b];
            if (e && 200 > Pa() - e.timestamp) return e.result;
            var f;
            var g = [],
                m = B.body;
            if (m) {
                for (var k = m.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= sg.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var r = !1, v = 0; v < p.childElementCount && 1E4 > v; v++)
                            if (!(0 <= tg.indexOf(p.children[v].tagName.toUpperCase()))) {
                                r = !0;
                                break
                            }
                        r || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < k.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var t = f,
                q = t.status,
                u;
            if (a.fb && a.fb.email) {
                for (var x = t.elements, A = [], w = 0; w < x.length; w++) {
                    var z = x[w],
                        y = z.textContent;
                    "INPUT" === z.tagName.toUpperCase() &&
                        z.value && (y = z.value);
                    if (y) {
                        var C = y.match(qg);
                        if (C) {
                            var F = C[0],
                                D;
                            if (l.location) {
                                var E = dg(l.location, "host", !0);
                                D = 0 <= F.toLowerCase().indexOf(E)
                            } else D = !1;
                            D || A.push({
                                element: z,
                                Sa: F
                            })
                        }
                    }
                }
                var P;
                var K = a && a.pd;
                if (K && 0 !== K.length) {
                    for (var I = [], J = 0; J < A.length; J++) {
                        for (var N = !0, M = 0; M < K.length; M++) {
                            var T = K[M];
                            if (T && ef(A[J].element, T)) {
                                N = !1;
                                break
                            }
                        }
                        N && I.push(A[J])
                    }
                    P = I
                } else P = A;
                u = lg(P);
                10 < A.length && (q = "3")
            }
            var V = [];
            if (u) {
                var S = u.element,
                    ra = {
                        Sa: u.Sa,
                        tagName: S.tagName,
                        type: 1
                    };
                a.Ee && (ra.querySelector = mg(S));
                a.Fe &&
                    (ra.isVisible = !Sf(S));
                V.push(ra)
            }
            var sa = {
                elements: V,
                status: q
            };
            ug[b] = {
                timestamp: Pa(),
                result: sa
            };
            return sa
        },
        wg = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Sa.length + ":" + rg.test(a.Sa)
        };
    var xg = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), m = 0; m < g.length; m++) {
                        var k = g[m].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = be(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = l[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && cf) {
                    var r = df(e);
                    r && 0 < r.length && (f = Hb(r[0]) || Ka(r[0].value))
                }
                f && (a[b] = f)
            }
        },
        yg = function(a) {
            if (a) {
                var b = {};
                xg(b, "email",
                    a.email);
                xg(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    xg(e, "first_name", c[d].first_name);
                    xg(e, "last_name", c[d].last_name);
                    xg(e, "street", c[d].street);
                    xg(e, "city", c[d].city);
                    xg(e, "region", c[d].region);
                    xg(e, "country", c[d].country);
                    xg(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        zg = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return yg(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = vg({
                                Ee: !1,
                                Fe: !1,
                                pd: c.exclude_element_selectors,
                                fb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    cg: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Sa;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Ag = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : l.enhanced_conversion_data;
                case "automatic":
                    return yg(a[L.xf])
            }
        };
    var Bg = {},
        Cg = function(a, b) {
            if (l._gtmexpgrp && l._gtmexpgrp.hasOwnProperty(a)) return l._gtmexpgrp[a];
            void 0 === Bg[a] && (Bg[a] = Math.floor(Math.random() * b));
            return Bg[a]
        };
    var Dg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Eg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                m = g[0].replace(/^\s*|\s*$/g, "");
            if (m && m == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };

    function Fg(a) {
        return "null" !== a.origin
    };
    var Kg = function(a, b, c, d) {
            return Gg(d) ? Eg(a, String(b || Jg()), c) : []
        },
        Ng = function(a, b, c, d, e) {
            if (Gg(e)) {
                var f = Lg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Mg(f, function(g) {
                        return g.nd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Mg(f, function(g) {
                        return g.Ac
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Og(a, b, c, d) {
        var e = Jg(),
            f = window;
        Fg(f) && (f.document.cookie = a);
        var g = Jg();
        return e != g || void 0 != c && 0 <= Kg(b, g, !1, d).indexOf(c)
    }
    var Sg = function(a, b, c) {
            function d(t, q, u) {
                if (null == u) return delete g[q], t;
                g[q] = u;
                return t + "; " + q + "=" + u
            }

            function e(t, q) {
                if (null == q) return delete g[q], t;
                g[q] = !0;
                return t + "; " + q
            }
            if (!Gg(c.Ra)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Pg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            f = d(f, "expires", m);
            f = d(f, "max-age", c.Lj);
            f = d(f, "samesite",
                c.Nj);
            c.Oj && (f = e(f, "secure"));
            var k = c.domain;
            if (k && "auto" === k.toLowerCase()) {
                for (var n = Qg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        v = d(f, "domain", r);
                    v = e(v, c.flags);
                    if (!Rg(r, c.path) && Og(v, a, b, c.Ra)) return 0
                }
                return 1
            }
            k && "none" !== k.toLowerCase() && (f = d(f, "domain", k));
            f = e(f, c.flags);
            return Rg(k, c.path) ? 1 : Og(f, a, b, c.Ra) ? 0 : 1
        },
        Tg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Sg(a, b, c)
        };

    function Mg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var m = a[g],
                k = b(m);
            k === c ? d.push(m) : void 0 === f || k < f ? (e = [m], f = k) : k === f && e.push(m)
        }
        return 0 < d.length ? d : e
    }

    function Lg(a, b, c) {
        for (var d = [], e = Kg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                m = g.shift();
            if (!b || -1 !== b.indexOf(m)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    nd: 1 * k[0] || 1,
                    Ac: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var Pg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Ug = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Vg = /(^|\.)doubleclick\.net$/i,
        Rg = function(a, b) {
            return Vg.test(window.document.location.hostname) || "/" === b && Ug.test(a)
        },
        Jg = function() {
            return Fg(window) ? window.document.cookie : ""
        },
        Qg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Vg.test(e) || Ug.test(e) || a.push("none");
            return a
        },
        Gg = function(a) {
            if (!ve().m() || !a || !Ge()) return !0;
            if (!Fe(a)) return !1;
            var b = De(a);
            return null == b ? !0 : !!b
        };
    var Wg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Dg(a) & 2147483647) : String(b)
        },
        Xg = function(a) {
            return [Wg(a), Math.round(Pa() / 1E3)].join(".")
        },
        $g = function(a, b, c, d, e) {
            var f = Yg(b);
            return Ng(a, f, Zg(c), d, e)
        },
        ah = function(a, b, c, d) {
            var e = "" + Yg(c),
                f = Zg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Yg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Zg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function bh(a, b, c) {
        var d, e = Number(null != a.wb ? a.wb : void 0);
        0 !== e && (d = new Date((b || Pa()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var ch = ["1"],
        dh = {},
        eh = {},
        ih = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = fh(a.prefix);
            if (!dh[c] && !gh(c, a.path, a.domain) && b) {
                var d = fh(a.prefix),
                    e = Xg();
                if (0 === hh(d, e, a)) {
                    var f = tb("google_tag_data", {});
                    f._gcl_au ? zd("GTM", 57) : f._gcl_au = e
                }
                gh(c, a.path, a.domain)
            }
        };

    function hh(a, b, c, d) {
        var e = ah(b, "1", c.domain, c.path),
            f = bh(c, d);
        f.Ra = "ad_storage";
        return Tg(a, e, f)
    }

    function gh(a, b, c) {
        var d = $g(a, b, c, ch, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (dh[a] = e.slice(0, 2).join("."), eh[a] = {
            id: e.slice(2, 4).join("."),
            wg: Number(e[4]) || 0
        }) : 3 === e.length ? eh[a] = {
            id: e.slice(0, 2).join("."),
            wg: Number(e[2]) || 0
        } : dh[a] = d;
        return !0
    }

    function fh(a) {
        return (a || "_gcl") + "_au"
    };
    var jh = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Xe: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, m) {
            return m.timestamp - g.timestamp
        });
        return b
    };

    function kh(a, b) {
        var c = jh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Xe] || (d[c[e].Xe] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    sa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Xe].push(g)
            }
        }
        return d
    };

    function lh() {
        for (var a = mh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function nh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var mh, oh;

    function ph(a) {
        mh = mh || nh();
        oh = oh || lh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                m = e ? a.charCodeAt(c + 2) : 0,
                k = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | m >> 6,
                r = m & 63;
            e || (r = 64, d || (p = 64));
            b.push(mh[k], mh[n], mh[p], mh[r])
        }
        return b.join("")
    }

    function qh(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = oh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        mh = mh || nh();
        oh = oh || lh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                m = b(64);
            if (64 === m && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != m && (c += String.fromCharCode(g << 6 & 192 | m)))
        }
    };
    var rh, sh = function(a) {
        var b;
        if (!(b = rh)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        rh = b;
        for (var g = 4294967295, m = 0; m < a.length; m++) g = g >>> 8 ^ rh[(g ^ a.charCodeAt(m)) & 255];
        return (g ^ -1) >>> 0
    };
    var th = {
            vj: 0,
            Gj: 1,
            Aj: 2,
            zj: 3
        },
        xh = function() {
            var a = uh,
                b = vh,
                c = wh(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Eb(B, "mousedown", d);
                Eb(B, "keyup", d);
                Eb(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        yh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            wh().decorators.push(f)
        },
        zh = function(a, b, c) {
            for (var d = wh().decorators,
                    e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    m;
                if (m = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== B.location.hostname))
                        for (var r = 0; r < k.length; r++)
                            if (k[r] instanceof RegExp) {
                                if (k[r].test(n)) {
                                    m = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) {
                        m = !0;
                        break a
                    }
                    m = !1
                }
                if (m) {
                    var v = g.placement;
                    void 0 == v && (v = g.fragment ? 2 : 1);
                    v === b && Sa(e, g.callback())
                }
            }
            return e
        };

    function wh() {
        var a = tb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Ah = /(.*?)\*(.*?)\*(.*)/,
        Bh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ch = /^(?:www\.|m\.|amp\.)+/,
        Dh = /\*?xp_[0-3]\*?/,
        Eh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Fh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Ih = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(ph(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                m = Gh[b](f);
            f = [f, g, ph(String(m))].join("*")
        }
        return ["1", Hh(f), f].join("*")
    };

    function Hh(a, b) {
        var c = [l.navigator.userAgent, (new Date).getTimezoneOffset(), Nb(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return sh(c).toString(36)
    }
    var Jh = {},
        Gh = (Jh[0] = function() {
            return "BASELINE"
        }, Jh[1] = Kh, Jh[2] = Lh, Jh[3] = Mh, Jh);

    function Kh(a, b) {
        var c = [(new Date).getTimezoneOffset(), Nb(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return sh(c).toString(36)
    }

    function Lh(a, b) {
        if (!qb.userAgentData) return "UA_DATA_NOT_PRESENT";
        var c = [(new Date).getTimezoneOffset(), Nb(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), qb.userAgentData.brands, qb.userAgentData.mobile, qb.userAgentData.platform, a].join("*");
        return sh(c).toString(36)
    }

    function Mh() {
        return "UACH_ACCESSED_TOO_EARLY"
    }

    function Nh() {
        return function(a) {
            var b = gg(l.location.href),
                c = b.search.replace("?", ""),
                d = bg(c, "_gl", !0) || "";
            a.query = Oh(d) || {};
            var e = eg(b, "fragment").match(Fh("_gl"));
            a.fragment = Oh(e && e[3] || "") || {}
        }
    }
    var Ph = function(a) {
            var b = Nh(),
                c = wh();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d
        },
        Oh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Ah.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var m = g[2],
                            k = g[3],
                            n = null !== k.match(Dh),
                            p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (m === Hh(k, r)) {
                                    p = !0;
                                    break a
                                }
                            p = !1
                        }
                        var v = p;
                        if (v || n) {
                            for (var t = {}, q = k ? k.split("*") : [], u = 0; u + 1 < q.length; u += 2) {
                                var x =
                                    q[u],
                                    A = null !== x.match(Dh);
                                if (v || A) {
                                    var w = qh(q[u + 1]);
                                    t[x] = w
                                }
                                if (A) {
                                    var z = x.split("_")[1];
                                    if (!(Number(z) < Object.keys(th).length)) return;
                                    var y = b,
                                        C = t[x],
                                        F = k.slice(0, k.indexOf("*xp")),
                                        D = v;
                                    if (0 !== Number(z)) a: {
                                        var E = C,
                                            P = F,
                                            K = y;
                                        if ("undefined" !== E && "UA_DATA_NOT_PRESENT" !== E && "UACH_ACCESSED_TOO_EARLY" !== E)
                                            for (var I = 0; I < K; ++I)
                                                if (E === Gh[z](P, I)) {
                                                    D = !0;
                                                    break a
                                                }
                                        D = !1
                                    }
                                    t._z = "uaxp." + (v ? D === v ? "" + z + 0 : "" + z + 3 : D === v ? "" + z + 1 : "" + z + 2)
                                }
                            }
                            zd("TAGGING", 6);
                            return t
                        }
                        zd("TAGGING", 7)
                    }
                }
            } catch (J) {
                zd("TAGGING", 8)
            }
        };

    function Qh(a, b, c, d) {
        function e(p) {
            var r = p,
                v = Fh(a).exec(r),
                t = r;
            if (v) {
                var q = v[2],
                    u = v[4];
                t = v[1];
                u && (t = t + q + u)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Eh.exec(c);
        if (!f) return "";
        var g = f[1],
            m = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : m = "?" + e(m.substring(1));
        return "" + g + m + k
    }

    function Rh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = zh(b, 1, c),
            e = zh(b, 2, c),
            f = zh(b, 3, c);
        if (Va(d)) {
            var g = Ih(d, void 0);
            c ? Sh("_gl", g, a) : Th("_gl", g, a, !1)
        }
        if (!c && Va(e)) {
            var m = Ih(e);
            Th("_gl", m, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k)) a: {
                var n = k,
                    p = f[k],
                    r = a;
                if (r.tagName) {
                    if ("a" === r.tagName.toLowerCase()) {
                        Th(n, p, r, void 0);
                        break a
                    }
                    if ("form" === r.tagName.toLowerCase()) {
                        Sh(n, p, r);
                        break a
                    }
                }
                "string" == typeof r && Qh(n, p, r, void 0)
            }
    }

    function Th(a, b, c, d) {
        if (c.href) {
            var e = Qh(a, b, c.href, void 0 === d ? !1 : d);
            db.test(e) && (c.href = e)
        }
    }

    function Sh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var m = e[g];
                    if (m.name === a) {
                        m.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = B.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Qh(a, b, c.action);
                db.test(n) && (c.action = n)
            }
        }
    }

    function uh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Rh(e, e.hostname)
            }
        } catch (g) {}
    }

    function vh(a) {
        try {
            if (a.action) {
                var b = eg(gg(a.action), "host");
                Rh(a, b)
            }
        } catch (c) {}
    }
    var Uh = function(a, b, c, d) {
            xh();
            yh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Vh = function(a, b) {
            xh();
            yh(a, [dg(l.location, "host", !0)], b, !0, !0)
        },
        Wh = function() {
            var a = B.location.hostname,
                b = Bh.exec(B.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var m = a.replace(Ch, ""),
                k = e.replace(Ch, ""),
                n;
            if (!(n = m === k)) {
                var p = "." + k;
                n = m.substring(m.length - p.length,
                    m.length) === p
            }
            return n
        },
        Xh = function(a, b) {
            return !1 === a ? !1 : a || b || Wh()
        };
    var Yh = {};
    var Zh = /^\w+$/,
        $h = /^[\w-]+$/,
        ai = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        bi = function() {
            if (!ve().m() || !Ge()) return !0;
            var a = De("ad_storage");
            return null == a ? !0 : !!a
        },
        ci = function(a, b) {
            Fe("ad_storage") ? bi() ? a() : Le(a, "ad_storage") : b ? zd("TAGGING", 3) : Ke(function() {
                ci(a, !0)
            }, ["ad_storage"])
        },
        ei = function(a) {
            return di(a).map(function(b) {
                return b.sa
            })
        },
        di = function(a) {
            var b = [];
            if (!Fg(l) || !B.cookie) return b;
            var c = Kg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Hc: d.Hc
                }, e++) {
                var f = fi(c[e]);
                if (null != f) {
                    var g = f,
                        m = g.version;
                    d.Hc = g.sa;
                    var k = g.timestamp,
                        n = g.labels,
                        p = wa(b, function(r) {
                            return function(v) {
                                return v.sa === r.Hc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = gi(p.labels, n || [])) : b.push({
                        version: m,
                        sa: d.Hc,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(r, v) {
                return v.timestamp - r.timestamp
            });
            return hi(b)
        };

    function gi(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function ii(a) {
        return a && "string" == typeof a && a.match(Zh) ? a : "_gcl"
    }
    var ki = function() {
            var a = gg(l.location.href),
                b = eg(a, "query", !1, void 0, "gclid"),
                c = eg(a, "query", !1, void 0, "gclsrc"),
                d = eg(a, "query", !1, void 0, "wbraid"),
                e = eg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || bg(f, "gclid", void 0);
                c = c || bg(f, "gclsrc", void 0);
                d = d || bg(f, "wbraid", void 0)
            }
            return ji(b, c, e, d)
        },
        ji = function(a, b, c, d) {
            var e = {},
                f = function(g, m) {
                    e[m] || (e[m] = []);
                    e[m].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && $h.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match($h)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        mi = function(a) {
            var b = ki();
            ci(function() {
                li(b, !1, a)
            })
        };

    function li(a, b, c, d, e) {
        function f(x, A) {
            var w = ni(x, g);
            w && (Tg(w, A, m), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = ii(c.prefix);
        d = d || Pa();
        var m = bh(c, d, !0);
        m.Ra = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var A = ["GCL", n, x];
                0 < e.length && A.push(e.join("."));
                return A.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Yh.enable_gbraid_cookie_write ? 0 : Yh.enable_gbraid_cookie_write) && !k && a.gb) {
            var r = a.gb[0],
                v = ni("gb",
                    g),
                t = !1;
            if (!b)
                for (var q = di(v), u = 0; u < q.length; u++) q[u].sa === r && q[u].labels && 0 < q[u].labels.length && (t = !0);
            t || f("gb", p(r))
        }
    }
    var pi = function(a, b) {
            var c = Ph(!0);
            ci(function() {
                for (var d = ii(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ai[f]) {
                        var g = ni(f, d),
                            m = c[g];
                        if (m) {
                            var k = Math.min(oi(m), Pa()),
                                n;
                            b: {
                                var p = k;
                                if (Fg(l))
                                    for (var r = Kg(g, B.cookie, void 0, "ad_storage"), v = 0; v < r.length; ++v)
                                        if (oi(r[v]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = bh(b, k, !0);
                                t.Ra = "ad_storage";
                                Tg(g, m, t)
                            }
                        }
                    }
                }
                li(ji(c.gclid, c.gclsrc), !1, b)
            })
        },
        ni = function(a, b) {
            var c = ai[a];
            if (void 0 !== c) return b + c
        },
        oi = function(a) {
            return 0 !== qi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function fi(a) {
        var b = qi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            sa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function qi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !$h.test(a[2]) ? [] : a
    }
    var ri = function(a, b, c, d, e) {
            if (va(b) && Fg(l)) {
                var f = ii(e),
                    g = function() {
                        for (var m = {}, k = 0; k < a.length; ++k) {
                            var n = ni(a[k], f);
                            if (n) {
                                var p = Kg(n, B.cookie, void 0, "ad_storage");
                                p.length && (m[n] = p.sort()[p.length - 1])
                            }
                        }
                        return m
                    };
                ci(function() {
                    Uh(g, b, c, d)
                })
            }
        },
        hi = function(a) {
            return a.filter(function(b) {
                return $h.test(b.sa)
            })
        },
        si = function(a, b) {
            if (Fg(l)) {
                for (var c = ii(b.prefix), d = {}, e = 0; e < a.length; e++) ai[a[e]] && (d[a[e]] = ai[a[e]]);
                ci(function() {
                    Da(d, function(f, g) {
                        var m = Kg(c + g, B.cookie, void 0, "ad_storage");
                        m.sort(function(t,
                            q) {
                            return oi(q) - oi(t)
                        });
                        if (m.length) {
                            var k = m[0],
                                n = oi(k),
                                p = 0 !== qi(k.split(".")).length ? k.split(".").slice(3) : [],
                                r = {},
                                v;
                            v = 0 !== qi(k.split(".")).length ? k.split(".")[2] : void 0;
                            r[f] = [v];
                            li(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function ti(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var ui = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Ge()) {
            var c = ki();
            if (ti(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Vh(function() {
                    return d
                }, 3);
                Vh(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function vi(a, b) {
        var c = ii(b),
            d = ni(a, c);
        if (!d) return 0;
        for (var e = di(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function wi(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var xi = function(a) {
            var b = [];
            Da(a, function(c, d) {
                d = hi(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].sa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        zi = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = yi("gcl" + a);
                if (d) return d.split(".")
            }
            var e = ii(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !Te(L.C) && c,
                    g;
                g = ki()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var m = ni(a, e);
            return m ? ei(m) : []
        },
        yi = function(a) {
            var b = gg(l.location.href),
                c = eg(b, "host", !1);
            if (c && c.match(Ai)) {
                var d = eg(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        Bi = function(a, b) {
            Fe(L.C) ? Te(L.C) ? a() : Le(a, L.C) : b ? Bd(42) : bf(function() {
                Bi(a, !0)
            }, [L.C])
        },
        Ai = /^\d+\.fls\.doubleclick\.net$/,
        Ci = !1;
    var Di = function(a, b) {
            return zi("aw", a, b)
        },
        Ei = function(a, b) {
            return zi("dc", a, b)
        },
        Fi = function(a) {
            var b = yi("gac");
            return b ? !Te(L.C) && a ? "0" : decodeURIComponent(b) : xi(bi() ? kh() : {})
        },
        Gi = function(a) {
            var b = yi("gacgb");
            return b ?
                !Te(L.C) && a ? "0" : decodeURIComponent(b) : xi(bi() ? kh("_gac_gb", !0) : {})
        },
        Hi = function(a) {
            var b = ki(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                sa: d,
                Be: f
            });
            e && c.push({
                sa: e,
                Be: "ds"
            });
            if (!Ci) {}
            Bi(function() {
                ih(a);
                var g = dh[fh(a.prefix)];
                if (g && 0 < c.length)
                    for (var m = R.joined_auid = R.joined_auid || {}, k = 0; k < c.length; k++) {
                        var n =
                            c[k],
                            p = n.sa,
                            r = n.Be,
                            v = (a.prefix || "_gcl") + "." + r + "." + p;
                        if (!m[v]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t = "gb" === r ? t + "?gbraid=" + p + "&auid=" + g : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + r;
                            Kb(t);
                            m[v] = !0
                        }
                    }
            })
        },
        Ii = function(a) {
            var b;
            if (yi("gclaw") || yi("gac") || 0 < (ki().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (ki().gb || []).length) c = !0;
                else {
                    var d = Math.max(vi("aw", a), wi(bi() ? kh() : {}));
                    c = Math.max(vi("gb", a), wi(bi() ? kh("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var Ji = function(a) {
        var b = qb && qb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var Li = function(a) {
            var b = a ? Ag(a) : l.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? Ki(a) ? "a" : "m" : "c";
            if (l.Promise) try {
                return b ? Af(b).then(function(e) {
                    e.ye = d;
                    return e
                }) : Promise.resolve({
                    zc: "",
                    ye: void 0
                })
            } catch (e) {}
        },
        Ki = function(a) {
            var b = a && a[L.xf];
            return b && b[L.th]
        },
        Mi = function(a) {
            return a
        },
        Ni = function(a) {
            if (Te(L.C)) return a;
            a = a.replace(/&url=([^&#]+)/, function(b, c) {
                var d = hg(decodeURIComponent(c));
                return "&url=" + encodeURIComponent(d)
            });
            a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = hg(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            });
            return a
        },
        Oi = function() {
            if (Id || !0 !== l._gtmdgs && !Ji("11")) return -1;
            var a = Fa('1');
            return Cg(1, 100) < a ? Cg(2, 2) : -1
        },
        Pi = function() {
            return -1 !== qb.userAgent.toLowerCase().indexOf("firefox")
        },
        Qi = function(a) {
            var b;
            if (!a || !a.length) return;
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
            }
            b = c.join(",");
            return b
        },
        Ri = function() {
            var a = !1;
            a = !0 === l._gtmpcm ? !0 : Ji("14.1.1");
            return a
        };
    var Si = !1,
        Ti = 0,
        Ui = [];

    function Vi(a) {
        if (!Si) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Si = !0;
                for (var e = 0; e < Ui.length; e++) G(Ui[e])
            }
            Ui.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function Wi() {
        if (!Si && 140 > Ti) {
            Ti++;
            try {
                B.documentElement.doScroll("left"), Vi()
            } catch (a) {
                l.setTimeout(Wi, 50)
            }
        }
    }
    var Xi = function(a) {
        Si ? a() : Ui.push(a)
    };
    var Zi = function(a, b) {
            this.m = !1;
            this.D = [];
            this.K = {
                tags: []
            };
            this.Z = !1;
            this.o = this.s = 0;
            Yi(this, a, b)
        },
        $i = function(a, b, c, d) {
            if (Ed.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ub(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        aj = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        bj = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        Yi = function(a, b, c) {
            qa(b) && cj(a, b);
            c && l.setTimeout(function() {
                return bj(a)
            }, Number(c))
        },
        cj = function(a,
            b) {
            var c = Ra(function() {
                return G(function() {
                    b(O.I, a.K)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        dj = function(a) {
            a.s++;
            return Ra(function() {
                a.o++;
                a.Z && a.o >= a.s && bj(a)
            })
        };
    var ej = function() {
            function a(d) {
                return !ua(d) || 0 > d ? 0 : d
            }
            if (!R._li && l.performance && l.performance.timing) {
                var b = l.performance.timing.navigationStart,
                    c = ua(ce.get("gtm.start")) ? ce.get("gtm.start") : 0;
                R._li = {
                    cst: a(c - b),
                    cbt: a(Kd - b)
                }
            }
        },
        fj = function(a) {
            l.performance && l.performance.mark(O.I + "_" + a + "_start")
        },
        gj = function(a) {
            if (l.performance) {
                var b = O.I + "_" + a + "_start",
                    c = O.I + "_" + a + "_duration";
                l.performance.measure(c, b);
                var d = l.performance.getEntriesByName(c)[0];
                l.performance.clearMarks(b);
                l.performance.clearMeasures(c);
                var e = R._p || {};
                void 0 === e[a] && (e[a] = d.duration, R._p = e);
                return d.duration
            }
        },
        hj = function() {
            if (l.performance && l.performance.now) {
                var a = R._p || {};
                a.PAGEVIEW = l.performance.now();
                R._p = a
            }
        };
    var ij = {},
        jj = function() {
            return l.GoogleAnalyticsObject && l[l.GoogleAnalyticsObject]
        },
        kj = !1;

    function oj() {
        return l.GoogleAnalyticsObject || "ga"
    }
    var pj = function(a) {},
        qj = function(a, b) {
            return function() {
                var c = jj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            m = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", m, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var zj = function(a) {},
        Dj = function(a) {},
        Ej =
        function() {
            return "&tc=" + yc.filter(function(a) {
                return a
            }).length
        },
        Hj = function() {
            2022 <= Fj().length && Gj()
        },
        Ij = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Kj = function() {
            Jj || (Jj = l.setTimeout(Gj, 500))
        },
        Gj = function() {
            Jj && (l.clearTimeout(Jj), Jj = void 0);
            void 0 === Lj || Mj[Lj] && !Nj && !Oj || (Pj[Lj] || Qj.Ki() || 0 >= Rj-- ? (Bd(1), Pj[Lj] = !0) : (Qj.ej(), Db(Fj(!0)), Mj[Lj] = !0, Sj = Tj = Uj = Oj = Nj = ""))
        },
        Fj = function(a) {
            var b = Lj;
            if (void 0 === b) return "";
            var c = Ad("GTM"),
                d = Ad("TAGGING");
            return [Vj, Mj[b] ? "" : "&es=1",
                Wj[b], zj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Ej(), Nj, Oj, Uj, Tj, Dj(a), Sj, "&z=0"
            ].join("")
        },
        Yj = function() {
            Vj = Xj()
        },
        Xj = function() {
            return [Ld, "&v=3&t=t", "&pid=" + xa(), "&rv=" + O.dd].join("")
        },
        Cj = ["L", "S", "Y"],
        yj = ["S", "E"],
        Zj = {
            sampleRate: "0.005000",
            Yg: "",
            Xg: Number("5")
        },
        ak = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="),
        bk;
    if (!(bk = ak)) {
        var ck = Math.random(),
            dk = Zj.sampleRate;
        bk = ck < dk
    }
    var ek = bk,
        fk = {
            label: O.I + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Vj = Xj(),
        Mj = {},
        Nj = "",
        Oj = "",
        Sj = "",
        Tj = "",
        Bj = {},
        Aj = !1,
        xj = {},
        gk = {},
        Uj = "",
        Lj = void 0,
        Wj = {},
        Pj = {},
        Jj = void 0,
        hk = 5;
    0 < Zj.Xg && (hk = Zj.Xg);
    var Qj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ki: function() {
                    return c < a ? !1 : Pa() - d[c % a] < b
                },
                ej: function() {
                    var f = c++ % a;
                    d[f] = Pa()
                }
            }
        }(hk, 1E3),
        Rj = 1E3,
        jk = function(a, b) {
            if (ek && !Pj[a] && Lj !==
                a) {
                Gj();
                Lj = a;
                Sj = Nj = "";
                Wj[a] = "&e=" + Ij(b) + "&eid=" + a;
                Kj();
            }
        },
        kk = function(a, b, c, d) {
            if (ek && b) {
                var e, f = String(b[Wb.qb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Pj[a]) {
                    a !== Lj && (Gj(), Lj = a);
                    Nj = Nj ? Nj + "." + g : "&tr=" + g;
                    var m = b["function"];
                    if (!m) throw Error("Error: No function name given for function call.");
                    var k = (Dc[m] ? "1" : "2") + e;
                    Sj = Sj ? Sj + "." + k : "&ti=" + k;
                    Kj();
                    Hj()
                }
            }
        };
    var rk = function(a, b, c) {
            if (ek && !Pj[a]) {
                a !== Lj && (Gj(), Lj = a);
                var d = c + b;
                Oj = Oj ? Oj + "." + d : "&epr=" + d;
                Kj();
                Hj()
            }
        },
        sk = function(a, b, c) {};

    function tk(a, b, c, d) {
        var e = yc[a],
            f = uk(a, b, c, d);
        if (!f) return null;
        var g = Ic(e[Wb.Tf], c, []);
        if (g && g.length) {
            var m = g[0];
            f = tk(m.index, {
                onSuccess: f,
                onFailure: 1 === m.lg ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function uk(a, b, c, d) {
        function e() {
            if (f[Wb.Qh]) m();
            else {
                var x = Jc(f, c, []);
                var A = x[Wb.bh];
                if (null != A)
                    for (var w = 0; w < A.length; w++)
                        if (!Te(A[w])) {
                            m();
                            return
                        }
                var z = $i(c.rb, String(f[Wb.qb]), Number(f[Wb.Vf]), x[Wb.Rh]),
                    y = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!y) {
                        y = !0;
                        var D = Pa() - F;
                        kk(c.id, yc[a], "5", D);
                        aj(c.rb, z, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!y) {
                        y = !0;
                        var D = Pa() - F;
                        kk(c.id, yc[a], "6", D);
                        aj(c.rb, z, "failure", D);
                        m()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                kk(c.id, f, "1");
                var C = function() {
                    var D = Pa() - F;
                    kk(c.id, f, "7", D);
                    aj(c.rb, z, "exception", D);
                    y || (y = !0, m())
                };
                var F = Pa();
                try {
                    Hc(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = yc[a],
            g = b.onSuccess,
            m = b.onFailure,
            k = b.terminate;
        if (c.Ie(f)) return null;
        var n = Ic(f[Wb.Wf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = tk(p.index, {
                    onSuccess: g,
                    onFailure: m,
                    terminate: k
                }, c, d);
            if (!r) return null;
            g = r;
            m = 2 === p.lg ? k : r
        }
        if (f[Wb.Of] || f[Wb.Vh]) {
            var v =
                f[Wb.Of] ? Cc : c.pj,
                t = g,
                q = m;
            if (!v[a]) {
                e = Ra(e);
                var u = vk(a, v, e);
                g = u.onSuccess;
                m = u.onFailure
            }
            return function() {
                v[a](t, q)
            }
        }
        return e
    }

    function vk(a, b, c) {
        var d = [],
            e = [];
        b[a] = wk(d, e, c);
        return {
            onSuccess: function() {
                b[a] = xk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = yk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function wk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function xk(a) {
        a()
    }

    function yk(a, b) {
        b()
    };
    var Bk = function(a, b) {
        for (var c = [], d = 0; d < yc.length; d++)
            if (a[d]) {
                var e = yc[d];
                var f = dj(b.rb);
                try {
                    var g = tk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var m = c,
                            k = m.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = Dc[p];
                        k.call(m, {
                            Qg: n,
                            Gg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else zk(d, b), f()
                } catch (q) {
                    f()
                }
            }
        var v = b.rb;
        v.Z = !0;
        v.o >= v.s && bj(v);
        c.sort(Ak);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Ak(a, b) {
        var c, d = b.Gg,
            e = a.Gg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Qg,
                m = b.Qg;
            f = g > m ? 1 : g < m ? -1 : 0
        }
        return f
    }

    function zk(a, b) {
        if (!ek) return;
        var c = function(d) {
            var e = b.Ie(yc[d]) ? "3" : "4",
                f = Ic(yc[d][Wb.Tf], b, []);
            f && f.length && c(f[0].index);
            kk(b.id, yc[d], e);
            var g = Ic(yc[d][Wb.Wf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Ck = !1;
    var Ik = function(a) {
        var b = Pa(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (Ck) return !1;
            Ck = !0;
        }
        var g = re(c),
            m = !1;
        if (!g.active) {
            if ("gtm.js" !== d) return !1;
            m = !0;
            g = re(Number.MAX_SAFE_INTEGER)
        }
        jk(c,
            d);
        var k = a.eventCallback,
            n = a.eventTimeout,
            p = k;
        var r = {
            id: c,
            name: d,
            Ie: pe(g.isAllowed),
            pj: [],
            zg: function() {
                Bd(6)
            },
            gg: Dk(c),
            rb: new Zi(p, n)
        };
        r.fg = Ek();
        Fk(c, r.rb);
        var v = Nc(r);
        m && (v = Gk(v));
        var t = Bk(v, r);
        "gtm.js" !== d && "gtm.sync" !==
            d || pj(O.I);
        return Hk(v, t)
    };

    function Dk(a) {
        return function(b) {
            ek && (Vb(b) || sk(a, "input", b))
        }
    }

    function Fk(a, b) {
        ge(a, "event", 1);
        ge(a, "ecommerce", 1);
        ge(a, "gtm");
        ge(a, "eventModel");
    }

    function Ek() {
        var a = {};
        a.event = fe("event", 1);
        a.ecommerce = fe("ecommerce", 1);
        a.gtm = fe("gtm");
        a.eventModel = fe("eventModel");
        return a
    }

    function Gk(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Dd[String(yc[c][Wb.qb])] && (b[c] = !0);
        return b
    }

    function Hk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && yc[c] && !Ed[String(yc[c][Wb.qb])]) return !0;
        return !1
    }

    function Jk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return gg("" + c + b).href
        }
    }

    function Kk(a, b) {
        return Lk() ? Jk(a, b) : void 0
    }

    function Lk() {
        var a = !1;
        return a
    }

    function Mk() {
        return !!O.ed && "SGTM_TOKEN" !== O.ed.replaceAll("@@", "")
    };
    var Nk = function() {
        var a = !1;
        return a
    };
    var Ok;
    if (3 === O.dd.length) Ok = "g";
    else {
        var Pk = "G";
        Ok = Pk
    }
    var Qk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Ok,
            OPT: "o"
        },
        Rk = function(a) {
            var b = O.I.split("-"),
                c = b[0].toUpperCase(),
                d = Qk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === O.dd.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + O.dd + e
        };

    function Sk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Tk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Uk() {
        return fb("iPhone") && !fb("iPod") && !fb("iPad")
    };
    fb("Opera");
    fb("Trident") || fb("MSIE");
    fb("Edge");
    !fb("Gecko") || -1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") || fb("Trident") || fb("MSIE") || fb("Edge"); - 1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") && fb("Mobile");
    fb("Macintosh");
    fb("Windows");
    fb("Linux") || fb("CrOS");
    var Vk = la.navigator || null;
    Vk && (Vk.appVersion || "").indexOf("X11");
    fb("Android");
    Uk();
    fb("iPad");
    fb("iPod");
    Uk() || fb("iPad") || fb("iPod");
    eb().toLowerCase().indexOf("kaios");
    var Wk = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (m) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (m) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        Xk = function(a) {
            if (!a || !B.head) return null;
            var b, c;
            c = void 0 === c ? document : c;
            b = c.createElement("meta");
            B.head.appendChild(b);
            b.httpEquiv = "origin-trial";
            b.content = a;
            return b
        };
    var Yk = function() {};
    var Zk = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        $k = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.Z = 0;
            this.K = void 0 === b ? 500 : b;
            this.s = null
        };
    ka($k, Yk);
    var bl = function(a) {
        return "function" === typeof a.o.__tcfapi || null != al(a)
    };
    $k.prototype.addEventListener = function(a) {
        var b = {},
            c = ob(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.K && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.K));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Zk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            cl(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    $k.prototype.removeEventListener = function(a) {
        a && a.listenerId && cl(this, "removeEventListener", null, a.listenerId)
    };
    var el = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var m = c;
            2 === c ? (m = 0, 2 === g && (m = 1)) : 3 === c && (m = 1, 1 === g && (m = 0));
            var k;
            if (0 === m)
                if (a.purpose && a.vendor) {
                    var n = dl(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && dl(a.purpose.consents, b)
                } else k = !0;
            else k = 1 === m ? a.purpose && a.vendor ? dl(a.purpose.legitimateInterests,
                b) && dl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        dl = function(a, b) {
            return !(!a || !a[b])
        },
        cl = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (al(a)) {
                fl(a);
                var f = ++a.Z;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        al = function(a) {
            if (a.m) return a.m;
            a.m = Wk(a.o, "__tcfapiLocator");
            return a.m
        },
        fl = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" ===
                        typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Tk(a.o, a.s))
        };
    var gl = !0;
    gl = !1;
    var hl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        il = Sk("", 550),
        jl = Sk("", 500);

    function kl() {
        var a = R.tcf || {};
        return R.tcf = a
    }
    var ll = function(a, b) {
            this.s = a;
            this.m = b;
            this.o = Pa();
        },
        ml = function(a) {},
        nl = function(a) {},
        tl = function() {
            var a = kl(),
                b = new $k(l, gl ? 3E3 : -1),
                c = new ll(b, a);
            if ((ol() ? !0 === l.gtag_enable_tcf_support : !1 !== l.gtag_enable_tcf_support) && !a.active && ("function" === typeof l.__tcfapi || bl(b))) {
                a.active = !0;
                a.Cc = {};
                pl();
                var d = null;
                gl ? d = l.setTimeout(function() {
                    ql(a);
                    rl(a);
                    d = null
                }, jl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) ql(a), rl(a), ml(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = sl(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    m;
                                for (m in hl)
                                    if (hl.hasOwnProperty(m))
                                        if ("1" === m) {
                                            var k = e,
                                                n = !0;
                                            n = void 0 === n ? !1 : n;
                                            var p;
                                            var r = k;
                                            !1 === r.gdprApplies ? p = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Zk(r)), p = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" ===
                                                r.eventStatus) ? !0 : !1);
                                            g["1"] = p ? !1 === k.gdprApplies || "tcunavailable" === k.tcString || void 0 === k.gdprApplies && !n || "string" !== typeof k.tcString || !k.tcString.length ? !0 : el(k, "1", 0) : !1
                                        } else g[m] = el(e, m, hl[m]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Cc = f, rl(a), ml(c))
                        }
                    }), nl(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), ql(a), rl(a)
                }
            }
        };

    function ql(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        gl && (a.Cc = sl())
    }

    function pl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = il, a);
        Qe(b)
    }
    var ol = function() {
        var a = !1;
        a = !0;
        return a
    };

    function sl() {
        var a = {},
            b;
        for (b in hl) hl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function rl(a) {
        var b = {},
            c = (b.ad_storage = a.Cc["1"] ? "granted" : "denied", b);
        Se(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ul()
        })
    }
    var vl = function() {
            var a = kl();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        ul = function() {
            var a = kl();
            return a.active ? a.tcString || "" : ""
        },
        wl = function() {
            var a = kl();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        xl = function(a) {
            if (!hl.hasOwnProperty(String(a))) return !0;
            var b = kl();
            return b.active && b.Cc ? !!b.Cc[String(a)] : !0
        };
    var yl = function(a, b) {
            var c = a && !Te(L.C);
            return b && c ? "0" : b
        },
        Cl = function(a) {
            function b(q) {
                var u;
                R.reported_gclid || (R.reported_gclid = {});
                u = R.reported_gclid;
                var x, A = g;
                x = !g || Ge() && !Te(L.C) ? k + (q ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (q ? "gcu" : "gcs");
                if (!u[x]) {
                    u[x] = !0;
                    var w = [],
                        z = {},
                        y = function(I, J) {
                            J && (w.push(I + "=" + encodeURIComponent(J)), z[I] = !0)
                        },
                        C = "https://www.google.com";
                    if (Ge()) {
                        var F = Te(L.C);
                        y("gcs", Ue());
                        q && y("gcu", "1");
                        He() && y("gcd", Ve());
                        R.dedupe_gclid || (R.dedupe_gclid = "" + Xg());
                        y("rnd", R.dedupe_gclid);
                        if ((!k || n && "aw.ds" !== n) && Te(L.C)) {
                            var D = ei("_gcl_aw");
                            y("gclaw", D.join("."))
                        }
                        y("url", String(l.location).split(/[?#]/)[0]);
                        y("dclid", yl(d, p));
                        var E = !1;
                        E = !0;
                        F || !d && !E || (C = "https://pagead2.googlesyndication.com")
                    }
                    y("gdpr_consent",
                        ul()), y("gdpr", wl());
                    "1" === Ph(!1)._up && y("gtm_up", "1");
                    y("gclid", yl(d, k));
                    y("gclsrc", n);
                    if (!(z.gclid || z.dclid || z.gclaw) && (y("gbraid", yl(d, r)), z.gbraid && Al && (A = !1), !z.gbraid && Ge() && Te(L.C))) {
                        var P = ei("_gcl_gb");
                        0 < P.length && (y("gclgb", P.join(".")), Al && (A = !1))
                    }
                    y("gtm", Rk(!e));
                    g && Te(L.C) && (ih(f || {}), A && y("auid", dh[fh(f.prefix)] || ""));
                    Bl || a.md && y("did", a.md), a.Rb && y("gdid", a.Rb), a.Qb && y("edid", a.Qb);
                    var K = C + "/pagead/landing?" + w.join("&");
                    Kb(K)
                }
            }
            var c = !!a.ve,
                d = !!a.Ia,
                e = a.T,
                f = void 0 === a.sb ? {} : a.sb,
                g = void 0 === a.vd ? !0 : a.vd,
                m = ki(),
                k = m.gclid || "",
                n = m.gclsrc,
                p = m.dclid || "",
                r = m.gbraid || "",
                v = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || r),
                t = Ge();
            if (v || t) t ? bf(function() {
                b();
                Te(L.C) || af(function(q) {
                    return b(!0, q.consentEventId)
                }, L.C)
            }, [L.C]) : b()
        },
        zl = function(a) {
            var b = String(l.location).split(/[?#]/)[0],
                c = O.fh || l._CONSENT_MODE_SALT;
            return a ? c ? String(Dg(b + a + c)) : "0" : ""
        },
        Bl = !1;
    var Al = !1;
    var Dl = function(a) {
        if (!Ge() || De(L.C)) {
            a = a || {};
            ih(a, !1);
            var b = eh[fh(ii(a.prefix))];
            if (b && !(18E5 < Pa() - 1E3 * b.wg)) {
                var c = b.id,
                    d = c.split(".");
                if (2 === d.length && !(864E5 < Pa() - 1E3 * (Number(d[1]) || 0))) return c
            }
        }
    };
    var El = !1;
    var Fl = function() {
            this.m = {}
        },
        Gl = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        Hl = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Jl = function(a, b, c, d, e) {};
    var Ll = /[A-Z]+/,
        Ml = /\s/,
        Nl = function(a) {
            if (ta(a)) {
                a = Ka(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ll.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Ml.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            M: e
                        }
                    }
                }
            }
        },
        Pl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    Nl(a[c]);
                d && (b[d.id] = d)
            }
            Ol(b);
            var e = [];
            Da(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Ol(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Rl = function(a, b, c, d) {
            return (2 === Ql() || d || "http:" != l.location.protocol ? a : b) + c
        },
        Ql = function() {
            var a = zb(),
                b;
            if (1 === a) a: {
                var c = Hd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), m = 0; m < g.length && 100 > m; m++) {
                    var k = g[m].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Tl = function(a, b, c) {
            if (l[a.functionName]) return b.Pe && G(b.Pe), l[a.functionName];
            var d = Sl();
            l[a.functionName] = d;
            if (a.jd)
                for (var e = 0; e < a.jd.length; e++) l[a.jd[e]] = l[a.jd[e]] || Sl();
            a.ud && void 0 === l[a.ud] && (l[a.ud] = c);
            yb(Rl("https://", "http://", a.Ve), b.Pe, b.Vi);
            return d
        },
        Sl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ul = {
            functionName: "_googWcmImpl",
            ud: "_googWcmAk",
            Ve: "www.gstatic.com/wcm/loader.js"
        },
        Vl = {
            functionName: "_gaPhoneImpl",
            ud: "ga_wpid",
            Ve: "www.gstatic.com/gaphone/loader.js"
        },
        Wl = {
            ah: "",
            Wh: "5"
        },
        Xl = {
            functionName: "_googCallTrackingImpl",
            jd: [Vl.functionName, Ul.functionName],
            Ve: "www.gstatic.com/call-tracking/call-tracking_" + (Wl.ah || Wl.Wh) + ".js"
        },
        Yl = {},
        Zl = function(a, b, c, d) {
            Bd(22);
            if (c) {
                d = d || {};
                var e = Tl(Ul, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Qa && (f.autoreplace = c);
                e(2, d.Qa, f, c, 0, Oa(), d.options)
            }
        },
        $l = function(a, b, c, d) {
            Bd(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Oa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Yl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                            ak: g.M[0],
                            cl: g.M[1]
                        }, Yl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, Yl[g.id] = !0))
                }(e.gaData || e.adData) && Tl(Xl, d)(d.Qa, e, d.options)
            }
        },
        am = function() {
            var a = !1;
            return a
        },
        bm = function(a, b) {
            if (a)
                if (Nk()) {} else {
                    if (ta(a)) {
                        var c =
                            Nl(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(L.Eh);
                    if (f && va(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var m = Nl(f[g]);
                            m && (d.push(m), (a.id === m.id || a.id === a.containerId && a.containerId === m.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(L.Ff),
                            n;
                        if (k) {
                            va(k) ? n = k : n = [k];
                            var p = b.getWithConfig(L.Df),
                                r = b.getWithConfig(L.Ef),
                                v = b.getWithConfig(L.Gf),
                                t = b.getWithConfig(L.Dh),
                                q = p || r,
                                u = 1;
                            "UA" !== a.prefix || d || (u = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < u)
                                    if (d) $l(d, n[x], t, {
                                        Qa: q,
                                        options: v
                                    });
                                    else if ("AW" === a.prefix &&
                                a.M[1]) am() ? $l([a], n[x], t || "US", {
                                Qa: q,
                                options: v
                            }) : Zl(a.M[0], a.M[1], n[x], {
                                Qa: q,
                                options: v
                            });
                            else if ("UA" === a.prefix)
                                if (am()) $l([a], n[x], t || "US", {
                                    Qa: q
                                });
                                else {
                                    var A = a.containerId,
                                        w = n[x],
                                        z = {
                                            Qa: q
                                        };
                                    Bd(23);
                                    if (w) {
                                        z = z || {};
                                        var y = Tl(Vl, z, A),
                                            C = {};
                                        void 0 !== z.Qa ? C.receiver = z.Qa : C.replace = w;
                                        C.ga_wpid = A;
                                        C.destination = w;
                                        y(2, Oa(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var dm = function() {
            var a = R.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Pa() - b) return Promise.resolve(c)
            }
            var d = void 0;
            try {
                d = Promise.race([B.interestCohort().then(function(e) {
                    R.floc = {
                        ts: Pa(),
                        floc: e
                    };
                    return e
                }), new Promise(function(e) {
                    l.setTimeout(function() {
                        return e()
                    }, cm)
                })]).catch(function() {})
            } catch (e) {
                return
            }
            return d
        },
        fm = function() {
            if (!l.Promise) return !1;
            qa(B.interestCohort) || em || (em = !0, Xk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
            return qa(B.interestCohort)
        },
        em = !1,
        cm = Number("200");
    var jm = !1;

    function km() {
        if (qa(qb.joinAdInterestGroup)) return !0;
        jm || (Xk(''), jm = !0);
        return qa(qb.joinAdInterestGroup)
    }

    function lm(a, b) {
        var c = void 0;
        try {
            c = B.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Pa() - d) return
        } else try {
            if (50 <= B.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) return
        } catch (e) {}
        Ab(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Pa()
        }, c)
    };
    var jn = function() {
            var a = !0;
            xl(7) && xl(9) && xl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !hn() && (a = !1);
            return a
        },
        hn = function() {
            var a = !0;
            xl(3) && xl(4) || (a = !1);
            return a
        };
    var co = !1;

    function eo() {
        var a = R;
        return a.gcq = a.gcq || new fo
    }
    var go = function(a, b, c) {
            eo().register(a, b, c)
        },
        ho = function(a, b, c, d) {
            eo().push("event", [b, a], c, d)
        },
        io = function(a, b) {
            eo().push("config", [a], b)
        },
        jo = function(a, b, c, d) {
            eo().push("get", [a, b], c, d)
        },
        ko = {},
        lo = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1
        },
        mo = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.T = c || "";
            this.m = d;
            this.o = e
        },
        fo = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        no = function(a, b) {
            var c = Nl(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new lo
        },
        oo = function(a, b, c) {
            if (b) {
                var d = Nl(b);
                if (d && 1 === no(a, b).status) {
                    no(a, b).status = 2;
                    var e = {};
                    ek && (e.timeoutId = l.setTimeout(function() {
                        Bd(38);
                        Kj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    ko[d.containerId] = Pa();
                    if (Nk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + O.V + "&cx=c";
                        Mk() && (g += "&sign=" + O.ed);
                        var m = ("http:" != l.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = Kk(c, g) || m;
                        yb(k)
                    }
                }
            }
        },
        po = function(a, b, c, d) {
            if (d.T) {
                var e = no(a, d.T),
                    f = e.s;
                if (f) {
                    var g = H(c),
                        m = H(e.targetConfig[d.T]),
                        k = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.s),
                        r = be("gtm.uniqueEventId"),
                        v = Nl(d.T).prefix,
                        t = Ra(function() {
                            var u = g[L.Kb];
                            u && G(u)
                        }),
                        q = Jf(If(Kf(Hf(Ff(Gf(Ef(Df(Cf(g), m), k), n), p), function() {
                            rk(r, v, "2");
                            co && t()
                        }), function() {
                            rk(r, v, "3");
                            co && t()
                        }), function(u, x) {
                            a.D[u] = x
                        }), function(u) {
                            return a.D[u]
                        });
                    try {
                        rk(r, v, "1");
                        f(d.T, b, d.s, q)
                    } catch (u) {
                        rk(r, v, "4");
                    }
                }
            }
        };
    fo.prototype.register = function(a, b, c) {
        var d = no(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = Nl(a),
                f = ko[e.containerId];
            if (void 0 !== f) {
                var g = R[e.containerId].bootstrap,
                    m = e.prefix.toUpperCase();
                R[e.containerId]._spx && (m = m.toLowerCase());
                var k = be("gtm.uniqueEventId"),
                    n = m,
                    p = Pa() - g;
                if (ek && !Pj[k]) {
                    k !== Lj && (Gj(), Lj = k);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Tj = Tj ? Tj + "," + r : "&cl=" + r
                }
                delete ko[e.containerId]
            }
            this.flush()
        }
    };
    fo.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Pa() / 1E3);
        oo(this, c, b[0][L.ra] || this.s[L.ra]);
        c && no(this, c).m && (d = !1);
        this.m.push(new mo(a, e, c, b, d));
        d || this.flush()
    };
    fo.prototype.insert = function(a, b, c) {
        var d = Math.floor(Pa() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new mo(a, d, c, b, !1)) : this.m.push(new mo(a, d, c, b, !1))
    };
    fo.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.T || no(this, f.T).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== no(this, f.T).status && !a) {
                            this.m.push.apply(this.m, c);
                            return
                        }
                        ek && l.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Da(f.m[0], function(v, t) {
                            H(Xa(v, t), b.s)
                        });
                        break;
                    case "config":
                        e.Ja = {};
                        Da(f.m[0], function(v) {
                            return function(t, q) {
                                H(Xa(t, q), v.Ja)
                            }
                        }(e));
                        var g = !!e.Ja[L.Wc];
                        delete e.Ja[L.Wc];
                        var m =
                            no(this, f.T),
                            k = Nl(f.T),
                            n = k.containerId === k.id;
                        g || (n ? m.containerConfig = {} : m.targetConfig[f.T] = {});
                        m.m && g || po(this, L.ya, e.Ja, f);
                        m.m = !0;
                        delete e.Ja[L.Nb];
                        n ? H(e.Ja, m.containerConfig) : H(e.Ja, m.targetConfig[f.T]);
                        d = !0;
                        break;
                    case "event":
                        e.Gc = {};
                        Da(f.m[0], function(v) {
                            return function(t, q) {
                                H(Xa(t, q), v.Gc)
                            }
                        }(e));
                        po(this, f.m[1], e.Gc, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[L.Ma] = f.m[0], p[L.Xa] = f.m[1], p);
                        po(this, L.Ka, r, f)
                }
                this.m.shift();
                qo(this, f)
            }
            e = {
                Ja: e.Ja,
                Gc: e.Gc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var qo = function(a, b) {
        if ("require" !== b.type)
            if (b.T)
                for (var c = a.getCommandListeners(b.T)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], m = 0; m < g.length; m++) g[m]()
                    }
    };
    fo.prototype.getRemoteConfig = function(a) {
        return no(this, a).remoteConfig
    };
    fo.prototype.getCommandListeners = function(a) {
        return no(this, a).o
    };
    var uo = "HA GF G UA AW DC".split(" "),
        wo = !1;
    var xo = !1,
        yo = !1,
        zo = 0;

    function Ao(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = H(b), b[L.Kb] && (c.eventCallback = b[L.Kb]), b[L.Pc] && (c.eventTimeout = b[L.Pc]));
        return c
    }

    function Bo(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Od()
        });
        return a["gtm.uniqueEventId"]
    }

    function Co() {
        return xo
    }
    var Do = {
            config: function(a) {
                var b, c = Bo(a);
                return b
            },
            consent: function(a) {
                function b() {
                    Co() && H(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Bd(39);
                    var c = Od(),
                        d = a[1];
                    "default" === d ? (b(), Qe(a[2])) : "update" === d && (b(), Se(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ta(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ub(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Ao(b, c),
                        e = Bo(a);
                    d["gtm.uniqueEventId"] = e;
                    return d
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    yo = !0;
                    Co();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Bo(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Ub(a[1]) ? b = H(a[1]) : 3 == a.length && ta(a[1]) && (b = {}, Ub(a[2]) || va(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        Eo = {
            policy: !0
        };
    var Fo = function() {
        this.m = [];
        this.o = []
    };
    Fo.prototype.push = function(a, b, c) {
        var d = {
            Jj: c,
            message: a,
            yc: b,
            Fg: this.m.length + 1
        };
        this.m.push(d);
        for (var e = 0; e < this.o.length; e++) try {
            this.o[e](d)
        } catch (f) {}
    };
    Fo.prototype.yg = function(a) {
        this.o.push(a)
    };
    Fo.prototype.get = function() {
        for (var a = {}, b = 0; b < this.m.length; b++) {
            var c = this.m[b],
                d = a[c.yc];
            d || (d = [], a[c.yc] = d);
            d.push(c)
        }
        return a
    };
    Fo.prototype.get = Fo.prototype.get;
    Fo.prototype.listen = Fo.prototype.yg;
    Fo.prototype.push = Fo.prototype.push;

    function Go(a, b) {
        return a.yc - b.yc || a.Fg - b.Fg
    };
    var Ho = function(a) {
            var b = l[O.V].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Io = function(a) {
            var b = l[O.V],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Jo = !1,
        Ko = [];

    function Lo() {
        if (!Jo) {
            Jo = !0;
            for (var a = 0; a < Ko.length; a++) G(Ko[a])
        }
    }
    var Mo = function(a) {
        Jo ? G(a) : Ko.push(a)
    };
    var cp = function(a) {
        if (bp(a)) return a;
        this.m = a
    };
    cp.prototype.Di = function() {
        return this.m
    };
    var bp = function(a) {
        return !a || "object" !== Sb(a) || Ub(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    cp.prototype.getUntrustedUpdateValue = cp.prototype.Di;
    var dp = 0,
        ep, fp = {},
        gp = [],
        hp = [],
        ip = !1,
        jp = !1,
        kp = function(a) {
            return l[O.V].push(a)
        },
        lp = function(a, b) {
            var c = R[O.V],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = l.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (l.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function mp(a) {
        var b = a._clear;
        Da(a, function(d, e) {
            "_clear" !== d && (b && ee(d, void 0), ee(d, e))
        });
        Jd || (Jd = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Od(), a["gtm.uniqueEventId"] = c, ee("gtm.uniqueEventId", c));
        return Ik(a)
    }

    function np(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function op() {
        for (var a = !1; !jp && (0 < gp.length || 0 < hp.length);) {
            if (!ip && np(gp[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = gp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                gp.unshift(c, e);
                ip = !0
            }
            jp = !0;
            delete Zd.eventModel;
            ae();
            var g = null;
            null == g && (g = gp.shift());
            if (null != g) {
                var m = bp(g);
                if (m) {
                    var k = g;
                    g = bp(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], p = 0; p < n.length; p++) {
                        var r = n[p],
                            v = be(r, 1);
                        if (va(v) || Ub(v)) v = H(v);
                        $d[r] = v
                    }
                }
                try {
                    if (qa(g)) try {
                        g.call(ce)
                    } catch (C) {} else if (va(g)) {
                        var t = g;
                        if (ta(t[0])) {
                            var q = t[0].split("."),
                                u = q.pop(),
                                x = t.slice(1),
                                A = be(q.join("."), 2);
                            if (void 0 !== A && null !== A) try {
                                A[u].apply(A,
                                    x)
                            } catch (C) {}
                        }
                    } else {
                        if (Ea(g)) {
                            a: {
                                var w = g;
                                if (w.length && ta(w[0])) {
                                    var z = Do[w[0]];
                                    if (z && (!m || !Eo[w[0]])) {
                                        g = z(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                jp = !1;
                                continue
                            }
                        }
                        a = mp(g) || a;
                    }
                } finally {
                    m && ae(!0)
                }
            }
            jp = !1
        }
        return !a
    }

    function qp() {
        var b = op();
        try {
            Ho(O.I)
        } catch (c) {}
        return b
    }
    var tp = function() {
        var a = tb(O.V, []),
            b = tb("google_tag_manager", {});
        b = b[O.V] = b[O.V] || {};
        Xi(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }))
        });
        Mo(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < R.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f =
                        0; f < arguments.length; f++) e[f] = new cp(arguments[f])
            } else e = [].slice.call(arguments, 0);
            gp.push.apply(gp, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (Bd(4); 300 < this.length;) this.shift();
            var m = "boolean" !== typeof g || g;
            return op() && m
        };
        var d = a.slice(0);
        gp.push.apply(gp, d);
        if (rp()) {
            G(qp)
        }
    };
    var rp = function() {
        var a = !0;
        return a
    };

    function up(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Pa();
        return b < c + 3E5 && b > c - 9E5
    };
    var vp = function(a) {
        R.addTargetToGroup ? R.addTargetToGroup(a) : (R.pendingDefaultTargets = R.pendingDefaultTargets || [], R.pendingDefaultTargets.push(a))
    };
    var wp = {};
    wp.$c = new String("undefined");
    var xp = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === wp.$c ? b : a[d]);
            return c.join("")
        }
    };
    xp.prototype.toString = function() {
        return this.m("undefined")
    };
    xp.prototype.valueOf = xp.prototype.toString;
    wp.Xh = xp;
    wp.pe = {};
    wp.ni = function(a) {
        return new xp(a)
    };
    var yp = {};
    wp.fj = function(a, b) {
        var c = Od();
        yp[c] = [a, b];
        return c
    };
    wp.ig = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = yp[c];
            if (d && "function" === typeof d[b]) d[b]();
            yp[c] = void 0
        }
    };
    wp.Ji = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    wp.Yi = function(a) {
        if (a === wp.$c) return a;
        var b = Od();
        wp.pe[b] = a;
        return 'google_tag_manager["' + O.I + '"].macro(' + b + ")"
    };
    wp.Ti = function(a, b, c) {
        a instanceof wp.Xh && (a = a.m(wp.fj(b, c)), b = na);
        return {
            Gi: a,
            onSuccess: b
        }
    };
    var zp = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Lb(a, "className"),
                "gtm.elementId": a["for"] || Gb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Lb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Lb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Ap = function(a) {
            R.hasOwnProperty("autoEventsSettings") || (R.autoEventsSettings = {});
            var b = R.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Bp = function(a, b, c) {
            Ap(a)[b] = c
        },
        Cp = function(a, b, c, d) {
            var e = Ap(a),
                f = Qa(e, b, d);
            e[b] = c(f)
        },
        Dp = function(a, b, c) {
            var d = Ap(a);
            return Qa(d, b, c)
        };
    var Ep = ["input", "select", "textarea"],
        Fp = ["button", "hidden", "image", "reset", "submit"],
        Gp = function(a) {
            var b = a.tagName.toLowerCase();
            return !wa(Ep, function(c) {
                return c === b
            }) || "input" === b && wa(Fp, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        Hp = function(a) {
            return a.form ? a.form.tagName ? a.form : B.getElementById(a.form) : Jb(a, ["form"], 100)
        },
        Ip = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (Gp(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        };
    var Jp = !!l.MutationObserver,
        Kp = void 0,
        Lp = function(a) {
            if (!Kp) {
                var b = function() {
                    var c = B.body;
                    if (c)
                        if (Jp)(new MutationObserver(function() {
                            for (var e = 0; e < Kp.length; e++) G(Kp[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Eb(c, "DOMNodeInserted", function() {
                                d || (d = !0, G(function() {
                                    d = !1;
                                    for (var e = 0; e < Kp.length; e++) G(Kp[e])
                                }))
                            })
                        }
                };
                Kp = [];
                B.body ? b() : G(b)
            }
            Kp.push(a)
        };
    var Xp = l.clearTimeout,
        Yp = l.setTimeout,
        U = function(a, b, c, d) {
            if (Nk()) {
                b && G(b)
            } else return yb(a, b, c, d)
        },
        Zp = function() {
            return new Date
        },
        $p = function() {
            return l.location.href
        },
        aq = function(a) {
            return eg(gg(a), "fragment")
        },
        bq = function(a) {
            return fg(gg(a))
        },
        cq = function(a, b) {
            return be(a, b || 2)
        },
        dq = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = kp(a)) : d = kp(a);
            return d
        },
        eq = function(a, b) {
            l[a] = b
        },
        X = function(a, b,
            c) {
            b && (void 0 === l[a] || c && !l[a]) && (l[a] = b);
            return l[a]
        },
        fq = function(a, b, c) {
            return Kg(a, b, void 0 === c ? !0 : !!c)
        },
        gq = function(a, b, c) {
            return 0 === Tg(a, b, c)
        },
        hq = function(a, b) {
            if (Nk()) {
                b && G(b)
            } else Ab(a, b)
        },
        iq = function(a) {
            return !!Dp(a, "init", !1)
        },
        jq = function(a) {
            Bp(a, "init", !0)
        },
        kq = function(a) {
            var b = Hd,
                c = "?id=" + encodeURIComponent(a) + "&l=" + O.V;
            Mk() && (c += "&sign=" + O.ed, rb && (b = rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Rl("https://", "http://", b + c);
            U(d)
        },
        lq = function(a, b, c) {
            ek && (Vb(a) || sk(c, b, a))
        };
    var mq = wp.Ti;

    function Jq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Kq = new ya;

    function Lq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Kq.get(e);
            f || (f = new RegExp(b, d), Kq.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Mq(a, b) {
        function c(g) {
            var m = gg(g),
                k = eg(m, "protocol"),
                n = eg(m, "host", !0),
                p = eg(m, "port"),
                r = eg(m, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p) k = "web", p = "default";
            return [k, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Nq(a) {
        return Oq(a) ? 1 : 0
    }

    function Oq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Nq(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var m = 0; m < g.length; m++)
                                if (b[g[m]]) {
                                    f = b[g[m]](c);
                                    break a
                                }
                        } catch (k) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Jq(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Lq(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Mq(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Pq = encodeURI,
        Y = encodeURIComponent,
        Qq = Db;
    var Rq = function(a, b) {
        if (!a) return !1;
        var c = eg(gg(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Sq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function qs() {
        return l.gaGlobal = l.gaGlobal || {}
    }
    var rs = function() {
            var a = qs();
            a.hid = a.hid || xa();
            return a.hid
        },
        ss = function(a, b) {
            var c = qs();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Os = function() {
        if (qa(l.__uspapi)) {
            var a = "";
            try {
                l.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var mt = window,
        nt = document,
        ot = function(a) {
            var b = mt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === mt["ga-disable-" + a]) return !0;
            try {
                var c = mt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Eg("AMP_TOKEN", String(nt.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return nt.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var pt = {};

    function st(a) {
        delete a.eventModel[L.Nb];
        ut(a.eventModel)
    }
    var ut = function(a) {
        Da(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[L.Oa] || {};
        Da(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var xt = function(a, b, c) {
            ho(b, c, a)
        },
        yt = function(a, b, c) {
            ho(b, c, a, !0)
        },
        Ct = function(a, b) {};

    function zt(a, b) {}
    var Z = {
        g: {}
    };




    Z.g.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.h = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        lq(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();

    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(he(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.g.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.h = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = cq("gtm.referrer", 1) || B.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? eg(gg(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : bq(String(b)) : String(b)
            })
        }();

    Z.g.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.h = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : cq("gtm.url", 1)) || $p();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return bq(String(c));
                var e = gg(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        m = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? va(m) ?
                    n = m : n = String(m).replace(/\s+/g, "").split(",") : n = [String(m)];
                    for (var p = 0; p < n.length; p++) {
                        var r = eg(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != r && (!k || "" !== r)) {
                            f = r;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = eg(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = cq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                lq(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();


    Z.g.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.h = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
                    Wh()) && pi(a, g));
                mi(g);
                si(["aw", "dc"], g);
                Hi(g);
                var m = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    ri(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, m)
                }
                var n = cq(L.U);
                Cl({
                    ve: !1,
                    Ia: void 0 != n && !1 !== n,
                    sb: g,
                    vd: !0
                });
                b.vtp_enableUrlPassthrough && ui(["aw", "dc", "gb"])
            })
        }();


    Z.g.hl = ["google"],
        function() {
            function a(f) {
                return f.target && f.target.location && f.target.location.href ? f.target.location.href : $p()
            }

            function b(f, g) {
                Eb(f, "hashchange", function(m) {
                    var k = a(m);
                    g({
                        source: "hashchange",
                        state: null,
                        url: bq(k),
                        ca: aq(k)
                    })
                })
            }

            function c(f, g) {
                Eb(f, "popstate", function(m) {
                    var k = a(m);
                    g({
                        source: "popstate",
                        state: m.state,
                        url: bq(k),
                        ca: aq(k)
                    })
                })
            }

            function d(f, g, m) {
                var k = g.history,
                    n = k[f];
                if (qa(n)) try {
                    k[f] = function(p, r, v) {
                        n.apply(k, [].slice.call(arguments, 0));
                        m({
                            source: f,
                            state: p,
                            url: bq($p()),
                            ca: aq($p())
                        })
                    }
                } catch (p) {}
            }

            function e() {
                var f = {
                    source: null,
                    state: X("history").state || null,
                    url: bq($p()),
                    ca: aq($p())
                };
                return function(g) {
                    var m = f,
                        k = {};
                    k[m.source] = !0;
                    k[g.source] = !0;
                    if (!k.popstate || !k.hashchange || m.ca != g.ca) {
                        var n = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": g.source,
                            "gtm.oldUrlFragment": f.ca,
                            "gtm.newUrlFragment": g.ca,
                            "gtm.oldHistoryState": f.state,
                            "gtm.newHistoryState": g.state,
                            "gtm.oldUrl": f.url,
                            "gtm.newUrl": g.url
                        };
                        f = g;
                        dq(n)
                    }
                }
            }(function(f) {
                Z.__hl = f;
                Z.__hl.h = "hl";
                Z.__hl.isVendorTemplate = !0;
                Z.__hl.priorityOverride = 0
            })(function(f) {
                var g = X("self");
                if (!iq("hl")) {
                    var m = e();
                    b(g, m);
                    c(g, m);
                    d("pushState", g, m);
                    d("replaceState", g, m);
                    jq("hl")
                }
                G(f.vtp_gtmOnSuccess)
            })
        }();
    Z.g.awct = ["google"],
        function() {
            var a = !1;
            var b = !1;
            var c = !1,
                d = [],
                e = function(k) {
                    var n = X("google_trackConversion"),
                        p = k.gtm_onFailure;
                    "function" == typeof n ? n(k) || p() : p()
                },
                f = function() {
                    for (; 0 < d.length;) e(d.shift())
                },
                g = function() {
                    return function() {
                        f();
                        c = !1
                    }
                },
                m = function() {
                    return function() {
                        f();
                        d = {
                            push: e
                        };
                    }
                };
            (function(k) {
                Z.__awct = k;
                Z.__awct.h = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0
            })(function(k) {
                function n(W) {
                    I.google_gtm_experiments = I.google_gtm_experiments || {};
                    I.google_gtm_experiments[W] = !0
                }

                function p(W, oa, Ia) {
                    return "DATA_LAYER" === W ? cq(Ia) : k[oa]
                }

                function r() {
                    S("gdpr_consent", ul()), S("gdpr", wl());
                }

                function v() {
                    if (pg(k.vtp_conversionId)) {
                        var W = Pa(),
                            oa = vg();
                        if (0 !== oa.elements.length) {
                            for (var Ia = [], La = [], Ta = 0; Ta < oa.elements.length; ++Ta) {
                                var Ba = oa.elements[Ta];
                                Ia.push(Ba.querySelector);
                                La.push(wg(Ba))
                            }
                            var zc = Pa();
                            S("ec_sel", Ia.join(","));
                            S("ec_meta", La.join(","));
                            S("ec_lat", String(zc - W));
                            S("ec_s",
                                oa.status)
                        }
                    }
                }

                function t() {
                    if (k.vtp_enableEnhancedConversion) {
                        var W;
                        void 0 === k.vtp_dataSource ? W = k.vtp_cssProvidedEnhancedConversionValue || k.vtp_enhancedConversionObject : "DATA_OBJECT" === k.vtp_dataSource ? W = k.vtp_enhancedConversionObject : "INDIVIDUAL_FIELDS" === k.vtp_dataSource && (W = k.vtp_cssProvidedEnhancedConversionValue);
                        if (W) return {
                            enhanced_conversions_mode: "manual",
                            enhanced_conversions_manual_var: W
                        }
                    }
                }

                function q(W) {
                    var oa = [];
                    if (W) {
                        v();
                        if (u) {
                            var Ia = {};
                            k.vtp_conversionCookiePrefix && (Ia.prefix = k.vtp_conversionCookiePrefix);
                            ih(Ia);
                            S("auid", dh[fh(Ia.prefix)])
                        }
                    }
                    if ((k.vtp_enableEnhancedConversions || k.vtp_enableEnhancedConversion) && W && (!b || !Ii())) {
                        var Ta = Li(t());
                        Ta && oa.push(Ta.then(function(Ba) {
                            S("em", Ba.zc);
                            S("ec_mode", Ba.ye)
                        }))
                    }
                    if (oa.length) try {
                        Promise.all(oa).then(function() {
                            d.push(I)
                        });
                        return
                    } catch (Ba) {}
                    d.push(I)
                }
                var u = !k.hasOwnProperty("vtp_enableConversionLinker") || !!k.vtp_enableConversionLinker,
                    x = !!k.vtp_enableEnhancedConversions || !!k.vtp_enableEnhancedConversion,
                    A = Sq(k.vtp_customVariables, "name",
                        "value") || {};
                if (a) {} else {
                    ej();
                    var I = {
                            google_basket_transaction_type: "purchase",
                            google_conversion_domain: "",
                            google_conversion_id: k.vtp_conversionId,
                            google_conversion_label: k.vtp_conversionLabel,
                            google_conversion_value: k.vtp_conversionValue || 0,
                            google_remarketing_only: !1,
                            onload_callback: k.vtp_gtmOnSuccess,
                            gtm_onFailure: k.vtp_gtmOnFailure,
                            google_gtm: Rk()
                        },
                        J = Ri();
                    J &&
                        n("apcm");
                    if (!J) {
                        n("capi");
                        n("capiorig");
                    }
                    k.vtp_rdp && (I.google_restricted_data_processing = !0);
                    k.vtp_enableCustomParams && (I.google_custom_params = A);
                    var N = void 0 != cq(L.U) && !1 !== cq(L.U);
                    I.google_gtm_url_processor = function(W) {
                        N && (W = Ni(W));
                        return W =
                            Mi(W)
                    };
                    var M = function(W) {
                            return function(oa, Ia, La) {
                                var Ta = p(W, Ia, La);
                                Ta && (I[oa] = Ta)
                            }
                        },
                        T = M("JSON");
                    T("google_conversion_currency", "vtp_currencyCode");
                    T("google_conversion_order_id", "vtp_orderId");
                    k.vtp_enableProductReporting && (T = M(k.vtp_productReportingDataSource), T("google_conversion_merchant_id", "vtp_awMerchantId", "aw_merchant_id"), T("google_basket_feed_country", "vtp_awFeedCountry", "aw_feed_country"), T("google_basket_feed_language", "vtp_awFeedLanguage", "aw_feed_language"), T("google_basket_discount",
                        "vtp_discount", "discount"), T("google_conversion_items", "vtp_items", "items"), I.google_conversion_items && I.google_conversion_items.map && (I.google_conversion_items = I.google_conversion_items.map(function(W) {
                        return {
                            value: W.price,
                            quantity: W.quantity,
                            item_id: W.id
                        }
                    })));
                    var V = function(W, oa) {
                            (I.google_additional_params = I.google_additional_params || {})[W] = oa
                        },
                        S = function(W, oa) {
                            void 0 !== oa && ((I.google_additional_conversion_params = I.google_additional_conversion_params || {})[W] = oa)
                        },
                        ra = function(W) {
                            return function(oa,
                                Ia, La, Ta) {
                                var Ba = p(W, Ia, La);
                                Ta(Ba) && S(oa, Ba)
                            }
                        };
                    var sa = cq("developer_id"),
                        ja = Za(Ub(sa) ? sa : {});
                    ja && S("did", ja);
                    (function() {
                        if (!k.vtp_enableShippingData) return;
                        S("delopc", k.vtp_deliveryPostalCode);
                        S("oedeld", k.vtp_estimatedDeliveryDate);
                        S("delc", k.vtp_deliveryCountry);
                        S("shf", k.vtp_shippingFee);
                        if (k.vtp_enableProductReporting) {
                            var W = p(k.vtp_productReportingDataSource,
                                "vtp_items", "items");
                            S("iedeld", Qi(W))
                        }
                    })();
                    k.vtp_transportUrl && (I.google_transport_url = k.vtp_transportUrl);
                    var za = Kk(k.vtp_transportUrl, "/pagead/conversion_async.js");
                    za || (za = Pi() ? "https://www.google.com/pagead/conversion_async.js" : "//www.googleadservices.com/pagead/conversion_async.js");
                    k.vtp_enableNewCustomerReporting && (T = ra(k.vtp_newCustomerReportingDataSource), T("vdnc", "vtp_awNewCustomer", "new_customer", function(W) {
                        return void 0 != W && "" !== W
                    }), T("vdltv",
                        "vtp_awCustomerLTV", "customer_lifetime_value",
                        function(W) {
                            return void 0 != W && "" !== W
                        }));
                    u ? (k.vtp_conversionCookiePrefix && (I.google_gcl_cookie_prefix = k.vtp_conversionCookiePrefix), I.google_read_gcl_cookie_opt_out = !1) : I.google_read_gcl_cookie_opt_out = !0;
                    "1" === Ph(!1)._up && S("gtm_up", "1");
                    r();
                    (function() {})();
                    (function() {
                        var W = !1;
                        !Ge() || W ? q(!0) : bf(function() {
                            r();
                            var oa = Te(L.C),
                                Ia =
                                void 0 != cq(L.U) && !1 !== cq(L.U),
                                La = !1;
                            La = !0;
                            k.vtp_transportUrl || oa || !Ia && !La || (I.google_transport_url = "https://pagead2.googlesyndication.com/");
                            S("gcs", Ue());
                            He() && S("gcd", Ve());
                            q(oa);
                            oa || af(function() {
                                I = H(I);
                                r();
                                !k.vtp_transportUrl && I.google_transport_url && delete I.google_transport_url;
                                S("gcs", Ue());
                                He() && S("gcd", Ve());
                                S("gcu", "1");
                                q(!0)
                            }, L.C)
                        }, [L.C])
                    })();
                    c || (c = !0, U(za, m(), g(za)))
                }
            })
        }();




    Z.g.fsl = [],
        function() {
            function a() {
                var e = X("document"),
                    f = c(),
                    g = HTMLFormElement.prototype.submit;
                Eb(e, "click", function(m) {
                    var k = m.target;
                    if (k && (k = Jb(k, ["button", "input"], 100)) && ("submit" == k.type || "image" == k.type) && k.name && Gb(k, "value")) {
                        var n;
                        k.form ? k.form.tagName ? n = k.form : n = B.getElementById(k.form) : n = Jb(k, ["form"], 100);
                        n && f.store(n, k)
                    }
                }, !1);
                Eb(e, "submit", function(m) {
                    var k = m.target;
                    if (!k) return m.returnValue;
                    var n = m.defaultPrevented || !1 === m.returnValue,
                        p = b(k) && !n,
                        r = f.get(k),
                        v = !0;
                    if (d(k, function() {
                            if (v) {
                                var t;
                                r && (t = e.createElement("input"), t.type = "hidden", t.name = r.name, t.value = r.value, k.appendChild(t));
                                g.call(k);
                                t && k.removeChild(t)
                            }
                        }, n, p, r)) v = !1;
                    else return n || (m.preventDefault && m.preventDefault(), m.returnValue = !1), !1;
                    return m.returnValue
                }, !1);
                HTMLFormElement.prototype.submit = function() {
                    var m = this,
                        k = b(m),
                        n = !0;
                    d(m, function() {
                        n && g.call(m)
                    }, !1, k) && (g.call(m), n = !1)
                }
            }

            function b(e) {
                var f = e.target;
                return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0
            }

            function c() {
                var e = [],
                    f = function(g) {
                        return wa(e, function(m) {
                            return m.form ===
                                g
                        })
                    };
                return {
                    store: function(g, m) {
                        var k = f(g);
                        k ? k.button = m : e.push({
                            form: g,
                            button: m
                        })
                    },
                    get: function(g) {
                        var m = f(g);
                        return m ? m.button : null
                    }
                }
            }

            function d(e, f, g, m, k) {
                var n = Dp("fsl", g ? "nv.mwt" : "mwt", 0),
                    p;
                p = g ? Dp("fsl", "nv.ids", []) : Dp("fsl", "ids", []);
                if (!p.length) return !0;
                var r = zp(e, "gtm.formSubmit", p),
                    v = e.action;
                v && v.tagName && (v = e.cloneNode(!1).action);
                r["gtm.elementUrl"] = v;
                k && (r["gtm.formSubmitElement"] = k);
                if (m && n) {
                    if (!dq(r, lp(f, n), n)) return !1
                } else dq(r, function() {}, n || 2E3);
                return !0
            }(function(e) {
                Z.__fsl = e;
                Z.__fsl.h = "fsl";
                Z.__fsl.isVendorTemplate = !0;
                Z.__fsl.priorityOverride = 0
            })(function(e) {
                var f = e.vtp_waitForTags,
                    g = e.vtp_checkValidation,
                    m = Number(e.vtp_waitForTagsTimeout);
                if (!m || 0 >= m) m = 2E3;
                var k = e.vtp_uniqueTriggerId || "0";
                if (f) {
                    var n = function(r) {
                        return Math.max(m, r)
                    };
                    Cp("fsl", "mwt", n, 0);
                    g || Cp("fsl", "nv.mwt", n, 0)
                }
                var p = function(r) {
                    r.push(k);
                    return r
                };
                Cp("fsl", "ids", p, []);
                g || Cp("fsl", "nv.ids", p, []);
                iq("fsl") || (a(), jq("fsl"));
                G(e.vtp_gtmOnSuccess)
            })
        }();


    Z.g.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var m = e.shift(),
                                k = a(d, e, f, g);
                            if ("SCRIPT" == String(m.nodeName).toUpperCase() && "text/gtmscript" == m.type) {
                                var n = B.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = m.id;
                                n.text = m.text || m.textContent || m.innerHTML || "";
                                m.charset && (n.charset = m.charset);
                                var p = m.getAttribute("data-gtmsrc");
                                p && (n.src = p, ub(n, k));
                                d.insertBefore(n, null);
                                p || k()
                            } else if (m.innerHTML && 0 <= m.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var r = []; m.firstChild;) r.push(m.removeChild(m.firstChild));
                                d.insertBefore(m, null);
                                a(m, r, k, g)()
                            } else d.insertBefore(m, null), k()
                        } else f()
                    } catch (v) {
                        G(g)
                    }
                }
            }
            var c = function(d) {
                if (B.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        f = mq(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Gi,
                        m = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(g, m, e) : a(B.body, Ib(g), m, e)()
                } else Yp(function() {
                        c(d)
                    },
                    200)
            };
            Z.__html = c;
            Z.__html.h = "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0
        }();








    Z.g.evl = ["google"],
        function() {
            function a() {
                var f = Number(cq("gtm.start")) || 0;
                return Zp().getTime() - f
            }

            function b(f, g, m, k) {
                function n() {
                    if (!Sf(f.target)) {
                        g.has(d.cd) || g.set(d.cd, "" + a());
                        g.has(d.de) || g.set(d.de, "" + a());
                        var r = 0;
                        g.has(d.gd) && (r = Number(g.get(d.gd)));
                        r += 100;
                        g.set(d.gd, "" + r);
                        if (r >= m) {
                            var v = zp(f.target, "gtm.elementVisibility", [g.m]),
                                t = Uf(f.target);
                            v["gtm.visibleRatio"] = Math.round(1E3 * t) / 10;
                            v["gtm.visibleTime"] = m;
                            v["gtm.visibleFirstTime"] = Number(g.get(d.de));
                            v["gtm.visibleLastTime"] = Number(g.get(d.cd));
                            dq(v);
                            k()
                        }
                    }
                }
                if (!g.has(d.mc) && (0 == m && n(), !g.has(d.Ob))) {
                    var p = X("self").setInterval(n, 100);
                    g.set(d.mc, p)
                }
            }

            function c(f) {
                f.has(d.mc) && (X("self").clearInterval(Number(f.get(d.mc))), f.o(d.mc))
            }
            var d = {
                    mc: "polling-id-",
                    de: "first-on-screen-",
                    cd: "recent-on-screen-",
                    gd: "total-visible-time-",
                    Ob: "has-fired-"
                },
                e = function(f, g) {
                    this.element = f;
                    this.m = g
                };
            e.prototype.has = function(f) {
                return !!this.element.getAttribute("data-gtm-vis-" + f + this.m)
            };
            e.prototype.get = function(f) {
                return this.element.getAttribute("data-gtm-vis-" +
                    f + this.m)
            };
            e.prototype.set = function(f, g) {
                this.element.setAttribute("data-gtm-vis-" + f + this.m, g)
            };
            e.prototype.o = function(f) {
                this.element.removeAttribute("data-gtm-vis-" + f + this.m)
            };
            (function(f) {
                Z.__evl = f;
                Z.__evl.h = "evl";
                Z.__evl.isVendorTemplate = !0;
                Z.__evl.priorityOverride = 0
            })(function(f) {
                function g() {
                    var A = !1,
                        w = null;
                    if ("CSS" === k) {
                        try {
                            w = df(n)
                        } catch (D) {
                            Bd(46)
                        }
                        A = !!w && u.length != w.length
                    } else if ("ID" === k) {
                        var z = B.getElementById(n);
                        z && (w = [z], A = 1 != u.length || u[0] !== z)
                    }
                    w || (w = [], A = 0 < u.length);
                    if (A) {
                        for (var y =
                                0; y < u.length; y++) {
                            var C = new e(u[y], t);
                            c(C)
                        }
                        u = [];
                        for (var F = 0; F < w.length; F++) u.push(w[F]);
                        0 <= x && $f(x);
                        0 < u.length && (x = Zf(m, u, [v]))
                    }
                }

                function m(A) {
                    var w = new e(A.target, t);
                    A.intersectionRatio >= v ? w.has(d.Ob) || b(A, w, r, "ONCE" === q ? function() {
                        for (var z = 0; z < u.length; z++) {
                            var y = new e(u[z], t);
                            y.set(d.Ob, "1");
                            c(y)
                        }
                        $f(x);
                        if (p && Kp)
                            for (var C = 0; C < Kp.length; C++) Kp[C] === g && Kp.splice(C, 1)
                    } : function() {
                        w.set(d.Ob, "1");
                        c(w)
                    }) : (c(w), "MANY_PER_ELEMENT" === q && w.has(d.Ob) && (w.o(d.Ob), w.o(d.gd)), w.o(d.cd))
                }
                var k = f.vtp_selectorType,
                    n;
                "ID" === k ? n = String(f.vtp_elementId) : "CSS" === k && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    r = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    v = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    t = f.vtp_uniqueTriggerId,
                    q = f.vtp_firingFrequency,
                    u = [],
                    x = -1;
                g();
                p && Lp(g);
                G(f.vtp_gtmOnSuccess)
            })
        }();
    var Dt = {};
    Dt.macro = function(a) {
        if (wp.pe.hasOwnProperty(a)) return wp.pe[a]
    }, Dt.onHtmlSuccess = wp.ig(!0), Dt.onHtmlFailure = wp.ig(!1);
    Dt.dataLayer = ce;
    Dt.callback = function(a) {
        Md.hasOwnProperty(a) && qa(Md[a]) && Md[a]();
        delete Md[a]
    };
    Dt.bootstrap = 0;
    Dt._spx = !1;

    function Et() {
        R[O.I] = Dt;
        Sa(Nd, Z.g);
        Fc = Fc || wp;
        Gc = Oc
    }

    function Ft() {
        var a = !1;
        a && fj("INIT");
        ve().o();
        R = l.google_tag_manager = l.google_tag_manager || {};
        tl();
        Yh.enable_gbraid_cookie_write = !0;
        var b = !!R[O.I];
        if (b) {
            var c = R.zones;
            c && c.unregisterChild(O.I);
        } else {
            for (var g = data.resource || {}, m = g.macros || [], k = 0; k < m.length; k++) vc.push(m[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) yc.push(n[p]);
            for (var r = g.predicates || [], v = 0; v < r.length; v++) xc.push(r[v]);
            for (var t = g.rules || [], q = 0; q < t.length; q++) {
                for (var u = t[q], x = {}, A = 0; A < u.length; A++) x[u[A][0]] = Array.prototype.slice.call(u[A], 1);
                wc.push(x)
            }
            Dc = Z;
            Ec =
                Nq;
            Et();
            tp();
            Si = !1;
            Ti = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState) Vi();
            else {
                Eb(B, "DOMContentLoaded", Vi);
                Eb(B, "readystatechange", Vi);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !l.frameElement
                    } catch (D) {}
                    w && Wi()
                }
                Eb(l, "load", Vi)
            }
            Jo = !1;
            "complete" === B.readyState ? Lo() : Eb(l, "load", Lo);
            ek && l.setInterval(Yj, 864E5);
            Kd = (new Date).getTime();
            if (a) {
                var F = gj("INIT");
            }
        }
    }
    (function(a) {
        if (!l["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (B.referrer) {
                var c = gg(B.referrer);
                b = "cct.google" === dg(c, "host")
            }
            if (!b) {
                var d = Kg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (l["__TAGGY_INSTALLED"] = !0, yb("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var v = "GTM",
                    t = "GTM";
                var q = l["google.tagmanager.debugui2.queue"];
                q || (q = [], l["google.tagmanager.debugui2.queue"] = q, yb("https://" + O.Dd + "/debug/bootstrap?id=" + O.I + "&src=" + t + "&cond=" + r + "&gtm=" + Rk()));
                var u = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: rb,
                        containerProduct: v,
                        debug: !1,
                        id: O.I
                    }
                };
                u.data.resume = function() {
                    a()
                };
                O.eh && (u.data.initialPublish = !0);
                q.push(u)
            },
            g = void 0,
            m = eg(l.location, "query", !1, void 0, "gtm_debug");
        up(m) && (g = 2);
        if (!g && B.referrer) {
            var k = gg(B.referrer);
            "tagassistant.google.com" === dg(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Kg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = B.documentElement.getAttribute("data-tag-assistant-present");
            up(p) && (g = 5)
        }
        g && rb ? f(g) : a()
    })(Ft);

})()