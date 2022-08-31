#include <stack>
#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
using namespace std;
#include <math.h>
#define int long long
#define ll long long
#define float long double
#define endl '\n'

//input that works across all functions
int n, q;
vector<int> arr1;

int dp[110][10100];
int rec(int level, int sneed){
    if(sneed<0) return 0;
    if(level==n && sneed != 0) return 0;

    if(level==n && sneed ==0) return 1;
    if(dp[level][sneed]!=-1) return dp[level][sneed];
    int ans=0;
    ans |= rec(level+1, sneed - arr1[level]);
    ans |= rec(level+1, sneed); 
    return dp[level][sneed] = ans;
}

vector<int> st;
void generateSol(int level, int sneed){
    
    if(level!=n && dp[level][sneed]!=1) throw "invalid_case";
    if(level == n) {
        return;
    }
    if((sneed-arr1[level])>=0 && dp[level+1][sneed-arr1[level]] ==1){
    st.push_back(level);
    generateSol(level+1, sneed-arr1[level]);
    } else{
        generateSol(level+1, sneed);
    }
    
}


vector<vector<int> > subset_queries(vector<int> &arr, vector<int> &queries) {
    // Write code here.
    vector<vector<int> > ans;
    for(auto q : queries){
        st.clear();
        vector<int> stepAns;
        if(rec(0,q)) {
            generateSol(0,q);
        }
        else st.push_back(-1);
        ans.push_back(st);
    }
    
    return ans;
}
void solve() {
    cin >> n >> q;
    arr.resize(n);
    memset(dp,-1,sizeof(dp));
    for (int i = 0; i < n; i++)cin >> arr[i];
    vector<int> queries(q);
    for (int i = 0; i < q; i++)cin >> queries[i];
    auto ans = subset_queries(arr, queries);
    // checker.
    if (ans.size() != q) {
        cout << 101 << endl;
        return;
    }
    for (int i = 0; i < q; i++) {
        auto x = ans[i];
        if (x.size() == 0) {
            cout << 101 << endl;
            continue;
        }
        if (x.size() == 1 && x[0] == -1) {
            cout << -1 << endl;
            continue;
        }
        ll sum = 0, p = -10;
        for (auto y : x) {
            if (y < 0 || y >= n || p >= y ) { // valid 0-indexed.
                sum = -1111;
                break;
            }
            p = y;
            sum += arr[y];
        }
        if (sum == queries[i]) {
            cout << 1 << endl;
        }
        else cout << 101 << endl;
    }
}
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
