from flask import Flask,render_template,request
from flask_cors import CORS

#Flaskオブジェクトの生成
app = Flask(__name__)
CORS(app)  # CORS有効化

@app.route("/")
def home():
    return render_template("home.html")




#おまじない
if __name__ == "__main__":
    app.run(debug=True)