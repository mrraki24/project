window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
let index = 0;
function showTestimonials() {
const testimonials = document.querySelectorAll(".testimonial");
testimonials.forEach(t => t.classList.remove("popup"));
testimonials.forEach(t => t.classList.remove("active"));

let current = index % testimonials.length;
let next = (index + 1) % testimonials.length;
let nextNext = (index + 2) % testimonials.length;

testimonials[current].classList.add("popup");
testimonials[next].classList.add("active");
testimonials[nextNext].classList.add("active");

index++;
}