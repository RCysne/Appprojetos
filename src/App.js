import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './style.css'
import Home from './Components/home/Home'
import Register from './Components/register/Register'
import Login from './Components/login/Login'
import Client from './Components/client/Client'
import NewClient from './Components/newClient/NewClient'
import ProjectList from './Components/projectList/ProjectList'
import ProjectGallery from './Components/projectGallery/ProjectGallery'

export default function App() {
  return (
    <>
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/client" component={Client} />
        </Switch>
        <Switch>
          <Route path="/new-client" component={NewClient} />
        </Switch>
        <Switch>
          <Route path="/project-list" component={ProjectList} />
        </Switch>
        <Switch>
          <Route path="/project-gallery" component={ProjectGallery} />
        </Switch>
      </main>
    </>
  )
}
