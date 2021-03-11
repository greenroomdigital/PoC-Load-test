import { check } from "k6";
import http from "k6/http";
import faker from "cdnjs.com/libraries/Faker";

export default function () {
  const responses = http.batch([
    `${__ENV.BACKEND_BASE_URL}/api/v1/aia-tottenham/zn-Ch/voting`,
  ]);

  check(responses[0], {
    "[GET] /api/v1/aia-tottenhamen/en/voting (200)": (res) => res.status === 200,
  });
}
