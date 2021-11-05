from sklearn.feature_extraction.text import CountVectorizer


def init_vectorizer(data):
    vectorizer = CountVectorizer()
    vectorizer.fit(data)
    return vectorizer
