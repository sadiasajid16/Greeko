let count1 = 0;
const maxCount1 = 72;
const delay1 = 100;

const interval1 = setInterval(() => {
  document.getElementById("counting").textContent = count1;
  count1++;

  if (count1 > maxCount1) {
    clearInterval(interval1);
  }
}, delay1);

let count2 = 0;
const maxCount2 = 50;
const delay2 = 50;

const interval2 = setInterval(() => {
  document.getElementById("abt-counting1").textContent = count2;
  count2++;

  if (count2 > maxCount2) {
    clearInterval(interval2);
  }
}, delay2);

function animatePercentage(elementId, targetPercent, duration =4200) {
    const element = document.getElementById(elementId);
    const target = parseFloat(targetPercent);
    const start = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = (progress * target).toFixed(1);
  
      element.textContent = `${currentValue}%`;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
  animatePercentage("percentage", 6.2);
  
function animatePercentage(elementId, targetPercent, duration = 4200) {
    const element = document.getElementById(elementId);
    const target = parseFloat(targetPercent);
    const start = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = (progress * target).toFixed(1);
  
      element.textContent = `${currentValue}`;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
  animatePercentage("percentage-2", 4.5);
  

  document.getElementById("card1").addEventListener("click", function () {
    const card = this;
    card.style.backgroundColor = "#1B4D3E";

    const heading = card.querySelector("h2");
    if (heading) {
        heading.style.color = "white";
    }
    const paragraph = card.querySelector("p");
    if (paragraph) {
        paragraph.style.color = "#fff";
    }
    
    let existingImg = card.querySelector("img");
    if (!existingImg) {
      const img = document.createElement("img");
      img.src = "/assets/mediamarketing.png";
      img.alt = "Card Image";
      img.style.display = "block";
      img.style.width ="490px";
      img.style.borderRadius="10px";
  
      card.appendChild(img);
  
      img.style.opacity = 0;
      img.style.transition = "opacity 0.5s ease";
      requestAnimationFrame(() => {
        img.style.opacity = 1;
      });
    }
  });
  
  document.getElementById("card2").addEventListener("click", function () {
    const card = this;
    card.style.backgroundColor = "#1B4D3E";

    const heading = card.querySelector("h2");
    if (heading) {
        heading.style.color = "white";
    }
    const paragraph = card.querySelector("p");
    if (paragraph) {
        paragraph.style.color = "#fff";
    }
    
    let existingImg = card.querySelector("img");
    if (!existingImg) {
      const img = document.createElement("img");
      img.src = "/assets/seo.jpg";
      img.alt = "Card Image";
      img.style.display = "block";
      img.style.width ="490px";
      img.style.borderRadius="10px";
  
      card.appendChild(img);
  
      img.style.opacity = 0;
      img.style.transition = "opacity 0.5s ease";
      requestAnimationFrame(() => {
        img.style.opacity = 1;
      });
    }
  });
  
  document.getElementById("card3").addEventListener("click", function () {
    const card = this;
    card.style.backgroundColor = "#1B4D3E";

    const heading = card.querySelector("h2");
    if (heading) {
        heading.style.color = "white";
    }
    const paragraph = card.querySelector("p");
    if (paragraph) {
        paragraph.style.color = "#fff";
    }
    
    let existingImg = card.querySelector("img");
    if (!existingImg) {
      const img = document.createElement("img");
      img.src = "/assets/content.jpg";
      img.alt = "Card Image";
      img.style.display = "block";
      img.style.width ="490px";
      img.style.borderRadius="10px";
  
      card.appendChild(img);
  
      img.style.opacity = 0;
      img.style.transition = "opacity 0.5s ease";
      requestAnimationFrame(() => {
        img.style.opacity = 1;
      });
    }
  });


  let count4 = 0;
    const countBadge = document.getElementById("cartCount");
    const buttonIds = ["addToCartBtn", "addToCartBtn2", "addToCartBtn3", "addToCartBtn4"];
    buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", () => {
        count4++;
        countBadge.textContent = count4;

        countBadge.style.transform = "scale(1.3)";
        setTimeout(() => {
            countBadge.style.transform = "scale(1)";
        }, 150);
        });
    }
    });
