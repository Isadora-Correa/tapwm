module.exports = function (app) {
    app.get('/admin/crud_usuarios', function (req, res) {
        async function getUsers() { // Mudado para 'getUsers' para clareza
            try {
                let connection = app.config.dbConnection;
                const pool = await connection();
                let usuarioModel = app.models.usuariomodel; // Usa o novo model

                usuarioModel.getUsuarios(pool, function (error, results) { // Chama getUsuarios
                    if (error) {
                        console.error("Erro ao buscar usuários:", error);
                        res.status(500).send("Erro ao buscar dados.");
                    } else {
                        res.render('admin/crud_usuarios', { users: results.recordset }); // Passa 'users' para a view
                    }
                });
            } catch (err) {
                console.log(err)
                res.status(500).send("Erro interno do servidor.");
            }
        }
        getUsers(); // Chama a função interna
    });
}