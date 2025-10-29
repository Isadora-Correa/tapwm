module.exports = function (app) { // Mantendo 'app' como no seu delete_professor original
    app.post('/usuario/deletar', function (req, res) { // Action do form será essa
        async function deleteUser() { // Mudado para 'deleteUser'
            try {
                // Pega SÓ o ID do corpo da requisição (vem do input hidden)
                let usuario = { id_usuario: req.body.id_usuario };

                let connection = app.config.dbConnection; // Usa 'app'
                const pool = await connection();
                let usuarioModel = app.models.usuariomodel; // Usa 'app' e o model de usuário

                usuarioModel.deletarUsuario(usuario, pool, (error, results) => { // Chama deletarUsuario

                    if (error) {
                        console.log('Erro ao deletar usuário do banco:' + error);
                        res.status(500).send(error);
                    } else {
                        console.log('usuário deletado!!!');
                        res.redirect('/admin/crud_usuarios'); // Redireciona para a lista
                    }
                });
            } catch (error) {
                console.log(error);
                res.status(500).send("Erro interno do servidor.");
            }
        }
        deleteUser(); // Chama a função interna
    });
}