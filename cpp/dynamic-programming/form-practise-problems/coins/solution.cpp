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
float p[3010]; 

float dp[3000][6010];
float rec(int level, int d_heads){
    if(d_heads<=0 && level==n) return 0.0;
    if(level==n) return 1;
    // cache check
    if(d_heads>=0) 
    if(dp[level][d_heads]!=-1) return dp[level][d_heads];
    if(d_heads <0)
        if(dp[level][6010-d_heads]!=-1) return dp[level][6010-d_heads];
    float ans=p[level]*rec(level+1,d_heads+1)+(1-p[level])*rec(level+1,d_heads-1);
    if(d_heads<0) return dp[level][6010-d_heads]=ans;
    return dp[level][d_heads]=ans;

}
void solve(){
    cin>>n;
    for(int i=0;i<n;i++) cin>>p[i];
    for(int i=0;i<n;i++) for(int j=-n;j<n;j++) {
        if(j<0) dp[i][6010-j] = -1;
        if(j>=0)dp[i][j]=-1;
    }
    cout<<fixed<<setprecision(10)<<rec(0,0)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
