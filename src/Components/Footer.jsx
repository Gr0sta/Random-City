import s from'../Styles/footer.module.css'

export default function Footer (){
    return<>
    <footer className={s.footer}>
    <p className={s.copyright}>Copyright</p>
    <p className={s.author}>Author</p>
    </footer>
    </>
}