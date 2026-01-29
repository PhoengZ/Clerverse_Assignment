const subtract: Record<string, string[]> = {
  I: ["X", "V"],
  X: ["L", "C"],
  C: ["D", "M"],
};
const subtract_val: Record<string, number>={
    "IV":3,
    "IX":8,
    "XL":30,
    "XC":80,
    "CD":300,
    "CM":800
}
const val: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function sol(s: string) {
  let stack: string[] = [];
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const last= stack[stack.length - 1];
    if (stack.length > 0 && subtract[last]?.includes(s[i])) {
        const e:string = last + s[i]
        ans += subtract_val[e]
    } else {
        ans += val[s[i]];
    }
    stack.push(s[i])
  }
  return ans
}