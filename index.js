// Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
loginBtn.onclick = () => loginModal.style.display = 'flex';
loginModal.onclick = (e) => { 
  if(e.target === loginModal) loginModal.style.display = 'none'; 
}

// Cart Modal
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
cartBtn.onclick = () => cartModal.style.display = 'flex';
cartModal.onclick = (e) => { 
  if(e.target === cartModal) cartModal.style.display = 'none'; 
}

// Products & Cart
const products = document.querySelectorAll('.card button');
const cartItems = document.getElementById('cartItems');
let cart = [];

products.forEach((btn) => {
  btn.onclick = () => {
    const name = btn.parentElement.querySelector('h3').innerText;
    cart.push(name);
    renderCart();
  }
});

function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    const div = document.createElement('div');
    div.innerText = item;
    cartItems.appendChild(div);
  });
}

// Chat Bot
const chatBtnElem = document.getElementById('chatBtn');
const chatBox = document.getElementById('chatBox');
const chatSend = document.getElementById('chatSend');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');

chatBtnElem.onclick = () => {
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

chatSend.onclick = () => {
  const msg = chatInput.value;
  if(!msg) return;

  // User message
  const userDiv = document.createElement('div');
  userDiv.className = 'user';
  userDiv.innerText = msg;
  chatBody.appendChild(userDiv);

  chatInput.value = '';

  // Bot reply
  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.className = 'bot';
    botDiv.innerText = 'Hello! How can I help you?';
    chatBody.appendChild(botDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}
