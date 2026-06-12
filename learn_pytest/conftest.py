import logging

import pytest


@pytest.fixture(autouse=True)
def shared_browser(request):
    print(f"\nThis is a shared fixture : {request.node.name}")
    return request.node.name

@pytest.fixture(autouse=True)
def shared_display_name(request):
    print(f"\nshared fixture : {request.node.name}")

@pytest.fixture(autouse=True)
def hooks_fixture(request):
    print(f"\nvalue of passed --env is {request.config.getoption('--env')}")

@pytest.fixture(scope="class", autouse=True)
def logger(request):
    request.cls.logger = logging.getLogger(
        request.cls.__name__
    )


def pytest_addoption(parser):
    print("""
        pytest_addoption : used to add custom options to pytest command line
    """)
    parser.addoption(
        "--env",
        action="store",
        default="qa",
        help="environment to run",
    )
    seperator()

def pytest_configure(config):
    print("""
        pytest_configure : used to add custom options to pytest command line
        can be used to do task before tests session starts
        ex
        1.make reporting directories ready
        2.run a smoke test to verify if service is up and running before running all tests
        3. configure logging
        4. display environment details
        5. register custom markers in pytest.ini file
    """)
    logging.basicConfig(
        format="%(asctime)s %(levelname)s %(message)s",
        level=logging.INFO

    )
    logger = logging.getLogger("pytest")
    # dadd markers to hosts.ini
    config.addinivalue_line(
        "markers",
        "smoke: run all tests marked as smoke"
    )
    seperator()

def pytest_sessionstart(session):
    print("""
        pytest_session_start : runs before any test executes, used for 
        1. printing env details
        2. making report storing directories
        3. validating env variables
    """)

def pytest_collection_modifyitems(items):
    print("""
        pytest_collection_modifyitems : Allows modifying collected tests before execution.
    """)
    for item in items:
        if(item.originalname == "test_firefox"):
            print(f"test_location : {item.location}")
            print(f"test_module : {item.module}")
            continue
        item.add_marker("smoke")

def seperator():
    print("="*100)