import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './Layout/App'
import DataJson from './Utils/DataShcema.json'
import AssetsMap from './Utils/AssetsMap'
import { replacePropertyValue } from './Utils/Functions'

replacePropertyValue(DataJson,AssetsMap,"image");

createRoot(document.getElementById('root')).render(
    <App data={DataJson}/>
)
