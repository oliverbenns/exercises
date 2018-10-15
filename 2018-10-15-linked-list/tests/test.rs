// use std::ptr;
extern crate lib;

#[test]
fn constructs_linked_list() {
  let mut list = lib::LinkedList::new();

  let v = 5;

  list.push(v);

  let a = list.last();

  println!("{}", a);

  // println!("{:p}", &a);
  // println!("{:p}", list.tail);
  // println!("{}", (*list.tail).value);

  // assert_eq!(list.head, a);
  // assert_eq!(list.tail, b);
}
