#include <stack>
#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
using namespace std;
#include <math.h>
#define int long long
#define float long double
#define endl '\n'
#define watch(x) cout<<(#x)<<" - "<< (x) << " ";
 
int md = 1e9+7;
//input that works across all functions
vector<vector<int> > graph;
vector<int> visited;
int n,m;
void dfs(int node){
    visited[node]=1;
    for(auto child:graph[node]){
        if(!visited[child]){
            dfs(child);
        }
    }
}

void solve(){
    cin>>n>>m;
    graph.resize(n+1);
    visited.assign(n+1,0);
    for(int i=0; i<m;i++){
        int node1, node2;
        cin>>node1>>node2;
        graph[node1].push_back(node2);
        graph[node2].push_back(node1);
    }
    int componentNo=0;
    for(int i=1; i<n+1; i++){
        if(!visited[i]){
            componentNo++;
            dfs(i);
        }
    }
    cout<<componentNo-1<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
