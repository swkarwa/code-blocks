import pytest

@pytest.mark.usefixtures("logger")
class TestFixtures:

    def test_google(self):
        self.log.info("testing google.com ...")
        self.log.info("test google")

    def test_firefox(self):
        self.log.info("\n test firefox")