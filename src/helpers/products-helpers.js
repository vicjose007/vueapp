import http from "../http-commons";
class ProductHelper {
    getAll() {
      return http.get("/Product");
    }
    create(data){
        // eslint-disable-next-line no-debugger
        debugger
        return http.post("/Product", data)
    }
}

export default new ProductHelper();