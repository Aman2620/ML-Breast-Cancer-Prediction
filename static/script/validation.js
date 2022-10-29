function validation(){
  var clump_thickness = document.getElementById('clump_thickness').value;
  var uniform_cell_size = document.getElementById('uniform_cell_size').value;
  var uniform_cell_shape = document.getElementById('uniform_cell_shape').value;
  var marginal_adhesion = document.getElementById('marginal_adhesion').value;
  var single_epithelial_size = document.getElementById('single_epithelial_size').value;
  var bare_nuclei = document.getElementById('bare_nuclei').value;
  var bland_chromatin = document.getElementById('bland_chromatin').value;
  var normal_nucleoli = document.getElementById('normal_nucleoli').value;
  var mitoses = document.getElementById('mitoses').value;

  if (clump_thickness == "" || uniform_cell_size == "" || uniform_cell_shape=="" || marginal_adhesion=="" || single_epithelial_size == "" || bare_nuclei == "" || bland_chromatin == "" || normal_nucleoli =="" || mitoses == ""   ){
    alert("Incomplete Credentials")
    return false;
  }
  else {
    return true;
  }

}
