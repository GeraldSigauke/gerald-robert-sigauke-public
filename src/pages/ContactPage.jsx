import React from 'react'
import ContactField from "../components/ContactField";
import { contactField } from "../data";

const ContactPage = () => {
  return (
    <>
      <div class="container my-24 px-6 mx-auto" id='contactus'>
        <h2 class="text-3xl font-bold text-center pt-5 text-gray-700 dark:text-gray-700">
          Contact <u class="text-[#2c5282] dark:text-[#2c5282]">Me</u>
        </h2>
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formsubmit.co/oliestasoftworks@gmail.com" method="POST">
              
              {contactField.map(contactField => (
                <ContactField key={ contactField.id } contactField={ contactField } />
              ))}

              <div class="mb-5">
                <label
                  id='text3'
                  for="message"
                  class="mb-3 block text-base font-bold text-[#2c5282]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2c5282] focus:shadow-md"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  class="hover:shadow-form rounded-md bg-[#2c5282] py-3 px-8 text-base font-semibold text-white outline-none"
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage