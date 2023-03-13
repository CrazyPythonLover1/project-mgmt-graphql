import React from 'react';
import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if(loading) return <Spinner/>;
  if(error) return <p>Something Went Wrong</p>;

  return (
    <div>
      {
        !loading && !error && (
          <table className="table table-striped px-5">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map(client => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default Clients