export default (state,action) =>{
    switch(action.type){
        case 'ADD TRANSACTION':
            return {
                ...state,transaction:[action.payload,...state.transaction]
            }
            
        case 'DELETE TRANSACTION':
            return{
                ...state,
                transaction:state.transaction.filter(t => t.id!==action.payload)
            }
        default:
            return state;
    }

}