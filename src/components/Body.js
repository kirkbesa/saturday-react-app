import './Body.css';

export default function Body({contentTitle, contentText}) {

    return (
        <div>
            <div className='text-container'>
                <h2>{contentTitle}</h2>
                <p>{contentText}</p>
            </div>
        </div>
    );

}