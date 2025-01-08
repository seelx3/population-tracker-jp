import {
  populationFormatter,
  yAxisLabelFormatter,
} from "@/app/utils/formatterUtils";
import { describe, expect, it } from "vitest";

describe("formatterUtils", () => {
  describe("yAxisLabelFormatter", () => {
    it("should format the value to a string with the unit '万'", () => {
      expect(yAxisLabelFormatter(10000)).toBe("1万");
      expect(yAxisLabelFormatter(12345)).toBe("1万");
      expect(yAxisLabelFormatter(9999)).toBe("0万");
    });
  });

  describe("populationFormatter", () => {
    it("should format the value to a string with the unit '万'", () => {
      expect(populationFormatter(10000)).toBe("1万");
      expect(populationFormatter(12345)).toBe("1万2345");
      expect(populationFormatter(9999)).toBe("9999");
    });
  });
});
