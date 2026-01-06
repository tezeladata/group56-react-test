import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MyContext } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
    // ვადგენთ provider კომპონენტს
    // მას ვუწერთ value ატრიბუტს, რომ გავაზიაროთ ინფორმაცია
    // provider კომპონენტის შვილობილი კომპონენტი გახდეს App, რომ შემდეგ ყველა კომპონენტს გაუზიარდეს ინფორმაციას
    <MyContext.Provider value="My second context">
        <App />
    </MyContext.Provider>
)