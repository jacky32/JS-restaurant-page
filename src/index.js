import "./style.css";
import restaurantImage from "./Restaurant_image.jpg";

const content = document.getElementById("content");

// const restImg = new Image();
// restImg.src = restaurantImage;

// content.appendChild(restImg);

const buildHeader = () => {
  const header = document.createElement("header");
  const homeButton = document.createElement("div");
  const menuButton = document.createElement("div");
  const contactButton = document.createElement("div");

  homeButton.id = "home";
  menuButton.id = "menu";
  contactButton.id = "contact";

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  content.appendChild(header);
};

buildHeader();
