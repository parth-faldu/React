import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const Contact = () => {
    return <>
        <section className="section-contact">
            <div className="container">
                <h2 className="section-common--heading">contact us</h2>
                <p className="section-common--subheading">
                    Get in touch with us. We are alwasy here to help you.
                </p>
            </div>

            <div className="grid grid-two--cols">
                <div className="contact-content">
                    <Form action="/contact" method="POST">
                        <div className="grid">
                            <label htmlFor="username">full name</label>
                            <input type="text" name="username" id="username" required autoComplete="off" placeholder="enter full name" />
                        </div>

                        <div>
                            <label htmlFor="email">email address</label>
                            <input type="email" name="email" id="email" required autoComplete="off" placeholder="abc@xyz.com" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="we are alwasy here to help you."></textarea>
                        </div>
                        <div class="mt-3">
                            <button type="submit" class="btn contact-btn">
                                send message
                            </button>
                        </div>
                    </Form>
                </div>
                <div class="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.82106511467!2d70.7388944931172!3d22.27346616666724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1731652384125!5m2!1sen!2sin"
                        width="100%" height="500px" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    </>;
}