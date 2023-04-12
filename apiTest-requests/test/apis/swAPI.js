import chai from "chai";
import chaiHttp from "chai-http";
chai.use(chaiHttp);

export default {
  // return a list of films
  getFilms: function () {
    return chai.request("https://swapi.dev/").get("/api/films");
  },
  // return a person by id
  getPeople: function (id) {
    return chai.request("https://swapi.dev/").get(`/api/people/${id}`);
  },
  // return a list of planets
  getPlanets: function () {
    return chai.request("https://swapi.dev/").get("/api/planets");
  },
  // wrong service due to 404 response
  getNotFound: function () {
    return chai.request("https://swapi.dev/").get("/api/not_found");
  },
  postPlanet: function (planet) {
    return chai.request("https://swapi.dev/").post("/api/planets").send(planet);
  },
  putSpecies: function (id, specie) {
    return chai
      .request("https://swapi.dev/")
      .put(`/api/species/${id}`)
      .send(specie);
  },
  deleteVehicle: function (id) {
    return chai.request("https://swapi.dev/").delete(`/api/vehicles/${id}`);
  },
};
