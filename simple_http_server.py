
import http.server
import socketserver

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirect any requests to the root to 'index.html'
        if self.path == '/':
            self.path = 'index.html'
        # Call the superclass methods to actually serve the file
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Set the handler to the custom handler
handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
