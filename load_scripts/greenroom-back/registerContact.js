import { check } from "k6";
import http from "k6/http";
import faker from "cdnjs.com/libraries/Faker";

export default function () {
  const url = `${__ENV.BACKEND_BASE_URL}/api/v1/aia-tottenham/zh-CN/voting`;
  const payload = JSON.stringify({
    id: faker.random.uuid(),
    vote: faker.random.uuid(),
    ssFormId: faker.random.uuid(),
    contact: {
      email: faker.internet.email(),
      other_contact_info: faker.lorem.sentence(),
    },
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    "[POST] /api/v1/aia-tottenham/zn-Ch/voting (201)": (r) => r.status === 201,
  });
}
