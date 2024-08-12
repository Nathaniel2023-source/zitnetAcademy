var language = ["HTML","CSS","JAVASCRIPT","PHP","JAVA","PYTHON","C++","C","Ca","PERL","RUBY","SCALA","COBOL","BASIC","FORTRAN","LIST","TYPESCRIPT"]
$(document).ready(function () {
    $("#input").autocomplete({
        source: language
    },{
        delay:500,
        minLength: 3,
        autoFocus: true
    })
});