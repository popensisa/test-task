import { $host } from "./index"


export const fetch = async (page, sort) => {
    const {data} = await $host.get(`api/orders/researches-with-prices?page=${page}&amp;size=20&amp;sort[0].key=name&amp;sort[0].value=${sort}`)
    return data
}
export const fetchSearch = async (page, code) => {
    const {data} = await $host.get(`http://192.168.3.5:5666/api/orders/researches-with-prices?page=${page}&amp;size=20&amp;sort[0].key=name&amp;sort[0].value=asc&amp;code=${code}79`)
    return data
}