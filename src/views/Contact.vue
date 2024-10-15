<template>
    <div>
        <section class="contact" id="contact">
            <div class="container">
                <div class="section-heading">
                    <h1>Contact</h1>
                </div>
                <br><br>
                <div class="section-contacts">
                    <p id="contact-mail">
                    <a href="mailto:erd.andrej@gmail.com">
                        erd.andrej@gmail.com
                    </a>
                </p>
                <br>
                <p id="contact-p-number">+46 709 228 250</p>
                </div>
            </div>
        </section>
        <Footer :showArrow="false"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
