<template>
    <div>
        <section class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-heading">
                    <h1>Game Portfolio</h1>
                    <br><br>
                </div>
                <PortfolioGames></PortfolioGames>
            </div>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>
</template>

<script>
import PortfolioGames from '@/components/PortfolioGames.vue';
import Footer from '@/components/Footer.vue'
export default {
    components: { PortfolioGames, Footer }
}
</script>
