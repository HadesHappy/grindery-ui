import  Text from './components/Text';
import  PaperBox from './components/PaperBox';
import Select from './components/Select';
import ButtonElement from './components/ButtonElement';
function App() {

  const options = [{'value':'Google Sheets' ,'icon':'./assets/img/google.png'}, {'value':'MolochDao' , 'icon':'./assets/img/molochdao.png' }, {'value':'Google' , 'icon':'./assets/img/google.png'}, {'value':'Ripple' , 'icon':'./assets/img/google.png'}, {'value':'Bitcoin' , 'icon':'./assets/img/google.png'}];


  function handleChange(event, value) {
    console.log(event, value);
  }

  function handleClick(event) {
    console.log(event);
  }

  return (
    <div className="App">
      <PaperBox>
        <Text value={"Connect"} variant="h2" />
        <Text value={"Connect"} variant="h3" />
        <Select options={options} label={'Connect with...'} placeholder={"Search for an App"} onChange={handleChange}></Select>
        <Select options={options} label={'Connect with...'} placeholder={"Search for an App"} onChange={handleChange} size={"full"}></Select>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="small" icon={true}/>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="large" icon={true}/>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="large" icon={true} disabled={false} onClick={handleClick}/>
        <ButtonElement value={"Back"} variant="outlined" color="primary" size="large" icon={true}/>
        <ButtonElement value={"Back"} variant="contained" color="secondary" size="large" icon={true}/>
        <ButtonElement value={"Back"} variant="outlined" color="secondary"  size="small" icon={true} disabled={true}/>
        <ButtonElement value={"Back"} variant="outlined" color="secondary"  size="large" icon={true} disabled={true}/>
        <ButtonElement value={"Back"} variant="outlined" color="secondary"  size="large" icon={true} disabled={false}/>
      </PaperBox>
    </div>
  )
}

export default App;
