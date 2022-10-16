import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Header from "../component/Header";
import Contact from "../component/Contact";


function ResponsiveAutoExample() {
  return (
<>


   <Container>
      <Row>
        <Col sm={8}>
  
  

        <Header />
          <div style={{backgroundColor: "",height:"100%"}}>
            {/* Ist accordian */}
            <h4 > Module 1</h4>
          <div  className='accord' style={{fontWeight:'bolder',color:"red"}}>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header > EXCEL BASICS (for Beginners)</Accordion.Header>
        <Accordion.Body>
         
        <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lession-1</Accordion.Header>
        <Accordion.Body>
        <iframe width="90%" height="300" src="https://www.youtube.com/embed/zJ1uB5HQU84" frameborder="0" allowfullscreen></iframe>
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lession-1</Accordion.Header>
        <Accordion.Body>
        <iframe width="90%" height="300" src="https://www.youtube.com/embed/zJ1uB5HQU84" frameborder="0" allowfullscreen></iframe>
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lession-1</Accordion.Header>
        <Accordion.Body>
        <iframe width="90%" height="300" src="https://www.youtube.com/embed/zJ1uB5HQU84" frameborder="0" allowfullscreen></iframe>
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lession-1</Accordion.Header>
        <Accordion.Body>
        <iframe width="90%" height="300" src="https://www.youtube.com/embed/zJ1uB5HQU84" frameborder="0" allowfullscreen></iframe>
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>


          </div>


<h4 style={{marginTop:"30px"}}> Module 2</h4>


<div>
< Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> EXCEL ESSENTIALS</Accordion.Header>
        <Accordion.Body>
      
        <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
</div>


<h4 style={{marginTop:"30px"}}> Module 3</h4>

<div>
< Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> EXCEL FORMULAS</Accordion.Header>
        <Accordion.Body>
         
        <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        <iframe width="90%" height="300" src="https://www.youtube.com/embed/zJ1uB5HQU84" frameborder="0" allowfullscreen></iframe>
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        <iframe width="90%" height="300" src="https://www.youtube.com/embed/zJ1uB5HQU84" frameborder="0" allowfullscreen></iframe>
        
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>

    

</div>

{/* <Contact />    */}
 </div>
       
          
  
 <br></br>
    <br></br>
    <br></br>










    {/* right side */}

        </Col>
        <Col sm={4}>

        <div style={{backgroundColor: "green",height:"100vh"}}>byy</div>


      







        </Col>
      </Row>
      
    </Container>
 


  
</>
   

 
  );
}


export default ResponsiveAutoExample;