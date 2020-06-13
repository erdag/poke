import React,{useState,useEffect} from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';



const GET_POKEDEX = gql`
query MyQuery {
  pokemon(limit: 800) {
    Attack
    Defense
    Generation
    HP
    Legendary
    Name
    SpAtk
    SpDef
    Speed
    Total
    Type1
    Type2
    code
  }
}
  `;



const Pokelist = () => {
    const { loading, error, data } = useQuery(GET_POKEDEX);
    

    const [tbl, setTbl] = useState([]);
    const [sorted, setsorted] = useState(false);
    
 
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }

    console.log(data);
    const data2 = data.pokemon;
    
    
    const sortAsc = (by)=>{
    
      data2.sort((a, b) => (a[by]> b[by]) ? 1 : -1);
      console.log(data2);
      sorted ? setsorted(false):setsorted(true);
      
    };

    const sortDesc = (by)=>{
    
      data2.sort((a, b) => (a[by]< b[by]) ? 1 : -1);
      console.log(data2);
      sorted ? setsorted(false):setsorted(true);
      
    };
    

    

    return (
      
      <div className="pokelist">
        <table>
        <tbody>
          <tr>
            
            <th>Code <br/>
              <button onClick={()=>sortAsc("code")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("code")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            <th>Sprite</th>
            <th>Name</th>
            <th>Type</th>
            <th>Gen</th>
            
            <th>HP <br/>
              <button onClick={()=>sortAsc("HP")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("HP")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            
            <th>Attack <br/>
              <button onClick={()=>sortAsc("Attack")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("Attack")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            
            <th>Defense <br/>
              <button onClick={()=>sortAsc("Defense")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("Defense")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            <th>Speed <br/>
              <button onClick={()=>sortAsc("Speed")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("Speed")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            
            <th>Total <br/>
              <button onClick={()=>sortAsc("Total")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("Total")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            
            <th>Sp Atk <br/>
              <button onClick={()=>sortAsc("SpAtk")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("SpAtk")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>
            
            <th>SpDef <br/>
              <button onClick={()=>sortAsc("SpDef")}><i className="fa fa-arrow-up" style={{"fontSize":"8px"}}></i></button>
              <button onClick={()=>sortDesc("SpDef")}><i className="fa fa-arrow-down" style={{"fontSize":"8px"}}></i></button>
            </th>

          </tr>
        
          {data2.map(poke => ( <tr key={poke.Name+poke.Attack}>
            <td>{poke.code}</td>
            <td><img src={"https://img.pokemondb.net/sprites/sword-shield/icon/"+poke.Name.replace(" ","-").toLowerCase()+".png"}/></td>
            
            <td>{poke.Name}</td>
            <td>
              <a className={"type-icon type-"+poke.Type1}>{poke.Type1}</a>
              <br></br>
              <a className={"type-icon type-"+poke.Type2}>{poke.Type2}</a>
            </td>
            <td>{poke.Generation}</td>
            <td>{poke.HP}</td>
            <td>{poke.Attack}</td>
            <td>{poke.Defense}</td>
            <td>{poke.Speed}</td>
            <td style={{color:"white",backgroundColor:"black",opacity:0.3}}>{poke.Total}</td>
            <td>{poke.SpAtk}</td>
            <td>{poke.SpDef}</td>
            </tr>)  )}
        </tbody>
        </table>

        </div>
    );
  };


export default Pokelist;
