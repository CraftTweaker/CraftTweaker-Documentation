# Représentation des poulets

La Représentation du poulet est un modèle de ce que votre poulet fera.  
Par défaut, il n'existera et pondera que l'oeuf que vous lui avez donné en tant que paramètre initial.  
Vous pouvez modifier ce comportement pour permettre de meilleurs poulets en modifiant les propriétés données.

## Importation de la classe

Vous voulez importer la classe? Voici:

```zenscript
Importer mods.contenttweaker.Chicken;
```

## Enregistrement du poulet

Une fois que vous avez défini votre représentation de poulet pour être ce que vous voulez être, la partie la plus importante est de l'enregistrer.  
Faites attention, car toute modification apportée à ce modèle après l'inscription prendra toujours effet, vous devriez donc créer une nouvelle représentation du poulet pour chaque poulet que vous voulez avoir.

## Propriétés Zen

Vous pouvez modifier ou récupérer la valeur actuelle des propriétés soit par un objet `. ame = newValue` ou en utilisant les méthodes `object.setName(newValue);`

Exemple:

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| Nom                        | Type de type                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| Nom                        | chaîne de caractères                                                                             |
| layItem                    | [IItemStack](/Vanilla/Items/IItemStack/)                                                         |
| format@@0 dropItem         | [IItemStack](/Vanilla/Items/IItemStack/)                                                         |
| Couleur de fond            | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                       |
| foregroundColor            | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                       |
| Localisation de la texture | [format@@0 CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| type d'apparition          | chaîne de caractères                                                                             |
| format@@0 layCoefficient   | flottant                                                                                         |
| parentOne                  | [format@@0 CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo                  | [format@@0 CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |