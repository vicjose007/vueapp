import http from "../http-commons";
class ProductCategoryHelper {
  getAllProductCategory() {
    return http.get("/ProductCategory");
  }
  createProductCategory(data) {
    // eslint-disable-next-line no-debugger
    return http.post("/ProductCategory", data, {headers: {'Authorization': `bearer ${sessionStorage.getItem("Token")}`}});
  }
  deleteProductCategory(data) {
    // eslint-disable-next-line no-debugger
    debugger;
    return http.delete("/ProductCategory", {
      data,
    }, {headers: {'Authorization': `bearer ${sessionStorage.getItem("Token")}`}});
  }
}

export default new ProductCategoryHelper();
