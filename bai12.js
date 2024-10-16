function findMedianSortedArrays(nums1, nums2) {
    // Đảm bảo nums1 là mảng ngắn hơn
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    
    let low = 0;
    let high = m;
    
    while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
      
      const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
      const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
      
      const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
      const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];
      
      if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
        if ((m + n) % 2 === 0) {
          // Tổng số phần tử chẵn
          return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
        } else {
            
          // Tổng số phần tử lẻ
          return Math.max(maxLeftX, maxLeftY);
        }
      } else if (maxLeftX > minRightY) {
        // Di chuyển về bên trái trong nums1
        high = partitionX - 1;
      } else {
        // Di chuyển về bên phải trong nums1
        low = partitionX + 1;
      }
    }
    
    throw new Error("Mảng đầu vào không hợp lệ");
  }
  
  // Kiểm tra với ví dụ đã cho
  const nums1 = [1, 3];
  const nums2 = [2];
  console.log(findMedianSortedArrays(nums1, nums2));