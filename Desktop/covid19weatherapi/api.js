window
    .fetch("https://api.covid19api.com/summary")
    .then((data) => {
        data
            .json()
            .then((covid) => {
                console.log(covid.Global);
                let Global = covid.Global;
                document.getElementById("covidblock").innerHTML = `
            <section >
            <div>
            <h4 class="badge badge-danger">totalconfirmed</h4>
            <span>${Global.TotalConfirmed}</span>
            </div>
            <div>
            <h4>newdeaths</h4>
            <span>${Global.NewDeaths}</span>
            </div>
            <div>
            <h4>totaldeaths</h4>
            <span>${Global.TotalDeaths}</span>
            </div>
            <div>
            <h4>newconfirmed</h4>
            <span>${Global.NewConfirmed}</span>
            </div>
            <div>
            <h4>totalrecoverd</h4>
            <span>${Global.TotalRecovered}</span>
            </div>
            </section>
            `;
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));