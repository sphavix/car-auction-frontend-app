import { create } from "zustand"

type State = {
    pageNumber: number
    pageSize: number
    pageCount: number
    searchTerm: string
}


type Actions = {
    setParams: (params: Partial<State>) => void
    reset: () => void
}

const initializeState: State = {
    pageNumber: 1,
    pageSize: 12,
    pageCount: 1,
    searchTerm: ''
}

export const useParamsStore = create<State & Actions>()((set) => ({
    ...initializeState,
    setParams: (newParams: Partial<State>) => {
        set((state) => {
            if(newParams.pageNumber){
                return {...state, pageNumber: newParams.pageNumber}
            }
            else{
                return {...state, ...newParams, pageNumber: 1}
            }
        })
    },
    reset: () => set(initializeState)
}))