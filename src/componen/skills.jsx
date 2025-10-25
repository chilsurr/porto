function Sklills() {
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
                    <div className="col-3">
                        <div className="skill-card text-center p-3">
                        <img className="skill-img mt-3" src="src/assets/python.png" alt="" />
                        <div className="skill-name my-3 fw-semibold">Python</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="skill-card text-center p-3">
                        <img className="skill-img mt-3" src="src/assets/atom.png" alt="" />
                        <div className="skill-name my-3 fw-semibold">React</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="skill-card text-center p-3">
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