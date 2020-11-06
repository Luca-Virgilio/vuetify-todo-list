import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:"Router", price:30},
            {name:"Mouse", price:10},
            {name:"Monitor 24''", price:110},
            {name:"Case", price:70},
            {name:"Cpu 4Core 7th", price:150},
            {name:"Graphics cards 3380", price:450}
        ],
        sections:[
            'IT'
        ]
    },
    // specific data visualization used multiple times
    getters:{
        saleProducts: state =>{
            const saleProducts= state.products.map(product =>{
                return {
                    name:"**"+ product.name + "**",
                    price: product.price/2
                }
            })
            console.log(saleProducts);
            return saleProducts
        }
    },
    // modify the state of the store
    mutations:{
        reducePrice: (state, payload) =>{
            state.products = state.products.map((item) => {
                return {
                  name: item.name,
                  price: item.price - payload,
                };
              });
        }
    },
    // async request to modify the state of the store
    // usually linked to an action
    actions:{
        reducePriceFy: (context,paylaod)=>{
            setTimeout(()=>{
                context.commit('reducePrice', paylaod);
            },2000);
        }
    }

})