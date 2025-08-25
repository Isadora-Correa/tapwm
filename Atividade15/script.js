// Objeto com as informações de cada curso
const informacoesCursos = {
    'ads': {
        titulo: 'Análise e Desenvolvimento de Sistemas',
        descricao: 'O profissional projeta, desenvolve, testa, implanta e mantém sistemas computacionais de informação. Avalia, seleciona e utiliza metodologias, tecnologias e ferramentas da Engenharia de Software, linguagens de programação e bancos de dados.',
        imagem: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'ams-ads': {
        titulo: 'Análise e Desenvolvimento de Sistemas [AMS]',
        descricao: 'Modalidade AMS (Ampliação de Competências em Tecnologia, Inovação e Gestão). O curso é focado em projetos que integram diferentes competências, com ênfase na resolução de problemas reais do mercado, preparando o aluno para os desafios da área de TI.',
        imagem: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'eletronica': {
        titulo: 'Eletrônica Automotiva',
        descricao: 'O profissional atua no desenvolvimento, na implementação e na manutenção de sistemas eletrônicos em veículos. Planeja e supervisiona a execução de projetos e a instalação de equipamentos, aplicando normas técnicas e de segurança.',
        imagem: 'https://images.pexels.com/photos/163771/airport-air-traffic-control-tower-air-traffic-control-163771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'fabricacao': {
        titulo: 'Fabricação Mecânica',
        descricao: 'Este profissional atua na gestão dos processos de fabricação de peças, conjuntos e sistemas mecânicos. Planeja, supervisiona e otimiza a produção, utilizando ferramentas de usinagem, conformação, soldagem e metrologia.',
        imagem: 'https://images.pexels.com/photos/4317157/pexels-photo-4317157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'gestao-ead': {
        titulo: 'Gestão Empresarial - EAD',
        descricao: 'O curso prepara o aluno para gerenciar as diversas áreas de uma empresa. Desenvolve competências em finanças, marketing, recursos humanos e logística, com foco em planejamento estratégico, análise de mercado e tomada de decisões.',
        imagem: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'qualidade': {
        titulo: 'Gestão da Qualidade',
        descricao: 'O profissional planeja, implementa e audita sistemas de gestão da qualidade. Utiliza ferramentas para monitorar processos, otimizar a produção, reduzir custos e garantir a certificação de produtos e serviços conforme as normas técnicas.',
        imagem: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'logistica': {
        titulo: 'Logística',
        descricao: 'O profissional gerencia o fluxo de materiais, informações e recursos do ponto de origem ao ponto de consumo. Atua no planejamento de estoque, transporte, armazenamento e distribuição, visando otimizar custos e tempo.',
        imagem: 'https://images.pexels.com/photos/5907604/pexels-photo-5907604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'ams-log': {
        titulo: 'Logística [AMS]',
        descricao: 'Modalidade AMS (Ampliação de Competências em Tecnologia, Inovação e Gestão). O curso de Logística nesta modalidade integra conhecimentos práticos e teóricos por meio de projetos, focando na otimização da cadeia de suprimentos com uso de tecnologia.',
        imagem: 'https://images.pexels.com/photos/7948011/pexels-photo-7948011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'manufatura': {
        titulo: 'Manufatura Avançada',
        descricao: 'Focado nos conceitos da Indústria 4.0, o curso aborda tecnologias como robótica, manufatura aditiva (impressão 3D), internet das coisas (IoT) e sistemas ciberfísicos para criar processos de produção inteligentes e autônomos.',
        imagem: 'https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'aeronaves': {
        titulo: 'Manutenção de Aeronaves',
        descricao: 'O tecnólogo gerencia e supervisiona a manutenção de aeronaves, seus motores, componentes e sistemas. Ele é responsável por garantir que todos os procedimentos sigam as rigorosas normas de segurança e homologação da aviação civil.',
        imagem: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'polimeros': {
        titulo: 'Polímeros',
        descricao: 'O profissional atua no desenvolvimento, processamento e aplicação de materiais poliméricos (plásticos, borrachas). Trabalha no controle de qualidade, na seleção de materiais e na otimização de processos de transformação.',
        imagem: 'https://images.pexels.com/photos/6781283/pexels-photo-6781283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'metalurgicos': {
        titulo: 'Processos Metalúrgicos',
        descricao: 'Este tecnólogo trabalha nos processos de obtenção, transformação e aplicação de metais e ligas. Atua em áreas como fundição, siderurgia, soldagem e tratamentos térmicos, controlando a qualidade e as propriedades dos materiais.',
        imagem: 'https://images.pexels.com/photos/1422408/pexels-photo-1422408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'projetos': {
        titulo: 'Projetos Mecânicos',
        descricao: 'O profissional desenvolve e detalha projetos de máquinas, equipamentos e sistemas mecânicos. Utiliza softwares de CAD/CAE/CAM para criar desenhos técnicos, realizar simulações e especificar materiais e processos de fabricação.',
        imagem: 'https://images.pexels.com/photos/3861439/pexels-photo-3861439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'biomedicos': {
        titulo: 'Sistemas Biomédicos',
        descricao: 'O tecnólogo em Sistemas Biomédicos gerencia a tecnologia em hospitais e clínicas. Ele é responsável pela instalação, calibração e manutenção de equipamentos médico-hospitalares, garantindo seu funcionamento correto e seguro.',
        imagem: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
};

const modalOverlay = document.getElementById('custom-confirm-overlay');
const modalMessage = document.getElementById('modal-message');
const confirmBtn = document.getElementById('modal-confirm-btn');
const cancelBtn = document.getElementById('modal-cancel-btn');

function showCustomConfirm(message) {
    modalMessage.textContent = message;
    modalOverlay.classList.add('visible');
    return new Promise((resolve) => {
        confirmBtn.onclick = () => {
            modalOverlay.classList.remove('visible');
            resolve(true);
        };
        cancelBtn.onclick = () => {
            modalOverlay.classList.remove('visible');
            resolve(false);
        };
    });
}

async function carregarCurso() {
    const seletor = document.getElementById('seletorCursos');
    const cursoSelecionado = seletor.value;
    if (!cursoSelecionado) return;

    const nomeCurso = seletor.options[seletor.selectedIndex].text;
    const confirmacao = await showCustomConfirm(`Deseja abrir informações sobre o curso de ${nomeCurso}?`);

    if (confirmacao) {
        const dadosCurso = informacoesCursos[cursoSelecionado];
        localStorage.setItem('cursoData', JSON.stringify(dadosCurso));
        
        // ===== AQUI ESTÁ A MUDANÇA =====

        // 1. Define as dimensões da nova janela
        const popupWidth = 900;
        const popupHeight = 550;

        // 2. Calcula a posição para centralizar a janela na tela
        const left = (screen.width / 2) - (popupWidth / 2);
        const top = (screen.height / 2) - (popupHeight / 2);

        // 3. Abre a nova página (curso.html) com as coordenadas de centralização
        window.open(
            'curso.html', 
            '_blank', 
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
        );
    }

    seletor.value = "";
}