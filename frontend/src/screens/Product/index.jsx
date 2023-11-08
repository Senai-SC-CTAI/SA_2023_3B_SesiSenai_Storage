import './styles.css'
import { SideBar } from '../../components/sideBar'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Product() {
    return (
        <>
            <div className="mainContainer home">
                <SideBar />
                <div className="prdt">
                    <h1 class="lista">Listagem de Produtos:</h1>
                    <div class="search search-bar">
                            <input type="text" placeholder="Pesquisar por Produtos" />
                            <button type="submit">
                                <SearchRoundedIcon />
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}