const http = require('http');

/**
 * Função Template para gerar o HTML de qualquer página do site.
 * Ela recebe o título, o conteúdo HTML e o caminho da URL atual para destacar o menu ativo.
 */
function gerarPaginaHTML(titulo, conteudo, urlAtual) {
    // Define os links do menu de navegação
    const links = [
        { url: '/', nome: 'Home' },
        { url: '/historia', nome: 'História' },
        { url: '/cursos', nome: 'Cursos' },
        { url: '/professores', nome: 'Professores' }
    ];

    // Gera o HTML dos links, adicionando a classe 'active' ao link da página atual
    const menuHtml = links.map(link => 
        `<a href="${link.url}" class="${link.url === urlAtual ? 'active' : ''}">${link.nome}</a>`
    ).join('');

    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${titulo} | Fatec Sorocaba</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
            
            body {
                font-family: 'Roboto', sans-serif;
                background-color: #f0f2f5;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            header {
                width: 100%;
                background-color: #B22222; /* Vermelho institucional */
                padding: 15px 0;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                margin-bottom: 40px;
            }

            nav {
                display: flex;
                justify-content: center;
                gap: 30px;
            }

            nav a {
                color: white;
                text-decoration: none;
                font-size: 1.1em;
                font-weight: 500;
                padding: 10px 15px;
                border-radius: 8px;
                transition: background-color 0.3s ease;
            }

            nav a:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }

            nav a.active {
                background-color: rgba(0, 0, 0, 0.25);
            }

            main.container {
                background-color: white;
                width: 80%;
                max-width: 900px;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            }

            h1 {
                color: #333;
                border-bottom: 2px solid #B22222;
                padding-bottom: 10px;
                margin-top: 0;
            }

            p {
                font-size: 1.1em;
                line-height: 1.6;
                color: #555;
            }
        </style>
    </head>
    <body>
        <header>
            <nav>
                ${menuHtml}
            </nav>
        </header>

        <main class="container">
            <h1>${titulo}</h1>
            ${conteudo}
        </main>
    </body>
    </html>
    `;
}

const server = http.createServer((req, res) => {
    const url = req.url;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (url === '/historia') {
        const pagina = gerarPaginaHTML(
            'História da Fatec Sorocaba',
            '<p>Fundada em 1970, a Fatec Sorocaba "José Crespo Gonzales" é uma das faculdades de tecnologia mais antigas do estado, oferecendo cursos de excelência na área de tecnologia...</p>',
            url
        );
        res.end(pagina);
    } 
    else if (url === '/cursos') {
        const pagina = gerarPaginaHTML(
            'Cursos Oferecidos',
            '<ul><li>Análise e Desenvolvimento de Sistemas</li><li>Sistemas Biomédicos</li><li>Polímeros</li><li>Fabricação Mecânica</li><li>Projetos Mecânicos</li><li>Logística</li></ul>',
            url
        );
        res.end(pagina);
    } 
    else if (url === '/professores') {
        const pagina = gerarPaginaHTML(
            'Corpo Docente',
            '<p>Nosso corpo docente é formado por mestres e doutores com vasta experiência acadêmica e de mercado, garantindo uma formação sólida e atualizada para nossos alunos.</p>',
            url
        );
        res.end(pagina);
    } 
    else { // Trata a rota '/' e qualquer outra como a página inicial
        const pagina = gerarPaginaHTML(
            'Bem-vindo ao Site da Fatec Sorocaba',
            '<p>Utilize o menu de navegação acima para explorar as diferentes seções do nosso site. Aqui você encontrará informações sobre nossa história, cursos e professores. 🚀</p>',
            '/' // Força o link 'Home' a ficar ativo na página inicial
        );
        res.end(pagina);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🏛️  Servidor da Fatec rodando em http://localhost:${PORT}`);
});