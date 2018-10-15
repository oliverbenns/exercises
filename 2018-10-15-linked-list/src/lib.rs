// Create a very primitive LinkedList.

use std::ptr;
use std::marker::Copy;

pub struct LinkedList<T: Copy> {
  head: *const Node<T>,
  tail: *const Node<T>,
}

impl <T: Copy> LinkedList<T> {
  pub fn new() -> LinkedList<T> {
    LinkedList {
      head: ptr::null() as *const Node<T>,
      tail: ptr::null() as *const Node<T>,
    }
  }

  pub fn push(&mut self, value: T) {
    let node = Node {
      prev: self.head,
      value: value,
    };

    self.head = &node; // @TODO
    self.tail = &node;

    println!("{:p}", self.tail)
  }

  pub fn last(&self) -> T {
    unsafe {
      (*self.tail).value
    }
  }

  // fn pop() {
  //   println!("Remove an item from the end of an array")
  // }


  // fn shift() {
  //   println!("Remove an item from the beginning of an array")
  // }

  // fn unshift(&self, value: i32) {
  //   println!("Add item to the beginning of an array")
  // }
}

struct Node <T> {
  pub value: T,
  pub prev: *const Node<T>,
  // next: Node<T>,
}
