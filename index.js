const express = require('express')
const app =  express();
const port = 5000

app.get('/', (req,res) => {
    res.send(`Hello Word`)
})

app.put('/', (req,res) => {
    res.send(`Put Data`)
})

app.get('/mahasiswa/', (req,res) => {
});

app.get('/mahasiswa/:nim/:semester', (req, res) => {
    const nim = req.params.nim;
    const semester = req.params.semester;

    res.send(`mahasiswa dengan nim : ${nim} semester ${semester} telah ditemukan `)
});

app.get('/get-by-semester', (req,res)=>{
    const semester = req.query.semester;

    res.send(`mahasiswa semester : ${semester} ditemukan`)
});

app.get('/nim-semester', (req,res) => {
    const nim = req.query.nim;
    const semester = req.query.semester;

    res.send(`mahasiswa dengan nim : ${nim} semester ${semester} telah ditemukan`)
});

app.use(express.json())

app.post('/mahasiswa', (req,res) => {
    const nim = req.body.nim;
    const semester = req.body.semester;
    const angkatan = req.body.angkatan;

    const msg = { status : "sukses",
                  data   : {"nim":nim, "semester":semester, "angkatan":angkatan }}

    res.send(msg)
})


app.post('/', (req,res) => {
    res.send(`Post Data`)
})

app.delete('/', (req,res) => {
    res.send(`Hapus Data`)
})

app.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`Get-Home id - ${id}`)
})

app.listen(port,()=> {
    console.log(`server berjalan pada localhost:${port}`)
});