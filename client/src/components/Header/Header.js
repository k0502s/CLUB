import React from 'react';
import { Row, Col } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Row >
                <Col md={{ offset: 5 }} sm={12} style={{display: 'flex'}}>
                    <img id="page-logo"
                        src="https://camo.githubusercontent.com/a414ed53a23a0d004d0ddd1981094f02b406b181/687474703a2f2f6a61766173637269707469736d616769632e6769746875622e696f2f6175692f6c6f676f732f72656163742e706e67"
                    />
                     <h3 id="page-logo-text">사진 동호회</h3>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
