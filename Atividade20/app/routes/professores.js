module.exports = function(app) {
    app.get('/informacao/professores', async function(req, res) { // 1. Tornamos a função principal async
        const sql = require('mssql/msnodesqlv8');

        // Configuração da conexão CORRIGIDA
        const sqlConfig = {
            server: 'LAPTOP-ISA\\SQLEXPRESS', 
            user: 'BDIsadora', 
            password: 'xxxxx',
            database: 'master', 
            driver: 'msnodesqlv8',
            options: {
                encrypt: false,
                trustServerCertificate: true,
            }
        };

        try {
            // Conecta ao banco de dados
            const pool = await sql.connect(sqlConfig);
            
            // Executa a query
            const results = await pool.request().query('SELECT * from PROFESSORES');
            
            // Envia os resultados como JSON
            res.json(results.recordset);

        } catch (err) {
            // Se der erro, loga no console E envia uma resposta de erro para o cliente
            console.error("Erro ao conectar ou consultar o banco de dados:", err);
            // 5. ENVIE UMA RESPOSTA DE ERRO PARA O NAVEGADOR
            res.status(500).json({ erro: 'Falha ao buscar dados dos professores.' });
        }
    });
}
