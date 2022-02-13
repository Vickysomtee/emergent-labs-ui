import { createStore } from "vuex";

export default createStore({
  state: {
    employees: [],
    showModal: false,
  },
  mutations: {
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
          employee = payload;
        }
        return;
      });
    },

    DELETE_EMPLOYEE(state, payload) {
      state.employees = state.employees.filter((employee) => {
        return employee.id !== payload.id;
      });
    },
  },
  actions: {
    async addEmployee({ commit }, payload) {
      const response = await fetch("http://localhost:5000/api/v1/employees", {
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
      const response = await fetch("http://localhost:5000/api/v1/employees", {
        method: "GET",
      });
      const data = await response.json();
      commit("GET_EMPLOYEES", data.employees);
    },

    async updateEmployee({ commit }, payload) {
      await fetch(`http://localhost:5000/api/v1/employees/${payload.id}`, {
        method: "PUT",
      });
      commit("UPDATE_EMPLOYEE", payload);
    },

    async deleteEmployee({ commit }, payload) {
      commit("DELETE_EMPLOYEE", payload);
      await fetch(`http://localhost:5000/api/v1/employees/${payload.id}`, {
        method: "DELETE",
      });
    },
  },
  modules: {},
});
