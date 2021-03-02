
const getProducts =(req,res,next)=>{
    res.send('products')
}

const getProduct =(req,res,next)=>{
    const id = req.params.id;
    res.send(id)
}



export default {
    getProducts: getProducts,
    getProduct: getProduct
}