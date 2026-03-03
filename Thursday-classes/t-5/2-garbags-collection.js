// reachability
//object are retaained in memory while they are reachable

let temp = {
    email: 'jasd.com',
    vild: '5'
}

//after 5min
temp = null;

//there is no way to access it, no refernces to it
//garbage collector will junk the data and free the memory

const movie = {
    titile: 'ghosted',
    release: 2023,
    prodcution: 'aplle tv'
}

function coStar(actor, actress){
    actor.coStar = actress;
    actress.coStar = actor;

    return {
        lead: actor,
        supprting: actress
    }
}
movie.cast = coStar(
    {name: 'chris evans', salary: 2123234},
    {name: 'ana de armas', salary: 45465},
)

movie.cast = null;

