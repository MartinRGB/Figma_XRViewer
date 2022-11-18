/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/plugin/webxr.ts ***!
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
      var platform = 'webxr';
      sendMsg("finished_msg", [fileKey, fileName, nodeId, platform]);
    }
  }
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0FBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUM7RUFBQ0MsS0FBSyxFQUFDLEdBQUc7RUFBQ0MsTUFBTSxFQUFDO0FBQUcsQ0FBQyxDQUFDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsT0FBTyxDQUFDQyxFQUFFLEVBQUNDLEdBQUcsRUFBRTtFQUN2QlAsS0FBSyxDQUFDUSxFQUFFLENBQUNDLFdBQVcsQ0FBQztJQUFDQyxJQUFJLEVBQUVKLEVBQUU7SUFBRUssS0FBSyxFQUFDSjtFQUFHLENBQUMsQ0FBQztBQUM3QztBQUVBUCxLQUFLLENBQUNRLEVBQUUsQ0FBQ0ksU0FBUyxHQUFHLFVBQUFDLEdBQUcsRUFBSTtFQUMxQixJQUFJQSxHQUFHLENBQUNILElBQUksS0FBSyxXQUFXLEVBQUU7SUFDNUIsSUFBSUksS0FBSyxHQUFHZCxLQUFLLENBQUNlLFdBQVcsQ0FBQ0MsU0FBUztJQUN2QyxJQUFJRixLQUFLLENBQUNHLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDdEIsSUFBTUMsT0FBTyxHQUFHbEIsS0FBSyxDQUFDa0IsT0FBTztNQUM3QixJQUFNQyxRQUFRLEdBQUduQixLQUFLLENBQUNvQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7TUFDcEQsSUFBTUMsTUFBTSxHQUFHdkIsS0FBSyxDQUFDZSxXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsRUFBRSxDQUFDRixVQUFVLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQztNQUN0RSxJQUFNRyxRQUFRLEdBQUcsT0FBTztNQUN4QnBCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQ2EsT0FBTyxFQUFDQyxRQUFRLEVBQUNJLE1BQU0sRUFBQ0UsUUFBUSxDQUFDLENBQUM7SUFDN0Q7RUFDRjtFQUNBLElBQUlaLEdBQUcsQ0FBQ0gsSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUN6QlYsS0FBSyxDQUFDMEIsV0FBVyxFQUFFO0VBQ3JCO0FBQ0YsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vWFJWaWV3ZXIvLi9zcmMvcGx1Z2luL3dlYnhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9ubWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuXG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18se3dpZHRoOjgwMCxoZWlnaHQ6NjAwfSk7XG5cbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cblxuZnVuY3Rpb24gc2VuZE1zZyh0cCx2YWwpIHtcbiAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe3R5cGU6IHRwLCB2YWx1ZTp2YWx9KTtcbn1cblxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgaWYgKG1zZy50eXBlID09PSAnY29weV9vcGVuJykge1xuICAgIGxldCBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaWxlS2V5ID0gZmlnbWEuZmlsZUtleTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlnbWEucm9vdC5uYW1lLnJlcGxhY2VBbGwoJyAnLCctJyk7XG4gICAgICBjb25zdCBub2RlSWQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uaWQucmVwbGFjZUFsbCgnOicsJyUzQScpO1xuICAgICAgY29uc3QgcGxhdGZvcm0gPSAnd2VieHInO1xuICAgICAgc2VuZE1zZyhcImZpbmlzaGVkX21zZ1wiLCBbZmlsZUtleSxmaWxlTmFtZSxub2RlSWQscGxhdGZvcm1dKTtcbiAgICB9XG4gIH1cbiAgaWYgKG1zZy50eXBlID09PSAnY2FuY2VsJykge1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZmlnbWEiLCJzaG93VUkiLCJfX2h0bWxfXyIsIndpZHRoIiwiaGVpZ2h0Iiwic2VuZE1zZyIsInRwIiwidmFsIiwidWkiLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJ2YWx1ZSIsIm9ubWVzc2FnZSIsIm1zZyIsIm5vZGVzIiwiY3VycmVudFBhZ2UiLCJzZWxlY3Rpb24iLCJsZW5ndGgiLCJmaWxlS2V5IiwiZmlsZU5hbWUiLCJyb290IiwibmFtZSIsInJlcGxhY2VBbGwiLCJub2RlSWQiLCJpZCIsInBsYXRmb3JtIiwiY2xvc2VQbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9