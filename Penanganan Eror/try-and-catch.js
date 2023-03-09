try {
   console.log("Awal blok try");
   console.log(name);
   console.log("Akhir blok try");
} catch (error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
}