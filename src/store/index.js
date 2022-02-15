import { createStore } from "vuex";

export default createStore({
  state: {
    employees: [],
    showModal: false,
    editEmployee: false,
    employeeData: {}
  },
  mutations: {
    changeEditState(state, payload) {
      // Toggle modal to edit employee
      state.showModal = !state.showModal;

      //change edit state to true
      state.editEmployee =!state.editEmployee;

      //Store employee data in state
      const data = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        role: payload.role,
        contact: payload.contact
      }

      state.employeeData = data
    },

    toggleModal(state) {
      // Toggle modal to add new employee
      state.showModal = !state.showModal;
    },

    GET_EMPLOYEES(state, payload) {
      state.employees = payload;
    },

    ADD_EMPLOYEE(state, payload) {
      state.employees.push(payload);
    },

    UPDATE_EMPLOYEE(state, payload) {
      state.employees = state.employees.map((employee) => {
        if (employee.id === payload.id) {
          employee = {id:employee.id, ...payload};
        }
        return;
      });
      state.editEmployee = false
      state.employeeData ={}
    },

    DELETE_EMPLOYEE(state, payload) {
      state.employees = state.employees.filter((employee) => {
        return employee.id !== payload.id;
      });
    },
  },
  actions: {
    async addEmployee({ commit }, payload) {
      const response = await fetch("https://emergentlabs-api.herokuapp.com/api/v1/employees", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      commit("ADD_EMPLOYEE", data.newEmployee);
    },

    async fetchEmployees({ commit }) {
      const response = await fetch("https://emergentlabs-api.herokuapp.com/api/v1/employees", {
        method: "GET",
      });
      const data = await response.json();
      commit("GET_EMPLOYEES", data.employees);
    },

    async updateEmployee({ commit }, payload) {
      await fetch(`https://emergentlabs-api.herokuapp.com/api/v1/employees/${payload.id}`, {
        method: "PUT",
      });
      commit("UPDATE_EMPLOYEE", payload);
    },

    async deleteEmployee({ commit }, payload) {
      commit("DELETE_EMPLOYEE", payload);
      await fetch(`https://emergentlabs-api.herokuapp.com/api/v1/employees/${payload.id}`, {
        method: "DELETE",
      });
      commit("DELETE_EMPLOYEE", payload);

    },
  },
  modules: {},
});
