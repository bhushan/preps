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

int md = 1e9 +7;
//input that works across all functions
int len;
string str;
int prevLoc[150];

int dp[100100];
int rec(int level){
    if(level==-1) return 1;
    if(level==len) return 0;
    if(dp[level]!=-1) return dp[level];
    int ans = (2 * rec(level-1))%md;
    int pIndex = str[level]-'A';
    int pLoc = prevLoc[pIndex];
    if(pLoc !=-1) {
        ans -= rec(pLoc-1);
    }
    if(ans<0) ans= ans+md;
    ans = ans%md;
    prevLoc[pIndex] = level;
    return dp[level]=ans; 
}

void solve(){
    cin>>str;
    len=str.length();
    for(int i=0; i<150;i++) {
        prevLoc[i]=-1;
    }
    memset(dp,-1,sizeof(dp));
    for(int i=0;i<len;i++){
        int temp = rec(i);
    }
    cout<<rec(len-1)<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
