var JSDOM = require('jsdom').JSDOM;
var studentsList = [
    { firstName: 'Sylvia', lastName: 'Ratemo', age: 30, location: 'Kenya' },
    { firstName: 'Liam', lastName: 'Okinda', age: 6, location: 'Kenya' },
];
var renderTable = function (studentsList) {
    var dom = new JSDOM('<html></html>');
    var document = dom.window.document;
    var performance = {
        now: function () { return Date.now(); },
    };
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headerRow = document.createElement('tr');
    Object.keys(studentsList[0]).forEach(function (key) {
        var th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    document.body.appendChild(table);
    console.log(dom.serialize());
};
renderTable(studentsList);
