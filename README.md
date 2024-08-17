# Personal-portfolio

# Gebruikte Technologien

-Front end: HTML, CSS, JS
-Backend: Node.js en, express.

# Onderstaande elementen worden opgenomen in deze portfolio:

# 1 Elementen selecteren:

`document.getElementById ('MenuBtn')' en document.querySelectorAll('nav ul li a')` werden gebruikt voor het selecteren van zowel het menu-knop als het navigatielinks. `let sections = document.querySelectorAll('section')` werd gebruikt om alle secties van de pagina te selecteren. Om het formulier met het ID te slecteren werd  `const form = document.getElementById("contactForm")`gebuikt;
Om alle input en tekst area-velden binnen het formulier te selecteren werd `const inputs = Array.from(form.querySelectorAll('input, textarea'))`;

# 2 Elementen manipuleren
Aan de body werd er een klasse toegevoegd/verwijderd toegewijzen `('classList.toggle('mobile-nav-active'))`, en de klasse van het menu-iccontje werd gewijzigd met `this.classList.toggle('fa-xmark')`.

# 3 Event aan een element koppelen
`MenuBtn.addEventListener('click', function(e){..}), koppelt een 'click' event aan de 'MenuBtn'.`
Om een 'submit' event aan het formulier te koppelen, werd er `form;addEventListener('submit', submitHandle)` gebruikt.

# 4 Formulieren valideren
Om alle te controleren of alle benodigde velden in het formulier ingevuld zijn, heb ik gebruik gemaak van 'beslissingen': `if(fullname && email && subject && msg){...}.` 

# Gebuiken van een constant.
Volgend op de nr 4, werd en een constant gebruiikt: `const dataForm ={fullname, email, subject, msg}`, om de formuliergegevens op te slaan. 

# Gebruiken van template literals
Om de gegevens van het formulier in de console weer te geven heb ik de volgende templeate literals gebruikt: 
 console.log(`Form Data: ${JSON.stringify(dataForm, null, 2)}`);



# Destructuring
Om de waarden van de iputvelden te extraheren was het ideaal om destructurereing toe te passen: 
`const [fullname, email, subject, msg] = inputs.map(input => input.value);`


# Spread & Rest operator



# Iteration over een array en Arrow function
Hier werd er geberuikt gemaakt van high order arrays:
`sections.forEach(section =>{}) en navLinks.forEach(link =>{})`, werden gebruikt om te itereren over arrays van secties en links om de actieve link te bepalen.
`inputs.map(input => input.value);`, intereert over de inputs om hun waarden extraheren. In beide codes is er ook te zien dat de arrow function werd toegepast.
. 

# Callback function
`const submitHandle = (event) =>{event.preventDefault()};`, is een callback function die wordt aangeropen bij het indienen van het formulier.


# Promise
De `fetch` aanroep in `fetchAndDisplayDat` stuurt een `promis terug`, die verder wordt afgehandeld met `async/await`;


# Consumer methods
 `response.json()` is een consumer method die dient om de respons van `fetch` om te zetten in JSON.



# Async & Await
`async function fetchAndDIsplayData(){} gebruikt `async` en `await` om de `fetch` aanroep af te handelen.



# Self executing function
`(function () {console.log('This self executing function is being executed');})()`; is een self-exucuting function die onmiddelijk na definitie wordt uitgevoerd. Eigenlijk heeft deze code geen doel in deze code dan te tonen dat ik het wel kan toepassen. Wat wil zeggen dat de functionaliteit van het formulier en de rest van de code nog steeds gaan werken zonde de 'self-executing function'



# Fetch om data op te halen
`const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');` haalt de data op van de externe API met `fecth`.




# JSON manipuleren en weergeven
`const fecthedData =  await response.json();` wordt dan gebuikt om de opgehaalde JSON-data te verwerken en logt deze vervolgens naar de console.


# Basis CSS Animatie
De sociale media iconen in het profielgedeelte hebben eenn hover effect, waarbij de achtergrondkleur verandert naar de themakleur wanneer de gebruiker erover hovert.
De navigatieprictogrammen veranderen ook vankleur naar de themakleur wanner de gebruiker erover hovert. Daarnaast zijn er wat overgangen toegevoegd aan verschillende elementen, zoals de iconen en neavigatielinks. Dit betekent dat wanneer de gebruikeer een actie uitvoet, zoals hoveren over dden link of een pictiogram, de kleur-of achtergrondveranderingen vloeiend verlopen, war een subtiel animatie-effect creert.



# Gebruiken van een flexbox of CSS grid
In de portfolio wer er gebruikt gemaakt van display:flex in verschillende sectiess, zoals de `.about-col` en `.icon-list-col` klassen. Ik heb helaas geen gebruik gemaakty van een css grid.

# Gebruik van LocalStorage
`localStorage.setItem('contactFormData', JSON.stringify(dataForm));` slaat dan de gegevens van het formlie op in `LocalStorage`.
