import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route);
  }

  goToChild() {
    this.router.navigate([`comp5`], {relativeTo: this.route});
  }

  goToDblLinkChild() {
    this.router.navigate([`comp3/comp4`], {relativeTo: this.route});
  }
}
