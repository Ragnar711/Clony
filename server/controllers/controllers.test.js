const request = require("supertest");
const { app } = require("../app");

describe("Post /media", () => {
    test("should create new media - test1", async () => {
        const response = await request(app).post("/postMedia").send({
            Name: "Test Media",
            Year: "2000",
            Review: "3",
            MediaType: "Movie",
            Director: "Test Director",
            Actor1: "Test Actor 1",
            Actor2: "Test Actor 2",
            Actor3: "Test Actor 3",
            Actor4: "Test Actor 4",
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            Name: "Test Media",
            Year: 2000,
            Review: 3,
            MediaType: "Movie",
            Director: "Test Director",
            Actor1: "Test Actor 1",
            Actor2: "Test Actor 2",
            Actor3: "Test Actor 3",
            Actor4: "Test Actor 4",
        });
    });
    test("should return error if media exists - test2", async () => {
        const response = await request(app).post("/postMedia").send({
            Name: "Test Media",
            Year: "2000",
            Review: "3",
            MediaType: "Movie",
            Director: "Test Director",
            Actor1: "Test Actor 1",
            Actor2: "Test Actor 2",
            Actor3: "Test Actor 3",
            Actor4: "Test Actor 4",
        });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: "Media already exists",
        });
    });
});
