import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import ImgPython from "../../assets/python.png"
import ImgReact from "../../assets/atom.png"
import ImgJs from "../../assets/js.png"
function Sklills() {

  useEffect(() => {
    // Pilih semua elemen dengan class 'skill-card'
    const cards = document.querySelectorAll(".skill-card");

    // Inisialisasi Vanilla Tilt
    VanillaTilt.init(cards, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    // Optional: bersihkan efek saat komponen di-unmount
    return () => {
      cards.forEach((card) => card.vanillaTilt?.destroy());
    };
  }, []);

    return(
        <section className="pt-5"  id="skills">
          <div className="skills" >
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <div className="row text-center m-4">
                      <div className="col-12">
                          <div className="skills-tittle mb-lg-5">Keahlian Utama Saya</div>
                      </div>
                    </div>
                    <div className="row cards-wrapper d-lg-flex justify-content-lg-evenly">
                      <div className="col-lg-3 d-flex justify-content-center mb-4 ">
                          <div className="skill-card text-center p-lg-3" data-tilt>
                              <img className="skill-img mt-3" src={ImgPython} alt="" />
                              <div className="skill-name my-3 fw-semibold">Python</div>
                          </div>
                      </div>
                      <div className="col-lg-3 d-flex justify-content-center mb-4">
                          <div className="skill-card text-center p-lg-3" data-tilt>
                              <img className="skill-img mt-3" src={ImgReact} alt="" />
                              <div className="skill-name my-3 fw-semibold">React</div>
                          </div>
                      </div>
                      <div className="col-lg-3 d-flex justify-content-center mb-4">
                          <div className="skill-card text-center p-lg-3" data-tilt>
                              <img className="skill-img mt-3" src={ImgJs} alt="" />
                              <div className="skill-name my-3 fw-semibold">Javascript</div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Sklills