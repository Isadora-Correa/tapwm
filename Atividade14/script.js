let timerLimpeza; 

function mostrarModalAlerta(mensagem) {
    const modal = document.getElementById('feedback-modal'); 
    const mensagemModal = document.getElementById('modal-message-text'); 
    mensagemModal.textContent = mensagem;
    modal.classList.add('visible'); 
}

function fecharModal() {
    const modal = document.getElementById('feedback-modal');
    modal.classList.remove('visible'); 
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('feedback-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    modalCloseBtn.addEventListener('click', fecharModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });

    const form = document.getElementById('meuFormulario');
    const nomeInput = form.elements['nome'];
    const emailInput = form.elements['email'];
    const comentarioInput = form.elements['comentario'];

    nomeInput.addEventListener('blur', validaNome);
    emailInput.addEventListener('blur', validaEmail);
    comentarioInput.addEventListener('blur', validaComentario);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validarTudo();
    });
});


function validaNome() {
    const input = document.forms['formPrincipal'].elements['nome'];
    const errorDiv = document.getElementById('error-nome');
    if (input.value.trim().length < 10) {
        errorDiv.textContent = 'O nome deve ter no mínimo 10 caracteres.';
        input.classList.add('invalido');
        return false;
    }
    errorDiv.textContent = '';
    input.classList.remove('invalido');
    return true;
}

function validaEmail() {
    const input = document.forms['formPrincipal'].elements['email'];
    const errorDiv = document.getElementById('error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value.trim() === '') {
        errorDiv.textContent = 'O campo E-mail é obrigatório.';
        input.classList.add('invalido');
        return false;
    } else if (!emailRegex.test(input.value.trim())) {
        errorDiv.textContent = 'Por favor, insira um formato de e-mail válido.';
        input.classList.add('invalido');
        return false;
    }
    errorDiv.textContent = '';
    input.classList.remove('invalido');
    return true;
}

function validaComentario() {
    const input = document.forms['formPrincipal'].elements['comentario'];
    const errorDiv = document.getElementById('error-comentario');
    if (input.value.trim().length < 20) {
        errorDiv.textContent = 'O comentário deve ter no mínimo 20 caracteres.';
        input.classList.add('invalido');
        return false;
    }
    errorDiv.textContent = '';
    input.classList.remove('invalido');
    return true;
}

function validaPesquisa() {
    const pesquisaValue = document.forms['formPrincipal'].elements['pesquisa'].value;
    const errorDiv = document.getElementById('error-pesquisa');
    if (pesquisaValue === "") {
        errorDiv.textContent = 'Por favor, responda à pesquisa.';
        return false;
    }
    errorDiv.textContent = '';
    return true;
}



function validarTudo() {
    const nomeValido = validaNome();
    const emailValido = validaEmail();
    const comentarioValido = validaComentario();
    const pesquisaValida = validaPesquisa();
    
    if (nomeValido && emailValido && comentarioValido && pesquisaValida) {
        const pesquisaValue = document.forms['formPrincipal'].elements['pesquisa'].value;
        let mensagemSucesso = '';
        if (pesquisaValue === "nao") {
            mensagemSucesso = "Que bom que você voltou a visitar esta página!";
        } else {
            mensagemSucesso = "Volte sempre à esta página!";
        }

        mostrarModalAlerta(mensagemSucesso); 

        clearTimeout(timerLimpeza);
        timerLimpeza = setTimeout(function() { 
            fecharModal();
            document.getElementById('meuFormulario').reset();
            document.querySelectorAll('.invalido').forEach(el => el.classList.remove('invalido'));
        }, 5000);
    }
}