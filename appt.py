#import all the libraies needed to execute the following:
# - Lunch flask
# - connect to mySQL database
# - Jsonify the mysql table
# SQL Alchemy
from flask import (
    Flask,
    render_template,
    jsonify)
from flask_sqlalchemy import SQLAlchemy



#Create an app
app = Flask(__name__)
# The database URI
# Note that sakila is the name of the DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Asdffdsa112233@localhost/sakila'
db = SQLAlchemy(app)





#setting up the  Model that has exactly the same table properties in MYSQL table.
class Tweets(db.Model):
    __tablename__ = 'tweetscopy'
    id = db.Column(db.Integer, primary_key=True) #<------ this is a must line to have even if the table does not have it
    source = db.Column(db.String)
    text = db.Column(db.String)
    created_at = db.Column(db.String, nullable=True)
    retweet_count = db.Column(db.Integer, nullable=True)
    favorite_count = db.Column(db.Integer, nullable=True)
    is_retweet = db.Column(db.Text, nullable=True)


    def __repr__(self):
        return '<Tweets %r>' % (self.created_at)

#setting up another model to connect to another table in the DB.
class Approval(db.Model): #
    __tablename__ = 'adstock'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String, nullable=True)
    approve_avg = db.Column(db.Float, nullable=True)
    disapprove_avg = db.Column(db.Float, nullable=True)
    st_open = db.Column(db.Float, nullable=True)
    st_close = db.Column(db.Float, nullable=True)
    st_high = db.Column(db.Float, nullable=True)
    st_low = db.Column(db.Float, nullable=True)

    
    def __repr__(self):
        return '<approval %r>' % (self.date)



# Create database tables
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()


#landing page
@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")


# a testing page
@app.route("/about")
def about():
    print("PASS")
    return "This API is working"

# JSON object of all the tweets .
@app.route("/tweets")
def tweet():
    print("PASS")
    results = db.session.query(Tweets.created_at, Tweets.retweet_count, Tweets.text).all()

    trace = []
    for result in results:
        trace.append({
            "Date": result[0],
            "Retweet_Count": result[1],
            "Tweets": result[2]
        })
    return jsonify(trace)

# JSON object page of the approval, disapproval, and the open/close stock market
@app.route("/approval")
def apst():
    print("PASS")
    results = db.session.query(Approval.date, Approval.approve_avg, Approval.disapprove_avg, Approval.st_open, Approval.st_close, Approval.st_high, Approval.st_low).all()
    trace = []
    for result in results:
        trace.append({
            "Date": result[0],
            "Approval": result[1],
            "Disapproval": result[2],
            "St_Open": result[3],
            "St_Close": result[4],
            "St_high": result[5],
            "St_low": result[6]
        })
    return jsonify(trace)

if __name__ == "__main__":
    app.run(debug=True)


