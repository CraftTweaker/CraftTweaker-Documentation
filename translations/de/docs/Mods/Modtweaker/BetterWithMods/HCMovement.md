# HKW Bewegung

HCMovement wirkt auf die Geschwindigkeit, mit der der Spieler sich bewegen kann, während er bestimmte Blöcke oder innerhalb eines bestimmten Blocks angreift. Zum Beispiel gehen Sie standardmäßig langsamer auf Gras, aber schneller auf Stein.

Wert ist eine Dezimalzahl zwischen 0 und 2, wobei 1 die normale Geschwindigkeit ohne HCMovement ist, weniger als 1 ist langsamer, größer als 1 ist schneller.

NUR HCMovement akzeptiert Blöcke als Eingänge.

```zenscript
mods.betterwithmods.Movement.set(IItemStack stack, float value);

```