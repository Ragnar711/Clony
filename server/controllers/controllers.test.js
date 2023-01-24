const request = require("supertest");
const { app } = require("../app");

describe("Post /media", () => {
    test("should create new media", async () => {
        const response = await request(app).post("/postMedia").send({
            Name: "Test",
            Year: "2005",
            Review: "4",
            MediaType: "Movie",
            Director: "Director",
            Actor1: "Actor 1",
            Actor2: "Actor 2",
            Actor3: "Actor 3",
            Actor4: "Actor 4",
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            Name: "Test",
            Year: 2005,
            Review: 4,
            MediaType: "Movie",
            Director: "Director",
            Actor1: "Actor 1",
            Actor2: "Actor 2",
            Actor3: "Actor 3",
            Actor4: "Actor 4",
        });
    });
    test("should return error if media exists", async () => {
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
