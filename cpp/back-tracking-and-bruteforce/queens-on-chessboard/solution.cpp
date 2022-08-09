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
int n=8;
int current[8];
int arr[8][8];
int cnt=0;

bool check(int level, int col){
    for(int i=0;i<level;i++){
        if(abs(level-i)==abs(col-current[i])||current[i]==col||arr[level][col]==1) return false;
    }
    return true;
}

void rec(int level){
    if(level==n){
        cnt++;
        return;
    }
    for(int i=0;i<n;i++){
        if(check(level, i)){
            current[level]=i;
            rec(level+1);
            current[level]=0;
        }
    }
}

void solve(){
    for(int i=0;i<8;i++){
        for(int j=0;j<8;j++){
        char temp;
        cin>>temp;
        if(temp=='.') arr[i][j]=0;
        if(temp=='*') arr[i][j]=1;
        }
    }
    rec(0);
    cout<<cnt<<endl;
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
//    int _t;cin>> _t; while(_t--)
    solve();
}
