<template>
    <div>
        <p>
            A computer graphics software demo written in C++ that generates natural-looking terrain using modular Perlin noise-based algorithms. 
            I collaborated on this project with a colleague mine, and it was our submission for the course project of Advanced Computer Graphics in my MSc.
            <br><br>
            The software uses a modular Perlin noise generation method that can create matrices of noise values that then can be used in all aspects of the generated terrain.
            These matrices are utilized to displace the mesh vertices of the terrain itself as well as creating textures that are then used to animate water and clouds.
            Additionally, we added the possibility of creating animated celestial bodies using similar noise methods to the water techniques because it worked well and just seemed fun.
            <br><br>
            In addition to these noise-based techniques, the environment is brought to life by using height-based biome terrain shading and the possibility to spawn grass meshes in selected biomes.
            There is also an option for depth-based fog shading.
            <br><br>
            My main responsibilities for this project were <strong>implementing the modular Perling noise algorithm</strong>, using the algorithm to <strong>generate custom noise textures</strong>, 
            <strong>generating the procedural terrain mesh</strong>, <strong>implementing shaders</strong> and the <strong>biome system</strong>.
        </p>
        <p class="tool-used">Tools Used:
            <br> • <strong>C++</strong>
            <br> • <a href="https://www.opengl.org/" target="_blank"><strong>OPENGL</strong></a>
            <br> • <a href="https://www.libsdl.org/" target="_blank"><strong>SDL2.0</strong></a>
            <br> • <a href="https://en.wikipedia.org/wiki/Perlin_noise" target="_blank"><strong>PERLIN NOISE</strong></a>
            <br> • <a href="https://learnopengl.com/Getting-started/Shaders" target="_blank"><strong>VERTEX AND FRAGMENT SHADERS</strong></a>
            <br> • <a href="https://git-scm.com/" target="_blank"><strong>GIT</strong></a> (For version control)
        </p>
        <br><br>
        <a href="https://github.com/Erdandrej/Portfolio_Sample_Scripts/tree/main/TerrainDemo" target="_blank" class="project-link">
            <i class="fab fa-github"></i>
        </a>
    </div>
</template>