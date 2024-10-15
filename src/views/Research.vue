<template>
    <div>
        <section class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-heading">
                    <h1>Research Portfolio</h1>
                    <br><br>
                </div>
                <PortfolioResearch></PortfolioResearch>
            </div>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>
import PortfolioResearch from '@/components/PortfolioResearch.vue';
import Footer from '@/components/Footer.vue'
export default {
  components: { PortfolioResearch, Footer }
}
</script>
