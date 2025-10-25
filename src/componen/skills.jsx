import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
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
        <section>
          <div className="skills">
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <div className="row text-center m-4">
                    <div className="col">
                        <div className="skills-tittle mb-5">Keahlian Utama Saya</div>
                    </div>
                    </div>
                    <div className="row d-flex justify-content-evenly">
                    <div className="col-3 ">
                        <div className="skill-card text-center p-3" data-tilt>
                            <img className="skill-img mt-3" src="src/assets/python.png" alt="" />
                            <div className="skill-name my-3 fw-semibold">Python</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="skill-card text-center p-3" data-tilt>
                            <img className="skill-img mt-3" src="src/assets/atom.png" alt="" />
                            <div className="skill-name my-3 fw-semibold">React</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="skill-card text-center p-3" data-tilt>
                            <img className="skill-img mt-3" src="src/assets/js.png" alt="" />
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