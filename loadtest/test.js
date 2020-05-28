import http from 'k6/http';
import { sleep,check } from 'k6';
export let options = {
    vus: 100,
    duration: '30s',
  };
export default function() {
  
 const res = http.get('http://localhost:5001/token');
 // const res = http.get('http://localhost:5001/splash');

  const checkRes = check(res, {
    'status is 200': r => r.status === 200
  });
  
}
