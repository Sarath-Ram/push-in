import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Website/Page2.css'
import Page3 from './Page3';

function Page2() {
    return (
        <div>
            <div>
                <Card className='custom-card'>
                    <Card.Body>
                        <Card.Title className='text-dark fs-2 fw-bold'>Entry <spam className='text-custom'>DEADLINE</spam> in</Card.Title>

                        <div className="row text-center  text-custom">
                            <div className="col-3 fw-bold fs-1">
                                60
                                <div className="fs-6">Days</div>
                            </div>
                            <div className="col-3 fw-bold fs-1">
                                60
                                <div className="fs-6">Hours</div>
                            </div>
                            <div className="col-3 fw-bold fs-1">
                                60
                                <div className="fs-6">Minutes</div>
                            </div>
                            <div className="col-3 fw-bold fs-1">
                                60
                                <div className="fs-6">Seconds</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly mt-4'>
                            <Button className="custom-bg rounded-pill p-2 px-4 border border-0">VIEW THE CATEGORIES</Button>
                            <Button className="custom-bg rounded-pill p-2 px-4 border border-0">BECOME A PARTNER</Button>
                        </div>

                    </Card.Body>
                </Card>
            </div>
            <Page3 />
        </div>

    );
}

export default Page2;