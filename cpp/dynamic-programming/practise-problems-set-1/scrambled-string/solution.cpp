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
string s1, s2;
int dp[42][42][42];
bool rec(int l,int r, int i){
    int j= i+r-l;
    if(l>r||i>j) return false;
    if(l==r) {
        if(s1[l]==s2[i]) return true;
        return false;
    }
    if(dp[l][r][i]!=-1) return dp[l][r][i];
    int ans=false;
    if(s1.substr(l,r-l+1)==s2.substr(i,j-i+1)) return dp[l][r][i]=true;
    for(int k=l;k<r;k++){
        ans |= (rec(l,k,i)&&rec(k+1,r,i+k+1-l));
        // abcde ecdab de abc
        ans |= (rec(l,k,j-(k-l))&&rec(k+1,r,i));
        if(ans) break;
    }
    
    return dp[l][r][i]=ans;
}
void solve(){
    cin>>s1>>s2;
    int len1 = s1.length();
    memset(dp,-1,sizeof(dp));

    if(rec(0,len1-1,0)) cout<<"Yes"<<endl;
    else cout<< "No"<<endl;

}


signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
