import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTable } from 'primeng/treetable';
import { NodeService } from '../services/node-service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-tree-table-selection-checkbox-demo',
  templateUrl: './tree-table-selection-checkbox-demo.component.html',
  styleUrl: './tree-table-selection-checkbox-demo.component.css',
})
export class TreeTableSelectionCheckboxDemo implements OnInit {
  @ViewChild('tt') tt!: TreeTable;

  files!: TreeNode[];

  selectionKeys = {};

  cols!: Column[];

  filterMode = 'lenient';

  filterModes = [
    { label: 'Lenient', value: 'lenient' },
    { label: 'Strict', value: 'strict' },
  ];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getTreeTableNodes().then((files) => (this.files = files));

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
      { field: 'type', header: 'Place' },
      { field: 'type', header: 'Status' },
    ];

    this.selectionKeys = {
      '0-0': {
        partialChecked: false,
        checked: true,
      },
    };
  }

  onColumnFilter(event: Event, field: string) {
    const inputElement = event.target as HTMLInputElement;
    this.tt.filter(inputElement.value, field, 'contains');
  }
}
