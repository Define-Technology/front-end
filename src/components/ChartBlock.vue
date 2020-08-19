<template>
  <section id="chartblock">

    <!-- 这里需要一个pills -->
    <mdb-card>
      <mdb-card-title>chart block</mdb-card-title>
      <mdb-container>
            <mdb-tabs
            :active="0"
            default
            :links="[
              { text: '监测数', slot: 'custom-slot' },
              { text: '超限数' },
              { text: '合格数' },
              { text: '黑烟车数' }]"
            :transition-duration="0.5"
            transition-style="linear"
          >
            <template :slot="'custom-slot'">
              <mdb-container>
                <mdb-row>
                  <mdb-col sm="6">
                    <mdb-container>
                    <mdb-line-chart
                      :data="myData"
                      :options="myOptions"
                      :height = "200"
                      :width = "200"
                    ></mdb-line-chart>
                    </mdb-container>
                  </mdb-col>
                  <mdb-col sm="6">
                    <p>headline</p>
                    <mdb-container>
                      <mdb-data-table
                        :data="tableData"
                        striped
                        fixed
                        scrollY
                      />
                    </mdb-container>

                  </mdb-col>
                </mdb-row>
              </mdb-container>
            </template>
            <template :slot="'超限数'">
              <mdb-container>

              </mdb-container>
            </template>
          </mdb-tabs>
          <mdb-row>
            <mdb-col>
            </mdb-col>
          </mdb-row>
      </mdb-container>
    </mdb-card>
  </section>
</template>

<script>
import {
  mdbRow,
  mdbDataTable,
  mdbCard,
  mdbCardTitle,
  mdbCol,
  mdbContainer,
  mdbLineChart,
  mdbTabs,
} from 'mdbvue';

export default {
  name: 'Dashboard',
  props: {
    'myData': Promise,
    'myOptions': Promise,
    'tableData': Promise,
  },
  components: {
    mdbRow,
    mdbCol,
    mdbContainer,
    mdbDataTable,
    mdbLineChart,
    mdbTabs,
    mdbCard,
    mdbCardTitle,
  },
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
