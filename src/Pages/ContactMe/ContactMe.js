import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l5co15w', 'template_usjzque', e.target, 'user_UB5fVYCMOZpnJjUM8lelD')
            .then((result) => {
                Swal.fire('Thanks for messaging me.')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="contactMe" className="row my-5">
            <h3>Contact Me</h3>
            <div className="col-md-6">
                <form onSubmit={sendEmail} className='w-75 ms-5'>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name" />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject" name="subject" />
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write Message" name="message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>

            </div>
            <div className="col-md-6 text-center" style={{ height: "350px" }}>
                <img className='img-fluid mb-5 rounded-3' src="https://media.istockphoto.com/photos/business-network-concept-customer-support-shaking-hands-picture-id1256603011?b=1&k=20&m=1256603011&s=170667a&w=0&h=qAWHyHa53OtejTsSOx-xEPoVWA9p-uG2jpxEkzAK7Wg=" alt="" />
            </div>
        </div>
    );
};

export default ContactMe;