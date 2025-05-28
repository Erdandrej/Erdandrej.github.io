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
              title: "Mecha Maker",
              subtitle: "Unity AR Game Group Project",
              mainImage: {name: "Mecha1.png", index: 0},
              images: [[
                    {name: "Mecha1.png", index: 1},
                    {name: "Mecha1.png", index: 2},
              ],[
                    {name: "Mecha1.png", index: 3},
                    {name: "Mecha1.png", index: 4},
              ],[
                    {name: "Mecha1.png", index: 5},
                    {name: "Mecha1.png", index: 6},
              ]],
              descriptionComponent: "mecha-descript"
          }
      }
  }
}
</script>
