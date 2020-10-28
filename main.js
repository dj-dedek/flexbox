function toggleDropdown() {
    let navbarToogle = document.getElementById("navbar-toggle");
    if(navbarToogle.className === 'topnav') {
        navbarToogle.className += ' responsive';
    } else {
        navbarToogle.className = 'topnav'
    }
}