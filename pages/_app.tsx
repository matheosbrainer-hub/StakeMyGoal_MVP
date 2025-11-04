import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: any) {
  const [theme, setTheme] = useState('dark');
  useEffect(()=>{
    const saved = (typeof window !== 'undefined' && localStorage.getItem('smg_theme')) || 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('light', saved === 'light');
  },[]);
  const toggle = ()=>{
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof window !== 'undefined') localStorage.setItem('smg_theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };
  return <Component {...pageProps} theme={theme} toggleTheme={toggle} />;
}
