//分页条件查询 五个参数 =====>对象
import instance from '../utils/request'
export function searchPage(searchParams) {
   return instance.get("/msort/searchPageByCriteria",{params:searchParams});
}
export function deleteBrandById(sid){
   return instance.put(`/msort/delete/${sid}`);
}

export function addEntity(entity) {
   return instance.post(`/msort/save`, entity);
}
export function update(entity) {
   return instance.put(`/msort/update`, entity);
}
//select type
export function selectType() {
   return instance.get(`/msort/searchType`);
}