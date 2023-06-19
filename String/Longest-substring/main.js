const lengthOfLongestSubstring = function(s) {
    let result = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = result.indexOf(s[i]);
        if (index !== -1) {
            result = result.slice(index + 1);
        }
        result.push(s[i]);
        max = Math.max(max, result.length);
    }
    return max;
    
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3