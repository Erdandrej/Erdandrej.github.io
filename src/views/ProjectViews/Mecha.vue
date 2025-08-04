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
              subtitle: "C# Unity AR Game Group Project",
              mainImage: {name: "MechaDemo1.gif", index: 0},
              images: [[
                    {name: "MechaDemo2.gif", index: 1},
                    {name: "Mecha5.png", index: 2},
                    {name: "Mecha9.png", index: 3}
              ],[
                    {name: "Mecha6.png", index: 4},
                    {name: "Mecha8.png", index: 5},
                    {name: "Mecha7.png", index: 6}
              ],[
                    {name: "Mecha2.png", index: 7},
                    {name: "Mecha3.png", index: 8},
                    {name: "Mecha4.png", index: 9},
              ]],
              descriptionComponent: "mecha-descript"
          }
      }
  }
}
</script>
