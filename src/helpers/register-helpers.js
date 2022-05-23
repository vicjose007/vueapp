import http from "../http-commons";
class UserRegisterHelper {
    RegisterUser(data){
        // eslint-disable-next-line no-debugger
        return http.post("/Auth/register", data  )
    }
}
export default new UserRegisterHelper();