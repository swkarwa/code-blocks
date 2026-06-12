### Pytest command run options:

1. pytest
   runs all test from all test folders

2. pytest -v:
    runs all tests from all test folder, with more information

3. pytest <file_path>:
    runs a specific test file

4. pytest <file_path>::<test_name>:
    runs a specific test from specific file

5. pytest -s:
    shows print statement on console

6. pytest -x:
    stops after first failure

7. pytest -maxfail=<number>:
    stops after max failure count

8. pytest -k:
    runs test with matching keyword

9. pytest -m:
    runs marked tests

10. pytest --ff:
    runs failed tests first

11. pytest --collect-only:
    prints all discovered tests    

### Pytest discovery:
    
    1. for test files:
        test_*.py or *_test.py
    2. for methods:
        def test_*()
    3. for classes:
        class Test_*:
            a. no __init__()


### Pytest hooks

    Pytest hooks are extension points that let you customize pytest’s behavior at different stages of execution.
    Think of fixtures as test data/setup management, while hooks are framework lifecycle customization.
    
```text
    pytest command

↓
pytest_addoption() : user to create custom options for pytest command
↓
pytest_configure() : runs once after pytest configuration is complete
↓
pytest_sessionstart() : runs once before any test executes
↓
pytest_collection_modifyitems()
↓
pytest_runtest_setup()
↓
pytest_runtest_call()
↓
pytest_runtest_teardown()
↓
pytest_runtest_makereport()
↓
pytest_sessionfinish() : runs after all tests are finished
↓
pytest_unconfigure() : runs ate very last, perferrable for cleanup
```