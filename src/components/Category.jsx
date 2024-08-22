import {Select, SelectItem} from "@nextui-org/react";
import { useState } from "react";

const Category = ({categories,isTheme,isMatch,onChange})=>{
    
    const [selectedItem, setSelectedItem] = useState(null);
    
    return(
        <>
            <Select style=
                {{
                    fontFamily:"monospace",
                    marginTop:"20px", 
                    fontWeight:"bold",
                    width:isMatch?"200px" : "250px"
                }} 
                onChange={onChange}
                color={isTheme?'success':'warning'}
                label="Pick Year" 
                className="max-w-xs" 
            >
                {categories.map((item) => (
                    <SelectItem style={{fontFamily:"monospace"}} variant='shadow' value={item} color={isTheme?'success':'warning'} className={isTheme?'text-dark':'text-warning'} key={item}>
                        {item}
                    </SelectItem>
                ))}
            </Select>
        </>
    );
}
export default Category;