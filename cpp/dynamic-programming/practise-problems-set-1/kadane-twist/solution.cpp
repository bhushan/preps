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
#define watch(x) cout << (#x) << " is " << (x) << endl
//input that works across all functions
int nArray;
int m;
int lsum[55];
int rsum[55];
int SubSum[55];
int total[55];
vector<int> arr;
vector<int> bigArray;

int dp [250500];

void getInput(int index){
        lsum[index]=INT_MIN;
        rsum[index]=INT_MIN;
        total[index]=INT_MIN;
        SubSum[index]=INT_MIN;
        int l;
        cin>>l;
        arr.resize(l);
        for(int i=0; i<l;i++){
            cin>>arr[i];
        }
        int tot=0;int SubSumHelper=0;
        for(int i=0;i<l;i++){
            tot+=arr[i];
            lsum[index]=max(lsum[index], tot);
            SubSumHelper+=arr[i];
            if(SubSumHelper<arr[i]) {
                SubSumHelper=arr[i];
            }
            SubSum[index]=max(SubSum[index],SubSumHelper);
        }
        total[index]=tot;
        tot=0;
        for(int i=l-1;i>=0;i--){
            tot+=arr[i];
            rsum[index]=max(rsum[index],tot);
        }
}
void solve(){
    cin>>nArray;
    cin>>m;
    for(int i=0;i<nArray;i++){
        getInput(i);
    }

    bigArray.resize(m);
    for(int i=0;i<m;i++){
        cin>>bigArray[i];
        bigArray[i]--;
        int itr=bigArray[i];
        int ans = INT_MIN;
        ans = max({ans,rsum[itr],total[itr]});
        if(i-1>=0) {
            ans = max(ans, dp[i-1]+total[itr]);
        }
        dp[i]=ans;
    }

    int firstIndex = bigArray[0];
    int ans = max({ SubSum[firstIndex], lsum[firstIndex], dp[0]});
    for(int i=1;i<m;i++){
        int itr = bigArray[i];
        ans = max({ans, SubSum[itr], dp[i-1]+lsum[itr], dp[i]});
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
