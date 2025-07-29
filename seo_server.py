import json, subprocess, sys
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("SEO Audit")

@mcp.tool()
def audit(url: str) -> dict:
    """Return Lighthouse SEO category JSON for the given URL."""
    out = subprocess.check_output(
        ["npx", "lighthouse", url,
         "--output=json", "--only-categories=seo",
         "--quiet", "--chrome-flags=--headless=new"],
        text=True)
    return json.loads(out)["categories"]["seo"]

if __name__ == "__main__":
    mcp.serve_stdio()
PY < /dev/null