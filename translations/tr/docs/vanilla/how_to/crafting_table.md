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

Çalışma masası tariflerinde çıkış ürünü birden fazla olabilir. Bunu [IItemStack çarpma operatörünü](/vanilla/api/items/IItemStack/#mul) kullanarak yapabilirsiniz.

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

Çalışma masası tariflerinde çıkış ürünü birden fazla olabilir. Bunu [IItemStack çarpma operatörünü](/vanilla/api/items/IItemStack/#mul) kullanarak yapabilirsiniz.

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

### Şekilsiz Tariflerde RecipeFunctionArray Kullanımı

`tarifFonksiyonu` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(olaganCikis as IItemStack, girisler as IItemStack[]) => {};`

- `olaganCikis` <[IItemStack](/vanilla/api/items/IItemStack)>
- `girisler` <[IItemStack](/vanilla/api/items/IItemStack)[]> Orijinal tarifde tanımlandığı gibi sıralanmış giriş dizisi

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut as IItemStack, inputs as IItemStack[]) => {
    // Checks if <item:minecraft:dirt> has a display name of "totally real diamond block"
    if (inputs[0].displayName == "totally real diamond block") {
        // Returns <item:minecraft:diamond> * 9
        return usualOut;
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond"
    return <item:minecraft:clay>.setDisplayName("Diamond");
});
```

### Using RecipeFunctionMatrix in a Shaped/Mirrored Recipe

`recipeFunction` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut as IItemStack, inputs as IItemStack[][]) => {};`

- `olaganCikis` <[IItemStack](/vanilla/api/items/IItemStack)>
- `inputs` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Array of inputs ordered the same as defined in the original recipe. An input can be found by defining the row, then the column (`inputs[0][1]` to get the item in the first row, second column).

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut as IItemStack, inputs as IItemStack[][]) => {
        var counter = 0;
        // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
        for row in inputs {
            for recipeItem in row {
                if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                    // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                    counter++;
                }
            }
        }

        // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
        if (counter == 8) {
            if (inputs[1][1].displayName == "Special Diamond") {
                // If <item:minecraft:diamond> has a display name of "Special Diamond"
                // Return 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // Returns <item:minecraft:diamond_block>
                return usualOut;
            }
        }

        // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
        return <item:minecraft:clay>.setDisplayName("Diamond Block");
    });
```

### Advanced Usage

#### Functions as a Variable

Recipe functions can be assigned to a variable allowing you to ulitize the same function for multiple recipes easily.

Shapeless:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapelessRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(inputs[0].displayName == "totally real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>.setDisplayName("Diamond");
};

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:dirt>
craftingTable.addShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:cobblestone>
craftingTable.addShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Shaped/Mirrored:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapedRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var counter = 0;
    // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
    for row in inputs {
        for recipeItem in row {
            if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                counter++;
            }
        }
    }

    // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
    if (counter == 8) {
        if (inputs[1][1].displayName == "Special Diamond") {
            // If <item:minecraft:diamond> has a display name of "Special Diamond"
            // Return 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Returns <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
    return <item:minecraft:clay>.setDisplayName("Diamond Block");
};

craftingTable.addShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

craftingTable.addShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## Removing a Recipe

### Remove a Recipe by Name

`craftingTable.removeByName(recipeName);`

- `tarifAdi` &lt;string>

Removes the recipe that matches the name provided.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Remove Recipes by Output

`craftingTable.removeRecipe(output);`

- `cikis` <[IItemStack](/vanilla/api/items/IItemStack)>

Removes all recipes where the output result is the provided [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Remove Recipes by Mod ID

`craftingTable.removeByModid(modId);`

- `modId` &lt;string>

Removes all recipes added by the provided mod.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Exclude Recipes From Mod ID Removal

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` &lt;string>
- `exclusionFilter` <[RecipeFilter](/vanilla/api/recipe/RecipeFilter)>
  - `name` &lt;string> The name of the current recipe being checked. _The mod id will not be included_

Removes all recipes added by the provided mod. Recipes are excluded if the result of the exclusionFilter returns true for the recipe name.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Checks if the name of the recipe matches "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

Multiple recipes can also be excluded. One way this can be done is as follows:

```zenscript
// An array of recipe names as strings
var minecraftExclusions as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### Remove Recipes by Regex

`craftingTable.removeByRegex(regex);`

- `regex` &lt;string>

Removes all recipes that's name matches the regex string.

```zenscript
// Removes recipes such as "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", and "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Remove All Recipes

`craftingTable.removeAll();`

Removes all crafting table recipes.

```zenscript
craftingTable.removeAll();
```
