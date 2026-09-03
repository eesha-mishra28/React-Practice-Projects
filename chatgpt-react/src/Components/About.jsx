import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/contact');
  }
  return (
    <div>
    <button onClick={()=>{handleClick()}}>Contact</button>
    </div>
  )
}
export default About;