import requests
from pydantic import BaseModel

from config.config import HEADERS, BASE_URL
from utils.logging import get_logger


class APIClient:

    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update(HEADERS)
        self.logger = get_logger(self.__class__.__name__)

    def get(self, endpoint, **kwargs):
        self.logger.info(f"GET {endpoint}")
        response = self.session.get(f"{BASE_URL}{endpoint}", **kwargs)
        self.logger.info(f"Response: {response.status_code} {response.text}")
        return response

    def post(self, endpoint, body: BaseModel = None, **kwargs):
        if body:
            kwargs["json"] = body.model_dump()

        self.logger.info(f"POST {endpoint}")
        self.logger.info(f"Request Body: {kwargs.get('json')}")

        response = self.session.post(f"{BASE_URL}{endpoint}", **kwargs)

        self.logger.info(f"Response: {response.status_code} {response.text}")
        return response

    def put(self, endpoint, **kwargs):
        return self.session.put(f"{BASE_URL}{endpoint}", **kwargs)

    def delete(self, endpoint, **kwargs):
        return self.session.delete(f"{BASE_URL}{endpoint}", **kwargs)

