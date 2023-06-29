import { Stack, Avatar } from '@mui/material';
import { Link } from 'react-router-dom' ;
import {logo, profilePhoto} from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (

<Stack 
direction="row"
alignItems="center" 
p={2} 
sx={{ position: 'sticky', background: '#0f0f0f', top:0, justifyContent:'space-between' }}
>

<Link to="/" style={{display:'flex', alignItems:'center'}}>

<img src={logo} alt="logo" height={30} />

</Link>
<SearchBar></SearchBar>
<Avatar 
alt="Profile Photo" 
src={profilePhoto}  
sx={{ width: 37, height: 37, border:'2px solid #606060' }}/>
</Stack>
  

)

export default Navbar
