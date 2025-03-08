let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onClick = () => {
    menu.ClassList.toggle('bx-x');
    navlist.ClassList.toggle('open')
}