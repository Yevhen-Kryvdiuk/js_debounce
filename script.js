window.addEventListener('load', () => {
    const input = document.getElementById('inputOne');

    function onChange(event) {
        console.log(event.target.value)
    }

    function debounce(wrapped, delay) {
        let timer;
        return function debounced() {
            clearTimeout(timer);
            timer = setTimeout(() => {
                wrapped(...arguments);
            }, delay);
        }
    }

    let wrapper = debounce(onChange, 1000);

    input.addEventListener('input', wrapper);

});
