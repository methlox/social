import { ThemeProvider } from 'styled-components';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { SelectableTheme } from '../utils/types';
import { DarkTheme, LightTheme } from '../utils/themes';

export const AppPage = () => {
    const { theme } = useSelector((state: RootState) => state.settings);
    const storageTheme = localStorage.getItem('theme') as SelectableTheme;
    return (
        <ThemeProvider
            theme={
                storageTheme
                    ? storageTheme === 'dark'
                        ? DarkTheme
                        : LightTheme
                    : theme === 'dark'
                        ? DarkTheme
                        : LightTheme
            }
        >
        </ThemeProvider>
    );
};