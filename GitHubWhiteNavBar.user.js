// ==UserScript==
// @name         GitHub's Black Navbar to White
// @namespace    https://victorli.nl
// @version      1.2
// @description  Change GitHub's black navbar back to the original white
// @author       Victor Li
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

/*jshint multistr: true */

GM_addStyle('\
.Header {\
	background-color: #f5f5f5;\
	border-bottom: 1px solid #e5e5e5;\
}\
\
.HeaderNavlink {\
	color: #555;\
}\
.HeaderNavlink:hover {\
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
.HeaderNavlink:hover .dropdown-caret, .HeaderNavlink:focus .dropdown-caret {\
    border-top-color: #4078c0;\
}\
.HeaderNavlink:hover .octicon-plus, .HeaderNavlink:focus .octicon-plus {\
    border-top-color: #4078c0;\
}\
.HeaderNavlink:hover, .HeaderNavlink:focus {\
    color: #4078c0;\
}\
.Header .header-search-wrapper {\
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
.Header .header-search-input::placeholder {\
    color: #999;\
}\
.Header .header-search-input::-webkit-input-placeholder {\
    color: #999;\
}\
.Header .header-search-scope {\
    font-size: 12px;\
    line-height: 20px;\
    color: #767676;\
    border-right-color: #eee;\
}\
.Header .header-search-wrapper.focus .header-search-scope {\
    color: #4078c0;\
    border-right-color: #c6d7ec;\
}\
.notification-indicator .mail-status {\
    border: 2px solid #f3f3f3;\
}\
');
