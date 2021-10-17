/* COMPILATION PHASE
Scopes:
Global {
  Line 2
  const b; is decleared, TDZ

  Line 4
  const sum; is decleared, TDZ

  Line 16:
  var a; decleared and initialized with "undefined"

  Line 18:
  function mult; is decleared initialized and assigned

  Line 4:
sum() {
  nothing happens;
}

Line 8:
if(){
  Line 9:
  let multResult; - decleared, TDZ
}else(){
  Line 12:
  let sumResult; - decleared, TDZ
}

Line 18:
mult{
  var a & b - decleared, initialized with 'undefined';
}
}
*/