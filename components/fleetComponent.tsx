'use client';

import {Component} from "react";

type Props = {
    sailors: number;
};

export default class FleetComponent extends Component<Props> {
    render() {
        return (
            <div className="p-2 m-2 rounded-xl fleet-bg flex flex-row">
                <img src="/images/fleetIcon.jpg" alt="fleet icon" className="w-8 h-8 rounded-md" />
                <p className="flex items-center ml-3 p-1 rounded-md bg-gray-100">{this.props.sailors}</p>
            </div>
        )
    }
}