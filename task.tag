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
		<td if="{ model.trial_pos == 3 }" value="{ model.trial }">
			<input type="text" />
		</td>
		<td if="{ show_correct() }" class="error_msg">Fehler !</td>
	</tr>

	<!-- styles -->

	<!-- logic -->
	this.on('mount', function() {
		model = opts.model
	})

	show_correct = function() {
		return false
	}

</task>
