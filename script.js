const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
  
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
  
    // Build keyword line with current keyword bold and underlined
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
  
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentStep);
    });
  
    // Hide left arrow if at first step
    if (currentStep === 0) {
      leftArrow.classList.add("invisible");
    } else {
      leftArrow.classList.remove("invisible");
    }
  
    // (Optional) Hide right arrow at last step
    rightArrow.classList.toggle("invisible", currentStep === steps.length - 1);
  }
  
  // Arrow click handlers
  rightArrow.addEventListener("click", () => {
    currentStep = (currentStep + 1) % steps.length;
    updateStep(currentStep);
  });
  
  leftArrow.addEventListener("click", () => {
    currentStep = (currentStep - 1 + steps.length) % steps.length;
    updateStep(currentStep);
  });
  
  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateStep(index);
    });
  });
  
  // Initialize
  updateStep(currentStep);

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
  
    // Build the keyword line with active one underlined + bold
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
  
    courierStepContentEl.querySelector("#courierKeywords").innerHTML =
      keywordLine;
    courierDescriptionEl.textContent = courierSteps[currentCourierStep].content;
  
    // Update dots
    courierDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentCourierStep);
    });
  
    // Toggle arrow visibility
    leftCourierArrow.classList.toggle("invisible", currentCourierStep === 0);
    rightCourierArrow.classList.toggle(
      "invisible",
      currentCourierStep === courierSteps.length - 1
    );
  }
  
  // Arrow click handlers
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
  
  // Dot click handlers
  courierDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateCourierStep(index);
    });
  });
  
  // Initialize on load
  updateCourierStep(currentCourierStep);
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_4qpuvje", "template_au7anuq", this).then(
      function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // optional: clears the form
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
  });
  

  