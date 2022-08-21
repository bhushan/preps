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
int n,capacity;
int w[100100];
int v[100100];

int dp[101][100100];
int rec(int level, int c_left){
    // pruning
    if(c_left<0) return INT_MIN;

    // basecase
    if(level==n) return 0;
    // cache check
    if(dp[level][c_left]!=-1) return dp[level][c_left];
    
    // compute
    int ans = max(v[level]+rec(level+1, c_left-w[level]), rec(level+1,c_left));
    // save and return
    return dp[level][c_left]=ans;

} 

void solve(){
    cin>>n>>capacity;
    for(int i=0;i<n;i++) cin>>w[i]>>v[i];
    for(int i=0;i<n;i++) {for(int j=0;j<capacity+10;j++) dp[i][j]=-1;}
    
    cout<<rec(0,capacity)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
