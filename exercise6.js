1.

var i = 2;

console.log('LOOPING PERTAMA');

while (i < 20) {
    console.log (`${i} - I love coding`);
    i+=2;
}

var l = 20;

console.log('LOOPERING KEDUA') 

while (l > 0) {
    console.log (`${l} - I will become fullstack developer`);
    l-=2;
}

2.

console.log('LOOPING PERTAMA');
for (i = 1; i<=20; i++ ) {
    console.log (`${i} - I love coding`);
}

console.log('LOOPING KEDUA');
for (i = 20; i>0; i-- ) {
    console.log (`${i} - I will become fullstack developer`);
}

3. 

for (i=1; i<=100; i++) {
    if ( i%2 == 1) {
        console.log(i + ' GANJIL')
    } else {
        console.log(i + ' GENAL')
    }
}




for (i=1; i<=100; i+=5) {
    if ( i%6 == 0 ) {
        console.log(i + ' KELIPATAN 6')
    } else {
        console.log("")
    }
}


for (i=1; i<=100; i+=9) {
    if ( i%10 == 0 ) {
        console.log(i + ' KELIPATAN 10')
    } else {
        console.log("")
    }
}




