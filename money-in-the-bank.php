class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function totalMoney($n) {
      $beginAt = 1;
      $toAdd = 1;
      $totMoney = 0;

      for ($i = 1; $i <= $n; $i++) {
        $totMoney += $toAdd;
        $toAdd++;

        if ($i % 7 === 0) {
          $beginAt++;
          $toAdd = $beginAt;
        }
      }

      return $totMoney;
    }
}
