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
int n;
int st[4][2]; //state transition
int dp[1001100][4];
int rec(int level, int state){
    if(state>3) return 0;
    if(level==0) return 1;

    if(dp[level][state]!=-1) return dp[level][state];
    int ans=0;
    ans += rec(level-1, st[state][0])%md;
    ans += rec(level-1, st[state][1])%md;
    return dp[level][state]=ans%md;
}
void solve(){
    cin>>n;
    st[0][0]=1;st[0][1]=0;
    st[1][0]=1;st[1][1]=2;
    st[2][0]=3;st[2][1]=0;
    st[3][0]=4;st[3][1]=2;
    cout<<rec(n,0)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    memset(dp,-1,sizeof(dp));
    int _t;cin>> _t; while(_t--)
    solve();
}
