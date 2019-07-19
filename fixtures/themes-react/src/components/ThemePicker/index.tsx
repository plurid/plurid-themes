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
                textAlign: 'center',
                width: '300px',
                margin: '50px auto',
                userSelect: 'none',
            }}
        >
            {theme} theme is active

            <ul
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '20px 0',
                    display: 'flex',
                }}
            >
                {themeNames.map((themeName: any) => {
                    return (
                        <li
                            style={{
                                margin: '10px',
                                cursor: 'pointer',
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
    );
}


export default ThemePicker;
