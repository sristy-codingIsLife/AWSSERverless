exports.handler = async (event) =>{
    console.log('Received event:', JSON.stringify(event, null, 2));

    let body;

    try {
        switch(event.http){
            case "GET":
               if(event.queryStringParameters != null){
                body = `Processing Get Product Id with "${event.pathParameters.id}" and category with 
                ${event.queryStringParameters.category}`
               }
                else if(event.pathParameters != null)
                {
                    body = `Processing Get Product Id with "${event.pathParameters.id}"`
                }
                else{
                    body=`Processing Get All Products`
                }
                break;
            case "POST":    
               let payload= JSON.parse(event.body)
               body=`Processing post products with "${payload}"`
               break;
            case "DELETE":
                if(event.pathParameters != null){
                    body = `Processing delete product ID with "${event.pathParameters.id}"`;    
                }   
                break;
            default:
                throw new Error(`Unsupported route:"${event.httpMethod}"`)
        }
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: `Successfully finished operation:
                    "${event.routekey}"`,
                    body: body
                })
        }
    }
    catch(e){
        return {
            statusCode: 400,
            body: JSON.stringify(
                {
                    message: `Failed some operation`,
                })
        }

    }
}
    