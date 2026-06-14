import pytest

@pytest.mark.smoke
def test_addition(request):
    print(f"running test : {request.node.name}")
    assert 2+2 == 4

def test_subtract(request):
    print(f"running test : {request.node.name}")
    assert 2-2 == 0

@pytest.mark.smoke
def test_login(request,log):
    log.info("performing login")

def test_logout(request):
    print("\nperforming logout...")

@pytest.mark.skip(reason="skip test")
def test_failed(shared_browser):
    assert False

