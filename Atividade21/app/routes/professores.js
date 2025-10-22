module.exports = function(app) {
    app.get('/informacao/professores', async function(req, res) {
        
        const connSQLServer = app.config.dbConnection;

        try {
            const pool = await connSQLServer();

            if (!pool) {
                console.error("Pool de conexão é nulo. Verifique dbConnection.js");
                res.status(500).send("Erro ao conectar ao banco de dados.");
                return;
            }

            const results = await pool.request().query('SELECT * from PROFESSORES');
            res.render('informacao/professores', { profs: results.recordset }); 

        } catch (err) {
            console.error("Erro ao consultar o banco de dados:", err);
            res.status(500).send("Erro ao consultar o banco de dados.");
        }
    });
}