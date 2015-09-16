<!-- vim: ft=html sw=2 ts=2
-->
<task>
	<!-- layout -->
	<tr>
		<td if="{ model.trial_pos != 1 }">{ model.operand_1 }</td>
		<td if="{ model.trial_pos == 1 }" value="{ model.trial }">
			<input type="text" />
		</td>
		<td>{ model.operand }</td>
		<td if="{ model.trial_pos != 2 }">{ model.operand_2 }</td>
		<td if="{ model.trial_pos == 2 }" value="{ model.trial }">
			<input type="text" />
		</td>
		<td>=</td>
		<td if="{ model.trial_pos != 3 }">{ model.result }</td>
		<td if="{ model.trial_pos == 3 }" >
			<input type="text" value="{ model.trial }"/>
		</td>
		<td if="{ show_correct() }" class="error_msg">Fehler !</td>
	</tr>


	<!-- styles -->
	<style>
		tr {
			text-align: right;
		}
		tr td input {
			width: 3em;
			text-align: right;
		}
	</style>


	<!-- logic -->
	this.on('mount', function() {
		//model = opts.model
	})
	this.model = opts.model

	show_correct = function() {
		return false
	}

</task>
