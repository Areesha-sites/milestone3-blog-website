import React from "react";
const Faqs = () => {
  return (
    <>
      <section className="text-gray-900 bg-slate-100 py-3 min-h-screen">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-center text-[30px] leading-[37px] mt-2 xl:text-[35px] lg:text-[38px] font-anton md:text-[35px] lg:leading-8 font-extrabold tracking-wider text-gray-600 2xl:text-[40px]">
            Frequently Asked{" "}
            <span className="text-hoverTextColor"> Questions</span>
          </h2>
          <h2 className="font-inter md:text-[23px] xl:text-[22px] 2xl:text-[26px] text-[20px] text-gray-700 text-left font-bold py-3 ml-[9%]">
            General Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-400 font-inter">
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                What is this blog about?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Our food blog is dedicated to sharing delicious recipes,
                  cooking tips, and food stories to inspire your culinary
                  journey.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none xl:text-[14px] 2xl:text-[18px] text-[13px] cursor-pointer focus:underline">
                How often do you post new recipes?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px] ">
                <p>
                  We post new recipes every week to keep you inspired in the
                  kitchen.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Are the recipes beginner-friendly?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px] ">
                <p>
                  Yes, our recipes cater to all skill levels, from beginners to
                  advanced cooks.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Can I share your recipes on social media?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Absolutely! Just remember to credit us and link back to our
                  blog.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Do you offer vegetarian or vegan recipes?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, we have a variety of vegetarian and vegan recipes for our
                  readers.
                </p>
              </div>
            </details>
          </div>
          <h2 className="font-inter md:text-[23px] text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[25px] text-gray-700 text-left font-bold py-3 ml-[9%]">
            Recipe Suggestions and Contributions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-400 font-inter">
            <details>
              <summary className="py-2 outline-none text-[13px] 2xl:text-[18px] xl:text-[14px] cursor-pointer focus:underline">
                Can I request a specific recipe?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, we love hearing from our readers! You can use the Contact
                  Us form to share your recipe ideas.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Can I contribute my own recipe?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Absolutely! Send us your recipe through our submission form,
                  and we will feature it if it meets our guidelines.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Do you collaborate with food bloggers?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, we are always open to collaborations. Reach out to us via
                  email for more details.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Can I include photos with my recipe submissions?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, high-quality photos are encouraged and will make your
                  recipe stand out.
                </p>
              </div>
            </details>
          </div>
          <h2 className="font-inter md:text-[23px] xl:text-[22px]  2xl:text-[26px] text-[20px] leading-[25px] text-gray-700 text-left font-bold py-3 ml-[9%]">
            Newsletter and Updates
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-400 font-inter">
            <details>
              <summary className="py-2 text-[13px]  xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                How can I subscribe to your newsletter?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Enter your email in the subscription box on our homepage and
                  click subscribe.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Is the newsletter free?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, it is completely free to subscribe and receive updates.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                What type of updates do I receive?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  You will receive new recipes, cooking tips, and exclusive blog
                  updates.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
