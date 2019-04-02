const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456',
    server: '127.0.0.1',
    database: 'pal',
}

exports.getUser = async () => {

    let result;

    try
    {
        let pool = await new sql.ConnectionPool(config).connect();

        result = await pool.request().query(' SELECT TOP 1000 [id] ,[name] FROM [pal].[dbo].[brand]');
       
    } catch(err) {

            console.log('Error' + err);

    } finally {

        if(sql) {

            sql.close();
        }
    }

    return result;
}