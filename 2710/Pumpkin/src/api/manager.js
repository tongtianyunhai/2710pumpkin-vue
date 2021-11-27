import instance from '../utils/request'
export function searchPage(sid) {
    return instance.get(`/pstaff/searchStaffById/${sid}`);
}
export function deleteStaffById(sid){
    return instance.delete(`/pstaff/delete/${sid}`);
}
export function update(entity) {
    return instance.put(`/pstaff/updateStaffInfo`, entity);
}
export function addEntity(entity) {
    return instance.post(`/pstaff/save`, entity);
}

export function updateCustomer(entity) {
    return instance.put(`/puser/update`, entity);
}

export function searchCustomer(uid) {
    return instance.get(`/puser/searchCustomerById/${uid}`);
}
