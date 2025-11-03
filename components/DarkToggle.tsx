'use client';
export default function DarkToggle({ theme, toggleTheme }: any){
  return (
    <button onClick={toggleTheme} className="btn ghost" style={{padding:'8px 10px'}}>{theme==='dark' ? 'Light' : 'Dark'} mode</button>
  )
}
