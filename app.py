from flask import Flask,render_template,request
from flask_cors import CORS

#Flaskオブジェクトの生成
app = Flask(__name__)
CORS(app)  # CORS有効化

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/asairi",methods = ['GET'])
def page():
    return render_template("asairi.html")


#おまじない
if __name__ == "__main__":
    app.run(debug=True)