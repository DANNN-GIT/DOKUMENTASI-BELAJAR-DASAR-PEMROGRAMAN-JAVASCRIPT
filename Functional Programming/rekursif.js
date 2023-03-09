const countDown = start => {
   do {
      console.log(start);
      start--;
   }
   while (start > 0);
};
countDown(10);

const countDownRekursif = start => {
   console.log(start);
   if (start > 1) countDownRekursif(start - 1);
};
countDownRekursif(10);