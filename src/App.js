import  {Text , PaperBox , SelectInput , ButtonElement , InputBox , AutoCompleteInput}  from './components';

function App() {

  const options = [{'value':'Google Sheets' ,'icon':'./assets/img/google.png' , 'reference':'0x912819482039850298545094530495094'}, {'value':'MolochDao' , 'icon':'./assets/img/molochdao.png' }, {'value':'Google' , 'icon':'./assets/img/google.png'}, {'value':'Ripple' , 'icon':'./assets/img/google.png'}, {'value':'Bitcoin' , 'icon':'./assets/img/google.png'}];


  function handleChange(event, value) {
    console.log(event.target.value, value);
  }

  function handleClick(event) {
    console.log(event);
  }

  return (
    <div className="App">
      <PaperBox>
        <Text value={"Connect"} variant="h2" />
        <Text value={"Connect"} variant="h3" />
        <InputBox></InputBox>
        <AutoCompleteInput options={options} label={'Connect with...'} placeholder={"Search for an App"} onChange={handleChange}></AutoCompleteInput>
        <AutoCompleteInput options={options} label={'Connect with...'} placeholder={"Search for an App"} onChange={handleChange} size={"full"}></AutoCompleteInput>
        <SelectInput options={options} type={"default"} onChange={handleChange}></SelectInput>
        <SelectInput options={options} type={"searchLabel"}  onChange={handleChange}></SelectInput>
        <SelectInput options={options} type={"search"} iconDefault={true} iconUrl={'./assets/img/google.png'} placeholder={"Choose sheet..."}  onChange={handleChange}></SelectInput>
        <ButtonElement/>
        <ButtonElement value={"Back"} variant="contained" color="primary" size="small" />
        <ButtonElement value={"Back"} variant="contained" color="primary" size="large" />
        <ButtonElement value={"Back"} variant="contained" color="primary" size="large" disabled={false} onClick={handleClick}/>
        <ButtonElement value={"Back"} variant="outlined" color="primary" size="large" />
        <ButtonElement value={"Continue"} variant="contained" color="secondary" size="large" icon={'./assets/img/google.png'}/>
        <ButtonElement value={"Back"} variant="outlined" color="secondary"  size="small" disabled={true}/>
        <ButtonElement value={"Back"} variant="outlined" color="secondary"  size="large"  disabled={true}/>
        <ButtonElement value={"Back"} variant="outlined" color="secondary"  size="large"  disabled={false}/>
      </PaperBox>
    </div>
  )
}

export default App;
