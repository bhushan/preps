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
int md = 10e9+7;
int add_mod(int a,int b){ return ((a%md + b%md)+md)%md;}
//input that works across all functions
int n,m,k;
int arr[205][205];

int dp[205][205][405];
int rec(int x, int y, int cdone){
    if(cdone>k) return 0;
    if(x==n||y==m) return 0;
    if(x==n-1 && y==m-1) {
             if(arr[x][y] && cdone >=k)
                  return 0;
             else
                  return 1;    
    
    }
    if(dp[x][y][cdone]!=-1) return dp[x][y][cdone];
    int ans=0;
    //base case
    
    // if non blocked
    if(arr[x][y]==0) ans = add_mod(rec(x+1, y, cdone), rec(x,y+1,cdone));
    // if blocked
    if(arr[x][y]==1) ans = add_mod(rec(x+1, y, cdone+1), rec(x,y+1,cdone+1));

    return dp[x][y][cdone]=ans%md;
}



void solve(){
    cin>>n>>m>>k;
    for(int i=0; i<n;i++){
        for(int j=0; j<m;j++){
            cin>>arr[i][j];
        }
    }
    for(int i=0; i<n+5; i++){
        for(int j=0; j<m+5; j++){
            for(int ch=0; ch<k+5;ch++){
                dp[i][j][ch]=-1;
            }
        }
    }
    cout<<rec(0,0,0)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
