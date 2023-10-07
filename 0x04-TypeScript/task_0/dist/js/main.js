var domino = require('domino');
var studentsList = [
    { firstName: 'Sylvia', lastName: 'Ratemo', age: 30, location: 'Kenya' },
    { firstName: 'Liam', lastName: 'Okinda', age: 6, location: 'Kenya' },
];
var renderTable = function (studentsList) {
    var document = domino.createDocument('<html></html');
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
    console.log(document.documentElement.outerHTML);
};
renderTable(studentsList);
//# sourceMappingURL=main.js.map