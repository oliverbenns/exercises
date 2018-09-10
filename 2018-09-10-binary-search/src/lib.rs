pub fn search(data: [u8; 4], target: u8) -> Option<u8> {
  let mut low = 0;
  let mut high = data.len() - 1;

  while low < high {
    let mid = (low + high) / 2;
    let value = data[mid];

    if target == value {
      return Some(value);
    }

    if target < value {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return None;
}
