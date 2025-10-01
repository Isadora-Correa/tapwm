module.exports = function(app) {
    app.get('/informacao/professores', async function(req, res) {
        const sql = require('mssql'); 

        const sqlConfig = {
            server: 'localhost',
            user: 'BDIsadora',
            password: 'xxx',
            database: 'master',
            port: 50174,
            options: {
                encrypt: false,
                trustServerCertificate: true
            }
        };

        try {
            await sql.connect(sqlConfig);
            const results = await sql.query('SELECT * from PROFESSORES');
            res.json(results.recordset);
        } catch (err) {
            console.error("Erro detalhado com o novo driver:", err); // O erro aparecerá aqui
            res.status(500).json({ erro: 'Falha ao buscar dados dos professores.' });
        } finally {
            await sql.close();
        }
    });
}
