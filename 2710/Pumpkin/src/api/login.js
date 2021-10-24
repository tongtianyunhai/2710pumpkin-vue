import instance from '../utils/request'

export function PUserController(entity) {
    return instance.post(`/puser/selectUserByName`,entity);
}