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
    const [ upload, setUpload ] = useState()


    const value = {
        currentAccount, setCurrentAccount,
        currentNetwork, setCurrentNetwork,
        balance, setBalance,
        contractAddr, setContractAddr,
        addFile, setAddFile,
        vote, setVote,
        upload, setUpload
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}