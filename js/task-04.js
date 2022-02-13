class CounterPlagin {

    constructor({counterValue = 0, step = 1, rootSelector} = {}) {
        this.value = counterValue;
        this.step = step;
        this.rootSelector = rootSelector;
        this.refs = this.getRefs(rootSelector);
        this.bindEvent();
        this.clearValueUI();

    }

    getRefs(rootSelector) {

        const refs = {};
        refs.container = document.querySelector(rootSelector);
        refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');  
        refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
        refs.screenValue = refs.container.querySelector('#value');
    
        return refs
    }

    increment() {
        this.value += this.step
    }

    decrement() {
        this.value -= this.step
    }

    bindEvent() {
        this.refs.incrementBtn.addEventListener("click", () => {

            this.increment()
            console.log(this.value);
            this.updateValueUI();
        });

        this.refs.decrementBtn.addEventListener("click", () => {

            this.decrement()
            console.log(this.value);
            this.updateValueUI();
        });
        
    }

    updateValueUI() {
        this.refs.screenValue.textContent = this.value;
    }

    clearValueUI() {
        this.refs.screenValue.addEventListener("click", () => {

            this.value = 0
            this.updateValueUI();
        });
    }

}


const counter = new CounterPlagin({
    counterValue: 0,
    step: 1,
    rootSelector: '#counter',
});

console.log(counter);