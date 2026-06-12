import pytest
import sys


@pytest.mark.skipif(
    sys.platform == 'win32',
    reason="Not compatible"
)
def test_linux():
    pass

@pytest.mark.xfail
def test_xfail():
    assert False