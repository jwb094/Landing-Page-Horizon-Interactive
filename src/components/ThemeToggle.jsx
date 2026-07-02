import React from 'react';
import { useContext } from 'react';
import { useState, createContext } from 'react';
import { useThemeContext } from "../context/ThemeContext";

export const ThemeSwticherContext = createContext();

function ThemeToggle(props) {

    const { theme, handleSelect } = useThemeContext();

    return (
        <div data-template="theme-toggler" data-view="default" className="c-theme-toggler | position-fixed right-0 | bg-light">

            <div class="form-check form-switch">
                <input class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    value={theme}
                    onChange={handleSelect} />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                    {theme}</label>
            </div>


        </div>
    );
}

export default ThemeToggle;