
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

import Vue from 'vue';

Vue.component('signatures', {
	template: '<p>Nothing for now</p>'
})

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