
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
string s;
int md = 1e9+7;
int dp[1010][1010];
int rec(int level, int sum){
    
    if(sum<0) return 0;

    if(level==n) return (sum==0?1:0);
    
    if(dp[level][sum]!=-1) return dp[level][sum];
    int ans = 0;
    if(s[level]=='?'){
        ans = (rec(level+1, sum+1)%md + rec(level+1,sum-1)%md)%md;
    }else {
        int nextSum = (s[level]=='('?sum+1:sum-1);
        ans = rec(level+1,nextSum)%md;
    }
    if(ans<0) ans+=md;
    return dp[level][sum]=ans;

}
void solve(){
    cin>>s;
    n = s.length();
    // memset(dp,-1,sizeof(dp));
    for(int i=0;i<n;i++){
        for(int j=0; j<n;j++){
            dp[i][j]=-1;
        }
    }
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
