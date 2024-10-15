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
              title: "Spellwright's Armageddon",
              subtitle: "Board Game Group Project",
              mainImage: {name: "Spellcraft1.jpg", index: 0},
              images: [[
                    {name: "Spellcraft2.jpg", index: 1},
                    {name: "Spellcraft4.png", index: 2},
              ],[
                    {name: "Spellcraft3.png", index: 3},
                    {name: "Spellcraft5.png", index: 4},
              ],[
                    {name: "Spellcraft6.png", index: 5},
                    {name: "Spellcraft7.png", index: 6},
                    {name: "Spellcraft8.png", index: 7},
              ]],
              descriptionComponent: "spellcraft-descript"
          }
      }
  }
}
</script>