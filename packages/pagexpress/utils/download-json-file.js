export const downloadJsonFile = (data, fileName) => {
  const downloadAnchorNode = document.createElement('a');
  const dataString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(data, null, 4)
  )}`;
  downloadAnchorNode.setAttribute('href', dataString);
  downloadAnchorNode.setAttribute('download', fileName + '.json');
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};
