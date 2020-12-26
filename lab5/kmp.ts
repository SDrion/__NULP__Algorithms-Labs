function prefixFunction(string: string): number[] {
  const p: number[] = [0];
  for (let i = 1; i < string.length; ++i) {
    let k = p[i - 1];
    while (k > 0 && string[i] != string[k]) {
      k = p[k - 1];
    }
    if (string[i] == string[k]) {
      ++k;
    }
    p[i] = k;
  }
  return p;
}

export default function KMP(pattern: string, sequence: string): number[] {
  const pl: number = pattern.length;
  const sl: number = sequence.length;

  const answer: number[] = [];
  const p: number[] = prefixFunction(pattern + '#' + sequence);
  
  let counter: number = 0;
  for(let i = 0; i < sl; i++) {
    if(p[pl + i + 1] == pl) {
      answer[counter++] = i;
    }
  }
  return answer;
}