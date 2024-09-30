// export const getMoviesData= async()=>{
//       try {
//            const response = await fetch(
//                   "http://www.omdbapi.com/?apikey=e00c85c8&t=titanic&page=1",
//             );

//             const data = response.json();
//             return data;
//       } catch (error) {
//             console.log(Error);
            
//       }
// };  //featch api request  

export const getMoviesData = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=e00c85c8&s=kannada&page=1"
        );
    
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Await the parsed JSON response
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching movie data:", error);  // Correct error logging
        return null;  // Return null or handle error case in your component
      }
    };
    

