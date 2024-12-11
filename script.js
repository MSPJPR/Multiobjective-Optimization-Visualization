let canvas = document.getElementById('paretoCanvas');
let ctx = canvas.getContext('2d');
let generationCount = 0;

function runAlgorithm() {
    generationCount = 0;
    const algorithm = document.getElementById('algorithm').value;
    const populationSize = parseInt(document.getElementById('populationSize').value);
    const mutationRate = parseFloat(document.getElementById('mutationRate').value);

    document.getElementById('currentPopulationSize').innerText = populationSize;
    document.getElementById('generationCount').innerText = generationCount;

    let population = initializePopulation(populationSize);

    if (algorithm === 'nsga2') {
        nsga2(population, mutationRate);
    } else if (algorithm === 'vega') {
        vega(population, mutationRate);
    }
}

function initializePopulation(size) {
    let population = [];
    for (let i = 0; i < size; i++) {
        population.push({
            x: Math.random(),
            y: Math.random(),
            fitness: [0, 0]
        });
    }
    return population;
}

function nsga2(population, mutationRate) {
    let interval = setInterval(() => {
        generationCount++;
        population = evolvePopulation(population, mutationRate);
        drawPopulation(population);

        document.getElementById('generationCount').innerText = generationCount;

        if (generationCount >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

function vega(population, mutationRate) {
    let interval = setInterval(() => {
        generationCount++;
        population = evolvePopulation(population, mutationRate);
        drawPopulation(population);

        document.getElementById('generationCount').innerText = generationCount;

        if (generationCount >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

function evolvePopulation(population, mutationRate) {
    return population.map(individual => {
        if (Math.random() < mutationRate) {
            individual.x += (Math.random() - 0.5) * 0.1;
            individual.y += (Math.random() - 0.5) * 0.1;
        }
        return individual;
    });
}

function drawPopulation(population) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    population.forEach(individual => {
        let x = individual.x * canvas.width;
        let y = individual.y * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function downloadResults() {
    let data = `Generation: ${generationCount}\n`;
    let populationSize = document.getElementById('populationSize').value;
    data += `Population Size: ${populationSize}\n`;

    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'results.txt';
    a.click();
    URL.revokeObjectURL(url);
}
