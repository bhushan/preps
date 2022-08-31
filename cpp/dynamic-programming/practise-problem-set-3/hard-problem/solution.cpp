#include <stack>
#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
#include <map>
using namespace std;
#include <math.h>
#define int long long
#define float long double
#define endl '\n'
#define watch(x) cout<<(#x)<<" - "<< (x) << " ";
 
int md = 1e9+7;
//input that works across all functions
int n;
vector<int> cost;
string s;
vector<int> str;
map<int,int> mp;

int dp[100100][4];
int rec(int level, int state){
    if(state>3) return 1e18;
    if(level==n) return 0;
    
    if(dp[level][state]!=-1) return dp[level][state];
    
    int ans=1e18;
    if(str[level]==mp[state]) {
        ans=min({ans, rec(level+1, state+1), cost[level]+ rec(level+1, state)});
    }else{
        ans=rec(level+1,state);
    }
    return dp[level][state]=ans;
}

void solve(){
    cin>>n;
    cin>>s;
    str.resize(n);
    cost.resize(n);
    for(int i=0; i<n; i++){
        cin>>cost[i];
        str[i]=s[i]-'a';
    }
    mp[0]='h'-'a';
    mp[1]='a'-'a';
    mp[2]='r'-'a';
    mp[3]='d'-'a';
    for(int i=0; i<n; i++){
        for(int j=0; j<4; j++){
            dp[i][j]=-1;
        }
    }
    cout<<rec(0,0)<<endl;

}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int _t;cin>> _t; while(_t--)
    solve();
}
