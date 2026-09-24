import { ProfilePhoto } from './components/ProfilePhoto'
import {MainSection} from "./components/MainSection.jsx";
import "./App.css"

export function App() {
    return (
        <>
            <div id="main-container">
                <ProfilePhoto/>
                <MainSection/>
            </div>
        </>
    )
}