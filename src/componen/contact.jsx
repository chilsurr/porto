function Contact() {
    return(
        <section>
          <div className="contact">
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <div className="row m-4 d-flex  justify-content-center ">
                        <div className="col-10">
                            <div className="contact-tittle mb-5 text-center">Let's Talk</div>
                            <div className="row">
                                <div className="col-6">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-contact fw-bold">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6 ">     
                                    <div className="spline-contact overflow-hidden">
                                        <spline-viewer className="splane-contact" url="https://prod.spline.design/kr0reVSm6gWu2yPx/scene.splinecode"></spline-viewer>
                                    </div>                      
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Contact