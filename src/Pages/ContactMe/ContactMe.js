import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ScrollAnimation from 'react-animate-on-scroll';

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
            <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <h1 className='py-5 text-center' style={{ fontSize: '64px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Contact Me</h1>
            </ScrollAnimation>

            <div className="col-md-6">
                <form onSubmit={sendEmail} className='w-75 mx-auto'>
                    <ScrollAnimation animateIn='bounceInLeft'>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name" required />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight'>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" required />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInLeft'>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject" name="subject" required />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft'>
                        <div class="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write Message" name="message" required></textarea>
                        </div>
                    </ScrollAnimation>
                    {/* <div type='submit' className="regular-btn">
                        <ul>
                            <li>
                                Submit
                                <span></span><span></span><span></span><span></span>
                            </li>
                        </ul>
                    </div> */}
                    <ScrollAnimation animateIn='bounceInLeft'>
                        <button style={{ backgroundColor: 'goldenrod' }} type="submit" className="btn btn-dark w-100">Submit</button>
                    </ScrollAnimation>
                </form>

            </div>

            <div className="col-md-6 text-center" style={{ height: "350px" }}>
                <ScrollAnimation animateIn='bounceInLeft'>
                    <img className='img-fluid mb-5 rounded-3' src="https://media.istockphoto.com/photos/business-network-concept-customer-support-shaking-hands-picture-id1256603011?b=1&k=20&m=1256603011&s=170667a&w=0&h=qAWHyHa53OtejTsSOx-xEPoVWA9p-uG2jpxEkzAK7Wg=" alt="" />
                </ScrollAnimation>
            </div>

        </div>
    );
};

export default ContactMe;