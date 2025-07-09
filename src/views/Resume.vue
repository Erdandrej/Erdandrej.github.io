<template>
    <div>
        <section class="services" id="resume">
            <div class="container">
                <div class="section-heading">
                    <h1>Resume</h1>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <p class="global-link resume-file"><a href="./BachelorDiploma.pdf" target="_blank"><i class="far fa-file-pdf"/> BachelorDiploma.pdf</a></p>
                        <p class="global-link resume-file"><a href="./BachelorGPAStatement.pdf" target="_blank"><i class="far fa-file-pdf"/> BachelorGPAStatement.pdf</a></p>
                        <p class="global-link resume-file"><a href="./BachelorCoursesPassed.pdf" target="_blank"><i class="far fa-file-pdf"/> BachelorCourses.pdf</a></p>
                    </div>
                    <div class="skill">
                        <p class="global-link resume-file"><a href="./MasterCourseTranscript.pdf" target="_blank"><i class="far fa-file-pdf"/> MasterCourseTranscript.pdf</a></p>
                    </div>
                    <div class="skill">
                        <p class="global-link resume-file"><a href="./CV_Andrej_Erdelsky.pdf" target="_blank"><i class="far fa-file-pdf"/> CV_AndrejErdelsky.pdf</a></p>
                    </div>
                    <div class="skill">
                        <p class="global-link resume-file"><a href="./RecommendationLetterForAndrejErdelskyNatasha.pdf" target="_blank"><i class="far fa-file-pdf"/> RecommendNatasha.pdf</a></p>
                    </div>
                </div>
                <div class="separator-line"></div>
                <div class="my-skills">
                    <div class="skill">
                        <h1>Recommendations</h1>
                    </div>
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <p><i>Andrej completed his thesis with us at FunRock & Prey Studios, and I had the pleasure of working closely with him for several months during this project. Collaborating with Andrej was both easy and productive. He communicates clearly, grasps new concepts quickly, and approaches his work with a high level of professionalism.
                            <br><br>
                            He demonstrated a strong understanding of game design, not just in theory but in its practical, collaborative application. Andrej was diligent, self-motivated, and consistently met challenges with determination and a positive attitude. He remained solution-oriented throughout, always focused on finding the best way forward.
                            <br><br>
                            Andrej was humble, open to feedback, and fully committed to the goals of the project. He brought both competence and character to the work, and I would gladly recommend him for future opportunities in the game industry or wherever his skills and personality could be useful.
                        </i>
                        <br><br>- <strong>Joakim Höglund, Head of Studio at FunRock and Prey Studios</strong></p>
                        <br><br>
                        <br><br>
                        <p><i>I have had the pleasure of working with Andrej for the last year on a live service multiplayer card game simulator. Andrej impressed quickly with his ability to quickly grasp new concepts and complex code scenarios within the project.
                            <br><br>
                            Andrej impressed me with his knowledge and how quickly he got up to speed to start developing new features within the project. I have no doubt he will bring that same energy and expertise in the future to anyone he has the pleasure of working with.
                        </i>
                        <br><br>- <strong>Michael Bunch, Technical Lead at Kaleidoscope Innovation & DCGO</strong></p>
                    </div>
                    <div class="skill">
                        <p><i>My interaction with Andrej began through his interest in researching, "In what ways does the ever-increasing power creep in the Digimon TCG franchise affect the psychology of its players?". This research project presented a thorough analysis of the Digimon Card Game and how mechanics interact with or influence human psychology. It showed the advanced analysis skills needed to examine gameplay and demonstrated an understanding of gameplay elements and how they work. The paper was well received at the Second Conference for the Introduction to Game Research course and earned him the top marks in the course.
                            <br><br>
                            Andrej then continued his passion within the field of card games by building a complete prototype of an online digital trading card game, simulating all the mechanisms needed for the complex system of the Digimon card game. Andrej worked his way skillfully into building complex features to model the  online multiplayer system and the gameplay systems required. He progressed iteratively to build the game, improving the features along the way to deliver a complete game experience with automated gameplay systems and the physical maintenance present in the card game. From the beginning, Andrej was focused on what he wanted to work with during the project and was well organized in planning his work. Andrej maintained clear communication of his progress on the project with me as his supervisor and with his teammate.
                            <br><br>
                            Andrej has continuously presented amazing work in utilizing gameplay mechanisms to build both board games and video games. He will be an asset to any team he joins with his technical and design skills.
                            <br><br>
                            To conclude, Andrej has great technical and interpersonal skills, conducting himself in a very professional manner through his work and engagement with other members of his teams. He creates a positive impression on the people around him, and I am proud to have had the chance to supervise his work. I present this letter towards my recommendation without reservation.
                        </i>
                        <br><br>- <strong>Natasha Bianca Mangan, Technical Lecturer at the Department of Computer Science and Engineering, Chalmers University of Technology</strong></p>
                    </div>
                </div>
                <!-- <div class="skill">
                        <p><i>My interaction with Andrej began through his interest in researching, "In what ways does the ever-increasing power creep in the Digimon TCG franchise affect the psychology of its players?". This research project presented a thorough analysis of the Digimon Card Game and how mechanics interact with or influence human psychology. It showed the advanced analysis skills needed to examine gameplay and demonstrated an understanding of gameplay elements and how they work. The paper was well received at the Second Conference for the Introduction to Game Research course and earned him the top marks in the course.
                            <br><br>
                            Andrej then continued his passion within the field of card games by building a complete prototype of an online digital trading card game, simulating all the mechanisms needed for the complex system of the Digimon card game. Andrej worked his way skillfully into building complex features to model the  online multiplayer system and the gameplay systems required. He progressed iteratively to build the game, improving the features along the way to deliver a complete game experience with automated gameplay systems and the physical maintenance present in the card game. From the beginning, Andrej was focused on what he wanted to work with during the project and was well organized in planning his work. Andrej maintained clear communication of his progress on the project with me as his supervisor and with his teammate.
                            <br><br>
                            Andrej has continuously presented amazing work in utilizing gameplay mechanisms to build both board games and video games. He will be an asset to any team he joins with his technical and design skills.
                            <br><br>
                            To conclude, Andrej has great technical and interpersonal skills, conducting himself in a very professional manner through his work and engagement with other members of his teams. He creates a positive impression on the people around him, and I am proud to have had the chance to supervise his work. I present this letter towards my recommendation without reservation.
                        </i>
                        <br><br>- <strong>Natasha Bianca Mangan, Technical Lecturer at the Department of Computer Science and Engineering, Chalmers University of Technology</strong></p>
                </div> -->
            </div>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>
</template>

<style scoped>
.resume-file a {
    font-size: 1.5rem;
}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
