const friends = ["Rana", "Anik", "Avik", "Rifat"];

console.log(friends.includes('Rana'))
console.log(friends.includes('Avik'))
console.log(friends.includes('Libib'))

if (friends.includes('Kishore')) {
    console.log('I am sure ,I know him. He is student of mc college.')
}
else if (friends.includes('Rana')) {
    console.log('I am sure ,I know him.He is khadok students')
}
else if (friends.includes('Rifat')) {
    console.log('I am sure ,I know him.He is LUTU PUTU students')
}
else {
    console.log('Sorry. Kishore not your friend.')
}
