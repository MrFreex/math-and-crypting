export default {
    phi(n) {
        // return Greater Common Denominator of two given numbers
        function gcd(a, b) {
          if (a === 0) {
            return b;
          }
      
          return gcd(b % a, a);
        }
      
        // init
        var result = 1;
      
        // walk through all integers up to n
        for (let i = 2; i < n; i++) {
          if (gcd(i, n) === 1) {
            result++;
          }
        }
      
        return result;
      }
}