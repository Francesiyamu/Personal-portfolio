# Personal-portfolio

# Gebruikte Technologien

-Front end: HTML, CSS, JS
-Backend: Node.js en, express.




# How to start locally
Normally the server is actief en runs on port 8080 on localhost. The main server for running the port is at server.js. Node server.js starts the port. 


# icons
https://kit.fontawesome.com

# background image
https://www.freepik.com/videos/category/backgrounds-others


# typing Animation
https://github.com/mattboldt/typed.js/


# SweetAlert2
pop up box after form submission: https://sweetalert2.github.io/
icons: 



# Smptjs
https://smtpjs.com/
https://elasticemail.com/
At the contact validation, smptjs was used to send emails directly from JavaScript without the need for a backend server.
I started by including SmtpJs in my project via a CDN. An event listener was added on the form which listend for the 'submit' event, prevents the default submission using e.prevetntDefault. In de 'sendEmail' Function, the email body is constructed using the form values and sends the email SmtpJs. A secure token was generated to encrypt the credentials. 


