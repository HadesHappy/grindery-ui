import  Text from './components/Text';
import  PaperBox from './components/PaperBox';
import Select from './components/Select';
import ButtonElement from './components/ButtonElement';
function App() {

  const options = ['Ethereum', 'Harmony', 'Google', 'Ripple', 'Bitcoin'];

  return (
    <div className="App">
      <PaperBox>
        <Text value={"Hola mundo"} variant="h3" />
        <Select options={options} label={'Hola'} placeholder={"Search for an App"}></Select>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="small" icon={true}/>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="large" icon={true}/>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="large" icon={true} disabled={true}/>
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
