const projects = document.querySelector(".projects__cards");
const project = document.querySelector(".projects__cards > div");
const button = document.querySelector("button");

const COLORS = ["#2ecc71", "#e74c3c", "#2c3e50", "#f5af3e"]

button.addEventListener('click', event => {
    const copy = project.cloneNode(true);

    const rand = Math.floor(Math.random()*COLORS.length);
    const color = COLORS[rand];

    copy.style.borderLeftColor = color;

    projects.appendChild(copy);
})