<?php

class MockProjectModel {

	public function databaseName() {
		$name = strtolower(RAPUMA_TEST_PROJECT);
		$name = str_replace(' ', '_', $name);
		return 'sf_' . $name;
	}
}


?>