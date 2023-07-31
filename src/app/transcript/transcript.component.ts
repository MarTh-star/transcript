import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../interfaces/transcript.interface';
import { transcript1 } from '../data/transcript1';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

  ngOnInit(){
    this.jsonToObject();
  }
  title = 'Transcript';
  transcriptArray: ITranscript[] = [];
 
  jsonToObject() {
    transcript1.forEach((object) => {
      this.transcriptArray.push(object);
    })
   console.log(this.transcriptArray);
  }
  

}
