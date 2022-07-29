"""
Utility script to split a large dictionary into smaller ones based on word length.
"""
from contextlib import ExitStack
import os

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

filenames = [f"dict{length}.js" for length in range(3, 9)]

with open(os.path.join(__location__, 'dict.js'), encoding="utf-8") as f:
    # Skip first line
    f.readline().rstrip()
    with ExitStack() as stack:
        files = [stack.enter_context(open(os.path.join(__location__, "data", fname), "w")) for fname in filenames]
        for file in files:
            file.write("const dict = {\n")

        # Read rest of file
        for line in f:
            
            data = line.strip()
            idx = len(data) - 4 - 3
            if idx < 0 or idx >= len(files):
                continue
            files[idx].write(f"{data}\n")
        for file in files:
            file.write("};\n")
            file.write("exports.dict = dict;")
