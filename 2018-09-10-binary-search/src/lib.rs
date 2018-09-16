pub fn search(data: Vec<u8>, target: u8) -> Option<u8> {
  let mut low_index = 0;
  let mut high_index = data.len() - 1;

  while low_index < high_index {
    let mid = (low_index + high_index) / 2;
    let value = data[mid];

    if target == value {
      return Some(value);
    }

    if target > value {
      low_index = mid + 1;
    } else {
      high_index = mid;
    }
  }

  return None;
}
