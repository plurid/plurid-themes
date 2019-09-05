import React from 'react';



const ThemePicker: React.FC<any> = (props) => {
    const {
        theme,
        themes,
        setTheme,
    } = props;

    const themeNames = Object.keys(themes);

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
