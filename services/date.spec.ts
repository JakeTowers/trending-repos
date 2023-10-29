import { getDateLastSevenDays } from "./date";

describe("date", () => {
  describe("getDateLastSevenDays", () => {
    it("should get the date from 7 days ago in ISO format", () => {
      jest.useFakeTimers().setSystemTime(new Date("2023-10-29"));

      expect(getDateLastSevenDays()).toEqual("2023-10-22T00:00:00.000Z");
    });

    it("should get the expected date across month boundaries", () => {
      jest.useFakeTimers().setSystemTime(new Date("2023-10-01"));

      expect(getDateLastSevenDays()).toEqual("2023-09-24T00:00:00.000Z");
    });

    it("should get the expected date across year boundaries", () => {
      jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

      expect(getDateLastSevenDays()).toEqual("2022-12-25T00:00:00.000Z");
    });
  });
});
