import sys

 
# setting path
sys.path.append('../backend')
 
# Importa nosso app
from app import app
from models.LabelClassification import LabelClassification


# Importa a biblioteca de testes
import unittest

import json

'''
    Test if apps is generating the labels correctly
'''
class TestLabelClassificationService(unittest.TestCase):

    '''
      Como todos os 3 casos de teste fazem um get no labels "/labels"
      da aplicacao, define-se a funcao setUp. Ela e executada
      automaticamente sempre que o Pytest instancia a classe TestLabelClassificationService.
      A funcao setUp e semelhante a um metodo construtor.
    '''

    def setUp(self):
        myApp = app.test_client()
        self.response = myApp.get('/labels')

    # Testa se a resposta e 200
    def test_get(self):
        self.assertEqual(200, self.response.status_code)
        
    # Testa a requisição, deve ser esperado a quantidade de labels retornados igual a 3
    def test_get(self):
        data = json.loads(self.response.data.decode('utf-8'))
        self.assertEqual(3, len(data['data']))

    def test_get_result(self):
        data = json.loads(self.response.data.decode('utf-8'))
        expected = [LabelClassification('SELF EXPLANATORY', 'SE').__dict__(), 
                        LabelClassification('FIRST TOPIC', 'FT').__dict__(),     
                        LabelClassification('PREVIOUS TOPIC', 'PT').__dict__()]
        
        self.assertEqual(expected, data['data'])