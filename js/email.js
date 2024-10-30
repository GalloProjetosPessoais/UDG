(function () {
    emailjs.init("nOBJnoZudh7jX5CFf"); // Substitua com seu User ID do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_nvf8rk1', 'template_19fq5fq', this)
        .then(function () {
            Swal.fire({
                title: "Email Sent",
                text: "Thank you, for the contact! We will reply as soon as we can!",
                icon: "success",
                confirmButtonColor: '#212529'
            })
        }, function (error) {
            console.log('Ocorreu um erro: ' + JSON.stringify(error));
        });
});