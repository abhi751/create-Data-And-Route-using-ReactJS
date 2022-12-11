import React from 'react'
function Header() {
  return (
    <div>
        <nav className='header'>
            <section className='logo'>
                <img src={require("../imag/images.png")} alt="logo"/>
            </section>
            <section className='camera'>
                <img src={require("../imag/camera.png")} alt="camera"/>
            </section>
        </nav>
    </div>
  )
}

export default Header