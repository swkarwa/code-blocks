def test_one():
    print("\nrunning test one")
    assert True

def test_two():
    print("\nrunning test two")

@pytest.mark.galileo
@pytest.mark.o11y
def test_three():
    print("\nrunning test three")
    assert True