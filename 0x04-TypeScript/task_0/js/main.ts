const { JSDOM } = require('jsdom');

interface Student {
  firstName: string;
  lastName: string,
  age: number;
  location: string;
}

let studentsList: Student[] = [
    { firstName: 'Sylvia', lastName: 'Ratemo', age: 30, location: 'Kenya' },
    { firstName: 'Liam', lastName: 'Okinda', age: 6, location: 'Kenya' },
];

const renderTable = (studentsList: Student[]): void => {
    const dom = new JSDOM('<html></html>');
    const document = dom.window.document;

    const performance = {
        now: () => Date.now(),
    };

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    Object.keys(studentsList[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    table.appendChild(thead);
    document.body.appendChild(table);

    console.log(dom.serialize());
};

renderTable(studentsList);