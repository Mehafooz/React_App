// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// const appStore= configureStore(
//     {
//         reducer:{
//             cart:cartReducer
//         }
//     }
    

// );

// export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

// Enable Hot Module Replacement for reducers
if (module.hot) {
    module.hot.accept('./cartSlice', () => {
        const newCartReducer = require('./cartSlice').default;
        appStore.replaceReducer({
            cart: newCartReducer
        });
    });
}

export default appStore;