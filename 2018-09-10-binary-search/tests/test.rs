extern crate binary_search;

#[test]
fn it_finds_value() {
  let values: Vec<u8> = vec![2, 3, 8, 22, 18, 26];
  let result = binary_search::search(values, 8);

  assert_eq!(result, Some(8));
}

#[test]
fn it_finds_lowest_value() {
  let values: Vec<u8> = vec![4, 7, 12, 13, 15, 18, 19, 28];
  let result = binary_search::search(values, 4);

  assert_eq!(result, Some(4));
}

#[test]
fn it_finds_highest_value() {
  let values: Vec<u8> = vec![8, 12, 15, 16, 17, 21];
  let result = binary_search::search(values, 17);

  assert_eq!(result, Some(17));
}

#[test]
fn it_does_not_find_out_of_lower_bound() {
  let values: Vec<u8> = vec![4, 7, 12, 13, 15, 18];
  let result = binary_search::search(values, 2);

  assert_eq!(result, None);
}

#[test]
fn it_does_not_find_out_of_upper_bound() {
  let values: Vec<u8> = vec![3, 4, 7, 12, 13, 15, 18];
  let result = binary_search::search(values, 21);

  assert_eq!(result, None);
}
