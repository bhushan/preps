// https://leetcode.com/problems/reconstruct-itinerary/?envType=study-plan-v2&envId=google-spring-23-high-frequency

// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight.
// Reconstruct the itinerary in order and return it.
//
// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
//
// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // Adjacency list (Graph)
    const graph = new Map();

    // Build the graph (unordered)
    for (const [from, to] of tickets) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }

        graph.get(from).push(to);
    }

    // Sort destinations lexicographically (smallest first)
    for (const [key, destinations] of graph) {
        destinations.sort();
    }

    const result = [];

    // DFS Function
    function dfs(airport) {
        const destinations = graph.get(airport) || [];

        while (destinations.length > 0) {
            dfs(destinations.shift());  // Always pick the smallest lexical airport
        }

        result.unshift(airport);  // Postorder insertion
    }

    dfs("JFK");  // Start DFS from "JFK"

    return result;
};


// Time Complexity: o(ElogE) where E is number of edges
// Space Complexity: o(E) where E is number of edges

console.log(findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"]
]));
