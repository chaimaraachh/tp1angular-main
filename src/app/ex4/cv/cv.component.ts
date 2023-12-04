import { Component, OnInit } from '@angular/core';
import {Cv} from "../cv";
import { CvService} from 'src/app/services/cv-service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent  {

  selectedCv: Cv | null = null;
  cvs: Cv[] = [];

  constructor(private cvService: CvService) {
    this.cvService.getCvs().subscribe((cvs: Cv[]) => {
      this.cvs = cvs;
    });
  }

  showDetails(selectedCv: Cv) {
    this.selectedCv = this.cvs.find((cv) => cv === selectedCv) || null;
  }


}
