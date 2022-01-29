import { Interface } from '../framework/fishboard'

class ICar extends Interface {
    get price() { return Interface.Required }
}
class BMW extends ICar {

}

new BMW()