let homeButton = document.querySelector(".homeButton");
let abtButton = document.querySelector(".abtmeButton");
let projButton = document.querySelector(".projectsButton");
let contactButton = document.querySelector(".contactButton");
let skillsButton = document.querySelector(".skillsButton");
let github = document.querySelector(".github");
let linked = document.querySelector(".linkedin");
let credits = document.querySelector(".creditsButton");
let port2 = document.querySelector(".portrait2");
let port = document.querySelector(".portrait");




homeButton.addEventListener("click", function(){
    window.location.href = "index.html";
});

abtButton.addEventListener("click", function(){
    window.location.href = "abtme.html";
});

projButton.addEventListener("click", function(){
    window.location.href = "projects.html";
});
contactButton.addEventListener("click", function(){
    window.location.href = "contact.html";
});
skillsButton.addEventListener("click",function(){
    window.location.href = "skills.html";
});
credits.addEventListener("click",function(){
    window.location.href = "credits.html";
});
github.addEventListener("click", function(){
    window.open("https://github.com/noscopeFanEX");
});
linked.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/xander-starnes-88a566311/");

});
port.addEventListener("click",function(){
   port2.style.display = "block";
   port.style.display = "none";
})
port2.addEventListener("click",function(){
    port.style.display = "block";
    port2.style.display = "none";
 })
