from flask import Flask, escape, request, render_template
from flask.templating import Environment

from pyecharts import HeatMap
from pyecharts.engine import ECHAERTS_TEMPLATE_FUNCTIONS
from pyecharts.conf import PyEchartsConfig

class FlaskEchartsEnvironment(Environment):
    def __init__(self, *args, **kwargs):
        super(FlaskEchartsEnvironment, self).__init__(*args, **kwargs)
        self.pyecharts_config = PyEchartsConfig(jshost=options)
        self.globals.update(ECHAERTS_TEMPLATE_FUNCTIONS)

class MyFlask(Flask):
    jinja_environment = FlaskEchartsEnvironment

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

app = MyFlask(__name__)

if __name__=='__main__':
    app.run(debug=True)