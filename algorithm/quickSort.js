const nums = [5,2,3,1];

/**
 * 快速排序
 */
function quickSort(nums) {
    const len = nums.length;
    if (len <= 1) {
        return nums;
    }
    const mid = nums[len - 1];
    const leftArr = [];
    const rightArr = [];
    const midArr = []; 
    for(const item of nums) {
        if (item > mid) {
            rightArr.push(item);
        } else if (item < mid) {
            leftArr.push(item);
        } else {
            midArr.push(item);
        }
    }
    return [...quickSort(left), ...midArr, ...quickSort(right)];
}

console.log(quickSort(nums));

/**
 * 原地快排
 * @param {*} nums 
 */
function quickSort2(nums) {

    function swap(nums, i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    function sort(nums, left, right) {
        if (left >= right) {
            return;
        }
        const pivot = partition(nums, left, right);
        sort(nums, left, pivot - 1);
        sort(nums, pivot + 1, right);
    }

    function partition(nums, left, right) {
        const pivot = left;
        let index = left + 1;
        for(let i=index;i<=right;i++) {
            if(nums[i] < nums[pivot]) {
                swap(nums, index, i);
                index++;
            }
        }
        swap(nums, pivot, index - 1);
        return index - 1;
    }

    sort(nums, 0, nums.length - 1);
}

console.log(quickSort2(nums));
