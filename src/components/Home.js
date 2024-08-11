import { useEffect, useState } from 'react';
import '../styles/Home.css'

function Home () {
    const [studentFirstName, setStudentFirstName] = useState('');
    const [studentLastName, setStudentLastName] = useState('');
    useEffect(() => {
        setStudentFirstName(sessionStorage.getItem("firstName"));
        setStudentLastName(sessionStorage.getItem('lastName'));
        // let studentMatricNumber = sessionStorage.getItem('matricNumber');
        // let studentAccountType = sessionStorage.getItem('accountType');
    }, []);

    return(
        <div className="home-container">
            <p className="home-container-head-text">Welcome <b>{studentLastName}</b> <b>{studentFirstName}</b></p>
            <hr className="underline" />

            <p className="home-top-instruction-text">Navigate through the Task Menu to perform task.</p>

            <div className="home-box-instruction">
                <span className="home-box-instruction-icon">&#8226;</span> {/* bullet icon */}
                <p className="home-box-instruction-text">Please ensure to complete all that is necessary on this portal in order to be graded properly</p>
            </div>

            <p className="home-container-bottom-instruction">Please ensure you <b>SIGN OUT</b> before leaving</p>
        </div>
    )
}

export default Home;