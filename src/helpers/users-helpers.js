import http from "../http-commons";
class UserHelper {
    LoginUser(data){
        // eslint-disable-next-line no-debugger
        return http.post("/Auth/Login", data)
    }
    deleteUser(value){
        // eslint-disable-next-line no-debugger
        debugger
        return http.delete("/Auth/Login",{
            data:value
        })
    }
    getAllUsers() {
        return http.get("/Auth/Login");
      }
}
export default new UserHelper();