import React, { useEffect } from 'react'
import { Route, useLocation, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Destination from './Destination';
import Main from './Main'
import Crew from './Crew';
import Technology from './Technology';
import { HOME } from '../utils/tailwindClasses';
import NotFound from './NotFound';




export default function Home() {
  //use location hook to change bg img + active state for navlinks
  const location = useLocation()
  const path = location.pathname

  
  useEffect(()=>{
    const navLinks = document.getElementsByClassName('links')
    const container = document.getElementById('container')
    //remove active classe from all links first
    for (const navLink of navLinks) {
      navLink.classList.remove('after:!opacity-[100%]', 'after:!visible')
    }
    //then add the active class to the active navlink only
    //also change background image on path change
    switch (path) {
      case "/space-tourism":
      case "/space-tourism/":
        navLinks[0].classList.add('after:!opacity-[100%]', 'after:!visible')  
        container.classList.value = HOME.container.join(' ') + ' bg-home-mobile tablet:bg-home-tablet laptop:bg-home-desktop'
        break;
      case "/space-tourism/destination":
      case "/space-tourism/destination/":
        navLinks[1].classList.add('after:!opacity-[100%]', 'after:!visible')  
        container.classList.value = HOME.container.join(' ') + ' bg-destination-mobile tablet:bg-destination-tablet laptop:bg-destination-desktop'
        break;
      case "/space-tourism/crew":
      case "/space-tourism/crew/":
        navLinks[2].classList.add('after:!opacity-[100%]', 'after:!visible')  
        container.classList.value = HOME.container.join(' ') + ' bg-crew-mobile tablet:bg-crew-tablet laptop:bg-crew-desktop'
        break;
      case "/space-tourism/technology":
      case "/space-tourism/technology/":
        navLinks[3].classList.add('after:!opacity-[100%]', 'after:!visible')  
        container.classList.value = HOME.container.join(' ') + ' bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop'
        break;
      default:
        container.classList.value = HOME.container.join(' ') + ' bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop'
        break;
    }
  },[path])

  return (
    <div id='container'>

      
        <Switch>
          <Route exact path='/space-tourism'>
            <Navbar />
            <Main />
          </Route>

          <Route exact path='/space-tourism/destination'>
            <Navbar />
            <Destination />
          </Route>

          <Route exact path='/space-tourism/crew'>
            <Navbar />
            <Crew />
          </Route>

          <Route exact path='/space-tourism/technology'>
            <Navbar />
            <Technology />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
       
    </div>
  );
}

