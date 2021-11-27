import instance from '../utils/request'

export function findmsort() {
    return instance.get(`/msort/searchMerchandiseSort`);
}
export function selectType() {
    return instance.get(`/msort/sortList`);
}
export function searchPage(searchParams) {
    return instance.get("/merchandise/searchPageByCriteria",{params:searchParams});
}
export function deleteMerchandise(entity){
    return instance.put("/merchandise/delete",entity);
}
export function selectBrand() {
    return instance.get(`/msort/searchPageByCriteria`);
}
export function addEntity(entity) {
    return instance.post(`/merchandise/save`, entity);
}
export function update(entity) {
    return instance.put(`/merchandise/update`, entity);
}