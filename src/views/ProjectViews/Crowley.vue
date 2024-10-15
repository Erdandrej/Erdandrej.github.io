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
              title: "Crowley | Spooky Game Jam",
              subtitle: "Godot 3D Game Group Project",
              mainImage: {name: "Crowley-Demo.gif", index: 0},
              images: [[
                    {name: "Crowley1.png", index: 1},
                    {name: "Crowley2.png", index: 2},
              ],[
                    {name: "Crowley3.png", index: 3},
              ],[
                    {name: "Crowley4.png", index: 4},
              ]],
              descriptionComponent: "crowley-descript"
          }
      }
  }
}
</script>