import { Accordion, Col, Row } from "react-bootstrap";

const FAQ = () => {
    return (
        <section id="faq">
        <Row className="justify-content-center my-5">
            <Col xs={12} md={4} className="ms-5 ms-md-0 ps-3 ps-md-0">
                <div className="text-title fs-4">
                    <p>Frequently Asked Question</p>
                </div>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </Col>
            <Col xs={12} md={4} className="ps-5 ps-md-0 pe-5 pe-md-0">
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo ad eligendi ab reiciendis tempora temporibus recusandae voluptatem optio numquam.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repellendus architecto deserunt, accusamus quam animi facere corrupti ad perspiciatis voluptatem!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque laborum quia quaerat nulla doloribus magni quisquam repellat commodi? Ipsam, nesciunt?
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                        <Accordion.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias vero nam laborum quasi repellendus, maiores beatae fuga illo cumque.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio doloribus nesciunt non, dolor magni pariatur saepe dolorum corrupti nobis!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        </section>
    )
}

export default FAQ;