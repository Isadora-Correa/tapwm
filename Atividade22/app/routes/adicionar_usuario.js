
module.exports = function (application) { // Mantendo 'application' como no seu original
    // Rota GET para mostrar o formulário
    application.get('/admin/adicionar_usuario', function (req, res) {
        res.render('admin/adicionar_usuario'); // Renderiza a view do formulário
    });

    // Rota POST para salvar o novo usuário
    application.post('/usuario/salvar', function (req, res) { // Action do form será essa
        async function addUsuario() { // Mudado para 'addUsuario'
            try {
                let usuario = req.body; // Pega os dados do formulário (nome, email, senha)

                let connection = application.config.dbConnection;
                const pool = await connection();
                let usuarioModel = application.models.usuariomodel; // Usa o model de usuário

                usuarioModel.salvarUsuario(usuario, pool, (error, results) => { // Chama salvarUsuario
                    if (error) {
                        console.log('Erro ao inserir usuário no banco:' + error);
                        res.status(500).send(error);
                    } else {
                        console.log('usuário criado!!!');
                        res.redirect('/admin/crud_usuarios'); // Redireciona para a lista de usuários
                    }
                });
            } catch (error) {
                console.log(error);
                res.status(500).send("Erro interno do servidor.");
            }
        }
        addUsuario(); // Chama a função interna
    });
}