// here we can create a expternal javascript file and link it to html file

// Declare a array  of Favourite movies of all time 
//   In JS when we should use const and let keywords to declare variables instead of var keyword

// What is Arrray?
// An array is a special variable, which can hold more than one value at a time.
// If we have to store multiple values in a single variable, we can use arrays to store those values.

const favouriteMovies = [
    "Zootopia",
    "John Wick",
    "SpiderMan : No Way Home",
    "OG",
    "Dude"
];  

// Function to display favourite movies in the console
function displayFavouriteMovies() {
    console.log("Favourite Movies :");
    favouriteMovies.forEach(movie => {
        console.log("- " + movie);
    });
}
// Call the function to display movies
displayFavouriteMovies();