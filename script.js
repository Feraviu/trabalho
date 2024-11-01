document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    this.reset();
});