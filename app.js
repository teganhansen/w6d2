$('#gameGrid').append(`
    
<table>
  <tr id="row">
     <td  class="box"></td>
     <td  class="box"></td>
     <td  class="box"></td>
     <td  class="box"></td>
  </tr>
  <tr id="row">
     <td  class="box"></td>
     <td  class="box"></td>
     <td  class="box"></td>
     <td  class="box"></td>
  </tr>
  <tr id="row">
    <td  class="box"></td>
    <td  class="box"></td>
    <td  class="box"></td>
    <td  class="box"></td>
  </tr>
  <tr id="row">
    <td  class="box"></td>
    <td  class="box"></td>
    <td  class="box"></td>
    <td  class="box"></td>
  </tr>
</table>
  `);

  $('#gameGrid').on('click', 'td', function() {
  
    $(this).toggleClass('lightmode');
  });