const qs = document.querySelectorAll('.question');
qs.forEach((q) => {
    q.addEventListener('click', () => {
            if (q.parentNode.classList.contains('active')) {
                q.parentNode.classList.toggle('active');
            } else {
                qs.forEach(q => q.parentNode.classList.remove('active'));
                q.parentNode.classList.add('active');
            }
        }

    )
});