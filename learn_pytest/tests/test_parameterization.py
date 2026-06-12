import pytest


"""
p1. params of test method should match fixture headers
"""

@pytest.mark.parametrize(
    "a,b,result", [
        (2,2,4),
        (3,3,6),
        (4,4,8)
    ]
)
def test_addition(a,b,result):
    assert a+b==result