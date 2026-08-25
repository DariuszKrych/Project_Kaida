// The sidebar starts hidden on every page (see nav ul in navigation_bar.css).
// Adding "?nav=open" to a page URL makes it load with the sidebar expanded instead.
// That flag is what /welcome/ redirects to, so a shared link can greet a first
// time visitor with the whole navigation already on screen.
const OPEN_ON_LOAD_PARAM = "nav";
const OPEN_ON_LOAD_VALUE = "open";

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

function applyInitialSidebarState(){
    const params = new URLSearchParams(window.location.search);
    if (params.get(OPEN_ON_LOAD_PARAM) === OPEN_ON_LOAD_VALUE){
        showSidebar();
    }
}

// This file is loaded with "async defer", so it may run before or after the
// document has finished parsing. Only wait for DOMContentLoaded if it is still
// pending, otherwise the listener would never fire.
if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", applyInitialSidebarState);
} else {
    applyInitialSidebarState();
}
