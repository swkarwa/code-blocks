import { ProductList } from "../dto/response/product-list";
import { RequestDispatcher } from "./request-distpatcher";

export class Products extends RequestDispatcher {

    PRODUCT_LIST = `api/productsList`

    public async getProductList(): Promise<ProductList> {
        const response = await this.get({
            endpoint: 'api/productsList'
        })

        return await response.json() as ProductList
    }
}

