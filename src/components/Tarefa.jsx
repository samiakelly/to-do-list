import styles from './Tarefa.module.css'
import {Trash} from 'phosphor-react'


export function Tarefa({content, deleteTarefa}) {

  function butaoDeteleTarefa () {
   deleteTarefa(content)
  }

  return (
    <div className={styles.tarefa}>
      <button title='Concluido' className={styles.buttonMarcar}>
        <span></span>
      </button>
      <div className={styles.novaTarefa}>
          
          <p>{content}</p>
      </div>  

         
      <button onClick={butaoDeteleTarefa} title='Excluir tarefa' className={styles.buttonDeletar}>
          <Trash size={24} />
      </button>
    </div>
  
 )
}