import { createContext, useState, useContext } from "react";

// 1. Definisikan createContext dan displayName pada context 
// untuk diidentifikasikan secara global pada aplikasi
const ToggleContext = createContext()
ToggleContext.displayName = 'ToggleContext'

// 2. Fungsi toggle menerima props Children 
// props Children yang di passing merupakan
// komponen yang akan mengakses nilai pada context
function Toggle({ children }) {
    
    // 2.1. useState akan memanipulasi keadaan komponen
    const [on, setOn] = useState(false)

    // 2.2. fungsi ini akan mengubah nilai state berdasarkan aksi dari user
    const toggle = () => setOn(!on)

    // 2.3. fungsi ini mengembalikan fungsi JSX sebagai root data yang menampung nilai value on dan toggle
    // children adalah apapun komponen yang diapit didalam ToggleContext
    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            { children }
        </ToggleContext.Provider>
    )
}

// 4. useToggle hooks dirancang sebagai wrapper agar nama Context tidak terlalu terkespos
// oleh global komponen
function useToggle() {
    const context = useContext(ToggleContext)

    if (context === undefined) {
        throw new Error('useToggle must be used within a context')
    }

    return context
}

// 5. barrel export untuk file context dan hooks useToggle
export { Toggle, useToggle }