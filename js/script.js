document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggler = document.querySelector(".sidebar-toggler");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebar = document.querySelector(".sidebar");

  // Toggle sidebar on button click
  sidebarToggler.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.classList.toggle("open");
  });

  // Close sidebar on button click
  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });
});
