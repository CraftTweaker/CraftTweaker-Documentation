# Definizione IEnchantmentDefinizione

Una definizione di Incantesimo è l'Incantesimo attuale, non posa un livello, ma puoi usarlo per recuperare informazioni sull'Incantesimo.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## Recupero di un tale oggetto

È possibile recuperare un tale oggetto dal gestore [Enchantment Bracket](/Vanilla/Brackets/Bracket_Enchantment/) o da un oggetto [IEnchantment](/Vanilla/Enchantments/IEnchantment/).

## ZenGetters/ZenSetters

| ZenGetter             | ZenSetter | Tipo    |
| --------------------- | --------- | ------- |
| id                    |           | int     |
| nome                  | nome      | stringa |
| maxLevel              |           | int     |
| minLevel              |           | int     |
| isAllowedOnBooks      |           | boolean |
| isTreasureEnchantment |           | boolean |
| isCurse               |           | boolean |
| registryName          |           | stringa |

## ZenMethods

### CanApplica

Controlla se l'incantesimo può essere messo sull'oggetto.  
Il primo metodo controlla in generale, il secondo controlla se l'oggetto può essere incantato a questo incantesimo usando il tavolo dell'incantesimo.  
Entrambi restituiscono un bool e richiedono un [IItemStack](/Vanilla/Items/IItemStack/) come parametro di input.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability

Controlla quale incantevolezza l'oggetto deve avere per l'Incantesimo al livello specificato.  
Entrambi i metodi restituiscono un int e prendono il livello dell'incantesimo come parametro int.

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### Nome Tradotto

Restituisce il nome tradotto (es. "smite IV").  
Restituisce una stringa e richiede il livello dell'incantesimo come parametro int.  
Fa come [IEnchantment](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### crea Incantesimo

Dando a EnchantmentDefinition un livello puoi fare un [IEnchantment](/Vanilla/Enchantments/IEnchantment/) di esso:

```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### Confronta con altri oggetti IEnchantmentDefinition

È possibile utilizzare l'operatore `==` per verificare se due incantesimi sono uguali.  
Questo significa che se hanno lo stesso id.

```zenscript
if(enchA == enchB)
    print("Same!");
```

## Esempio

```zenscript
import crafttweaker.enchantments.IEnchantmentDefinizione;
import crafttweaker.data. Data;

val array as IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

var map as IData = {};

for ench in array {
    map += ench. akeEnchantment(3).makeTag();
}

print(map.asString());


recipes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```