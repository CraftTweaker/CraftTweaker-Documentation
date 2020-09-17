# IConteneur

Un IContainer est un conteneur d'objet qui peut contenir plusieurs itemStacks comme un coffre.

## ZenGetter/Setter

- `container.containerSize` retourne la taille du conteneur comme int
- `container.getStack(int index)` retourne la [IItemStack](/Vanilla/Items/IItemStack/) à l'index donné.
- `container.setStack(int index, IItemStack stack)` définit la [IItemStack](/Vanilla/Items/IItemStack/) à l'index donné.
- `container.asString()` `conteneur sous forme de chaîne` exécute `toString` sur l'objet conteneur.

## Itérable<IItemStack\>

Un IContainer est un [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
Cela signifie que vous pouvez utiliser une boucle pour le conteneur pour itérer sur ses [IItemStacks](/Vanilla/Items/IItemStack/).