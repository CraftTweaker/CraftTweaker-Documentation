# Script Nedir

Bir script `.zs` dosya uzantısına sahiptir. Bir dosyayı script dosyası olarak sınıflandırabilmek için gereken tek şey budur.

#### Note

Windows bilinen dosya tiplerinin uzantılarını gizler. Bu da `text.txt` dosyasının bilgisayarınızda `text` olarak görünebileceği anlamına gelir.

Ayrıca bu `script.zs.txt` dosyasının bilgisayarınızda `script.zs` olarak da görünebileceği anlamına gelir.

Eğer dosya uzantılarının göründüğünden emin değilseniz oyununuzun bulunduğu klasöre giderek `options.txt` dosyasına bir göz atın. Eğer dosya adını `options.txt` olarak değil de sadece `options` olarak görüyorsanız bu dosya uzantılarının gizli olduğu anlamına gelmektedir ve script dosyası oluştururken bir takım sorunlarla karşılaşabilirsiniz.

Bunun nasıl çözüleceğini öğrenmek için [ buraya](https://helpx.adobe.com/tr/x-productkb/global/show-hidden-files-folders-extensions.html) tıklayabilirsiniz.

# Script dosyaları nereye gidiyor

Genellikle script dosyaları `scripts` klasörünün içerisinde olur. Bu klasör `mods`, `config` ve `logs` klasörlerinin de bulunduğu konumda bulunuyor.

Eğer bu klasörü bulmakta sorun yaşıyorsanız oyundayken `/ct scripts` komutunu çalıştırarak scripts klasörünü açabilirsiniz.

Nasıl göründüğü ile ilgili aşağıda bir dizin ağacı bulunmaktadır.

```plaintext
├── config
├── defaultconfigs
├── logs
├── mods
├── saves
└── scripts
```

## Alt Klasörler

Scripts klasörünün içerisinde birden fazla alt klasör bulunabilir. Örneğin, modlara göre klasör oluşturup scripts klasörünün içerisine koyabiliriz. Bunun dizin ağacı aşağıdaki gibi olacaktır.

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

Böyle yapmak, büyük bir mod paketindeki script dosyalarını yönetmenin mükemmel ve geçerli bir yoludur.

