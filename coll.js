let colors = document.getElementsByName("Colors");

let colVal = [];

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", () => {
    if (colors[i].checked) {
      colVal.push(colors[i].value);
    } else {
      let index = colVal.indexOf(colors[i].value);
      if (index > -1) {
        colVal.splice(index, 1);
      }
    }
    console.log(colVal);

    let colorDivs = document.querySelectorAll(".colorDiv");
    for (let count = 0; count < colorDivs.length; count++) {
      let productList = colorDivs[count].querySelectorAll("h1");
      console.log(productList);

      let shouldDisplay = colVal.some(
        (val) =>
          productList[0].innerText.toUpperCase().indexOf(val.toUpperCase()) !==
          -1
      );

      if (shouldDisplay) {
        colorDivs[count].style.display = "flex";
      } else {
        colorDivs[count].style.display = "none";
      }
    }

    if (colVal.length == 0) {
      for (let count = 0; count < colorDivs.length; count++) {
        colorDivs[count].style.display = "flex";
      }
    }

    document.getElementById("ref").innerHTML = colVal;
  });
}

// Occasions
let Occasions = document.getElementsByName("Occasion");
let OccVal = [];
let Ocontainer = document.querySelector("#MainContent");
let OccasionDiv = Ocontainer.querySelectorAll("div");
console.log(OccasionDiv.length);

for (let i = 0; i < Occasions.length; i++) {
  Occasions[i].addEventListener("click", () => {
    if (Occasions[i].checked) {
      OccVal.push(Occasions[i].value);
    } else {
      let index = OccVal.indexOf(Occasions[i].value);
      if (index > -1) {
        OccVal.splice(index, 1);
      }
    }
    console.log(OccVal);

    for (let count = 0; count < OccasionDiv.length; count++) {
      let productList = OccasionDiv[count].querySelectorAll("h1");
      console.log(productList);

      let shouldDisplay = OccVal.some(
        (val) =>
          productList[0].innerText.toUpperCase().indexOf(val.toUpperCase()) !==
          -1
      );

      if (shouldDisplay) {
        OccasionDiv[count].style.display = "flex";
      } else {
        OccasionDiv[count].style.display = "none";
      }
    }

    if (OccVal.length == 0) {
      for (let count = 0; count < OccasionDiv.length; count++) {
        OccasionDiv[count].style.display = "flex";
      }
    }

    document.getElementById("refocc").innerHTML = OccVal;
  });
}
