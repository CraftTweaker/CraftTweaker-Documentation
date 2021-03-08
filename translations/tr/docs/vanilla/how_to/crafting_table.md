# Çalışma Masası

## Recipe Types

Çalışma masaları için üç tip tarif şekli bulunmaktadır:

- **Shapeless(Şekilsiz):** Şekilsiz tarifler çalışma masasında eşyaları nereye koyduğunuzun bir öneminin olmadığı tarif türleridir.
- **Shaped(Şekilli):** Şekilli tarifler çalışma masasında eşyaları nereye koyduğunuzun önemli olduğu tariflerdir.
- **Shaped Mirrored(Yansımalı):** Yansımalı tarifler şekilli tarifler gibidir. Ek olarak çalışma masasına yatay ve düşey eksende yansımalı olarak eşyaları koymanıza izin verir.

## Tarif Ekleme

_Bir tarif eklerken, tarif adının özgün olmasından emin olun!_

### Şekilsiz Tarif Ekleme

`craftingTable.addShapeless(tarifAdi, cikis, malzemeler, tarifFonksiyonu);`

- `tarifAdi` &lt;string>
- `cikis` <[IItemStack](/vanilla/api/items/IItemStack)>
- `malzemeler` <[IIngredient](/vanilla/api/items/IIngredient)[]>
- `tarifFonksiyonu` (İsteğe Bağlı) <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Bu fonksiyon, çalışma masasına [şekilsiz](#recipe-types) bir tarif ekler. [Şekilsiz](#recipe-types) tarifler çalışma masasına koyacağınız eşyaların pozisyonlarını göz ardı eder. Bu yüzden şekilsiz tarif oluşturduğunuzda eşyaların sırası önemli değildir.

[Şekilsiz](#recipe-types) tariflerde en fazla 9 eşya olabilir. 4 eşya veya daha az giriş eşyasını da envanterdeki 2x2 boyutundaki tabloda hazırlayabilirsiniz.

Çalışma masası tariflerinde çıkış ürünü birden fazla olabilir. This can be achieved by using the [IItemStack multiplication operator](/vanilla/api/items/IItemStack/#mul) on the output item.

```zenscript
craftingTable.addShapeless("sekilsiz_ornek_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Şekilsiz bir tarif en fazla 9 girişe sahip olabilir.
// Bu birden fazla çıktının kullanılabileceğini gösterir. Bu örnekte çıkış ürünü 8 adet çimenli toprak olacaktır. 
craftingTable.addShapeless("sekilsiz_ornek_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Tarif fonksiyonlarının kullanımını örnekler üzerinde görmek için [Tarif Fonksiyonlarının Kullanımı](#using-recipe-functions)'na bakınız. _

### Şekilli ve Yansımalı Tarifler Ekleme

`craftingTable.addShaped(tarifAdi, cikis, malzemeler, tarifFonksiyonu);`

`craftingTable.addShapedMirrored(tarifAdi, cikis, malzemeler, tarifFonksiyonu);`

- `tarifAdi` &lt;string>
- `cikis` <[IItemStack](/vanilla/api/items/IItemStack)>
- `malzemeler` <[IIngredient](/vanilla/api/items/IIngredient)[][]>
- `tarifFonksiyonu` (İsteğe Bağlı) <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

Bu fonksiyon, çalışma masasına şekilli (veya yansımalı) bir tarif ekler. Bir tarif oluştururken eşyaların çalışma masasındaki pozisyonlarının tek tek belirtilmesi gerekmektedir.

[Yansımalı](#recipe-types) bir tarif oluşturmak, eşyaları çalışma masasına dizerken oyuncuya daha fazla esneklik sağlar.

Hem [şekilli](#recipe-types) hem de [yansımalı](#recipe-types) tarifler 2x2'lik tabloda(envanter) ve çalışma masasında yapılabilir.

Çalışma masası tariflerinde çıkış ürünü birden fazla olabilir. This can be achieved by using the [IItemStack multiplication operator](/vanilla/api/items/IItemStack/#mul) on the output item.

```zenscript
// Şekilli bir tarif ekleme
craftingTable.addShaped("sekilli_ornek_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// 2x2 boyutunda şekilli bir tarif ekleme (yansımalı olarakda yapılabilir)
craftingTable.addShaped("sekilli_ornek_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Yansımalı bir tarif ekleme
craftingTable.addShapedMirrored("yansimali_ornek_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Tarif fonksiyonlarının kullanımını örnekler üzerinde görmek için [Tarif Fonksiyonlarının Kullanımı](#using-recipe-functions)'na bakınız. _

## Tarif Fonksiyonunun Kullanımı

Bir tarif fonksiyonu ile programlanabilir biçimde bir çıktı oluşturabilirsiniz. Bu özellikle, giriş eşyalarının hasar bilgisi veya NBT verisi gibi bilgilere ihtiyaç duyduğunuzda kullanışlı olabilir.

_Şekilli ve yansımalı tarifler birbirlerine benzediği için örneklerde sadece şekilli tarifler olacaktır. `addShaped` fonksiyonu kullanılan örnekleri `addShapedMirrored` olarak da düşünebilirsiniz._

### Şekilsiz Bir Tarifde RecipeFunctionArray Kullanımı

`tarifFonksiyonu` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(olaganCikis as IItemStack, girisler as IItemStack[]) => {};`

- `olaganCikis` <[IItemStack](/vanilla/api/items/IItemStack)>
- `girisler` <[IItemStack](/vanilla/api/items/IItemStack)[]> Orijinal tarifde tanımlandığı gibi sıralanmış giriş dizisi

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless(sekilsiz_fonksiyon_ornek_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (olaganCikis as IItemStack, girisler as IItemStack[]) => {
    // <item:minecraft:dirt> eşyasının görünen adının "gerçek bir elmas blok" olması ile ilgili kontrolü yap
    if (girisler[0].displayName == "gerçek bir elmas blok") {
        // <item:minecraft:diamond> * 9 döndürür
        return olaganCikis;
    }

    // Diğer türlü, "Elmas" ismiyle <item:minecraft:clay> eşyasını döndür
    return <item:minecraft:clay>.setDisplayName("Elmas");
});
```

### Şekilli/Yansımalı Bir Tarifde RecipeFunctionMatrix Kullanımı

`tarifFonksiyonu` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(olaganCikis as IItemStack, girisler as IItemStack[][]) => {};`

- `olaganCikis` <[IItemStack](/vanilla/api/items/IItemStack)>
- `inputs` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Orijinal tarifde tanımlandığı gibi sıralanmış giriş dizisi. Bir giriş, satır ve sütun değeri girilerek de elde edilebilir (1. satır 2. sütundaki giriş elemanını almak için `inputs[0][1]` kullanılabilir).

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShaped("sekilli_fonksiyon_ornek_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (olaganCikis as IItemStack, girisler as IItemStack[][]) => {
        var sayac = 0;
        // Bütün <item:minecraft:clay_ball> eşyalarının isimlerinin "Elmas" olması ile ilgili kontrolleri yap
        for satir in girisler{
            for tarifEsyasi in satir{
                if (<item:minecraft:clay_ball>.matches(tarifEsyasi ) && tarifEsyasi.displayName == "Elmas") {
                    // Eğer tarif eşyası <item:minecraft:clay_ball> ise ve adı "Elmas" ise sayac değişkeninin değerini arttır
                    sayac++;
                }
            }
        }

        // Eğer "Elmas" adıyla 8 tane <item:minecraft:clay_ball> eşyasına sahipsek
        if (sayac == 8) {
            if (girisler[1][1].displayName == "Özel Elmas") {
                // Eğer <item:minecraft:diamond> eşyasının adı "Özel Elmas" ise
                // 2 tane <item:minecraft:diamond_block> döndür
                return olaganCikis * 2;
            } else {
                // <item:minecraft:diamond_block> eşyasını döndür
                return olaganCikis;
            }
        }

        // Diğer türlü, "Elmas Blok" ismiyle <item:minecraft:clay> eşyasını döndür
        return <item:minecraft:clay>.setDisplayName("Elmas Blok");
    });
```

### İleri Düzey Kullanım

#### Değişken Olarak Kullanılabilen Fonksiyonlar

Tarif fonksiyonlarını birden çok tarifde kullanabilmek için bir değişkene atayabilirsiniz.

Şekilsiz:

```zenscript
import crafttweaker.api.item.IItemStack;

var ornekSekilsizTarifFonksiyonDegiskeni as function(olaganCikis as IItemStack, girisler as IItemStack[]) as IItemStack = (olaganCikis, girisler) => {
    if(girisler[0].displayName == "gerçek bir elmas blok" ){
        return olaganCikis;
    }

    return <item:minecraft:clay>.setDisplayName("Elmas");
};

// ornekSekilsizTarifFonksiyonDegiskeni'ndeki girisler[0] <item:minecraft:dirt> olacak
craftingTable.addShapeless("sekilsiz_degiskenfonksiyon_ornek_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], ornekSekilsizTarifFonksiyonDegiskeni);

// ornekSekilsizTarifFonksiyonDegiskeni'ndeki girisler[0] <item:minecraft:cobblestone> olacak
craftingTable.addShapeless("sekilsiz_degiskenfonksiyon_ornek_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], ornekSekilsizTarifFonksiyonDegiskeni);
```

Şekilli/Yansımalı:

```zenscript
import crafttweaker.api.item.IItemStack;

var ornekSekilliTarifFonksiyonDegiskeni as function(olaganCikis as IItemStack, girisler as IItemStack[][]) as IItemStack = (olaganCikis as IItemStack, girisler as IItemStack[][]) => {
    var sayac = 0;
    //Bütün <item:minecraft:clay_ball> eşyalarının isimlerinin "Elmas" olması ile ilgili kontrolü yap
    for satir in girisler {
        for tarifEsyasi in satir{
            if (<item:minecraft:clay_ball>.matches(tarifEsyasi) && tarifEsyasi.displayName == "Elmas") {
                //Eğer tarif eşyası <item:minecraft:clay_ball> ise ve adı "Elmas" ise sayac değişkeninin değerini arttır
                sayac++;
            }
        }
    }

    // Eğer "Elmas" ismiyle 8 tane <item:minecraft:clay_ball> eşyasına sahipsek
    if (sayac == 8) {
        if (girisler[1][1].displayName == "Özel Elmas") {
            // Eğer <item:minecraft:diamond> eşyasının adı "Özel Elmas" ise
            // 2 tane <item:minecraft:diamond_block> eşyasını döndür
            return olaganCikis* 2;
        } else {
            // <item:minecraft:diamond_block> eşyasını döndür
            return olaganCikis;
        }
    }

    // Diğer türlü, "Elmas Blok ismiyle" <item:minecraft:clay> eşyasını döndür
    return <item:minecraft:clay>.setDisplayName("Diamond Block");
};

craftingTable.addShaped("sekilli_fonksiyon_ornek_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], ornekSekilliTarifFonksiyonDegiskeni);

craftingTable.addShaped("sekilli_fonksiyon_ornek_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], ornekSekilliTarifFonksiyonDegiskeni);
```

## Bir Tarifi Kaldırma

### İsme Göre Tarif Kaldırma

`craftingTable.removeByName(tarifAdi);`

- `tarifAdi` &lt;string>

Girilen adla eşleşen tarifi kaldırır.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Çıkışa göre Tarif Kaldırma

`craftingTable.removeRecipe(cikis);`

- `cikis` <[IItemStack](/vanilla/api/items/IItemStack)>

Girilen [IItemStack](/vanilla/api/items/IItemStack) çıktısının olduğu bütün tarifleri kaldırır.

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Mod ID Değerine Göre Tarif Kaldırma

`craftingTable.removeByModid(modId);`

- `modId` &lt;string>

Girilen modun sağladığı bütün eşyaların tariflerini kaldırır.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Mod ID'ye Göre Kaldırılan Tariflerin Dahil Edilmemesi

`craftingTable.removeByModid(modId, dislamaFiltresi);`

- `modId` &lt;string>
- `dislamaFiltresi` <[RecipeFilter](/vanilla/api/recipe/RecipeFilter)>
  - `isim` &lt;string>Şu anda kontrol edilen tarifin adı. Mod ID değeri dahil edilmeyecek.

Girilen modun sağladığı bütün eşyaların tariflerini kaldırır. Belirlenen tarif adı için dislamaFiltresi true değerini döndürürse tarifler çıkarılır.

```zenscript
craftingTable.removeByModid("minecraft", (isim) => {
    // isim değişkeninin değerinin "minecraft:red_bed_from_white_bed" olup olmaması ile ilgili kontrolü yap
    return isim == "red_bed_from_white_bed";
});
```

Birden fazla tarif de çıkarılabilir. Bunun yapmanın bir yolu aşağıdaki gibi olacaktır.

```zenscript
// String olarak tarif adlarını tutan bir dizi
var minecraftCikarilacaklar as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (isim) => {
    return isim in minecraftCikarilacaklar;
});
```

### Düzenli İfadelere(Regex) Göre Tarif Kaldırma

`craftingTable.removeByRegex(regex);`

- `regex` &lt;string>

İsmi regex kuralına uyan bütün tarifleri kaldırır.

```zenscript
// "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", and "minecraft:white_carpet" gibi olan bütün tarifleri kaldırma
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Bütün Tarifleri Kaldırma

`craftingTable.removeAll();`

Çalışma masasındaki bütün tarifleri kaldırma.

```zenscript
craftingTable.removeAll();
```
