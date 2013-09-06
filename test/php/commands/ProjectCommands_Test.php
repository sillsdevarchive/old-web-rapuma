<?php
use models\commands\ProjectCommands;

require_once(dirname(__FILE__) . '/../TestConfig.php');
require_once(SimpleTestPath . 'autorun.php');

require_once(TestPath . 'common/MongoTestEnvironment.php');

class TestProjectCommands extends UnitTestCase {

	function __construct()
	{
	}
	
	function testDeleteProjects_NoThrow() {
		$e = new MongoTestEnvironment();
		$e->clean();
		
		$project = $e->createProject(RAPUMA_TEST_PROJECT);
		$projectId = $project->id->asString();
		
		ProjectCommands::deleteProjects(array($projectId));
	}
	
}

?>