#include <stack>
#include <iostream>
#include <map>
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
vector<vector<int> > all_permutations;
vector<int> current_permutation;
map<int,int> mp;



void rec(int level){
    if(level==n){
        all_permutations.push_back(current_permutation);
        return;
    }
    for(auto v: mp){
        if(v.second !=0){
            current_permutation.push_back(v.first);
            mp[v.first]--;
            rec(level+1);
            current_permutation.pop_back();
            mp[v.first]++;
        }
    }
}
void solve(){
    cin>>n;
    for(int i=0;i<n;i++){
        int temp;
        cin>>temp;
        mp[temp]++;
    }
    rec(0);
    for(auto v: all_permutations){
        for(int i=0;i<v.size();i++){
            cout<<v[i]<<" ";
        }
        cout<<endl;
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
