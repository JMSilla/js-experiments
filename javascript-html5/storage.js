function refreshStorageValues() {
  loadStorageValues(getSelectedStorage());
}

function loadStorageValues(storage) {
  cleanValueList();

  for (var i = 0; i < storage.length; i++)
    addKeyValueToList(storage.key(i), storage[storage.key(i)]);
}

function cleanValueList() {
  getStorageList().innerHTML = "";
}

function getStorageList() {
  return document.getElementById("storageContent");
}

function addKeyValueToList(key, value) {
  getStorageList().innerHTML += "<li>[" + key + "] -> " + value
    + "<button onclick='removeItem(\"" + key + "\")'>X</button></li>";
}

function getSelectedStorage() {
  var storageType = document.getElementById("storageType").value;
  var storage = sessionStorage;

  if (storageType === "local")
    storage = localStorage;

  return storage;
}

function addInputKeyValue() {
  var key = document.getElementById("key");
  var value = document.getElementById("value");

  if (key.value && value.value)
    getSelectedStorage().setItem(key.value, value.value);

  refreshStorageValues();
}

function removeItem(key) {
  getSelectedStorage().removeItem(key);
  refreshStorageValues();
}

function clearStorage() {
  getSelectedStorage().clear();
  refreshStorageValues();
}
