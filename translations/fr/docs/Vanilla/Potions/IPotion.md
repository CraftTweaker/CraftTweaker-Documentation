# format@@0 IPotion

Un objet IPotion fait référence à une potion dans le jeu.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.potions.IPotion ;`

## Obtention d'un objet IPotion

Vous pouvez obtenir un tel objet en utilisant le gestionnaire de potions [](/Vanilla/Brackets/Bracket_Potion/)

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

Actuellement, tout ce que vous pouvez faire avec les potions est de récupérer des informations sur elles.  
Exemple `<potion:minecraft:strength>.name`

| Zengetter                  | Que fait-il                                                    | Type de retour                                   |
| -------------------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| Nom                        | Retourne le nom interne de la potion                           | chaîne de caractères                             |
| badEffect                  | Retourne si l'effet de potion est mauvais                      | booléen                                          |
| Couleur du liquide         | Retourne la couleur de la potion                               | Indice                                           |
| Couleur de liquidité       | Renvoie la couleur de la potion                                | Indice                                           |
| Éléments curatifs          | Renvoie une liste de tous les éléments curatifs pour la potion | Liste <[IItemStack](/Vanilla/Items/IItemStack/)> |
| Il y a une icône de statut | Retourne si la potion a une icône de statut                    | booléen                                          |
| bénéficiaire               | Renvoie si la potion est bénéfique                             | booléen                                          |
| est instantané             | Retourne si la potion est instantanée                          | booléen                                          |

## Méthodes Zen

### Rendre l'effet de potion

Un [IPotionEffect](/Vanilla/Potions/IPotionEffect/) est une Potion qui a une durée et un amplificateur. Vous pouvez utiliser ces deux méthodes pour en obtenir une à partir d'une IPotion :  
Comme on pourrait le deviner, les deux retournent un objet [IPotionEffect](/Vanilla/Potions/IPotionEffect/).

```zenscript
pot.makePotionEffect(int duration, int amplifier);
pot.makePotionEffect(int duration, int amplifier, boolean ambientEffect, boolean particlesShown);
```