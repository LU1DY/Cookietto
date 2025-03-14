from app import app
from flask import render_template, url_for


@app.route('/')
def home():
    animacaoHome = {'js': 'animationHome.js'}

    return render_template('home.html', animacaoHome=animacaoHome)

@app.route('/login')
def login():
    verSenha = {'js': 'versenha.js'}
    validarSenha = {'js': 'validarSenha.js'}
    return render_template('login.html', validarSenha=validarSenha, verSenha=verSenha)

@app.route('/cadastrar')
def cadastrar():
    verSenhaCadastrar = {'js': 'verSenhaCadastrar.js'}
    validarSenhaCadastrar = {'js': 'validarSenhaCadastrar.js'}
    return render_template('cadastrar.html', validarSenhaCadastrar=validarSenhaCadastrar, verSenhaCadastrar=verSenhaCadastrar)