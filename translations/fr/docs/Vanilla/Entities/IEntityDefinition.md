# Définition IEntity

Cela semble effrayant, alors que cela signifie-t-il? Fondamentalement, c'est une référence à une entité enregistrée dans le jeu, donc c'est une référence, disons un mob dans le jeu.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityDefinition;`

## Appel d'un objet IEntityDefinition

```zenscript
//Ces retournent un IEntityDefinition Object
test val = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## Fonctions

So, this is where it gets interesting: What can we do with it, now that we created that thing?

### id

Retourne l'ID en tant que chaîne de caractères

```zenscript
//renvoie "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### Nom

Retourne le nom en tant que chaîne de caractères

```zenscript
//renvoie "Sheep"
<entity:minecraft:sheep>.name;
```

### créer une entité

La première méthode ne crée qu'une entité à l'emplacement donné.  
La seconde l'appelle aussi.

```zenscript
<entity:minecraft:sheep>.createEntity(monde);
<entity:minecraft:sheep>.spawnEntity(monde, blockPos);
```

`world` est un objet [IWorld](/Vanilla/World/IWorld/) .  
`blockPos` est un objet [IBlockPos](/Vanilla/World/IBlockPos/).

## Largues

Nous pouvons même ajouter et/ou supprimer des gouttes de mob, n'est-ce pas génial ?

### Ajouter un Drop normal

Cela ajoute un drop normal, un drop qui peut se produire chaque fois que le mob est tué par quelque moyen que ce soit.

```zenscript
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`élément` est l'élément à ajouter en tant que drop et un [IItemStack](/Vanilla/Items/IItemStack/) ou un [WeightedItemStack](/Vanilla/Items/WeightedItemStack/).  
`min` est le montant minimum qui est abandonné et un Integer. Ceci est optionnel.  
`max` est le montant maximum qui est supprimé et un nombre entier. Ceci est optionnel.  
`chance` est la chance d'abandonner. C'est facultatif. Pas nécessaire si vous utilisez un élément [weightedItemStack](/Vanilla/Items/WeightedItemStack/) à la place comme élément ``

### Ajouter une liste de joueurs uniquement

Identique aux chutes normales, mais seulement si l'entité a été tuée par un joueur.

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Ajouter une fonction de drop

Une fonction drop est appelée chaque fois que l'entité associée est tuée. Vous pouvez l'utiliser si vous avez besoin de vérifier les conditions avant de lâcher quelque chose, comme si vous ne pouviez que dans un certain biome et quelque chose.  
Vous aurez besoin d'une [fonction IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10 ;
});
```

### Retirer

Cela supprime un drop.

```zenscript
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`item` est l'élément à supprimer d'être un drop et un [IItemStack](/Vanilla/Items/IItemStack/).

### Vider les gouttes

Cela supprime toutes les gouttes.

```zenscript
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### Obtenir

Cela retourne tous les drops qui ont été ajoutés via CT en tant que liste des objets [IEntityDrop](/Vanilla/Entities/IEntityDrop/).

```zenscript
val entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```