import './App.css';
import { gql, useQuery } from '@apollo/client';

const getTekkyuu = gql`
query ($id: Int) {
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}

`;

const App = () => {
  const { loading, error, data } = useQuery(getTekkyuu, { variables: { id: 15125 } });

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App-header">
      {data.Media.title.romaji}
    </div>
  );
};

export default App;
