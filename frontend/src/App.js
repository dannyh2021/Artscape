import './App.css';
import Pages from './pages';

import { gql } from '@apollo/client';
import { getUsers } from './services/apiService';

const GET_USERS = gql`
  query {
    users {
      id
      username
      email
    }
  }
`;

function App() {
  // fetch('http://localhost:4000/api', {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     query: `query {
  //       users {
  //         email
  //       }
  //     }`
  //   })
  // })
  // .then(res => res.json())
  console.log('users: ', getUsers().then(res => console.log('res...', res)));


  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;