class MailBox {
    constructor(box){
        this.box = [];
    }
    get messageCount(){
        return this.box.length;
    }
    addMessage(subject, text){
        this.box.push({
            subject: `${subject}`,
            text: `${text}`
        });
        return this
    }
    findBySubject(substr){
        let list = [];
        for (let el of this.box) {
            if (el.subject.indexOf(substr) !== -1) {
                list.push(el)
            }
        }
        return list
    }
    deleteAllMessages(){
        this.box = [];
    }
    toString(){
        let list = [];

        if(this.box.length === 0){
            return  `* (empty mailbox)`
        }else{
            for (let el of this.box) {
                let temp = "";
                let temp2 = "";
                let resulLine = "";
                temp += el.subject;
                temp2 += el.text;
                resulLine += `* [${temp}] ${temp2}`;

                list.push(resulLine);
            }
        }
        return list.join('\n')
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



