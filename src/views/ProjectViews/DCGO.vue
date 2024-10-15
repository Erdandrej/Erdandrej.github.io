<template>
    <div>
        <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
    </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue';

export default {
  components: { ProjectDetails },
  data: () => {
      return {
          projectDetails: {
              title: "DCGO Trading Card Game Simulator",
              subtitle: "Unity Multiplayer Trading Card Game Simulator",
              mainImage: {name: "DCGO-Demo-Attacking.gif", index: 0},
              images: [[
                    {name: "DCGO-Demo-StartMatch.gif", index: 1},
                    {name: "DCGO-DeckBuilding.png", index: 2},
              ],[
                    {name: "DCGO-Demo-DNA.gif", index: 3},
                    {name: "DCGO1.png", index: 4},
              ],[
                    {name: "DCGO-Demo-StartScreen.gif", index: 5},
                    {name: "DCGO3.png", index: 6},
              ]],
              descriptionComponent: "d-c-g-o-descript"
          }
      }
  }
}
</script>
