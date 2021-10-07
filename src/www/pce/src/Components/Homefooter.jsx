import React from 'react';
import './Homefooter.css';

export default class Homefooter extends React.Component {

    render() {
        return (
            <div className="footer">

                <a className="country" href="#">IND</a>
                <select className="lang">
                    <option selected value="english">ENGLISH</option>
                    <option value="hindi">HINDI</option>
                </select>
                <a className="custService" href="#">Customer Service</a>
                <a className="aboutUs" href="#">About Us</a>
                <a className="help" href="#">Help</a>
                <a className="termsCond" href="#">Terms and Conditions</a>

            </div>

        )
    }
}
