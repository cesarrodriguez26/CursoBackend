/*class ProductManager {
    constructor()
   
    async getProducts(){

    }
}*/


import {promises as fs} from 'fs'
import { get } from 'https'


const path ='./productos.json'

const getProducts = async () => {
    const prods = JSON.parse (await fs.readFile(path, 'utf-8'))
    console.log(prods)
}

const getProductsById = async (id) => {
    const prods = JSON.parse (await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if (producto)
    console.log(producto)

    else
    console.log("Producto no encontrado")
}

const addProduct = async (product) => {
    const prods = JSON.parse (await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === product.id)

    if (producto){
    console.log ("Producto Agregado")
} else {
    prods.push(product)

    await fs.writeFile(path, JSON.stringify(prods))
}
}

const updateProduct = async (id, product) => {
    const prods = JSON.parse (await fs.readFile(path, 'utf-8'))
        const indice = prods.findIndex(prod => prod.id === id)
    
        if (indice !=-1) {
        prods [indice].nombre = product.nombre
    // tenemos que hacerlo con el resto de las propieades

    await fs.writeFile(path, JSON.stringify(prods))
    
}   else {
    
    console.log("Producto no encontrado")
}
}

const deleteProduct = async (id) =>{
    const prods = JSON.parse (await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if(producto) {
        await fs.writeFile(path, JSON.stringify(prods.filter(prod => prod.id !=id)))

    }else {
        console.log("Producto no encontrado")
}
}

const product1 = {id: 1, nombre: "Zapatillas Adidas"}
const product2 = {id: 2, nombre: "Zapatillas Nike"}
const product3 = {id: 3, nombre: "Zapatillas Puma"}

deleteProduct(2)






//updateProduct(5, {nombre: "Zapatillas New Balance"})


//addProduct(product3)


//getProductsById(1)


//getProducts()