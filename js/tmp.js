(function () {
  "use strict";
  
  let light = true;
  localStorage.setItem("light", JSON.stringify(light));

  let darkState = {
    header_bg: "#FFFFFF",
    body_bg: "#dee1e6",
    footer_bg: "#ffffff",
    footer_border: "1px solid #FFFFFF",
    contact_bg: "#2c65ad",
    contact_font: "#ffffff",
    contact_border: "1px solid #A3C7D6",
    menu: "#000000",
  };

  let lightBtn = document.getElementById("light-mode_icon");
  let profileImg = document.getElementById("circle_profile");
  let coverLetter = document.getElementById("cl");
  let papers = document.querySelectorAll(".paper");
  let clay1 = document.getElementById("tri");
  let clay2 = document.getElementById("sqr");
  let footer = document.getElementById("footer");
  let menu = document.getElementById("menu");
  let contactBtn = document.getElementById("contact");
  let algoMain = document.getElementById("algo-main");
  let blueCards = document.querySelectorAll(".blu");
  let lis = document.querySelectorAll("li");

  let header = document.getElementById("header");
  let body = document.getElementById("body");
  lightBtn.addEventListener("click", (e) => {
    if (JSON.parse(localStorage.getItem("light")) === true) {
      lightBtn.setAttribute("name", "moon-outline");
      lightBtn.style.color = "#ffffff";

      header.classList.add("header_dark");
      body.classList.add("body_dark");
      footer.classList.add("footer_dark");
      contactBtn.classList.add("contact_btn_dark");
      menu.style.color = "#ffffff";

      lis.forEach((li) => {
        li.style.color = "#ffffff";
      });

      if (profileImg !== null) {
        profileImg.style.backgroundColor = "#EEB76B";
        clay1.setAttribute("src", "img/icosa.png");
        clay2.setAttribute("src", "img/dodeca.png");
      }
      if (papers !== null) {
        papers.forEach((sheet) => {
          sheet.style.color = "black";
        });
      }
      if (coverLetter !== null) {
        coverLetter.classList.add("cover-letter_dark");
        coverLetter.style.color = "#ffffff";
      }
      if (algoMain !== null) {
        algoMain.style.color = "#ffffff";
      }
      if (blueCards !== null) {
        blueCards.forEach((card) => {
          console.log("card:", card);
          card.style.backgroundColor = "#2c65ad";
          card.style.border = "1px solid #A3C7D6";
        });
      }
      body.style.color = "white";
      light = false;
      localStorage.setItem("light", JSON.stringify(light));
    } else {
      lightBtn.setAttribute("name", "sunny-outline");
      lightBtn.style.color = "#000000";

      header.classList.remove("header_dark");
      body.classList.remove("body_dark");
      footer.classList.remove("footer_dark");
      contactBtn.classList.remove("contact_btn_dark");
      menu.style.color = darkState.menu;
      lis.forEach((li) => {
        li.style.color = "#000000";
      });

      if (profileImg !== null) {
        profileImg.style.backgroundColor = "#3a89e9";
        clay1.setAttribute("src", "img/Gon_4_Standing_Outline0000.png");
        clay2.setAttribute("src", "img/Gon_3_Down_Standing_Outline0003.png");
      }
      if (papers !== null) {
        papers.forEach((sheet) => {
          sheet.style.color = "#000000";
        });
      }
      if (coverLetter !== null) {
        coverLetter.classList.remove("cover-letter_dark");
        coverLetter.style.color = "#000000";
      }
      if (algoMain !== null) {
        algoMain.style.color = "#000000";
      }
      if (blueCards !== null) {
        blueCards.forEach((card) => {
          card.style.backgroundColor = "#2c65ad";
          card.style.border = "1px solid #A3C7D6";
        });
      }
      body.style.color = "#000000";
      light = true;
      localStorage.setItem("light", JSON.stringify(light));
    }
  });
})();
