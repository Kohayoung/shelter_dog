#이미지 클릭 시 그래프 출력
from pyecharts import Bar3D
from pyecharts_javascripthon.api import TRANSLATOR
from flask import Flask, escape, request, render_template
import requests
import pandas as pd
# import matplotlib as mpl

REMOTE_HOST = "https://pyecharts.github.io/assets/js"

app = Flask(__name__)

#구별 년도별 인구수가 들어간 리스트
data_3d_person_list=[]
df_year_list = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
df_region_list =['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']


@app.route("/")
def hello():
    _bar = bar_3d_chart()
    javascript_snippet = TRANSLATOR.translate(_bar.options)
    return render_template(
        "pyecharts.html",
        chart_id=_bar.chart_id,
        host=REMOTE_HOST,
        renderer=_bar.renderer,
        my_width="100%",
        my_height=1000,
        custom_function=javascript_snippet.function_snippet,
        options=javascript_snippet.option_snippet,
        script_list=_bar.get_js_dependencies(),
    )


@app.route("/md")
def materialDesign():
    _bar = bar_3d_chart()
    javascript_snippet = TRANSLATOR.translate(_bar.options)
    return render_template(
        "md_gd.html",
        chart_id=_bar.chart_id,
        host=REMOTE_HOST,
        renderer=_bar.renderer,
        my_width="100%",
        my_height=1000,
        custom_function=javascript_snippet.function_snippet,
        options=javascript_snippet.option_snippet,
        script_list=_bar.get_js_dependencies(),
    )

def getDataList():
    data_list=[]
    df_3dp = pd.read_csv('for_3dPerson_data.csv')
    for i in range(len(df_3dp)):
        data_list.append(list(df_3dp.loc[i]))
    return data_list

data_3d_person_list = getDataList()


def bar_3d_chart():

    bar3d = Bar3D("구별, 년도별 인구 수", width=1200, height=600)

    x_axis = df_year_list #년도 2005-2018
    y_axis = df_region_list #26개 구

    #x_axis = df_region 
    #y_axis = df_year 

    data = data_3d_person_list
    range_color = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
                '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    bar3d.add(
        "구별, 년도별 유기견 수",
        x_axis,
        y_axis,
        [[d[1], d[0], d[2]] for d in data],
        grid3d_width=100,
        grid3d_depth=250,
        
        datazoom_type='both',
        datazoom_orient='horizontal',
        
        #visualMap 설정
        is_visualmap=True,
        visual_range=[0, 900],
        visual_range_color=range_color,
        visual_top='bottom',

        #x축 설정
        xaxis3d_name='년도',
        xaxis3d_interval=0,  #0으로 하면 모든 레이블 강제 표시 (axis3D 설정 봐야함)
        xaxis3d_margin=5,
        
        #y축 설정
        yaxis3d_name='자치구',
        yaxis3d_interval=0,
        
        #z축 설정
        zaxis3d_name='유기견 수',
        
        #tooltip 설정
        tooltip_trigger='item',
        tooltip_formatter=label_formatter
    )

    #이건 전체 표출되는 화면 크기
    bar3d.width=1000 #너비
    bar3d.height=1000 #높이

    return bar3d

def label_formatter(params):
    return getLabels(params)

if __name__=='__main__':
    app.run(debug=True)