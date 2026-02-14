from contracts.plain_user import CreateUserRequest

def test_create_user(api_client):
    request_body = CreateUserRequest(
        name="Swapnil",
        email="swapnil@test.com",
        password="Password123"
    )

    response = api_client.post(
        "/createAccount",
        json=request_body.model_dump()
    )

    assert response.status_code == 200