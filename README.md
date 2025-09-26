# Projeto Django - Backend

## 🚀 Guia de Configuração

Este guia explica como configurar o ambiente virtual, instalar dependências e rodar o projeto.

---

## 1. Criar e Ativar o Ambiente Virtual

### Linux/macOS
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### Windows (PowerShell)
```powershell
python -m venv .venv
.venv\Scripts\Activate
```

> O ambiente virtual garante que as dependências do projeto não se misturem com as globais do sistema.

---

## 2. Instalar Dependências

Com o ambiente virtual ativo, rode:
```bash
pip install -r requirements.txt
```

---

## 3. Rodar o Projeto Django

### Aplicar migrações iniciais
```bash
python manage.py migrate
```

### Rodar o servidor
```bash
python manage.py runserver
```

Projeto estará disponível em:
```
http://127.0.0.1:8000/
```

---

## 4. Criar Superusuário (opcional)

Para acessar o painel admin:
```bash
python manage.py createsuperuser
```

---

## 5. Desativar o Ambiente Virtual

Ao terminar o uso:
```bash
deactivate
```

---

## 📂 Estrutura inicial recomendada

```
projeto_es_backend/
├── manage.py
├── projeto_es_backend/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── api/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
└── requirements.txt
```

---

## 🛠️ Observações
- Use sempre o ambiente virtual para instalar pacotes.
- Não suba a pasta `.venv/` para o GitHub (adicione ao `.gitignore`).
- Configure variáveis sensíveis em `.env`.

---

Pronto! Agora você tem o backend Django rodando 🚀
