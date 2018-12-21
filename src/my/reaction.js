import { action, observable, reaction } from 'mobx';
import { asComponent } from '../core/as-component';

export const ReactionExample = asComponent(() => {
    class Cart{
        @observable a = 10;
        @observable b = 0;

        cancelTrack = null;

        track(){
            if(this.cancelTrack){
                this.cancelTrack();
            }

            this.cancelTrack = reaction(
                () => {
                    return this.a - this.b;
                },
                difference => {
                    console.log('price a - b', this.a, this.b);
                }
            )
        }

        @action
        changeAB(a, b){
            this.a = a;
            this.b = b;
        }

    }

    const cart = new Cart();
    cart.track();
    cart.changeAB(21, 10);
    cart.changeAB(20, 10);

});