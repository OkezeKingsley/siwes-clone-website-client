import '../styles/SiwesInfo.css'
import { MdArrowForward } from 'react-icons/md';
import { FaCircleMinus } from "react-icons/fa6";
import { useState, useEffect } from 'react';

function SiwesInfo () {
    const [studentAccountType, setStudentAccountType] = useState('');
    useEffect(() => {
        setStudentAccountType(sessionStorage.getItem('accountType')); 
    }, []);

    return(
        <div className="siwes-info-container">

            <div className="siwes-info-table">
                <h4 className="siwes-info-table-header">SIWES EXTRA INFORMATIONS</h4>
                <div className="siwes-info-table-list">
                    <FaCircleMinus />
                    <p style={{fontWeight: 'bold'}}>Supervisor contact</p>
                </div>
                <div className="siwes-info-table-list">
                    <MdArrowForward />
                    <p><b>Name:</b> Dr Adebayo</p>
                </div>
                <div className="siwes-info-table-list">
                    <MdArrowForward />
                    <p><b>Contact:</b> +23243423943</p>
                </div>
                <div className="siwes-info-table-list">
                    <MdArrowForward />
                    <p><b>Office Address:</b> Room 2, Ground floor, set Building, Uniosun.</p>
                </div>
                <div className="siwes-info-table-list">
                    <FaCircleMinus />
                    <p><b>Time frame:</b> You are officially beginning your {studentAccountType} training from month 1st of <strong>March</strong> and ends in 31st of <strong>August</strong></p>
                </div>
                
            </div>
            

        </div>
    )
}

export default SiwesInfo;