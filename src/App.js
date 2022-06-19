import  {Text , PaperBox , AlertField, InputSuffix, IconButtonComponent, CircularProgressComponent,  DrawerComponent, SelectSimple, TabComponent , SelectInput , ButtonElement , InputBox , AutoCompleteInput , SwitchInput , DialogBox, RichInput}  from './components';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';


function App() {

  const options = [{'value':'1' ,'label':'Google Sheets asdasdasd asdasd asdasdasdasdasdasd' ,'paid':true,'icon':'./assets/img/google.png', 'reference':'0x912819482039850298545094530495094'}, {'value':'2' , 'label':'MolochDao' , 'icon':['./assets/img/google.png','./assets/img/molochdao.png'] }, {'value':'3' , 'label':'Google' , 'icon':'./assets/img/google.png' }];

  const richInputOptions = [
    {
      value: "{{trigger.address}}",
      label: "Wallet address",
      paid: true,
      icon: "./assets/img/google.png",
      reference: "0x912819482039850298545094530495094",
      group: "Google Sheets",
    },
    {
      value: "{{trigger.txdate}}",
      label: "Transaction date",
      icon: "./assets/img/molochdao.png",
      group: "MolochDao",
      reference: "05/21/2022",
    },
    {
      value: "{{trigger.title}}",
      label: "Title",
      icon: "./assets/img/google.png",
      group: "Google Sheets",
      reference: "New title",
    },
    {
      value: "{{trigger.txhash}}",
      label: "Transaction hash",
      icon: "./assets/img/molochdao.png",
      group: "MolochDao",
      reference: "0x912819482039850298545094530495094",
    },
    {
      value: "{{trigger.details}}",
      label: "Details",
      icon: "./assets/img/google.png",
      group: "Google Sheets",
      reference: "Some long description text",
    },
  ];

  const cachedAddressBook = localStorage.getItem("gr_addressBook__123");
  const [addressBook, setAddressBook] = React.useState(
    cachedAddressBook ? JSON.parse(cachedAddressBook) : []
  );

  const options_tabs = ['All','Success','Error']


  const options_tabs_icon = [<PhoneIcon/>,<PhoneIcon/>,<PhoneIcon/>]

  const moneyOptions = [{label:'USD', value:'1'},{label:'EUR', value:'2'}]

  const [value, setValue] = React.useState([]);

  const [richInputValue, setRichInputValue] = React.useState("");

  const [switchValue, setSwitchValue] = React.useState(false);

  const [textValue,setTextValue] = React.useState('');


  const [valueInput,setValueInput] = React.useState('')

  const [valueTab,setValueTab] = React.useState(0)

  const [valueMoney,setValueMoney] = React.useState('');

  

  function handleChange(values) {
    
    if(!Array.isArray(values)){
      setValue([values]);
    }else{
      console.log(values)
      setValue(values);
    }

  }

  function handleChangeSwitch(event) {
    setSwitchValue(event.target.checked);
  }

  function handleClick() {

  }

  function handleClose(event) {
    console.log(event);
  }

  function onChangeText(event) {
    setValueInput(event.target.value)
  }

  function handleChangeMoney(event){

      console.log(event.target.value);

      setValueMoney(event.target.value)

  }

  function handleChangeTabs(value){
    setValueTab(value)
  }



  return (
    <div className="App">

      <PaperBox>

      <CircularProgressComponent  color="success" />

     <IconButtonComponent icon={"search"} type="text" color='#000' onClick={() => console.log('Hey')} />

      <TabComponent value={valueTab} type={"text"}  activeIndicatorColor={"#8C30F5"} tabColor={"#0B0D17"} activeColor={"#8C30F5"} options={options_tabs} onChange={handleChangeTabs} />

      <TabComponent value={valueTab} type={"icon"} orientation={"vertical"} activeIndicatorColor={"#8C30F5"} tabColor={"#0B0D17"} activeColor={"#8C30F5"} options={options_tabs_icon} onChange={handleChangeTabs} />

      <AlertField text={"No contacts created yet."} color={"error"} icon={<CheckCircleOutlineIcon fontSize="inherit" />} />

      <SelectSimple options={moneyOptions} value={valueMoney} onChange={handleChangeMoney} placeholder={"Money"}  />
      
      <InputSuffix value={valueInput} onChange={onChangeText} placeholder={"ETH"} suffix={"ETH"} />

      <DialogBox open={switchValue} maxWidth={"700px"} onClose={handleClose}>

        <h1>Hello</h1>

      </DialogBox>


        <SwitchInput value={switchValue} color="#000" on="On" off="Off" onChange={handleChangeSwitch} />
        <SwitchInput value={switchValue} color="#000" onChange={handleChangeSwitch} />
        <Text value={"Connect"} variant="h2" />
        <Text value={"Connect"} variant="h3" />  
        <AutoCompleteInput options={options} label={'Connect with...'}  value={value}  texthelper="You must have column headers" placeholder={"Search for an App"} onChange={handleChange} required={true}></AutoCompleteInput>
        <InputBox icon={"search"} type={"input-icon"} value={textValue} onChange={((e) => setTextValue(e.target.value))} label='Connect with...' texthelper="You must have column headers" required={true}></InputBox>
        <SelectInput options={options} type={"searchLabel"} multiple={true} value={value} texthelper="You must have column headers"  onChange={handleChange} label={'Connect with...'} placeholder={"0x"}></SelectInput>
        <SelectInput options={options} type={"default"} value={value} label={'Connect with...'} required={true} texthelper="You must have column headers" onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        
        {/*<AutoCompleteInput options={options} label={'Connect with...'}  value={value}  texthelper="You must have column headers" placeholder={"Search for an App"} onChange={handleChange} required={true}></AutoCompleteInput>
     
      */}
        <AutoCompleteInput options={options} variant={"full"} type={"searchLabel"} label={'Connect with...'}  value={value}  texthelper="You must have column headers" placeholder={"Search for an App"} onChange={handleChange} required={true}></AutoCompleteInput>
      
         
       
      {/*
        
        <SelectInput options={options} type={"default"} value={value} label={'Connect with...'} required={true} texthelper="You must have column headers" onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        <SelectInput options={options} type={"default"} value={value} label={'Connect with...'} required={true}  texthelper="You must have column headers" onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        <SelectInput options={options} type={"default"} value={value} label={'Connect with...'} required={true}  texthelper="You must have column headers"  onChange={handleChange} placeholder={"Choose sheet..."} ></SelectInput>
        
        <SelectInput options={options} type={"searchLabel"} multiple={false} value={value} variant={"default"}  texthelper="You must have column headers" onChange={handleChange} label={'Connect with...'}   placeholder={"0x"}></SelectInput>
     
     */}
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

      <div style={{ maxWidth: "375px", boxSizing: 'border-box', margin: "50px auto", padding: '20px', border: '1px solid #ddd' }}>
        <div style={{margin: '0 0 30px', textAlign: 'left', opacity: 0.5}}>&lt;RichInput&gt; component example</div>
        <RichInput
          required
          label="Some Label"
          value={richInputValue}
          options={richInputOptions}
          placeholder="Enter some value here"
          tooltip="Some tooltip with long text. Bla bla bla."
          hasAddressBook
          user="123:123"
          onChange={(val) => {
            setRichInputValue(val);
          }}
          addressBook={addressBook} 
          setAddressBook={setAddressBook}
        />
      </div>
      
    </div>
  )
}

export default App;
