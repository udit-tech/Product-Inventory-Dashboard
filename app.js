const products = [
    { id: 1, name: "Laptop", price: 24000, color: "red" },
    { id: 2, name: "Smartphone", price: 17000, color: "black" },
    { id: 3, name: "Tablet", price: 4500, color: "silver" },
    { id: 4, name: "Headphones", price: 5000, color: "black" },
    { id: 5, name: "Speaker", price: 10000, color: "silver" },
    { id: 6, name: "TV", price: 15000, color: "black" },
    { id: 7, name: "Earphones", price: 3000, color: "white" },
    { id: 8, name: "Smartwatch", price: 25000, color: "black" },
];

    const productListContainer=document.getElementById("productListContainer")

    const prodCheckbox=document.getElementById("prodCheckbox")

    const totalProductsContainer=document.getElementById("totalProductsContainer")

    const totalInventoryCostContainer=document.getElementById("totalInventoryCostContainer")

function renderProd(prodValue){

    const prodVal=prodValue==false?products:products.filter(p=>p.color=="black"&&p.price>5000)

      const productList=prodVal.map(p=>`
                
        <hr>
        <li>
        <p><b>Name : </b>${p.name}</p>
        <p><b>Price : </b>${p.price}</p>
        <p><b>Color : </b>${p.color}</p>
        
        `)

        productListContainer.innerHTML=productList.join(" ")

        totalProductsContainer.textContent=prodVal.length

        totalInventoryCostContainer.textContent=prodVal.reduce((acc,curr)=>{

            acc+=curr.price
            return acc
        },0)

}

renderProd(false)

prodCheckbox.addEventListener("change",function(){

    renderProd(prodCheckbox.checked)
})

  