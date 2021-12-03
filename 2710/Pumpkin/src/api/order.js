import instance from "../utils/request";


export function searchPage(searchParams) {
    return instance.get("/Sorder/getOrderList",{params:searchParams});
}

export function addEntity(entity) {
    return instance.post(`/Sorder/place_order`, entity);
}
