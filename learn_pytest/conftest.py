from datetime import datetime
import json

import pytest

"""
===================================
    STARTUP HOOKS
===================================
"""


def pytest_addoption(parser):
    parser.addoption(
        "--env",
        action="store",
        default="staging",
        help="Environment to run tests against (dev, qa, stage , prod)",
    )

    parser.addoption(
        "--publish", action="store", default="true", help="flag to pusbnlish results"
    )
    print("\n[HOOK] pytest_addoption")


def pytest_configure(config):
    env = config.option.env
    print("\n[HOOKK] pytest_configure")


def pytest_sessionstart(session):
    env = session.config.option.env
    print("\n[HOOKK] pytest_sessionstart")


"""
===================================
    COLLECTION HOOKS
===================================
"""


def pytest_collection_modifyitems(config, items):
    print("\n[HOOKK] pytest_collection_modifyitems")


"""
===================================
    RUNTIME HOOKS
===================================
"""


def pytest_runtest_setup(item):
    print(f"\n[HOOK] pytest_runtest_setup -> {item.name}")


def pytest_runtest_call(item):
    print(f"\n[HOOK] pytest_runtest_call -> {item.name}")


test_results = []


def pytest_runtest_logreport(report):
    if report.when == "setup" and report.skipped:
        test_results.append({"node_id": report.nodeid, "status": "skipped"})

    elif report.when == "call":
        if hasattr(report, "wasxfail"):
            status = "xfailed" if report.skipped else "xpassed"
        else:
            status = report.outcome
        test_results.append(
            {"nodeid": report.nodeid, "status": status, "duration": report.duration}
        )
    print("\n[HOOK] pytest_runtest_logreport")


"""
========================
SHUTDOWN HOOKS
========================
"""


def pytest_sessionfinish(session, exitstatus):
    """
    Runs after all tests have completed execution
    """

    if session.config.option.publish == "false":
        return
    report_data = {
        "generated_at": datetime.now().isoformat(),
        "environment": session.config.option.env,
        "total_tests": len(test_results),
        "passed": sum(1 for t in test_results if t["status"] == "passed"),
        "failed": sum(1 for t in test_results if t["status"] == "failed"),
        "skipped": sum(1 for t in test_results if t["status"] == "skipped"),
        "tests": test_results,
    }

    with open("report.json", "w") as f:
        json.dump(report_data, f, indent=4)

    print("\n test reports are generated at : reports.json")


def pytest_unconfigure(config):
    print("\n[HOOK] pytest_unconfigure")


"""
========================
FIXTURES
========================
"""


@pytest.fixture(scope="session")
def session_fixture():
    print("\n[SESSION] setup")
    yield
    print("\n[SESSION] teardown")


@pytest.fixture(scope="package")
def package_fixture():
    print("\n[PACKAGE] setup")
    yield
    print("\n[PACKAGE] teardown")


@pytest.fixture(scope="module")
def module_fixture():
    print("\n[MODULE] setup")
    yield
    print("\n[MODULE] teardown")


@pytest.fixture(scope="class")
def class_fixture():
    print("\n[CLASS] setup")
    yield
    print("\n[CLASS] teardown")


@pytest.fixture(scope="function")
def function_fixture():
    print("\n[FUNCTION] setup")
    yield
    print("\n[FUNCTION] teardown")
