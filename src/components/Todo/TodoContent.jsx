export function TodoContent (){
  
    const mockTodo = Array.from({length:50},(el,idx)=> idx+1)
    return(

        <main className="content">
        <div>Head</div>
        <div>Todo</div>
        <ul>
          {mockTodo.map((el)=><li key={el}>{`item-${el}`}</li>)}
        </ul>
      </main>
    )

    
}