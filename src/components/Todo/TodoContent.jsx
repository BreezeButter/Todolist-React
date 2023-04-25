import styles from './TodoConrent.module.scss'

export function TodoContent (){
  
    const mockTodo = Array.from({length:50},(el,idx)=> idx+1)
    const now = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    return(
        <main className="content">
        <div className={styles.header}>
            <h2>Inbox</h2>
            <p>{now.toLocaleDateString('en-US', options)}</p>
        </div>
        <div>ADD Todo</div>
        <ul>
          {mockTodo.map((el)=><li key={el}>{`item-${el}`}</li>)}
        </ul>
      </main>
    )

    
}