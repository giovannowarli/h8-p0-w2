var nama = 'Mark';
var peran = 'Penyihir';

if(nama === '' && peran === '') {
    console.log('nama harus diisi')
} else if(nama && peran === '') {
    console.log("Halo " +  nama + ", Pilih Ksatria, Penyihir atau Tabib sebagai peranmu untuk memulai game!")
} else if(nama && peran === 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Halo " + peran + ' ' + nama + ", kamu dapat menyerang dengan senjatamu!")
} else if(nama && peran === 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Halo " + peran + ' ' + nama + ', ' + 'kamu akan membantu temanmu yang terluka.')
} else if(nama && peran === 'Penyihir') {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
} else {
    console.log("Halo " + nama + " ,mohon pilih Ksatria, Penyihir atau Tabib sebagai peranmu!")
}








