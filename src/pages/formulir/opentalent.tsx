import '../../app/globals.css'
export default function opentalent() {
    return(
        <form action={""} method="POST" className="">
            <h1>OPEN TALENT</h1>
            <label htmlFor="email">Email</label><br></br>
            <input id="email" name="email" type="email" required className=""/><br></br>
            <label htmlFor="name">Nama lengkap</label><br></br>
            <input id="name" name="name" type="text" className=""/><br></br>
            <div className="">
                <label htmlFor="prodi">Program studi</label><br></br>
                <input id="prodi" name="prodi" type="radio" className=""/><br></br>
                <input id="prodi" name="prodi" type="radio" className=""/><br></br>
                <input id="prodi" name="prodi" type="radio" className=""/><br></br>
            </div>
            
            <label htmlFor="nomorWA">Nomor WhatsApp</label><br></br>
            <input id="nomorWA" name="nomorWA" type="number" className=""/><br></br>
            

            <br></br>
            <button type="button">Kirim</button>
        </form>
    )
}