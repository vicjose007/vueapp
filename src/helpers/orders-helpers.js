import http from "../http-commons";
class OrderHelper {
    createOrder(data){
        // eslint-disable-next-line no-debugger
        return http.post("/Orders", data)
    }
    deleteOrder(value){
        // eslint-disable-next-line no-debugger
        debugger
        return http.delete("/Orders",{
            data:value
        })
    }
    getOrders() {
        return http.get("/Orders");
      }
}
export default new OrderHelper();