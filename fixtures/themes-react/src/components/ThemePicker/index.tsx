import React from 'react';

import themes from '@plurid/apps.utilities.themes';


const themeNames = [
    'night', 'dusk', 'dawn', 'light',
    'depict',
];


const ThemePicker: React.FC<any> = (props) => {
    const {
        theme,
        setTheme,
    } = props;

    return (
        <div
            style={{
                height: '100px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    width: '300px',
                    margin: '0px auto',
                    userSelect: 'none',
                }}
            >
                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0px auto',
                        display: 'flex',
                        // width: '100px',
                        // overflow: 'auto',
                    }}
                >
                    {themeNames.map((themeName: any) => {
                        return (
                            <li
                                style={{
                                    margin: '10px',
                                    cursor: 'pointer',
                                    padding: '5px 0',
                                    borderBottom: themeName === theme ? '2px solid black' : '',
                                }}
                                key={themeName}
                                onClick={() => setTheme((themes as any)[themeName])}
                            >
                                {themeName}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}


export default ThemePicker;
