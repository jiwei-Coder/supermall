export default {

  addCounter(state,oldProduct){
    oldProduct.count++
  }
  ,
  addCart(state,newProduct){
    newProduct.checked=false
    state.cartList.push(newProduct)
  }

}
