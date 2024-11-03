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
              title: "Creatures of the Deep",
              subtitle: "Unity 3D Game Group Project",
              mainImage: {name: "Deep2.png", index: 0},
              images: [[
                    {name: "Deep3.png", index: 1},
                    {name: "Deep4.png", index: 2},
              ],[
                    {name: "Deep5.png", index: 3},
                    {name: "Deep6.png", index: 4},
              ],[
                    {name: "Deep7.png", index: 5},
                    {name: "Deep8.png", index: 6},
              ]],
              descriptionComponent: "deep-descript"
          }
      }
  }
}
</script>
