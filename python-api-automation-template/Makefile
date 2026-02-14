# Variables
PYTHON=python3
VENV=venv
PIP=$(VENV)/bin/pip
PYTEST=$(VENV)/bin/pytest

# Create virtual environment
venv:
	$(PYTHON) -m venv $(VENV)

# Install dependencies
install: venv
	$(PIP) install -r requirements.txt

# Run tests
test:
	$(PYTEST) -v

# Run tests with coverage
coverage:
	$(PYTEST) --cov=src --cov-report=term-missing

# Lint code
lint:
	flake8 src tests

# Format code
format:
	black src tests

# Clean cache
clean:
	rm -rf $(VENV)
	rm -rf .pytest_cache
	rm -rf __pycache__
	rm -rf .coverage