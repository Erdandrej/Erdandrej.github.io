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
              title: "Solid State Drive",
              subtitle: "Godot 2.5D Game Group Project",
              mainImage: {name: "SSD-Demo.gif", index: 0},
              images: [[
                    {name: "SSD1.png", index: 1},
                    {name: "SSD2.png", index: 2},
              ],
              [
                    {name: "SSD3.png", index: 3},
                    {name: "SSD5.png", index: 4},
              ],
              [
                    {name: "SSD4.png", index: 5},
              ]],
              descriptionComponent: "s-s-d-descript"
          }
      }
  }
}
</script>