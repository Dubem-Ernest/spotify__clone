export const initialState ={
    user : null,
    playLists :[],
    playing: false,
    item: null,
   token:null,
   discover_weekly:null
};

const reducer = (state,action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playLists:action.playlist
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            };
            default: 
             
    }
}

export default reducer