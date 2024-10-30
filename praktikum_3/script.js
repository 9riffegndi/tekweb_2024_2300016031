// dynamic appearance changer
// head style
const title = document.querySelector("title");
title.innerHTML = "Praktikum 3";

const favicon = document.createElement("link");
favicon.type = "image/png";
favicon.href = "./img/Favicon.png";
favicon.rel = "icon";
document.head.appendChild(favicon);
// head style

// Body
const body = document.body;
body.style.width = "100%";
body.style.height = "100vh";

function MainContent() {
  const WrapperContent = document.createElement("div");
  WrapperContent.innerHTML = `
          <h1 id="titleD" class="text-center fw-bold">Dynamic Appearance Changer</h1>
          <div class="container mt-4">
            <div class="container d-flex flex-column flex-wrap gap-3">
              <div class="justify-content-center d-flex w-100 flex-column gap-2">
                <div class="dropdown">
                <button id="changeBg" class="fw-bold btn btn-primary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Change Background Color</button>
                  <ul class="w-100 dropdown-menu">
                    <li><button class="fw-bold dropdown-item" id="ChangeBgSage" type="button">Sage</button></li>
                    <li><button class="fw-bold dropdown-item" id="ChangeBgSkyBlue" type="button">Sky Blue</button></li>
                    <li><button class="fw-bold dropdown-item" id="ChangeBgOrange" type="button">Orange</button></li>
                  </ul>
                </div>
                <button id="darkMode" type="button" class="fw-bold btn btn-dark">Toggle Dark Mode</button>
                <div class="dropdown">
                <button id="fontStyle" class="fw-bold w-100 btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Toggle Font Style</button>
                <ul class="w-100 dropdown-menu">
                  <li><button class="fw-bold dropdown-item" id="FontStylePoppins" type="button">Poppins</button></li>
                  <li><button class="fw-bold dropdown-item" id="FontStyleRaleway" type="button">Raleway</button></li>
                  <li><button class="fw-bold dropdown-item" id="FontStyleSerif" type="button">Serif</button></li>
                  <li><button class="fw-bold dropdown-item" id="FontStyleSansSerif" type="button">Sans Serif</button></li>
                </ul>
              </div>
              </div>
              <div class="textbox w-100">
                <ul class="list-unstyled d-flex w-100 gap-3 align-items-center">
                  <li id="TextFS">Font Size: </li>
                  <li class="w-75"><input id="ResizerFont" value="12" class="w-100 mt-2" type="range"><li id="IndicatorFontSize"></li></li>
                </ul>
                  <blockquote class="w-100 h-auto blockquote rounded-2 p-1">
                  <p id="TextSize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </blockquote>
              </div>
            </div>
          </div>
          `;
  document.body.appendChild(WrapperContent);
}
MainContent();

// Change background color
const ChangeBgSage = document.getElementById("ChangeBgSage");
const ChangeBgSkyBlue = document.getElementById("ChangeBgSkyBlue");
const ChangeBgOrange = document.getElementById("ChangeBgOrange");

ChangeBgSage.addEventListener("click", () => {
  if (body.classList.contains("bg-dark")) {
    alert("Tidak dapat mengubah ke sage karena berada di dark mode.");
    alert("Kembalikan ke light mode terlebih dahulu.");
  } else {
    document.body.style.backgroundColor = "#D4F6CC";
  }
});

ChangeBgSkyBlue.addEventListener("click", () => {
  if (body.classList.contains("bg-dark")) {
    alert("Tidak dapat mengubah ke Sky Blue karena berada di dark mode.");
    alert("Kembalikan ke light mode terlebih dahulu.");
  } else {
    document.body.style.backgroundColor = "skyblue";
  }
});

ChangeBgOrange.addEventListener("click", () => {
  if (body.classList.contains("bg-dark")) {
    alert("Tidak dapat mengubah ke orange karena berada di dark mode.");
    alert("Kembalikan ke light mode terlebih dahulu.");
  } else {
    document.body.style.backgroundColor = "orange";
  }
});

// Dark mode
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
  if (document.body.classList.contains("bg-dark")) {
    document.body.className = "";
    darkMode.innerHTML = "Toggle Dark Mode";
    darkMode.className = "fw-bold btn btn-dark";
  } else {
    document.body.className = "bg-dark text-white";
    darkMode.innerHTML = "Toggle Light Mode";
    darkMode.className = "fw-bold btn btn-light";
  }
});

// Change font style
const FontStylePoppins = document.getElementById("FontStylePoppins");
const FontStyleRaleway = document.getElementById("FontStyleRaleway");
const FontStyleSansSerif = document.getElementById("FontStyleSansSerif");
const FontStyleSerif = document.getElementById("FontStyleSerif");

FontStylePoppins.addEventListener("click", () => {
  body.style.fontFamily = "Poppins";
});

FontStyleRaleway.addEventListener("click", () => {
  body.style.fontFamily = "Raleway";
});

FontStyleSansSerif.addEventListener("click", () => {
  body.style.fontFamily = "sans-serif";
});

FontStyleSerif.addEventListener("click", () => {
  body.style.fontFamily = "serif";
});

// Change font size
const ResizerFont = document.getElementById("ResizerFont");
const IndicatorFontSize = document.getElementById("IndicatorFontSize");
const TextSize = document.getElementById("TextSize");

IndicatorFontSize.innerHTML = ResizerFont.value + "px";
ResizerFont.addEventListener("input", () => {
  IndicatorFontSize.innerHTML = ResizerFont.value + "px";
  TextSize.style.fontSize = ResizerFont.value + "px";
  darkMode.style.fontSize = ResizerFont.value + "px";
  const changeBg = document.getElementById("changeBg");
  changeBg.style.fontSize = ResizerFont.value + "px";
  const fontStyle = document.getElementById("fontStyle");
  fontStyle.style.fontSize = ResizerFont.value + "px";
  const titleD = document.getElementById("titleD");
  titleD.style.fontSize = ResizerFont.value + "px";
  const indicatorFontSize = document.getElementById("IndicatorFontSize");
  indicatorFontSize.style.fontSize = ResizerFont.value + "px";
  const TextFS = document.getElementById("TextFS");
  TextFS.style.fontSize = ResizerFont.value + "px";
});

// Ensure font size is valid
if (ResizerFont.value <= 0) {
  TextSize.style.fontSize = "";
  alert("Font Size tidak boleh kurang dari 0.");
}
