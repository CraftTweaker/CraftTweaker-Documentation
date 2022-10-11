# What Are Scripts

A script is simply a file with a `.zs` file extension, that is all that is needed to classify a file as a script file.

### Note

Windows hides the file extensions of "known" file types, this means that `text.txt` may show up as just `text` on your machine.

This also means that `script.zs.txt` will also show up as `script.zs` on your machine.

If you are unsure if file extensions are shown or not, take a look in your game directory and find the file called `options.txt`, if you see a file called `options` and not `options.txt`, that means that your file extensions are hidden and you may have trouble when making script files.

You can find out how to fix this [here](https://www.howtohaven.com/system/show-file-extensions-in-windows-explorer.shtml).

# Where do scripts go

Generally scripts go in the `scripts` folder of the install, it is on the same level as `mods`, `config` and `logs`.

If you're having trouble finding it, you can run the `/ct scripts` command in game, and it should open the scripts folder (This only works in single player, as you can't open a folder to the server scripts folder).

A tree view of how it should look is like so:

```plaintext
├── config
├── defaultconfigs
├── logs
├── mods
├── saves
└── scripts
```

## Sub-Folders

Scripts inside the `scripts` folder can be in any number of sub folders, an example of this is putting scripts into folders based on the mod, here is a tree view of that:

```plaintext
scripts/
└── mods
    ├── botania
    ├── recipes.zs
    ├── tags.zs
    └── thermal
        ├── recipes.zs
        └── tags.zs
```

That is perfectly valid and is a great way to manage script files in a large modpack!

