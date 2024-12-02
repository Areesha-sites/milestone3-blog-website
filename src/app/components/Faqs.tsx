import React from "react";
const Faqs = () => {
  return (
    <>
      <section className=" text-gray-900 bg-slate-100 py-3 min-h-screen">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-center text-[30px] leading-[37px]  mt-2 xl:text-[35px] lg:text-[38px] font-anton md:text-[35px] lg:leading-8 font-extrabold tracking-wider text-gray-600 2xl:text-[40px] ">
            Frequently Asked <span className="text-orange-500"> Questions</span>
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
                  This blog focuses on providing valuable content on technology,
                  lifestyle, and personal growth.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none xl:text-[14px] 2xl:text-[18px] text-[13px] cursor-pointer focus:underline">
                How often do you publish new posts?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px] ">
                <p>
                  We publish new posts every week to ensure fresh content for
                  our readers.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Can I suggest a topic for the blog?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px] ">
                <p>
                  Yes, we welcome suggestions! Use the Contact Us form to share
                  your ideas.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Are the articles free to read?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>Yes, all our blog articles are completely free to access.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                How can I stay updated with your latest posts?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Subscribe to our newsletter or follow us on social media to
                  get updates.
                </p>
              </div>
            </details>
          </div>
          <h2 className="font-inter md:text-[23px] text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[25px] text-gray-700 text-left font-bold py-3 ml-[9%]">
            Guest Posts and Collaborations
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-400 font-inter">
            <details>
              <summary className="py-2 outline-none text-[13px] 2xl:text-[18px] xl:text-[14px] cursor-pointer focus:underline">
                How do I submit a guest post?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Contact us through the provided form and attach your article
                  for review.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                What are the guidelines for submitting a guest post?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Your post should align with our blogs theme, be
                  original, and between 800 to 1500 words.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                How long does it take to review a guest post?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  We typically review guest posts within 7 to 10 business days.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Can I include backlinks in my guest post?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, but only if they are relevant and add value to the
                  content.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Do you pay for guest posts?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Currently, we do not offer payments for guest posts but
                  provide full credit and promotion.
                </p>
              </div>
            </details>
          </div>
          <h2 className="font-inter md:text-[23px] xl:text-[22px]  2xl:text-[26px] text-[20px] leading-[25px] text-gray-700 text-left font-bold py-3 ml-[9%]">
            Newsletter and Subscription.
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-400 font-inter">
            <details>
              <summary className="py-2 text-[13px]  xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                How do I subscribe to the newsletter?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Enter your email in the subscription box available on our
                  website and hit subscribe.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Is the newsletter free?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>Yes, subscribing to our newsletter is completely free.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Why am I not receiving newsletter emails?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Check your spam folder or ensure the email address was entered
                  correctly.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                Can I unsubscribe from the newsletter?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  Yes, every email includes an Unsubscribe link at the bottom.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[13px] xl:text-[14px] 2xl:text-[18px] outline-none cursor-pointer focus:underline">
                What type of content is included in the newsletter?
              </summary>
              <div className="px-4 pb-4 text-[13px] xl:text-[14px] 2xl:text-[18px]">
                <p>
                  We share the latest blog updates, exclusive content, and
                  occasional tips.
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
