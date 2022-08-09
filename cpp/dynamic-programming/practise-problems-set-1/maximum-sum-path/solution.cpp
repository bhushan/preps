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

//input that works across all functions
int n,m;
int arr[1010][1010];

int dp[1010][1010];
int rec(int i, int j){
    if(i==n-1&&j==m-1) return arr[n-1][m-1];
    if(i==n||j==m) return INT_MIN;

    if(dp[i][j]!=-1) return dp[i][j];

    int ans = max(arr[i][j]+rec(i+1,j),arr[i][j]+rec(i,j+1));
    return dp[i][j]=ans;
}

void solve(){
    cin>>n>>m;
    for(int i=0;i<n;i++){ for(int j=0;j<m;j++){
        cin>>arr[i][j];
        dp[i][j]=-1;
    }}
    cout<<rec(0,0)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    
    int _t;cin>> _t; while(_t--)
    solve();
}
