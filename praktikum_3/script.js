<<<<<<< HEAD
// dynamic apperance changer
=======
// head style
const title = document.querySelector("title");
title.innerHTML = "Praktikum 3";

const favicon = document.querySelector("link");
favicon.type = "image/png";
favicon.href = "./img/Favicon.png";
favicon.rel = "icon";
document.head.appendChild(favicon);
// head style

// Body
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)
const body = document.body;
body.style.width = "100%";
body.style.height = "100vh";

<<<<<<< HEAD
function MainContent() {
  const WrapperContent = document.createElement("div");
  WrapperContent.innerHTML = `
          <h1 id="titleD" class="text-center fw-bold">Dynamic Apperance Changer</h1>
          <div class="container mt-4">
            <div class=" container d-flex flex-column flex-wrap gap-3">
              <div class=" ju stify-content-center d-flex w-100 flex-column  gap-2">
                <div class="dropdown">
                <button id="changeBg" class="fw-bold btn btn-primary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Change Background Color</button>
                  <ul class="w-100 dropdown-menu">
                    <li><button class="fw-bold dropdown-item" id="ChangeBgSage" type="button">Sage</button></li>
                    <li><button class="fw-bold dropdown-item" id="ChangeBgSkyBlue" type="button">Sky Blue</button></li>
                    <li><button class="fw-bold dropdown-item" id="ChangeBgOrange" type="button">Orange</button></li>
                  </ul>
                </div>
                <button id="darkMode" type="button" class="fw-bold btn btn-dark">Toggle Dark Mode </button>
                <div class="dropdown">
                <button id="fontStyle" class="fw-bold w-100 btn btn-danger dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">Toggle Font Style</button>
                <ul class="w-100 dropdown-menu">
                  <li><button class="fw-bold dropdown-item" id="FontStylePoppins" type="button">Poppins</button></li>
                  <li><button class="fw-bold dropdown-item" id="FontStyleRaleway" type="button">Raleway</button></li>
                  <li><button class="fw-bold dropdown-item" id="FontStyleSerif" type="button">Serif</button></li>
                  <li><button class="fw-bold dropdown-item" id="FontStyleSansSerif" type="button">Sans Serif</button></li>
                </ul>
              </div>
              </div>
              <div class="textbox w-100">
                <ul class="list-unstyled d-flex w-100  gap-3 align-items-center">
                  <li id="TextFS">Font Size: </li>
                  <li class="w-75"><input id="ResizerFont" value="12" class="w-100 mt-2" type="range"><li id="IndicatorFontSize"></li></li>
                </ul>
                  <blockquote class="w-100  h-auto blockquote rounded-2 p-1">
                  <p id="TextSize">lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </blockquote>
              </div>
            </div>
          </div>
          `;
=======
// Main content
function MainContent() {
  const WrapperContent = document.createElement("div");
  WrapperContent.innerHTML = `
  <h1 class=" text-center">Dynamic Apperance Changer</h1>
  <div class="wrapperContent">
    <div class=" container d-flex flex-column flex-wrap gap-3">
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Change Background Color</button>
        <ul class="w-100 dropdown-menu">
          <li><button class="dropdown-item" id="ChangeBgSage" type="button">Sage</button></li>
          <li><button class="dropdown-item" id="ChangeBgSkyBlue" type="button">Sky Blue</button></li>
          <li><button class="dropdown-item" id="ChangeBgOrange" type="button">Orange</button></li>
        </ul>
      </div>
      <button id="darkMode" type="button" class="btn btn-dark">Toggle Dark Mode </button>
      <div class="dropdown">
        <button class="btn btn-danger dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Toggle Font Style</button>
        <ul class="w-100 dropdown-menu">
          <li><button class="dropdown-item" id="FontStylePoppins" type="button">Poppins</button></li>
          <li><button class="dropdown-item" id="FontStyleRaleway" type="button">Raleway</button></li>
        </ul>
      </div>
      <div class="textbox">
        <ul class="list-unstyled d-flex w-100  gap-3 align-items-center">
          <li>Font Size: </li>
          <li class="w-75"><input id="ResizerFont" value="1" class="w-100 mt-2" type="range"><li id="IndicatorFontSize"></li></li>
        </ul>
        <blockquote class="h-auto w-100 blockquote rounded-2 p-1">
          <p id="TextSize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cumque. Perferendis quisquam sunt nihil aliquid ratione consectetur recusandae iste quidem. Quia minima provident illo quaerat! Repellendus ex obcaecati explicabo magnam. Commodi placeat sed mollitia modi enim ducimus nesciunt ipsam deleniti. Eaque laudantium, quasi eveniet quos labore recusandae repellendus laboriosam, dolores sunt quisquam repellat cupiditate sed praesentium consequatur odit sequi porro iste mollitia perspiciatis molestiae! Nam ipsum odit delectus, nostrum ab doloribus expedita quaerat quisquam temporibus ut suscipit autem aliquam dolor?</p>
        </blockquote>
      </div>
    </div>
  </div>
  `;
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)
  document.body.appendChild(WrapperContent);
}
MainContent();

<<<<<<< HEAD
=======
// // Select all buttons with the class 'dropdown-item'

// change bg color
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)
const ChangeBgSage = document.getElementById("ChangeBgSage");
const ChangeBgSkyBlue = document.getElementById("ChangeBgSkyBlue");
const ChangeBgOrange = document.getElementById("ChangeBgOrange");

ChangeBgSage.addEventListener("click", () => {
<<<<<<< HEAD
  if (body.classList.contains("bg-dark")) {
    alert("Tidak dapat mengubahh ke sage karena berada di dark mode");
    alert("Kembaliakan ke light mode terlebih dahulu");
  } else {
    document.body.style.backgroundColor = "#D4F6CC";
  }
});

ChangeBgSkyBlue.addEventListener("click", () => {
  if (body.classList.contains("bg-dark")) {
    alert("Tidak dapat mengubahh ke Sky blue karena berada di dark mode");
    alert("Kembaliakan ke light mode terlebih dahulu");
  } else {
    document.body.style.backgroundColor = "skyblue";
  }
});

ChangeBgOrange.addEventListener("click", () => {
  if (body.classList.contains("bg-dark")) {
    alert("Tidak dapat mengubahh ke orange karena berada di dark mode");
    alert("Kembaliakan ke light mode terlebih dahulu");
  } else {
    document.body.style.backgroundColor = "orange";
  }
});

=======
  document.body.style.backgroundColor = "#D4F6CC";
});

ChangeBgOrange.addEventListener("click", () => {
  document.body.style.backgroundColor = "orange";
});

ChangeBgSkyBlue.addEventListener("click", () => {
  document.body.style.backgroundColor = "skyblue";
});
// change bg color

// dark mode
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
  if (document.body.classList.contains("bg-dark")) {
    document.body.className = "";
<<<<<<< HEAD
    darkMode.innerHTML = "Toggle Dark Mode";
    darkMode.className = "fw-bold btn btn-dark";
  } else {
    document.body.className = "bg-dark text-white";
    darkMode.innerHTML = "Toggle Light Mode";
    darkMode.className = "fw-bold btn btn-light";
  }
});

const FontStylePoppins = document.getElementById("FontStylePoppins");
const FontStyleRaleway = document.getElementById("FontStyleRaleway");
const FontStyleSansSerif = document.getElementById("FontStyleSansSerif");
const FontStyleSerif = document.getElementById("FontStyleSerif");
=======
    darkMode.innerHTML = "Dark Mode";
    darkMode.className = "btn btn-dark";
  } else {
    document.body.className = "bg-dark text-white";
    darkMode.innerHTML = "Light Mode";
    darkMode.className = "btn btn-light";
  }
});
// dark mode

// change font style
const FontStylePoppins = document.getElementById("FontStylePoppins");
const FontStyleRaleway = document.getElementById("FontStyleRaleway");
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)

FontStylePoppins.addEventListener("click", () => {
  if (body.style.fontFamily === "") {
    body.style.fontFamily = "Poppins";
  } else {
    body.style.fontFamily = "";
  }
});

FontStyleRaleway.addEventListener("click", () => {
  if (body.style.fontFamily === "") {
    body.style.fontFamily = "Raleway";
  } else {
    body.style.fontFamily = "";
  }
});

<<<<<<< HEAD
FontStyleSansSerif.addEventListener("click", () => {
  if (body.style.fontFamily === "") {
    body.style.fontFamily = "sans-serif";
  } else {
    body.style.fontFamily = "";
  }
});

FontStyleSerif.addEventListener("click", () => {
  if (body.style.fontFamily === "") {
    body.style.fontFamily = "serif";
  } else {
    body.style.fontFamily = "";
  }
});

=======
// change font style

// change font size
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)
const ResizerFont = document.getElementById("ResizerFont");
IndicatorFontSize.innerHTML = ResizerFont.value + "px";
ResizerFont.addEventListener("input", () => {
  IndicatorFontSize.innerHTML = ResizerFont.value + "px";
  TextSize.style.fontSize = ResizerFont.value + "px";
<<<<<<< HEAD
  darkMode.style.fontSize = ResizerFont.value + "px";
  const changeBg = document.getElementById("changeBg");
  changeBg.style.fontSize = ResizerFont.value + "px";
  const fontStyle = document.getElementById("fontStyle");
  fontStyle.style.fontSize = ResizerFont.value + "px";
  const titleD = document.getElementById("titleD");
  titleD.style.fontSize = ResizerFont.value + "px";
  const titleTodo = document.getElementById("titleTodo");
  titleTodo.style.fontSize = ResizerFont.value + "px";
  newTask.style.fontSize = ResizerFont.value + "px";
  const addTask = document.getElementById("addTask");
  addTask.style.fontSize = ResizerFont.value + "px";
  IndicatorFontSize.style.fontSize = ResizerFont.value + "px";
  const TextFS = document.getElementById("TextFS");
  TextFS.style.fontSize = ResizerFont.value + "px";
  const taskContent = document.getElementById("taskContent");
  taskContent.style.fontSize = ResizerFont.value + "px";
  taskItem.style.fontSize = ResizerFont.value + "px";
});
// dynamic apperance changer
=======
  if (ResizerFont.value <= 0) {
    TextSize.style.fontSize = "";
    alert("Font Size tidak boleh kurang dari 0");
  }
});
// change font size
>>>>>>> parent of 2e8757f (Delete praktikum_3 directory)
