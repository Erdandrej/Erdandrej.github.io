<template>
    <section class="project-details">
        <div class="container">
            <div class="section-heading">
                <h1>{{ projectDetails.title }}</h1>
                <h6>{{ projectDetails.subtitle }}</h6>
            </div>
            <div class="portfolio-item">
                <div class="portfolio-img has-margin-right">
                    <div>
                        <img @click="openLightboxGallery(0)" :src="require(`../resources/project-images/${projectDetails.mainImage.name}`)" alt="">
                    </div>
                    <div class="project-thumbnail-gallery">
                        <div class="project-thumbnail-gallery-row">
							<div v-for="(col, index1) in projectDetails.images" v-bind:key="index1" class="project-thumbnail-gallery-col">
								<div v-for="image in col" v-bind:key="image.id">
									<img @click="openLightboxGallery(image.index)" class="project-img-thumbnail" :src="require(`../resources/project-images/${image.name}`)"/>
								</div>
							</div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-description">
                    <div :is="projectDetails.descriptionComponent"></div>
                </div>
            </div>
            <LightBox
                ref="lightbox"
                :media="getLightboxMedia()"
                :show-caption="false"
                :show-light-box="false"
            />
        </div>
    </section>
</template>

<script>
import DCGODescript from './ProjectDescriptions/DCGODescript.vue';
import DeepDescript from './ProjectDescriptions/DeepDescript.vue';
import SSDDescript from './ProjectDescriptions/SSDDescript.vue';
import CrowleyDescript from './ProjectDescriptions/CrowleyDescript.vue';
import SpellcraftDescript from './ProjectDescriptions/SpellcraftDescript.vue';

import TerrainDescript from './ProjectDescriptions/TerrainDescript.vue';
import VoxelDescript from './ProjectDescriptions/VoxelDescript.vue';

import LightBox from '../../node_modules/vue-image-lightbox';
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
	props: ['projectDetails'],
    components: { 
        DCGODescript,
        DeepDescript,
        SSDDescript,
        CrowleyDescript,
        SpellcraftDescript,
        
        TerrainDescript,
        VoxelDescript,

        LightBox,
    },
    methods: {
        openLightboxGallery(index) {
            this.$refs.lightbox.showImage(index);
        },
        getLightboxMedia() {
            let imgs = [];
            imgs.push(this.getLightboxMediaObject(this.projectDetails.mainImage.name));
            for (let i = 0; i < this.projectDetails.images.length; i++) {
                for (let j = 0; j < this.projectDetails.images[i].length; j++) {
                    imgs.push(this.getLightboxMediaObject(this.projectDetails.images[i][j].name));
                }
            }
            return imgs;
        },
        getLightboxMediaObject(imgName) {
            return {
                thumb: require('../resources/project-images/' + imgName),
                src: require('../resources/project-images/' + imgName),
                caption: '<h2>Image text.</h2>', // Optional. TODO: Add field for image descriptions.
            }
        },
    }
}
</script>
