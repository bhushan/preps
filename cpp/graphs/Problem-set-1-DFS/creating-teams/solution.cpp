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
int n,m;
vector<int> visited;
vector<int> team;
int isPossible=1;

void dfs(int node, int parentNode, int parentTeam){
    //watch(node);watch(parentNode);watch(parentTeam);watch(isPossible);cout<<endl;
    visited[node]=1;
    team[node]=1-parentTeam;
    for(auto child: graph[node]){
        if(child==parentNode) {continue;}
        if(visited[child]==0){
            dfs(child, node, team[node]);
        }
        if(visited[child]!=0){
            if(team[child]==team[node]){
                isPossible=0;
            }
        }
    }
    visited[node]=2;
}
void solve(){
    cin>>n>>m;
    graph.resize(n+1);
    visited.assign(n+1,0);
    team.assign(n+1, -1);
    for(int i=0; i<m;i++){
        int node1,node2;
        cin>>node1>>node2;
        graph[node1].push_back(node2);
        graph[node2].push_back(node1);
    }
    for(int i=1; i<n+1;i++){
        if(visited[i]==0){
            team[i]=1;
            dfs(i,-1, 1);
        }
    }
    string s = (isPossible?"YES":"NO");
    cout<<s<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
