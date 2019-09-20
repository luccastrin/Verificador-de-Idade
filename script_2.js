var texto_digitado = document.getElementById('texto_ano');
var resultado = document.getElementById('resultado');

var data = new Date();
var ano_atual = data.getFullYear();


function verificaIdade() {
    if( texto_digitado.value.length === 0 || Number(texto_digitado.value) > ano_atual ) {
        alert('Reveja os dados e digite novamente!');
    } else {
        var idade_correta = ano_atual - Number(texto_digitado.value); 
        resultado.innerHTML = 'A idade é ' + idade_correta + ' anos.'; 
        texto_digitado.value = '';
        var genero = '';

        var sexo_pessoa = document.getElementsByName('sexo_pessoa');
        var imagem = document.createElement('img');

        if( sexo_pessoa[0].checked ) {
            genero = 'homem';
            if( idade_correta > 0 && idade_correta <= 10 ) {
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/homem_bebe.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            } else if( idade_correta > 10 && idade_correta <= 21 ) {
                //JOVEM
                imagem.setAttribute('src', 'imagens/homem_adolescente.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            } else if( idade_correta > 21 && idade_correta <= 60 ) {
                //ADULTO
                imagem.setAttribute('src', 'imagens/homem_adulto.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            } else if( idade_correta > 60 ) {
                //IDOSO
                imagem.setAttribute('src', 'imagens/homem_idoso.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            }
        } else if( sexo_pessoa[1].checked ) {
            genero = 'mulher';
            if( idade_correta > 0 && idade_correta <= 10 ) {
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/mulher_bebe.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            } else if( idade_correta > 10 && idade_correta <= 21 ) {
                //JOVEM
                imagem.setAttribute('src', 'imagens/mulher_adolescente.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            } else if( idade_correta > 21 && idade_correta <= 60 ) {
                //ADULTO
                imagem.setAttribute('src', 'imagens/mulher_adulta.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            } else if( idade_correta > 60 ) {
                //IDOSO
                imagem.setAttribute('src', 'imagens/mulher_idosa.jpg');
                imagem.style.borderRadius = '50%';
                imagem.style.border = '2px solid black';
            }
        }
    }
        resultado.innerHTML = 'A pessoa é ' + genero + ' e tem ' + idade_correta + ' anos.'
        resultado.appendChild(imagem);
}