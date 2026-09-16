import json
from pathlib import Path
import pytest

test_results = []

@pytest.fixture(scope="session" , autouse=True)
def setup_once_for_all_tests():
    print(f"\nSETUP-SESSION : run this once before all tests")
    yield
    print("\nCLEANUP-SESSION : run this once after all tests execution")


@pytest.fixture(scope="module", autouse=True)
def setup_once_before_every_module():
    print(f"\nSETUP-MODULE : run this before every modules")
    yield
    print("\nCLEANUP-MODULE : run this after every modules")

@pytest.fixture(scope="class", autouse=True)
def setup_before_every_class():
    print(f"\nSETUP-CLASS : run this before every class")
    yield
    print("\nCLEANUP-CLASS : run this after all class")

@pytest.fixture(scope="function" , autouse=True)
def setup_on_each_function():
    print(f"\nSETUP-FUNCTION : run this before each function")
    yield
    print(f"\nCLEANUP-FUNCTION : run this after each function")

@pytest.fixture(scope="function")
def no_auto_use():
    print(f"\nSETUP : only when consumed from tests")
    yield
    print(f"\nCLEANUP : no autouse fixture")

@pytest.hookimpl(specname= "pytest_runtest_makereport", hookwrapper=True, tryfirst=True)
def pytest_create_test_report(item , call):
    print(f"\nSETUP-REPORT : run this before each test")
    outcome = yield
    report = outcome.get_result()

    if report.when == "call":
        return
    test_results.append({
        "test_method_name" : item.name,
        "status" : report.outcome,
        "error" : str(report.longrepr) if report.failed else None,
    })

def pytest_sessionfinish(session, exitstatus):
    result_data = {
        "result" : test_results,
    }
    json_data = json.dumps(result_data , indent=4 , ensure_ascii=False)
    Path("result.json").write_text(json_data , encoding="utf-8")