class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();

        for(const string of strs) {
            const sortedString = string.split("").sort().join("");

            if(!result.has(sortedString)) {
                result.set(sortedString, [])
            };

            result.get(sortedString).push(string);
        }

        return Array.from(result.values());
    }
}
