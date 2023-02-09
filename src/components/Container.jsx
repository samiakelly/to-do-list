import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Tarefa } from './Tarefa'
import { SemTarefa } from './SemTarefa'
import styles from './Container.module.css'

export function Container(concluida) {
  const [tarefas, definirTarefa] = useState([])

  const [novaTarefa, definirNovaTrefa] = useState('')

  function butaoDeteleTarefa(id) {
    definirTarefa(
      tarefas.filter(tarefa => {
        if (tarefa.id === id) {
          return false
        }
        return true
      })
    )
  }

  function butaoTarefaConcluida(id) {
    definirTarefa(
      tarefas.map(tarefa => {
        if (tarefa.id === id) {
          return {
            titulo: tarefa.titulo,
            concluida: !tarefa.concluida,
            id: tarefa.id
          }
        } else {
          return tarefa
        }
      })
    )
  }

  function criarNovaTarefa() {
    console.log(tarefas.length)

    event.preventDefault()

    definirTarefa([
      ...tarefas,
      { titulo: novaTarefa, concluida: false, id: tarefas.length + 1 }
    ])
    definirNovaTrefa('')
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
      return tarefa != tarefaDeletada
    })

    definirTarefa(novaListaDeTarefas)
  }

  const seCampoForVazio = novaTarefa.length === 0

  const valorTarefasCriadas = tarefas.length

  // const valorTarefasConcluidas = tarefas.filter(tarefa => {
  //   if (tarefa.concluida) {
  //     return true
  //   }
  //   return false
  // }).length

  const valorTarefasConcluidas = tarefas.filter(
    tarefa => tarefa.concluida
  ).length

  return (
    <div className={styles.divContainer}>
      <form onSubmit={criarNovaTarefa} className={styles.divNovaTarefa}>
        <input
          name="tarefa"
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={novaTarefa}
          onChange={novaTarefaChange}
          onInvalid={novaTarefaInvalida}
          required
        />
        <button type="submit" disabled={seCampoForVazio}>
          Criar
          <PlusCircle />
        </button>
      </form>
      <div className={styles.divInfo}>
        <div
          className={
            valorTarefasCriadas === 0
              ? styles.divButtons
              : styles.divButtonsGray
          }
        >
          <p>Tarefas criadas</p>
          <button>{valorTarefasCriadas}</button>
        </div>

        <div
          className={
            valorTarefasConcluidas === 0
              ? styles.divButtons
              : styles.divButtonsConcluidaGray
          }
        >
          <span>Concluídas</span>

          {valorTarefasConcluidas === 0 ? (
            <button>{valorTarefasConcluidas}</button>
          ) : (
            <button>
              {valorTarefasConcluidas} de {valorTarefasCriadas}
            </button>
          )}
        </div>
      </div>
      <div className={styles.listaDeTarefas}>
        {tarefas.length ? (
          <div>
            {tarefas.map(tarefa => {
              return (
                <Tarefa
                  key={tarefa.id}
                  content={tarefa.titulo}
                  deleteTarefa={deleteTarefa}
                  concluida={tarefa.concluida}
                  butaoTarefaConcluida={butaoTarefaConcluida}
                  id={tarefa.id}
                  butaoDeteleTarefa={butaoDeteleTarefa}
                />
              )
            })}
          </div>
        ) : (
          <SemTarefa />
        )}
      </div>
    </div>
  )
}
