import modals from "~/routes/modals.js";
import {useModal} from "~/store/modal/hooks.js";

export function Modal() {

  const modal = useModal()
  const currentModal = modals.find(m => m.name == modal.name)
  return (
    <div className="fixed inset-0 bg-[#5b7083]/40 flex items-center justify-center z-20">
      <div className="bg-[#15202b] max-w-[600px] max-h-[90vh] overflow-auto rounded-2xl">
        {currentModal && <currentModal.element/>}
      </div>
    </div>
  )
}
