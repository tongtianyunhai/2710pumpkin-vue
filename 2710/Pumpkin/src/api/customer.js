import instance from '../utils/request'
export function update(entity) {
    return instance.put(`/pcustomer/update`, entity);
}

export function search(uid) {
    return instance.get(`/puser/searchCustomerById/${uid}`);
}