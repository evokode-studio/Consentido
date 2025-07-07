document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".reviews__review");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Todas las anteriores se apilan
            let found = false;
            reviews.forEach((r) => {
              if (!found) {
                if (r === entry.target) found = true;
                else r.classList.add("stacked");
              } else {
                r.classList.remove("stacked");
              }
            });
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    reviews.forEach((review) => observer.observe(review));
  });