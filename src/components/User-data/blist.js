import { Subject } from 'rxjs';

const bookedList = new Subject();

export const messageService = {
   addpackage: message => bookedList.next({ text: message }),
    delpackage: () => bookedList.next(),
    getMessage: () => bookedList.asObservable()
};