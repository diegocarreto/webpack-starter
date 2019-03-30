const Excel = require('exceljs');
const fs = require('fs');

(function () {

    let fileName = './Sample-Data-Inventory-Tracker.xlsx';
    let inserts = [];
    let workbook = new Excel.Workbook();

    workbook.xlsx.readFile(fileName).then(() => {

        let ws = workbook.getWorksheet(1);

        ws.eachRow((row, rowNumber) => {

            let data = `INSERT INTO productos VALUES(${rowNumber}, "${row.getCell(1).value}")`

            inserts.push(data);
        });

        fs.writeFile('./insert.sql', inserts, (ok) => {

            console.log('OK', ok);
        });
    });

})();