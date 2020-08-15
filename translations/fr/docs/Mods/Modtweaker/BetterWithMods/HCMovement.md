# format@@0 HCMovement

HCMovement affecte la vitesse à laquelle le Joueur peut se déplacer sur ou à l'intérieur de certains blocs. Par exemple, par défaut, vous marchez plus lentement sur l'herbe mais plus rapidement sur la pierre.

La valeur est un nombre décimal entre 0 et 2, où 1 est la vitesse normale sans HCMovement, moins de 1 est plus lent, plus de 1 est plus rapide.

HCMovement accepte SEULEMENT les blocs comme entrées.

```zenscript
mods.betterwithmods.Movement.set(IItemStack stack, valeur flottante);

```