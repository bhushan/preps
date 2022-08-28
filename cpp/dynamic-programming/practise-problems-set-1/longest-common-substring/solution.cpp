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
string s1;
string s2;
int n1,n2;

int dp[1010][1010];
int rec(int r1,int r2){
   if(r1<0||r2<0) return 0;
   if(dp[r1][r2]!=-1) return dp[r1][r2];
    int ans=0;
    if(s1[r1]==s2[r2]) {
        ans=1+rec(r1-1,r2-1);
    }else{
        ans=0;
    }
    return dp[r1][r2]=ans;
}

void solve(){
    cin>>s1>>s2;
    n1 = s1.length();
    n2 = s2.length();
    int maxi=0;
    memset(dp,-1,sizeof(dp));
    for(int i=0;i<n1;i++){
        for(int j=0;j<n2;j++){
            maxi=max(maxi,rec(i,j));
        }
    }
    cout<<maxi<<endl;

}



signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
