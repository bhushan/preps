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
int a[100100];
int b[100100];
int c[100100];
int dp[100100][3];

int rec(int level,int prev){
    // pruning
       
    // base case
       if(level==n){
            return 0;
       }

    // cache check
    if(dp[level][prev]!=-1) return dp[level][prev];
    // compute
    int ans=-1;
    for(int i=0;i<3;i++){
        
        if(i==prev) continue;
        int temp;
        if(i==0) temp=a[level];
        if(i==1) temp=b[level];
        if(i==2) temp=c[level];
        ans=max(ans,temp+rec(level+1,i));
    }
    // save and return
    return dp[level][prev]=ans;

}

void solve(){
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>a[i];
        cin>>b[i];
        cin>>c[i];
    }
    for(int i=0;i<n;i++) {for(int j=0;j<3;j++) dp[i][j]=-1;}
    // memset(dp,-1,sizeof(dp));
    cout<<max({rec(0,0),rec(0,1),rec(0,2)})<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
