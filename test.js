// 1부터 50의 자연수 중 짝수를 구하는 함수
const even = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (0 < nums[i] <= 50 && nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
};
