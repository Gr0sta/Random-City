import s from './header.module.css'

export default function Header (){
    return<>
    <header className={s.header}>
        <div className={s.container}>
            <h1 className={s.title}>Случайный город</h1>
        </div>
    </header>
    </>
}