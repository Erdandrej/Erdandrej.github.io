<template>
  <div id="app">
    <nav class="top-nav">
        <ul class="nav-list">
            <li>
                <router-link class="nav-link" to="/games">Games</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/software">Software</router-link>
            </li>
            <li id="nav-research">
                <router-link class="nav-link" to="/research">Research</router-link>
            </li>
            <li id="nav-services">
                <router-link class="nav-link" to="/resume">Resume</router-link>
            </li>
            <li id="nav-about">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
    <header>
        <div class="landing-text" id="landing-text">
            <h1>Andrej Erdelský</h1>
            <h6>Game Developer, Software Engineer & Computer Scientist</h6>
        </div>
    </header>
    <div class="separator-line"></div>
    <router-view/>
  </div>
</template>
