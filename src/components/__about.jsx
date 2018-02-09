
import React, { Component } from 'react'
import Container from './container'
import { Link } from 'react-router-dom';

/* UI component only , used for style a basic container in app  */
export default class AboutPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col">
                        <h4>
                            Who we are
                        </h4>
                        <div>
                            We are a 5 students from 'Colman - The Collage of Management Academic Studies',<br/>
                            As part of our graduate project, we are trying to let you find your next music
                            without search all over the internet.
                            <br/>All you need is to signup, answer to 3 questions and PLAY for life.<br/>
                            <b>We can assure you - you shouldn't search for a music ever.</b>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div style={{ direction: "rtl" , marginTop: "10px", textAlign: "right" }}>
                            אנחנו 5 סטודנטים מ-'המסלול האקדמאי - המכללה למינהל', 
                            וכחלק מפרויקט הסיום שלנו, אנחנו מנסים לעזור לך למצוא את 
                            הפלייליסט האולטימטיבי עבורך ללא חיפושו באינטרנט! <br/>
                            כל מה שאתה צריך לעשות הוא להירשם, לענות על 3 שאלות ולנגן! <br/>
                            <b>אנחנו יכולים להבטיח לך - אתה לא תצטרך לחפש יותר מוזיקה לעולם!</b>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link className="btn btn-primary float-right" to="/user">Let's get started</Link>
                    </div>
                </div>
            </Container>
        )
    }
}




