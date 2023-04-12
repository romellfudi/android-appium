import { expect } from "chai";
import swAPI from "../apis/swAPI.js";
import assert from "assert";
describe("API Testing - Star Wars API", () => {
  it("should return a list of films", async () => {
    const res = await swAPI.getFilms();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.count, 6);
  });
  it("should return a list of people", async () => {
    const res = await swAPI.getPeople(1);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.name, "Luke Skywalker");
  });
  it("should return a list of planets", async () => {
    const res = await swAPI.getPlanets();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.results.length, 10);
    assert.strictEqual(res.body.results[0].name, "Tatooine");
  });
  it("should return a 404 response server", async () => {
    const res = await swAPI.getNotFound();
    assert.strictEqual(res.status, 404);
  });
  it("get planets by post method", async () => {
    const newPlanet = {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
    };
     let planetResponse = await swAPI.postPlanet(newPlanet);
     expect(planetResponse.status).to.equal(200);
     expect(planetResponse.status).to.be.an("object").that.includes.property("count");
  });
  it("should edit a specie", async () => {
    const newEspecie = {
      name: "Tatooine",
      classification: "23",
      designation: "304",
    };
    let specieResponse = await swAPI.putSpecies(1, newEspecie);
    expect(specieResponse.status).to.equal(200);
    });
  it("should delete a vehicle", async () => {
    let vehicleResponse = await swAPI.deleteVehicle(1);
    expect(vehicleResponse.status).to.equal(200);
  });

});
