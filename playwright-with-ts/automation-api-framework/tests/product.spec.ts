import test from "@playwright/test";
import { Products } from "../clients/products";
import { AddressImpl } from "../dto/requests/user_dto";

test.describe('Product tests', () => {

    test('get product list', async () => {
        const products = await Products.create()
        const productList = await products.getProductList()
        console.log(JSON.stringify(productList, null, 2))
    })

    test('print DTO', async () => {
        const address = AddressImpl.default()
            .street('Shreya Nagar')
            .city('Aurangabad')
            .state('Maharashtra')
            .pin_code(431001)
            .country('India')

        console.log(address)
    })

})