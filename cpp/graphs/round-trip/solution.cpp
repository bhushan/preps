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
//graph --> gp
vector<vector<int> > gp;
int n,m;

vector<int> par;
vector<int> visited;
int is_cycle=0;

void dfs(int node, int par){
    visited[node]=1;
    
    for(int v:gp[node]){
        if(v==par) continue; 
        if(visited[v]==0){
            dfs(v, node);
        }
        if(visited[v]==1){
            is_cycle=1;
        }
        if(visited[v]==2){
            // cross node 
        }
    }
    visited[node]=2;
}

void solve(){
    cin>>n>>m;
    gp.resize(n+1);
    par.assign(n+1, -1);
    visited.assign(n+1,0);
    for(int i=0; i<m; i++){
        int node1, node2;
        cin>>node1>>node2;
        gp[node1].push_back(node2);
        gp[node2].push_back(node1);
    }
    for(int i=1; i<n+1;i++){
        if(visited[i]==0)
        {dfs(i,-1);}
    }
    string s = (is_cycle==1?"YES":"NO");
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
