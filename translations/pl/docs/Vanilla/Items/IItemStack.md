# IItemStack

Obiekt IItemStack składa się z [definicji przedmiotu](/Vanilla/Items/IItemDefinition/), wartości meta/obrażeń oraz danych NBT.  
Innymi słowy, odnosi się do przedmiotu lub bloku.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.IItemStack;`

## Calling an IItemStack

Istnieje kilka metod, które zwracają IItemStack

* Używanie [uchwytu nawiasów](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Używając metody `makeStack()` na obiekcie [IItemDefinition](/Vanilla/Items/IItemDefinition/) `<minecraft:stone>.definition.makeStack(0)`
* Używanie `stosu` getter na obiekcie [IEntityDrop](/Vanilla/Entities/IEntityDrop/)
* Używanie `firstItem` getter na [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

Jeśli zadzwonisz na te funkcje, najprawdopodobniej zrobisz to aby powtórzyć je przez otrzymane listy/tablice

* Używanie `elementów` metody [ISkładnik](/Vanilla/Variable_Types/IIngredient/) zwraca listę IItemStack: `<ore:ingotGold>.item`
* Używanie metody `itemArray` na [IIngredient](/Vanilla/Variable_Types/IIngredient/) zwraca IItemStack[]: `<ore:ingotGold>.itemArray`
* Używanie `item` method on a [IMod](/Vanilla/Game/Mods/#imod) obiekt zwraca IItemStack[]: `załadowane Mods["minecraft"].item`

## Funkcje

Co zatem możemy teraz zrobić?

### Rozszerzenie IIngredient

IItemStack rozszerza [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
Oznacza to, że wszystkie funkcje dostępne dla obiektów [IIngredient](/Vanilla/Variable_Types/IIngredient/) mają również zastosowanie do IItemStacks. <details><summary>Pochodne metody</summary> 

* znak
* kwota
* elementy
* Tablica elementów
* ciecze
* Dowiedz się więcej
* stos | inne składniki
* stack.or(inny składnik)
* stack.transform([transformator](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([transformator](/Vanilla/Items/Item_Transformers/)
* stack.only([warunek](/Vanilla/Items/Item_Conditions/))
* stack.marked(mark)
* [PLACEHOLDER] stack.matches(item
* [PLACEHOLDER] stack.matchesExact(item)
* [PLACEHOLDER] stack.matches(liquid)
* stos ma składnik
* [PLACEHOLDER] stack.applyTransform(stack,player)
* stack.hasTransformatory()</details>

### ZenGetters/ZenSetters

Przeczytaj jak używać ich [tutaj](/UsingThisWiki/). Sprawdź również poniższe przykłady.

| ZenGetter/ZenMethod      | ZenSetter/ZenMethod | Typ                                                             |
| ------------------------ | ------------------- | --------------------------------------------------------------- |
| definicja                |                     | [IItemDefinition](/Vanilla/Items/IItemDefinition/)              |
| Nazwa                    |                     | ciąg znaków                                                     |
| nazwa wyświetlacza       | nazwa wyświetlacza  | ciąg znaków                                                     |
| maxStackSize             | maxStackSize        | odcień                                                          |
| twardość                 | twardość            | zmiennoprzecinkowe                                              |
| obrażenia                |                     | odcień                                                          |
| maxDamage                | maxDamage           | odcień                                                          |
| Tag hasa                 |                     | bool                                                            |
| znacznik                 | withTag(tag)        | [IData](/Vanilla/Data/IData/)                                   |
| ores                     |                     | List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>        |
| Klasy narzędzi           |                     | Lista<string\>                                                 |
| itemEnchantability       |                     | odcień                                                          |
| Element kontenera        |                     | IItemStack                                                      |
| Element hasContainerItem |                     | bool                                                            |
| koszt napraw             | koszt napraw        | odcień                                                          |
| Bloki canEditBlocków     |                     | bool                                                            |
| isOnItemFrame            |                     | bool                                                            |
| możliwe do zaklęcia      |                     | bool                                                            |
| zaczarowana              |                     | bool                                                            |
| uszkodzony               |                     | bool                                                            |
| zadające obrażenia       |                     | bool                                                            |
| blok izitemBlock         |                     | bool (jeśli zawarty przedmiot jest uchwytem)                    |
| możliwe do odczytania    |                     | bool                                                            |
| isBeaconPayment          |                     | bool                                                            |
| Efekt                    |                     | bool                                                            |
| hasDisplayName           |                     | bool                                                            |
| metadane                 |                     | odcień                                                          |
| podtypy                  |                     | bool                                                            |
| isEmpty                  |                     | bool                                                            |
| spalony Czas             |                     | odcień                                                          |
| pokaż Pasek Trwałości    |                     | bool                                                            |
| hasCustomEntity          |                     | bool                                                            |
| zaklęcia                 |                     | List<[Zaklęcie Ichantu](/Vanilla/Enchantments/IEnchantment/)\> |
| matchTagExact            |                     | bool                                                            |

#### Kwota

| Metoda połączenia                          | Zwroty                                                      | Typy parametrów |
| ------------------------------------------ | ----------------------------------------------------------- | --------------- |
| `Stack.anyKwota()`                         | Nowy IItemStack ze zmienioną właściwością                   |                 |
| `[PLACEHOLDER] stack.amount(int amount`    | Nowy IItemStack ze zmienioną właściwością                   | odcień          |
| `[PLACEHOLDER] stack.withKwot(int amount)` | Nowy IItemStack ze zmienioną właściwością                   | odcień          |
| `stos * kwota`                             | Nowy IItemStack ze zmienioną właściwością                   | odcień          |
| `stack.splitStack(int amount)`             | Podział IItemStack. Stary zostanie odpowiednio zmniejszony. | odcień          |

#### Waga

| Metoda połączenia                          | Zwroty                                                | Typy parametrów                 |
| ------------------------------------------ | ----------------------------------------------------- | ------------------------------- |
| `stack.percent(szansa zmiennoprzecinkowa)` | [Ważone ItemStack](/Vanilla/Items/WeightedItemStack/) | zmiennoprzecinkowe (100 = 100%) |
| `waga (szansa na pływanie)`                | [Ważone ItemStack](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)                |

#### Obrażenia

| Metoda połączenia                                           | Zwroty                                    | Typy parametrów                            |
| ----------------------------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| `[PLACEHOLDER] stack.anyObage()`                            | Nowy IItemStack ze zmienioną właściwością |                                            |
| `[PLACEHOLDER] stack.withDamage(int damage)`                | Nowy IItemStack ze zmienioną właściwością | odcień                                     |
| `[PLACEHOLDER] stack.damageItem(int amount, IEntity entity` | Unieważnij (nic)                          | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### Tagi

| Metoda połączenia                            | Zwroty                                    | Typy parametrów                     |
| -------------------------------------------- | ----------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                       | Nowy IItemStack ze zmienioną właściwością |                                     |
| `stack.withTag(tag I)`                       | Nowy IItemStack ze zmienioną właściwością | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(tag IDI, bool matchTagExact)` | Nowy IItemStack ze zmienioną właściwością | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(nazwa ciągu)`               | Nowy IItemStack ze zmienioną właściwością | ciąg znaków                         |
| `stack.updateTag(tag I)`                     | Nowy IItemStack ze zmienioną właściwością | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData, bool matchTagExact)` | Nowy IItemStack ze zmienioną właściwością | [IData](/Vanilla/Data/IData/), bool |

#### Blok przesyłania

| Metoda połączenia   | Zwroty                                         |
| ------------------- | ---------------------------------------------- |
| `stack.asBlock()`   | Nowy obiekt [IBlock](/Vanilla/Blocks/IBlock/). |
| `stosu jako IBlock` | Nowy obiekt [IBlock](/Vanilla/Blocks/IBlock/). |

#### Lore/DisplayName

| Metoda połączenia                    | Zwroty                                                                                                                                    | Typy parametrów                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `stack.withDisplayName(nazwa ciągu)` | Nowy IItemStack ze zmienioną właściwością. W przeciwieństwie do wyświetlacza Separator Nazw, dotyczy to tylko tego pojedynczego elementu. | ciąg (obsługuje kody kolorów z "§")          |
| `stack.withLore(String[] lore)`      | Nowy IItemStack ze zmienioną właściwością.                                                                                                | ciąg znaków[] (obsługuje kody kolorów z "§") |
| `stack.clearCustomName()`            | Unieważnij (nic)                                                                                                                          |                                              |

#### Zaklęcia

| Metoda połączenia                                              | Zwroty           | Typy parametrów                                                        |
| -------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(IenchantmentDefinicje)`         | Bolu.            | [IEnchantmentDefinicja](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `[PLACEHOLDER] stack.addenchantment(IEnchantment enchantment)` | Unieważnij (nic) | [Zaklęcie](/Vanilla/Enchantments/IEnchantment/)                        |

#### canItem...

| Metoda połączenia                            | Zwroty                                                         | Typy parametrów                                         |
| -------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------- |
| `stack.canPlaceOn(BlockDefinition block)`    | Bolet informujący czy przedmiot może być umieszczony na bloku. | [Definicja IBlock'a](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.candestroroy(IBlockDefinition block)` | Bolet informujący czy przedmiot może zniszczyć blok.           | [Definicja IBlock'a](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock. (BlockState block)`  | Bolet informujący czy przedmiot może zebrać blok.              | [Stan IBlocka](/Vanilla/Blocks/IBlockState/)            |
| `stack.getStrengthAgainstBlock.`             | Zmienna reprezentująca siłę przedmiotu w stosunku do bloku.    | [Stan IBlocka](/Vanilla/Blocks/IBlockState/)            |

#### create IEntityItem

| Metoda połączenia                                            | Zwroty                                                                                                                | Typy parametrów                                                          |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld Świat, int x, int y, int z);` | Nowy [Element IEntityItem](/Vanilla/Entities/IEntityItem/) , który odpowiada nowo utworzonemu przedmiotowi na świecie | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | Nowy [Element IEntityItem](/Vanilla/Entities/IEntityItem/) , który odpowiada nowo utworzonemu przedmiotowi na świecie | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## Transformatory przedmiotów i Warunki Przedmiotów

Możesz znaleźć sposób korzystania z nich na stronie [IIngredient](/Vanilla/Variable_Types/IIngredient/) lub w ich wartościach wpisów:  
[Warunki Produktu](/Vanilla/Items/Item_Conditions/)  
[Transformatory Przedmiotów](/Vanilla/Items/Item_Transformers/)

## Przykłady

#### Wyświetlana nazwa

Globalnie (przekłada przedmiot na nową nazwę).

```zenscript
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Sets apples Display Name to "Tomato"
apple.displayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
```

Lokalnie (tylko ten pojedynczy element).

```zenscript
<minecraft:coal>.withDisplayName("Czarne Złoto");
```

#### Pożyczka

`<minecraft:coal>.withLore(["Ta funkcja","requires a","string[]"]);`

#### Maksymalny rozmiar stosu

Maksymalny rozmiar stoiska to ilu przedmiotów mieści się w jednym stoisku, na przykład rozmiar stoiska wełny wynosi 64 a wiadra 16.

```zenscript
owalne jabłko = <minecraft:apple>;
owalne wiadro = <minecraft:bucket>;

//druk 64
(jabłko. axStackSize);

//ustawia Max Stack rozmiar do 32
jabłek.maxStackSize = 32;

//printts 32
print(jabłko. axStackSize);

//ustawia Maksymalny rozmiar stosu dla Wiadra
jabłka.maxStackSize = bucket.maxStackSize;

//printts 16
print(jabłko.maxStackSize);
```

#### Twardość

Trudność polega na tym, jak długo trwa złamanie bloku. Działa tylko wtedy, gdy obiekt odnosi się do bloku.

```zenscript
owalna trawa = <minecraft:grass>;

//drukuje 1.0
print(twardość trawa);

//ustawia twardość trawy na 10,0
trawa.twardość = 10.0;

//druk 10.0
druk (twardość trawy);
```

#### Obrażenia

Obrażenia dla przedmiotów, które nie mogą zostać uszkodzone, wynoszą 0.

```zenscript
Wal selek = <minecraft:diamond_pickaxe>;

//wydruk 1561
(ilość). axDamage);

//ustawia maksymalne obrażenia Diamentowego Kilof na 256
pick.maxDamage = 256;

//drukuje 256
(pick. obrażenia osiowe);



//Obrażenia nie czynne, użyte w recepturach
<minecraft:iron_pickaxe>.anyDamage();

//With zadane obrażenia
<minecraft:iron_pickaxe>.withDamage(122);
```

#### Znacznik

Tag jest obiektem [IData](/Vanilla/Data/IData/) .  
Jeśli produkt nie zawiera znacznika, zwróci pusty znacznik, nigdy nie null.

```zenscript
//tworzy jabłko z podanym tagiem
//Usuwa istniejące tagi
<minecraft:apple>. ithTag({Unbreakable: 1});

//tworzy jabłko z imponującym tagiem
<minecraft:apple>. ithEmptyTag();

//usuwa tag przez jego nazwę
. emoveTag("tagName");

//zaktualizuj istniejący tag
//Jeśli tag nie nadpisuje istniejącego tagu, pozostanie stały.
item.updateTag({Unbreakable: 1});
```

#### Płynne

Zwraca ciecz znajdującą się w pojedynczym elemencie (jeśli jest wielowarstwowa) lub zerowa, jeśli przedmiot nie jest pojemnikiem.  
Zwraca obiekt [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) lub null.

```zenscript
Val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Kwota

Ile jest jabłek?

```zenscript
<minecraft:apple>. nyAmount();

//1 jabłko
jabłko = <minecraft:apple>;

//2 jabłka
jabłka = jabłko * 2;

//3 Jabłka
val evenMoreApples = <minecraft:apple> * 3;
```

#### Waga

Zwraca [WażonyItemStack](/Vanilla/Items/WeightedItemStack/) z podaną procentą.

```zenscript
jabłko owalne = <minecraft:apple>;

//Tworzy ważony Stack z 100 procentami szansy
var Procent = jabłko % 100;

//To samo co powyższy
jabłko Procent = jabłko. ośmioro (1,0);
```

#### Ores

Zwraca listę [IOreDictEnordów](/Vanilla/OreDict/IOreDictEntry/) odnoszącą się do tego elementu.

```zenscript
<minecraft:apple>.ores;
```

#### Przesyłanie do IBlock

Możesz rzucić IItemStack na [IBlock](/Vanilla/Blocks/IBlock/), tak długo, jak odnosisz się do bloku, w przeciwnym razie rzut wyrzuci wyjątek.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> jako crafttweaker.block.IBlock;
```

Możesz również przetestować, czy IItemStack zawiera ItemBlock i może być przekształcony:

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Właściwości Żywności

Możesz sprawdzić, czy IItemStack jest artykułem żywnościowym i jakie właściwości żywnościowe posiada.  
Może nie działać dla każdego zmodyfikowanego jedzenia!

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```