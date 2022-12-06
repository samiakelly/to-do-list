import { PlusCircle} from 'phosphor-react'
import { useState } from 'react'
import { Tarefa } from './Tarefa'
import { SemTarefa} from './SemTarefa'
import styles from './Container.module.css'


export function Container() {

  

  const [tarefas, definirTarefa] = useState([
   

  ])

  const [novaTarefa, definirNovaTrefa] = useState('')

  function criarNovaTarefa() {
    console.log(tarefas.length)
    
    event.preventDefault()

        
    definirTarefa([...tarefas, novaTarefa]);
    definirNovaTrefa('');

    
  }

  
 

  function novaTarefaInvalida() {

    event.target.setCustomValidity('Adicione uma nova tarefa')
  }

  function novaTarefaChange() {
    event.target.setCustomValidity('')
    definirNovaTrefa(event.target.value)
  }

  function deleteTarefa(tarefaDeletada) {
    const novaListaDeTarefas = tarefas.filter(tarefa => {
      return tarefa != tarefaDeletada;
    }) 
    
    definirTarefa(novaListaDeTarefas);
  }

  const seCampoForVazio = novaTarefa.length === 0;

  const valorTarefasCriadas =  tarefas.length;

  return(
    <div className={styles.divContainer}>

      <form onSubmit={criarNovaTarefa} className={styles.divNovaTarefa}>
        <input 
          name='tarefa'
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={novaTarefa}
          onChange={novaTarefaChange}
          onInvalid={novaTarefaInvalida}
          required
        />
        <button type='submit' disabled={seCampoForVazio}>
          Criar
        < PlusCircle />
      
        </button>
      </form>
      <div className={styles.divInfo}>
        <div className={styles.divButtons}>
          <p>
            Tarefas criadas
          </p>
          <button>
             {valorTarefasCriadas}
          </button>
        </div>
        <div className={styles.divButtons}>
          <span>
            Concluídas
          </span>
          <button>
              0
            </button>
        </div>
      </div>
      <div className={styles.listaDeTarefas}>

        {tarefas.map(tarefa =>
          { 
          return (
            <Tarefa
              key={tarefa}
              content={tarefa} 
              deleteTarefa={deleteTarefa}
            />
            )
          })}   

      </div>
    
    </div>
  )
}