import "./Color.css";

export default function ColourButtons({ text, onConfirm, onCancel}) {
    return ( 
        <div className="decision-container">
            <p className="message box">{message}</p>
            <div className="button-container"> 
                <button onClick={onConfirm} className="confirm">Confirm</button>
                <button className="cancel" onClick={onCancel}>Cancel</button>
            </div>


        </div>
    )
}