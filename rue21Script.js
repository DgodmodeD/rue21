const cardRows = document.querySelectorAll('.card-container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    cardRows.forEach(row => observer.observe(row));

    // Each product size's selector
    document.querySelectorAll('.size-button').forEach(button => {
        button.addEventListener('click', () => {
            // Removes "selected" from all buttons
            document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
            // Adds "selected" to clicked button
            button.classList.add('.selected');
        });
    });