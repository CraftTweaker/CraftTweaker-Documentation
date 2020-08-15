# Emplacement d'Équipement IEntité

Un emplacement d'équipement IEntitySlot est un emplacement dans l'inventaire d'un joueur. Cela pourrait par exemple être la main principale ou l'un des emplacements d'armure.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityEquipmentSlot ;`

## ZenGetters/ZenMethods

| Récupération | Type de texte        |
| ------------ | -------------------- |
| index        | Indice               |
| slotIndex    | Indice               |
| Nom          | chaîne de caractères |

### Comparer

Vous pouvez vérifier si deux objets IEntityEquipmentSlot sont égaux :  
Renvoie un bool.

```zenscript
slotOne == slotTwo;
```

## Énumérations

L'Interface EntityEquipmentSlot a 6 méthodes statiques, renvoyant chacun l'objet IEntityEquipmentSlot donné.

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```