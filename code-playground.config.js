module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-form-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-form-component
				</h1>
				<p class="p m-b-bigger">
					Full stack form styling with support of form-input, form-textarea, form-select, form-group and form-addon as well as colored versions of them...
				</p>
				<div class="form-group m-b">
					<input type="text" name="firstname" class="form-input" placeholder="Firstname" />
				</div>
				<div class="form-group m-b">
					<textarea class="form-textarea" name="message" placeholder="Your message here..."></textarea>
				</div>
				<div class="form-group m-b">
					<select class="form-select" name="gender">
						<option value="">Choose a gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<div class="form-group m-b">
					<label class="form-addon" for="date-from">From</label>
					<input class="form-input" type="text" name="date-from" id="date-from" placeholder="10/09/1987" />
					&nbsp;&nbsp;&nbsp;
					<label class="form-addon" for="date-to">To</label>
					<input class="form-input" type="text" name="date-to" id="date-to" placeholder="10/09/1987" />
				</div>
				<div class="form-group m-b">
					<input type="text" name="firstname" class="form-input form-input--primary" placeholder="Firstname" />
				</div>
				<div class="form-group m-b">
					<textarea class="form-textarea form-textarea--primary" name="message" placeholder="Your message here..."></textarea>
				</div>
				<div class="form-group m-b">
					<select class="form-select form-select--primary" name="gender" invalid>
						<option value="">Choose a gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<div class="form-group m-b">
					<label class="form-addon form-addon--primary" for="date-from-1">From</label>
					<input class="form-input form-input--primary" type="text" name="date-from-1" id="date-from-1" placeholder="10/09/1987" />
					&nbsp;&nbsp;&nbsp;
					<label class="form-addon form-addon--secondary" for="date-to-1">To</label>
					<input class="form-input form-input--secondary" type="text" name="date-to-1" id="date-to-1" placeholder="10/09/1987" />
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				@import 'index';
				// @import 'node_modules/coffeekraken-s-form-component/index';
				@include s-form-classes();
			`
		},
		js : null
	}
}
