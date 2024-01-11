import { useState } from "react";
import circle from "../../assets/circle.png"
import cross from "../../assets/cross.png"
import toast from "react-hot-toast";


let data = ["","","","","","","","",""];

const TicTacTue = () => {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
  

    const toggle = (e,num) => {
        if (lock) {
            return 0;         
        }
        if (count%2===0) {
            e.target.innerHTML = `<img src='${cross}'>`;
            data[num]="x";
            setCount(++count);     
        }
        else{
            e.target.innerHTML = `<img src='${circle}'>`;
            data[num]="o";
            setCount(++count);  
        }
        checkWin();
    }
        const checkWin = () => {
            if (data[0]===data[1] && data[1]===data[2] && data[2]!=="") {
                win(data[2]);
            }
            else if (data[3]===data[4] && data[4]===data[5] && data[5]!=="") {
                win(data[5]);
            }
            else if (data[6]===data[7] && data[7]===data[8] && data[8]!=="") {
                win(data[8]);
            }
            else if (data[0]===data[3] && data[3]===data[6] && data[6]!=="") {
                win(data[6]);
            }
            else if (data[1]===data[4] && data[4]===data[7] && data[7]!=="") {
                win(data[7]);
            }
            else if (data[2]===data[5] && data[5]===data[8] && data[8]!=="") {
                win(data[8]);
            }
            else if (data[0]===data[4] && data[4]===data[8] && data[8]!=="") {
                win(data[8]);
            }
            else if (data[2]===data[4] && data[4]===data[6] && data[6]!=="") {
                win(data[6]);
            }
            
        }


        const win = (winner) => {
            setLock(true)
            if (winner==="x") {
                toast.success(`Congratulation X win!`)
            }
            else{
                toast.success('Congratulation O win!')
            }
        }

   
    return (
        <div className="  bg-gray-800 mx-auto">
            <h1 className="flex justify-center  text-center text-white text-4xl md:text-6xl mb-5  md:mb-10 font-bold " >Tic Tac Toe Game</h1>
          <div className="flex lg:m-auto ml-10  lg:h-[555px] lg:w-[564px] ">
              {/* row1 */}
              <div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4"
                onClick={(e)=>{toggle(e,0)}}></div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4" onClick={(e)=>{toggle(e,1)}}></div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            {/* row2 */}
            <div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4"onClick={(e)=>{toggle(e,3)}}></div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4"onClick={(e)=>{toggle(e,4)}}></div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4"onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            {/* row3 */}
            <div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4"onClick={(e)=>{toggle(e,6)}}></div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4 "onClick={(e)=>{toggle(e,7)}}></div>
               <div className="flex h-28 w-28 lg:h-44 lg:w-44 bg-slate-600 rounded-xl  border-black cursor-pointer border-4"onClick={(e)=>{toggle(e,8)}}></div>
            </div>
          </div>
          <footer>
            <h1 className="text-white text-center">Create By Saif Mahin</h1>
          </footer>
             
        </div>
    );
};

export default TicTacTue;