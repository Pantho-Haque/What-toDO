import create from "zustand"

const useStore=create(
    set=>({
        userdata:null,
        adduserdata: e=>set(
            state=>({
                userdata:e,
            })
        )
    })
);
export default useStore;