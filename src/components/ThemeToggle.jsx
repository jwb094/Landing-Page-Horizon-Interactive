import React from 'react';
import { useContext } from 'react';
import { useState, createContext } from 'react';
import { useThemeContext } from "../context/ThemeContext";
import '../assets/styles/c-theme-toggler.css'
export const ThemeSwticherContext = createContext();

function ThemeToggle(props) {

    const { theme, handleSelect } = useThemeContext();

    return (
        <section data-template="theme-toggler" data-view="default" className="c-theme-toggler | position-fixed right-0 rounded-pill | bg-primary-color text-light">

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


        </section>
    );
}

export default ThemeToggle;