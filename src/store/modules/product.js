const state = {
  products: [
    {
      id: 1,
      image: "/img/laptop.jpg",
      name: "Microsoft Surface Laptop 4",
      price: 105000,quantity:1,
    },
    {
      id: 2,
      image: "/img/oneplus.jpg",
      name: "Oneplus Nord 2",
      price: 30000,quantity:1,
    },
    {
      id: 3,
      image: "/img/ipad.jpg",
      name: " Apple Ipad pro",
      price: 85999,quantity:1,
    },
    {
      id: 4,
      image: "/img/iphone.jpg",
      name: " Apple iphone 12 pro",
      price: 110000,quantity:1,
    },
    {
      id: 5,
      image: "/img/tshirt.jpg",
      name: "Timebomb T-Shirt",
      price: 999,
      quantity:1,
    },
  ],
  cart:[]
};
const getters = {
  getProducts: (state) => {
    return state.products;
  },
  getCartItem:(state)=>{
      return state.cart;
  },
  getCartLength:(state)=>{
      return state.cart.length
  }
};
const actions={
    addToCart:(context,payload)=>{
        context.commit("addToCart",payload)
    },
    removeFromCart:(context,payload)=>{
      context.commit("removeItemFromCart",payload)
    },
    quantityIncrease:(context,payload)=>{
      context.commit("quantityIncrease",payload)
    },
    quantityDecrease:(context,payload)=>{
      context.commit("quantityDecrease",payload)
    },

}
const mutations={
    addToCart:(state,payload)=>{
        console.log(payload)
        state.cart.push(payload)
    },
    removeItemFromCart:(state,payload)=>{
      console.log(payload)
      state.cart=state.cart.filter((data)=>{
        return data.id !==payload.id
      })
    },
    quantityIncrease:(state,payload)=>{
      console.log(payload)
      state.products.quantity+1
      if(state.products.quantity<1){
        state.products.quantity=1
        alert("Purchase Minimum 1 Item")
      }
    },
    quantityDecrease:(state,payload)=>{
      console.log(payload)
      state.products.quantity-1
      if(state.products.quantity<1){
        state.products.quantity=1
        alert("Purchase Minimum 1 Item")
      }
    }
}
export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};
