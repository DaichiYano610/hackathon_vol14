from flask import Flask,render_template,request
#from flask_cors import CORS
import knowledge

#Flaskオブジェクトの生成
app = Flask(__name__)
#CORS(app)  # CORS有効化

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/page",methods = ['GET'])
def page():
    tmp = request.args.get("name")
    print(tmp + "----------------------")
    return render_template(tmp+".html",know = knowledge.knowledge())


#おまじない
if __name__ == "__main__":
    app.run(debug=True)