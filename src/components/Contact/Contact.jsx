import React from "react";

const Contact = () => {
  return (
    <div className="contact w-full h-full bg-bg-color">
      <div className="content items-center gap-8 mb-16 px-10 sm:px-10 md:px-20 lg:px-40">
        <div className="heading text-center sm:text-center lg:text-left">
          <p className="text-primary-color font-mono ">04. What's Next</p>
          <h1 className="text-cream-white font-main text-4xl font-semibold mt-3">
            Let's Connect
          </h1>
        </div>
        <div className="line mt-3 w-80 h-1 rounded-xl bg-line-color"></div>
      </div>
      <div className="container pb-10">
        <div class="font-[sans-serif] p-4">
          <div class="max-w-6xl mx-auto relative bg-line-color  rounded-3xl overflow-hidden">
            <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary-color"></div>
            <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary-color"></div>

            <div class="grid md:grid-cols-2 gap-8 py-8 px-6">
              <div class="text-center flex flex-col items-center justify-center">
                <img
                  src="https://readymadeui.com/signin-image.webp"
                  class="shrink-0 aspect-[250/196] object-contain"
                />
              </div>

              <form class="rounded-tl-3xl rounded-bl-3xl max-md:-order-1">
                <h2 class="text-2xl text-primary-color font-bold text-center mb-6">
                  Contact Us
                </h2>
                <div class="max-w-md mx-auto space-y-3 relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-bg-color rounded-md py-3 px-4 text-sm outline-none text-cream-white border-2 border-transparent focus:border-primary-color"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    class="w-full bg-bg-color rounded-md py-3 px-4 text-sm outline-none text-cream-white border-2 border-transparent focus:border-primary-color"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    class="w-full bg-bg-color rounded-md py-3 px-4 text-sm outline-none text-cream-white border-2 border-transparent focus:border-primary-color"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    class="w-full bg-bg-color rounded-md py-3 px-4 text-sm outline-none text-cream-white border-2 border-transparent focus:border-primary-color"
                  ></textarea>

                  <button
                    type="submit"
                    class="text-bg-color w-full relative transition bg-primary-color hover:bg-blue-400 rounded-md text-sm px-6 py-3 !mt-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#161b1e"
                      class="mr-2 inline"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
