import React, { useEffect, useState, FormEvent } from "react";

import { useHistory, useParams } from "react-router-dom";

import { FiArrowLeft, FiPlus } from "react-icons/fi";
import '../styles/updateAldeias.css'
import api from "../services/api";
interface Aldeia {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  continente: string
  username: string
  idUser: string,
  user: {
    email: string
  }

}


interface AldeiasParams {
  id: string;
}
export default function AldeiasUpdate(request: Request) {
  const history = useHistory()
  const [aldeia, setAldeia] = useState<Aldeia>()
  const [name, setName] = useState('')
  const [continente, setContinente] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [user, setUser] = useState('')
  const params = useParams<AldeiasParams>();
  // console.log(params.id)
  const { goBack } = useHistory();
  useEffect(() => {
    api.get(`aldeias/${params.id}`).then(response => {
      setName(response.data.name)
      setContinente(response.data.continente)
      setLatitude(response.data.latitude)
      setLongitude(response.data.longitude)
      setUser(response.data.idUser)
      console.log(response.data)


    })
  }, [params.id])

  if (!name && !continente && !latitude && !longitude && !user) {
    return <p>Carregando...</p>
  }

  async function handleSubmit(event: FormEvent) {
    console.log(user)
    event.preventDefault()

    const data = new FormData()
    const user1= '1'
    data.append('name', name)
    data.append('continente', continente)
    data.append('latitude', latitude)
    data.append('longitude', longitude)
    data.append('user', user1)

    if(user1){
      
      await api.put(`/aldeias/update/${params.id}`, data)
    }
    else{
      await api.post(`/aldeias`, data)
    }
    

    alert('Deu bom, meu bom')
    history.push('/')
  }
  return (
    <div id="page-create-village">
      <aside>
        {/* <img src={mapMarkerImg} alt="Happy" /> */}

        <footer>
          <button  type="button" className="teste" onClick={goBack}>
            <FiArrowLeft size={24} color="#1c1c" />
          </button>
        </footer>
      </aside>

      <main>
        <form onSubmit={handleSubmit} className="create-village-form">
          <fieldset>
            <legend>Dados</legend>



            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={event => setName(event.target.value)} />

            </div>

            <div className="input-block">
              <label htmlFor="name">Continente</label>
              <input id="name" value={continente} onChange={event => setContinente(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="name">Latitude</label>
              <input id="name" value={latitude} onChange={event => setLatitude(event.target.value)} />

            </div>

            <div className="input-block">
              <label htmlFor="name">Longitude</label>
              <input id="name" value={longitude} onChange={event => setLongitude(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Joga fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>



          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
