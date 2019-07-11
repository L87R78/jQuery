class MailBox {
    constructor(box){
        this.box = [];
    }

    addMessage(subject, text){
        this.box.push(subject + ", " + text);
        return this

    }
    get messageCount(){
        return this.box.length;
    }

    deleteAllMessages(){
        return this.box = [];
    }

    findBySubject(substr){
        let hasCheck = true;
        let list = [];

        for (let el of this.box) {
            if(el.includes(substr)){
                let split = el.split(',');
                let obj = {};
                obj.subject = split[0].trim();
                obj.text = split[1].trim();
                list.push(obj);
                hasCheck = false
            }
        }

        if(hasCheck){
            return list
        }
        return list


    }

    toString(){
        if(this.box.length > 0){
            let list = [];
            let temp = "";
            for (let el of this.box) {
                let temp = "";
                let split = el.split(',');
                temp += `[${split[0]}]`;
                temp += `${split[1]}`;
                list.push(`* ${temp}`);
            }
            return list.join('\n')
        }else{
            return '* (empty mailbox)'
        }
    }
}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
  new MailBox()
      .addMessage("Subj 1", "Msg 1")
      .addMessage("Subj 2", "Msg 2")
      .addMessage("Subj 3", "Msg 3")
      .toString());
