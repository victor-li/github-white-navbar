# GitHub White Navigation Bar

Do you also dislike the new black navigation bar of GitHub?
Change it back to the original white color!

1. Install [TamperMonkey](https://tampermonkey.net) for your browser.
2. Add this script to TamperMonkey (`Create a new script...`):
3. Enjoy GitHub's original theme!

```
// ==UserScript==
// @name         GitHub's Black Navbar to White
// @namespace    https://victorli.nl
// @version      1.0
// @description  Change GitHub's black navbar back to the original white
// @author       Victor Li
// @match        https://github.com/*
// @run-at document-start
// ==/UserScript==

// Remove class as soon as possible
document.getElementsByClassName('header')[0].classList.remove('header-dark');

// In case that the previous line ran too fast
window.addEventListener('load', function() {
    document.getElementsByClassName('header')[0].classList.remove('header-dark');
}, false);
```
