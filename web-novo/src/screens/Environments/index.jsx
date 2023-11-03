import { SideBar } from '../../components/sideBar'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Environments() {
    return (
        <>
            <div className="mainContainer home">
                <SideBar />
                <div className="prdt">
                    <h1 class="lista">Listagem de Ambientes:</h1>
                    <div class="search search-bar">
                        <input type="text" placeholder="Pesquisar por Ambientes" />
                        <button type="submit">
                            <SearchRoundedIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}