import LocalStorage from './local-storage'
import Consts from '../consts'
export default function(){
    return LocalStorage.Get(Consts.MAIN_CONTENTS)
}