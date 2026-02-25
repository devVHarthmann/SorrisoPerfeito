const services = [
    {
      icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
    ,{
       icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
    ,{
       icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
    ,{
       icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
    ,{
       icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
    ,{
       icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
];

const grid = document.getElementById("servicesGrid");

services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <div class="service-content">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;
    grid.appendChild(card);
});