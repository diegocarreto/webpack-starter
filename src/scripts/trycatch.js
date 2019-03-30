try {
    
    // var person = newPerson;

    throw new Error(":(");

} catch (error) {
    
    console.error('error', error);
} finally {

    console.log('finally');
}