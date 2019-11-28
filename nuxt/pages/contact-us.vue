<template>
    <div>
        <div class="container px-5 mb-5" style="max-width:800px;">
            <div class="row">
                <div class="card p-4 shadow">
                    <div class="d-flex text-muted" data-aos="fade-up-left">
                        <div class="mr-1">
                            <nuxt-link to="/our-coffee">
                            <span class="mdi mdi-home"></span>
                            </nuxt-link>
                        </div>
                        <div class="mr-1">»</div>
                        <div><small> Our Story </small></div>
                    </div>
                    <h3 data-aos="fade-up" data-aos-duration="200"><strong>Contact Us</strong></h3>
                    <p>Mau order atau sekedar ingin berdiskusi perihal kopi? Kontak kami melalui form dibawah ini atau
                        chat via
                        <a href="#" class="text-danger">Whatsapp +6281220717766</a>, dengan senang hati kami siap
                        melayani Anda.</p>
                    <div class="form-group">
                        <label for="nama">Nama Anda</label>
                        <input type="text" id="nama" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Anda</label>
                        <input type="text" id="email" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="subjek">Subjek Anda</label>
                        <input type="text" id="subjek" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="message">Pesan Anda</label>
                        <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-dark">Kirim</button>
                    </div>

                    <div class="row">
                        <div class="col">
                            <strong>Alamat:</strong>
                            <p>
                                Jalan Brigjen Slamet Riyadi 32 Ambarawa
                                <br />Kabupaten Semarang
                                <br />Jawa Tengah, 50613
                                <br />
                            </p>
                        </div>
                        <div class="col">
                            <strong>Telp/WA:</strong>
                            <p>+6281220717766</p>

                            <strong>Jam Operasional:</strong>
                            <p>
                                Senin-Sabtu <br>
                                10.30-19.30 WIB<br>
                            </p>
                        </div>
                    </div>

                    <div class="jumbotron" data-aos="fade"></div>
                </div>
            </div>

            <div class="row"></div>
        </div>

        <div class="jumbotron text-center text-white mb-0" >
            <h1 class="">100% kepuasan buat penikmat kopi</h1>
            <p>Mau order atau sekedar ingin berdiskusi perihal kopi? Kontak kami sekarang, <br>
                dengan senang hati kami siap
                melayani Anda.
            </p>
            <a class="btn btn-success btn-lg" href="https://api.whatsapp.com/send?phone=6281220717766" target="_blank"
                role="button">
                <img src="/whatsapp.svg" alt="" width="25px">
                <span class="whatsapp-icon"></span>Chat Whatsapp</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "our-coffee",

    };

</script>

<style lang="scss" scoped>
</style>
