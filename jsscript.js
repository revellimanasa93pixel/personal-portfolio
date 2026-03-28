const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const roles = [
    "Information Technology Student",
    "Python Developer",
    "Frontend Developer",
    "AI Enthusiast"
];

let index = 0, charIndex = 0;
let typingElement = document.getElementById("typing");

function type(){
    if(charIndex < roles[index].length){
        typingElement.innerHTML += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type,100);
    }else{
        setTimeout(erase,1500);
    }
}

function erase(){
    if(charIndex > 0){
        typingElement.innerHTML = roles[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,50);
    }else{
        index = (index + 1) % roles.length;
        setTimeout(type,100);
    }
}

type();
