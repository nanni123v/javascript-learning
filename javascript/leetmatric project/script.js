document.addEventListener("DOMContentLoaded",function(){
    const searchButton=document.getElementById("search-btn");
        const usernameInput=document.getElementById("user-input");
        const statsContainer= document.querySelector(".stats-container");
        const easyProgressCircle= document.querySelector(".easy-progress");
        const mediumProgressCircle= document.querySelector(".medium-progress");
        const hardPRogressCircle= document.querySelector(".hard-progress");
        const cardstatsContainer= document.querySelector(".stats-cards");
        const easyLabel=document.getElementById("easy-label");
         const mediumLabel=document.getElementById("medium-label");
                const hardLabel=document.getElementById("hard-label");
 

     //return true or false based on regex
     function validateUsername(username){
        if(username.trim()===""){
            alert("username should not be empty");
            return false;
        }
        const regex =/^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching=regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
     }
    async function fetchUserDetails(username){
        const targetUrl = 'https://leetcode.com/graphql/';
        const myHeaders = new Headers();
        myHeaders.append("content-type","application/json");

        const graphql =JSON.stringify({
            query:"\n quer"
        })
    }

     searchButton.addEventListener('click',function(){
        const username=usernameInput.value;
        console.log("loggin username:",username);
        if(validateUsername(username)){
            fetchUserDetails(username);

        }
     })





})