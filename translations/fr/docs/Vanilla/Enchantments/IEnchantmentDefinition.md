# Définition de l'enchantement

Un IEnchantmentDefinition est l'enchantement réel, il ne possède pas de niveau, mais vous pouvez l'utiliser pour récupérer des informations sur l'enchantement.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.enchantments.IEnchantmentDefinition;`

## Récupération d'un tel objet

Vous pouvez récupérer un tel objet dans le gestionnaire de l'éventail d'enchantement [](/Vanilla/Brackets/Bracket_Enchantment/) ou dans un objet [IEnchantment](/Vanilla/Enchantments/IEnchantment/).

## ZenGetters/ZenSetters

| ZenGetter                   | ZenSetter | Type de texte        |
| --------------------------- | --------- | -------------------- |
| id                          |           | Indice               |
| Nom                         | Nom       | chaîne de caractères |
| Niveaumax                   |           | Indice               |
| minLevel                    |           | Indice               |
| est autorisé sur les livres |           | boolean              |
| Enchantement de trésors     |           | boolean              |
| isCurse                     |           | boolean              |
| registryName                |           | chaîne de caractères |

## Méthodes Zen

### Canapé

Vérifie si l'enchantement peut être placé sur l'objet.  
La première méthode vérifie en général, la seconde vérifie si l'objet peut être enchanté à cet enchantement en utilisant la table d'enchantement.  
Les deux retournent un bool et nécessitent une [IItemStack](/Vanilla/Items/IItemStack/) comme paramètre d'entrée.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### devenez enchantable

Vérifie quel enchantement l'objet doit avoir pour l'enchantement au niveau donné.  
Les deux méthodes retournent une int et prennent le niveau de l'enchantement comme paramètre intre.

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### Nom traduit

Retourne le nom traduit (par exemple "smite IV").  
Renvoie une chaîne de caractères et nécessite le niveau de l'enchantement en tant que paramètre int.  
La même chose que [IEnchantment's](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter !

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### faire de l'enchantement

En donnant un niveau EnchantmentDefinition, vous pouvez en faire un [IEnchantment](/Vanilla/Enchantments/IEnchantment/):

```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### Comparer avec d'autres objets IEnchantmentDefinition

Vous pouvez utiliser l'opérateur `==` pour vérifier si deux enchantements sont identiques.  
Cela signifie qu'ils ont le même identifiant.

```zenscript
if(enchA == enchB)
    print("Même !");
```

## Exemple

```zenscript
importez crafttweaker.enchantments.IEnchantmentDefinition;
importez crafttweaker.data. Données :

tableau val comme IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

var map as IData = {};

for ench in array {
    map += ench. akeEnchantment(3).makeTag();
}

print(map.asString());


recettes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```