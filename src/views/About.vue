<template>
	<div>
		<section class="about" id="about">
			<div class="section-heading">
						<h1>About Me</h1>
			</div>
			<div class="container">
				<div class="profile-img">
					<img src="../resources/profile-pic.png">
				</div>
				<div class="about-details">
					<p>
						As a passionate <strong>game developer</strong>, <strong>software engineer</strong>, and <strong>computer scientist</strong> specializing in <strong>gameplay programming</strong> and <strong>game design</strong>, 
						I strive to combine technical expertise with innovative design to bring immersive digital experiences to life.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
						My practical experiences acquired in <strong>academia</strong>, <strong>personal projects</strong>, and working on <strong>published games</strong> 
						have helped me nurture a diverse yet robust skill set, ready for any development environment.
                    </p>
                    <br>
					<div class="separator-line"></div>
                    <br>
					<p>
                        I can't remember a time where I haven't played games or been fascinated by them. I always knew that my calling would be to create, and now
						equipped with knowledge in <strong>Unity</strong>, <strong>Godot</strong>, <strong>Unreal</strong>, and <strong>custom engines</strong>, I am living the dream.
                    </p>
					<br>
					<div class="separator-line"></div>
                    <br>
					<p>
                        Born in <strong>Slovakia</strong>, I have spent most of my life studying abroad across Europe. I have lived in <strong>France</strong>, the <strong>Netherlands</strong>, 
						and now <strong>Sweden</strong> for considerable amounts of time, which allowed me to strengthen my ability to communicate with diverse people and feel at home anywhere in the world.
                    </p>
                </div>
			</div>
		</section>
		<div class="separator-line"></div>
            <div class="container">
                <div class="my-skills">
                    <div class="skill">
                        <h1></h1>
                    </div>
                </div>
                <div class="my-skills">

                    <div class="skill fav-games">
                        <h1>Favourite Games</h1>
						<ul>
							<li><p> • Monster Hunter</p></li>
							<li><p> • It Takes Two</p></li>
							<li><p> • Inscryption</p></li>
							<li><p> • The Legend of Zelda</p></li>
							<li><p> • Spyro</p></li>
							<li><p> • Sly Cooper</p></li>
							<li><p> • God of War</p></li>
							<li><p> • Metroid</p></li>
							<li><p> • Diablo</p></li>
							<li><p> • Super Mario Odyssey</p></li>
							<li><p> • Hi-Fi Rush</p></li>
							<li><p> • Ratchet and Clank</p></li>
							<li><p> • Elden Ring</p></li>
							<li><p> • Sekiro: Shadows Die Twice</p></li>
							<li><p> • Minecraft</p></li>
							<li><p> • Spectrobes: Origins</p></li>
							<li><p> • Hollow Knight</p></li>
							<li><p> • Hades</p></li>
							<li><p> • World of Warcraft</p></li>
							<li><p> • Black Myth: Wukong</p></li>
							<li><p> • Animal Well</p></li>
							<li><p> • Baldur's Gate 3</p></li>
						</ul>
                    </div>

                    <div class="skill fav-games">
                        <h1>Hobbies</h1>
                        <ul>
							<li><p> • 3D Printing and creating my own CAD models</p></li>
							<li><p> • Listening to and talking about music</p></li>
							<li><p> • Playing the guitar, drums, and piano</p></li>
							<li><p> • Playing board games at a weekly game night</p></li>
							<li><p> • Playing trading card games at my local game store</p></li>
							<li><p> • Watching and discussing movies and series</p></li>
							<li><p> • Reading science fiction and fantasy books</p></li>
							<li><p> • Jiu Jitsu</p></li>
							<li><p> • Padel</p></li>
						</ul>
                    </div>

                </div>
            </div>
			<br><br><br><br><br>
		<Footer :showArrow="true"></Footer>
	</div>
</template>

<style scoped>
	.fav-games {
		text-align:left;
	}
	.fav-games li {
		list-style-type: none;
	}
	.fav-games h2 {
		color: #638dccdd;
	}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
