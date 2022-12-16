import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import Hero from "./Hero";

const CarsPage = () => {
    return (
        <>
            <Hero />
            <section id="cari-mobil">
                <Container className="container car-filter">
                    <Row className="row justify-content-center">
                        <Col className="col-lg px-4">
                            <Form className="row" id="form_filter_submit">
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Tipe Driver</Form.Label>
                                <Form.Select className="form-select" id="tipe_driver" aria-label="Default select example">
                                    <option selected>Pilih Tipe Driver</option>
                                    <option value={1}>Dengan Sopir</option>
                                    <option value={2}>Tanpa Sopir (Lepas Kunci)</option>
                                </Form.Select>
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Tanggal</Form.Label>
                                <input className="form-control" id="tanggal_booking" type="date" placeholder="Pilih Tanggal" />
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Waktu Jemput/Ambil</Form.Label>
                                <Form.Select className="form-select" id="waktu_booking" aria-label="Default select example">
                                    <option selected>Pilih Waktu</option>
                                    <option value="08:00:00">08.00 WIB</option>
                                    <option value="09:00:00">09.00 WIB</option>
                                    <option value="10:00:00">10.00 WIB</option>
                                    <option value="11:00:00">11.00 WIB</option>
                                    <option value="12:00:00">12.00 WIB</option>
                                </Form.Select>
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Jumlah Penumpang (optional)</Form.Label>
                                <input className="form-control" id="total_penumpang" type="number" placeholder="Jumlah Penumpang" />
                                </Col>
                                <Col className="col-lg-2 align-self-center px-4 mt-4">
                                <Button className="btn btn-banner fw-semibold" id="btn-filter" type="submit">Cari Mobil</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
        
    )
}

export default CarsPage;