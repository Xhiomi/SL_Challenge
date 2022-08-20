import { LightningElement } from 'lwc';

const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'url' },
    { label: 'Account Owner', fieldName: 'Owner.Name', type: 'string' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
];

export default class Challenge extends LightningElement {
    data = [];
    columns = columns;
}
