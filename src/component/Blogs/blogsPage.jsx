import React from "react";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";
import files from "../../constants/index";

// Blog data array
const blogPosts = [
  {
    title: "Maximizing Event Efficiency",
    description: "Learn how bulk food planning simplifies logistics and enhances guest satisfaction.",
    image: files.Logo2,
    link: "#",
  },
  {
    title: "Vendor Collaborations That Work",
    description: "Explore success stories from our vendor partners delivering excellence at scale.",
    image: files.Logo2,
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white w-full mt-6 mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <ScrollAnimatedSection>
          <h1 className="text-4xl md:text-5xl lg:text-6xl Poppins-bold font-bold text-[#ff0066] mb-6">
            Blogs
          </h1>
          <p className="max-w-4xl Poppins text-center text-base md:text-lg lg:text-xl">
            Explore insights, tips, and stories about bulk food solutions for
            events, vendor partnerships, and making every gathering a flavorful
            success. Stay updated with expert advice, featured packages, and
            trends in the culinary world. Your journey to hassle-free event food
            starts here!
          </p>
        </ScrollAnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
        {blogPosts.map((blog, index) => (
          <div key={index} className="flex flex-col">
            <a href={blog.link} className="group">
              <ScrollAnimatedRight>
                <div className="h-60 w-full rounded-lg overflow-hidden bg-[#f8c6c6] mb-4">
                  <img
                    src={blog.image}
                    alt={`${blog.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollAnimatedRight>

              <ScrollAnimatedSection>
                <h2 className="text-xl md:text-2xl Poppins-bold font-bold text-[#ff0066] mb-1">
                  {blog.title}
                </h2>
                <p className="text-[#ff0066] Poppins text-sm md:text-base">
                  {blog.description}
                </p>
              </ScrollAnimatedSection>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
