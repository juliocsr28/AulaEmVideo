let amigo = {Nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.Nome} pesa ${amigo.peso}KG`)