import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ user }) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState('')

  const [role, setRole] = useState('')

  const handleName = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Enviando o formulário')
    console.log(name, email, bio, role)

    {
      /* 7 - limpar form */
    }
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <h3>1 - Criação de form</h3>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - label envolvendo input */}
        <h3>2 - label envolvendo input</h3>
        <label>
          <span>E-mail:</span>
          {/* 4 - simplficação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          {/* 8 - textarea */}
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={e => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={e => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
