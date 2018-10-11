extern crate remove_duplicates;

#[test]
fn counts_the_correct_length() {
  let mut data: Vec<u8> = vec![1, 1, 2];
  let result = remove_duplicates::remove_duplicates(&mut data);

  assert_eq!(result, 2);
}

#[test]
fn removes_duplicates_in_place() {
  let mut data: Vec<u8> = vec![0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  remove_duplicates::remove_duplicates(&mut data);

  data.truncate(5);

  assert_eq!(data, vec![0, 1, 2, 3, 4]);
}

#[test]
fn counts_empty_vector() {
  let mut data: Vec<u8> = vec![];
  let result = remove_duplicates::remove_duplicates(&mut data);

  assert_eq!(result, 0);
}
