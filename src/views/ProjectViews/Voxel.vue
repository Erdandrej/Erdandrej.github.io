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
              title: "Voxel Game Engine",
              subtitle: "C# Game Engine Architecture Group Project",
              mainImage: {name: "Voxel3.png", index: 0},
              images:  [[
                    {name: "Voxel2.png", index: 1},
              ],[
                    {name: "Voxel1.png", index: 2},
              ],[
                    {name: "Voxel4.png", index: 3},
              ]],
              descriptionComponent: "voxel-descript"
          }
      }
  }
}
</script>