exports.handler = async function(event, context){
    const body = 
       `Function name: ${context.functionName}
       LogStream name: ${context.logStreamName}`
       return body;
}


