// app/models/usuariomodel.js
// (Baseado no professormodel.js das páginas 103-104 [cite: 2757-2766])

// ATENÇÃO: Verifique se sua tabela 'usuario' tem as colunas
// ID_USUARIO, NOME_USUARIO, EMAIL_USUARIO, SENHA_USUARIO

module.exports = function () {

    // Função para buscar TODOS os usuários
    this.getUsuarios = function (connection, callback) {
        connection.query('SELECT ID_USUARIO, NOME_USUARIO, EMAIL_USUARIO FROM usuario', callback); // Não busca a senha por segurança
    }

    // Função para buscar UM usuário pelo ID (para edição)
    this.getUsuarioPorId = function (id_usuario, connection, callback) {
        connection.query(`SELECT ID_USUARIO, NOME_USUARIO, EMAIL_USUARIO FROM usuario WHERE ID_USUARIO = ${id_usuario}`,
            callback); 
    }

    // Função para SALVAR um novo usuário
    this.salvarUsuario = function (usuario, connection, callback) {
        connection.query(`INSERT INTO usuario (NOME_USUARIO, EMAIL_USUARIO, SENHA_USUARIO)
VALUES ('${usuario.nome_usuario}','${usuario.email_usuario}', '${usuario.senha_usuario}')`, callback); 
        // ATENÇÃO: Em um projeto real, NUNCA salve a senha diretamente. Use hash!
    }

    // Função para DELETAR um usuário
    this.deletarUsuario = function (usuario, connection, callback) {
        connection.query(`DELETE FROM usuario WHERE ID_USUARIO = ${usuario.id_usuario}`, callback); 
    }

    // Função para EDITAR um usuário existente
    this.editarUsuario = function (usuario, connection, callback) {
        connection.query(`UPDATE usuario SET NOME_USUARIO = '${usuario.nome_usuario}', EMAIL_USUARIO = '${usuario.email_usuario}', SENHA_USUARIO = '${usuario.senha_usuario}'
WHERE ID_USUARIO = ${usuario.id_usuario} `, callback); 
        // ATENÇÃO: Cuidado ao editar a senha.
    }

    return this; // Mantém o padrão da apostila
}