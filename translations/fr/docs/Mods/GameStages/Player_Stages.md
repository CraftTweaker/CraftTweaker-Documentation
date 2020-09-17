# Etapes du joueur

L'API GameStages étend la fonctionnalité [IPlayer](/Vanilla/Players/IPlayer/) de CraftTweaker pour vous permettre de vérifier et de modifier les étapes d'un joueur.

## Appeler les méthodes

Comme il s'agit d'un [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), vous pouvez simplement appeler les méthodes sur n'importe quel objet [IPlayer](/Vanilla/Players/IPlayer/) ou n'importe lequel de ses sous-types.

## Méthodes

### Vérifier les jeux de hasard

Les méthodes retournent des booléens.

```zenscript
// Vérifie si le joueur a la phase passée.
//player.hasGameStage(String stage);
player.hasGameStage("one");



// vérifie si le joueur a une des étapes passées. Ils en ont seulement besoin.
//player.hasAnyGameStages(String... stages);
player.hasAnyGameStages("une", "deux");



// vérifie si le joueur a toutes les étapes passées.
//player.hasAllGameStages (String... étapes);
player.hasAllGameStages ("une", "deux");
```

### Ajouter ou supprimer un jeu

Les méthodes retournent nuls (rien).

```zenscript
// Débloque une étape pour un joueur.
//addGameStage(String stage);
addGameStage(String stage);


// Verrouille une étape pour un joueur.
//removeGameStage(String stage);
removeGameStage(String stage);
```