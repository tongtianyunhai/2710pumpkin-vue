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
export function deleteMerchandise(deleteParams){
    return instance.put("/merchandise/delete",{params:deleteParams});
}