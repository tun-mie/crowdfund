document.addEventListener("DOMContentLoaded", () => {

  window.toggleMenu = function () {
    const menu = document.querySelector(".nav ul");
    menu.classList.toggle("active");
  };

  document.querySelectorAll(".nav li").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector(".nav ul").classList.remove("active");
    });
  });

  const bookmarkBtn = document.querySelector(".secondary");

  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("active");

    if (bookmarkBtn.classList.contains("active")) {
      bookmarkBtn.innerHTML = "✅ Bookmarked";
    } else {
      bookmarkBtn.innerHTML = `
        <img src="images/icon-bookmark.svg" alt="bmk">
        Bookmark
      `;
    }
  });

  const backBtn = document.querySelector(".primary");

  backBtn.addEventListener("click", () => {
    backBtn.textContent = "Thanks for supporting!";
    
    setTimeout(() => {
      backBtn.textContent = "Back this project";
    }, 2000);
  });

  document.querySelectorAll(".select").forEach(btn => {
    if (!btn.closest(".out")) {
      btn.addEventListener("click", () => {
        btn.textContent = "Selected ✓";

        setTimeout(() => {
          btn.textContent = "Select Reward";
        }, 2000);
      });
    }
  });

});