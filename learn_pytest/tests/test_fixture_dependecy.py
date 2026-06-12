import pytest


@pytest.fixture
def db():
    s = "DB"
    print(s)
    return s

@pytest.fixture
def app(db):
    s=f"Using {db}"
    print(s)
    return s

def test_app(app):
    assert app == "Using DB"