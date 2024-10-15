<template>
    <footer class="copyright">
      <div v-if="showArrow" @click="scrollToTop" class="up" id="up">
          <i class="fas fa-chevron-up"></i>
      </div>
      <a href="https://www.linkedin.com/in/andrej-erdelsky/" target="_blank" class="project-link">
          <i class="fab fa-linkedin footer-icon"></i>
      </a>
      <a href="https://github.com/Erdandrej" target="_blank" class="project-link">
          <i class="fab fa-github footer-icon"></i>
      </a>
      <a href="https://erdandrej.itch.io/" target="_blank" class="project-link">
          <i class="fab fa-itch-io"></i>
      </a>
      <a href="mailto:erd.andrej@gmail.com" target="_blank" class="project-link">
          <i class="fa fa-envelope footer-icon"></i>
      </a>
      <p>&copy; 2019 - {{ new Date().getFullYear() }} Andrej E.</p>
      <br>
      <div style="color: #638dccdd; opacity: 0.67; font-weight: bold;">Made with Vue and Github Pages</div>
    </footer>
</template>

<script>
export default {
    props: ['showArrow'],
    methods: {
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  }
}
</script>
