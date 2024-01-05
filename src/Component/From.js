import React from "react";
export default class From extends React.Component {
    render() {
        return (
            <div className="box">
                <h2>REQUEST FOR INFORMATION</h2>
                <p>Thank for your interest in Titan. Please fill out the form to tell us about your area of needs. Our representative will contact you shortly.</p>
                <div className="phuc">
                    <div className="contactForm">
                        <div className="box-columns">
                            <div className="box-rows">
                                <div className="form-group">
                                    <input type="text" name="contactName" id="contactName" placeholder="Name (*)" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="contactEmail" id="contactEmail" placeholder="Email (*)" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="number" name="contactPhone" placeholder="Phone" className="form-control" />
                                </div>
                            </div>
                            <div className="box-rows">
                                <div className="form-group">
                                    <input type="text" name="contactSubject" placeholder="Subject (*)" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea name="contactDescription" rows={4} placeholder="Description (*)" defaultValue={""} class="form-control required" ></textarea>
                                </div>
                            </div>
                            <div className="box-rows">
                                <div className="form-group">
                                    <div className="form-group">
                                        <input type="text" name="contactSubject" placeholder="Subject (*)" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                </div>
                                <div className="form-group">
                                    <input id="btnSubmitContact" type="Request Now" className="request-button" defaultValue="Request Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}