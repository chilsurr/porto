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
                                        <div class="mb-3">
                                            <label for="name" class="form-label fw-semibold">Your Name</label>
                                            <input type="text" class="form-control" id="name"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label fw-semibold">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label fw-semibold">Message</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" class="btn btn-contact fw-bold">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6">                           
                                    <spline-viewer url="https://prod.spline.design/L90ERUGL-OFGPOcy/scene.splinecode"></spline-viewer>
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