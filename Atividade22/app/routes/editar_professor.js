// app/routes/editar_professor.js (CORRIGIDO)
module.exports = function (app) { // <-- Recebe 'app'
    app.get('/admin/editar_professor', function (req, res) {
        async function getProfessorPorId() {
            try {
                let id_professor = req.query.id; 
                // CORRIGIDO: Usa 'app'
                let connection = app.config.dbConnection; 
                const pool = await connection();
                // CORRIGIDO: Usa 'app'
                let professoresModel = app.models.professormodel; 
                professoresModel.getProfessorPorId(id_professor, pool, function (error, results) {
                    if (error || !results.recordset || results.recordset.length === 0) {
                        console.error("Erro ao buscar professor por ID:", error);
                        return res.status(404).send("Professor não encontrado ou erro na busca.");
                    }
                    res.render('admin/editar_professor', { profs: results.recordset });
                });
            } catch (err) { 
                 console.log(err);
                 res.status(500).send("Erro interno do servidor.");
            }
        }
        getProfessorPorId();
    });

    app.post('/professor/editar', function (req, res) {
        async function editarProfessor() {
            try {
                let professor = req.body;
                // CORRIGIDO: Usa 'app'
                let connection = app.config.dbConnection; 
                const pool = await connection();
                // CORRIGIDO: Usa 'app'
                let professoresModel = app.models.professormodel; 

                professoresModel.editarProfessor(professor, pool, (error, results) => {
                    if (error) {
                        console.log('Erro ao editar no banco:' + error);
                        res.status(500).send(error);
                    } else {
                        console.log('professor editado!!!');
                        res.redirect('/admin/crud_professores');
                    }
                });
            } catch (error) { 
                console.log(error);
                res.status(500).send("Erro interno do servidor.");
            }
        }
        editarProfessor();
    });
}