import sys

 
# setting path
sys.path.append('../backend')
 
# Importa nosso app
from app import app


# Importa a biblioteca de testes
import unittest

import json

'''
    Test if apps is generating datasets
'''
class TestGenerate(unittest.TestCase):

    '''
      Como todos os 3 casos de teste fazem um get no generate "/generate"
      da aplicacao, define-se a funcao setUp. Ela e executada
      automaticamente sempre que o Pytest instancia a classe TestGenerate.
      A funcao setUp e semelhante a um metodo construtor.
    '''

    def setUp(self):
        self.myApp = app.test_client()
        self.response = None

    # Testa se a resposta e 200
    def test_get(self):
        self.response = self.myApp.get('/generate')
        self.assertEqual(200, self.response.status_code)
        
    # Testa a requisição sem passar os parâmetros, deve ser esperado a quantidade de exemplos gerados igual a
    # 5 (default)
    def test_get_without_parameter(self):
        self.response = self.myApp.get('/generate')
        data = json.loads(self.response.data.decode('utf-8'))
        self.assertEqual(5, data['total'])

    # Testa a requisição passando algum parâmetro, deve ser esperado a quantidade de exemplos gerados igual ao 
    # número passado na requisição
    def test_get_without_parameter(self):
        total_samples = 25
        self.response = self.myApp.get('/generate/'+str(total_samples))
        data = json.loads(self.response.data.decode('utf-8'))
        self.assertEqual(total_samples, data['total'])
  