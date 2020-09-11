
$( "button" ).click(function()

{
    $.ajax({
          url      : "users.php",
          cache    : false,
          dataType : "json",
          success  : function(data) {  
                       console.log(data);
                       console.log(data[0]);
                       $('table').empty();
                       $('table').append("<tr></tr>");
                       $('tr').append("<th>Id</th>");
                       $('tr').append("<th>Nom</th>");
                       $('tr').append("<th>Prenom</th>"); 
                       $('tr').append("<th>Email</th>");
                       for(i=0;i<data.length;i++)
                       {
                          $('table').append("<tr id='"+data[i].id+"'></tr>");
                          $('#'+data[i].id).append("<td>"+data[i].id+"</td>");
                          $('#'+data[i].id).append("<td>"+data[i].nom+"</td>");
                          $('#'+data[i].id).append("<td>"+data[i].prenom+"</td>");
                          $('#'+data[i].id).append("<td>"+data[i].email+"</td>");
                       }
                     }       
     }); 
         
});
