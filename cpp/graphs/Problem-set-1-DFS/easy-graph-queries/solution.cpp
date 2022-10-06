#include <stack>
#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
#include <map>
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
map<int,int> mp;
vector<int> component;
int n, m, q;

void dfs(int node, int parentNode, int componentNo){
    visited[node]=1;
    component[node]=componentNo;
    for(auto child: graph[node]){
        if(child==parentNode){continue;}
        if(visited[child]==0){
            mp[componentNo]++;
            component[child]=componentNo;
            dfs(child,node,componentNo);
        }
    }
    visited[node]=2; 
}

void solve(){
    cin>>n>>m>>q;
    graph.resize(n+1);
    visited.assign(n+1, 0);
    component.assign(n+1,-1);
    for(int i=0; i<m; i++){
        int node1, node2;
        cin>>node1>>node2;
        graph[node1].push_back(node2);
        graph[node2].push_back(node1);
    }
    int componentNo=1;
    for(int i=1; i<n+1; i++){
        if(visited[i]==0){
            component[i]=componentNo;
            mp[componentNo]++;
            dfs(i, -1, componentNo);
            componentNo++;
        }
    }
    for(int i=0; i<q; i++){
        int qtype;
        cin>>qtype;
        if(qtype==1){
            int qnode1;
            cin>>qnode1;
            cout<<mp[component[qnode1]]<<endl;
        }
        if(qtype==2){
            int qnode2, qnode3;
            cin>>qnode2>>qnode3;
            string s = (component[qnode2]==component[qnode3]?"YES":"NO");
            cout<<s<<endl;
        }
    }
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
