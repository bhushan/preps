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
int n,m,k;
int arr[205][205];
int add(int x, int y) {
    return (x%md + y%md)%md;
}

int dp[205][205][205];
int rec(int x, int y, int rdone){
    if(rdone>k) return 0;
    if(x==n||y==m) return 0;
    if(arr[x][y]==1) return 0;
    if(x==n-1 && y==m-1) return 1;

    if(dp[x][y][rdone]!=-1) return dp[x][y][rdone];

    int ans=0;
    ans = add(rec(x+1,y,0), rec(x,y+1,rdone+1));
    return dp[x][y][rdone]=ans;
}

void solve(){
    cin>>n>>m>>k;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin>>arr[i][j];
        }
    }
    for(int i=0; i<n+3; i++){
        for(int j=0; j<m+3;j++){
            for(int r=0;r<k+3;r++){
                dp[i][j][r]=-1;
            }
        }
    }
    cout<<rec(0,0,0)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
