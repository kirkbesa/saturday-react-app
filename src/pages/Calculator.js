import { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
    const [quizGrade, setQuizGrade] = useState(0);
    const [labGrade, setLabGrade] = useState(0);
    const [examGrade, setExamGrade] = useState(0);
    const [grade, setGrade] = useState(0);
    const [finalGrade, setFinalGrade] = useState(0);

    const gradeMatrix = (score) => {
        if (score >= 50 && score <= 74.5) return 0;
        if (score >= 74.51 && score <= 76.5) return 1;
        if (score >= 76.51 && score <= 78.5) return 1.25;
        if (score >= 78.51 && score <= 80.5) return 1.5;
        if (score >= 80.51 && score <= 82.5) return 1.75;
        if (score >= 82.51 && score <= 84.5) return 2;
        if (score >= 84.51 && score <= 86.5) return 2.25;
        if (score >= 86.51 && score <= 88.5) return 2.5;
        if (score >= 88.51 && score <= 90.5) return 2.75;
        if (score >= 90.51 && score <= 92.5) return 3;
        if (score >= 92.51 && score <= 94.5) return 3.25;
        if (score >= 94.51 && score <= 96.5) return 3.5;
        if (score >= 96.51 && score <= 98.5) return 3.75;
        if (score >= 98.51 && score <= 100) return 4;
        return 0;
    }

    const calculate = () => {
        setGrade((quizGrade * 0.3) + (labGrade * 0.3) + (examGrade * 0.4));
        setFinalGrade(gradeMatrix(grade));
    }

    return (
        <div className="calculator-container">

            <div>
                <p>Quizzes</p>
                <input type='number' value={quizGrade} onChange= {(e) => setQuizGrade(e.target.value)}></input>

                <p>Lab Activities</p>
                <input type='number' value={labGrade} onChange= {(e) => setLabGrade(e.target.value)}></input>   

                <p>Final Exam</p>
                <input type='number' value={examGrade} onChange= {(e) => setExamGrade(e.target.value)}></input>

                <br />
                <button onClick={calculate}>Submit (Click twice)</button>

                <p className="result">Grade: {grade}</p>
                <p className="result">Final Grade: {finalGrade}</p>
            </div>
            
        </div>
    );

}