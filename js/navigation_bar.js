function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
    const menuButton = document.getElementById("menu_button");
    menuButton.style.display = "none";
}

function closeSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
    const menuButton = document.getElementById("menu_button");
    menuButton.style.display = "flex";
}