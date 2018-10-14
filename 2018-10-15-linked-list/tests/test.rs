use std::ptr;
extern crate lib;

#[test]
fn constructs_linked_list() {
  let z: *const lib::Node<i32> = ptr::null();
  let a = lib::Node { value: 4, prev: z };
  let b = lib::Node { value: 6, prev: &a };

  let list = lib::LinkedList {
    head: &a,
    tail: &b,
  };

  println!("{:p}", &a);
  println!("{:p}", list.head);

  // let b = lib::Node { value: 6 };
  // let bar = lib::LinkedList { foo: 4 };

  // assert_eq!(list.head, a);
  // assert_eq!(list.tail, b);
}


// #[test]
// fn constructs_node() {
//   let a = lib::Node { value: 4 };
//   let b = lib::Node { value: 6 };
//   // let bar = lib::LinkedList { foo: 4 };

//   assert_eq!(a.value, 4);
//   assert_eq!(b.value, 6);
// }
