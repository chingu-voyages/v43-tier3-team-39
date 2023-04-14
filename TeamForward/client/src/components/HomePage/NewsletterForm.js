import React from "react";

const NewsletterForm = () => {
  return (
    <div className="container  px-6 mx-auto ">
      <section className="mt-60 mb-20 text-gray-800 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
            <h2 className="text-3xl font-bold mb-6">Stay Tuned For Updates!</h2>

            <p className="text-gray-500 mb-12">
              We're currently working on exciting developments and can't wait to
              share them with you. Please check back later for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterForm;
