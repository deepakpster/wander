import { all, put, select, takeLatest } from "redux-saga/effects";

export function* increment() {
  try {
    yield takeLatest({
      type: "INCREMENT",
    });
  } catch (err) {
    console.log("err", err);
  }
}

/**
 * App Sagas
 */
export default function* root() {
  yield all([takeLatest("INCREMENT", increment)]);
}
