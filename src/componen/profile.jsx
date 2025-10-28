function Profile () {
    return(
        <>
            <section className="pt-5"  id="profile">
                <div className="profile" >
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
                            <div className="row profile-content">
                                <div className="col-lg-6 text-center mt-4">
                                    <img className="profile-img" src="src/assets/Group 1.png" alt="gada pak"/>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center">
                                    <div className='me-lg-5'>
                                        <div className="profile-name mb-lg-3">
                                            Surya | Spesialis Web Development
                                        </div>
                                        <div className='profile-description'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        <div className="profile-sosmed d-flex">
                                            <a href="">
                                                <img src="src/assets/instagram.png" alt="" />
                                            </a>
                                            <a href="">
                                                <img src="src/assets/linkedin.png" alt="" />
                                            </a>
                                            <a href="">
                                                <img src="src/assets/github.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>  
            </section>
        </>
    )
}

export default Profile