// Este código JavaScript é responsável por inicializar o carrossel de promoções
// e garantir que ele funcione corretamente.

$(document).ready(function() {
    // Inicializa o carrossel de promoções
    $('#promocoesCarrossel').carousel({
        interval: 5000, // Intervalo de 5 segundos entre os slides
        pause: 'hover' // Pausa o carrossel quando o mouse está sobre ele
    });

    // Adiciona funcionalidade para os botões de controle do carrossel
    $('.carousel-control-prev').click(function() {
        $('#promocoesCarrossel').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
        $('#promocoesCarrossel').carousel('next');
    });
});