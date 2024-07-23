// Header toggle

let MenuBtn = document.getElementById ('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
})


//Typing effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Web Developer!', 'Freelancer!'],
    typedspeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})


/*------Active link State on Scroll------*/

//Get all links

let navLinks = document.querySelectorAll('nav ul li a');
 //Get all Sections
 let sections = document.querySelectorAll('section')


 window.addEventListener('scroll', function(){
  const scrollPos = window.scrollY + 20
  sections.forEach(section => {
    if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
      navLinks.forEach(link => {
        link.classList.remove('active'); 
        if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('active')
        }
      });
    }
  });
 });




 /*-----contact form validation-----*/

 //Elementen selecteren
const form = document.getElementById("contactForm");
const inputs = Array.from(form.querySelectorAll('input, textarea'));

// Callback function for submission
const submitHandle = (event) =>{
  event.preventDefault();



//Gebruik maken van destructuring en manipuleren van elementen
const [fullname, email, subject, msg] = inputs.map(input => input.value)


//Formulier valideren 
if(fullname && email && subject && msg) {

  //Gebruiken van eenn constante
  const dataForm = {
    fullname, email, subject, msg
  };

///Gebruiken van template literals
console.log(`Form Data: ${JSON.stringify(dataForm, null, 2)}`);


//Gebruik maken van localstorage
localStorage.setItem('contactFormData', JSON.stringify(dataForm));

//Form wissen of restten
form.reset();

//Data halen en weergeven foor te fetchen

fetchAndDIsplayData();
} else{
  alert('Please fill out all required fields.');
}

};



//Event aan een element koppelen
form.addEventListener('submit', submitHandle);

//Async & Await, Fetch, JSON manipuleren en weergeven

async function fetchAndDIsplayData(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    const fecthedData =  await response.json();

    console.log('Fetched Data:', fecthedData);
  } catch(error) {
    console.error('An error had been identied during data fetch:', error);
  }
}
  
//Self executing function
(function () {
  console.log('This self executing function is being executed');
})();

















































/*construct the email body using the form values
 function sendEmail() {
  const bodyMessage = `
  Full name: ${fname.value}<br>
  Email: ${email.value}<br>
  Subject: ${subject.value}<br>
  Message: ${msg.value}
`;

//send the email
      Email.send({
        SecureToken : "2a2197bb-aeec-4a4b-9bd5-9f76c7f2717c", //Encrypts SMTP credentials.
        Username : "francessiyamu01@gmail.com",
        Password : "A6515F7D46E31C82734DEE5594860589D6BD",
        To : 'francessiyamu01@gmail.com',
        From : "francessiyamu01@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      //pop up message
      message => {
        if (message == "OK"){
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      }
      
    );
 }

 



 form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents the default form submission
 
  sendEmail();


  //reset the input field
  form.reset();
  return false;

 });


*/
