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
              title: "Noise-based Terrain Generation",
              subtitle: "C++ Computer Graphics Demo",
              mainImage: {name: "Terrain4.png", index: 0},
              images: [[
                    {name: "Terrain2.png", index: 1},
              ],[
                    {name: "Terrain3.png", index: 2},
              ],[
                    {name: "Terrain1.png", index: 3},
              ]],
              descriptionComponent: "terrain-descript"
          }
      }
  }
}
</script>