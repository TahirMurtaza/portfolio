"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';

interface DataType {
    sectionClass?: string;
}

const WEB3FORMS_ACCESS_KEY = "826fa2a6-4180-45e2-99c2-773d594190b6";

const ContactV1 = ({ sectionClass }: DataType) => {

    const [submitting, setSubmitting] = useState(false);

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        formData.append('access_key', WEB3FORMS_ACCESS_KEY);
        formData.append('subject', 'New message from portfolio contact form');
        formData.append('from_name', 'Portfolio Contact Form');

        setSubmitting(true);
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                form.reset();
                toast.success("Thanks! Your message has been sent.");
            } else {
                toast.error(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            toast.error("Network error. Please email me directly at tahirmurtaza5152@gmail.com");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <div id="contact" className={`contact-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="contact-style-one-items">
                        <h1 className="fixed-text">Lets Connect</h1>
                        <div className="row">
                            <div className="col-lg-6">
                                <form className="contact-form contact-form" onSubmit={handleForm}>
                                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
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
                                                <textarea className="form-control" id="message" name="message" placeholder="Tell Us About Project *" autoComplete='off' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button className="btn-style-regular" type="submit" name="submit" id="submit" disabled={submitting}>
                                                <span>{submitting ? 'Sending…' : 'Get in Touch'}</span> <i className="fas fa-arrow-right" />
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
                                <ul className="contact-direct-links">
                                    <li>
                                        <a href="mailto:tahirmurtaza5152@gmail.com"><i className="fas fa-envelope" />tahirmurtaza5152@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer"><i className="fas fa-calendar-alt" />Book a 30-min call</a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/tahir-murtaza-203131b6" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" />LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/TahirMurtaza" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" />GitHub</a>
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
