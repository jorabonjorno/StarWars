import {HTTP, HTTPS} from "@constants/api";

/**
 * Изменяет у URL протокол с HTTP на HTTPS (для загрузки на гитхаб пейдж)
 * @param {String} url - URL для изменения
 * @return {String} - URL с измененным протоколом на HTTPS
 */

export const changeHTTP = (url) => {
   return url ? url.replace(HTTP,HTTPS) : url
}

/**
 * Отправляет запрос Fetch на внешний API
 * @param {String} url - URL для запроса
 * @return {Promise<boolean|any>} - промис с результатом запроса
 */
export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url)
        if(!res.ok){
            console.log('Could not fetch', res.status)
            return false
        }
        return await res.json()
    } catch (err) {
        console.error('Could not fetch', err.message)
        return false
    }
}

// (async () => {
//  const res = await getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE)
//     console.log(res)
// })()

export const makeConcurrentRequest = async (url) => {
    return await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }))
}
