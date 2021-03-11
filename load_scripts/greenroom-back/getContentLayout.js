import { check } from 'k6';
import http from 'k6/http';

export default function() {
  const responses = http.batch([
    `${__ENV.BACKEND_BASE_URL}/api/v1/aia-tottenham/zh-CN/layout`,
  ]);

  check(responses[0], {
    "[GET] /manifest (200)": res => res.status === 200,
  });

};
