import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions).map(function(mapentry) {
                return (
                    <tr>
                    <td style={{color: "black",border: "1px solid black"}}>{mapentry[0]}</td>
                    <td style={{color: "black",border: "1px solid black"}}>{mapentry[1]}</td>
                    </tr>
                )
                })}
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
