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
vector<string> words;
int nWords; // number of words
vector<int> cost;

int dp[100100][2];
int rec(int index, int isPrevReverse){
    if(index==nWords) return 0;
    if(dp[index][isPrevReverse]!=-1) return dp[index][isPrevReverse];

    int ans=1e18;
    string prev = words[index-1];
    string curr = words[index];
    string currRev = curr;
    reverse(currRev.begin(),currRev.end());
    if(isPrevReverse) {
        reverse(prev.begin(),prev.end());
    }
    if(curr.compare(prev)>0) {
        ans = min(ans, rec(index+1,0));
    }
    if(currRev.compare(prev)>0){
        ans = min(ans, cost[index]+ rec(index+1,1));
    }
    return dp[index][isPrevReverse] = ans;
}


void solve(){
    cin>>nWords;
    words.resize(nWords);
    cost.resize(nWords);
    for(int i=0; i<nWords;i++){
        cin>>cost[i];
    }
    
    for(int i=0; i<nWords;i++){
        cin>>words[i];
    }
    memset(dp,-1,sizeof(dp));
    int ans=1e18;
    if(nWords>1) {
        ans=min({ans,rec(1,0), cost[0]+rec(1,1)});
    }
    if(nWords==1) {
        ans=0;
    }
    if(ans>1e15){
        ans = -1;
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
