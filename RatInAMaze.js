help(i, j, n, arr, path, ans) {
    if(i<0 || j<0 || i===n || j===n || arr[i][j]===0){
        return;
    } else if(i==n-1 || j==n-1) {
        ans.push(path);
        return;
    } else {
        arr[i][j] = 0;
        // DOWN
        path.push('D');
        help(i+1, j, n, arr, path, ans);
        path.pop();
        
        // LEFT
        path.push('L');
        help(i, j-1, n, arr, path, ans);
        path.pop();
        
        // RIGHT
        path.push('R');
        help(i+1, j, n, arr, path, ans);
        path.pop();
        
        // UP
        path.push("U");
        help(i-1, j, n, arr, path, ans);
        path.pop();
        
        arr[i][j] = 1;
    }
    
}