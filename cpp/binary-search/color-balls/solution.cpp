#include<algorithm>
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

//input that works across all functions
int n,k;
map<int,int> freqMap;
bool check(int num){
    int usefulBalls=0;
    for(auto i : freqMap){
        usefulBalls+=min(i.second,num);
    }
    int baskets=usefulBalls/k;
    if(baskets>=num) return true;
    return false;
}

void solve(){
    cin>>n>>k;
    freqMap.erase(freqMap.begin(),freqMap.end());
    for(int i=0;i<n;i++){
        int temp;
        cin>>temp;
        freqMap[temp]++;
    }
    int lo = 0, hi=n/k;
    int ans=0;
    while(lo<=hi){
        int mid = (lo+hi)/2;
        if(check(mid)){
            ans = mid;
            lo=mid+1;     
        }else{
            hi=mid-1;
        }
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
