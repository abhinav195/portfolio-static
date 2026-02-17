import os

# --- CONFIGURATION ---
OUTPUT_FILE = 'portfolio.txt'

# Folders to completely ignore (crucial to avoid bloating the file)
IGNORE_DIRS = {
    'node_modules', 
    '.git', 
    '.next', 
    '.vscode', 
    '.idea', 
    'dist', 
    'build', 
    'public', # usually binary assets, include if you have code inside
    'coverage'
}

# Specific files to ignore
IGNORE_FILES = {
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'context_builder.py', # Don't include this script itself
    '.DS_Store',
    '.env',               # SECURITY: Never dump secrets
    '.env.local'
}

# Only include files with these extensions to avoid binary garbage
INCLUDE_EXTENSIONS = {
    '.ts', '.tsx', 
    '.js', '.jsx', 
    '.css', '.scss', '.sass', 
    '.json', 
    '.md', 
    '.html'
}
# ---------------------

def is_text_file(filename):
    return any(filename.endswith(ext) for ext in INCLUDE_EXTENSIONS)

def main():
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
            # Walk the directory tree
            for root, dirs, files in os.walk('.'):
                # Modify 'dirs' in-place to prune ignored directories
                dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

                for file in files:
                    if file in IGNORE_FILES:
                        continue
                        
                    if not is_text_file(file):
                        continue

                    file_path = os.path.join(root, file)
                    
                    # Create a relative path (e.g., ./src/components/Navbar.tsx)
                    relative_path = os.path.relpath(file_path, '.')

                    print(f"Processing: {relative_path}")

                    # Write the header and content
                    outfile.write(f"\n{'='*50}\n")
                    outfile.write(f"FILE PATH: {relative_path}\n")
                    outfile.write(f"{'='*50}\n\n")

                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            outfile.write(infile.read())
                            outfile.write("\n") # Ensure separation
                    except Exception as e:
                        outfile.write(f"[ERROR READING FILE: {e}]\n")

        print(f"\nSUCCESS. Context generated in '{OUTPUT_FILE}'.")
        print("REVIEW THE FILE BEFORE UPLOADING. Ensure no secrets are included.")

    except Exception as e:
        print(f"Script failed: {e}")

if __name__ == "__main__":
    main()