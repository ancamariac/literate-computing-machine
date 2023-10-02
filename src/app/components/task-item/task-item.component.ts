import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../Task'
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
   @Input() task!: Task
   @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
   faTimes = faTimes;

   onDelete(task: any) {
      console.log('delete', task);
      this.onDeleteTask.emit(task);
   }

   onToggle(task: any) {
      this.onToggleReminder.emit(task);
   }    
}
