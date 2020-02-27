function toggle(menu) {
    const otherPage = document.getElementsByClassName('other-page');
    const layoutSocialmedia = document.getElementsByClassName('layout-socialmedia');
    console.log(menu, otherPage[0], layoutSocialmedia[0]);
    menu.classList.toggle("show");
    otherPage[0].classList.toggle('hide');
    layoutSocialmedia[0].classList.toggle('hide');
}