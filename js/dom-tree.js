(function() {
    'use strict';
    var pageTree = {
        h1: 'Hello World!',
        p: 'DOM',
        mytag: 'Welcome to',
        b: ' JavaScript'
    };

    function createEvent() {
        var parent = document.getElementById('wrapper');
        var button = document.createElement('button');
        button.id = 'button-refresh';
        button.textContent = 'Refresh';
        parent.appendChild(button);
        button.addEventListener('click', buldingPage);
    }
    createEvent();

    function buldingPage() {
        var page = document.getElementById('wrapper');
        for (var key in pageTree) {
            var tag = key;
            var el = document.createElement(tag);
            page.appendChild(el);
            el.textContent = pageTree[key];
        }
        var button = document.getElementById('button-refresh');
        button.removeEventListener("click", buldingPage);
    }
})();