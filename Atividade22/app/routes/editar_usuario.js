module.exports = function (app) { // Mantendo 'app' como no seu editar_professor original
    // Rota GET para buscar dados e mostrar o formulário de edição
    app.get('/admin/editar_usuario', function (req, res) {

        async function getUsuarioPorId() { // Mudado para 'getUsuarioPorId'
            try {
                let id_usuario = req.query.id; // Pega o ID da URL (?id=...)

                let connection = app.config.dbConnection; // Usa 'app' consistentemente
                const pool = await connection();
                let usuarioModel = app.models.usuariomodel; // Usa 'app' e o model de usuário

                usuarioModel.getUsuarioPorId(id_usuario, pool, function (error, results) { // Chama getUsuarioPorId
                    if (error || !results.recordset || results.recordset.length === 0) {
                         console.error("Erro ao buscar usuário por ID:", error);
                         return res.status(404).send("Usuário não encontrado ou erro na busca.");
                    }
                    res.render('admin/editar_usuario', { users: results.recordset }); // Passa 'users' para a view
                });
            } catch (err) {
                console.log(err)
                res.status(500).send("Erro interno do servidor.");
            }
        }
        getUsuarioPorId(); // Chama a função interna
    });

    // Rota POST para salvar as alterações do usuário
    app.post('/usuario/editar', function (req, res) { // Action do form será essa

        async function editUsuario() { // Mudado para 'editUsuario'
            try {
                let usuario = req.body; // Pega os dados do formulário (id, nome, email, senha)

                let connection = app.config.dbConnection; // Usa 'app'
                const pool = await connection();
                let usuarioModel = app.models.usuariomodel; // Usa 'app' e o model de usuário

                usuarioModel.editarUsuario(usuario, pool, (error, results) => { // Chama editarUsuario
                    if (error) {
                        console.log('Erro ao editar usuário no banco:' + error);
                        res.status(500).send(error);
                    } else {
                        console.log('usuário editado!!!');
                        res.redirect('/admin/crud_usuarios'); // Redireciona para a lista
                    }
                });
            } catch (error) {
                console.log(error);
                 res.status(500).send("Erro interno do servidor.");
            }
        }
        editUsuario(); // Chama a função interna
    });
}