import React from 'react'
import app from './base'
import { Input, Button } from 'antd'
import Search from './pages/Search'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Search />
            <Button onClick={() => app.auth().signOut()}>Déconnexion</Button>
        </>
    )
}

export default Home;