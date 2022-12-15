import { Carousel, Col, Container, Row } from "react-bootstrap";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <Row className="justify-content-center">
                <Col lg={4} className="mt-5">
                    <p className="text-title" style={{textAlign: 'center'}}>Testimonial</p>
                    <p className="text-content my-3" style={{textAlign: 'center'}}>Berbagai review positif dari para pelanggan kami</p>
                </Col>
            </Row>
            <Container className="mt-3 mb-5">
                <Carousel variant="dark" className="carousel-inner">
                    <Carousel.Item interval={100000}>
                        <div className="img-box">
                            <img src="./assets/img/p_merah.jpg" alt="first"/>
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            <p className="carousel-text-title fw-semibold ">Pesulap Merah 27, Tangerang</p>
                            <img src="./assets/img/Rate.png" alt="" className="mt-0" />
                            <p className="text-content">"Kalo ada silahkan buktikan! Coba buktikan dong! Jangan cuma ngomong kayak gini. Ini tuduhan nih, ini fitnah! Nih, contohnya disini ada fakta, berusaha diputar balikkan, tapi sayangnya tetep fakta. Terus gw gimana, menghidupi keluarga gw gimana? Menghidupi orang tua, menghidupi istri, menghidupi adek dan lain sebagainya."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <div className="img-box">
                            <img src="./assets/img/anya.jpg" alt="second"/>
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            <p className="carousel-text-title fw-semibold ">Anya Forger 6, Ostania</p>
                            <img src="./assets/img/Rate.png" alt="" className="mt-0" />
                            <p className="text-content">"Anya peanuts ga suki"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <div className="img-box">
                            <img src="./assets/img/kotomine.jpg" alt="second"/>
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            <p className="carousel-text-title fw-semibold ">Kotomine Kirei 38, Fuyuki</p>
                            <img src="./assets/img/Rate.png" alt="" className="mt-0" />
                            <p className="text-content">"Yorokobe Shounen, kimi no negai wa yoyaku kanau"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <div className="img-box">
                            <img src="./assets/img/Berserker.png" alt="second"/>
                        </div>
                        <Carousel.Caption className="carousel-caption">
                            <p className="carousel-text-title fw-semibold ">Heracles -, Greece</p>
                            <img src="./assets/img/Rate.png" alt="" className="mt-0" />
                            <p className="text-content">"Grrrrrauuugghhoooouuugghhhhrrrrrr!"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonial;