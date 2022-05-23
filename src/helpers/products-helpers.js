import http from "../http-commons";
class ProductHelper {
    getAll() {
      return http.get("/Product");
    }
    create(data){
        // eslint-disable-next-line no-debugger
        return http.post("/Product", data)
    }
    delete(value){
        // eslint-disable-next-line no-debugger
        debugger
        return http.delete("/Product",{
            data:value
        })
    }
}

export default new ProductHelper();