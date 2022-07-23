import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><a href="#"><ion-icon name="home-outline"></ion-icon></a> </li>
            <li><a href="#"><ion-icon name="person-outline"></ion-icon></a> </li>
            <li class="active"><a href="#"><ion-icon name="add-circle-outline"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="setting-outline"></ion-icon></a> </li>
            <li><a href="#"><ion-icon name="chatbubble-outline"></ion-icon></a> </li>
            <div id="marker"></div>
        </ul>
    </div>
  )
}

export default Navbar