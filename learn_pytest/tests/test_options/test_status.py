import pytest


@pytest.mark.usefixtures(
    "session_fixture",
    "package_fixture",
    "class_fixture",
    "module_fixture",
    "function_fixture",
)
class TestStatus:
    def test_pass(self):
        print("INSIDE TEST")
        assert True

    def test_pass2(self):
        print("INSIDE TEST")
        assert True

    @pytest.mark.xfail
    def test_xfail(self):
        assert False

    def test_fail(self):
        assert False

    @pytest.mark.skip
    def test_skip(self):
        pass
