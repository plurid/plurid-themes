import React from 'react';



interface OptionsProperties {
    viewMain: any;
    setViewMain: any;
    // viewMain: boolean;
    // setViewMain: (value: boolean) => void;
}

const Options: React.FC<OptionsProperties> = (properties) => {
    const {
        viewMain,
        setViewMain,
    } = properties;

    return (
        <div
            style={{
                width: '100%',
                color: 'black',
                margin: 10,
                marginBottom: 20,
            }}
        >
            <input
                type="checkbox"
                id="viewMain"
                checked={viewMain}
                onChange={() => setViewMain(!viewMain)}
            />

            <label htmlFor="viewMain">
                View Main Colors
            </label>
        </div>
    );
}


export default Options;
