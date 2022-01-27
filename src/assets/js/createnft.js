import $ from "jquery";

function initializeFileUploads() {
  $(".file-upload").change(function () {
    var file = $(this).val();

    var parts = file.split("\\");
    var lastpart = parts[parts.length - 1];
    //alert("file"+lastpart);
    $(this).closest(".input-group").find(".file-upload-text").val(lastpart);
  });
  $(".file-upload-btn").click(function () {
    $(this).find(".file-upload").trigger("click");
  });
  $(".file-upload").click(function (e) {
    e.stopPropagation();
  });
}

// On document load:
$(function () {
  initializeFileUploads();
});
