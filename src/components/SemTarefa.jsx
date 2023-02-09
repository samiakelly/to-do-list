import styles from './SemTarefa.module.css'
import tarefaImg from '../assets/Clipboard.svg'

export function SemTarefa() {
  return (
    <div className={styles.divTarefas}>
      <img src={tarefaImg} alt="Uma imagem de pagína de tarefa" />
      <strong>Você ainda não tem tarefas cadastradas</strong>

      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
