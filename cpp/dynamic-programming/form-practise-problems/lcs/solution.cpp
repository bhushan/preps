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
#define MP make_pair

//input that works across all functions
string a;
string b; 

vector<int> back[3030][3030];
int dp[3030][3030];
int rec(int level1, int level2){
    // pruning
    
    // base case
    if(level1==a.length()||level2==b.length()) return 0;
    // cache check
    if(dp[level1][level2]!=-1) return dp[level1][level2];
    // compute
    int ans = 0;
    vector<int> path ;
    if(a[level1]==b[level2]){
        path.push_back(1);
        ans= 1+rec(level1+1,level2+1);
    }
    else{
        if(rec(level1+1,level2)>=rec(level1,level2+1)) path.push_back(2);
        if(rec(level1+1,level2)<=rec(level1,level2+1)) path.push_back(3);
        ans= max(rec(level1+1,level2),rec(level1,level2+1));
    }
    // save and return
    back[level1][level2]=path;
    cout<<level1<<" "<<level2<<" "<<ans<<endl;
    return dp[level1][level2]=ans;
}

int requiredAns;
vector<char> vc;
vector<vector<char> > solutions;
void generate(int level1, int level2){
    if(level1==a.length()||level2==b.length()){
        if(requiredAns==vc.size()){
            solutions.push_back(vc);
        }
        return;
    }
    for(auto v: back[level1][level2]){
    if(v==1) {
        vc.push_back(a[level1]);
        generate(level1+1,level2+1);
        vc.pop_back();
        return;
    }

    if(v==2) generate(level1+1,level2);
    if(v==3) generate(level1,level2+1);
    }
}

void generateSolution(){
    for(int i=0;i<a.length();i++){ for(int j=0;j<b.length();j++) {
        cout<<"{";
        for (auto v: back[i][j]){
            cout<<v;
        }
        cout<<"}";
    }
        cout<<endl;
    }
  generate(0,0);
  for(auto v: solutions){
    string solution(v.begin(),v.end());
    cout<<solution<<endl;  
  } 
}
void solve(){
    cin>>a;
    cin>>b;
    for(int i=0;i<a.length();i++) for(int j=0;j<b.length();j++) {
        dp[i][j]=-1;
    }
    cout<<rec(0,0)<<endl;
    requiredAns=rec(0,0);
    generateSolution();
}


signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
