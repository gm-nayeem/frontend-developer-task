import './app.css';
import Cards from './components/cards/Cards';
import { taskData } from './utils/data';

const App = () => {
  return (
    <div className='app'>
      <div className="app-wrapper">
        <div className="border-wrapper">
          <div className="cards-wrapper">
            {
              taskData?.length ? (
                taskData.map(item => (
                  <Cards
                    item={item}
                    key={item.id}
                  />
                ))
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;