import sys
 
# setting path
sys.path.append('../backend')
 
# Importa nosso app
from app import app


# Importa a biblioteca de testes
import unittest

'''
    Test if apps is running 
'''
class TestHome(unittest.TestCase):

    '''
      Como todos os 3 casos de teste fazem um get na home "/"
      da aplicacao, defini-se a funcao setUp. Ela e executada
      automaticamente sempre que o Pytest instancia a classe TestHome.
      A funcao setUp e semelhante a um metodo construtor.
    '''

    def setUp(self):
        myApp = app.test_client()
        self.response = myApp.get('/')

    # Testa se a resposta e 200 ("ok")
    def test_get(self):
        self.assertEqual(200, self.response.status_code)

    # Testa se a nossa home retorna a string esperada
    def test_html_string_response(self):
        self.assertEqual("Hello, World! - This is application is running with <b>Flask Version: 2.2.2</b>", 
                         self.response.data.decode('utf-8'))

    # Testa se o content_type da resposta da home esta correto
    def test_content_type(self):
        self.assertIn('text/html', self.response.content_type)