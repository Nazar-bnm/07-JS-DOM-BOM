(function() {
    'use strict';
    var page = {
        'div': {
            'h1': 'Hello World!',
            'p': 'It\'s test'
        },
        'span': 'Some text',
        'form': {
            'div': {
                'label': {
                    '@for': 'user-name',
                    '@class': 'row',
                    'span': 'Your Name: '
                },
                'input': {
                    '@type': 'text',
                    '@name': 'user-name',
                    '@id' : 'user-name',
                    '@class': 'row',
                    '@placeholder': 'user-name'
                }
            },
            'input': {
                '@type': 'submit',
                '@value': 'submit'
            }
        }
    };
    var parent = document.getElementById('wrapper');

    function create(data, par) {
        for (var key in data) {
            var tag = key;
            var obj = data[key];
            var valueRegExp = /^@/;
            if (valueRegExp.test(tag)) {
                var attribute = tag.slice(1);
                par.setAttribute(attribute, obj);
            } else {
                var elem = document.createElement(tag);
                par.appendChild(elem);
                if (typeof(obj) === 'object') {
                    create(obj, elem);
                } else {
                    elem.textContent = obj;
                }
            }
        }
    }
    create(page, parent);
})();