import axios from "axios";
import { getToken } from "@/server/utils";

class AmarilisApi {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.API_URL || "http://localhost:5000/api/v1",
        });

    }

    getAllProducts = async () => {
        try {
            const { data } = await this.api.get('/products');
            return data.products;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    getAllProductsByCategory = async (category) => {
        try {
            const { data } = await this.api.get(`/products/${category}`);
            return data.products;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const amarilisApi = new AmarilisApi();
export default amarilisApi;