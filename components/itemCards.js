export var itemCards = {
    props: ["item"],
    template: 
    `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <img v-bind:src="item.url" class="card-img-top" alt="...">
                <h5 class="card-title pt-2">{{ item.name }}</h5>
                <p class="card-text">Category: {{ item.category }}</p>
                <p class="card-text">Price: \${{ item.price.toLocaleString() }}</p>
                <p class="card-text">Date: {{ item.registerDate }}</p>  
            </div>
        </div>
    `
};
