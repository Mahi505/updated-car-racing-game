function p(){
b.hide()
i.hide()
var name=i.value()
greet=createElement("h4")
greet.html("welcome! "+name)
greet.position(200,50)
pc=pc+1
link=pc
db.ref("/").update({
 playercount:pc   
})
db.ref("players/player"+pc).set({
    y:5620,
    index:pc
})
}

function r(){
db.ref("/").update({
    gamestate:0,
    playercount:0
})
db.ref("players").remove(
)




}





