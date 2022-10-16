
import  HeaderCSS  from "../CSS/Header.module.css";

function App() {
  return (
    <>

    <h2 className={HeaderCSS.header}> LEARN EXCEL - FREE ONLINE EXCEL TRAINING</h2>

    <div className={HeaderCSS.block}>

    <p className={HeaderCSS.para} style={{color:"rgb(194, 36, 36)",fontWeight:"bolder"}}> 26 Lessons, 12+ hours of Free Excel Training (Videos)</p>
    <p className={HeaderCSS.para} style={{color:"black"}}>Absolutely FREE | No Sign-up Needed | Scroll Down and Start Learning</p>


    
   


    </div>

<div className={HeaderCSS.body}>
<p>
If you’re an Excel beginner (or an intermediate) and want to learn Excel, this is the perfect place for you to start.
</p>
This page gives you access to a completely FREE Online Excel Training (26 video lessons with 12+ hours of learning).
<p>
You don’t need to sign-up or do anything to get access to the course. Just scroll down and start watching the videos to learn Excel.
</p>

<p>
To make the most of this free training, please go through these Excel training videos in the sequence in which they have been listed. I have also divided these into 7 modules.
</p>
<p>
In case the video looks a bit blurry, you can change the video quality to 720p (by clicking on the settings gear icon on the bottom right of the video screen)
</p>


</div>

   

    </>
  );
}

export default App;
