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
		let data = Object.assign({}, this);
		delete data.originalData;
		delete data.errors;
		return data;
	}

	reset() {
		for ( let field in this.originalData ){
			this[field] = '';
		}
	}

	submit(requestType, url) {
		axios[requestType](url, this.postedData())
    			.then(this.onSuccess.bind(this))
    			.catch(this.onFail.bind(this));
	}

	onSuccess(response) {
		this.errors.clear();
		this.reset();
	}

	onFail(error) {

		this.errors.record(error.response.data.errors);
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
    		this.form.submit('post', '/api/signatures');
    	}
    }
});