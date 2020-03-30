import htmlmin
import os
from jsmin import jsmin


def main():
    print("Starting Minification!")
    all_files = []
    replaced_files = {}

    # r=root, d=directories, f = files
    for root, dirs, files in os.walk("site/"):
        for f in files:
            if '.html' in f or '.js' in f:
                all_files.append(os.path.join(root, f))


    for f in all_files:
        with open(f, "r+") as file:
            if '.html' in f:
                replaced_files[f] = htmlmin.minify(file.read().decode("utf-8"), remove_empty_space=True)
            elif '.js' in f:
                replaced_files[f] = jsmin(file.read())
    
    for f in replaced_files:
        with open(f, 'w') as file:
            file.write(replaced_files[f])

#     minified = htmlmin.minify(html.decode("utf-8"), remove_empty_space=True)
#     print(minified)
    print("Minification Complete!")


if __name__ == "__main__":
    main()

