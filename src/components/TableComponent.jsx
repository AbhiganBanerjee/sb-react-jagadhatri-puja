import { RadioGroup, Radio, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, Button} from "@nextui-org/react";
import { useState } from "react";
import confetti from "canvas-confetti";
const TableComponent = ()=>{

    const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
    const [selectedColor, setSelectedColor] = useState("default");

    const handleClick = ()=>{
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "❤️💙", scalar });
 
    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };
 
    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });
 
      confetti({
        ...defaults,
        particleCount: 5,
      });
 
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };
 
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    };

    return(
        <>
            <div className="flex flex-col gap-3">
                <Table 
                    color={selectedColor}
                    selectionMode="single" 
                    defaultSelectedKeys={["2"]} 
                    aria-label="Example static collection table"
                >
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Tony Reichert</TableCell>
                            <TableCell>CEO</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>Zoey Lang</TableCell>
                            <TableCell>Technical Lead</TableCell>
                            <TableCell>Paused</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Jane Fisher</TableCell>
                            <TableCell>Senior Developer</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>Vacation</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <RadioGroup 
                    label="Selection color"
                    orientation="horizontal"
                    value={selectedColor} 
                    onValueChange={setSelectedColor}
                >
                    {colors.map((color) => (
                        <Radio
                            key={color}
                            color={color}  
                            value={color}
                            className="capitalize"
                        >
                            {color}
                        </Radio>  
                    ))}
                </RadioGroup>
            </div>
            <br/>
            <hr/>
            
            <Button onClick={handleClick}>Confettti</Button>
        </>
    );
}
export default TableComponent;