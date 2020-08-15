function sendOrderData() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email-address').value.trim();
    const address = document.querySelector('#address').value.trim();
    const note = document.querySelector('#note').value.trim();
    if (!name) {
        alert('You have to give us your name!');
    } else if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
        alert('Invalid Email address!');
    } else if (address.length < 10) {
        alert('Please give a correct address!');
    } else if (note.indexOf('<') > 0 && note.indexOf('>') > 0) {
        alert('Refrain from using HTML codes.');
    }

}