const request = require("supertest");
const { makeApp } = require("../app");

const prisma = {
    media: {
        findUnique: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
    },
};
const app = makeApp(prisma);
const db = prisma.media;

beforeEach(() => {
    db.create.mockReset();
});

describe("Post /media", () => {
    test("should create new media", async () => {
        db.findUnique.mockResolvedValue(false);
        db.create.mockResolvedValue(1);
        const response = await request(app).post("/postMedia").send({
            Name: "Test",
            Year: "2005",
            MediaType: "Movie",
            Review: "4",
            Director: "Director",
            Actor1: "Actor 1",
            Actor2: "Actor 2",
            Actor3: "Actor 3",
            Actor4: "Actor 4",
        });
        expect(db.create.mock.calls[0][0]).toStrictEqual({
            data: {
                Name: "Test",
                Year: 2005,
                MediaType: "Movie",
                Review: 4,
                Director: "Director",
                Actor1: "Actor 1",
                Actor2: "Actor 2",
                Actor3: "Actor 3",
                Actor4: "Actor 4",
            },
        });
        expect(response.status).toBe(201);
        expect(response.body).toEqual(1);
    });
    test("should return error if media exists", async () => {
        db.findUnique.mockResolvedValue(true);
        const response = await request(app).post("/postMedia").send({
            Name: "Test Media",
            Year: "2000",
            MediaType: "Movie",
            Review: "3",
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

describe("Get /movies", () => {
    test("should get all the movies from the database", async () => {
        const movies = [
            {
                Name: "Test",
                Year: 2005,
                MediaType: "Movie",
                Review: 4,
                Director: "Director",
                Actor1: "Actor 1",
                Actor2: "Actor 2",
                Actor3: "Actor 3",
                Actor4: "Actor 4",
            },
        ];
        db.findMany.mockResolvedValue(movies);
        const response = await request(app).get("/getMovies");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(movies);
        expect(db.findMany).toHaveBeenCalled();
        expect(db.findMany).toHaveBeenCalledWith({
            where: { MediaType: "Movie" },
        });
    });
    test("should return an error when the database call fails", async () => {
        const error = new Error("Error getting movies from the database");
        db.findMany.mockRejectedValue(error);
        const response = await request(app).get("/getMovies");
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ message: error.message });
    });
});
