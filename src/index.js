export const paintCards = () => {
    let setRedColor = document.querySelectorAll('li');
    for (let i = 0; i < setRedColor.length; i++) {
        if (i % 2 === 0) {
            setRedColor[i].style.backgroundColor = 'red';
        };
    };
};

export const findElement = () => {
    let elem = document.querySelector('li');
    let elements = document.querySelectorAll('li');
    for (let i = 0; i < elements.length; i++) {
        if (elem.matches('.likedItem')) {
            elem.style.backgroundColor = 'blue';
        } else {
            elem = elem.nextElementSibling;
        };
    };
};