import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Istruzioni" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Indovina la parola segreta! Dopo ogni tentativo il colore di ciascuna lettera diventa un indizio per il tentativo successivo.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
        />
        <Cell value="R" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera F si trova nel posto giusto!
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="F" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="M" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La parola contiene la lettera U ma in un'altra posizione
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="A" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera R non compare nella parola
      </p>
    </BaseModal>
  )
}
