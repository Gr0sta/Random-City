import s from'./footer.module.css'

export default function Footer (){
    return<>
    <footer className={s.footer}>
        <div className={s.container}>
            <p className={s.copyright}>© 2025 Akhverdov Denis</p>
            <a className={s.author} href='https://github.com/Gr0sta/Random-City/tree/main'>Akhverdov Denis</a>
        </div>
    </footer>
    </>
}