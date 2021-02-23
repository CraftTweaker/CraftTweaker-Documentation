# Script Nedir

Bir script `.zs` dosya uzantısına sahiptir. Bir dosyayı script dosyası olarak sınıflandırabilmek için gereken tek şey budur.

#### Note

Windows bilinen dosya tiplerinin uzantılarını gizler. Bu da `text.txt` dosyasının bilgisayarınızda `text` olarak görünebileceği anlamına gelir.

Ayrıca bu `script.zs.txt` dosyasının bilgisayarınızda `script.zs` olarak da görünebileceği anlamına gelir.

Eğer dosya uzantılarının göründüğünden emin değilseniz oyununuzun bulunduğu klasöre giderek `options.txt` dosyasına bir göz atın. Eğer dosya adını `options.txt` olarak değil de sadece `options` olarak görüyorsanız bu dosya uzantılarının gizli olduğu anlamına gelmektedir ve script dosyası oluştururken bir takım sorunlarla karşılaşabilirsiniz.

Bunun nasıl çözüleceğini öğrenmek için [ buraya](https://helpx.adobe.com/tr/x-productkb/global/show-hidden-files-folders-extensions.html) tıklayabilirsiniz.

# Script dosyaları nereye gidiyor

Generally scripts go in the `scripts` folder of the install, it is on the same level as `mods`, `config` and `logs`.

If you're having trouble finding it, you can run the `/ct scripts` command in game, and it should open the scripts folder.

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
    └── tags.zs
    └── thermal
        ├── recipes.zs
        └── tags.zs
```

That is perfectly valid and is a great way to manage script files in a large modpack!

