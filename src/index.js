import "./style.css";
import restaurantImage from "./Restaurant_image.jpg";

const content = document.getElementById("content");

const restImg = new Image();
restImg.src = restaurantImage;

content.appendChild(restImg);
