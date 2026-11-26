import React from 'react'
import { Container } from 'react-bootstrap'

const PageBanner = ({title, subtitle, backgroundImage}) => {
  return (
   <section className='page-banner' style={{ backgroundImage: `linear-gradient(to left, #0000ff35, #000000af), url(${backgroundImage})`}}>


        <Container>
            <div>
                <p>MovieNest Cinema</p>

                <h1>{title}</h1>
                <h5>{subtitle}</h5>

                <aside>
                    Home/ {title}
                </aside>
            </div>
        </Container>
   </section>
  )
}

export default PageBanner