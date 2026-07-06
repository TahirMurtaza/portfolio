"use client"
import { toast } from 'react-toastify';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

interface DataType {
    sectionClass?: string;
}

const ContactV1 = ({ sectionClass }: DataType) => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <div id="contact" className={`contact-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="contact-style-one-items">
                        <h1 className="fixed-text">Contact Me</h1>
                        <div className="row">
                            <div className="col-lg-6">
                                <form className="contact-form contact-form" onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" autoComplete='off' required />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" autoComplete='off' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button className="btn-style-regular" type="submit" name="submit" id="submit">
                                                <span>Get in Touch</span> <i className="fas fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Alert Message */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 offset-lg-1 mt-md-50 mt-xs-40">
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <li>
                                        <a href="mailto:tahirmurtaza5152@gmail.com"><i className="fas fa-envelope" style={{ marginRight: '12px' }} />tahirmurtaza5152@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer"><i className="fas fa-calendar-alt" style={{ marginRight: '12px' }} />Book a 30-min call</a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/tahir-murtaza-203131b6" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{ marginRight: '12px' }} />LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/TahirMurtaza" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" style={{ marginRight: '12px' }} />GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;
