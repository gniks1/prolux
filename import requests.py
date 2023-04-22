import requests
from bs4 import BeautifulSoup
import os

# Replace the URL below with the website you want to scrape
url = "https://www.whiteteak.com/"

# Send a GET request to the website and get the HTML content
response = requests.get(url)
html_content = response.content

# Use BeautifulSoup to parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Create a directory to save the files
directory = "website_files"
if not os.path.exists(directory):
    os.makedirs(directory)

# Save the HTML code to a file named "index.html"
with open(os.path.join(directory, "index.html"), "wb") as f:
    f.write(html_content)

# Find all the CSS files in the HTML code and save them to separate files
css_files = soup.find_all("link", rel="stylesheet")
for i, css_file in enumerate(css_files):
    css_url = css_file.get("href")
    css_content = requests.get(css_url).content
    with open(os.path.join(directory, f"style{i+1}.css"), "wb") as f:
        f.write(css_content)

# Find all the JavaScript files in the HTML code and save them to separate files
js_files = soup.find_all("script", src=True)
for i, js_file in enumerate(js_files):
    js_url = js_file.get("src")
    js_content = requests.get(js_url).content
    with open(os.path.join(directory, f"script{i+1}.js"), "wb") as f:
        f.write(js_content)
