function digitProduct(n) {
  let sequence = [];
  for(let x = 0; x <= n; x++) {
    if (x === n ) {
      return sequence[x-1];
    } else if(x === 0) {
      sequence.push(1);
    } else if (sequence[x-1] < 9) {
      sequence.push(sequence[x-1]*2);
    } else {
      let equate = sequence[x-1].toString().split('');
      sequence.push(equate.reduce(function(a,b){return parseInt(a) * parseInt(b) + sequence[x-1]}));
    }
  }
}
digitProduct(3) // returns 4
digitProduct(6) // returns 22
digitProduct(9) // returns 62

function recDigitProduct(n, seq=[]) {
  if(seq.length === n) {
    return seq[n-1];
  } else if(seq.length === 0) {
    return recDigitProduct(n, [1]);
  } else if(seq[seq.length-1] < 9) {
    seq.push(seq[seq.length-1]*2);
    return recDigitProduct(n, seq);
  } else {
    seq.push((seq[seq.length-1].toString().split('')).reduce(function(a,b){return parseInt(a) * parseInt(b) + seq[seq.length-1]}));
    return recDigitProduct(n, seq);
  }
}

recDigitProduct(9) // returns 62
