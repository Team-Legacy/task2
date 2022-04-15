// jshint esversion: 9
import React, { useContext, useState } from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [ currentAccount, setCurrentAccount] = useState()
    const [ currentNetwork, setCurrentNetwork ] = useState()
    const [ balance, setBalance ] = useState()
    const [ contractAddr, setContractAddr ] = useState()
    const [ addFile, setAddFile ] = useState();
    const [ vote, setVote ] = useState(0)
    const [getAllMyUploadedFiles, setGetAllMyUploadedFiles] = useState();
    const [getAllPublicSharedFiles, setGetAllPublicSharedFiles] = useState();
    const [getAllPrivateSharedFiles,setGetAllPrivateSharedFiles] = useState();
    const [changeVisibility,setChangeVisibility] = useState();
    const [removeSharedPeers,setRemoveSharedPeers] = useState();
    const [addSharedPeers, setAddSharedPeers] = useState();




    const value = {
        currentAccount, setCurrentAccount,
        currentNetwork, setCurrentNetwork,
        balance, setBalance,
        contractAddr, setContractAddr,
        addFile, setAddFile,
        getAllMyUploadedFiles,setGetAllMyUploadedFiles,
        getAllPublicSharedFiles, setGetAllPublicSharedFiles,
        getAllPrivateSharedFiles,setGetAllPrivateSharedFiles,
        changeVisibility,setChangeVisibility,
        removeSharedPeers,setRemoveSharedPeers,
        addSharedPeers, setAddSharedPeers,
        vote, setVote,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}