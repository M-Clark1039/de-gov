let index_head_image = document.querySelector('img');

index_head_image.onclick = function() {
  let img_src= index_head_image.getAttribute('src');
  if (img_src == 'images/state-flag-of-delaware.gif') {
    index_head_image.setAttribute('src', 'images/ncc-flag.png');
  } else if (img_src == 'images/ncc-flag.png') {
      index_head_image.setAttribute('src', 'images/wilmington-flag.png');
    } else
    index_head_image.setAttribute('src', 'images/state-flag-of-delaware.gif');
}

let index_user_button = document.querySelector('button');
let index_heading = document.querySelector('h1');

function setUserName() {
  let nickname = prompt("Name?");
  if(!nickname) {
    setUserName();
  } else {
  localStorage.setItem('name', nickname);
  index_heading.textContent = "Hompage for " + nickname;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  index_heading.textContent = "Homepage for " + storedName;
}

index_user_button.onclick = function() {
  setUserName();
}