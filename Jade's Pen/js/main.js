function myFunction() {
    var dots = document.getElementById("dots");
    var dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//like button

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});


document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("lik-button");
  const likeCount = document.getElementById("lik-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("li-button");
  const likeCount = document.getElementById("li-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("l-button");
  const likeCount = document.getElementById("l-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-utton");
  const likeCount = document.getElementById("like-ount");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-btn");
  const likeCount = document.getElementById("like-counter");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});


//newsletter

function newsletter() {
  alert("You have subscribed to our newletter");
}