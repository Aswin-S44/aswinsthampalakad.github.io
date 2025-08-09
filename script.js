document.addEventListener("DOMContentLoaded", () => {
  // --- SIDEBAR NAVIGATION ---
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  const openSidebar = () => {
    sidebar.style.width = "100%";
    hamburger.classList.add("toggle");
  };

  const closeSidebar = () => {
    sidebar.style.width = "0";
    hamburger.classList.remove("toggle");
  };

  hamburger.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  sidebarLinks.forEach((link) => link.addEventListener("click", closeSidebar));

  // --- SCROLL-REVEAL ANIMATION ---
  const sections = document.querySelectorAll(".content-section");

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // --- CONTACT FORM SUBMISSION (Connect to Google Sheets as described before) ---
  // The previous form submission code remains the same.
  // Make sure to add it here, replacing 'YOUR_GOOGLE_SCRIPT_URL' in the HTML form.
});
