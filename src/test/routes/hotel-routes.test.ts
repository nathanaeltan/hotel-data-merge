import request from "supertest";
import app from "../../app";

describe("POST /api/hotel", () => {
  it("should return hotel details for given hotel IDs", async () => {
    const response = await request(app)
      .post("/api/hotels")
      .send({
        hotel_ids: ["hotel1", "hotel2"],
      })
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("should return hotel details for a given destination ID", async () => {
    const response = await request(app)
      .post("/api/hotels")
      .send({
        destination_id: 123,
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it("should return an error for invalid request body", async () => {
    const response = await request(app)
      .post("/api/hotels")
      .send({})
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toHaveProperty("error");
  });
});
