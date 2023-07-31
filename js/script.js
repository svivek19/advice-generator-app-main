const adviceIdEl = document.querySelector('.advice-id');
const adviceEl = document.querySelector('.advice');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            document.querySelector(".advice").innerHTML = advice;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            document.querySelector(".advice").innerHTML = 'Unable to fetch advice. Please try again later.';
        });
});
