const handleSubmit = (e) => {
  e.preventDefault();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyj0GRAQpZ30DcuT2ITeyPYEvEmrV--aeiDPzqsEvFl1XaB8YsdzzPDGIdzHDEE9avg/exec";

  const form = e.target;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      alert("Pesan berhasil dikirim!");
      form.reset(); // optional
    })
    .catch((error) => console.error("Error!", error.message));
};

function Contact() {
    return(
        <section className="pt-5 pb-5"  id="contact">
          <div className="contact" >
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <div className="row m-4 d-flex  justify-content-center ">
                        <div className="col-lg-10">
                            <div className="contact-tittle mb-5 text-center">Let's Talk</div>
                            <div className="row">
                                <div className="col-lg-6 contact-input">
                                    <form name="surya-contact-form" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                                            <input type="text" className="form-control" id="name" name="name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-contact fw-bold">SEND</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-6 ">     
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