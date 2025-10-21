function Heading () {
    return(
        <>
            <section>
            <div className="row overflow-hidden position-relative min-vh-100">
                <div className="col-6 text-center d-flex align-items-center justify-content-center">
                <div className="header">
                    <div className="fs-1">Hallo, Saya Suryaa</div>
                    <div className="fs-1 role my-primary-color">WEB DEVELOPER</div>
                    <div className="tagline">Solisi Untuk Membangun </div>
                    <div className="tagline">Website Bisnis Anda</div>
                    <div className="button-header d-flex align-items-center justify-content-center m-2">
                    <button className="btn profile-btn fw-semibold d-flex align-items-center justify-content-center">PROFILE</button>
                    </div>
                </div>
                </div> 

                <spline-viewer className="position-absolute" url="https://prod.spline.design/P-QAYCY1dj9Wo7aq/scene.splinecode"></spline-viewer>
            </div>
            </section>
        </>
    )
}

export default Heading