# Makefile for Playwright

# Variables
TEST_DIR=tests
BROWSER=chromium
REPORT_DIR=playwright-report

# Install dependencies
install:
	npm install
	npx playwright install

# Run all tests
test:
	npx playwright test

# Run tests in headed mode
test-headed:
	npx playwright test --headed

# Run tests with UI mode
test-ui:
	npx playwright test --ui

# Run a single test file (usage: make test-file FILE=example.spec.ts)
test-file:
	npx playwright test $(FILE)

# Run tests in specific browser (usage: make test-browser BROWSER=firefox)
test-browser:
	npx playwright test --browser=$(BROWSER)

# Show last HTML report
report:
	npx playwright show-report

# Clean reports
clean:
	rm -rf $(REPORT_DIR)

# Run code lint (optional, if you use eslint)
lint:
	npx eslint .

# Help
help:
	@echo "Available commands:"
	@echo "  make install        - Install dependencies and Playwright browsers"
	@echo "  make test           - Run all tests"
	@echo "  make test-headed    - Run tests with browser UI"
	@echo "  make test-ui        - Run tests with Playwright UI mode"
	@echo "  make test-file FILE=yourtest.spec.ts"
	@echo "  make test-browser BROWSER=firefox"
	@echo "  make report         - Show last Playwright report"
	@echo "  make clean          - Remove reports"
	@echo "  make lint           - Run eslint"