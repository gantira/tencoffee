<template>
  <div>
    <div class="container px-5 mb-5" style="max-width:800px;">
      <div class="row">
        <div class="card p-4 shadow">
            <div class="d-flex text-muted" data-aos="fade-up-left">
                <div class="mr-1">
                    <nuxt-link to="/our-coffee">
                    <span class="mdi mdi-home "></span>
                    </nuxt-link>
                </div>
                <div class="mr-1">»</div>
                <div><small> Our Story </small></div>
            </div>
            <h3 data-aos="fade-up" data-aos-duration="200"><strong>Our Story</strong></h3>
            <p>Indonesia merupakan tanah subur di mana tumbuh beragam kopi dengan rasa yang unik dan khas. Berbeda daerah, berbeda pula cita rasa kopi yang dihasilkan. Dimulai dari kecintaan dan rasa penasaran pada karakter kopi Indonesia yang beragam, kami berkomitmen untuk menyajikan kualitas biji kopi terbaik dari berbagai sudut di Indonesia kepada khalayak.</p>
            <img src="indonesia.jpg" alt="" class="pb-3" data-aos="fade">
            <p>Tahun 2017, kami mulai meracik coffee blend arabika yang menggunakan biji-biji kopi dari berbagai daerah di Indonesia. Keberagaman varietas kopi yang tersebar dari <strong>Sabang sampai Merauke</strong> adalah alasan kami memilih nama <strong>Ten Coffee</strong></p>
            <p>Secangkir kopi yang buruk akan merusak hari anda, sementara secangkir kopi yang nikmat dapat menginspirasi. Karena itu, kami selalu menjaga kualitas agar memberi anda kenikmatan kopi khas Indonesia.</p>
            <p>Ten Coffee menawarkan pengalaman baru dalam menikmati kopi khas nusantara. Kami memadukan berbagai karakter biji kopi Indonesia, seperti Gayo, Kalosi, Kintamani, Wamena, dan lain-lain menjadi satu racikan House Blend dengan rasa yang kaya.</p>
            <p><strong>Kopi Indonesia merupakan wajah bangsa dan budaya yang beragam. Berbeda-beda tapi tetap kopi jua.</strong></p>
        </div>
      </div>

    </div>

    <div class="jumbotron text-center text-white mb-0">
            <br>
            <br>
            <h1 class="">100% kepuasan buat penikmat kopi</h1>
            <p>Mau order atau sekedar ingin berdiskusi perihal kopi? Kontak kami sekarang, <br>
                dengan senang hati kami siap
                melayani Anda.
            </p>
            <a class="btn btn-success btn-lg" href="https://api.whatsapp.com/send?phone=6285862419809" target="_blank" role="button">
                <img src="/whatsapp.svg" alt="" width="25px">
                <span class="whatsapp-icon"></span>Chat Whatsapp</a>
        </div>


  </div>

</template>

<script>
  export default {
    name: "our-coffee",
  }

</script>

<style lang="scss" scoped>

</style>
