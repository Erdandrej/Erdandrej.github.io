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
              title: "FortCraft: Island Escape",
              subtitle: "Unreal Engine for Fortnite Master Thesis Project",
              mainImage: {name: "Island1.png", index: 0},
              images: [[
                    {name: "Island4.png", index: 1},
                    {name: "Island8.png", index: 2},
              ],[
                    {name: "Island5.png", index: 3},
                    {name: "Island6.png", index: 4},
              ],[
                    {name: "Island3.png", index: 5},
                    {name: "Island7.png", index: 6},
              ]],
              descriptionComponent: "island-descript"
          }
      }
  }
}
</script>
