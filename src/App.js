import  {Text , PaperBox , SelectInput , ButtonElement , InputBox , AutoCompleteInput}  from './components';
import React from 'react';

function App() {

  const options = [{'value':'1' ,'label':'Google Sheets' ,'icon':'./assets/img/google.png', 'reference':'0x912819482039850298545094530495094'}, {'value':'2' , 'label':'MolochDao' , 'icon':['./assets/img/google.png','./assets/img/molochdao.png'] }, {'value':'3' , 'label':'Google' , 'icon':'./assets/img/google.png' }];

  function handleChange(values) {
    console.log(values);
  }

  function handleClick() {

  }

  return (
    <div className="App">
      <PaperBox>
        <Text value={"Connect"} variant="h2" />
        <Text value={"Connect"} variant="h3" />  
        <InputBox label='Connect with...' texthelper="You must have column headers" required={true}></InputBox>
        <AutoCompleteInput options={options} label={'Connect with...'} texthelper="You must have column headers" placeholder={"Search for an App"} onChange={handleChange} required={true}></AutoCompleteInput>
        <AutoCompleteInput options={options} label={'Connect with...'} texthelper="You must have column headers" placeholder={"Search for an App"} onChange={handleChange} size={"full"} required={true}></AutoCompleteInput>
        <SelectInput options={options} type={"default"} label={'Connect with...'} required={true} texthelper="You must have column headers" onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        <SelectInput options={options} type={"default"} label={'Connect with...'} required={true}  texthelper="You must have column headers" onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        <SelectInput options={options} type={"default"} label={'Connect with...'} required={true}  texthelper="You must have column headers"  onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        <SelectInput options={options} type={"searchLabel"} variant={"full"}  texthelper="You must have column headers" onChange={handleChange} label={'Connect with...'} value={""}  placeholder={"0x"}></SelectInput>
        <SelectInput options={options} type={"searchLabel"} variant={"default"} texthelper="You must have column headers"  onChange={handleChange} label={'Connect with...'} value={""}  placeholder={"0x"}></SelectInput>
        <SelectInput options={options} type={"search"} iconDefault={true} iconUrl={'./assets/img/google.png'} placeholder={"Choose sheet..."}  onChange={handleChange}></SelectInput>
        <ButtonElement/>
        <ButtonElement
          value="Sign in"
          icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIPSURBVHgBzZVPSBRRHMe/b/7utmsubYfKpd0pw0y2Q0SBkRGRQUSdOnQsCqJDENWhU3STMOxWQbf+YmlQhCCuf06CKIqIIoguXlRQcEVdd2Z3nm9WHccBnVl3BL/D4/F783vzeb/35c0jsOnE98ddhOo1cFDVoejEZSV+7eXp2xNOuZw1KP/6MOIGYMjHi4qQoYmG/j8xp9wtkCwvCChAFFDAce11Q43H4RayGxkgWZcTH0ZaYtgrSB5EUb6iau1vexqPeApR9exWEKjC+6RE/fD/qD23IA+sGktNISwEEeRl6/CZHGgb6095AklnM+icHoKWSkNXc9ZXJ+25xXlCADHkByftvFZPjBdDPvB+EXsKMSSUyNuCHD05G445pWBwLmmCjC0sCKKzA9B84xVmVxbMscO+g2YsEJ4deIJzv55tfjAoFwbZUO2/11jQlhEU/Ri4+x4Xml6AIwSVoQi+XX/uON8VpL76PnJUh8yt7fmnK0/yfal0wM10d5CGwb9IqYsICH7UHKvCm96frBKgojSCd5ceeAN5VFmLTE6FtF7J0/itvL8lYsDNdHeQlsk+zKtLDCLgjnIRzePdIMyTskAY1UcrvIFcLYuzSjTTk5vR8/lKQpIHlbDF4vNIqxkbIGs8k57Hl9EOFAdhT11/E4qVZ7+V/QVJ3vuYZFv0m11zmoum2hu7HdOU0B92yCoK7aihV9++QAAAAABJRU5ErkJggg=="
      />
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
