
const boxes =[];
function set_players(x){
    num_players = x;
    document.getElementById('players').style.display = 'none';
    for(let i = 0; i <= num_players; i++){
        boxes[i] = [0, 0, 0, 0, 0, 0, 0];
    }
    document.getElementById('names').style.display = 'block';
    
}

let names = []
let cur_player_name = 0;
//initals input

function submit_name(name){
    
    if(name == ""){
        names[cur_player_name] = document.getElementById("init");;
    }else{
        names[cur_player_name] = name;
    }
    console.log(names[cur_player_name]);
    cur_player_name++;
    if(cur_player_name == num_players){
        document.getElementById("names").style.display='none';
        cur_player_name = 0;
        draw_cricket();
    }
    document.getElementById('name_title').innerHTML = "Initals Player " + (cur_player_name+1);
    
}


function draw_cricket(){
    const game = document.getElementById('game_area');
    

    //Horizontal lines
    /*for(let i = 0; i < 7; i++){
        const head_line = document.createElement('div');
        game.appendChild(head_line);
        head_line.classList.add('horizontal_line');
        head_line.style.top = (i+1)*(100/7)+"%";
    }

    for(let i = 0; i <= num_players; i++){
        const col = document.createElement('div');
        game.appendChild(col);
        col.style.width = 100/num_players + "%";
        if(i != num_players) col.style.borderRight = "1px solid";
        if(i == Math.round(num_players/2)){
            console.log("TEST");
            const pound_symbol = document.createElement('h1');
            col.appendChild(pound_symbol);
            pound_symbol.classList.add("pound_symbol")
            pound_symbol.innerHTML = "#";
        }
    }*/

    //col is vertial
    //row is horizontal
    for(let row = 0; row <= num_players; row++){
        const row_div = document.createElement('row_'+row);
        game.appendChild(row_div);
        row_div.style.height = 100/(8)+"%";
        row_div.style.width = 100/(num_players+1)+"%";

        for(let col = 0; col < 8; col++){
            const box = document.createElement("div");
            row_div.appendChild(box);
            box.style.width = "100%";
            box.style.height = "100%";
            box.classList.add('boxes');
            if(col == 0){
                box.classList.add('name_boxes');
                console.log(row);
                if(row != Math.round(num_players/2)){
                    box.innerHTML = names[cur_player_name]
                    cur_player_name++;
                } 
                else{
                    const restart_game = document.createElement('button');
                    restart_game.onclick = function() {restart_game()};
                    restart_game.innerHTML = 'Restart Game';
                    const end_game = document.createElement('button');
                    end_game.onclick = function() {end_game()};
                    end_game.innerHTML = 'End Game';
                    box.innerHTML = "#"
                    box.appendChild(restart_game);
                    box.appendChild(end_game);
                    box.classList.add('game_control');
                }
                box.style.textAlign = 'center';
            }else{
                if(row == Math.round(num_players/2)){
                    box.classList.add('numbers');
                    if(col == 7){
                        box.innerHTML = "B";
                    }else box.innerHTML = 20 - col + 1;
                }else{
                    box.classList.add('player_'+(row+1)+"_boxes");
                    box.classList.add('player_boxes');
                    boxes[row][col] = box;
                    box.onclick = function() {box_click(row, col)};
                    
                }
            }
        }
    }
}

function box_click(row, col){
    if(boxes[row][col].innerHTML == "/"){
        boxes[row][col].innerHTML = "X";
    }else if(boxes[row][col].innerHTML == "X"){
        boxes[row][col].innerHTML = "O";
    }else if(boxes[row][col].innerHTML != "O"){
        boxes[row][col].innerHTML = "/"
    }
    

}

