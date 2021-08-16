//using fetch method

let countries;
let totalLanguage = [];

const getData = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      console.log("hello");
      return response.json();
    })
    .then((data) => {
      countries = data;
      countries.forEach((country) => {
        const countriesLanguages = country.languages;
        countriesLanguages.forEach((languageName) => {
          totalLanguage.push(languageName.name);
        });
      });

      const languageCount = totalLanguage.reduce((acc, curr) => {
        if (acc.indexOf(curr) === -1) {
          acc.push(curr);
        }
        return acc;
      }, []);

      console.log(
        "Total Language spoke by all countries is ",
        languageCount.length
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();

// //using asyn await and try catch block for fetching the api
// const getData = async () => {
//   try {
//     const res = await fetch("https://restcountries.eu/rest/v2/all");
//     if (res.ok) {
//       console.log("Fetch data successful");
//     } else {
//       console.log("error");
//     }
//     const countryData = await res.data;

//     let totalLanguage = [];
//     //here we can do loop over trough entire countries api
//     countryData.forEach((country) => {
//       const countryLanguageName = country.languages;
//       //here we can also loop over each country languages
//       countryLanguageName.forEach((countryName) => {
//         totalLanguage.push(countryName.name);
//       });
//     });

//     console.log(totalLanguage); //here display the total language to speak in different country

//     const languageCount = totalLanguage.filter(
//       (value, index) => totalLanguage.indexOf(value) === index
//     );

//     console.log("Total language are: ", languageCount.length);
//   } catch (error) {
//     console.log("error");
//   }
// };

// getData();
