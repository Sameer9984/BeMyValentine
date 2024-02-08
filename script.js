document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").textContent = "Yes! I'd love to be your Valentine ❤️";
    document.getElementById("response").style.color = "#00cc00"; // green
    createBlast();
  });
  
  document.getElementById("noBtn").addEventListener("mouseenter", function() {
    setInterval(changePosition, 1000);
  });
  
  function changePosition() {
    let noBtn = document.getElementById("noBtn");
    let newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    let newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = "absolute";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
  
  

  
  function createBlast() {
    let blastContainer = document.getElementById("blastContainer");
    for (let i = 0; i < 120; i++) {
      let blast = document.createElement("div");
      blast.textContent = "💖";
      blast.classList.add("blast");
      blast.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      blast.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      blastContainer.appendChild(blast);
      setTimeout(function() {
        blast.remove();
      }, 1000);
    }
  }
  


  