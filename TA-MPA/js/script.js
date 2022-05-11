$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function sideBar_open() {
  document.getElementById("sideBar").style.width = "200px";
  document.getElementById("sideBar").style.display = "block";
  document.getElementById("sideBar").style.position = "fixed";
  document.getElementById("openNav").style.display = "none";
}

function sideBar_close() {
  document.getElementById("sideBar").style.display = "none";
  document.getElementById("openNav").style.display = "block";
}
