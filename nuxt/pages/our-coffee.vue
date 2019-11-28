<template>
  <div>
      <div class="pb-3">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="coffee1.jpg" class="d-block w-100" alt="coffee1.jpg" />
            </div>
            <div class="carousel-item">
              <img src="coffee2.jpg" class="d-block w-100" alt="coffee2.jpg" />
            </div>
            <div class="carousel-item">
              <img src="coffee3.jpg" class="d-block w-100" alt="coffee3.jpg" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    <div class="container px-5 mb-5">
      
      <!-- <div class="row">
                <div class="col ">
                    <h3 class="banner"><strong>Nikmati Kekayaan Kopi Terbaik Indonesia di Dalam Satu Racikan</strong></h3>
                    Ten Coffee memadukan berbagai karakter biji kopi dari berbagai daerah penghasil kopi terbaik di Indonesia menjadi racikan House Blend dengan rasa yang kaya dan unik.
                    <br>
                    <br>
                    <b>100% GRADE 1 SPECIALTY COFFEE</b>
                    Kopi Arabika dan Robusta Indonesia Kualitas Terbaik
                </div>
                <div class="col">
                    <img src="/grade1-396x176.jpg"  alt="" class="img-fluid">
                </div>
      </div>-->

      <div class="row mt-3">
         
        <div class="col-md-6" v-for="(product, index) in products" :key="index">
          <div class="card mb-3 shadow">
            <div class="row no-gutters">
              <div class="col-md-6" style="max-width=540px">
                <nuxt-link :to="`/products/${product.id}`">
                  <img :src="product.image" data-aos="fade" class="card-img" alt />
                </nuxt-link>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <nuxt-link :to="`/products/${product.id}`">
                    <p class="card-title font-weight-bold h5">{{ product.name }}</p>
                  </nuxt-link>
                  <p class="card-text">
                    <strong class="text-danger">{{ product.low_price | money }}</strong>
                  </p>
                  <p class="card-text">100% Wild civet coffee (no cages)</p>
                  <nuxt-link :to="`/products/${product.id}`">
                    <p class="text-danger font-weight-bold">LIHAT DETAIL ></p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotron text-center text-white mb-0">
      <br />
      <br />
      <h1 class>100% kepuasan buat penikmat kopi</h1>
      <p>
        Mau order atau sekedar ingin berdiskusi perihal kopi? Kontak kami sekarang,
        <br />dengan senang hati kami siap
        melayani Anda.
      </p>
      <a
        class="btn btn-success btn-lg"
        href="https://api.whatsapp.com/send?phone=6285862419809"
        target="_blank"
        role="button"
      >
        <img src="/whatsapp.svg" alt width="25px" />
        <span class="whatsapp-icon"></span>Chat Whatsapp
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "@/components/Footer";
export default {
  name: "our-coffee",
  components: {
    Footer
  },

  mounted() {
    this.$store.dispatch("products/getProducts");
  },

  computed: {
    ...mapGetters("products", ["products"])
  }
};
</script>

<style lang="scss" scoped>
</style>
