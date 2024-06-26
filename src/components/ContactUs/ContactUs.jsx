import { useEffect } from "react";


const ContactUs = () => {
    useEffect(() => {
        document.title ="Home Vista | ContactUs"
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center text-gray-200 my-10">For any query, feel free to email us</h2>
            <form className="lg:w-[70%] bg-base-200 rounded-xl p-6 mx-auto">
                <label data-aos="fade-left" data-aos-delay="400" className="input input-bordered mb-3 flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="Your name" required />
                </label>
                <label data-aos="fade-right" data-aos-delay="400" className="input input-bordered mb-3 flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="abc@domain.com" required />
                </label>
                <textarea data-aos="fade-down" data-aos-delay="400" placeholder="Your message" className="textarea mb-3 textarea-bordered textarea-lg w-full" ></textarea>
                <button className="btn btn-success w-full text-white">Submit</button>

            </form>
           
        </div>
    );
};

export default ContactUs;