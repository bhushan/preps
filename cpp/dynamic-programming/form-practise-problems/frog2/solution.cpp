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
int n,k;
int arr[100100];
int dp[100100];


int rec(int level){
    // pruning
    if(level<0){
        return 0;
    }
    
    // base case
    if(level==0){
        return dp[level]=0;
    }
    // cache check
    if(dp[level]!=-1) return dp[level];
    
    // compute
    int ans = INT_MAX; 
    for(int i = 1; i<=k;i++){
        if(level-i<0) continue;
        ans = min(ans, rec(level-i)+abs(arr[level]-arr[level-i]));
    }
    // save and return
    return dp[level]=ans;
}

void solve(){
    cin>>n>>k;
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    memset(dp,-1,sizeof(dp));
    cout<<rec(n-1)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
