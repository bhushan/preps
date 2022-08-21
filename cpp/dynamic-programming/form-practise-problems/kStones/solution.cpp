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
int arr[110];

int dp[100100];
int rec(int x){
    if(x==0) return 0;
    if(dp[x]!=-1) return dp[x];
    int ans=0;
    for(int i=0;i<n;i++) {
        if(arr[i]<=x && !rec(x-arr[i])){
            ans=1;
            break;
        }
    }
    return dp[x]=ans;
}

void solve(){
    int x;
    cin>>n>>x;
    for(int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<=x;i++) dp[i]=-1;
    int ans=rec(x);
    
    if(ans==0) cout<<"Second"<<endl;
    else cout<<"First"<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
