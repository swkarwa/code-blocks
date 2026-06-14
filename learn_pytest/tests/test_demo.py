class TestDemo:

    def test_example(
        self,
        session_fixture,
        package_fixture,
        module_fixture,
        class_fixture,
        function_fixture
    ):
        print("\n[TEST] Running test_example")
        assert True