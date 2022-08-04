import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IPerfGoal } from 'src/app/store/features/performance/types';
import { CreatePerformanceService } from './create-performance.service';

@Component({
  selector: 'app-create-performance',
  templateUrl: './create-performance.component.html',
  styleUrls: ['./create-performance.component.css'],
})
export class CreatePerformanceComponent implements OnInit {
  @Input('setOpen') setOpen: boolean = false;
  @Output('close') setClose: EventEmitter<any> = new EventEmitter();
  performanceForm: FormGroup = new FormGroup({});

  constructor(private createPerformanceService: CreatePerformanceService) {}

  ngOnInit(): void {
    this.performanceForm = new FormGroup({
      performance: new FormArray([]),
      measures: new FormArray([]),
      comments: new FormArray([]),
    });
  }

  onClose() {
    this.setClose.emit();
  }

  onSubmit() {
    const performanceGoal: IPerfGoal = {
      type: 'performance goal',
      fields: {
        performance: {
          status: 'ongoing',
          data: this.performanceForm.get('performance')?.value,
        },
        measures: {
          status: 'ongoing',
          data: this.performanceForm.get('measures')?.value,
        },
        comments: {
          status: 'ongoing',
          data: this.performanceForm.get('comments')?.value,
        },
        score: 0,
        rating: 0,
      },
    };
    this.createPerformanceService.onCreateObjective(performanceGoal).subscribe({
      next: () => {
        this.onClose();
      },
    });
  }

  onAdd(fieldName: string) {
    (<FormArray>this.performanceForm.get(fieldName)).push(
      new FormControl(null)
    );
  }

  getControls(controlName: string) {
    return (this.performanceForm.get(controlName) as FormArray).controls;
  }
}
