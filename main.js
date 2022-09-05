const str = `
    010-1234-5678
    theqwe@qwe.com
    https://fastcampus.co.kr/
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
    hvdp
    http://localhost:1234
`;

// const regexp = new RegExp("the", "gi");
// const regexp = /the/gi; 
// console.log(str.match(regexp));
// const regexp2 = /fox/gi; 
// console.log(regexp2.test(str));
// console.log(str.replace(regexp2, "AAA"));

// console.log(str.match(/d$/gm));
// console.log(str.match(/h..p/g));
// console.log(str.match(/fox|dog/g));
// console.log(str.match(/https?/g));

// console.log(str.match(/d{2}/));
// console.log(str.match(/d{2}/g));
// console.log(str.match(/d{2,}/g));
// console.log(str.match(/d{2,3}/g));
// console.log(str.match(/\w{2,3}/g));
// console.log(str.match(/\b\w{2,3}\b/g));

// console.log(str.match(/\bf\w{1,}\b/g)); // f로 시작하는 영단어

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));