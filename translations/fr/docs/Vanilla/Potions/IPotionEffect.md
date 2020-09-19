# format@@0 IPotionEffect

Un IPotionEffect est une [IPotion](/Vanilla/Potions/IPotion/) qui a également une durée et un paramètre d'amplificateur (force).  
Vous pouvez les obtenir à partir d'un objet [IPotion](/Vanilla/Potions/IPotion/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                                        | Type de texte                                    |
| ------------------------------------------------ | ------------------------------------------------ |
| durée                                            | Indice                                           |
| potion                                           | [format@@0 IPotion](/Vanilla/Potions/IPotion/)   |
| ne montre pas les particules                     | booléen                                          |
| amplificateur                                    | Indice                                           |
| Éléments curatifs                                | Liste <[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                                       | chaîne de caractères                             |
| isAmbient                                        | booléen                                          |
| format@@0 isPotionDurationMax (also a ZenSetter) | booléen                                          |

## Méthodes Zen

### Est un élément un élément curatif

Utilise un [IItemStack](/Vanilla/Items/IItemStack/).  
Renvoie un booléen

```zenscript
isCurativeItem(IItemStack item);
```

### Effectuer l'effet sur une entité

Utilise une [IEntity](/Vanilla/Entities/IEntity/) ou l'une de ses sous-classes (par exemple [IPlayer](/Vanilla/Players/IPlayer/)).  
Renvoie vide (rien).

```zenscript
performEffect(IEntity Entity);
```