import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ITranscript } from '../interfaces/transcript.interface';
import { transcript1 } from '../data/transcript1';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit, AfterViewInit {
  @ViewChild('tranTable') table!: ElementRef<HTMLTableElement>;
  @ViewChild('row') tableRows!: ElementRef<HTMLTableRowElement[]>;
  ngOnInit(){
    this.jsonToObject();
    this.findQuestionIds();
    
  }

    questionIdArray: any[] = [];
  ngAfterViewInit() {

    for(let i = 0; i < this.table.nativeElement.rows.length; i++){
      if(this.table.nativeElement.rows.item(i)?.id != ''){
        this.questionIdArray.push(this.table.nativeElement.rows.item(i)?.id);
      }
    }
    console.log(this.questionIdArray);
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
   
  }
  
  @ViewChild('transcriptTable') tableRef!: ElementRef;
  findQuestionIds() {
    this.qnaArray.forEach(function(line) {
      if(line.transcriptcomponenttypeid == "3"){
      }
    });
    
}

 index = 0;

    //Go through all parts of the table with the qna
    //Catch any with an id containing question
    //Make html elements and put them in the sidenav
    consoleLog(test: ITranscript){
      if(test.transcriptcomponenttypeid == "3"){
        this.index = this.index + 1;
      console.log("found test", this.index);

      }
    }

}

