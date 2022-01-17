import {
    Link,
    Outlet
  } from "react-router-dom";
  
const Layout=()=>{
    return(<>
                <h1>Hello Welcome to home page</h1>   
                <main>
                  <Outlet />
                </main>

         </>)
}
export default Layout;



