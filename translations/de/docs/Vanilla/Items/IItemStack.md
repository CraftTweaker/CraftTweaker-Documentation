# IItemStack

Ein IItemStack Objekt besteht aus einer [Objektdefinition](/Vanilla/Items/IItemDefinition/), einem Meta-Schaden-Wert und NBT-Daten.  
Mit anderen Worten, es bezieht sich auf ein Element oder einen Block.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.item.IItemStack;`

## Calling an IItemStack

Es gibt mehrere Methoden, die einen IItemStack zurückgeben

* Verwende den [Klammerhandler](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Verwendung der `makeStack()` Methode für ein [IItemDefinition](/Vanilla/Items/IItemDefinition/) Objekt `<minecraft:stone>.definition.makeStack(0)`
* Verwende den `Stapel` zu einem [IEntityDrop](/Vanilla/Entities/IEntityDrop/) Objekt
* Mit dem `Erste-Item` erhalten Sie einen [IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

Wenn Sie diese Funktionen aufrufen, werden Sie höchstwahrscheinlich durch die resultierenden Listen/Arrays iterieren

* Die Verwendung der `Elemente` Methode auf [IIngredient](/Vanilla/Variable_Types/IIngredient/) gibt eine IItemStack Liste zurück: `<ore:ingotGold>.items`
* Mit der `itemArray` Methode eines [IIngredient](/Vanilla/Variable_Types/IIngredient/) gibt einen IItemStack zurück[]: `<ore:ingotGold>.itemArray`
* Mit der `Methode` für ein [IMod](/Vanilla/Game/Mods/#imod) Objekt gibt einen IItemStack zurück[]: `loadedMods["minecraft"].items`

## Funktionen

Was können wir nun damit machen?

### Erweiterte IIngredienz

IItemStack extends [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
That means all functionality that is available to [IIngredient](/Vanilla/Variable_Types/IIngredient/) objects also is applicable to IItemStacks. <details><summary>Abgeleitete Methoden</summary> 

* stack.mark
* stack.amount
* stack.items
* stack.itemArray
* stack.liquids
* stack.commandString
* stack | otherIngredient
* stack.org(otherIngredient)
* stack.transform([Transformator](/Vanilla/Items/Item_Transformers/))
* stack.transformNeu ([Transformator](/Vanilla/Items/Item_Transformers/))
* stack.only([Bedingung](/Vanilla/Items/Item_Conditions/))
* stack.markiert (markiert)
* stack.matches(item)
* stack.matchesExact(item)
* stack.matches(liquid)
* Stapel hat Zutat
* stack.applyTransform(stack,player)
* stack.hasTransformers()</details>

### ZenGetter/ZenSetter

Lesen Sie, wie Sie sie [hier verwenden](/UsingThisWiki/). Schauen Sie sich auch die untenstehenden Beispiele an.

| ZenGetter/ZenMethode | ZenSetter/ZenMethode | Type                                                          |
| -------------------- | -------------------- | ------------------------------------------------------------- |
| definition           |                      | [IItemDefinition](/Vanilla/Items/IItemDefinition/)            |
| name                 |                      | string                                                        |
| displayName          | displayName          | string                                                        |
| maxStackSize         | maxStackSize         | int                                                           |
| Härte                | Härte                | float                                                         |
| schaden              |                      | int                                                           |
| maxDamage            | maxDamage            | int                                                           |
| hasTag               |                      | bool                                                          |
| tag                  | mit Tag(tag)         | [IData](/Vanilla/Data/IData/)                                 |
| ores                 |                      | Liste <[IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/)\>  |
| toolklassen          |                      | Liste<string\>                                               |
| itemEnchantability   |                      | int                                                           |
| containerItem        |                      | IItemStack                                                    |
| hasContainerItem     |                      | bool                                                          |
| Reparaturkosten      | Reparaturkosten      | int                                                           |
| canEdit-Blöcke       |                      | bool                                                          |
| isOnItemFrame        |                      | bool                                                          |
| isEnchantable        |                      | bool                                                          |
| isEnchanted          |                      | bool                                                          |
| isDamaged            |                      | bool                                                          |
| isDamageable         |                      | bool                                                          |
| isItemBlock          |                      | bool (falls vorhandenes Element ein Elementblock ist)         |
| isStapelbar          |                      | bool                                                          |
| isBeaconZahlung      |                      | bool                                                          |
| hasEffect            |                      | bool                                                          |
| hasDisplayName       |                      | bool                                                          |
| metadaten            |                      | int                                                           |
| hasSubtypes          |                      | bool                                                          |
| isEmpty              |                      | bool                                                          |
| brennzeit            |                      | int                                                           |
| showsDurabilitybar   |                      | bool                                                          |
| hasCustom-Entity     |                      | bool                                                          |
| verzaubert           |                      | Liste <[Verzauberung](/Vanilla/Enchantments/IEnchantment/)\> |
| matchTagExact        |                      | bool                                                          |

#### Betrag

| Methodenaufruf                 | Rückgabewert                                                | Parameter Typen |
| ------------------------------ | ----------------------------------------------------------- | --------------- |
| `stack.anyAmount()`            | Ein neuer IItemStack mit der geänderten Eigenschaft         |                 |
| `stack.amount (int Betrag)`    | Ein neuer IItemStack mit der geänderten Eigenschaft         | int             |
| `stack.withAmount(int Betrag)` | Einen neuen IItemStack mit der angegebenen Größe            | int             |
| `stapel* Betrag`               | Einen neuen IItemStack mit der angegebenen Größe            | int             |
| `stack.splitStack(int Betrag)` | Der Split IItemStack. Das alte wird entsprechend reduziert. | int             |

#### Gewicht

| Methodenaufruf                | Rückgabewert                                                          | Parameter Typen    |
| ----------------------------- | --------------------------------------------------------------------- | ------------------ |
| `stack.percent(float Chance)` | Ein [Gewichtetes Gegenstandstapel](/Vanilla/Items/WeightedItemStack/) | float (100 = 100%) |
| `stack.weight(float Chance)`  | Ein [Gewichtetes Gegenstandstapel](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)   |

#### Schaden

| Methodenaufruf                                | Rückgabewert                                        | Parameter Typen                            |
| --------------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| `stack.anyDamage()`                           | Ein neuer IItemStack mit der geänderten Eigenschaft |                                            |
| `stack.withSchaden(int damage)`               | Ein neuer IItemStack mit der geänderten Eigenschaft | int                                        |
| `stack.damageItem(int Menge, IEntity Entity)` | nichtig (nichts)                                    | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### Tags

| Methodenaufruf                                   | Rückgabewert                                        | Parameter Typen                     |
| ------------------------------------------------ | --------------------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | Ein neuer IItemStack mit der geänderten Eigenschaft |                                     |
| `stack.withTag(IData Tag)`                       | Ein neuer IItemStack mit der geänderten Eigenschaft | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData-Tag, bool matchTagExact)`   | Ein neuer IItemStack mit der geänderten Eigenschaft | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(String-Name)`                   | Ein neuer IItemStack mit der geänderten Eigenschaft | string                              |
| `stack.updateTag(IData Tag)`                     | Ein neuer IItemStack mit der geänderten Eigenschaft | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData-Tag, bool matchTagExact)` | Ein neuer IItemStack mit der geänderten Eigenschaft | [IData](/Vanilla/Data/IData/), bool |

#### Block-Casting

| Methodenaufruf     | Rückgabewert                                        |
| ------------------ | --------------------------------------------------- |
| `stack.asBlock()`  | Ein neues [IBlock](/Vanilla/Blocks/IBlock/) Objekt. |
| `als IBlock stack` | Ein neues [IBlock](/Vanilla/Blocks/IBlock/) Objekt. |

#### Lor/Anzeigename

| Methodenaufruf                       | Rückgabewert                                                                                                                         | Parameter Typen                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| `stack.withDisplayName(String-Name)` | Ein neuer IItemStack mit der geänderten Eigenschaft. Im Gegensatz zum displayName Setter, gilt dies nur für dieses einzelne Element. | string (supports color codes with "§")   |
| `stack.withLore(String[] lore)`      | Ein neuer IItemStack mit der geänderten Eigenschaft.                                                                                 | string[] (unterstützt Farbcodes mit "§") |
| `stack.clearCustomName()`            | nichtig (nichts)                                                                                                                     |                                          |

#### Verzauberungen

| Methodenaufruf                                                       | Rückgabewert     | Parameter Typen                                                         |
| -------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition) Verzauberung` | Ein Bool.        | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addVerzauberung (IVerzauberung)`                              | nichtig (nichts) | [IEnchantment](/Vanilla/Enchantments/IEnchantment/)                     |

#### canItem...

| Methodenaufruf                                   | Rückgabewert                                                                 | Parameter Typen                                       |
| ------------------------------------------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| `stack.canPlaceOn(IBlockDefinition-Block)`       | Ein Bool, der angibt, ob das Item auf den Block gelegt werden kann.          | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(IBlockDefinition-Block)`       | Ein Bool, der angibt, ob der Gegenstand den Block zerstören kann.            | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(IBlockState Block)`       | Ein Bool, der angibt, ob der Gegenstand den Block ernten kann.               | [IBlockState](/Vanilla/Blocks/IBlockState/)           |
| `stack.getStrengAgainstBlock(IBlockState Block)` | Ein Float, der die Stärke des Gegenstands gegenüber dem Block repräsentiert. | [IBlockState](/Vanilla/Blocks/IBlockState/)           |

#### create IEntityItem

| Methodenaufruf                                               | Rückgabewert                                                                                                 | Parametertypen                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | Ein neues [IEntityItem](/Vanilla/Entities/IEntityItem/) entspricht dem neu erstellten Gegenstand in der Welt | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | Ein neues [IEntityItem](/Vanilla/Entities/IEntityItem/) entspricht dem neu erstellten Gegenstand in der Welt | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## ItemTransformers und Artikelbedingungen

Sie finden diese entweder auf der [IIngredient](/Vanilla/Variable_Types/IIngredient/) Seite oder in ihren entsprechenden Einträgen:  
[Artikelbedingungen](/Vanilla/Items/Item_Conditions/)  
  
[Artikelumwandler](/Vanilla/Items/Item_Transformers/)

## Beispiele

#### Anzeigename

Global (übersetzt das Element in den neuen Namen).

```zenscript
val apple = <minecraft:apple>;

//druckt "Apple"
print(apple.displayName);

//Setzt Äpfel Anzeigename auf "Tomato"
apple. isplayName = "Tomato";

//druckt "Tomato"
print(apple.displayName);
```

Lokal (nur dieses einzelne Element).

```zenscript
<minecraft:coal>.withDisplayName("Black Gold");
```

#### Lore

`<minecraft:coal>.withLore(["Diese Funktion","erfordert ein","string[]"]);`

#### Maximale Stackgröße

Die maximale Stapelgröße ist, wie viele Gegenstände in einen Stapel passen, zum Beispiel ist die Größe der Wolle 64 und die Größe der Eimer nur 16.

```zenscript
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//druckt 64
print(apple. axStackSize);

//setzt die maximale Stackgröße der Äpfel auf 32
apple.maxStackSize = 32;

//Druckt 32
print(apple. axStackSize);

//setzt die maximale Stackgröße von Apfeln auf die maximale Stackgröße des Bucket
apple.maxStackSize = bucket.maxStackSize;

//druckt 16
print(apple.maxStackSize);
```

#### Härte

Die Härte ist, wie lange es dauert, den angegebenen Block zu brechen. Funktioniert nur, wenn das Objekt auf einen Block verweist.

```zenscript
val grass = <minecraft:grass>;

//druckt 1.0
print(grass.hardness);

//setzt Grashärte auf 10.0
grass.hardness = 10.0;

//Druckt 10.0
print(grass.hardness);
```

#### Schaden

Der Schaden für unbeschädigte Gegenstände beträgt 0.

```zenscript
val pick = <minecraft:diamond_pickaxe>;

//druckt 1561
print(pick. axSchaden);

//legt den maximalen Schaden der Diamantspitzhacke auf 256
pick.maxDamage = 256;

//druckt 256
Druck(pick. axSchaden);



//Schaden spielt keine Rolle, verwendet in Rezepten
<minecraft:iron_pickaxe>.anyDamage();

//Mit dem angegebenen Schaden
<minecraft:iron_pickaxe>.withSchaden(122);
```

#### Markierung

Das Tag ist ein [IData](/Vanilla/Data/IData/) Objekt.  
Wenn das Element kein Tag enthält, wird es ein leeres Tag zurückgeben, nie null.

```zenscript
//erzeugt Apfel mit dem angegebenen Tag
//Entfernt vorhandene Tags
<minecraft:apple>. ithTag({Unbreakable: 1});

//erzeugt Apfel mit einem emtpy tag
<minecraft:apple>. ithEmptyTag();

//entfernt ein Tag mit seinem Namen
Element. emoveTag("tagName");

//das existierende Tag aktualisieren
//Wenn der Tag kein existierendes Tag überschreibt, bleibt er konstant.
item.updateTag({Unbreakable: 1});
```

#### Flüssig

Gibt die Flüssigkeit zurück, die in einem einzelnen Gegenstand enthalten ist (wenn mehrfach) oder null wenn der Gegenstand kein Container ist.  
Gibt einen [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Objekt oder Null zurück.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Betrag

Wie viele Äpfel gibt es?

```zenscript
<minecraft:apple>. nyAmount();

//1 Apple
val aple = <minecraft:apple>;

//2 Äpfel
val moreÄpfel = Apfel * 2;

//3 Äpfel
val evenMoreÄpfel = <minecraft:apple> * 3;
```

#### Gewicht

Gibt einen [gewichteten Gegenstandstapel](/Vanilla/Items/WeightedItemStack/) mit dem angegebenen Prozentsatz zurück.

```zenscript
val apple = <minecraft:apple>;

//Erstellt einen gewichteten Artikel mit 100 Prozent Chance
var applePercentage = Apfel % 100;

//Ist das selbe wie das oben
applePercentage = apple. acht(1.0);
```

#### Ores

Gibt eine Liste von [IOreDictEinträgen](/Vanilla/OreDict/IOreDictEntry/) zurück, die sich auf dieses Element beziehen.

```zenscript
<minecraft:apple>.ores;
```

#### Casting auf IBlock

Du kannst einen IItemStack auf einen [IBlock](/Vanilla/Blocks/IBlock/)werfen, solange Sie sich auf einen Block beziehen, sonst werft der Zaubernde eine Ausnahme.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> als crafttweaker.block.IBlock;
```

Sie können auch testen, ob ein IItemStack einen ItemBlock enthält und somit konvertiert werden kann:

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Lebensmitteleigenschaften

Sie können überprüfen, ob ein IItemStack ein Lebensmittelartikel ist und welche Lebensmitteleigenschaften es hat.  
Kann nicht für jeden modifizierten Lebensmittelgegenstand funktionieren!

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```