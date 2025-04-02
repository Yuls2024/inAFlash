// Navbar active link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// For Senders steps
const steps = [
  {
    keyword: "Create an Account",
    content: "Register on In-a-Flash to begin managing your deliveries effortlessly."
  },
  {
    keyword: "Set Your Price",
    content: "Enter details about your package, including size, weight, delivery locations, and timing preferences."
  },
  {
    keyword: "Track Your Delivery",
    content: "Set your delivery price then monitor your package in real-time from pick-up to drop-off."
  }
];

const stepContentEl = document.getElementById("stepContent");
const descriptionEl = document.getElementById("stepDescription");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.getElementById("prevBtn");
const rightArrow = document.getElementById("nextBtn");

let currentStep = 0;

function updateStep(index) {
  currentStep = index;

  const keywordLine = steps
    .map((step, i) => {
      const isActive = i === currentStep;
      return `<a href="#" style="
        text-decoration: ${isActive ? 'underline' : 'none'};
        font-weight: ${isActive ? '700' : '400'};
        color: inherit;
      ">${step.keyword}</a>`;
    })
    .join(" › ");

  stepContentEl.querySelector("p").innerHTML = keywordLine;
  descriptionEl.textContent = steps[currentStep].content;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentStep);
  });

  leftArrow.classList.toggle("invisible", currentStep === 0);
  rightArrow.classList.toggle("invisible", currentStep === steps.length - 1);
}

rightArrow.addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  updateStep(currentStep);
});

leftArrow.addEventListener("click", () => {
  currentStep = (currentStep - 1 + steps.length) % steps.length;
  updateStep(currentStep);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateStep(index);
  });
});

updateStep(currentStep);

// For Couriers steps
const courierSteps = [
  {
    keyword: "Sign Up as a Courier",
    content:
      "Create your courier profile and set your preferences for delivery modes, pricing, and availability.",
  },
  {
    keyword: "Choose Deliveries",
    content:
      "Receive delivery requests from senders and choose the ones that fit your schedule and preferences.",
  },
  {
    keyword: "Earn Money",
    content:
      "Complete deliveries and earn money for each job. The more deliveries you complete, the more you can earn!",
  },
];

const courierStepContentEl = document.getElementById("courierStepContent");
const courierDescriptionEl = document.getElementById("courierStepDescription");
const courierDots = document.querySelectorAll('.dot[data-type="courier"]');
const leftCourierArrow = document.getElementById("prevCourierBtn");
const rightCourierArrow = document.getElementById("nextCourierBtn");

let currentCourierStep = 0;

function updateCourierStep(index) {
  currentCourierStep = index;

  const keywordLine = courierSteps
    .map((step, i) => {
      const isActive = i === currentCourierStep;
      return `<a href="#" style="
        text-decoration: ${isActive ? "underline" : "none"};
        font-weight: ${isActive ? "700" : "400"};
        color: inherit;
      ">${step.keyword}</a>`;
    })
    .join(" › ");

  courierStepContentEl.querySelector("#courierKeywords").innerHTML = keywordLine;
  courierDescriptionEl.textContent = courierSteps[currentCourierStep].content;

  courierDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentCourierStep);
  });

  leftCourierArrow.classList.toggle("invisible", currentCourierStep === 0);
  rightCourierArrow.classList.toggle("invisible", currentCourierStep === courierSteps.length - 1);
}

rightCourierArrow.addEventListener("click", () => {
  if (currentCourierStep < courierSteps.length - 1) {
    updateCourierStep(currentCourierStep + 1);
  }
});

leftCourierArrow.addEventListener("click", () => {
  if (currentCourierStep > 0) {
    updateCourierStep(currentCourierStep - 1);
  }
});

courierDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateCourierStep(index);
  });
});

updateCourierStep(currentCourierStep);

// EmailJS contact form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_4qpuvje", "template_au7anuq", this).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    }
  );
});

// Footer link placeholder handlers
function openSupport() {
  alert("Support is coming soon!");
}

function openAbout() {
  alert("About Us content is coming soon!");
}

function openLicensing() {
  alert("Licensing information is coming soon!");
}

function openTerms() {
  alert("Terms & Conditions will be available soon!");
}

function openPrivacy() {
  alert("Privacy Policy will be available soon!");
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

let menuOpen = false;

hamburgerBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  navMenu.classList.toggle("show-nav");
  menuIcon.src = menuOpen ? "images/closeMenu.png" : "images/hamburgerIcon.png";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (menuOpen) {
      navMenu.classList.remove("show-nav");
      menuIcon.src = "images/hamburgerIcon.png";
      menuOpen = false;
    }
  });
});