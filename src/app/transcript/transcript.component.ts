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
  qnaArray: ITranscript[] = [];
 
  jsonToObject() {
    transcript1.forEach((object) => {
      if(object.transcriptcomponenttypeid == "7" ||
        object.transcriptcomponenttypeid == "3" ||
        object.transcriptcomponenttypeid == "4" ){
          this.qnaArray.push(object);
        }
        else {
          this.transcriptArray.push(object);
        }
    })
   console.log(this.transcriptArray);
  }
  
  findQuestionIds() {
    //Go through all parts of the table with the qna
    //Catch any with an id containing question
    //Make html elements and put them in the sidenav
  }

}
