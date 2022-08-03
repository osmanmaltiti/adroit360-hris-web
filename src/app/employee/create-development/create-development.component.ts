import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add_dev_goal } from 'src/app/store/features/development/development.actions';
import { IGoal } from 'src/app/store/features/development/types';
import { store } from 'src/app/store/store';

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

  constructor(private stores: Store<typeof store>) {}

  ngOnInit(): void {
    this.developmentForm = new FormGroup({
      development: new FormArray([]),
      management: new FormArray([]),
      activity: new FormArray([]),
      comment: new FormArray([]),
    });
  }

  onClick(id: string, name: string) {}

  onClose() {
    this.setClose.emit();
  }

  onSubmit() {
    const developmentGoal: IGoal = {
      type: 'development goal',
      fields: {
        ...this.developmentForm.value,
        score: 0,
        rating: 0,
      },
    };
    this.stores.dispatch(add_dev_goal({ payload: developmentGoal }));
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
