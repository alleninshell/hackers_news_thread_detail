import LocalStorage from './local-storage'
import Consts from '../consts'

const getCommentContent = (commentID: number) => {
    return LocalStorage.Get(Consts.COMMENT_CONTENT_PREFIX + commentID.toString())
}

const composeComment = (commentIDList: number[]) => {

    let result = []
    for (let i of commentIDList) {
        result.push({
            id: i,
            content: getCommentContent(i)
        })
    }
    return result
}

export default {
    getRoot() {
        let list = LocalStorage.Get(Consts.ROOT_COMMENTS)
        return composeComment(list)
    },
    getChildren(commentID: number) {
        let list = LocalStorage.Get(Consts.COMMENT_LIST_PREFIX + commentID.toString())
        return composeComment(list)
    },
    addComment(isRoot: boolean, comment: string, commentID?: number) {
        let id = LocalStorage.Get(Consts.MAX_COMMENT_ID) + 1
        LocalStorage.Set(Consts.MAX_COMMENT_ID, id)
        LocalStorage.Set(Consts.COMMENT_CONTENT_PREFIX + id.toString(), comment)
        let listKey = Consts.COMMENT_LIST_PREFIX
        if (isRoot) {
            listKey = Consts.ROOT_COMMENTS
        }
        let list = LocalStorage.Get(listKey)
        list.push(id)
        LocalStorage.Set(listKey, list)
    }
}