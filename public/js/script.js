class Errors {
	constructor() {
		this.errors = {};
	}

	get(field) {
		if ( this.errors[field] ){
			return this.errors[field][0];
		}
	}

	record(errors) {
		this.errors = errors;
	}

	clear(field) {
		delete this.errors[field];
	}

	has(field){
		if ( this.errors[field] )
			return this.errors[field][0];
	}

	any(){
		return Object.keys(this.errors).length > 0;
	}
}
Vue.component('signatures', {
    template: '<p>Nothing for now</p>'
});
new Vue({
    el: '#app',
    data: {
    	signatures: [],
    	name: '',
    	email: '',
    	body: '',
    	saved: false,
    	errors: new Errors(),
    	message: '',
    },
    mounted(){
        // axios.get('/api/signatures').then(function (response) {
        //     this.signatures = response.data.data;
        // }.bind(this));
        axios.get('/api/signatures')
        	.then(response => this.signatures = response.data.data);
    },
    methods: {
    	onSubmit(){
    		axios.post('/api/signatures', this.$data)
    			.then(this.onSuccess)
    			.catch(error => this.errors.record(error.response.data.errors));
    	},

    	onSuccess(){
    		this.name = '';
    		this.email = '';
    		this.body = '';
    	}
    }
});