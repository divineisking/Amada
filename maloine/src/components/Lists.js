

export default function Lists(props){

    const deleteSingle = props.deleteSingle
    const editItem = props.editItem

console.log(props)

    return (
    <div> 
        <p>
          {props.item.title}  
            <span  style={{color:'red'}} onClick={()=>deleteSingle(props.item.id)}>delete</span> <span onClick={()=>editItem(props.item.id)} style={{color:'green'}}>edit</span>
            </p>
    </div>
    );
}