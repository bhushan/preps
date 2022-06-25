#include <algorithm>
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

vector<int> a,b;
int k;
bool check(int num){
    int count=0;
    for(int i=0; i<a.size(); i++){
        count += upper_bound(b.begin(),b.end(),num-a[i]) - b.begin();
       if(count>=k){
          return true;
       } 
    }
    if(count < k){
        return false;
    }
    throw invalid_argument("b");
}
void solve(){
    int n,m;
    cin>>n>>m>>k;
    
    a.resize(n);
    
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    b.resize(m);
    for(int i=0;i<m;i++){
        cin>>b[i];
    }
    if(m>n){
    swap(a,b);
    swap(n,m);
    }
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    int lo=a[0]+b[0], hi =a[n-1]+b[m-1];
    int ans = 0;
    while(lo<=hi){
        
    int mid = (lo+hi)/2;
    if(check(mid)){
            ans = mid;
            hi = mid -1;
            }else{
                lo=mid+1;
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
