from rdflib import Graph
from rdflib.namespace import RDF, RDFS, XSD, OWL
from rdflib import Namespace
import random
from models.TrainingSet import TrainingSet
from models.Utterance import Utterance
from models.LabelClassification import LabelClassification

def createTrainSet(totalSamples):
    #Gerando o grafo a partir do dataset
    g = Graph()
    g.parse('backend/dataset/mondial_europe_dataset.ttl', format='ttl', encoding='utf-8')

    #Importando os prefixos e criação de um novo prefixo para ser utilizado na consulta SPARQL
    site = Namespace("http://www.semwebtech.org/mondial/10/meta#")
    g.bind("owl", OWL)
    g.bind("rdf", RDF)
    g.bind("rdfs", RDFS)
    g.bind("xsd", XSD)
    g.bind("mon", site)

    #First: generate a SELF_EXPLANATORY utterance and after a not self explanatory utterance
    orderToGenerate = [(1,"SE"), (2,"NSE")]
    pronoms = ("his","your")
    domains = ("Country", "Organization", "City")

    #All utterances possibles 
    dictionaryTemplateFromData = {
        "Country":{
        "government": {"SE": "What is the government of [SUJ]?", "NSE": "What is [PRO] government?"},
        "area": {"SE":"What is the area of [SUJ]?", "NSE":"What is [PRO] area?"},
        "capital":{"SE": "What is the capital of [SUJ]?", "NSE":"What is [PRO] capital?"},
        "carCode" : {"SE": "What is car code of [SUJ]?", "NSE":"What is [PRO] car code?"},
        "infantMortality" : {"SE": "What is infant mortality rate of [SUJ]?", "NSE":"What is [PRO] car code?"},
        "hasCity": {"SE": "[SUJ] has city of [OBJ]?", "NSE":"[OBJ] is [PRO] city?"},
        "hadPopulation": {"SE": "What was the total population in [OBJ] of [SUJ]?", "NSE":"What was [PRO] total population in [OBJ]?"},
        "isMember":{"SE": "[SUJ] is a member of which organization?", "NSE":"What is [PRO] organization?"},
        },
        "City":{
            "locatedIn" : {"SE": "What is location of [SUJ]?", "NSE":"What is [PRO] location?"},
            "isCapital": {"SE": "[SUJ] is capital?", "NSE":"Is a capital?"},
            "checkCapital": {"SE": "[SUJ] is capital of [OBJ]?", "NSE":"Is It capital of [OBJ]?"},
        },
        "Organization":{
            "abbrev" : {"SE": "What is the abbreviation of [SUJ]?", "NSE":"What is [PRO] abbreviation?"},
            "isCompost": {"SE": "What are countries of [SUJ]?", "NSE":"What are [PRO]s countries?"},
            "checkOrganization": {"SE": "[SUJ] has [OBJ]?", "NSE": "Does this organization have [OBJ]?"}
        }
    }

    #All sparql query possibles  
    getCountry = g.query("""select ?Y  where {?X rdf:type mon:Country; mon:name ?Y }""")
    
    getCountryAndYear = g.query(""" select ?Y ?W  
                                        where {?X rdf:type mon:Country; mon:name ?Y; 
                                            mon:hadPopulation ?Z . ?Z mon:year ?W } """
                                )
    
    getCountryAndCity = g.query(""" select ?W ?A  
                                        where {?X rdf:type mon:Country; mon:hasCity ?Z; mon:name ?W .  
                                        ?Z rdf:type mon:City ; mon:name ?A }"""
                                )
    
    getCity = g.query("""select ?Y  where {?X rdf:type mon:City; mon:name ?Y }""")
    
    getCityAndCountry = g.query(""" select ?A ?W  
                                        where {?X rdf:type mon:Country; mon:hasCity ?Z; mon:name ?W . 
                                        ?Z rdf:type mon:City ; mon:name ?A }"""
                                )
    
    getOrganization = g.query("""select ?Y  where {?X rdf:type mon:Organization; mon:name ?Y }""")
    
    getOrganizationAndCountry = g.query("""select ?O ?W  
                                            where {?X rdf:type mon:Country; mon:isMember ?Z; mon:name ?W . 
                                            ?Z rdf:type mon:Organization ; mon:name ?O }"""
                                        )

    sparqlQueries = {
        "government":getCountry,
        "area":getCountry ,
        "capital":getCountry,
        "carCode":getCountry,
        "infantMortality":getCountry,
        "hasCity":getCountryAndCity,
        "hadPopulation":getCountryAndYear,
        "isMember":getCountry,
        "locatedIn":getCity,
        "isCapital": getCity,
        "checkCapital":getCityAndCountry,
        "abbrev":getOrganization,
        "isCompost":getOrganization,
        "checkOrganization":getOrganizationAndCountry
    }

    #Seleção de Templates
    utterances = []
    for i in range(totalSamples):
        paragraph = str(i+1)
        domain = random.choice(domains)
        properties = list(dictionaryTemplateFromData[domain].keys())
        for order in orderToGenerate:
            sentence = str(order[0])
            typeSentence = order[1]
            property_selected =  random.choice(properties)
            utterance = dictionaryTemplateFromData[domain][property_selected][typeSentence]
            utterances.append([paragraph + '.'+sentence, property_selected, utterance])
            properties.remove(property_selected)

    #Seleção de Conteudo
    resultSparql = []
    finalUtterances = []
    codes = []
    for (code, property_selected, utterance) in utterances:
        rows = sparqlQueries[property_selected]
        result = [row for row in rows]
        resultSparql.append(random.choice(result))
        finalUtterances.append(utterance)
        codes.append(code)
    

    #Lexicalização e Geração de Expressão
    result = TrainingSet(totalSamples)
    
    for i in range(len(finalUtterances)):
        uttr = finalUtterances[i]
        r = resultSparql[i]
        c = codes[i]
        label = LabelClassification('PREVIOUS TOPIC', 'PT')
        if("[SUJ]" in uttr):
            label = LabelClassification('SELF EXPLANATORY', 'SE')
            uttr = uttr.replace("[SUJ]", str(r[0]))

        if("[OBJ]" in uttr):
            uttr = uttr.replace("[OBJ]", str(r[1]))

        if("[PRO]" in uttr):
            if(i==1):
                label = LabelClassification('FIRST TOPIC', 'FT')
            
            pro = random.choice(pronoms)
            uttr = uttr.replace("[PRO]", pro)

        utterance = Utterance(c, uttr, label)
        result.add(utterance)

    return result;