import PromoHeading from "./PromoHeading";

function Promo() {
    const data={
        heading1:"Hello omar",
        heading2:"Hello Ayman"
    }
    
    return (
        
        <div className="promo-section">
            <div>
                <PromoHeading heading1={data.heading1} heading2={data.heading2}/>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;