# Personal-portfolio



Elastic Email:
https://elasticemail.com/


# SweetAlert2
pop up box after form submission: https://sweetalert2.github.io/
icons: 



# Smptjs
https://smtpjs.com/
https://elasticemail.com/
At the contact validation, smptjs was used to send emails directly from JavaScript without the need for a backend server.
I started by including SmtpJs in my project via a CDN. An event listener was added on the form which listend for the 'submit' event, prevents the default submission using e.prevetntDefault. In de 'sendEmail' Function, the email body is constructed using the form values and sends the email SmtpJs. A secure token was generated to encrypt the credentials. 
