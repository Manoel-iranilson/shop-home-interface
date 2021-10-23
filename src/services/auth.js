export function signin() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dado21ik2k13k1ok3',
        user: {
          name: 'Manoel',
          email: 'manoel123',
        },
      });
    }, 1000);
  });
}
