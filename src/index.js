import "./style.css";
import restaurantImage from "./Restaurant_image.jpg";

const content = document.getElementById("content");

const buildHeader = () => {
  const header = document.createElement("header");
  const homeButton = document.createElement("div");
  const menuButton = document.createElement("div");
  const contactButton = document.createElement("div");

  header.id = "header";
  homeButton.id = "home";
  menuButton.id = "menu";
  contactButton.id = "contact";

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  homeButton.addEventListener("click", () => {
    switchPage(1);
  });
  menuButton.addEventListener("click", () => {
    switchPage(2);
  });
  contactButton.addEventListener("click", () => {
    switchPage(3);
  });

  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contactButton);

  content.appendChild(header);

  return header;
};

const switchSelected = (option = 1) => {
  const buttons = header.children;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList = "";
  }
  switch (option) {
    case 1:
      buttons[0].classList = "selected";
      break;
    case 2:
      buttons[1].classList = "selected";
      break;
    case 3:
      buttons[2].classList = "selected";
      break;
    default:
      buttons[0].classList = "selected";
      break;
  }
};

const switchPage = (page) => {
  deleteOtherPages();
  switchSelected(page);
  switch (page) {
    case 1:
      buildHomepage();
      break;
    case 2:
      buildMenu();
      break;
    case 3:
      buildContact();
      break;
    default:
      buildHomepage();
      break;
  }
};

const buildHomepage = () => {
  const main = document.createElement("div");
  const heading = document.createElement("h1");
  const infoText = document.createElement("p");
  const welcomeText = document.createElement("p");

  const restImage = new Image();
  restImage.src = restaurantImage;

  main.id = "main";
  infoText.id = "info-text";
  welcomeText.id = "welcome-text";

  heading.textContent = "The restaurant";
  infoText.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe labore laboriosam deleniti, cum ea debitis inventore incidunt, in vel dolorum veritatis earum nulla illo magni voluptatum? Quaerat possimus tenetur nostrum?";
  welcomeText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi illum voluptas recusandae alias magnam saepe soluta unde hic, fugiat sint quae! Autem sint est nobis repellat quisquam eaque beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veniam deserunt eveniet assumenda molestiae perferendis quaerat iste nulla libero. Dolorum, obcaecati magnam. Laborum, eos a. Nihil dolorem porro expedita placeat! Provident labore id exercitationem vitae alias expedita laborum soluta, autem ullam odio illum, accusantium repudiandae eius in animi incidunt. Quas illo odio tempora provident, maxime doloremque velit voluptatum distinctio praesentium? Quae animi iste quos modi delectus tempora ipsum soluta amet culpa, officiis placeat! Rem eos totam, molestias facilis, quod similique in vero consequatur labore suscipit, quisquam perspiciatis quia itaque voluptatibus! Sed assumenda animi minima quaerat atque debitis nisi rerum nesciunt obcaecati velit provident deleniti dolor rem, nemo nostrum? Odio eveniet corporis totam quaerat incidunt veniam tenetur laboriosam ipsam, molestias corrupti? Nulla laboriosam at commodi rerum corporis aperiam, sint pariatur, fugiat repudiandae adipisci dolores ab reprehenderit exercitationem mollitia natus officia vero iusto alias in! Incidunt sapiente, sunt delectus et nulla repellendus. Dolorem amet cum labore magnam dolores temporibus, fuga magni exercitationem nam placeat accusamus ipsum numquam saepe quod sapiente. Magni distinctio quae dolores consequuntur dolorem laborum molestiae fugit, quam incidunt corrupti. Suscipit debitis incidunt dolorem cumque minus et quia laboriosam assumenda numquam repudiandae quisquam rem vitae, asperiores neque dolores repellendus ea. Inventore id labore numquam incidunt aperiam assumenda ducimus reiciendis adipisci! Sequi iusto, et animi totam atque cumque quam nam veniam veritatis, enim esse pariatur, beatae odio impedit maiores. Quas rem quos ducimus sapiente fugit! Aut neque ipsa dolorum possimus molestiae.";

  main.appendChild(heading);
  main.appendChild(infoText);
  main.appendChild(restImage);
  main.appendChild(welcomeText);

  content.appendChild(main);
};

const buildMenu = () => {
  const main = document.createElement("div");
  const heading = document.createElement("h1");
  const infoText = document.createElement("p");

  main.id = "main";
  infoText.id = "info-text";

  heading.textContent = "Restaurant's menu";
  infoText.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe labore laboriosam deleniti, cum ea debitis inventore incidunt, in vel dolorum veritatis earum nulla illo magni voluptatum? Quaerat possimus tenetur nostrum?";

  main.appendChild(heading);
  main.appendChild(infoText);
  content.appendChild(main);
};

const buildContact = () => {
  const main = document.createElement("div");
  const heading = document.createElement("h1");
  const infoText = document.createElement("p");

  main.id = "main";
  infoText.id = "info-text";

  heading.textContent = "contacts";
  infoText.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe labore laboriosam deleniti, cum ea debitis inventore incidunt, in vel dolorum veritatis earum nulla illo magni voluptatum? Quaerat possimus tenetur nostrum?";

  main.appendChild(heading);
  main.appendChild(infoText);

  content.appendChild(main);
};

const deleteOtherPages = () => {
  const otherPage = header.nextSibling;
  if (otherPage != null) {
    otherPage.remove();
  }
};

const header = buildHeader();
buildHomepage();
switchSelected();
