const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "os livros são considerados uma das principais fontes de conhecimento e entreterimento ao longo da historia da humanidade. Eles podem ser categorizados em diversos gêneros e são importantes tanto para o desenvolvimento pessoal quanto para a educação formal. ",
        alternativas: [ 
            {
                texto: "os livros são considerados uma das principais fontes de conhecimento e entreterimento ao longo da historia da humanidade. Eles podem ser categorizados em diversos gêneros e são importantes tanto para o desenvolvimento pessoal quanto para a educação formal. ",
                 
                afirmacao: "Os livros de ficção são aqueles que narram histórias imaginarias criadas pela mente do autor "
            },
            {
                texto: "Livros didáticos são escritos com o propósito principal de ensinar ou instruir em uma área específica do conhecimento",
                  
                afirmacao: "Livros didáticos são frequentemente usados em escolas e universidades como material de estudo"
            } 
        ]
    },
    {
        enunciado: "Os livros desempenham um papel essencial na disseminação de conhecimento e na oferta de entreterimento, permitindo os leitores explorar diferentes mundos e ideias",
        alternativas: [  
            {
                texto: "Livros de poesia, que expressam emoçoes e pensamentos profundo através de versos e ritmos",
                 
                afirmacao: "Apoesia pode variar de sonetos clássicos e versos livres contemporâneos, oferecendo uma ampla gama de estilos"
                 
            },
            {
                texto: "Livros de autoajuda, que fornecem orientações e técnicas para o desenvolvimento pessoal e emocional ",
                
                afirmacao: "Livros de autoajuda são populares entre leitores que buscam melhorar aspectos de suas vidas, como produtividade ou bem-estar."
                 
            }
        ]
    },
    {
        enunciado: "Consdere as seguintes afirmações sobre livros ",
        alternativas: [
            {
                texto: "Os livros fisicos têm um impacto ambientaçl maior do que os e-books ",
                afirmacao: "A Ambas as afirmações são verdadeiras "
            },
            {
                texto: "A leitura digital permite maior interação do leitor com o conteudo ",
                afirmacao: "Apenas uma das afirmativas é verdadeira "
            }
        ]
    },
   
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
