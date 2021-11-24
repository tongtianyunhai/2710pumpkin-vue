import instance from '../utils/request'
export function addEntity(entity) {
    return instance.post(`/puser/save`, entity);
}