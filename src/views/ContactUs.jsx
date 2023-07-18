import React from "react";
import ContactUsForm from "../components/ContactUsForm";

export default function ContactUs() {
  return (
    <>
      <div className="w-auto mt-20 mb-16 text-center text-5xl font-serif">
        Contact Us
      </div>
      <div className="w-auto mx-20 flex flex-row justify-between align-middle  ">
        <div className=" mx-auto">
            <img className="max-w-lg max-h-96 rounded-xl " src="public\vecteezy_luxury-perfume-bottle-logo-design-illustration-for_9004047.jpg" alt="image description"/>
        </div>
        <div className="text-center mx-auto text-2xl w-auto font-serif flex items-center ">
                <p>
                    <span className="font-bold text-2xl">Reach out at :</span>
                    <br />
                    <span className="text-2xl">420 Joe Mama st. Algeirs</span>
                    <br />
                    <span>+213558484025</span>
                    <br />
                    <span>scenthaven@gmail.com</span>
                </p>                
        </div>
        <ContactUsForm></ContactUsForm>
      </div>
    </>
  );
}
