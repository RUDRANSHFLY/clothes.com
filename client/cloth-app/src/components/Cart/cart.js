import { getUserId } from "../../hooks/userEntry";
import { makeRequest, postRequest } from "../../makeRequest";
import { useEffect } from "react";



function getCurreentUser() {
    return window.localStorage.getItem('username');
}

export async function getAddedtoCart(productID, productQuantiy) {
    let isContaines = false;
    let quantity = 0;
    let productIndex;
    const username = getCurreentUser();

    const userId = await getUserId(username);


    // console.log(`${username} ${userId}`);

    const url = `/usercloths/${userId}`
    const res = await postRequest.get(url);

    let cartArray = res.data.data.attributes.cart;
    if (cartArray != null) {
        for (let i = 0; i < cartArray.length; i++) {
            const element = cartArray[i];
            if (productID == element.id) {
                isContaines = true;
                quantity = element.quantity;
                productIndex = i;
            };
        }
    }


    if (isContaines === true) {

        const newQuantity = quantity + productQuantiy;
        cartArray[productIndex].quantity = newQuantity
        const newCartArray = {
            "data": {
                cart: cartArray,
            }
        }

        postRequest.put(url, newCartArray);
    } else {
        const productArray = await getProduct(productID);
        productArray.quantity = productQuantiy;
        if (cartArray == null) {
            cartArray = [productArray];
        } else {
            cartArray.push(productArray);
        }
        const putCartArray = {
            "data": {
                cart: cartArray
            }
        };
        postRequest.put(url, putCartArray);
    }

    // console.log(`the cart array :- ${cartArray}`);
    //     const productArray = await getProduct(productID);
    //     productArray.quantity = productQuantiy;
    //     // console.log(`the product array ${productArray}`);
    //     if (cartArray == null) {
    //         cartArray = [productArray];
    //     } else {
    //         cartArray.push(productArray);
    //     }
    //     const putCartArray = {
    //         "data": {
    //             cart: cartArray
    //         }
    //     };
    //     postRequest.put(url, putCartArray);
}

export async function getCartProducts() {
    const username = getCurreentUser();
    const userId = await getUserId(username);
    const url = `/usercloths/${userId}`;
    const res = await postRequest.get(url);
    const cartData = res.data.data.attributes.cart;
    console.log(cartData);
    return cartData;
}

export async function getProduct(productID) {
    const url = `/products/${productID}?populate=*`;
    const res = await makeRequest.get(url);
    return res.data.data;
}

export async function getAllCartProducts() {
    const username = window.localStorage.getItem("username");
    const userId = await getUserId(username);
    const url = `/usercloths/${userId}`
    const res = await postRequest.get(url);
    return res.data.data.attributes.cart;
}

export async function removeOneProduct(productID) {
    console.log("DELETE FUNCTION CALLED");
    console.log(`productid:- ${productID}`);
    let productIndex;
    const userCurrrent = getCurreentUser();
    const userId = await getUserId(userCurrrent);
    const url = `/usercloths/${userId}`
    const res = await postRequest.get(url);

    let cartArray = res.data.data.attributes.cart;
    console.log(cartArray);
    if (cartArray != null) {
        for (let i = 0; i < cartArray.length; i++) {
            const element = cartArray[i];
            if (productID == element.id) {
                productIndex = i;
            };
        }
    }

    cartArray.splice(productIndex, 1);
    let newCartArray = {
        "data": {
            cart: cartArray
        }
    }
    postRequest.put(url, newCartArray);
}

export async function clearCart() {
    const userCurrrent = getCurreentUser();
    const userId = await getUserId(userCurrrent);
    const url = `/usercloths/${userId}`
    const res = await postRequest.get(url);
    let cartArray = res.data.data.attributes.cart;
    const clearCartArray = {
        "data": {
            cart: null
        }
    }
    await postRequest.put(url, clearCartArray);
}
