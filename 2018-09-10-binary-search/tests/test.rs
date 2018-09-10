extern crate binary_search;

#[test]
fn it_finds_value() {
  let values: [u8; 4] = [4, 5, 6, 7];
  let result = binary_search::search(values, 4);

  assert_eq!(result, Some(4));
}

#[test]
fn it_does_not_find_out_of_lower_bound() {
  let values: [u8; 4] = [4, 5, 6, 7];
  let result = binary_search::search(values, 1);

  assert_eq!(result, None);
}

#[test]
fn it_does_not_find_out_of_upper_bound() {
  let values: [u8; 4] = [4, 5, 6, 7];
  let result = binary_search::search(values, 10);

  assert_eq!(result, None);
}
