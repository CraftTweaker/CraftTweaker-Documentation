# Materialgenerator

Mit diesem Paket können Sie Materialien erstellen, mit denen Sie Werkzeuge erstellen können!

## Diese Klasse importieren

Möglicherweise ist es erforderlich, dass Sie die Klasse importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere mods.contenttweaker.tconstruct.MaterialBuilder;`

## Material erstellen

Zuallererst musst du einen Materialbauer erstellen.  
Dies kann mit der statischen Erstellungsmethode gemacht werden.

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String Identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

Denken Sie daran, dass Sie das Material nach Ihren Änderungen registrieren müssen.  
Dies kann mit der `Registrierungsmethode` geschehen, die eine [Materialvertretung](/Mods/ContentTweaker/Tinkers_Construct/Material/) des neuen Materials zurückgibt.

```zenscript
myMat.register();
```

## Eigenschaften

Sie können diese Eigenschaften mithilfe von `myMaterial.name` festlegen und erhalten.

| Objekt                  | Type                                               | Zusätzliche Notizen                                                            |
| ----------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------ |
| identifier              | string                                             | Eindeutiger Name                                                               |
| farben                  | int                                                |                                                                                |
| hidden                  | bool                                               |                                                                                |
| flüssig                 | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)     | Schmelzausgabe                                                                 |
| herstellbar             | bool                                               | Kann im Bauteilbauer erstellt werden                                           |
| abnehmbar               | bool                                               | Kann mit Casts erstellt werden. Erfordert Flüssigkeit, um gesetzt zu werden!   |
| repräsentatives Element | [IItemStack](/Vanilla/Items/IItemStack/)           | Artikel im Handbuch der Köpfe anzeigen                                         |
| repräsentatives Ore     | [IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/) | Wird angezeigt, wenn repräsentatives Element null ist                          |
| scherbe                 | [IItemStack](/Vanilla/Items/IItemStack/)           | Wird anstelle des Splittergegenstandes des Zwergers im Bauteilbauer verwendet. |
| localizedName           | string                                             | Der angezeigte Name                                                            |

## Berechnete Eigenschaften

### ItemLocalizer

Mit dieser Funktion können Sie die Materialnamen berechnen, wenn Sie dies benötigen.  
Verwendet eine [Materialvertretung](/Mods/ContentTweaker/Tinkers_Construct/Material/) dieses Materials und den Namen des Werkzeugs, das umbenannt wird (z.B. "Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Materialartikel hinzufügen

Wenn du das angegebene Item im Bauteilbauer verwendest können Sie einstellen, wie viele Materialpunkte vergeben werden oder wie viel der Gegenstand reparieren wird.

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched);
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `Gegenstand` ist der Gegenstand, auf den man zutrifft. Sie können [Artikelbedingungen](/Vanilla/Items/Item_Conditions/) verwenden, aber keine Transformatoren. 
- `Der benötigte Betrag` ist die Anzahl der Gegenstände, gegen die abgestimmt wird. Sie können sie über alle Slots der Toolforge aufteilen, so dass Sie auch über 64 hinausgehen können. Im zweiten Beispiel oben benötigen Sie 4 Eisenblöcke pro Zuschlag. Standard ist 1.
- `Betrag übereinstimmend` ist die Menge an Materialpunkten, die pro `Betrag hinzugefügt werden muss`. Im zweiten Beispiel über vier Eisenblöcke gibt es zwei Materialpunkte. Standardmäßig 144 (ein ingot/ein Materialwert).
- Wenn du die `-Entfernungsfunktion`verwendest, werden alle Eigenschaftsbestandteile, die mit dem Gegenstand übereinstimmen, entfernt.

## Materialeigenschaften

Du kannst dem Material ein Merkmal hinzufügen.  
Alle Gegenstände aus diesem Material werden dann dieses Merkmal haben.  
Verwendet einen String mit der Kennung des Merkmals, und eine optionale `Abhängigkeit` Zeichenkette, die Ihnen mitteilt, welche Objekttypen vom Merkmal betroffen sein sollen.  
Alternativ können Sie eine [Merkmalsrepräsentation verwenden](/Mods/ContentTweaker/Tinkers_Construct/Trait/), aber das funktioniert nur, wenn das Merkmal bereits initialisiert ist, wenn CoT läuft (so wahrscheinlich nur für benutzerdefinierte Merkmale). Mögliche Werte für `Abhängigkeit` sind:

- `null` (Standard) → Alle Elemente, es sei denn, dieser Dep hat bereits andere Merkmale.
- `"Kopf"`
- `"Handle"`
- `"extra"`
- `"Bogen"`
- `"Bogen "`
- `"Projektil"`
- `"Welle"`
- `"flüchtig"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

Du kannst auch Materialeigenschaften entfernen (besonders nützlich bei Stapelmaterialien).  
Sie entfernen sie mit ihrer Identifikator-Zeichenkette und einer optionalen Abhängigkeit.  
Wenn Sie die Abhängigkeit weglassen oder `null` verwenden, werden alle Merkmale mit diesem Identifikator entfernt.

```zenscript
//myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Materialstatistik

Damit TiCon deine Materialien bauen kann, muss es die Materialwerte kennen.  
Nur Werkzeugtypen, deren Statistik hinzugefügt wurde, werden erstellt!

```zenscript
<br /><br />myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackDamage, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat.removeHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat.removeBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats();
```

## Beispiel

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("blasting", "bowstring");
testMat. ddMaterialTrait("blasting", "head");

//null (oder gar nicht angeben) bedeutet, dass dies ein Standardmerkmal ist.
//Standardmerkmale werden nur abgefragt, wenn zu diesem Materialtyp keine weiteren Merkmale hinzugefügt werden.
//In diesem Fall wird das dicke Merkmal nur auf Werkzeugstangen angewendet, da Bowstrings und Köpfe bereits andere Merkmale haben.
testMat.addMaterialTrait("dense", null);

//Faulty, sollte Fehler machen, wenn auch nur während des init, da dann die Zeichenketten überprüft werden.
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```