# IEnchantmentDefinition

Eine IEnchantmentDefinition ist die eigentliche Verzauberung, sie setzt kein Level ein, aber Sie können diese verwenden, um Informationen über die Verzauberung zu erhalten.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.enchantments.IEnchantmentDefinition;`

## Ein solches Objekt wird abgerufen

Sie können ein solches Objekt vom [Verzauberungs-Bracket-Handler](/Vanilla/Brackets/Bracket_Enchantment/) oder von einem [IEnchantment](/Vanilla/Enchantments/IEnchantment/) Objekt abrufen.

## ZenGetter/ZenSetter

| ZenGetter             | ZenSetter | Type    |
| --------------------- | --------- | ------- |
| id                    |           | int     |
| name                  | name      | string  |
| maximaler Level       |           | int     |
| minLevel              |           | int     |
| isAllowedOnBooks      |           | boolean |
| isTreasureEnchantment |           | boolean |
| isCurse               |           | boolean |
| registryName          |           | string  |

## ZenMethoden

### Kanon anwenden

Prüft, ob die Verzauberung auf den Gegenstand gesetzt werden kann.  
Die erste Methode überprüft im Allgemeinen, die zweite überprüft, ob der Gegenstand mit Hilfe der Verzauberungstabelle verzaubert werden kann.  
Beide geben einen Bool zurück und benötigen einen [IItemStack](/Vanilla/Items/IItemStack/) als Eingabeparameter.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability

Überprüft, welche Verzauberung der Gegenstand auf der angegebenen Ebene haben soll.  
Beide Methoden geben eine Inte zurück und nehmen die Stufe der Verzauberung als Int Parameter.

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### Übersetzter Name

Gibt den übersetzten Namen (z.B. "smite IV") zurück.  
Gibt einen String zurück und benötigt die Stufe der Verzauberung als Int-Parameter.  
identisch mit [IEnchantments](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### verzaubern

Wenn du einer Verzauberungsdefinition ein Level gibst, kannst du eine [Verzauberung](/Vanilla/Enchantments/IEnchantment/) daraus machen:

```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### Vergleiche mit anderen IEnchantmentDefinition-Objekten

Sie können den `==` Operator verwenden, um zu überprüfen, ob zwei Verzauberungen identisch sind.  
Das bedeutet, wenn sie die gleiche ID haben.

```zenscript
if(enchA == enchB)
    drucken ("Same!");
```

## Beispiel

```zenscript
import crafttweaker.enchantments.IEnchantmentDefinition;
import crafttweaker.data. Data;

val array as IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

var map as IData = {};

for ench in array {
    map += ench. akeEnchantment(3).makeTag();
}

print(map.asString());


recipes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```