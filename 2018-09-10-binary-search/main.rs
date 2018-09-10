fn main() {
  let values: [u8; 4] = [4, 5, 6, 7];
  binary_search(values, 3);
}

fn binary_search(data: [u8; 4], target: u8) -> Option<u8> {
  let mut low = 0;
  let mut high = data.len();

  while low < high {
    let mid = (high - low) / 2;
    let value = data[mid];

    if target == value {
      println!("Found!!");
      return Some(value);
    }

    if target < value {
      high = mid;
    } else {
      low = mid;
    }
  }

  println!("Not found!!");
  return None;
}
