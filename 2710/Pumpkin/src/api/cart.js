import instance from "../utils/request";

export function addEntity(entity) {
    return instance.post(`/SCart/add_Cart`, entity);
}
export function searchPage(searchParams) {
    return instance.get("/SCart/select_cart_info",{params:searchParams});
}
export function deleteEntity(entity) {
return instance.post(`/SCart/remove_from_Cart`, entity);}

