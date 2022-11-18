/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/plugin/unity.ts ***!
  \*****************************/
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 800,
  height: 600
});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

function sendMsg(tp, val) {
  figma.ui.postMessage({
    type: tp,
    value: val
  });
}
figma.ui.onmessage = function (msg) {
  if (msg.type === 'copy_open') {
    var nodes = figma.currentPage.selection;
    if (nodes.length === 1) {
      var fileKey = figma.fileKey;
      var fileName = figma.root.name.replaceAll(' ', '-');
      var nodeId = figma.currentPage.selection[0].id.replaceAll(':', '%3A');
      var platform = 'unity';
      sendMsg("finished_msg", [fileKey, fileName, nodeId, platform]);
    }
  }
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0FBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUM7RUFBQ0MsS0FBSyxFQUFDLEdBQUc7RUFBQ0MsTUFBTSxFQUFDO0FBQUcsQ0FBQyxDQUFDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsT0FBTyxDQUFDQyxFQUFFLEVBQUNDLEdBQUcsRUFBRTtFQUN2QlAsS0FBSyxDQUFDUSxFQUFFLENBQUNDLFdBQVcsQ0FBQztJQUFDQyxJQUFJLEVBQUVKLEVBQUU7SUFBRUssS0FBSyxFQUFDSjtFQUFHLENBQUMsQ0FBQztBQUM3QztBQUVBUCxLQUFLLENBQUNRLEVBQUUsQ0FBQ0ksU0FBUyxHQUFHLFVBQUFDLEdBQUcsRUFBSTtFQUMxQixJQUFJQSxHQUFHLENBQUNILElBQUksS0FBSyxXQUFXLEVBQUU7SUFDNUIsSUFBSUksS0FBSyxHQUFHZCxLQUFLLENBQUNlLFdBQVcsQ0FBQ0MsU0FBUztJQUN2QyxJQUFJRixLQUFLLENBQUNHLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDdEIsSUFBTUMsT0FBTyxHQUFHbEIsS0FBSyxDQUFDa0IsT0FBTztNQUM3QixJQUFNQyxRQUFRLEdBQUduQixLQUFLLENBQUNvQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7TUFDcEQsSUFBTUMsTUFBTSxHQUFHdkIsS0FBSyxDQUFDZSxXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsRUFBRSxDQUFDRixVQUFVLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQztNQUN0RSxJQUFNRyxRQUFRLEdBQUcsT0FBTztNQUN4QnBCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQ2EsT0FBTyxFQUFDQyxRQUFRLEVBQUNJLE1BQU0sRUFBQ0UsUUFBUSxDQUFDLENBQUM7SUFDN0Q7RUFDRjtFQUNBLElBQUlaLEdBQUcsQ0FBQ0gsSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUN6QlYsS0FBSyxDQUFDMEIsV0FBVyxFQUFFO0VBQ3JCO0FBQ0YsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vWFJWaWV3ZXIvLi9zcmMvcGx1Z2luL3VuaXR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxyXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIHRoYXQgbWFueSByZWN0YW5nbGVzIG9uIHRoZSBzY3JlZW4uXHJcblxyXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXHJcbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxyXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cclxuXHJcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLHt3aWR0aDo4MDAsaGVpZ2h0OjYwMH0pO1xyXG5cclxuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXHJcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxyXG4vLyBwb3N0ZWQgbWVzc2FnZS5cclxuXHJcbmZ1bmN0aW9uIHNlbmRNc2codHAsdmFsKSB7XHJcbiAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe3R5cGU6IHRwLCB2YWx1ZTp2YWx9KTtcclxufVxyXG5cclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICBpZiAobXNnLnR5cGUgPT09ICdjb3B5X29wZW4nKSB7XHJcbiAgICBsZXQgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVLZXkgPSBmaWdtYS5maWxlS2V5O1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpZ21hLnJvb3QubmFtZS5yZXBsYWNlQWxsKCcgJywnLScpO1xyXG4gICAgICBjb25zdCBub2RlSWQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uaWQucmVwbGFjZUFsbCgnOicsJyUzQScpO1xyXG4gICAgICBjb25zdCBwbGF0Zm9ybSA9ICd1bml0eSc7XHJcbiAgICAgIHNlbmRNc2coXCJmaW5pc2hlZF9tc2dcIiwgW2ZpbGVLZXksZmlsZU5hbWUsbm9kZUlkLHBsYXRmb3JtXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtc2cudHlwZSA9PT0gJ2NhbmNlbCcpIHtcclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZmlnbWEiLCJzaG93VUkiLCJfX2h0bWxfXyIsIndpZHRoIiwiaGVpZ2h0Iiwic2VuZE1zZyIsInRwIiwidmFsIiwidWkiLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJ2YWx1ZSIsIm9ubWVzc2FnZSIsIm1zZyIsIm5vZGVzIiwiY3VycmVudFBhZ2UiLCJzZWxlY3Rpb24iLCJsZW5ndGgiLCJmaWxlS2V5IiwiZmlsZU5hbWUiLCJyb290IiwibmFtZSIsInJlcGxhY2VBbGwiLCJub2RlSWQiLCJpZCIsInBsYXRmb3JtIiwiY2xvc2VQbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9