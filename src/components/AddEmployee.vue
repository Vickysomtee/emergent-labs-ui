<template>
  <div class="modalDialog" id="openModal">
    <div class="container">
      <i @click="toggleModal" class="fas fa-times"></i>
      <form @submit="onSubmit">
        <label>First Name</label>
        <input type="text" v-model="firstName" />
        <label>Last Name</label>
        <input type="text" v-model="lastName" />
        <label>Email</label>
        <input type="text" v-model="email" />
        <label>Role</label>
        <input type="text" v-model="role" />
        <label>Phone NO.</label>
        <input type="text" v-model="contact" />
        <div>
          <button class="btn-submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddEmployee",

  data() {
    return {
      firstName: this.$store.state.employeeData.firstName,
      lastName: this.$store.state.employeeData.lastName,
      email: this.$store.state.employeeData.email,
      role: this.$store.state.employeeData.role,
      contact: this.$store.state.employeeData.contact,
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (
        !this.firstName ||
        !this.lastName ||
        !this.email ||
        !this.role ||
        !this.contact
      ) {
        alert("All fields are required");
        return;
      }

      const newEmployee = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        role: this.role,
        contact: this.contact,
      };

      if (this.$store.state.editEmployee) {
        this.$store.dispatch("updateEmployee", newEmployee);
      } else {
        this.$store.dispatch("addEmployee", newEmployee);
      }
      this.$store.state.showModal = false;
    },

    ...mapMutations(["toggleModal"]),
  },
};
</script>

<style lang="scss" scoped>
.modalDialog {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  opacity: 1;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: auto;
}

.modalDialog > div {
  display: grid;
  justify-content: center;
  justify-items: center;
  width: 350px;
  position: relative;
  margin: 150px auto;
  padding: 35px;
  border-radius: 10px;
  background: #fff;
  height: 500px;
}

/* #EMPLOYEE FORM
================================================== */

.container {
  width: 25%;
  border: 1px solid#999;
  border-radius: 15%;

  i {
    float: right;
    bottom: 27px;
    position: relative;
    left: 150px;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #013c61;
  }

  input {
    height: 30px;
    width: 250px;
    border-radius: 7px;
    margin-bottom: 20px;
    padding: 5px;
    border: 1px solid #e6e7eb;
    color: #013c61;
  }

  .btn-submit {
    width: 100px;
    height: 30px;
    padding: px;
    background: #2bda53;
    border: none;
    color: white;
    border-radius: 4px;
    left: 150px;
    position: relative;
    top: 20px;
  }
}
</style>
