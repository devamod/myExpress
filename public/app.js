angular.module("demoapp",[])
      .controller("invoice",invoice)


    function invoice($http){
       var invoice= this;
       console.log("hello world")
    
       var url='/items';
       $http.get(url).then(function(result){
           console.log(result.data)
           invoice.item=result.data;
        invoice.sum()
        })

       invoice.add=function(){
           var url ='http://localhost:8000/add?product='+invoice.name+'&amount='+invoice.amnt+'&price='+invoice.price+'';
         $http.get(url).then(function(result){
                 invoice.item=result.data
                 invoice.sum()
         })
         invoice.name=""
         invoice.amnt=""
         invoice.price=""
       
        }    

        invoice.sum=function(){
            count=0
            for(i=0;i<invoice.item.length;i++){
                count=count+invoice.item[i].total
                invoice.pic=count;
            }
        }
        
        invoice.delete=function(id){
            var url='/delete?id='+id+'';
         $http.get(url).then(function(result){
              invoice.item=result.data

              invoice.sum()
         })

        }
    }