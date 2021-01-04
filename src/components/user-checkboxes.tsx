import { useEffect } from "react"
import { checklistRef } from "../modules/firebase"

const UserCheckboxes = () => {
  useEffect(() => {
    checklistRef.on('value', (snapshot) => {
      let boxes = snapshot.val()
      let newState = []
      for (let box in boxes) {
        newState.push({
          id: box,
          label: boxes[box].label,
          checked: boxes[box].checked
        })
      }
    })
  })
}

export default UserCheckboxes
