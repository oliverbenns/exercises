// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

use std::cmp::PartialEq;
use std::marker::Copy;

pub fn remove_duplicates<T: PartialEq + Copy>(data: &mut Vec<T>) -> u8 {
  let mut high_index = 0;

  if data.len() == 0 {
    return 0
  }

  for i in 1..data.len() {
    if data[high_index] != data[i] {
      high_index += 1;
      data[high_index] = data[i];
    }
  }

  return (high_index as u8) + 1;
}
