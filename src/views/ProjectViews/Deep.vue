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
              mainImage: {name: "Deep1.png", index: 0},
              images: [],
              descriptionComponent: "deep-descript"
          }
      }
  }
}
</script>
