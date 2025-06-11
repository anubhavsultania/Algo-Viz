import React, { useState } from "react";
import {
  ChevronRight,
  Play,
  Code2,
  Github,
  Linkedin,
  ArrowDown,
} from "lucide-react";

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const visualizerCategories = [
    {
      id: "sorting",
      title: "Sorting Algorithms",
      icon: "⚡",
      description:
        "Visualize how different sorting algorithms work step by step",
      algorithms: [
        "Bubble Sort",
        "Quick Sort",
        "Merge Sort",
        "Heap Sort",
        "Selection Sort",
      ],
      color: "border-green-500",
    },
    {
      id: "pathfinding",
      title: "Pathfinding Algorithms",
      icon: "🎯",
      description:
        "Watch pathfinding algorithms navigate through mazes and grids",
      algorithms: [
        "A* Algorithm",
        "Dijkstra",
        "BFS",
        "DFS",
        "Greedy Best-First",
      ],
      color: "border-blue-500",
    },
    {
      id: "tree",
      title: "Tree Algorithms",
      icon: "🌳",
      description: "Explore binary trees, BSTs, and tree traversal algorithms",
      algorithms: [
        "BST Operations",
        "AVL Trees",
        "Tree Traversals",
        "Red-Black Trees",
      ],
      color: "border-purple-500",
    },
    {
      id: "graph",
      title: "Graph Algorithms",
      icon: "🔗",
      description: "Understand complex graph algorithms and their applications",
      algorithms: [
        "Topological Sort",
        "Minimum Spanning Tree",
        "Strongly Connected Components",
      ],
      color: "border-orange-500",
    },
  ];

  const scrollToCategories = () => {
    document
      .getElementById("categories")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="text-green-600" size={28} />
              <span className="text-xl font-bold text-gray-900">
                AlgoVisualizer
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn Algorithms Through
            <span className="text-green-600"> Interactive Visualization</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master data structures and algorithms by watching them work in
            real-time. Perfect for students, developers, and anyone preparing
            for technical interviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToCategories}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Play size={18} />
              Start Learning
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
              View on GitHub
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToCategories}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </section>

      {/* Algorithm Categories */}
      <section id="categories" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose an Algorithm Category
            </h2>
            <p className="text-lg text-gray-600">
              Select a category to start visualizing algorithms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visualizerCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-white rounded-lg border-2 border-gray-200 hover:${category.color} p-6 cursor-pointer transition-all duration-200 hover:shadow-md`}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>

                    {hoveredCard === category.id && (
                      <div className="space-y-1 mb-4">
                        {category.algorithms.slice(0, 3).map((algo) => (
                          <div
                            key={algo}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <ChevronRight size={14} />
                            {algo}
                          </div>
                        ))}
                        {category.algorithms.length > 3 && (
                          <div className="text-sm text-gray-400">
                            +{category.algorithms.length - 3} more...
                          </div>
                        )}
                      </div>
                    )}

                    <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                      Explore {category.title}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use AlgoVisualizer?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Watch algorithms execute step-by-step with controls to pause,
                speed up, or slow down.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Code Examples
              </h3>
              <p className="text-gray-600">
                See the actual code implementation alongside the visual
                representation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interview Ready
              </h3>
              <p className="text-gray-600">
                Perfect for technical interview preparation and understanding
                algorithm complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="text-green-500" size={24} />
            <span className="text-xl font-bold">AlgoVisualizer</span>
          </div>

          <p className="text-gray-400 mb-6">
            Built with ❤️ by <span className="text-white">Ayushman Saxena</span>{" "}
            @ NIT Rourkela
          </p>

          <div className="flex justify-center gap-6 mb-6">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Github size={18} />
              GitHub
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
              LinkedIn
            </button>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Made for learning • Open Source • Free Forever
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
