def test_get_products(api_client):
    response = api_client.get("/productsList")

    assert response.status_code == 200
    body = response.json()
    assert "products" in body
    assert isinstance(body["products"], list)


def test_get_products_post(api_client):
    response = api_client.post("/productsList")
    body = response.json()
    assert 'responseCode' in body
    assert body['responseCode'] == 405