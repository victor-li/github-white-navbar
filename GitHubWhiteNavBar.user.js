// ==UserScript==
// @name         GitHub's Black Navbar to White
// @namespace    https://victorli.nl
// @version      1.1.1
// @description  Change GitHub's black navbar back to the original white
// @author       Victor Li
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

/*jshint multistr: true */

GM_addStyle('\
.header {\
	background-color: #f5f5f5;\
	border-bottom: 1px solid #e5e5e5;\
}\
\
.header-navlink {\
	color: #555;\
}\
.header-navlink:hover {\
    color: #4078c0;\
}\
.header-logo-invertocat {\
	color: #555;\
}\
.header-logo-invertocat:hover {\
    color: #4078c0;\
}\
.header-logo-wordmark {\
	color: #555;\
}\
.header-logo-wordmark:hover {\
    color: #4078c0;\
}\
.header-navlink:hover .dropdown-caret, .header-navlink:focus .dropdown-caret {\
    border-top-color: #4078c0;\
}\
.header-navlink:hover .octicon-plus, .header-navlink:focus .octicon-plus {\
    border-top-color: #4078c0;\
}\
.header-navlink:hover, .header-navlink:focus {\
    color: #4078c0;\
}\
.header .header-search-wrapper {\
    min-height: 0;\
    font-size: 14px;\
    color: #333;\
    background-color: #fff;\
    border: 1px solid #ddd;\
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);\
}\
.header-search-input::placeholder {\
    color: #333;\
}\
.header .header-search-input::placeholder {\
    color: #999;\
}\
.header .header-search-input::-webkit-input-placeholder {\
    color: #999;\
}\
.header .header-search-scope {\
    font-size: 12px;\
    line-height: 20px;\
    color: #767676;\
    border-right-color: #eee;\
}\
.header .header-search-wrapper.focus .header-search-scope {\
    color: #4078c0;\
    border-right-color: #c6d7ec;\
}\
.notification-indicator .mail-status {\
    border: 2px solid #f3f3f3;\
}\
');
