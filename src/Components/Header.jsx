import s from '../Styles/header.module.css'

export default function Header (){
    return<>
    <header className={s.header}>
    <h1 className={s.title}>Случайный город</h1>
    </header>
    </>
}