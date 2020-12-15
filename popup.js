// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

function modifyDOM() {
	var h1 = document.getElementsByTagName('h1')[0];
	var aa = document.getElementsByClassName('css-eaycls');        
  return aa[aa.length-1].innerText +"/"+ h1.innerText.replace(/\W/g, '-').replace(/ /g, "-").
  replace(/---/g, "-").
  replace(/--/g, "-").replace(/"/g, "").replace(/'/g, "").toLowerCase();
}

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
      //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        prompt("Branch name", results[0]);
    });


};
