(function() {
    'use strict';
    // array data for section tags
    var sectionFieldset = [{
        'tag': 'section',
        'parentId': 'wrapper',
        'id': 'wrapper-input',
        'class': 'row'
    }, {
        'tag': 'section',
        'parentId': 'wrapper',
        'id': 'list',
        'class': 'row'
    }, {
        'tag': 'section',
        'parentId': 'wrapper',
        'id': 'sum',
        'class': 'row'
    }, {
        'tag': 'section',
        'parentId': 'wrapper',
        'id': 'totalSum',
        'class': 'row'
    }];
    // array data for span tags
    var spanFieldset = [{
        'tag': 'span',
        'parentId': 'sum',
        'text': 'Sum: ',
        'class': 'span-text'
    }, {
        'tag': 'span',
        'parentId': 'sum',
        'text': '0',
        'class': 'span-text'
    }, {
        'tag': 'span',
        'parentId': 'totalSum',
        'text': 'Total sum: ',
        'class': 'span-text'
    }, {
        'tag': 'span',
        'parentId': 'totalSum',
        'text': '0',
        'class': 'span-text'
    }];
    // array data for input tag
    var inputFieldset = [{
        'tag': 'label',
        'parentId': 'wrapper-input',
        'text': 'Count: ',
        'class': 'label-text'
    },{
        'tag': 'input',
        'parentId': 'wrapper-input',
        'type': 'text',
        'name': 'count',
        'class': 'input'
    }];

    function createPage() {
        createElem(sectionFieldset);
        createElem(inputFieldset);
        createElem(spanFieldset);
        // event for create checkboxes
        var input = document.getElementsByTagName('input')[0];
        input.onkeyup = function() {
            removeChildren('list');
            createCheckbox('list');
            resetSum();
            var checkbox = document.getElementsByClassName('checkboxes');
            for (var i = 0; i < checkbox.length; i++) {
                var num = checkbox[i];
                num.addEventListener("change", changeElem());
            }

            function changeElem() {
                return function() {
                    sum();
                    totalSum(this.checked);
                };
            }
        };
    }
    createPage();

    function createElem(arrElem) {
        arrElem.forEach(function(item) {
            var parentElement = document.getElementById(item.parentId);
            var tag = item.tag;
            var el = document.createElement(tag);
            parentElement.appendChild(el);
            el.className = item.class;
            if (item.id) {
                el.id = item.id;
            }
            if (item.text) {
                el.textContent = item.text;
            }
            if(item.type){
                el.type = item.type;
            }
            if(item.name){
                el.name = item.name;
            }
        });
    }
    
    function removeChildren(parentId) {
        var parentElement = document.getElementById(parentId);
        while (parentElement.lastChild) {
            parentElement.removeChild(parentElement.lastChild);
        }
    }

    function createCheckbox(parentId) {
        var parent = document.getElementById(parentId);
        var input = document.getElementsByTagName('input')[0];
        var num = parseInt(input.value);
        var i;
        for (i = 0; i < num; i++) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkboxes';
            parent.appendChild(checkbox);
        }
    }

    function resetSum() {
        var sumCheckbox = document.getElementsByTagName('span')[1];
        sumCheckbox.textContent = 0;
    }

    function sum() {
        var checkbox = document.getElementsByTagName('input');
        var sumCheckbox = document.getElementsByTagName('span')[1];
        var count = 0;
        var i;
        for (i = 1; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                count += 1;
            }
        }
        sumCheckbox.textContent = count;
    }

    function totalSum(elem) {
        var totalSumCheckbox = document.getElementsByTagName('span')[3];
        var count = totalSumCheckbox.textContent;
        if (elem) {
            totalSumCheckbox.textContent = parseInt(count) + 1;
        }
    }
})();