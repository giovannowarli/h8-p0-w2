1.
READ massaBenda, percepatanBenda
resultanGaya = massaBenda * percepatanBenda
WRITE resultanGaya

2.
READ year, kabisat
IF year % 4 = 0 && year % 100 >= 1 
    kabisat = 'true'
ELSE IF year%4=0 && year%100=0 && year%400=0
    kabisat = 'true'
ELSE 
    kabisat = 'false'
ENDIF
WRITE year, kabisat

3.
READ name, jumlahBaju
IF jumlahBaju = 20
    mesinCuciNyala = 'TRUE'
ELSE
    mesinCuciNyala = 'FALSE'
ENDIF
WRITE name, jumlahBaju, mesinCuciNyala

4.
READ kukuPanjang
kukuPanjang = true
IF kukuPanjang = true
    hukum = 'kamu dihukum'
ELSE 
    hukum = 'kamu hebat'
ENDIF
WRITE kukuPanjang, hukum





