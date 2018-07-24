

class Parent{
    constructor(name){
        this.name=name
    }
    testMethod (){
        console.log("wdasdasd")
    }
}


Parent.instance=null;
Parent.createParent=function(){
    if(!Parent.instance){
        return new Parent("zhangsan")
    }else{
        return Parent.instance
    }
}
let test=Parent.createParent()
test.testMethod()