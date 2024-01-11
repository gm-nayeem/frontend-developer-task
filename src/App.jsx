import './app.css';
import Cards from './components/cards/Cards';
import { useCardInfo } from './hooks/useCardInfo';
import Loading from './components/loading/Loading';

const App = () => {
  const { loading, data } = useCardInfo();

  if (loading) {
    return <Loading />
  }

  return (
    <div className='app'>
      <div className="app-wrapper">
        <div className="border-wrapper">
          <div className="cards-wrapper">
            {
              data?.length > 0 ? (
                data.map(item => (
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