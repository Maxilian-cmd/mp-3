import {StyledMain, StyledH3, Styledtable, TableWrapper} from "../Styles/Styles";


export default function Ref(){
    return (
        <StyledMain>
            <StyledH3>Reference</StyledH3>
            <br/><br/>
            <h4>personal</h4>
            <TableWrapper>
                <Styledtable border="1px solid black">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td>Senior</td>
                        <td>413-404-8973</td>
                    </tr>
                </Styledtable>
            </TableWrapper>
        </StyledMain>

    )
}