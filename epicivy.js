/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var isBouncyEnabled = true;
var customizations = {
    isChatEnabled: true,
    accountId: '2',
    appKey: 'cc1c57b0-50ab-11e9-813c-8131ea17b1dd',
    headerBackgroundColor: '#449ee3',
    headerTextColor: '#5c6d79',
    sendButtonBackgroundColor: '#1075c4',
    sendButtonTextColor: '#293239',
    closeButtonBackgroundColor: '#1b2126',
    chatQuestion: 'Can we help today1?',
    isPhoneEnabled: false,
};
var isCookieAvailable = function () {
    var epicIvyCookie = document.cookie.toString().split(';')
        .filter(function (cookie) { return cookie.includes('EpicIvy'); });
    return epicIvyCookie.length > 0;
};
var setCookie = function (daysToExpire, optionalParams) {
    if (daysToExpire === void 0) { daysToExpire = 1000; }
    if (optionalParams === void 0) { optionalParams = {}; }
    var cookieParams = __assign({ cookieId: generateCookieId(), appKey: customizations.appKey, chatQuestion: customizations.chatQuestion, isChatMinimized: false, isBouncyEnabled: true, accId: customizations.accountId }, optionalParams);
    var expirationTimestamp = new Date(Date.now() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = "EpicIvy=" + encodeURIComponent(JSON.stringify(cookieParams)) + ";expires=" + expirationTimestamp + ";path=/;";
};
var getCookie = function () {
    var epicIvyCookie = {};
    var cookieString = '';
    if (isCookieAvailable()) {
        cookieString = document.cookie.toString().split(';')
            .filter(function (cookie) { return cookie.includes('EpicIvy'); })[0].trim();
        epicIvyCookie = JSON.parse(decodeURIComponent(cookieString.split(';')[0].trim().split('=')[1]));
        return epicIvyCookie;
    }
    return epicIvyCookie;
};
var generateCookieId = function () {
    var time = new Date().getTime();
    var rand = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
    return time.toString() + rand.toString();
};
var parseQueryString = function (queryString) {
    var pm = queryString.split("?");
    if (pm.length <= 1)
        return {};
    var queryParams = pm[1].split('&');
    var queryParamsObject = {};
    var keyValuePair;
    queryParams.forEach(function (param) {
        keyValuePair = param.split('=');
        queryParamsObject[keyValuePair[0]] = keyValuePair[1];
    });
    return queryParamsObject;
};
var postDataToLogService = function (infoType) {
    var queryStringSuffix = '';
    var epicIvyCookie = getCookie();
    var cookieId = epicIvyCookie.cookieId;
    var queryParams = parseQueryString(window.location.href);
    if (queryParams.hasOwnProperty('gclid')) {
        queryStringSuffix = "AccountId=" + customizations.accountId + "&CookieId=" + cookieId + "&InfoType=" + infoType + "&LandingPageUrl=" + encodeURIComponent(window.location.href) + "&ReferringPageUrl=" + encodeURIComponent(document.referrer) + "&gclid=" + queryParams.gclid + "&MarketingType=" + queryParams.utm_source + "&language=" + navigator.language + "&appKey=" + customizations.appKey + "&TimeStamp=" + new Date().getTime();
    }
    else {
        if (queryParams.hasOwnProperty('msclkid')) {
            queryStringSuffix = "AccountId=" + customizations.accountId + "&CookieId=" + cookieId + "&InfoType=" + infoType + "&LandingPageUrl=" + encodeURIComponent(window.location.href) + "&ReferringPageUrl=" + encodeURIComponent(document.referrer) + "&msclkid=" + queryParams.msclkid + "&MarketingType=" + queryParams.utm_source + "&language=" + navigator.language + "&appKey=" + customizations.appKey + "&TimeStamp=" + new Date().getTime();
        }
        else {
            if (queryParams.hasOwnProperty('utm_source')) {
                queryStringSuffix = "AccountId=" + customizations.accountId + "&CookieId=" + cookieId + "&InfoType=" + infoType + "&LandingPageUrl=" + encodeURIComponent(window.location.href) + "&ReferringPageUrl=" + encodeURIComponent(document.referrer) + "&MarketingType=" + queryParams.utm_source + "&language=" + navigator.language + "&appKey=" + customizations.appKey + "&TimeStamp=" + new Date().getTime();
            }
            else {
                if (queryParams.hasOwnProperty('c')) {
                    queryStringSuffix = "AccountId=" + customizations.accountId + "&CookieId=" + cookieId + "&InfoType=" + infoType + "&LandingPageUrl=" + encodeURIComponent(window.location.href) + "&ReferringPageUrl=" + encodeURIComponent(document.referrer) + "&MarketingType=campaign&language=" + navigator.language + "&appKey=" + customizations.appKey + "&TimeStamp=" + new Date().getTime();
                }
                else {
                    queryStringSuffix = "AccountId=" + customizations.accountId + "&CookieId=" + cookieId + "&InfoType=" + infoType + "&LandingPageUrl=" + encodeURIComponent(window.location.href) + "&ReferringPageUrl=" + encodeURIComponent(document.referrer) + "&language=" + navigator.language + "&appKey=" + customizations.appKey + "&TimeStamp=" + new Date().getTime();
                }
            }
        }
    }
    var request = new XMLHttpRequest();
    request.open('GET', 'https://' + "script.eivy.io" + '/embed/collect.gif?' + queryStringSuffix, true);
    request.send();
};
var getIpAddress = function () {
    var ipAddress = 0;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://freegeoip.net/json/', true);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            ipAddress = JSON.parse(request.responseText).ip;
        }
    };
    return ipAddress;
};
var mapStylesJsonToCss = function (customizations) {
    return "\n    .ei-live-chat  {\n        font-size:12px !important;\n        color: #9a9a9a;\n        font: 100%/1.5em \"Droid Sans\", sans-serif;\n        margin: 0;\n        bottom: 0;\n        font-size: 15px;\n        right: 24px;\n        position: fixed;\n        width: 300px!important;\n        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n   }\n\n   @media screen and (max-width: 480px) {\n    .ei-live-chat {\n        position: absolute;\n        /* margin: 0 auto; */\n        /* right: 28px; */\n        bottom: 0px;\n        /* height: 222px; */\n        overflow: auto;\n        z-index: 99999;\n        height: 100%;\n        width: 100% !important;\n        left: 0px;\n    }\n    .chat {\n        background: #fff;\n        padding: 20px;\n        height: calc(var(--vh, 1vh) * 100);\n        width: 100%;\n        position: relative;\n    }\n    .ei-live-chat header {\n        background: #f18d19!important;\n        color: #ffffff!important;\n        cursor: pointer;\n        padding: 10px 0px 10px 0px;\n        width: 100% !important;\n        max-width: 100% !important;\n    }\n    .ei-chat-message{\n        width: 100% !important;\n    }\n    .ei-chat-history{\n        height: 725px !important;\n        overflow: auto;\n        width:100% !important;\n    }\n   }\n\n    a {\n        text-decoration: none;\n   }\n    hr {\n        background: #e9e9e9;\n        border: 0;\n        -moz-box-sizing: content-box;\n        box-sizing: content-box;\n        height: 1px;\n        margin: 0;\n        min-height: 1px;\n   }\n    input {\n        border: 0;\n        color: inherit;\n        font-family: inherit;\n        font-size: 100%;\n        line-height: normal;\n        margin: 0;\n   }\n    textArea {\n    border: 0;\n    color: inherit;\n    font-family: inherit;\n    font-size: 100%;\n    line-height: normal;\n    margin: 0;\n   }\n    p {\n        margin: 0;\n   }\n    .clearfix {\n        *zoom: 1;\n   }\n   /* For IE 6/7 */\n    .clearfix:before, .clearfix:after {\n        content: \"\";\n        display: table;\n   }\n    .clearfix:after {\n        clear: both;\n   }\n\n   #bouncyImage {\n    bottom: 0;\n    right: 24px;\n    height: 155px;\n    width: 85px;\n    position: fixed;\n    }\n   .ei-live-chat header {\n        background: " + customizations.headerBackgroundColor + "!important ;\n        color: " + customizations.headerTextColor + "!important ;\n        cursor: pointer;\n        padding: 10px 0px 10px 0px;\n        width: 300px;\n        max-width:300px;\n   }\n    div#branding {\n        font-size:12px;\n   }\n\n    .ei-labelEmail{\n     margin-top:20px;\n     margin-bottom:5px;\n     font-weight:bold;\n     color:grey;\n   }\n    .ei-labelQuestion {\n        width:100%;\n        margin-bottom:5px;\n        font-weight:bold;\n        color:grey;\n   }\n   .ei-live-chat input[type=\"text\"] {\n        border: 1px solid #ccc;\n        outline: none;\n        width: 100%;\n        font-size:12px;\n        height:32px;\n        margin-bottom: 20px;\n   }\n    .ei-chat-close {\n        background: " + customizations.closeButtonBackgroundColor + " !important;\n        border-radius: 50%;\n        color: #fff;\n        display: block;\n        float: right;\n        height: 16px;\n        line-height: 16px;\n        font-size: 18px;\n        margin: 2px 10px 0 0;\n        text-align: center;\n        width: 16px;\n   }\n   .ei-chat-header-text{\n        margin-left: 10px;\n   }\n    .ei-chat-minimize {\n        background: " + customizations.closeButtonBackgroundColor + " !important;\n        border-radius: 50%;\n        color: #fff;\n        display: block;\n        float: right;\n        font-size: 18px;\n        height: 16px;\n        line-height: 16px;\n        margin: 2px 0 0 0;\n        text-align: center;\n        width: 16px;\n        margin-right: 5px;\n   }\n    .chat {\n        background: #fff;\n        padding: 20px;\n   }\n    .ei-chat-remove-class {\n        height: 0px;\n   }\n\n    .ei-chat-history {\n      height: 275px;\n      overflow: auto;\n      display:none;\n      width:260px;\n   }\n\n    .wrapper {\n        width: 100%;\n        padding-left: 0px;\n        padding-right: 0px; \n        }\n\n        .ei-chat-message-content{\n            width:100%;\n        }\n\n\n    .ei-chat-message {\n        margin: 10px 0;\n        -webkit-transition: all .25s ease-in;\n        box-shadow: 0px 3px 10px #dbddde;\n        -webkit-box-shadow: 0px 3px 10px #dbddde;\n        border: 1px solid rgba(0, 0, 0, 0.125);\n        background-color: #fff;\n        box-shadow: 2px 1px #c1bebe;\n        -webkit-box-shadow: 1px 1px #c1bebe;\n              padding: 10px;\n        overflow: auto;\n        width: 240px;\n   }\n   \n   \n    .ei-chat-time {\n        float: right;\n        font-size: 12px;\n   }\n   \n    .ei-chatSendButton {\n        background-color: " + customizations.sendButtonBackgroundColor + " !important;\n        border: none;\n        color: " + customizations.sendButtonTextColor + " !important;\n        padding: 10px;\n        text-align: center;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 14px;\n        cursor: pointer;\n        -webkit-transition: all .25s ease-in;\n        box-shadow: 0px 3px 10px #dbddde;\n        -webkit-box-shadow: 0px 3px 10px #dbddde;\n        width: 100%;\n        margin-bottom: 20px !important;\n        margin-top: 20px !important;\n   }\n\n    .ei-automated-header-text{\n        font-size:14px;\n        color:#4a4949;\n        font-weight: 600;\n    }\n\n    .ei-automated-message{\n        font-size:12px;\n        color:#181717;\n        opacity:0.5;\n    }\n    .ei-chatInputField {\n        max-width: 100%;\n        color: black;\n   }\n   .ei-chatInputField-required {\n    max-width: 100%;\n    color: black;\n    background-color:pink;\n   }\n   .ei-chatTextArea {\n        font-size: 12px;\n        width: 100%;\n        border: 1px solid #ccc;\n        padding: 0px;\n        font-family: inherit;\n        margin-bottom: 10px;\n        height:90px;\n        outline:none;\n        color: black;\n    }\n    .ei-chatTextArea-required {\n        font-size: 12px;\n        width: 100%;\n        border: 1px solid #ccc;\n        padding: 0px;\n        font-family: inherit;\n        margin-bottom: 10px;\n        height:90px;\n        outline:none;\n        background-color:pink;\n        color: black;\n    }\n   .epic-ivy-bounce {\n    position: absolute;\n    bottom: 30px;\n    width: 60px;\n    height: 60px ;\n    margin-left:-30px;\n    animation: 8s infinite ease-in-out;\n    -webkit-animation: bounce 8s infinite ease-in-out;\n    -moz-animation: bounce 8s infinite ease-in-out;\n    -o-animation: bounce 8s infinite ease-in-out;\n   }\n    \n   @-webkit-keyframes bounce {\n\t0%{transform:translateY(0)}\n\t2.5%{transform:translateY(0)}\n\t5%{transform:translateY(-30px)}\n\t6.25%{transform:translateY(0)}\n\t7.5%{transform:translateY(-15px)}\n\t10%{transform:translateY(0)}\n\t12.5%{transform:translateY(0)}\n\t100%{transform:translateY(0)}\n   }\n    \n   @-moz-keyframes bounce {\n\t0%{transform:translateY(0)}\n\t2.5%{transform:translateY(0)}\n\t5%{transform:translateY(-30px)}\n\t6.25%{transform:translateY(0)}\n\t7.5%{transform:translateY(-15px)}\n\t10%{transform:translateY(0)}\n\t12.5%{transform:translateY(0)}\n\t100%{transform:translateY(0)}\n   }\n    \n   @-o-keyframes bounce {\n\t0%{transform:translateY(0)}\n\t2.5%{transform:translateY(0)}\n\t5%{transform:translateY(-30px)}\n\t6.25%{transform:translateY(0)}\n\t7.5%{transform:translateY(-15px)}\n\t10%{transform:translateY(0)}\n\t12.5%{transform:translateY(0)}\n\t100%{transform:translateY(0)}\n   }\n\n   @keyframes bounce {\n\t0%{transform:translateY(0)}\n\t2.5%{transform:translateY(0)}\n\t5%{transform:translateY(-30px)}\n\t6.25%{transform:translateY(0)}\n\t7.5%{transform:translateY(-15px)}\n\t10%{transform:translateY(0)}\n\t12.5%{transform:translateY(0)}\n\t100%{transform:translateY(0)}\n  }\n  .ei-chat-history::-webkit-scrollbar {\n    width: 3px;\n  }\n \n  /* Track */\n  .ei-chat-history::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n    -webkit-border-radius: 0px;\n    border-radius: 10px;\n  }\n \n  /* Handle */\n  .ei-chat-history::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 0px;\n    border-radius: 0px;\n    background: rgba(236, 236, 236, 0.8); \n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n  }\n  .ei-chat-history::-webkit-scrollbar-thumb:window-inactive {\n\tbackground: rgba(236, 236, 236, 0.8); \n  }\n";
};
var setupChat = function (isChatClosed) {
    if (isChatClosed === void 0) { isChatClosed = true; }
    // Chat HTML Related variables
    var documentHeadSection = document.head || document.getElementsByTagName('head')[0];
    var mainChatWindow = document.createElement('div');
    var bouncyImageElement = document.createElement('img');
    var chatBoxStyleElement = document.createElement('style');
    mainChatWindow.id = 'mainChat';
    var chatWindowHTML = "\n    <div id=\"live-chat\" class=\"ei-live-chat\">\n        <header id=\"chatBoxHeader\" class=\"clearfix header\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <a id=\"chatBoxCloseBtn\" class=\"ei-chat-close\">x</a>\n            <a id=\"chatBoxMinimizeBtn\" class=\"ei-chat-minimize\">-</a>\n            <div class=\"ei-chat-header-text\">Chat With Us!</div>\n        </header>\n        <div id=\"chatContentWindow\" class=\"chat " + (isChatClosed ? 'ei-chat-remove-class' : '') + "\">\n            <div id=\"chatHistoryWindow\" class=\"ei-chat-history\">\n            </div>\n            <!-- end ei-chat-history -->\n            <div id=\"chatInputsContainer\" class=\"wrapper\">\n                <div id=\"labelemail\" class=\"ei-labelEmail\">E mail</div>\n                <input id=\"chatEmail\" class=\"ei-chatInputField\" required type=\"text\" placeholder=\"Type your email...\" autofocus>\n                <br />\n\n                <div id=\"labelquestion\"  class=\"ei-labelQuestion\">Question</div>\n                <textarea id=\"chatProblem\" class=\"ei-chatTextArea\" required type=\"text\" placeholder=\"" + (customizations.chatQuestion !== '' ? customizations.chatQuestion.toString() : "Type your problem...") + "\"></textarea>\n            </div>\n            <button id=\"chatSendButton\" class=\"ei-chatSendButton\">Send</button>\n        <div id=\"branding\" class=\"epicivy\" <p>Powered by Epic Ivy</p></div>\n        <!-- end chat -->\n    </div>\n    <!-- end live-chat -->\n    ";
    var chatBoxCSS = mapStylesJsonToCss(customizations);
    var chatLogicScript = document.createElement('script');
    chatLogicScript.src = 'https://' + "script.eivy.io" + '/embed/chat.js';
    chatLogicScript.id = 'chat';
    chatBoxStyleElement.type = 'text/css';
    chatBoxStyleElement.appendChild(document.createTextNode(chatBoxCSS));
    documentHeadSection.appendChild(chatBoxStyleElement);
    mainChatWindow.innerHTML = chatWindowHTML;
    bouncyImageElement.src = 'https://' + "script.eivy.io" + '/embed/' + customizations.accountId + '/default/default.png';
    bouncyImageElement.id = 'bouncyImage';
    bouncyImageElement.className = 'epic-ivy-bounce';
    var EI_cookie = getCookie();
    bouncyImageElement.addEventListener('click', function () {
        var vh = window.innerHeight * 0.01;
        alert(vh);
        document.addEventListener('resize', function () {
            // We execute the same script as before
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + "px");
            alert('resized');
        });
        mainChatWindow.style.display = 'block';
        bouncyImageElement.style.display = 'none';
        document.body.appendChild(chatLogicScript);
    });
    document.body.appendChild(mainChatWindow);
    document.body.appendChild(bouncyImageElement);
    if (EI_cookie.isBouncyEnabled) {
        mainChatWindow.style.display = 'none';
        bouncyImageElement.style.display = 'block';
    }
    else {
        mainChatWindow.style.display = 'block';
        bouncyImageElement.style.display = 'none';
    }
    var chatHistoryWindowElement = document.getElementById('chatHistoryWindow');
    var chatBoxCloseButtonElement = document.getElementById('chatBoxCloseBtn');
    var chatContentWindowElement = document.getElementById('chatContentWindow');
    var chatBoxMinimizeElement = document.getElementById('chatBoxMinimizeBtn');
    var chatProblemElement = document.getElementById('chatProblem');
    var chatSendButtonElement = document.getElementById('chatSendButton');
    var chatEmailElement = document.getElementById('chatEmail');
    if (!isChatClosed) {
        document.body.appendChild(chatLogicScript);
        if (chatBoxMinimizeElement && chatContentWindowElement) {
            chatBoxMinimizeElement.addEventListener('click', function () {
                var EI_cookie = getCookie();
                if (EI_cookie.isBouncyEnabled === false) {
                    EI_cookie.isChatMinimized = !EI_cookie.isChatMinimized;
                }
                setCookie(1000, EI_cookie);
                if (!document.getElementById('chatLogic')) {
                    document.body.appendChild(chatLogicScript);
                }
                chatContentWindowElement.classList.toggle('ei-chat-remove-class');
            });
        }
    }
    if (chatProblemElement) {
        chatProblemElement.addEventListener('keypress', function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) { //Enter keycode
                e.preventDefault();
                if (chatSendButtonElement) {
                    chatSendButtonElement.click();
                }
            }
        });
    }
};
exports.validateEmailRequired = function (element) {
    // Validate Email
    var email = element.value;
    if (email == "" || email == null) {
        element.className = "ei-chatInputField-required";
    }
    else if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
        element.className = "ei-chatInputField-required";
    }
    else {
        element.className = "ei-chatInputField";
    }
};
exports.validateQuestionRequired = function (element) {
    // Validate Question
    var Question = element.value.trim();
    if (Question == null || Question == "") {
        element.className = "ei-chatTextArea-required";
    }
    else {
        element.className = "ei-chatTextArea";
    }
};
var setupCalls = function () {
    var chatLogicScript = document.createElement('script');
    chatLogicScript.src = "https://" + "script.eivy.io" + "/embed/swap.js";
    chatLogicScript.id = 'epicswap';
    document.body.appendChild(chatLogicScript);
};
exports.setupEpicIvy = function () {
    var EI_cookie = null;
    if (isCookieAvailable()) {
        EI_cookie = getCookie();
        EI_cookie.appKey = customizations.appKey;
        EI_cookie.chatQuestion = customizations.chatQuestion;
        setCookie(1000, EI_cookie);
        postDataToLogService('LandingPage');
    }
    else {
        setCookie();
        if (isCookieAvailable()) {
            EI_cookie = getCookie();
            EI_cookie.appKey = customizations.appKey;
            EI_cookie.chatQuestion = customizations.chatQuestion;
            setCookie(1000, EI_cookie);
            postDataToLogService('NewCookie');
        }
    }
    if (customizations.isPhoneEnabled && customizations.isPhoneEnabled === true) {
        setupCalls();
    }
    if (customizations.isChatEnabled && customizations.isChatEnabled === true) {
        if (EI_cookie && !EI_cookie.isBouncyEnabled) {
            setupChat(EI_cookie.isChatMinimized);
        }
        else {
            setupChat(false);
        }
    }
};
if (document.readyState != 'loading') {
    exports.setupEpicIvy();
}
else {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function (event) {
            exports.setupEpicIvy();
        });
    }
    // else { if (typeof document.attachEvent  === 'function'){
    //     document.attachEvent('onreadystatechange', function(){
    //      if (document.readyState === 'complete' || document.readyState === 'interactive') 
    //         setupEpicIvy();
    //     });
    //     }
    // }
}


/***/ })

/******/ });