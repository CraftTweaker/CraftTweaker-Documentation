# Escaliers BlockBuilderStairs

Un constructeur de blocs spécial qui vous permet de créer des escaliers. <p> Les escaliers auront non pas une mais trois textures que vous aurez besoin de fournir : Une pour le sommet, une pour le bas et une pour les côtés. Par défaut, ces textures utiliseront votre blockname comme nom, suffixé par `_top`, `_bottom` ou `_sides`. Comme pour la plupart des choses ici, les images sont générées par défaut pour vous.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 mods.contenttweaker.block.stairs.BlockBuilderStairs
```

## Interfaces implémentées
BlockBuilderStairs implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Méthodes
### construire

Instructions de CoT pour construire ce que ce constructeur est censé construire.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Paramètre                    | Type de texte        | Libellé                                       |
| ---------------------------- | -------------------- | --------------------------------------------- |
| Localisation de la ressource | Chaîne de caractères | Le chemin de la ressource pour donner ce bloc |


### format@@0 withBttomTexture

Permet de remplacer le chemin de la texture que le bas doit utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Paramètre      | Type de texte                                                                              | Libellé                           |
| -------------- | ------------------------------------------------------------------------------------------ | --------------------------------- |
| Texture du bas | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture à utiliser pour le bas |



Permet de remplacer le chemin de la texture que le bas doit utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut. Utilise une fonction qui prend le nom du bloc comme entrée et retourne la texture de fin pour lui.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Paramètre      | Type de texte                                                                                                                                                                                           | Libellé                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Texture du bas | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La fonction à utiliser |


### format@@0 withSidesTexture

Permet de remplacer le chemin de la texture que les côtés doivent utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Paramètre    | Type de texte                                                                              | Libellé                              |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| sidesTexture | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture à utiliser pour les côtés |



Permet de remplacer le chemin de la texture que les côtés doivent utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut. Utilise une fonction qui prend le nom du bloc comme entrée et retourne la texture de fin pour lui.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Paramètre    | Type de texte                                                                                                                                                                                           | Libellé                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La fonction à utiliser |


### format@@0 withtopTexture

Permet de surcharger le chemin de la texture que le côté supérieur devrait utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Paramètre    | Type de texte                                                                              | Libellé                              |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| Haut-Texture | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture à utiliser pour le dessus |



Permet de surcharger le chemin de la texture que le côté supérieur devrait utiliser. Si l'espace de noms de cette texture est dans l'espace de noms de CoT ou l'un de ses addons (qui le supportent), alors l'image sera créée par défaut. Utilise une fonction qui prend le nom du bloc comme entrée et retourne la texture de fin pour lui.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Paramètre    | Type de texte                                                                                                                                                                                           | Libellé                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Haut-Texture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La fonction à utiliser |



