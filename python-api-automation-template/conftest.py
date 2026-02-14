import pytest

from clients.base_client import APIClient


@pytest.fixture(scope="session")
def api_client():
    return APIClient()