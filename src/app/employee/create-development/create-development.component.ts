import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { IGoal } from 'src/app/store/features/development/types';
import { CreateDevelopmentService } from './create-development.service';

@Component({
  selector: 'app-create-development',
  templateUrl: './create-development.component.html',
  styleUrls: ['./create-development.component.css'],
})
export class CreateDevelopmentComponent implements OnInit {
  @Input('setOpen') setOpen: boolean = false;
  @Output('close') setClose: EventEmitter<any> = new EventEmitter();
  @ViewChild('formRef') formRef: NgForm | undefined;
  developmentForm: FormGroup = new FormGroup({});

  constructor(private createDevelopmentService: CreateDevelopmentService) {}

  ngOnInit(): void {
    this.developmentForm = new FormGroup({
      development: new FormArray([]),
      support: new FormArray([]),
      activity: new FormArray([]),
      comments: new FormArray([]),
    });
  }

  onClose() {
    this.setClose.emit();
  }

  onSubmit() {
    const developmentGoal: IGoal = {
      type: 'development goal',
      fields: {
        development: {
          status: 'ongoing',
          data: this.developmentForm.get('development')?.value,
        },
        support: {
          status: 'ongoing',
          data: this.developmentForm.get('support')?.value,
        },
        activity: {
          status: 'ongoing',
          data: this.developmentForm.get('activity')?.value,
        },
        comments: {
          status: 'ongoing',
          data: this.developmentForm.get('comments')?.value,
        },
        score: 0,
        rating: 0,
      },
    };

    this.createDevelopmentService.onCreateObjective(developmentGoal).subscribe({
      next: () => {
        this.onClose();
      },
    });
  }

  onAdd(fieldName: string) {
    (<FormArray>this.developmentForm.get(fieldName)).push(
      new FormControl(null)
    );
  }

  getControls(controlName: string) {
    return (this.developmentForm.get(controlName) as FormArray).controls;
  }
}
