const wordInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultInput = document.getElementById("result");
const easterEgg = document.querySelector(".checker");

const checkPalindrome = word =>{
  const wordInput = word;

  if(word === ""){
    alert("Please input a value");
    return
  }
  resultInput.replaceChildren();

  const lowerCase = word.replace(/[^A-Za-z0-9]/gi, "").toLowerCase(); //remove everything that is not(^) in A-Za-z0-9


 //reverse() just work with arrays
  let resultMsg = `${wordInput} ${ lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;


  const pElement = document.createElement('p');
  pElement.className = "user-input";
  pElement.innerText = resultMsg;
  resultInput.appendChild(pElement);
  resultInput.classList.remove("hidden");
  const insertDiv = document.querySelector(".insert");

insertDiv.style.height = "auto";
insertDiv.style.paddingBottom = "20px";
};

checkButton.addEventListener("click", () =>{
  checkPalindrome(wordInput.value);
  wordInput.value = ""; //to remove the word
});

wordInput.addEventListener('keydown', r => {
  if(r.key === 'Enter'){
    checkPalindrome(wordInput.value);
    wordInput.value ='';
  }else if (r.key === ' ') {
    easterEgg.style.backgroundImage = "url('https://tm.ibxk.com.br/2023/11/21/21132537157200.jpg')";
    easterEgg.style.backgroundSize = "cover";  
    easterEgg.style.backgroundPosition = "center"; 
  }
})