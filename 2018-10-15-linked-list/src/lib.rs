// Create a very primitive LinkedList.

pub struct LinkedList<T> {
  pub head: *const Node<T>,
  pub tail: *const Node<T>,
}

// impl <T> LinkedList<T> {
  // fn pop() {
  //   println!("Remove an item from the end of an array")
  // }

  // fn push(&self, value: i32) {
  //   println!("Add item to the end of an array")
  // }

  // fn shift() {
  //   println!("Remove an item from the beginning of an array")
  // }

  // fn unshift(&self, value: i32) {
  //   println!("Add item to the beginning of an array")
  // }
// }

pub struct Node <T> {
  pub value: T,
  pub prev: *const Node<T>,
  // next: Node<T>,
}
