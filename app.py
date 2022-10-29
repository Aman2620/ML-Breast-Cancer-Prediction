import numpy as np
from flask import Flask, request,render_template
import pickle as pk
import pandas as pd

app = Flask(__name__,template_folder='template')
model = pk.load(open('model.pkl','rb'))

@app.route('/')
def home():
    return render_template('homepage.html')

@app.route('/index.html')
def permission():
    return render_template('index.html')


@app.route('/predict',methods=['POST'])
def predict():

    features = [float(x) for x in request.form.values()]
    final_values = [np.array(features)]
    final_features = ['clump_thickness', 'uniform_cell_size', 'uniform_cell_shape',
       'marginal_adhesion', 'single_epithelial_size', 'bare_nuclei',
       'bland_chromatin', 'normal_nucleoli', 'mitoses']
    df = pd.DataFrame(final_values,columns=final_features)
    output = model.predict(df)
    return render_template('after.html',data = output)



if __name__ == "__main__":
    app.run(debug=True,port=500)
