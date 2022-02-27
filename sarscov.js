src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"


$(document).ready(function(){
init()

function init(){
   
    var url = "https://data.covid19india.org/data.json"
    var data = ''
  
  

    $.get(url,function(data){

       
        data =`
        <tr>
        <td>IND</td>
        <td>INDIA</td>
        <td>${data.statewise[0].active}</td>
        <td>${data.statewise[0].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[1].statecode}</td>
        <td>${data.statewise[1].state}</td>
        <td>${data.statewise[1].active}</td>
        <td>${data.statewise[1].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[2].statecode}</td>
        <td>${data.statewise[2].state}</td>
        <td>${data.statewise[2].active}</td>
        <td>${data.statewise[2].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[3].statecode}</td>
        <td>${data.statewise[3].state}</td>
        <td>${data.statewise[3].active}</td>
        <td>${data.statewise[3].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[4].statecode}</td>
        <td>${data.statewise[4].state}</td>
        <td>${data.statewise[4].active}</td>
        <td>${data.statewise[4].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[5].statecode}</td>
        <td>${data.statewise[5].state}</td>
        <td>${data.statewise[5].active}</td>
        <td>${data.statewise[5].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[6].statecode}</td>
        <td>${data.statewise[6].state}</td>
        <td>${data.statewise[6].active}</td>
        <td>${data.statewise[6].confirmed}</td>
       </tr>
       
        <tr>
        <td>${data.statewise[8].statecode}</td>
        <td>${data.statewise[8].state}</td>
        <td>${data.statewise[8].active}</td>
        <td>${data.statewise[8].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[9].statecode}</td>
        <td>${data.statewise[9].state}</td>
        <td>${data.statewise[9].active}</td>
        <td>${data.statewise[9].confirmed}</td>
       </tr>
        <tr>
        <td>${data.statewise[10].statecode}</td>
        <td>${data.statewise[10].state}</td>
        <td>${data.statewise[10].active}</td>
        <td>${data.statewise[10].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[11].statecode}</td>
        <td>${data.statewise[11].state}</td>
        <td>${data.statewise[11].active}</td>
        <td>${data.statewise[11].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[12].statecode}</td>
        <td>${data.statewise[12].state}</td>
        <td>${data.statewise[12].active}</td>
        <td>${data.statewise[12].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[13].statecode}</td>
        <td>${data.statewise[13].state}</td>
        <td>${data.statewise[13].active}</td>
        <td>${data.statewise[13].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[14].statecode}</td>
        <td>${data.statewise[14].state}</td>
        <td>${data.statewise[14].active}</td>
        <td>${data.statewise[14].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[15].statecode}</td>
        <td>${data.statewise[15].state}</td>
        <td>${data.statewise[15].active}</td>
        <td>${data.statewise[15].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[16].statecode}</td>
        <td>${data.statewise[16].state}</td>
        <td>${data.statewise[16].active}</td>
        <td>${data.statewise[16].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[17].statecode}</td>
        <td>${data.statewise[17].state}</td>
        <td>${data.statewise[17].active}</td>
        <td>${data.statewise[17].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[18].statecode}</td>
        <td>${data.statewise[18].state}</td>
        <td>${data.statewise[18].active}</td>
        <td>${data.statewise[18].confirmed}</td>
       </tr>
        
        <tr>
        <td>${data.statewise[19].statecode}</td>
        <td>${data.statewise[19].state}</td>
        <td>${data.statewise[19].active}</td>
        <td>${data.statewise[19].confirmed}</td>
       </tr>

       <tr>
       <td>${data.statewise[20].statecode}</td>
       <td>${data.statewise[20].state}</td>
       <td>${data.statewise[20].active}</td>
       <td>${data.statewise[20].confirmed}</td>
      </tr>

       <tr>
       <td>${data.statewise[21].statecode}</td>
       <td>${data.statewise[21].state}</td>
       <td>${data.statewise[21].active}</td>
       <td>${data.statewise[21].confirmed}</td>
      </tr>
        
       <tr>
       <td>${data.statewise[22].statecode}</td>
       <td>${data.statewise[22].state}</td>
       <td>${data.statewise[22].active}</td>
       <td>${data.statewise[22].confirmed}</td>
      </tr>
        
       <tr>
       <td>${data.statewise[23].statecode}</td>
       <td>${data.statewise[23].state}</td>
       <td>${data.statewise[23].active}</td>
       <td>${data.statewise[23].confirmed}</td>
      </tr>
        
       <tr>
       <td>${data.statewise[24].statecode}</td>
       <td>${data.statewise[24].state}</td>
       <td>${data.statewise[24].active}</td>
       <td>${data.statewise[24].confirmed}</td>
      </tr>
        
       <tr>
       <td>${data.statewise[25].statecode}</td>
       <td>${data.statewise[25].state}</td>
       <td>${data.statewise[25].active}</td>
       <td>${data.statewise[25].confirmed}</td>
      </tr>
        
       <tr>
       <td>${data.statewise[26].statecode}</td>
       <td>${data.statewise[26].state}</td>
       <td>${data.statewise[26].active}</td>
       <td>${data.statewise[26].confirmed}</td>
      </tr>
       <tr>
       <td>${data.statewise[27].statecode}</td>
       <td>${data.statewise[27].state}</td>
       <td>${data.statewise[27].active}</td>
       <td>${data.statewise[27].confirmed}</td>
      </tr>
      
       <tr>
       <td>${data.statewise[28].statecode}</td>
       <td>${data.statewise[28].state}</td>
       <td>${data.statewise[28].active}</td>
       <td>${data.statewise[28].confirmed}</td>
      </tr>
        
       <tr>
       <td>${data.statewise[29].statecode}</td>
       <td>${data.statewise[29].state}</td>
       <td>${data.statewise[29].active}</td>
       <td>${data.statewise[29].confirmed}</td>
      </tr>
       <tr>
       <td>${data.statewise[30].statecode}</td>
       <td>${data.statewise[30].state}</td>
       <td>${data.statewise[30].active}</td>
       <td>${data.statewise[30].confirmed}</td>
      </tr>
      
       <tr>
       <td>TN</td>
       <td>Tamil Nadu</td>
       <td>${data.statewise[32].active}</td>
       <td>${data.statewise[32].confirmed}</td>
      </tr>
       <tr>
       <td>${data.statewise[33].statecode}</td>
       <td>${data.statewise[33].state}</td>
       <td>${data.statewise[33].active}</td>
       <td>${data.statewise[33].confirmed}</td>
      </tr>
       <tr>
       <td>${data.statewise[34].statecode}</td>
       <td>${data.statewise[34].state}</td>
       <td>${data.statewise[34].active}</td>
       <td>${data.statewise[34].confirmed}</td>
      </tr>
         
       <tr>
       <td>${data.statewise[35].statecode}</td>
       <td>${data.statewise[35].state}</td>
       <td>${data.statewise[35].active}</td>
       <td>${data.statewise[35].confirmed}</td>
      </tr>
         
    

      <tr>
       <td>${data.statewise[36].statecode}</td>
       <td>${data.statewise[36].state}</td>
       <td>${data.statewise[36].active}</td>
       <td>${data.statewise[36].confirmed}</td>
      </tr>
         
       <tr>
       <td>${data.statewise[37].statecode}</td>
       <td>${data.statewise[37].state}</td>
       <td>${data.statewise[37].active}</td>
       <td>${data.statewise[37].confirmed}</td>
      </tr>
         
     
         
       `
        
        $("#data").html(data);
      
        
    })

}

})
