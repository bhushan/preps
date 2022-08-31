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
string s;
int n;
int changes;
int m;
int mv[27][27];
vector<int> vc;



int dp[105][27][105];
int rec(int level, int prev, int cleft){
    if(cleft<0) return -1e18;
    if(level==n) return 0;
    if(dp[level][prev][cleft]!=-1) return dp[level][prev][cleft];
    int ans=-1e18;
    for(int i=0; i<26; i++){
        ans = max(ans, mv[prev][i] + rec(level+1, i, (vc[level]==i?cleft:cleft-1)));
    }
    return dp[level][prev][cleft]=ans;
}
void solve(){
    cin>>s>>changes;
    n = s.length();
    vc.resize(n);
    for(int i=0; i<n;i++){
        vc[i]=s[i]-'a';
    }
    cin>>m;
    memset(mv, 0, sizeof(mv));
    for(int i=0; i<m; i++){
        char a,b;
        int cost;
        cin>>a>>b;
        cin>>cost;
        mv[a-'a'][b-'a']=cost;
    }
    for(int i=0; i<n;i++){
        for(int j=0; j<26;j++){
            for(int k=0; k<changes+5; k++){
                dp[i][j][k]=-1;
            }
        }
    }
    int ans=-1e18;
    for(int i=0; i<26; i++){
        ans = max(ans, rec(1,i,(vc[0]==i?changes:changes-1)));
    }
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
