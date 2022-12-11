import * as React from "react";
import {Routes, Route, Outlet, Link, useParams} from "react-router-dom";
import Form from "./Form.tsx";
import FormReg from "./FormReg.tsx";
import Loged from "./Loged.tsx";


export default function App() {

  return (

      <body bgcolor="#708090">

      <div>
          <body bgcolor="#222330">
        <center>
        <h1><font color="#f5f5f5" face="Rockwell">derq</font></h1>


        <p>
          <font color="#f5f5f5" face="calibri" size="5">ЗАЧЁТНАЯ НЕДЕЛЯ</font> <font color="red" face="calibri" size="5">НАСТУПАЕТ</font>
        </p>
        <p>
          <font color="red" face="calibri" size="5">ЛАБА</font> <font color="#f5f5f5" face="calibri" size="5">ЭТО ЗАЧЁТ</font>
        </p>
        <p>
          <font color="red" face="calibri" size="5">РАБОТА ДОЛЖНА БЫТЬ СДАНА</font>
        </p>
        <p>
          <font color="#f5f5f5" face="Rockwell" size="5">*ULTRAKILL'S INTRO KICKS IN*</font>
        </p>
        </center>
          </body>
      </div>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="Form" element={<Form />} />
              <Route path="Form/Loged/:login" element={<Loged />} />

            <Route path="FormReg" element={<FormReg />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>

      </body>
  );
}



function Home() {
  return (
      <div>
        <h2><font color="#f5f5f5" face="Rockwell" size="5">Home</font></h2>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/Form">Form</Link>
                  </li>
                  <li>
                      <Link to="/FormReg">FormReg</Link>
                  </li>

              </ul>
          </nav>
      </div>
  );
}





function NoMatch() {
  return (
      <div>
        <h2><font color="#f5f5f5" face="Rockwell" size="5">Nothing to see here!</font></h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
  );
}
