<!-- vim: ft=html sw=2 ts=2
-->
<tasks-panel>

	<!-- layout -->

	<div id="tasks-panel">
		<h2>Aufgaben</h2>
		<table>
			<task each="{ tasks }" model="{ this }"></task>
		</table>
	</div>


	<!-- styles -->
	<style>
		tasks-panel {
			float: left;
			width: 80%;
			background-color: #f8f8f8;
			border-radius: 10px;
			padding: 10px;
			margin: 10px;
		}
		tr {
			text-align: right;
		}
	</style>


	<!-- logic -->
	this.on('mount', function() {
		num_tasks = parent.num_tasks
		tasks = []
	})

</tasks-panel>

