 function toggleReservation() {
    const section = document.getElementById("reservation-section");
    if (section.style.display === "none" || section.style.display === "") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  const reserveList = [
    { name: 'Faq', middleName: 'shola', lastName: 'sule', email: 'faruq1@gmail.com' },
    { name: 'Faq', middleName: 'bola', lastName: 'sule', email: 'faruq1@gmail.com' }
  ];

  renderReseverList();

  function renderReseverList() {
    let reserveListHTML = '';
    for (let i = 0; i < reserveList.length; i++) {
      const reserveObject = reserveList[i];
      const { name, middleName, lastName, email } = reserveObject;
      reserveListHTML += `
        <p>
          ${name} ${middleName} ${lastName} ${email}
          <button onclick="removeReservation(${i})" class="remove-button">Remove</button>
        </p>`;
    }
    document.querySelector('.js-reserve-list').innerHTML = reserveListHTML;
  }

  function reserveButton() {
    const inputElement = document.querySelector('.js-reserve-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const middleName = dateInputElement.value;

    const lastNameElement = document.querySelector('.js-lastName-input');
    const lastName = lastNameElement.value;

    const emailInputElement = document.querySelector('.js-email-input');
    const emailInput = emailInputElement.value;

    reserveList.push({ name, middleName, lastName, email: emailInput });

    inputElement.value = "";
    dateInputElement.value = "";
    lastNameElement.value = "";
    emailInputElement.value = "";

    renderReseverList();
  }

  function removeReservation(index) {
    reserveList.splice(index, 1);
    renderReseverList();
  }


  // slidersection 
  let currentSlider = 0;
  const slider = document.querySelector(".slider")
  const slide = document.querySelectorAll(".slides")
  const totalSlider = slide.length;

  function showSlide(index){
    slider.style.transform = `translateX(-${index * 100}%)`
    slider.style.transition = "transform 1s ease-in-out";
  }
    setInterval(() => {
  currentSlider = (currentSlider + 1) % totalSlider;
  showSlide(currentSlider);
}, 5000);

   
let cartQuanity = 1;
const priceperItems = 350
function updateNumber(){
document.querySelector('.input-box') .value = cartQuanity;
}
function updatePrice(){
  document.querySelector('.price') .innerHTML =`$${(cartQuanity * priceperItems)}`

}
function addCart(){
  cartQuanity += 1;
  updateNumber();
  updatePrice(); 
}
  updateNumber();
  updatePrice(); 

function removeCart(){
  if (cartQuanity > 1){
    cartQuanity -=1;
    updateNumber();
    updatePrice(); 
  }
}
document.querySelector('.input-box').addEventListener('input', function(e) {
  let value = parseInt(e.target.value);
  if (!isNaN(value) && value > 0) {
    cartQuanity = value; // update global quantity
    updatePrice();
  }
  });

function popOut(){
  const displayPop = document.querySelector('.js-pop-out-quick-buy');
  if (displayPop.style.display === "none" || displayPop.style.display === ""){
    displayPop.style = "block"
  }else {
    displayPop.style.display ="none"
  }
}
function closePopup() {
  document.querySelector('.js-pop-out-quick-buy').style.display = 'none';
}


