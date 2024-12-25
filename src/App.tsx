import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    await fetch("http://localhost:3000/").then((res) => res.json()).then((dat) => { setData(dat) })
  }
  useEffect(() => {
    fetchData()
  }, [])
  async function handleSubmit(e: any) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const dados = Object.fromEntries(formData)
    await fetch("http://localhost:3000/add", {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json"
      }
    })
    fetchData()
  }


  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit} >
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="Email" />
          <input type="submit" value="Adicionar" />
        </form>
      </div>
      {
        data.map((user: any) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
