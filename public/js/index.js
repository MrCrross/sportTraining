const counterElements = document.querySelectorAll('.counter');

counterElements.forEach(elem => {
    const counter = new CaloriesCounter(elem);
    counter.init();
});
