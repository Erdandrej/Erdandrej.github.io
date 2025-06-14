<template>
    <div>
        <div id="portfolio-se">
                <div class="portfolio-item">
                    <div class="portfolio-img has-margin-right">
                        <router-link to="/terrain"><img src="../resources/project-images/Terrain1.png" alt=""></router-link>
                    </div>
                    <div class="portfolio-description">
                        <h6>Computer Graphics Project</h6>
                        <h1>Noise-based Terrain Generation | (03/24-06/24)</h1>
                        <p>
                            Computer graphics software that can create natural-looking terrain using modular Perlin noise-based algorithms, 
                            as well as other procedural methods to make the terrain look more realistic.
                        </p>
                        <p class="cta">Highlights: <strong>C++</strong>, <strong>OpenGL</strong>, <strong>SDL 2.0</strong>, <strong>Perlin Noise</strong>, <strong>Shaders</strong>, <strong>Procedural 3D Meshes</strong>, <strong>Texture-based Water and Cloud effects</strong>, <strong>Height-based biomes</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/terrain"><strong>View Details</strong></router-link></p>
                        <br><br>
                        <a href="https://github.com/Erdandrej/Portfolio_Sample_Scripts/tree/main/TerrainDemo" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>

                <div class="separator-line"></div>
    
                <div class="portfolio-item">
                    <div class="portfolio-description has-margin-right">
                        <h6>Game Engine Architecture - Group Project</h6>
                        <h1>Voxel Game Engine | (01/24-03/24)</h1>
                        <p>
                            As a project for the Game Engine Architecture course during my Master's degree, our team decided to create a voxel engine from the ground up with OpenGL in C#.
                        </p>
                        <p class="cta">Highlights: <strong>C#</strong>, <strong>OpenGL</strong>, <strong>3D Rendering</strong>, <strong>FMOD</strong>, <strong>Voxels</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/voxel"><strong>View Details</strong></router-link></p>
                        <br><br>
                        <a href="https://github.com/Erdandrej/Portfolio_Sample_Scripts/tree/main/VoxelEngine" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <div class="portfolio-img">
                        <router-link to="/voxel"><img src="../resources/project-images/Voxel1.png" alt=""></router-link>
                    </div>
                </div>

                <div class="separator-line"></div>

            </div>
    </div>
</template>