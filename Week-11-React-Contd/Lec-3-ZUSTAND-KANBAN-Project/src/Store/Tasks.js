import {create} from 'zustand';

const useTaskStore = create((set)=>({
    tasks: [{ title:"Go to Gym" , state:"ONGOING"},{ title:"Complete assignment" , state:"DONE"}]
}))

export default useTaskStore;