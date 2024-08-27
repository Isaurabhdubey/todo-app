import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { User } from './apiModels/user.interface';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title: string = 'Hello App compoennt';
  favoriteColorControl = new FormControl('');
  constructor(private dataservice: DataService) {}
  ngOnInit() {
    console.log('hello');
    this.dataservice.getPosts().subscribe((res) => {
      console.log(res);
    });
    console.log();
  }
}
