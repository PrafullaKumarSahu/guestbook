
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

import Vue from 'vue';

import Signatures from './components/Signatures.vue';

new Vue({
    el: '#app',

    components: {
    	Signatures
    },
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
    methods: {
    	onSubmit() {
    		this.form.submit('post', '/api/signatures')
    			.then(data => console.log(data))
    			.catch(error => console.log(error));

    	}
    }
});