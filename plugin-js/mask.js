$(document).ready(function() {
    // Esta função é executada quando o documento HTML foi completamente carregado e pronto para manipulação.

    console.log("O código JavaScript está sendo executado.");
    // Exibe uma mensagem no console indicando que o código JavaScript está sendo executado.

    $('#telefone').mask('(00) 00000-0000'); // Máscara para telefone
    $('#cpf').mask('000.000.000-00'); // Máscara para CPF
    $('#cep').mask('00000-000'); // Máscara para CEP
    // Aplica máscaras aos campos de telefone, CPF e CEP utilizando a biblioteca jQuery Mask Plugin.

    $('#myForm').validate({
        // Inicia a validação do formulário utilizando a biblioteca jQuery Validation Plugin.

        errorPlacement: function(error, element) {
            // Função para colocar a mensagem de erro abaixo do campo que falhou na validação.
            error.appendTo(element.next('.error-message'));
            // A mensagem de erro é adicionada ao elemento HTML que está logo após o campo que falhou na validação.
        },
        submitHandler: function(form) {
            // Esta função é executada quando o formulário é submetido com sucesso.
            // 'form' é o objeto do formulário que está sendo submetido.
            console.log(form);
            // Exibe o objeto do formulário no console.

            // Limpa os campos do formulário
            $(form).trigger('reset');
            // Reseta os campos do formulário após o envio bem-sucedido.
        },
        invalidHandler: function(evento, validador) {
            // Esta função é executada quando o formulário tem campos inválidos.
            // 'evento' é o evento que desencadeou a chamada e 'validador' é o objeto do validador.
            let camposIncorretos = validador.numberOfInvalids();
            // Calcula o número de campos inválidos no formulário.
            console.log(camposIncorretos);
            // Exibe o número de campos inválidos no console.
            if (camposIncorretos) {
                // Se houver campos inválidos, exibe um alerta informando a quantidade de campos incorretos.
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
        rules: {
            // Define as regras de validação para cada campo do formulário.
            nome: {
                required: true,
                minlength: 12
            },
            telefone: {
                required: true,
                minlength: 15
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true,
                minlength: 11
            },
            cep: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            // Define as mensagens de erro para cada campo do formulário.
            nome: {
                required: "Campo Obrigatório",
                minlength: "O nome deve ter pelo menos 12 caracteres"
            },
            telefone: {
                required: "Campo Obrigatório",
                minlength: "O telefone deve ter pelo menos 15 caracteres"
            },
            email: {
                required: "Campo Obrigatório",
                email: "Por favor, insira um email válido"
            },
            cpf: {
                required: "Campo Obrigatório",
                minlength: "O CPF deve ter pelo menos 11 caracteres"
            },
            cep: {
                required: "Campo Obrigatório",
                minlength: "O CEP deve ter pelo menos 8 caracteres"
            }
        }
    });

    // Adiciona um event listener para o evento de submissão do formulário
    $('form').submit(function(event) {
        // Impede o comportamento padrão de envio do formulário, que é atualizar a página
        event.preventDefault();
    
        // Limpa os campos do formulário
        $(this).trigger('reset');
        // Reseta os campos do formulário após a submissão.
    });
});
