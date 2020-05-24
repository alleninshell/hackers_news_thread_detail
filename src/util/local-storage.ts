/**
 * 对于不能JSON.stringify的对象，是要包一层的
 */
export default {
    Get(key: string) {
        const stringContent = window.localStorage.getItem(key) as string
        try {
            return JSON.parse(stringContent)
        } catch (e) {
            return {}
        }
    },
    Set(key: string, value: any) {
        const stringContent = JSON.stringify(value)
        window.localStorage.setItem(key, stringContent)
    }
}