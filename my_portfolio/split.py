import os
import chardet

def is_binary(file_path, blocksize=512):
    """Quickly check if file is binary."""
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(blocksize)
        return b'\0' in chunk
    except Exception:
        return True  # treat unreadable files as binary

def read_file_safely(file_path):
    """Read a file with encoding detection and safe fallback."""
    try:
        with open(file_path, 'rb') as f:
            raw = f.read()
            if not raw:
                return ""
            result = chardet.detect(raw)
            encoding = result.get('encoding') or 'utf-8'
            return raw.decode(encoding, errors='ignore')
    except Exception as e:
        print(f"⚠️ Skipping {file_path} ({e})")
        return ""

def collect_repo_contents(repo_root):
    """Walk repo and collect all readable file contents."""
    collected = []
    for root, _, files in os.walk(repo_root):
        for file in files:
            file_path = os.path.join(root, file)

            # skip itself and non-code files
            if file_path.endswith("split_repo_into_parts.py"):
                continue

            # skip hidden/system/cache folders
            if any(skip in file_path.lower() for skip in [
                '.git', '__pycache__', '.venv', 'node_modules', '.idea', '.vscode'
            ]):
                continue

            # skip large or binary files
            if os.path.getsize(file_path) > 1_000_000 or is_binary(file_path):
                continue

            content = read_file_safely(file_path)
            if not content.strip():
                continue

            relative_path = os.path.relpath(file_path, repo_root)
            collected.append(f"{relative_path}\n{{{{\n{content}\n}}}}\n\n")

    return collected

def split_into_parts(collected, num_parts=4):
    """Split collected content into roughly equal parts."""
    joined = "".join(collected)
    total_len = len(joined)
    part_size = total_len // num_parts if total_len > 0 else 0
    parts = [joined[i:i+part_size] for i in range(0, total_len, part_size)]
    while len(parts) < num_parts:
        parts.append("")
    return parts[:num_parts]

def write_parts(parts, repo_root):
    for i, part in enumerate(parts, start=1):
        filename = os.path.join(repo_root, f"repo{i}.txt")
        with open(filename, "w", encoding="utf-8") as f:
            f.write(part)
        print(f"✅ Wrote {filename} ({len(part)} chars)")

def main():
    repo_root = os.path.dirname(os.path.abspath(__file__))
    print(f"📁 Scanning repo at: {repo_root}")

    collected = collect_repo_contents(repo_root)
    print(f"📦 Total files collected: {len(collected)}")

    parts = split_into_parts(collected, num_parts=4)
    write_parts(parts, repo_root)

    print("🎉 Done! Generated repo1.txt → repo4.txt in the repo root.")

if __name__ == "__main__":
    main()
