import styles from './Tarefa.module.css'
import { Trash } from 'phosphor-react'

export function Tarefa({
  content,
  butaoDeteleTarefa,
  concluida,
  butaoTarefaConcluida,
  id
}) {
  return (
    <div className={styles.tarefa}>
      <button
        onClick={() => butaoTarefaConcluida(id)}
        title="Concluido"
        className={
          concluida ? styles.buttonMarcarConcluido : styles.buttonMarcar
        }
      >
        <span></span>
      </button>
      <div className={styles.novaTarefa}>
        {concluida ? (
          <p>
            <del>{content}</del>
          </p>
        ) : (
          <p>{content}</p>
        )}
      </div>

      <button
        onClick={() => butaoDeteleTarefa(id)}
        title="Excluir tarefa"
        className={styles.buttonDeletar}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
