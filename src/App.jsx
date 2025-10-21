import { useState } from 'react'
import './App.css'
import Heading from "./componen/heading"
import Profile from "./componen/profile"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
        <Heading/>
        <Profile/>
        <section>
          <div className="project my-3">
            <div className="row text-center m-4">
              <div className="col">
                <div className="project-header">Proyek Yang Pernah Saya Buat</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="project-name">Waroeng Miehot  | Aplikasi Point Of Sales Berbasis Web</div>
                <div className="project-description">Aplikasi POS berbasis web yang memudahkan kasir dalam melakukan transaksi dan memantau penjualan harian. Dirancang untuk membantu pemilik usaha mengakses laporan penjualan secara real-time dan efisien.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
