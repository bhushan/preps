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
string s3;
int n1,n2,n3;

int dp[110][110][110];
int rec(int i, int j, int k){
    if(i>=n1 || j>=n2||k>=n3) return 0;
    if(dp[i][j][k]!=-1) return dp[i][j][k];
    int ans=0;
    if(s1[i]==s2[j] && s2[j]==s3[k]) {ans = 1+ rec(i+1,j+1,k+1);}
    else{
        ans = max({rec(i+1,j,k),
                rec(i,j+1,k),
                rec(i,j,k+1)
                });
    }
    return dp[i][j][k]=ans;
}

void solve(){
    cin>>s1>>s2>>s3;
    n1=s1.length();
    n2=s2.length();
    n3=s3.length();
    memset(dp,-1,sizeof(dp));
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
