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
int n,m,k;
int mt[101][101];
int dp[101][101][11];
int rec(int x, int y, int rem){
    if(x==n && rem==0) return 0;
    if(x>=n||y>=m||x<0||y<0) return -1e18;
    if(dp[x][y][rem]!=-1) return dp[x][y][rem];
    int ans=-1e18;
    ans=max({ans, 
            mt[x][y] + rec(x+1,y+1, (rem+mt[x][y])%k),
            mt[x][y] + rec(x+1,y-1,(rem+mt[x][y])%k)
            });
    return dp[x][y][rem]=ans;
}


void solve(){
    cin>>n>>m>>k;
    for(int i=0;i<n;i++){
        string str;
        cin>>str;
        for(int j=0;j<m;j++){
            mt[i][j]=str[j]-'0';
        }
    }
    for(int i=0; i<n; i++){
        for(int j=0; j<m;j++){
            for(int ch=0; ch<k; ch++){
                dp[i][j][ch]=-1;
            } 
        }
    }
    int ans=-1e18;
    for(int j=0; j<m; j++){
        ans=max(ans, rec(0,j,0));
    }
    if(ans<0) ans=-1;
    cout<<ans<<endl;

}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
