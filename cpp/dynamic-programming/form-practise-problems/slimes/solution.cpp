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
int n;
int arr[600];
int dp[600][600];
int rec(int l, int r){
    if(l==r) return arr[l];

    if(dp[l][r]!=-1) return dp[l][r];
    int ans=INT_MAX;
    for (int i=l; i<r;i++) ans = min(ans, rec(l,i)+rec(i+1,r));
    return dp[l][r]=ans;
}
void solve(){
    cin>>n;
    for(int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<n;i++) for(int j=0; j<n; j++) dp[i][j]=-1;
    cout<<rec(0,n-1)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
