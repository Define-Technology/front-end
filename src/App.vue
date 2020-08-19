<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      Navbar
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" active>实时检控</mdb-nav-item>
        <mdb-nav-item href="#">地理信息</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>数据查询</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>遥感数据查询</mdb-dropdown-item>
            <mdb-dropdown-item>无效数据查询</mdb-dropdown-item>
            <mdb-dropdown-item>不合格车辆台帐</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>黑烟车模块</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>业务办理</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>超限车辆审核</mdb-dropdown-item>
            <mdb-dropdown-item>不合格车辆</mdb-dropdown-item>
            <mdb-dropdown-item>证据链管理</mdb-dropdown-item>
            <mdb-dropdown-item>劝返清单</mdb-dropdown-item>
            <mdb-dropdown-item>未劝返清单</mdb-dropdown-item>
            <mdb-dropdown-item>劝返车辆预警</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>数据分析</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>运维管理</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>定州环保</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
            <mdb-dropdown-item>todo</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"
        ><img alt="" class="img-fluid" src="./assets/logo-mdb-vue-small.png"
      /></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            ><mdb-icon
              icon="chart-pie"
              class="mr-3"
            />Dashboard</mdb-list-group-item
          >
        </router-link>
        <router-link to="/profile" @click.native="activeItem = 2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            ><mdb-icon icon="user" class="mr-3" />Profile</mdb-list-group-item
          >
        </router-link>
        <router-link to="/tables" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            ><mdb-icon icon="table" class="mr-3" />Tables</mdb-list-group-item
          >
        </router-link>
        <router-link to="/maps" @click.native="activeItem = 4">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 4 && 'active'"
            ><mdb-icon icon="map" class="mr-3" />Maps</mdb-list-group-item
          >
        </router-link>
        <router-link to="/404" @click.native="activeItem = 5">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            ><mdb-icon
              icon="exclamation"
              class="mr-3"
            />404</mdb-list-group-item
          >
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <div class="pt-4">
          <mdb-btn
            outline="white"
            tag="a"
            href="https://mdbootstrap.com/docs/vue/getting-started/download/"
            target="_blank"
            >Download MDB <mdb-icon icon="download" class="ml-2"
          /></mdb-btn>
          <mdb-btn
            outline="white"
            tag="a"
            href="https://mdbootstrap.com/education/bootstrap/"
            target="_blank"
            >Start free tutorial <mdb-icon icon="graduation-cap" class="ml-2"
          /></mdb-btn>
        </div>
        <hr class="my4" />
        <div class="pb-4">
          <a href="#"><mdb-icon fab icon="facebook-square" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="twitter" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="youtube" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="google-plus" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="dribbble" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="pinterest" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="github" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="codepen" class="mr-3"/></a>
        </div>
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{ new Date().getFullYear() }} Copyright:
          <a href="https://mdbootstrap.com/docs/vue/"> MDBootstrap.com </a>
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbBtn,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  mdbFooter,
  waves
} from "mdbvue";

export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    ftr: mdbFooter
  },
  data() {
    return {
      activeItem: 1
    };
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
