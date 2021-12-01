import instance from "../utils/request";


export function RankByTopOne(searchParams) {
    return instance.get("/rank/RankByTopOne",{params:searchParams});
}
export function TheAmount(searchParams) {
    return instance.get("/rank/TheAmount",{params:searchParams});
}
export function TopTen(searchParams) {
    return instance.get("/rank/TopTen",{params:searchParams});
}
