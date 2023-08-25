        fetch('https://disease.sh/v3/covid-19/countries')
            .then(response => response.json())
            .then(data => {
                const countryList = document.querySelector('.country-list');
                
                data.forEach(country => {
                    const countryCard = document.createElement('div');
                    countryCard.classList.add('country-card');
                    countryCard.innerHTML = `
                        <img src="${country.countryInfo.flag}" alt="${country.country}">
                        <h2>${country.country}</h2>
                        <p>${country.continent}</p>
                    `;
                    
                    countryCard.addEventListener('click', () => {
                        showCountryInfo(country);
                    });
                    
                    countryList.appendChild(countryCard);
                });
            });
        
        function showCountryInfo(country) {
            const countryInfo = document.querySelector('.country-info');
            countryInfo.innerHTML = `
                <h2>${country.country}</h2>
                <p>Population: ${country.population}</p>
                <p>Reported Cases Today: ${country.todayCases}</p>
                <p>Total Reported Cases: ${country.cases}</p>
                <p>Deaths: ${country.deaths}</p>
                <p>Recovered: ${country.recovered}</p>
            `;
        }
