class Fetch {
    async getCurrent(input) {
      const myKey = "3c8cd4713211735b2e1cb8bf0e64df4a0";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }
  