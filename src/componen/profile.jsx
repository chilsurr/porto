import imgProfile from "../../assets/profile.png"
import imgIntagram from "../../assets/instagram.png"
import imgLinkedin from "../../assets/linkedin.png"
import imgGithub from "../../assets/github.png"


function Profile () {
    return(
        <>
            <section className="pt-5"  id="profile">
                <div className="profile" >
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
                            <div className="row profile-content">
                                <div className="col-lg-6 text-center mt-4">
                                    <img className="profile-img" src={imgProfile} alt="gada pak"/>
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
                                            <a href="https://www.instagram.com/nupkuyy_/">
                                                <img src={imgIntagram} alt="" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/suryadi-sigarantang-35986b227/">
                                                <img src={imgLinkedin} alt="" />
                                            </a>
                                            <a href="https://github.com/chilsurr">
                                                <img src={imgGithub} alt="" />
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