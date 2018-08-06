export default {
	template: '<ul><li v-for="signature in signatures">{{ signature.name }}</li></ul>',
	data(){
		return {
			signatures: []
		}
	},
	mounted() {
        axios.get('/api/signatures')
        	.then(response => this.signatures = response.data.data);
    }
}