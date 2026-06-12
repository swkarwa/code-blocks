import pytest

@pytest.mark.usefixtures("logger")
class TestFixtures:
    @pytest.fixture(scope="module" , autouse=True)
    def f_module(self):
        print("\n once before module")
        yield
        print("\n once after module")

    @pytest.fixture(scope="session" , autouse=True)
    def f_session(self):
        print("\n once before session")
        yield
        print("\n once after session")

# default scope
    @pytest.fixture(scope="function")
    def browser(self):
        print("\n before every function")
        yield
        print("\n after every function")

    @pytest.fixture(scope="class" , autouse=True)
    def class_fixture(self):
        print("\n before class")
        yield "Chrome"
        print("\n after class")

    """
        1. fixtures are called from test params
        2. if fixture is not passed as param, it will not be called
        3. autouse = True .. will call fixture automatically
    """

    def test_google(self,browser):
        self.logger.info("testing google.com ...")
        print("test google")

    def test_firefox(self,browser, class_fixture):
        print("\n test firefox")