<template>
  <main>
    <div v-if="$store.state.showModal">
      <AddEmployee />
    </div>
    <NavBar />
    <SideBar />
    <div class="main-body">
      <div class="emp-head">
        <h3>Employees</h3>
        <button @click="toggleModal" class="btn-main">Add New</button>
      </div>
      <div class="emp-admin">
        <h1>Josh Bakery Ventures</h1>
        <div>62, Bode Thomas, Surulere, Lagos</div>
      </div>
      <div class="menu-options">
        <div class="inputs">
          <input type="text" placeholder="Change role" />
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L5 1L1 5"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 9L5 13L9 9"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button class="btn-main">Change</button>
          <input
            type="text"
            name="search"
            placeholder="Enter staff name here…"
          />
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.05556 11.6555C8.84766 11.6555 11.1111 9.3921 11.1111 6.59999C11.1111 3.80788 8.84766 1.54443 6.05556 1.54443C3.26345 1.54443 1 3.80788 1 6.59999C1 9.3921 3.26345 11.6555 6.05556 11.6555Z"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.2611 15.1167L9.55555 10.3333"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="pagination">
          <div><span>1</span> of 2</div>
          <div>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.996975 8.04924C0.996975 12.4947 4.60074 16.0985 9.04622 16.0985C13.4917 16.0985 17.0955 12.4947 17.0955 8.04924C17.0955 3.60377 13.4917 0 9.04622 0C4.60074 0 0.996975 3.60377 0.996975 8.04924Z"
                fill="#2BDA53"
              />
              <path
                d="M9.85114 4.82954L6.63144 8.04924L9.85114 11.2689"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9136 8.04924C16.9136 12.4947 13.3098 16.0985 8.86437 16.0985C4.41889 16.0985 0.815125 12.4947 0.815125 8.04924C0.815125 3.60377 4.41889 0 8.86437 0C13.3098 0 16.9136 3.60377 16.9136 8.04924Z"
                fill="#2BDA53"
              />
              <path
                d="M8.05945 4.82954L11.2791 8.04924L8.05945 11.2689"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="table table-head">
        <div class="table-row input">
          <input type="checkbox" name="" id="" />
        </div>
        <div class="table-row">FIRST NAME</div>
        <div class="table-row">LAST NAME</div>
        <div class="table-row">EMAIL</div>
        <div class="table-row">PHONE</div>
        <div class="table-row">ROLE</div>
        <div class="table-delete">
          <svg
            width="15"
            height="17"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.0775 0.85932C22.4029 0.574563 22.9306 0.574563 23.256 0.85932L31.5893 8.15099C31.9148 8.43574 31.9148 8.89743 31.5893 9.18218L9.92267 28.1405C9.76639 28.2773 9.55443 28.3541 9.33341 28.3541H1.00008C0.539844 28.3541 0.166748 28.0276 0.166748 27.6249V20.3333C0.166748 20.1399 0.254545 19.9544 0.410826 19.8177L22.0775 0.85932ZM18.8453 5.74992L26.0001 12.0104L29.8216 8.66659L22.6667 2.40612L18.8453 5.74992ZM24.8216 13.0416L17.6667 6.78112L3.01193 19.6041L10.1667 25.8646L24.8216 13.0416ZM8.98824 26.8958L1.83341 20.6353V26.8958H8.98824Z"
              fill="#1B581D"
            />
          </svg>
          <svg
            width="15"
            height="17"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.55555H2.77778H17"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.9778 5.55555C3.9778 4.89281 3.44054 4.35555 2.7778 4.35555V5.55555H3.9778ZM3.9778 18V5.55555H2.7778V18H3.9778ZM4.55557 18.5778C4.23647 18.5778 3.9778 18.3191 3.9778 18H2.7778C2.7778 18.9818 3.57373 19.7778 4.55557 19.7778V18.5778ZM13.4445 18.5778H4.55557V19.7778H13.4445V18.5778ZM14.0222 18C14.0222 18.3191 13.7636 18.5778 13.4445 18.5778V19.7778C14.4263 19.7778 15.2222 18.9818 15.2222 18H14.0222ZM14.0222 5.55555V18H15.2222V5.55555H14.0222ZM15.2222 4.35555C14.5595 4.35555 14.0222 4.89281 14.0222 5.55555H15.2222H15.2222V4.35555ZM16.4222 5.55555C16.4222 4.89281 15.885 4.35555 15.2222 4.35555V5.55555H16.4222ZM16.4222 18V5.55555H15.2222V18H16.4222ZM13.4445 20.9778C15.089 20.9778 16.4222 19.6446 16.4222 18H15.2222C15.2222 18.9818 14.4263 19.7778 13.4445 19.7778V20.9778ZM4.55557 20.9778H13.4445V19.7778H4.55557V20.9778ZM1.5778 18C1.5778 19.6446 2.91099 20.9778 4.55557 20.9778V19.7778C3.57373 19.7778 2.7778 18.9818 2.7778 18H1.5778ZM1.5778 5.55555V18H2.7778V5.55555H1.5778ZM2.7778 4.35555C2.11505 4.35555 1.5778 4.89281 1.5778 5.55555H2.7778V4.35555ZM6.64446 3.77777C6.64446 3.45867 6.90314 3.19999 7.22224 3.19999V1.99999C6.2404 1.99999 5.44446 2.79593 5.44446 3.77777H6.64446ZM6.64446 5.55555V3.77777H5.44446V5.55555H6.64446ZM5.44446 6.75555C6.1072 6.75555 6.64446 6.21829 6.64446 5.55555H5.44446V6.75555ZM4.24446 5.55555C4.24446 6.21829 4.78172 6.75555 5.44446 6.75555V5.55555H4.24446ZM4.24446 3.77777V5.55555H5.44446V3.77777H4.24446ZM7.22224 0.799994C5.57766 0.799994 4.24446 2.13319 4.24446 3.77777H5.44446C5.44446 2.79593 6.2404 1.99999 7.22224 1.99999V0.799994ZM10.7778 0.799994H7.22224V1.99999H10.7778V0.799994ZM13.7556 3.77777C13.7556 2.13319 12.4224 0.799994 10.7778 0.799994V1.99999C11.7596 1.99999 12.5556 2.79593 12.5556 3.77777H13.7556ZM13.7556 5.55555V3.77777H12.5556V5.55555H13.7556ZM12.5556 6.75555C13.2183 6.75555 13.7556 6.21829 13.7556 5.55555H12.5556V6.75555ZM11.3556 5.55555C11.3556 6.21829 11.8928 6.75555 12.5556 6.75555V5.55555H11.3556ZM11.3556 3.77777V5.55555H12.5556V3.77777H11.3556ZM10.7778 3.19999C11.0969 3.19999 11.3556 3.45867 11.3556 3.77777H12.5556C12.5556 2.79593 11.7596 1.99999 10.7778 1.99999V3.19999ZM7.22224 3.19999H10.7778V1.99999H7.22224V3.19999Z"
              fill="#6A7E8A"
            />
            <path
              d="M7.22222 9.99999V15.3333"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.7778 9.99999V15.3333"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        v-for="(employee, index) in employees"
        :key="index"
        class="table table-body"
      >
        <div class="table-row body input">
          <input type="checkbox" name="" id="" />
        </div>
        <div class="table-row body">{{ employee.firstName }}</div>
        <div class="table-row body">{{ employee.lastName }}</div>
        <div class="table-row body">{{ employee.email }}</div>
        <div class="table-row body">{{ employee.contact }}</div>
        <div class="table-row body">{{ employee.role }}</div>
        <div class="table-delete">
          <!-- <svg
            @click.prevent="openEditForm(employee)"
            width="15"
            height="17"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.0775 0.85932C22.4029 0.574563 22.9306 0.574563 23.256 0.85932L31.5893 8.15099C31.9148 8.43574 31.9148 8.89743 31.5893 9.18218L9.92267 28.1405C9.76639 28.2773 9.55443 28.3541 9.33341 28.3541H1.00008C0.539844 28.3541 0.166748 28.0276 0.166748 27.6249V20.3333C0.166748 20.1399 0.254545 19.9544 0.410826 19.8177L22.0775 0.85932ZM18.8453 5.74992L26.0001 12.0104L29.8216 8.66659L22.6667 2.40612L18.8453 5.74992ZM24.8216 13.0416L17.6667 6.78112L3.01193 19.6041L10.1667 25.8646L24.8216 13.0416ZM8.98824 26.8958L1.83341 20.6353V26.8958H8.98824Z"
              fill="#1B581D"
            />
          </svg> -->

          <svg
            @click.prevent="deleteEmployee(employee)"
            width="15"
            height="17"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.55555H2.77778H17"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.9778 5.55555C3.9778 4.89281 3.44054 4.35555 2.7778 4.35555V5.55555H3.9778ZM3.9778 18V5.55555H2.7778V18H3.9778ZM4.55557 18.5778C4.23647 18.5778 3.9778 18.3191 3.9778 18H2.7778C2.7778 18.9818 3.57373 19.7778 4.55557 19.7778V18.5778ZM13.4445 18.5778H4.55557V19.7778H13.4445V18.5778ZM14.0222 18C14.0222 18.3191 13.7636 18.5778 13.4445 18.5778V19.7778C14.4263 19.7778 15.2222 18.9818 15.2222 18H14.0222ZM14.0222 5.55555V18H15.2222V5.55555H14.0222ZM15.2222 4.35555C14.5595 4.35555 14.0222 4.89281 14.0222 5.55555H15.2222H15.2222V4.35555ZM16.4222 5.55555C16.4222 4.89281 15.885 4.35555 15.2222 4.35555V5.55555H16.4222ZM16.4222 18V5.55555H15.2222V18H16.4222ZM13.4445 20.9778C15.089 20.9778 16.4222 19.6446 16.4222 18H15.2222C15.2222 18.9818 14.4263 19.7778 13.4445 19.7778V20.9778ZM4.55557 20.9778H13.4445V19.7778H4.55557V20.9778ZM1.5778 18C1.5778 19.6446 2.91099 20.9778 4.55557 20.9778V19.7778C3.57373 19.7778 2.7778 18.9818 2.7778 18H1.5778ZM1.5778 5.55555V18H2.7778V5.55555H1.5778ZM2.7778 4.35555C2.11505 4.35555 1.5778 4.89281 1.5778 5.55555H2.7778V4.35555ZM6.64446 3.77777C6.64446 3.45867 6.90314 3.19999 7.22224 3.19999V1.99999C6.2404 1.99999 5.44446 2.79593 5.44446 3.77777H6.64446ZM6.64446 5.55555V3.77777H5.44446V5.55555H6.64446ZM5.44446 6.75555C6.1072 6.75555 6.64446 6.21829 6.64446 5.55555H5.44446V6.75555ZM4.24446 5.55555C4.24446 6.21829 4.78172 6.75555 5.44446 6.75555V5.55555H4.24446ZM4.24446 3.77777V5.55555H5.44446V3.77777H4.24446ZM7.22224 0.799994C5.57766 0.799994 4.24446 2.13319 4.24446 3.77777H5.44446C5.44446 2.79593 6.2404 1.99999 7.22224 1.99999V0.799994ZM10.7778 0.799994H7.22224V1.99999H10.7778V0.799994ZM13.7556 3.77777C13.7556 2.13319 12.4224 0.799994 10.7778 0.799994V1.99999C11.7596 1.99999 12.5556 2.79593 12.5556 3.77777H13.7556ZM13.7556 5.55555V3.77777H12.5556V5.55555H13.7556ZM12.5556 6.75555C13.2183 6.75555 13.7556 6.21829 13.7556 5.55555H12.5556V6.75555ZM11.3556 5.55555C11.3556 6.21829 11.8928 6.75555 12.5556 6.75555V5.55555H11.3556ZM11.3556 3.77777V5.55555H12.5556V3.77777H11.3556ZM10.7778 3.19999C11.0969 3.19999 11.3556 3.45867 11.3556 3.77777H12.5556C12.5556 2.79593 11.7596 1.99999 10.7778 1.99999V3.19999ZM7.22224 3.19999H10.7778V1.99999H7.22224V3.19999Z"
              fill="#6A7E8A"
            />
            <path
              d="M7.22222 9.99999V15.3333"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.7778 9.99999V15.3333"
              stroke="#6A7E8A"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";

import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
import AddEmployee from "../components/AddEmployee.vue";
export default {
  name: "Employee",
  components: {
    NavBar,
    SideBar,
    AddEmployee,
  },
  mounted() {
    this.$store.dispatch("fetchEmployees");
  },

  methods: {
    ...mapMutations(["toggleModal"]),

    // This opens the edit form
    //and stores employee old data in the state
    openEditForm(employee) {
      this.$store.commit("changeEditState", employee);
    },

    deleteEmployee(employee) {
      if (confirm("Are you sure to want to delete this employee?")) {
        this.$store.dispatch("deleteEmployee", employee);
      }
    },

    updateEmployee(employee) {
      this.$store.dispatch("updateEmployee", employee);
    },
  },

  computed: {
    employees() {
      return this.$store.state.employees;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-body {
  width: 100%;
  background: #e5e5e5;
  padding-bottom: 60px;

  .emp-head {
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 90px 0;
    margin: 50px 40px 0 110px;

    h3 {
      font-size: 17px;
      font-weight: 600;
      color: #013c61;
      position: relative;
      top: 10px;
    }
  }

  .emp-admin {
    display: flex;
    justify-content: space-between;
    height: 70px;
    background: #fff;
    color: #013c61;
    padding: 20px;
    margin: 15px 40px 60px 110px;
    border-radius: 4px;

    h1 {
      position: relative;
      top: 6px;
    }

    div {
      position: relative;
      top: 10px;
      font-size: 15px;
    }
  }

  .menu-options {
    display: flex;
    justify-content: space-between;
    margin: 20px 45px 80px 110px;

    .inputs {
      display: flex;
      justify-content: space-between;
      width: 600px;

      svg {
        position: relative;
        top: 14px;
        right: 19px;
      }

      input {
        height: 40px;
        width: 150px;
        padding-left: 10px;
        border: 1px solid #6a7e8a;
        border-radius: 5px;
      }

      input:nth-of-type(2) {
        width: 360px;
      }

      .btn-main {
        height: 40px;
        width: 140px;
        border-radius: 5px;
        margin-right: 8px;
      }
    }

    .pagination {
      display: flex;
      justify-content: space-between;
      width: 100px;
      font-size: 13px;
      color: #013c61;
      margin-top: 10px;

      span {
        border: 1px solid #6a7e8a;
        border-radius: 2px;
        padding: 1px 4px;
      }

      svg:nth-of-type(1) {
        margin-right: 6px;
      }
    }
  }
  .table {
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 110px;
    padding: 20px;

    .table-row {
      width: 200px;
      font-size: 13px;
      font-weight: 600;
      color: #013c61;
    }
    .table-row.input {
      width: 50px;
    }
    .table-row.body {
      font-weight: normal;
      font-size: 15px;
    }
  }
  .table.table-head {
    padding: 0 20px;

    .table-delete {
      visibility: hidden;
    }
  }
  .table.table-body {
    margin-top: 20px;
    border-radius: 5px;
    background: #fff;

    .table-delete {
      position: relative;
      right: 30px;

      svg:nth-of-type(2) {
        left: 10px;
        position: relative;
      }
    }
  }
}
</style>
