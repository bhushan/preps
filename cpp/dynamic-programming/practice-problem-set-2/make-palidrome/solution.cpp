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
string str;
int len;

int dp[1010][1010];
int rec(int l1, int l2){
    
    if(l1==l2) return 0;
    if(l1>l2) return 0;
    
    if(dp[l1][l2]!=-1) return dp[l1][l2];
    int ans=1e18;
    if(str[l1]==str[l2]){
        ans = rec(l1+1,l2-1);
    }else{
        ans = min(ans,1+rec(l1+1,l2));
        ans = min(ans, 1+ rec(l1,l2-1));
    }
    return dp[l1][l2]=ans;
}

void solve(){
    cin>>str;
    len = str.length();
    memset(dp,-1,sizeof(dp));
    cout<<rec(0,len-1)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
