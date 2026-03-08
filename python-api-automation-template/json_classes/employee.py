import json
from dataclasses import dataclass,asdict
from typing import List


@dataclass
class Address:
    city: str
    country: str

@dataclass
class Employee:
    emp_id: int
    name: str
    address: Address

@dataclass
class Company:
    name: str
    employees: List[Employee]


if __name__=='__main__':
    # ---- Create Address objects ----
    addr1 = Address(city="New York", country="USA")
    addr2 = Address(city="San Francisco", country="USA")

    # ---- Create Employee objects ----
    emp1 = Employee(emp_id=1, name="Alice", address=addr1)
    emp2 = Employee(emp_id=2, name="Bob", address=addr2)

    # ---- Create Company object ----
    company = Company(
        name="TechCorp",
        employees=[emp1, emp2]
    )

    company_dict = asdict(company)
    print(json.dumps(company_dict , indent=4))