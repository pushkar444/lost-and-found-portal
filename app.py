from flask import Flask, render_template_string, request

app = Flask(__name__)

items = []

HTML = """
<!DOCTYPE html>
<html>
<head>
    <title>Lost and Found Portal</title>
</head>
<body style="font-family: Arial; padding: 20px;">

    <h1>Lost and Found Portal</h1>

    <form method="POST">
        <input type="text" name="item" placeholder="Enter lost/found item" required>
        <button type="submit">Add Item</button>
    </form>

    <h2>Items List</h2>
    <ul>
        {% for item in items %}
            <li>{{ item }}</li>
        {% endfor %}
    </ul>

</body>
</html>
"""

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        item = request.form.get("item")
        items.append(item)

    return render_template_string(HTML, items=items)

if __name__ == "__main__":
    app.run(debug=True)