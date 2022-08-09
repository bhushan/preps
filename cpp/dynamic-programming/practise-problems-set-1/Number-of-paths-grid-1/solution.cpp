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
const int md=1e9+7;

//input that works across all functions
int n,m;
int grid[1010][1010];
int dp[1010][1010];

void solve(){
    cin>>n>>m;
    for(int i=1;i<n+1;i++){
        for(int j=1;j<m+1;j++){
        cin>>grid[i][j];
        dp[i][j]=0;
        }
    }
    
    dp[1][1]=1;
    if(grid[1][1]==1||grid[n][m]==1) {cout<<0<<endl;return;}
    for(int i=1;i<n+1;i++){
        for(int j=1;j<m+1;j++){
            if(i==1 && j==1) continue;
            if(grid[i][j]==1) {dp[i][j]=0;continue;}
            dp[i][j]=(dp[i-1][j]%md+dp[i][j-1]%md)%md;
        }
    }
    cout<<dp[n][m]<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}

