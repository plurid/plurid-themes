import React from 'react';
import './App.css';

import themes from '@plurid/apps.utilities.themes';



const App: React.FC = () => {
    const theme: any = themes.depict;
    console.log(themes);

    return (
        <div className="App">
            <div
                style={{
                    height: '200px',
                    width: '100%',
                    backgroundColor: theme.backgroundColorPrimary,
                    color: theme.colorPrimary,
                    display: 'grid',
                    placeContent: 'center',
                }}
            >
                theme.backgroundColorPrimary
            </div>

            <div
                style={{
                    height: '200px',
                    width: '100%',
                    backgroundColor: theme.backgroundColorSecondary,
                    color: theme.colorPrimary,
                    display: 'grid',
                    placeContent: 'center',
                }}
            >
                theme.backgroundColorSecondary
            </div>

            <div
                style={{
                    height: '200px',
                    width: '100%',
                    backgroundColor: theme.backgroundColorTertiary,
                    color: theme.colorPrimary,
                    display: 'grid',
                    placeContent: 'center',
                }}
            >
                theme.backgroundColorTertiary
            </div>
        </div>
    );
}


export default App;
