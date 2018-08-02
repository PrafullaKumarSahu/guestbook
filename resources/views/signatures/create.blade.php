@extends('signatures.master')

@section('content')
    <div class="container">
        <div class="row">
	        <div class="col-md-12">
		        <div class="alert alert-success" v-if="saved">
		            <strong>Success!</strong> Your signature has been saved successfully.
		        </div>

		        <div class="well well-sm" id="signature-form">
		            <form class="form-horizontal" method="post" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
		                <fieldset>
		                    <legend class="text-center">Sign the GuestBook</legend>

		                    <div class="form-group">
		                        <label class="col-md-3 control-label" for="name">Name</label>
		                        <div class="col-md-9">
		                            <input id="name"
		                            	   name="name"
		                                   type="text"
		                                   v-model="name"
		                                   placeholder="Your name"
		                                   class="form-control">
		                                   <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
		                        </div>
		                    </div>

		                    <div class="form-group">
		                        <label class="col-md-3 control-label" for="email">Your E-mail</label>
		                        <div class="col-md-9">
		                            <input id="email"
		                            	   name="email"
		                                   type="text"
		                                   v-model="email"
		                                   placeholder="Your email"
		                                   class="form-control">
		                                   <span class="help is-danger" v-if="errors.has('email')" v-text="errors.get('email')"></span>
		                        </div>
		                    </div>

		                    <div class="form-group">
		                        <label class="col-md-3 control-label" for="body">Your message</label>
		                        <div class="col-md-9">
		                                    <textarea class="form-control"
		                                    		  name="body"
		                                              id="body"
		                                              v-model="body"
		                                              placeholder="Please enter your message here..."
		                                              rows="5">
		                                	</textarea>
		                                	<span class="help is-danger" v-if="errors.has('body')" v-text="errors.get('body')" ></span>
		                        </div>
		                    </div>

		                    <div class="form-group">
		                        <div class="col-md-12 text-right">
		                            <button type="submit" class="btn btn-primary btn-lg" :disabled="errors.any()">Submit</button>
		                        </div>
		                    </div>
		                </fieldset>
		            </form>
	        	</div>
            </div>
        </div>
    </div>
@endsection