//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const finite_btn = document.querySelector(".finite button");
const infinite_btn = document.querySelector(".infinite button");
const culmann_btn = document.querySelector(".finiteSurface_box .culmann_btn");
const taylor_btn = document.querySelector(".finiteSurface_box .taylor_btn");
const general_btn = document.querySelector(".infiniteSurface_box .general_btn");
const seepage_btn = document.querySelector(".infiniteSurface_box .seepage_btn");
// selection of main functions
const culmann_box = document.querySelector(".culmann_box");
const taylor_box = document.querySelector(".taylor_box");
const general_box = document.querySelector(".general_box");
const seepage_box = document.querySelector(".seepage_box");
const info_box = document.querySelector(".info_box");
const finiteSurface_box = document.querySelector(".finiteSurface_box");
const infiniteSurface_box = document.querySelector(".infiniteSurface_box");
// Prev Buttons
const prevBtn1 = document.querySelector(".finiteSurface_box .buttons .prev");
const prevBtn2 = document.querySelector(".infiniteSurface_box .buttons .prev");
const prevBtnCul = document.querySelector(".culmann_box .prev");
const prevBtnTay = document.querySelector(".taylor_box .prev");
const prevBtnGen = document.querySelector(".general_box .prev");
const prevBtnSee = document.querySelector(".seepage_box .prev");


const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}
finite_btn.onclick = () => {
  finiteSurface_box.classList.add("activeInfo");
  info_box.classList.remove("activeInfo");
}
infinite_btn.onclick = () => {
  infiniteSurface_box.classList.add("activeInfo");
  info_box.classList.remove("activeInfo");
}
prevBtn1.onclick = () => {
  finiteSurface_box.classList.remove("activeInfo");
  info_box.classList.add("activeInfo");
}
prevBtn2.onclick = () => {
  infiniteSurface_box.classList.remove("activeInfo");
  info_box.classList.add("activeInfo");
}
culmann_btn.onclick = () => {
  culmann_box.classList.add("activeInfo");
  finiteSurface_box.classList.remove("activeInfo");
}
prevBtnCul.onclick = () => {
  culmann_box.classList.remove("activeInfo");
  finiteSurface_box.classList.add("activeInfo");
}
taylor_btn.onclick = () => {
  taylor_box.classList.add("activeInfo");
  finiteSurface_box.classList.remove("activeInfo");
}
prevBtnTay.onclick = () => {
  taylor_box.classList.remove("activeInfo");
  finiteSurface_box.classList.add("activeInfo");
}
general_btn.onclick = () => {
  general_box.classList.add("activeInfo");
  infiniteSurface_box.classList.remove("activeInfo");
}
prevBtnGen.onclick = () => {
  general_box.classList.remove("activeInfo");
  infiniteSurface_box.classList.add("activeInfo");
}
seepage_btn.onclick = () => {
  seepage_box.classList.add("activeInfo");
  infiniteSurface_box.classList.remove("activeInfo");
}
prevBtnSee.onclick = () => {
  seepage_box.classList.remove("activeInfo");
  infiniteSurface_box.classList.add("activeInfo");
}


// Culmann Method
const calculateCul = document.querySelector(".culmann_box .calculateCul");
var cCul , lCul , wCul , thetaCul , phiCul , fosc ;
const FOSCul = document.querySelector("#FOSCul");
calculateCul.onclick = () => {
  cCul = document.querySelector("#cCul").value;
  console.log(cCul);
  lCul = document.querySelector("#lCul").value;
  console.log(lCul);
  wCul = document.querySelector("#wCul").value;
  console.log(wCul);
  thetaCul = document.querySelector("#thetaCul").value;
  console.log(thetaCul);
  phiCul = document.querySelector("#phiCul").value;
  console.log(phiCul);
  fosc = ((cCul*lCul)+(wCul*Math.cos(thetaCul)*Math.tan(thetaCul)))/(wCul*Math.sin(thetaCul));
  console.log(fosc);
  FOSCul.value = fosc;

}
// taylor's stability number
const calculateTay = document.querySelector(".taylor_box .calculateCul");
var cTay , sTay , gamaTay , hTay , fost;
const FOSTay = document.querySelector("#FOSTay");
calculateTay.onclick = () => {
  cTay = document.querySelector("#cTay").value;
  sTay = document.querySelector("#sTay").value;
  gamaTay = document.querySelector("#gamaTay").value;
  hTay = document.querySelector("#hTay").value;
  fost = cTay/(sTay*gamaTay*hTay);
  console.log(fost);
  FOSTay.value = fost;
}

// General Method
const calculateGen = document.querySelector(".general_box .calculateCul");
var phiGen , phi_Gen , fosg;
const FOSGen = document.querySelector("#FOSGen");
calculateGen.onclick = () => {
  phiGen = document.querySelector("#phiGen").value;
  phi_Gen = document.querySelector("#phi_Gen").value;
  console.log(Math.tan(phiGen));
  console.log(Math.tan(phi_Gen));
  fosg = Math.tan(phiGen)/Math.tan(phi_Gen);
  FOSGen.value = fosg;
}

// Seepage Method
const calculateSee = document.querySelector(".seepage_box .calculateCul");
var ySee ,  ywSee , hSee , zSee , phiSee , betaSee , foss;
const FOSSee = document.querySelector("#FOSSee");
calculateSee.onclick = () => {
  ySee = document.querySelector("#ySee").value;
  ywSee = document.querySelector("#ywSee").value;
  hSee = document.querySelector("#hSee").value;
  zSee = document.querySelector("#zSee").value;
  phiSee = document.querySelector("#phiSee").value;
  betaSee = document.querySelector("#betaSee").value;
  foss = ( (1-(ywSee*hSee/ySee*zSee))*Math.tan(phiSee) ) / Math.tan(betaSee);
  FOSSee.value = foss;

}
