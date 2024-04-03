export default function (state, action) {
    switch (action.type){
        case 'ADD_FAVORITE':
            var isInclude = false;
            // Burada yeni eklenecek favori zaten var mı kontrolü yapılır.
            [...state.jobs].map(function (item, index){
                (item.id == action.payload.id) ? isInclude = true : isInclude = isInclude; 
            });
            if(!isInclude){
                var newJobs = {};
                newJobs.id = action.payload.id;
                newJobs.name = action.payload.name;
                newJobs.locations = action.payload.locations;
                newJobs.levels = action.payload.levels;
                newJobs.company = action.payload.company;
                newJobs.publication_date = action.payload.publication_date;
                return {...state, jobs: [...state.jobs, newJobs]}
            }
            else{
               return state; 
            }
            break;
            case 'REMOVE_FAVORITE':
                return {
                    jobs : [
                         ...state.jobs.splice(action.payload.id, 1)
                    ]
                };
        case 'LIST_FAVORITE':

            break;
        default:
            return state;
            break;
    }
}