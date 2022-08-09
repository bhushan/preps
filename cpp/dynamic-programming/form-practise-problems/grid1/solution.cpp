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
#define MP make_pair
int md=(int)1e9+7;
//input that works across all functions
int h,w;
int grid[1010][1010];

int dp[1010][1010];
int rec(int li, int lj){
    if(MP(li,lj)==MP(h-1,w-1)) return 1;
    if(li==h||lj==w) return 0;

    if(dp[li][lj]!=-1) return dp[li][lj];
   
    
    int ans=0;
    if(grid[li+1][lj])
        ans += rec(li+1,lj)%md;
    if(grid[li][lj+1])
        ans = (ans+ rec(li,lj+1))%md;
    return dp[li][lj]=ans;

}
void solve(){
    cin>>h>>w;
    for(int i=0;i<h;i++) {
        for(int j=0;j<w;j++){
            dp[i][j]=-1;
            char temp;
            cin>>temp;
            if(temp=='.') grid[i][j]=1;
            if(temp=='#') grid[i][j]=0;
        }
    }

    cout<<rec(0,0)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
