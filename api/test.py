import pandas as pd

from predictor.model import load_model
from predictor.predictor import Predictor
from predictor.vectorizer import init_vectorizer

# vectorizer = CountVectorizer()
# vectorizer.fit(data['Full_Names'])


# X = vectorizer.transform(
#     ['Nguyễn Minh Huy', 'Lê Đoàn Minh Hằng', 'Phạm Thanh Phong', 'Nguyễn Thị Minh Ánh', 'Đoàn Thị Tuyết Minh', 'Nguyễn Thị Tuý Hồng'])
# gender = model.predict(X)
# prob = model.predict_proba(X)
# print(gender)
# print([p[gender[i]] for i, p in enumerate(prob)])


data = pd.read_csv('datasets/train.csv')

vectorizer = init_vectorizer(data['Full_Names'])
multinomial_nb = load_model(path='models/multinomial_nb.pkl')
predictor = Predictor(vectorizer=vectorizer, model=multinomial_nb,
                      model_name='Multinomial NB')

result = predictor.predict(['Nguyễn Minh Huy', 'Lê Đoàn Minh Hằng', 'Phạm Thanh Phong',
                            'Nguyễn Thị Minh Ánh', 'Đoàn Thị Tuyết Minh', 'Nguyễn Thị Tuý Hồng'])

print(result)
