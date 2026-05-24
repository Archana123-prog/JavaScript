class Solution {

    public int maxJumps(int[] arr, int d) {
        int n = arr.length;

        List<List<Integer>> graph = new ArrayList<>();

        for (int i = 0; i < n; i++)
            graph.add(new ArrayList<>());

        // build graph
        for (int i = 0; i < n; i++) {

            // scan right
            for (int x = 1; x <= d; x++) {
                int j = i + x;

                if (j >= n) break;

                if (arr[j] >= arr[i]) break;

                graph.get(i).add(j);
            }

            // scan left
            for (int x = 1; x <= d; x++) {
                int j = i - x;

                if (j < 0) break;

                if (arr[j] >= arr[i]) break;

                graph.get(i).add(j);
            }
        }

        int[] dp = new int[n];
        int ans = 1;

        for (int i = 0; i < n; i++) {
            ans = Math.max(ans, dfs(i, graph, dp));
        }

        return ans;
    }

    private int dfs(int node,
                    List<List<Integer>> graph,
                    int[] dp) {

        if (dp[node] != 0)
            return dp[node];

        int best = 1;

        for (int nei : graph.get(node)) {
            best = Math.max(best,
                    1 + dfs(nei, graph, dp));
        }

        return dp[node] = best;
    }
}