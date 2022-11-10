let num = [5, 8, 2, 9, 3]
/*
num[4] = 6 
num.push(7) //método interno que vai acrescentar valores em um array na última posição
num.length
num.sort() //organiza as posições de maneira crescente
num.indexOf() //identifica a posição do valor no array
*/

num.sort()
console.log(`Nosso vetor é o ${num}.`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]}.`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {console.log(`O valor 8 está na posição ${pos}`)}

for(let pos = 0; pos < num.length; pos++){
    console.log(`Aposição ${pos} tem o valor ${num[pos]}.`)
}

//simplificação para array
for(let pos in num){
    console.log(num[pos])
}