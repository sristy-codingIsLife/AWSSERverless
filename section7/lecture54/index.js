exports.handler = async function(event, context){

    console.log('Remaining time: ', context.getRemainingTimeInMillis())
    console.log('Function name: ', context.functionName)

    const body = 
       `Function name: ${context.functionName}
       LogStream name: ${context.logStreamName}`

       return body;
}
