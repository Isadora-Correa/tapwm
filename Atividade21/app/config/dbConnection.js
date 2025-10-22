// app/config/dbConnection.js

const sql = require('mssql');

// 2. Criar o objeto de configuração da conexão
//    TODOS OS DADOS CORRIGIDOS COM BASE NO SEU CÓDIGO
const sqlConfig = {
    server: 'localhost', // Servidor
    user: 'BDIsadora', // Usuário
    password: 'Bonecabarbie0102', // Senha
    database: 'master', // Banco de dados
    port: 50174, // A porta que estava faltando!
    
    options: {
        encrypt: false, // Necessário para conexões locais sem SSL
        trustServerCertificate: true // Necessário para conexões locais
    }
};

// 3. Criar a função que estabelece a conexão
const connSQLServer = async function() {
    console.log('Tentando conectar ao SQL Server...');
    try {
        // Usa o pool de conexões do mssql
        let pool = await sql.connect(sqlConfig);
        console.log('Conexão com SQL Server estabelecida com sucesso!');
        return pool;
    } catch (err) {
        // O log de erro agora será MUITO mais detalhado
        console.error('Falha na conexão com o banco de dados:', err);
        return null; // Retorna nulo se a conexão falhar
    }
};

// 4. Exportar a função de conexão para ser usada em outros lugares
module.exports = function() {
    return connSQLServer;
};