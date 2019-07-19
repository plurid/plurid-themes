import React from 'react';



const Stripe: React.FC<any> = (props) => {
    const {
        text,
        backgroundColor,
        color,
    } = props;

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                height: '200px',
                width: '100%',
                backgroundColor,
                color,
            }}
        >
            {text}
        </div>
    );
}


export default Stripe;