import jwt from 'jsonwebtoken';

export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, 'secret123', doneFn);
}

export function generateTokenPromise(userEmail) {
  return new Promise((resolve, reject) => {
    jwt.sign({email: userEmail}, 'secret123', (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));
