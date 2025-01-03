import { AnimatedTestimonials } from "./animated-testimonials";
import { TestimonialsTypes } from "../../../types/componentTypes";
export function AnimatedTestimonialsDemo() {
  const testimonials: TestimonialsTypes[] = [
    {
      quote:
        "This recipe blog has completely transformed my cooking! The creative recipes and detailed instructions have taken my meals to the next level.",
      name: "Sarah Chen",
      designation: "Home Chef",
      src: "/testimonial1.jpg",
    },
    {
      quote:
        "The variety of recipes and cooking tips are amazing! I've learned new techniques and discovered ingredients I never thought I'd try.",
      name: "Michael Rodriguez",
      designation: "Food Enthusiast",
      src: "/testimonial2.jpg",
    },
    {
      quote:
        "I love how easy the recipes are to follow, and they always turn out delicious. This blog has become my go-to for meal inspiration!",
      name: "Emily Watson",
      designation: "Blogger at The Cooking Chronicles",
      src: "/testimonial3.jpg",
    },
    {
      quote:
        "As a beginner, I was intimidated by cooking, but this blog made it so approachable and fun. I'm now cooking with confidence every day!",
      name: "James Kim",
      designation: "Beginner Cook",
      src: "/testimonial4.jpg",
    },
    {
      quote:
        "This blog has made cooking so much more enjoyable. The easy-to-follow recipes and tips have helped me improve my skills in the kitchen.",
      name: "Lisa Thompson",
      designation: "Home Baker",
      src: "/testimonial5.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}