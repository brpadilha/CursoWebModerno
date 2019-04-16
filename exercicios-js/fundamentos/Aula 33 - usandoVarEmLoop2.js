var funcs = []

for (var i = 0;i < 10; i++){

    funcs.push(function()
    {
        console.log(i)
    }) //vai adicionar no array
}

funcs[2]()
funcs[8]()
