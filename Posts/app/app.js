"use strict";
(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    var addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addNoteFn);

    

    var saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', EditNote);
  });

  var i = 0;
  var idmem = " ";

  var j = 0;
  var idmem2 = " ";

  function addNoteFn() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var checkTitle = title.trim();
    var checkContent = content.trim();
    if (checkTitle === "" || checkContent === "") {
      return;
    }
    console.log(title);
    //CreateNote(title, content);
    var note = new Note(title, content);
    note.createPost();
  }

  function Note(title, content) {
    this.Title = title;
    this.Content = content;
  }

    Note.prototype.createPost = function () {
      var element = document.getElementById("availableNotes");


      var note = document.createElement("div");
      note.className = "col-md-12";
        //var id = "available_note" + i;
      var noteId = _.uniqueId("available_note");
      note.id = noteId;
      //i++;


      var panel = document.createElement("div");
      panel.className = "panel panel-default";


      var panelHeading = document.createElement("div");
      panelHeading.className = "panel-heading cyan";


      var noteTitle = document.createElement("h4");
      noteTitle.className = "center";
      noteTitle.innerText = this.Title;

      var panelBody = document.createElement("div");
      panelBody.className = "panel-body";


      var para = document.createElement("p");
      para.className = "center";
      para.innerText = this.Content;
    
      var lightDiv = document.createElement("div");
      lightDiv.className = "light center-block pull-right";
      var lightId = _.uniqueId("postLight_");
      lightDiv.id = lightId;
    
      var spanRed = document.createElement("span");
      spanRed.className = "redLight";
      var spanRedId = _.uniqueId("red_");
      spanRed.id = spanRedId;

      var spanYellow = document.createElement("span");
      spanYellow.className = "yellowLight";
      var spanYellowId = _.uniqueId("yellow_");
      spanYellow.id = spanYellowId;

      var spanGreen = document.createElement("span");
      spanGreen.className = "greenLight active";
      var spanGreenId = _.uniqueId("green_");
      spanGreen.id = spanGreenId;

      var editLink = document.createElement("a");
      editLink.href = "#";
      var spanEdit = document.createElement("span");
      spanEdit.className = "glyphicon glyphicon-pencil note-btn";
      spanEdit.setAttribute("data-toggle", "modal");
      spanEdit.setAttribute("data-target", "#myModal2");
      spanEdit.addEventListener("click", memIdEdit);
      editLink.appendChild(spanEdit);
      

      note.appendChild(panel);
      panel.appendChild(panelHeading);
      panel.appendChild(panelBody);
      panelHeading.appendChild(noteTitle);
      lightDiv.appendChild(spanRed);
      lightDiv.appendChild(spanYellow);
      lightDiv.appendChild(spanGreen);
      panelBody.appendChild(lightDiv);
      panelBody.appendChild(para);
      panelBody.appendChild(editLink);
  
      var greenPosts = document.getElementsByClassName("greenLight active");
      var yellowPosts = document.getElementById("yellowLight active");
      var redPosts = document.getElementById("redLight active");
      if (greenPosts) {
        var numOfGreens = greenPosts.length;
      }
      if (yellowPosts) {
        var numOfYellows = yellowPosts.length;
      } else {
        var numOfYellows = 1;
      }
      if (redPosts) {
        var numOfReds = redPosts.length;
      } else {
        var numOfReds = 1;
      }

      if (greenPosts[numOfGreens-1]) {
        var greenNoteId = greenPosts[numOfGreens-1].parentNode.parentNode.parentNode.parentNode.id;
        var lastGreenNote = document.getElementById(greenNoteId);
        lastGreenNote.insertAdjacentElement("afterend",note);
      } else if (yellowPosts) {
        if (yellowPosts[numOfYellows - 1]) {
          var yellowNoteId = yellowPosts[numOfYellows - 1].parentNode.parentNode.parentNode.parentNode.id;
          var lastYellowNote = document.getElementById(yellowNoteId);
          lastYellowNote.insertAdjacentElement("afterend", note);
        }
      } else if (redPosts) {
        if (redPosts[numOfReds - 1]) {
          var redNoteId = redPosts[numOfReds - 1].parentNode.parentNode.parentNode.parentNode.id;
          var lastRedNote = document.getElementById(redNoteId);
          lastRedNote.insertAdjacentElement("afterend", note);
        }
      } else {
        element.appendChild(note);
      }
      //if (element.firstElementChild) {
      //  element.firstElementChild.insertAdjacentElement("beforebegin", note);
      //} else if(){
      //  element.appendChild(note);
      //}
      
      GoYellow(note.id,spanGreenId,spanYellowId,spanRedId);
    }

    function GoYellow(id, greenId, yellowId, redId) {

      function SetYellow() {
        var spanYellow = document.getElementById(yellowId);
        var spanGreen = document.getElementById(greenId);
        spanYellow.className = "yellowLight active";
        spanGreen.className = "greenLight";
        var note = document.getElementById(id);

        GoRed(id,yellowId,redId);
      }
      setTimeout(SetYellow,4000);
    }

    function GoRed(id, yellowId, redId) {

      function SetRed() {
        var spanYellow = document.getElementById(yellowId);
        var spanRed = document.getElementById(redId);
        spanRed.className = "redLight active";
        spanYellow.className = "yellowLight";
        GoDelete(id);
      }
      setTimeout(SetRed,7000);
    }

    function GoDelete(id) {

      function SetDelete() {
        var note = document.getElementById(id);
        note.parentElement.removeChild(note);
      }
      setTimeout(SetDelete,8000);
    }

  

  function CreateNote(title, content) {
    var element = document.getElementById("availableNotes");


    var note = document.createElement("div");
    note.className = "col-md-4";
    var id = "available_note" + i;
    i++;


    var panel = document.createElement("div");
    panel.className = "panel panel-default";


    var panelHeading = document.createElement("div");
    panelHeading.className = "panel-heading green";


    var noteTitle = document.createElement("h4");
    noteTitle.className = "center";
    noteTitle.innerText = title;

    var panelBody = document.createElement("div");
    panelBody.className = "panel-body";


    var para = document.createElement("p");
    para.className = "center";
    para.innerText = content;
    var checkLink = document.createElement("a");
    checkLink.href = "#";
    var spanCheck = document.createElement("span");
    spanCheck.className = "glyphicon glyphicon-ok pull-right note-btn";
    spanCheck.addEventListener("click", memId1);
    checkLink.appendChild(spanCheck);
    var delLink = document.createElement("a");
    delLink.href = "#myModal";
    var spanDel = document.createElement("span");
    spanDel.className = "glyphicon glyphicon-remove pull-right note-btn";
    spanDel.setAttribute("data-toggle", "modal");
    spanDel.setAttribute("data-target", "#myModal");
    spanDel.addEventListener("click", memId);
    delLink.appendChild(spanDel);
    var editLink = document.createElement("a");
    editLink.href = "#";
    var spanEdit = document.createElement("span");
    spanEdit.className = "glyphicon glyphicon-pencil note-btn";
    spanEdit.setAttribute("data-toggle", "modal");
    spanEdit.setAttribute("data-target", "#myModal2");
    spanEdit.addEventListener("click", memIdEdit);
    editLink.appendChild(spanEdit);


    note.appendChild(panel);
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelHeading.appendChild(noteTitle);
    panelBody.appendChild(para);
    panelBody.appendChild(checkLink);
    panelBody.appendChild(delLink);
    panelBody.appendChild(editLink);
    console.log(element);
    console.log(element.childNodes);
    console.log(element.firstChild);
    console.log(element.firstElementChild);
    if (element.firstElementChild) {
      element.firstElementChild.insertAdjacentElement("beforebegin", note);
    }
    else {
      element.appendChild(note);
    }
  }

  function CreateNoteInFront(title, content) {
    var element = document.getElementById("availableNotes");


    var note = document.createElement("div");
    note.className = "col-md-4";
    note.id = "available_note" + i;
    i++;


    var panel = document.createElement("div");
    panel.className = "panel panel-default";


    var panelHeading = document.createElement("div");
    panelHeading.className = "panel-heading green";


    var noteTitle = document.createElement("h4");
    noteTitle.className = "center";
    noteTitle.innerText = title;

    var panelBody = document.createElement("div");
    panelBody.className = "panel-body";


    var para = document.createElement("p");
    para.className = "center";
    para.innerText = content;
    var checkLink = document.createElement("a");
    checkLink.href = "#";
    var spanCheck = document.createElement("span");
    spanCheck.className = "glyphicon glyphicon-ok pull-right note-btn";
    spanCheck.addEventListener("click", memId1);
    checkLink.appendChild(spanCheck);
    var delLink = document.createElement("a");
    delLink.href = "#myModal";
    var spanDel = document.createElement("span");
    spanDel.className = "glyphicon glyphicon-remove pull-right note-btn";
    spanDel.setAttribute("data-toggle", "modal");
    spanDel.setAttribute("data-target", "#myModal");
    spanDel.addEventListener("click", memId);
    delLink.appendChild(spanDel);



    note.appendChild(panel);
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelHeading.appendChild(noteTitle);
    panelBody.appendChild(para);
    panelBody.appendChild(checkLink);
    panelBody.appendChild(delLink);
    element.insertBefore(note, element.childNodes[0]);
  }

  function CreateNoteChecked(title, content) {
    var element = document.getElementById("availableNotes");


    var note = document.createElement("div");
    note.className = "col-md-4";
    note.id = "available_note" + i;
    i++;


    var panel = document.createElement("div");
    panel.className = "panel panel-default checkedNote";


    var panelHeading = document.createElement("div");
    panelHeading.className = "panel-heading green";


    var noteTitle = document.createElement("h4");
    noteTitle.className = "center";
    noteTitle.innerText = title;

    var panelBody = document.createElement("div");
    panelBody.className = "panel-body";


    var para = document.createElement("p");
    para.className = "center";
    para.innerText = content;



    note.appendChild(panel);
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelHeading.appendChild(noteTitle);
    panelBody.appendChild(para);
    var numNotes = element.childNodes.length;
    element.appendChild(note);

  }

  

  function CreateDisabledNote(title, content) {
    var element = document.getElementById("deletedNotes");


    var note = document.createElement("div");
    note.className = "col-md-4 note disabled";
    note.id = "deleted_note" + j;
    j++;


    var panel = document.createElement("div");
    panel.className = "panel panel-default";


    var panelHeading = document.createElement("div");
    panelHeading.className = "panel-heading red";


    var noteTitle = document.createElement("h4");
    noteTitle.className = "center";
    noteTitle.innerText = title;

    var panelBody = document.createElement("div");
    panelBody.className = "panel-body";


    var para = document.createElement("p");
    para.className = "center";
    para.innerText = content;
    var refreshLink = document.createElement("a");
    refreshLink.href = "#";
    var refreshCheck = document.createElement("span");
    refreshCheck.className = "glyphicon glyphicon-refresh pull-right note-btn";
    refreshLink.appendChild(refreshCheck);
    refreshCheck.addEventListener("click", RestoreNote);


    element.appendChild(note);
    note.appendChild(panel);
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelHeading.appendChild(noteTitle);
    panelBody.appendChild(para);
    panelBody.appendChild(refreshLink);

  }


  function memId(e) {
    idmem = e.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(idmem);

  }

  function memIdEdit(e) {
    idmem = e.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(idmem);
    var note = document.getElementById(idmem);
    var titleInput = document.getElementById("titleEdit");
    var contentInput = document.getElementById("contentEdit");
    var title = note.childNodes[0].childNodes[0].childNodes[0].innerText;
    var content = note.childNodes[0].childNodes[1].childNodes[1].innerText;
    titleInput.value = title;
    contentInput.value = content;
  }

  function SaveNote(e) {
    alert("Note will be saved");
  }

  function memId1(e) {
    idmem = e.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(idmem);
    var note = document.getElementById(idmem);
    var title = note.childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent;
    var content = note.childNodes[0].childNodes[1].childNodes[0].textContent;
    CreateNoteChecked(title, content);
    note.parentElement.removeChild(note);

  }

  function EditNote(e) {
    var note = document.getElementById(idmem);
    var editedTitle = document.getElementById("titleEdit").value;
    var editedContent = document.getElementById("contentEdit").value;
    if (editedTitle === "" || editedContent === "") {
      return;
    }
    console.log("Edited Title: " + editedTitle);
    console.log("Edited Content: " + editedContent);
    //note.childNodes[0].childNodes[0].childNodes[0].innerText = editedTitle;
    //note.childNodes[0].childNodes[1].childNodes[1].innerText = editedContent;
    var newTitle = editedTitle;
    var newContent = editedContent;
    var newNote = new Note(newTitle, newContent);
    newNote.createPost();
    note.parentElement.removeChild(note);
    
    //var greenPosts = document.getElementsByClassName("greenLight active");
    //var yellowPosts = document.getElementById("yellowLight active");
    //var redPosts = document.getElementById("redLight active");
    //if (greenPosts) {
    //  var numOfGreens = greenPosts.length;
    //}
    //if (yellowPosts) {
    //  var numOfYellows = yellowPosts.length;
    //} else {
    //  var numOfYellows = 1;
    //}
    //if (redPosts) {
    //  var numOfReds = redPosts.length;
    //} else {
    //  var numOfReds = 1;
    //}

    //if (greenPosts[numOfGreens - 1]) {
    //  var greenNoteId = greenPosts[numOfGreens - 1].parentNode.parentNode.parentNode.parentNode.id;
    //  var lastGreenNote = document.getElementById(greenNoteId);
    //  lastGreenNote.insertAdjacentElement("afterend", note);
    //} else if (yellowPosts) {
    //  if (yellowPosts[numOfYellows - 1]) {
    //    var yellowNoteId = yellowPosts[numOfYellows - 1].parentNode.parentNode.parentNode.parentNode.id;
    //    var lastYellowNote = document.getElementById(yellowNoteId);
    //    lastYellowNote.insertAdjacentElement("afterend", note);
    //  }
    //} else if (redPosts) {
    //  if (redPosts[numOfReds - 1]) {
    //    var redNoteId = redPosts[numOfReds - 1].parentNode.parentNode.parentNode.parentNode.id;
    //    var lastRedNote = document.getElementById(redNoteId);
    //    lastRedNote.insertAdjacentElement("afterend", note);
    //  }
    //} else {
    //  element.appendChild(note);
    //}
  }

  function RestoreNote(e) {
    idmem2 = e.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(idmem2);
    var noteToEnable = document.getElementById(idmem2);
    var title = noteToEnable.childNodes[0].childNodes[0].childNodes[0].textContent;
    var content = noteToEnable.childNodes[0].childNodes[1].childNodes[0].textContent;
    console.log("Del title: " + title);
    console.log("Del content: " + content);
    CreateNoteInFront(title, content);
    noteToEnable.parentElement.removeChild(noteToEnable);
  }

  function DeleteNote() {
    var delNote = document.getElementById(idmem);
    var title = delNote.childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent;
    var content = delNote.childNodes[0].childNodes[1].childNodes[0].textContent;
    console.log(idmem);
    console.log("Title: " + title);
    console.log("Content: " + content);

    //Create disabled copy
    CreateDisabledNote(title, content);
    //Delete the note
    delNote.parentElement.removeChild(delNote);

  }
})();

