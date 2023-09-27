// Laravel 
/*
- What's the difference between Auth::attempt($credentials) and Auth::login($user)?
-- So Attempt by it self does not login the user in, it just attempts to find a user in the database     
with the credentials, and then call login with the found user
*/



function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

let p1 = getElementByXpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[5]/div/div/div[2]/ul")

let p2 = getElementByXpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[8]/div/div/div[5]/div/div/div[2]/ul")
let Comments; 
if(p1 != null) {
    Comments = p1
} else {
    Comments = p2
    
}

let myArray = Array.from(Comments.children)
    console.log(`%cAll Comments : ${myArray.length}`, 'color:red;font-size:25px')

    myArray.forEach((el, index) => {

        let a1 = getElementByXpath(`/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[5]/div/div/div[2]/ul/li[${index+1}]/div[1]/div/div[2]/div[2]/ul/li[5]/div/div`)


        let a2 =  getElementByXpath(`/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div/div[8]/div/div/div[5]/div/div/div[2]/ul/li[${index+1}]/div[1]/div/div[2]/div[2]/ul/li[3]/div/div`)


        let hide 
        if(a1 != null) {
            hide = a1
        } else {
            hide = a2
            
        }

        hide.click()
    })

