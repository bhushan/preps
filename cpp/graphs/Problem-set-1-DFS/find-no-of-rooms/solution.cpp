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
int dx[]={1,0,-1,0};
int dy[]={0,-1,0,1};
int mp[1000][1000];
int visited[1000][1000];
int m,n;
bool check(int x, int y){
    if(x>=m||x<0||y>=n||y<0||mp[x][y]==0||visited[x][y]) return 0;
    return 1;
}
int dfs(int x, int y){
   visited[x][y]=1;
   for(int i=0; i<4; i++){
       int nx = x+dx[i];
       int ny = y+dy[i];
       if(check(nx,ny)){
           dfs(nx,ny);
       }
   } 
   visited[x][y]=2;
}
void solve(){
    cin>>m>>n;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            char temp;
            cin>>temp;
            if(temp=='#') mp[i][j]=0;
            else if(temp=='.') mp[i][j]=1;
            else throw invalid_argument("Invalid_Input");
        }
    }
    int rooms=0;
    for(int i=0;i<m;i++){
        for(int j=0; j<n;j++){
            if(mp[i][j]==1&&!visited[i][j]){
                rooms++;
                dfs(i,j);
            }
        }
    }
    cout<<rooms<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
