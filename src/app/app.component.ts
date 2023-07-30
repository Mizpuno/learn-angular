import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  count: number
  imgSrc = "./assets/angular.png"
  captionList: CaptionItem[] = [
    {
      id: 1,
      message: "ถ้าที่ตรงนั้น ไม่ใช่ที่ของเรา เราจะไม่มีโฉนด 🤣",
      icon: './assets/icons/ic_funny_02.png'
    },
    {
      id: 2,
      message: "เขามันทรงดี  ส่วนเราทรงตัวได้ก็บุญแล้ว",
      icon: './assets/icons/ic_funny_03.png'
    },
    {
      id: 3,
      message: "โตมาถึงได้รู้ว่า โลกไม่ได้สวยเหมือนเรา 😹",
      icon: './assets/icons/ic_funny_04.png'
    },
  ]
  usedCaptionList: CaptionItem[] = []


  //type inference
  // messages = [
  //   'ถ้าที่ตรงนั้น ไม่ใช่ที่ของเรา เราจะไม่มีโฉนด 🤣',
  //   'เขามันทรงดี  ส่วนเราทรงตัวได้ก็บุญแล้ว',
  //   'โตมาถึงได้รู้ว่า โลกไม่ได้สวยเหมือนเรา 😹',
  // ];

  constructor() {
    this.title = this.nmRandomCaption()
    this.count = 0
  }

  nmRandomCaption() {
    do {
      var randomIndex = this.getRandom(this.captionList.length)
    } while (this.title == this.captionList[randomIndex].message)

    this.imgSrc = this.captionList[randomIndex].icon
    return this.captionList[randomIndex].message

    // let tmp = this.captionList
    // tmp.splice(tmp.indexOf(this.title), 1)
    // var randomIndex = this.getRandom(tmp.length)
    // return tmp[randomIndex]
  }

  rmRandomCaption() {
    let randomIndex : number
    let usedCaption : CaptionItem

    if (this.usedCaptionList.length == this.captionList.length) {
      return '';
    }

    do {
      randomIndex = this.getRandom(this.captionList.length)
      usedCaption = this.captionList[randomIndex]
    } while (this.usedCaptionList.includes(usedCaption))
    
    this.usedCaptionList.push(usedCaption)
    this.imgSrc = usedCaption.icon
    return usedCaption.message
  }

  // call normal handle-click-button.
  nmHandleClickButton() {
    this.title = this.nmRandomCaption()
    this.count++
  }

  rmHandleClickButton() {
    this.title = this.rmRandomCaption()
    this.count++
  }

  getRandom(max: number) {
    return Math.floor(Math.random() * max)
  }
}

