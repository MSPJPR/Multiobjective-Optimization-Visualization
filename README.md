# Multiobjective-Optimization-Visualization

website: https://mspjpr.github.io/Multiobjective-Optimization-Visualization/

This project focuses on visualizing and running multiobjective optimization algorithms through a simple web-based interface. The primary aim is to allow users to understand and experiment with evolutionary multiobjective optimization techniques, such as NSGA-II and VEGA, through interactive simulations.

Features:

1. Multiobjective Optimization Algorithms:

The project supports multiple algorithms including NSGA-II and VEGA, which are popular for solving multiobjective optimization problems using evolutionary methods.

Users can select the algorithm, configure parameters like population size and mutation rate, and run the simulation to observe the algorithm's progress.



2. Interactive Controls:

Users can interact with the simulation by adjusting parameters such as the algorithm type, population size, and mutation rate via dropdowns and input fields.

A "Run Algorithm" button triggers the optimization process, while a "Download Results" button allows users to save the simulation results.



3. Population Visualization:

The population of solutions is displayed on a 2D canvas where each solution is represented as a point. This allows users to visually track the progress of the population as it evolves towards a Pareto-optimal front.

As the algorithm progresses, the population's distribution on the canvas changes, showing the convergence of solutions toward the optimal set.



4. Metrics Display:

The simulation updates key metrics such as the current generation number and the population size, providing real-time feedback on the optimization process.



5. Performance Metrics:

The project is designed to simulate the behavior of multiobjective evolutionary algorithms, but could be expanded to include more performance metrics or convergence criteria for deeper analysis.



6. Downloadable Results:

Users can download the results of the simulation, including details about the number of generations, population size, and other relevant parameters, in a plain text format for further analysis.




Technologies:

Frontend: HTML, CSS, JavaScript

Canvas API: For visualizing the population and tracking the progress of optimization.


This project aims to provide an intuitive and interactive platform for exploring multiobjective optimization algorithms, making it accessible even for users with minimal prior knowledge of optimization techniques.
