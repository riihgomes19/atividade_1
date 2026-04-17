function toggleMenu() {
    const nav = document.querySelector("nav");
    const button = document.querySelector(".menu-toggle");
    const icon = document.getElementById("icon-menu");

    nav.classList.toggle("active");
    button.classList.toggle("active");

    if (nav.classList.contains("active")) {
      icon.textContent = "✖";
    } else {
      icon.textContent = "☰";
    }
  }

  const projetos = [
    { nome: "HTML", imagem: "images/logo_html.png", descricao: "Estruturação de páginas web modernas." },
    { nome: "CSS", imagem: "images/logo_css.png", descricao: "Estilização e layouts responsivos." },
    { nome: "PHP", imagem: "images/logo_php.png", descricao: "Sistemas web com banco de dados." },
    { nome: "JavaScript", imagem: "images/logo_javascript.png", descricao: "Aplicações interativas." },
    { nome: "Java", imagem: "images/logo_java.webp", descricao: "Aplicações orientadas a objetos." },
    { nome: "Python", imagem: "images/logo_python.png", descricao: "Automação e análise de dados." }
  ];

  const container = document.getElementById("lista-projetos");

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${projeto.imagem}" alt="Logo ${projeto.nome}">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <button onclick="mostrarMensagem('${projeto.nome}')">Ver mais</button>
    `;

    container.appendChild(card);
  });

  function mostrarMensagem(tecnologia) {
    alert('Você clicou em projetos de ' + tecnologia);
  }