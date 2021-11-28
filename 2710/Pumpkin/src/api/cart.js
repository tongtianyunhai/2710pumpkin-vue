import instance from "../utils/request";

export function addEntity(entity) {
    return instance.post(`/SCart/add_Cart`, entity);
}
