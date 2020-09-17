# IEnchantement

Un IEnchantement est essentiellement un [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) et un niveau d'enchantement.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.enchantments.IEnchantement ;`

## ZenGetters/ZenSetters

| ZenGetter      | ZenSetter      | Type de texte                                                                 |
| -------------- | -------------- | ----------------------------------------------------------------------------- |
| Définition     |                | [Définition de l'enchantement](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| niveau         |                | Indice                                                                        |
| nomdeaffichage | nomdeaffichage | chaîne de caractères                                                          |

## Méthodes Zen

### Récupérer l'enchantement en NBT

Vous pouvez obtenir le NBT-Tag de l'enchantement.  
Vous pouvez le lancer en tant que [IData](/Vanilla/Data/IData/) ou utiliser la méthode :

```zenscript
ench.makeTag();
ench as crafttweaker.data.IData;
```