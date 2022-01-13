import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
// import Typography from '@material-ui/core/Typography'
// import MenuItem from '@material-ui/core/MenuItem'
// import RaisedSelect from 'src/components/selects/RaisedSelect'
// import SelectOption from 'src/components/selects/SelectOption'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
function SendHeader(props) {
  const { styles, bridges, selectedBridge, handleBridgeChange } = props
  const [nftAddress, setNftAddress] = useState("");
  const [lockInput, setLockInput] = useState(false);
  const changeNftAddress = (e: any) => {  
    setNftAddress(e.target.value);
  }
  const lockNFT = () => {
    setLockInput(true);
  }
  const unlockNFT = () => {
    setLockInput(false);
  }
  return (
    <div className={styles.header}>
      <Box display="flex" alignItems="center" className={styles.sendSelect}  sx={{ flexGrow: 1 }} >
      <Grid container spacing={5}>
        <Grid item md={9} xs = {12}>
          {
            !lockInput
            ? <TextField type="text" id="standard-basic" label="Address" value={nftAddress} 
            onChange={changeNftAddress} placeholder="0xe8c125A440c049D08969d20657F46f87C8e659a5" fullWidth/>
            : <TextField type="text" id="standard-basic" label="Address" value={nftAddress} fullWidth disabled
            />
          }
          
        </Grid>
        <Grid item md={3} xs = {12}>
          {
            !lockInput 
            ? <Button variant="contained" color="primary" onClick={lockNFT}>Lock NFT</Button> : <Button variant="contained" color="secondary" onClick={unlockNFT}>Unlock NFT</Button>
          } 
          
        </Grid>
      
      
        {/* <Typography variant="h4" className={styles.sendLabel}>
          Send1
        </Typography>
        <RaisedSelect value={selectedBridge?.getTokenSymbol()} onChange={handleBridgeChange}>
          {bridges.map(bridge => (
            <MenuItem value={bridge.getTokenSymbol()} key={bridge.getTokenSymbol()}>
              <SelectOption
                value={bridge.getTokenSymbol()}
                icon={bridge.getTokenImage()}
                label={bridge.getTokenSymbol()}
              />
            </MenuItem>
          ))}
          
        </RaisedSelect> */}
        </Grid>
      </Box>
    </div>
  )
}

export default SendHeader
