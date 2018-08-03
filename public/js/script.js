class Form {
	constructor(data) {

		this.originalData = data;

		this.data = data;

		for ( let field in data ){
			this[field] = data[field];
		}

		this.errors = new Errors()
	}

	postedData(){
		let data = {};
		
		for ( let property in this.originalData ) {
			data[property] = this[property];
		}

		return data;
	}

	reset() {
		for ( let field in this.originalData ){
			this[field] = '';
		}

		this.errors.clear();
	}

	submit(requestType, url) {
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.postedData())
			.then(response => {
				this.onSuccess(response.data);

				resolve(response.data);
			})
			.catch(error => {
				this.onFail(error.response.data.errors);

				reject(error.response.data.errors);
			});
		});
	}

	onSuccess(data) {
		this.reset();
	}

	onFail(errors) {
		this.errors.record(errors);
	}
}

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
		if ( field ){
			delete this.errors[field];
			return;
		} else{
			this.errors = {};
		}
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
    	form: new Form({
    		name: '',
	    	email: '',
	    	body: '',
    	}),
    	saved: false,
    	message: '',
    },
    mounted() {
        axios.get('/api/signatures')
        	.then(response => this.signatures = response.data.data);
    },
    methods: {
    	onSubmit() {
    		this.form.submit('post', '/api/signatures')
    			.then(data => console.log(data))
    			.catch(error => console.log(error));

    	}
    }
});