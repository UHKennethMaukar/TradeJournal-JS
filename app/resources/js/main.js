// For showing/hiding add trade entry form
document.getElementById('toggleForm').addEventListener('click', function() {
    document.getElementById("openForm").style.display="block";
});

// On Add Trade form submission
document.getElementById('submitOpen').addEventListener('click', function() {
    var position = document.getElementById('position').value
    var ticker = document.getElementById('ticker').value
    var openP = document.getElementById('openp').value
    var openDate = document.getElementById('opend').value;
    var trade = position + " " + ticker.toUpperCase() + " @ $" + openP + " on " + openDate;
    if (position && ticker && openP && openDate) {
        addOpenPosition(trade);
        document.getElementById("openForm").style.display="none";
        document.getElementById("openForm").reset();
      }
    else {alert("Please fill in all details.")}
});


// Cancel open form submission
    document.getElementById('submitCancel').addEventListener('click', function() {
    document.getElementById("openForm").style.display="none";
    document.getElementById("openForm").reset();
    
}); 

// For delete and close positions icons
var deleteSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var closeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';


// Adding new trade entry to the 'Current Positions' list

    function addOpenPosition(string) {

    var oList = document.getElementById('openList');

    var newOpen = document.createElement("LI");
    newOpen.classList.add("list-group-item");
    newOpen.innerText = string; 

    // Appending buttons to the new entry
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    // Add click event for deleting entry
    var deleteEntry = document.createElement('button');
    deleteEntry.classList.add('delete');
    deleteEntry.innerHTML = deleteSVG;

    deleteEntry.addEventListener('click', deletePosition);

    // Add click event for closing the position
    var closeEntry = document.createElement('button');
    closeEntry.classList.add('close');
    closeEntry.innerHTML = closeSVG;
    closeEntry.addEventListener('click', closePosition);

    buttons.appendChild(deleteEntry);
    buttons.appendChild(closeEntry);
    newOpen.appendChild(buttons);

    oList.insertBefore(newOpen, oList.childNodes[0]);
    } 

// Deleting Entries

function deletePosition() {
    var entry = this.parentNode.parentNode;
    var parent = entry.parentNode;

    parent.removeChild(entry);
} 

// Cancel open form submission
    document.getElementById('closeCancel').addEventListener('click', function() {
    document.getElementById("closeForm").style.display="none";
    document.getElementById("closeForm").reset();
    
}); 

// Closing a position
function closePosition() {

    var closeForm = document.getElementById("closeForm");
    closeForm.style.display="block";

    entry = this.parentNode.parentNode;
    value = entry.innerText;
    parent = entry.parentNode;
    var target = document.getElementById('closeList');
    
    // Submit Close Position Form
    document.getElementById('submitClose').addEventListener('click', function () {
    var closeP = document.getElementById('closep').value
    var closeDate = document.getElementById('closeD').value
    
    if (closeP && closeDate) {
        document.getElementById("closeForm").style.display="none";
        document.getElementById("closeForm").reset();

        var closing = "  ||  Closed @ $" + closeP + " on " + closeDate;
        var closeEntry = value + closing;

        // To parse entry and exit prices & calculate realized return
        var parseOpen = value.match(/\S+/gi);
        var parsePosition = parseOpen[0];
        var parseOpenP = parseOpen[3].split('$');
        var parseReturn = [closeP/Number(parseOpenP[1])-1]*100;
        parseReturn = parseReturn.toFixed(2);
        
        if (parsePosition == 'Long') {
            var realisedR = parseReturn; 
        } else 
            var realisedR = -parseReturn;

        // Add entry to closed position list
        var newClose = document.createElement("LI");
        newClose.classList.add("list-group-item");
        newClose.innerText = closeEntry;

        // Display realized returns
        var showReturn = document.createElement('span');
        if (realisedR >= 0) {
            showReturn.classList.add('badge', 'badge-success', 'badge-pill');
            showReturn.innerText = "+" + realisedR + "%";
        } else {
            showReturn.classList.add('badge', 'badge-primary', 'badge-pill');
            showReturn.innerText = realisedR + "%";
        }

        newClose.appendChild(showReturn);
    
        target.insertBefore(newClose, target.childNodes[0]);
        parent.removeChild(entry);
        
      }
    
    });
}

// Search Filter
function searchFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("openList");
    ul2 = document.getElementById("closeList");
    li = ul.getElementsByTagName("LI");
    li2 = ul2.getElementsByTagName("LI");
  
    // Loop through all list items, and hide non-matching items
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

    for (i = 0; i < li2.length; i++) {
        a = li2[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li2[i].style.display = "";
        } else {
          li2[i].style.display = "none";
        }
     }
  }