function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let left = 0, right = students.length - 1; left <= right; ) {
    let mid = Math.floor((left + right) / 2);

    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
findStudentIndex(students, "John");

// ตอบคำถามตรงนี้จ้า
// O(log n) เพราะในทุกๆรอบการประมวลผล binary search จะทำการลดข้อมูลที่ใช้ลงครึ่งนึงของรอบก่อนหน้า
