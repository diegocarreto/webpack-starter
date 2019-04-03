const sql = require('mssql');

const config = {
    user: '***',
    password: '***',
    server: '***',
    database: '***',
}

exports.getUser = async () => {

    let result;

    try
    {
        let pool = await new sql.ConnectionPool(config).connect();

        result = await pool.request().query(' SELECT TOP 1000 [id] ,[name] FROM [brand]');
       
    } catch(err) {

            console.log('Error' + err);

    } finally {

        if(sql) {

            sql.close();
        }
    }

    return result;
}