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
int arr[3010];

int saved[3010][3010];
int dp[3010][3010];
int rec(int l, int r){
    if(l==r) return arr[l];

    if(saved[l][r]!=-1) return dp[l][r];
    int ans=max(arr[l]-rec(l+1,r),arr[r]-rec(l,r-1));
    saved[l][r]=1;
    return dp[l][r]=ans;
}

void solve(){
    cin>>n;
    for (int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<n;i++) 
        for(int j=0;j<n;j++) saved[i][j]=-1; 
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
