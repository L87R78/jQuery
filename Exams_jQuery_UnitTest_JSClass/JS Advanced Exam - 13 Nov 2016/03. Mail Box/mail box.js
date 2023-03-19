class MailBox {
    constructor(box){
        this.box = box;
        this.messageCount = 0;
        this.addMessage = {};

    }

    addMessage(){
        return this._addMessage().count()
    }
    messageCount(){
        return this.messageCount
    }
}
let mb = new MailBox();
