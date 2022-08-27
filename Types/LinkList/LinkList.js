import * as assert  from "node:assert";

class LinkList{
    constructor(descriptor){
        this.linkListSizeMin=descriptor['linkListSizeMin']
        this.linkListSizeMax=descriptor['linkListSizeMax']

    }
    isLinkList(){

    }

    assertLinkListSize(){

    }

    assertLinkListTypes(linkList, types){

    }




    getLinkListLength(lnklst, l=[0]){
        if(!this.validation._isObject(lnklst)){return false}
        if(lnklst['next']){
            l[0]+=1
            this.lnklstLength(lnklst['next'], l)
        }
        return l
    }

    getLinkListAt(lnklst, n, payload=[]){
        if(!this.validation._isObject(lnklst)){return false}
        if(n==0){
            payload.push(lnklst['payload'])
            return payload
        }else{
            if(lnklst['next']){
                this.lnklstLength(lnklst['next'], n-1)
            }else{
                return payload
            }
        }
        
        return payload
    }
}