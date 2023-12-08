
document.getElementById('joinBtn').addEventListener('click', function () {

    let notification = document.createElement('div');
    notification.classList.add('alert', 'alert-info', 'position-fixed', 'top-50', 'start-50', 'translate-middle', 'text-center');
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `<strong>Avengers are coming for you!</strong> They'll contact you soon.`;

    document.body.appendChild(notification);
    setTimeout(function () {
        notification.remove();
    }, 3000);
});
