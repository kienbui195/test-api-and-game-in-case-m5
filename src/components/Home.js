
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    return (
        <div>
            <button onClick={()=>navigate('/home/game1')}>Game1</button>
            <button onClick={() => navigate('/home/game2')}>Game2</button>
            
            <Outlet/>
        </div>
    )
}

export default Home