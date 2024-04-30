import React, {Component} from "react";

interface ShipComponentProps { 
    sailors: number;
}


export default class ShipComponent extends Component<ShipComponentProps> {
  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src="/images/ship.png" width={40} height={40} alt={'ship'}/>
        <p>{this.props.sailors}</p>
      </div>
    );
  } 
}