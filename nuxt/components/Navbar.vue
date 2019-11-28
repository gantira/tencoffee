<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white p-3  shadow-sm">
      <div class="container d-flex justify-content-between" data-aos="fade">
        <div class="ml-2">
          <nuxt-link class="navbar-brand" to="/">
            <img src="/logo.svg"  alt="" width="150px">
          </nuxt-link>
        </div>
        <div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <nuxt-link class="nav-link" to="/our-coffee">Our Coffee</nuxt-link>
              </li>
              <!-- <li class="nav-item">
                <nuxt-link class="nav-link" to="/our-story">Our Story</nuxt-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kopipedia</a>
              </li> -->
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/contact-us">Contact Us</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <ul class="navbar-nav mr-auto header-right">
            <li class="nav-item">
              <a class="nav-link whatsapp-button-header" id="" href="https://api.whatsapp.com/send?phone=6281220717766">
                <span class="whatsapp-icon"></span>
              </a>
            </li>
            <li class="nav-item">
                <nuxt-link to="/cart" class="nav-link" id="mini-cart-button">
                    <span class="mini-cart-icon"></span>
                    <span class="label">{{ carts.length }}</span>
                </nuxt-link>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters('carts', ['carts']),
        },

    };

</script>

<style lang="scss" scoped>
</style>
