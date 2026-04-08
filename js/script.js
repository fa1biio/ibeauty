function scrollToForm() {
  document.getElementById("form").scrollIntoView({
    behavior: "smooth"
  });
}

async function agendar() {
  const dados = {
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value,
    servico: document.getElementById("servico").value,
    data: document.getElementById("data").value,
    hora: document.getElementById("hora").value
  };

  const resposta = await fetch("backend/agendamento.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(dados)
  });

  const texto = await resposta.text();

  document.getElementById("mensagem").innerText = texto;
}