# IItemUtils

Das ItemUtils Interface bietet verschiedene Artikelwerkzeuge.  
Es kann mit den `Elementen` Schlüsselwörtern aufgerufen werden.

## Tränke erstellen

Die createTränke Funktion erlaubt dir benutzerdefinierte Tränke zu erstellen.  
Gibt den Trank zurück wie [IItemStack](/Vanilla/Items/IItemStack/).  
Da der Parameter für diese Funktion ein vararg ist, können Sie entweder ein Object[][] oder viele Object[].  
In beiden Fällen muss jedes Objekt [] enthalten

1. Ein [ITrank](/Vanilla/Potions/IPotion/)
2. Eine Int, die den Effekt-Verstärker/-stärke beschreibt
3. Eine Int, die die Dauer des Effekts beschreibt. 

Wenn ein Objekt [] nicht in dieser Reihenfolge ist oder nicht, wird es ignoriert.

```zenscript
//createPotion(Object[]...);
//createPotion([effect,strength,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strength,duration],[effect2, strength2,duration2],...]);
val potion = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## Items nach Name erhalten

Diese beiden Funktionen geben einen [IItemStack](/Vanilla/Items/IItemStack/)[] zurück, der alle passenden Elemente enthält.  
Die ersten Prüfungen der Registry-Namen der Elemente, die 2. verwendet die unlokalisierten Namen.

```zenscript
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // alle Dinge, die Schwert im Namen
itemUtils.getItemsByRegexRegistryName(". thermal.*"); // alle thermischen Erweiterung/Foundation/Dynamics Items

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // rosa Ding!! <3
```

## Imitate den Item Klammerhandler

Diese Methode entspricht dem [Item Bracket Handler](/Vanilla/Brackets/Bracket_Item/).  
Im Gegensatz zum BH müssen Sie den Meta als optionalen Parameter angeben.  
Wenn Sie die Platzhalter-Meta verwenden möchten, verwenden Sie `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## Spawn Ei erstellen

Die createSpawnEgg Funktion erlaubt dir, benutzerdefinierte Mod Spawn Eier zu erstellen.  
Das customNBT ist OPTIONAL und kann das Entitäts-Tag überschreiben.  
Gibt den Spawn eff als [IItemStack](/Vanilla/Items/IItemStack/) zurück.

```zenscript
//createSpawnEgg(entity, @optional customNBT)
//NBT überschreibt die Entität (dies erzeugt ein creeper egg!)
val egg = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 as byte,PersistenceRequired:1 as byte}});
```