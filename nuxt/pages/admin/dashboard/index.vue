<template>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

          <chartjs-line :beginZero="beginZero" :dataLabel="dataLabel" :labels="labels" :data="data" :fill="fill" :backgroundcolor="bgColor"/>

          <h2>Section title</h2>

        </main>
</template>

<script>
    export default {
        name: 'dashboard',
        layout: 'admin',

        data() {
            return {
                beginZero: true,
                dataLabel: 'My label',
                labels: ['2013', '2014', '2015', '2016'],
                data: [2, 4, 2, 12],
                fill: true,
                bgColor: 'lightblue'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
