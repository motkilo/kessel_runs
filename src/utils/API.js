import axios from 'axios';

export default {
  //Get all kessel runs
  getRuns: function() {
    return axios.get("/api/runs");
  },

  //Get run by a specific id
  getRun: function(id) {
    return axios.get("/api/runs/" + id);
  },

  //delete run by id
  deleteRun: function(id) {
    return axios.delete("api/runs/" + id);
  },

  //save a run to the database
  saveRun: function(runData) {
    return axios.post("api/runs" + runData);
  }
};

  