import store from "~/store";
import {_setModal, _removeModal} from "~/store/modal";

export const setModal = data => store.dispatch(_setModal(data))
export const removeModal = () => store.dispatch(_removeModal())
