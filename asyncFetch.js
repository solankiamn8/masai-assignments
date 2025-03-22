function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve("Fetched data successfully!") : reject("Network error occurred.");
      }, 1000);
    });
  }
  
  async function fetchDataHandler() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  fetchDataHandler();
  