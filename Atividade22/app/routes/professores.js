// app/routes/professores.js (CORRIGIDO)
module.exports = function(app){
    app.get('/informacao/professores', function(req, res) {
        
        async function getProf() { // Renomeei a função interna para clareza
            try {
                let connection = app.config.dbConnection; // Pega a FUNÇÃO de conexão
                const pool = await connection(); // EXECUTA a função para conectar

                let professoresModel = app.models.professormodel; // Pega o MODEL

                // CHAMA A FUNÇÃO DENTRO DO MODEL e envia a resposta DENTRO do callback
                professoresModel.getProfessores(pool, function(error, results){
                    if(error){
                        console.error("Erro ao buscar professores no model:", error);
                        res.status(500).send("Erro ao buscar dados.");
                    } else {
                        res.render('informacao/professores', { profs: results.recordset });
                    }
                });

            } catch (err) {
                // Captura erros da conexão (await connection())
                console.error("Erro ao conectar ou buscar professores:", err);
                res.status(500).send("Erro interno do servidor.");
            }
        }
        
        getProf(); // Chama a função async interna
    });
}