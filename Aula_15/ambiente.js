let num = [5, 8 , 9]
num [3] = 6
num.push(7)
num.sort()
console.log(`nosso vetor tem ${num}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`o valor não foi encontrado`)
} else{
    console.log(`o valor está na posição ${pos}`)
}
