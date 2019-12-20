function konversiMenit(menit) {
    var jarumMenit = Math.floor(menit/60);
    var jarumDetik = menit%60;
    if (jarumMenit >= 1 && jarumDetik < 10) {
        return `${jarumMenit}:0${jarumDetik}`;
    } else if (jarumMenit >= 1 && jarumDetik >=10){
      return `${jarumMenit}:${jarumDetik}`
    } else if (jarumDetik < 10) {
      return `0:0${jarumDetik}`
    } else { 
      return `0:${jarumDetik}`
      }
    }
  
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00