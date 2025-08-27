const http = require('http');
const paginaHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fatec Sorocaba</title>
    <style>
        /* Importando uma fonte mais bonita do Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        /* Estilos gerais para a página */
        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* Fundo com gradiente suave */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: #333;
        }

        /* Estilo do "card" principal */
        .container {
            background-color: white;
            padding: 40px 50px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease; /* Efeito suave ao passar o mouse */
        }

        .container:hover {
            transform: translateY(-10px); /* Eleva o card ao passar o mouse */
        }

        /* Estilo do título principal */
        h1 {
            color: #B22222; /* Vermelho "Firebrick", uma cor forte e sóbria */
            font-size: 2.8em;
            margin-bottom: 10px;
            font-weight: 700;
        }

        /* Estilo do parágrafo */
        p {
            font-size: 1.2em;
            color: #555;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Site da Fatec Sorocaba</h1>
        <p>Bem-vindo ao nosso servidor Node.js! 🚀</p>
    </div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(paginaHTML);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`🎉 Servidor rodando com sucesso em http://localhost:${PORT}`);
});