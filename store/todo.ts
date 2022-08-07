import firestore from "~/plugins/firestore";
import { firestoreAction } from "vuexfire";
import { collection, addDoc } from "firebase/firestore";

// TODO:最新版のドキュメント見て実装を参照する
const todosRef = collection(firestore, "todos");

export const state = () => ({
  todos: [],
});

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("todos", todosRef);
  }),
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      addDoc(todosRef, {
        name: name,
        done: false,
      });
    }
  }),
};
