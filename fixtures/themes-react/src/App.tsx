import React, { useState } from 'react';
import './App.css';

import themes from '@plurid/apps.utilities.themes';

import Stripe from './components/Stripe';
import ThemePicker from './components/ThemePicker';



const App: React.FC = () => {
    const [theme, setTheme] = useState(themes.depict);

    return (
        <div className="App">
            <ThemePicker
                theme={theme.name}
                setTheme={setTheme}
            />

            <Stripe
                text="theme.backgroundColorPrimary"
                backgroundColor={theme.backgroundColorPrimary}
                color={theme.colorPrimary}
            />

            <Stripe
                text="theme.backgroundColorPrimaryAlpha"
                backgroundColor={theme.backgroundColorPrimaryAlpha}
                color={theme.colorPrimary}
            />

            <Stripe
                text="theme.backgroundColorPrimaryInverted"
                backgroundColor={theme.backgroundColorPrimaryInverted}
                color={theme.colorPrimary}
            />

            <Stripe
                text="theme.backgroundColorSecondary"
                backgroundColor={theme.backgroundColorSecondary}
                color={theme.colorPrimary}
            />

            <Stripe
                text="theme.backgroundColorSecondaryAlpha"
                backgroundColor={theme.backgroundColorSecondaryAlpha}
                color={theme.colorPrimary}
            />

            <Stripe
                text="theme.backgroundColorTertiary"
                backgroundColor={theme.backgroundColorTertiary}
                color={theme.colorPrimary}
            />

            <Stripe
                text="theme.backgroundColorTertiaryAlpha"
                backgroundColor={theme.backgroundColorTertiaryAlpha}
                color={theme.colorPrimary}
            />

        </div>
    );
}


export default App;
