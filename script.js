document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".desktop1-group15, .desktop1-group22, .desktop1-group82");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      const isExpanded = box.classList.contains("expanded");

      
      boxes.forEach((b) => {
        b.classList.remove("expanded");
        b.style.maxHeight = "150px"; 
        b.style.border = "1px solid #ccc";
        const details = b.querySelectorAll("[class*='group6'], [class*='group7']");
        details.forEach((d) => d.style.display = "none");
      });

  
      if (!isExpanded) {
        box.classList.add("expanded");
        box.style.maxHeight = "1000px"; 
        box.style.border = "2px solid #000";
        const details = box.querySelectorAll("[class*='group6'], [class*='group7']");
        details.forEach((d) => d.style.display = "flex");
      }
    });
  });
});
